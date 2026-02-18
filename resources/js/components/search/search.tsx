import { cn } from '@/lib/utils';
import { useState, useEffect, useRef, useCallback } from 'react';
import { router, usePage } from '@inertiajs/react';

interface SearchResult {
    id: number;
    word: string;
    slug: string;
    definition: string;
    synonyms: string[];
    antonyms: string[];
    search_count: number;
}

interface SearchResponse {
    data: SearchResult[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    has_more: boolean;
    next_page_url?: string;
    prev_page_url?: string;
    meta: {
        query: string;
        search_time: number;
        cache_ttl: number;
    };
}

interface Props {
    className?: string;
    placeholder?: string;
}

function Search({
    className,
    placeholder = 'Search for synonyms and antonyms',
}: Props) {
    
   
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const {app_url} = usePage().props;

    // Real API search function
    const apiSearch = async (searchQuery: string, page: number = 1): Promise<SearchResponse> => {
        const params = new URLSearchParams({
            q: searchQuery,
            page: page.toString(),
            per_page: '30',
            sort: 'popularity',
            order: 'desc',
        });

        const url = `/search?${params}`;
        console.log('Searching URL:', url); // Debug log
        
        const response = await fetch(url);
        
        if (!response.ok) {
            console.error('Search failed:', response.status, response.statusText);
            throw new Error('Search failed');
        }

        const data = await response.json();
        console.log('Search response:', data); // Debug log
        
        return data;
    };

    // Track word click and update search count
    const trackWordClick = async (wordId: number, word: string, slug: string) => {
        try {
            // Track the click to update search_count
            await fetch(`${app_url}/search/track-click/${wordId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
                body: JSON.stringify({ word }),
            });

            // Open dummy URL with word slug
            router.visit(route('word', slug));
            // window.open(`${app_url}/word/${slug}`, '_blank');
        } catch (error) {
            console.error('Failed to track word click:', error);
            // Still open the URL even if tracking fails
            window.open(`${app_url}/results/${slug}`, '_blank');
        }
    };

    // Handle search with debouncing
    useEffect(() => {
        console.log('Search effect triggered with query:', query); // Debug log
        
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
        }

        if (query.trim()) {
            console.log('Starting search for:', query); // Debug log
            setIsLoading(true);
            setCurrentPage(1);
            searchTimeoutRef.current = setTimeout(async () => {
                try {
                    const response = await apiSearch(query, 1);
                    console.log('Setting search results:', response.data); // Debug log

                    setSearchResults(response.data);
                    setShowResults(true);
                    setCurrentPage(response.current_page);
                    setLastPage(response.last_page);
                    setHasMore(response.has_more);
                } catch (error) {
                    console.error('Search error:', error);
                    setSearchResults([]);
                    setShowResults(false);
                    setHasMore(false);
                } finally {
                    setIsLoading(false);
                }
            }, 300);
        } else {
            console.log('Clearing search results'); // Debug log
            setSearchResults([]);
            setShowResults(false);
            setIsLoading(false);
            setHasMore(false);
            setCurrentPage(1);
        }

        return () => {
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
            }
        };
    }, [query]);

    // Load more results
    const loadMoreResults = useCallback(async () => {
        if (isLoadingMore || !hasMore || !query.trim()) return;
        
        setIsLoadingMore(true);
        try {
            const nextPage = currentPage + 1;
            const response = await apiSearch(query, nextPage);
            
            setSearchResults(prev => [...prev, ...response.data]);
            setCurrentPage(response.current_page);
            setHasMore(response.has_more);
        } catch (error) {
            console.error('Load more error:', error);
        } finally {
            setIsLoadingMore(false);
        }
    }, [isLoadingMore, hasMore, query, currentPage]);

    // Setup intersection observer for infinite scroll
    useEffect(() => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && hasMore && !isLoadingMore) {
                    loadMoreResults();
                }
            },
            {
                threshold: 0.1,
                root: dropdownRef.current,
            }
        );

        if (loadMoreRef.current) {
            observerRef.current.observe(loadMoreRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [loadMoreResults, hasMore, isLoadingMore]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleInputFocus = () => {
        setIsOpen(true);
    };

    const handleInputBlur = () => {
        // Delay closing to allow clicking on results
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    const handleWordClick = (word: SearchResult) => {
        trackWordClick(word.id, word.word, word.slug);
    };

    return (
        <div
            className={cn(
                'flex flex-col gap-3 rounded-lg sm:flex-row lg:p-4 relative',
                className,
            )}
        >
            <div className="flex justify-center gap-3">
                <button className="cursor-pointer rounded-lg bg-btn-secondary px-6 py-3.5 font-arial text-sm font-normal text-text-white lg:text-base">
                    Dictionary
                </button>
                <button className="cursor-pointer rounded-lg bg-btn-primary px-6 py-3.5 font-arial text-sm font-normal text-text-white lg:text-base">
                    Thesaurus
                </button>
            </div>
            <div className="relative flex-1">
                <svg
                    className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 transform text-text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
            
            {/* Search Results Dropdown */}
            <div
                ref={dropdownRef}
                className={cn(
                    'absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 mt-2 transition-all duration-300 ease-in-out origin-top',
                    isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible',
                    'max-h-96 overflow-y-auto'
                )}
            >
                {isLoading && (
                    <div className="p-4 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                        <span className="ml-2 text-gray-600">Searching...</span>
                    </div>
                )}
                
                {!isLoading && showResults && searchResults.length > 0 && (
                    <div className="p-4">
                        <div className="text-sm text-gray-500 mb-3 sticky top-0 bg-white pb-2 border-b border-gray-100">
                            Found {searchResults.length} results
                            {hasMore && (
                                <span className="ml-2 text-blue-600">
                                    (Scroll for more)
                                </span>
                            )}
                        </div>
                        {searchResults.map((result) => (
                            <div
                                key={result.id}
                                onClick={() => handleWordClick(result)}
                                className="border-b border-gray-100 last:border-b-0 pb-3 mb-3 last:pb-0 last:mb-0 hover:bg-gray-50 p-2 rounded transition-colors duration-150 cursor-pointer"
                            >
                                <div className="font-semibold text-gray-900 mb-1">
                                    {result.word}
                                </div>
                                <div className="text-sm text-gray-600 mb-2">
                                    {result.definition}
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    {result.synonyms.length > 0 && (
                                        <div className="flex items-center gap-1">
                                            <span className="text-green-600 font-medium">Synonyms:</span>
                                            <span className="text-gray-600">{result.synonyms.slice(0, 3).join(', ')}
                                                {result.synonyms.length > 3 && `...+${result.synonyms.length - 3}`}
                                            </span>
                                        </div>
                                    )}
                                    {result.antonyms.length > 0 && (
                                        <div className="flex items-center gap-1">
                                            <span className="text-red-600 font-medium">Antonyms:</span>
                                            <span className="text-gray-600">{result.antonyms.slice(0, 3).join(', ')}
                                                {result.antonyms.length > 3 && `...+${result.antonyms.length - 3}`}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        
                        {/* Load more trigger */}
                        {hasMore && (
                            <div
                                ref={loadMoreRef}
                                className="py-3 text-center"
                            >
                                {isLoadingMore ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                                        <span className="ml-2 text-sm text-gray-600">Loading more...</span>
                                    </div>
                                ) : (
                                    <div className="text-sm text-gray-400">
                                        Scroll for more results
                                    </div>
                                )}
                            </div>
                        )}
                        
                        {!hasMore && searchResults.length > 0 && (
                            <div className="py-3 text-center text-sm text-gray-500 border-t border-gray-100">
                                End of results ({searchResults.length} total)
                            </div>
                        )}
                    </div>
                )}
                
                {!isLoading && showResults && searchResults.length === 0 && query.trim() && (
                    <div className="p-4 text-center text-gray-500">
                        No results found for "{query}"
                    </div>
                )}
                
                {!isLoading && !showResults && isOpen && (
                    <div className="p-4 text-center text-gray-400 text-sm">
                        Start typing to search...
                    </div>
                )}
            </div>
        </div>
    );
}

export { Search };
