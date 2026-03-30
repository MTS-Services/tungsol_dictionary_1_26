import FrontendLayout from '@/layouts/frontend-layout'
import { Head, Link, router } from '@inertiajs/react'
import React, { useState, useEffect } from 'react'
import { toast } from 'sonner'

interface SearchResult {
    id: number;
    word: string;
    slug: string;
    definition: string;
    synonyms: string[];
    antonyms: string[];
    search_count: number;
}

interface SearchResultsData {
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
    searchResults: SearchResultsData | null;
    query: string;
    currentPage: number;
    perPage: number;
    sort: string;
    order: string;
    trendingItems?: string[] | null;
    error?: string;
}

const Search: React.FC<Props> = ({ searchResults, query, currentPage, perPage, sort, order, trendingItems, error }) => {
    const [loading, setLoading] = useState(false);

    const trackWordClick = async (wordId: number, word: string, slug: string) => {
        try {
            await router.put(route('search.track-click', wordId));
        } catch (error) {
            console.error('Failed to track word click:', error);
            router.visit(route('word', slug));
        }
    };

    const handlePageChange = (page: number) => {
        if (page === currentPage) return;
        
        setLoading(true);
        const params = new URLSearchParams({
            q: query,
            page: page.toString(),
            per_page: perPage.toString(),
            sort: sort,
            order: order,
        });
        router.visit(`/search/results?${params.toString()}`, {
            preserveState: true,
            onFinish: () => setLoading(false),
        });
    };

    const renderPagination = () => {
        if (!searchResults || searchResults.last_page <= 1) return null;

        const pages = [];
        const current = searchResults.current_page;
        const last = searchResults.last_page;
        const delta = 2; // Number of pages to show before and after current

        // Always show first page
        if (current > delta + 1) {
            pages.push(1);
            if (current > delta + 2) {
                pages.push('...');
            }
        }

        // Show pages around current
        for (let i = Math.max(1, current - delta); i <= Math.min(last, current + delta); i++) {
            pages.push(i);
        }

        // Always show last page
        if (current < last - delta) {
            if (current < last - delta - 1) {
                pages.push('...');
            }
            pages.push(last);
        }

        return (
            <div className="flex justify-center items-center gap-2 mt-8">
                <button
                    onClick={() => handlePageChange(current - 1)}
                    disabled={current === 1 || loading}
                    className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                
                {pages.map((page, index) => (
                    page === '...' ? (
                        <span key={`ellipsis-${index}`} className="px-3 py-2">...</span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page as number)}
                            disabled={page === current || loading}
                            className={`px-3 py-2 rounded-md ${
                                page === current
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {page}
                        </button>
                    )
                ))}
                
                <button
                    onClick={() => handlePageChange(current + 1)}
                    disabled={current === last || loading}
                    className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        );
    };

    return (
        <FrontendLayout>
            <Head title={`Search results for "${query}"`} />
            
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Search Results
                    </h1>
                    <p className="text-gray-600">
                        Showing results for: <span className="font-semibold">"{query}"</span>
                    </p>
                    {searchResults && (
                        <p className="text-sm text-gray-500 mt-1">
                            Found {searchResults.total} results in {searchResults.meta.search_time} seconds
                        </p>
                    )}
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        {error}
                    </div>
                )}

                {loading && (
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                )}

                {!loading && !error && searchResults && (
                    <>
                        {searchResults.data.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No results found for "{query}"</p>
                                <p className="text-gray-400 mt-2">Try different keywords or check your spelling</p>
                                
                                {trendingItems && trendingItems.length > 0 && (
                                    <div className="mt-8">
                                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Trending Searches</h3>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {trendingItems.map((trendingItem, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        // Navigate to search results for trending item
                                                        const params = new URLSearchParams({
                                                            q: trendingItem,
                                                            sort: 'popularity',
                                                            order: 'desc',
                                                        });
                                                        router.visit(`/search/results?${params.toString()}`);
                                                    }}
                                                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors text-sm font-medium"
                                                >
                                                    {trendingItem}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="space-y-6">
                                    {searchResults.data.map((result) => (
                                        <div
                                            key={result.id}
                                            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                                            onClick={() => trackWordClick(result.id, result.word, result.slug)}
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                                                    {result.word}
                                                </h3>
                                                <span className="text-sm text-gray-500">
                                                    {result.search_count} searches
                                                </span>
                                            </div>
                                            
                                            <p className="text-gray-700 mb-4 line-clamp-3">
                                                {result.definition}
                                            </p>

                                            {(result.synonyms.length > 0 || result.antonyms.length > 0) && (
                                                <div className="flex gap-6 text-sm">
                                                    {result.synonyms.length > 0 && (
                                                        <div>
                                                            <span className="font-semibold text-gray-600">Synonyms: </span>
                                                            <span className="text-gray-700">
                                                                {result.synonyms.slice(0, 3).join(', ')}
                                                                {result.synonyms.length > 3 && '...'}
                                                            </span>
                                                        </div>
                                                    )}
                                                    
                                                    {result.antonyms.length > 0 && (
                                                        <div>
                                                            <span className="font-semibold text-gray-600">Antonyms: </span>
                                                            <span className="text-gray-700">
                                                                {result.antonyms.slice(0, 3).join(', ')}
                                                                {result.antonyms.length > 3 && '...'}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {renderPagination()}
                            </>
                        )}
                    </>
                )}
            </div>
        </FrontendLayout>
    )
}

export default Search
