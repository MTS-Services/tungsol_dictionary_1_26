import { Search } from '@/components/search/search';
import FrontendLayout from '@/layouts/frontend-layout';
import { Link, router } from '@inertiajs/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Word {
    id: number;
    word: string;
    slug: string;
}

interface WordsData {
    words?: Word[];
    pagination?: {
        current_page?: number;
        last_page?: number;
        per_page?: number;
        total?: number;
        from?: number;
        to?: number;
        has_more_pages?: boolean;
        prev_page_url?: string | null;
        next_page_url?: string | null;
    };
}

interface Props {
    letter?: string;
    wordsData?: WordsData;
    page?: number;
    perPage?: number;
}

function BrowseAlphabetically({ letter, wordsData, page, perPage }: Props) {
    const [selectedLetter, setSelectedLetter] = useState(
        letter?.toUpperCase() || 'A',
    );
    const [currentPage, setCurrentPage] = useState(
        page ? parseInt(page.toString()) : 1,
    );
    const [words, setWords] = useState<Word[]>(wordsData?.words || []);
    const [pagination, setPagination] = useState(
        wordsData?.pagination || {
            current_page: 1,
            last_page: 1,
            per_page: 50,
            total: 0,
            from: 0,
            to: 0,
            has_more_pages: false,
            prev_page_url: null,
            next_page_url: null,
        },
    );

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Helper function to check if a letter might have data (basic heuristic)
    const letterMightHaveData = (letter: string): boolean => {
        // For now, allow navigation but the backend will return empty if no data
        // This prevents users from getting stuck on letters with no data
        return true;
    };

    useEffect(() => {
        setSelectedLetter(letter?.toUpperCase() || 'A');
        setCurrentPage(page ? parseInt(page.toString()) : 1);
        setWords(wordsData?.words || []);
        setPagination(
            wordsData?.pagination || {
                current_page: 1,
                last_page: 1,
                per_page: 50,
                total: 0,
                from: 0,
                to: 0,
                has_more_pages: false,
                prev_page_url: null,
                next_page_url: null,
            },
        );
    }, [letter, wordsData, page]);

    const handleLetterClick = (newLetter: string) => {
        setSelectedLetter(newLetter);
        setCurrentPage(1);
        router.get(
            route('browse-alphabetically.paginated', {
                letter: newLetter.toLowerCase(),
                page: 1,
            }),
        );
    };

    const handleNextPage = () => {
        if (pagination?.has_more_pages) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            router.get(
                route('browse-alphabetically.paginated', {
                    letter: selectedLetter.toLowerCase(),
                    page: nextPage,
                }),
            );
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            router.get(
                route('browse-alphabetically.paginated', {
                    letter: selectedLetter.toLowerCase(),
                    page: prevPage,
                }),
            );
        }
    };

    const handleNextLetter = () => {
        const currentIndex = alphabet.indexOf(selectedLetter);
        if (currentIndex < alphabet.length - 1) {
            const nextLetter = alphabet[currentIndex + 1];
            // Always allow navigation - backend will handle empty data
            handleLetterClick(nextLetter);
        }
    };

    const handlePreviousLetter = () => {
        const currentIndex = alphabet.indexOf(selectedLetter);
        if (currentIndex > 0) {
            const prevLetter = alphabet[currentIndex - 1];
            // Always allow navigation - backend will handle empty data
            handleLetterClick(prevLetter);
        }
    };

    return (
        <FrontendLayout>
            <>
                <section className="relative overflow-hidden px-4 py-8 lg:py-20">
                    {/* Mobile Background */}
                    {/* <div className="absolute inset-0 z-0" /> */}

                    <div className="relative container mx-auto z-15">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl lg:mb-6">
                            <svg
                                className="h-12 w-12 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                ></path>
                            </svg>
                        </div>
                        <h1 className="font-Verdana mb-4 text-center text-4xl font-bold text-gray-900 lg:text-6xl">
                           Browse Alphabetically
                        </h1>
                        <p className="font-regular mx-auto mb-4 px-12 text-center font-inter text-gray-600">
                           Explore our dictionary by selecting a letter below.
                        </p>
                        <div className="mx-auto mb-6 max-w-2xl lg:mb-12">
                            <Search />
                        </div>
                    </div>
                    <section className="#">
                        <div className="mx-auto max-w-full px-4">
                            <div className="flex items-center justify-start">
                                {/* Browse Alphabetically Section */}

                                {/* Alphabet Grid */}
                                <div className="relative container w-full rounded-3xl border-2 border-gray-300 bg-white p-8 shadow-lg">
                                    <h2 className="mb-6 text-xl font-semibold text-gray-800">
                                        Browse Alphabetically
                                    </h2>

                                    {/* Unified flex container for consistent spacing */}
                                    <div className="relative z-10 flex w-full flex-wrap gap-3 md:max-w-3xl">
                                        {alphabet.map((alphabetLetter) => (
                                            <Link
                                                key={alphabetLetter}
                                                href={route(
                                                    'browse-alphabetically.paginated',
                                                    {
                                                        letter: alphabetLetter.toLowerCase(),
                                                        page: 1,
                                                    },
                                                )}
                                                className={`relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border text-lg font-medium transition-all duration-200 ${
                                                    alphabetLetter ===
                                                    selectedLetter
                                                        ? 'border-blue-500 bg-blue-50 text-blue-500'
                                                        : 'border-gray-200 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500'
                                                }`}
                                            >
                                                {alphabetLetter}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Words Display Section */}
                    <div className="container mt-10">
                        <div className="rounded-3xl border-2 border-gray-300 bg-white p-8 shadow-lg">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-1xl font-medium text-foreground">
                                    Words starting with {selectedLetter}
                                </h2>
                                <div className="text-sm text-gray-500">
                                    Showing {pagination.from || 0}-
                                    {pagination.to || 0} of {pagination.total}{' '}
                                    words
                                </div>
                            </div>

                            {/* Words List */}
                            <div className="space-y-4">
                                {words.length > 0 ? (
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                                        {words.map((word) => (
                                            <Link
                                                key={word.id}
                                                href={route('word', {
                                                    slug: word.slug,
                                                })}
                                                className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                            >
                                                <span>{word.word}</span>
                                                {/* <ArrowRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-blue-500" /> */}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-8 text-center text-gray-500">
                                        No words found starting with{' '}
                                        {selectedLetter}
                                    </div>
                                )}
                            </div>

                            {/* Pagination Controls */}
                            {words.length > 0 && (
                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* Page Navigation */}
                                        <button
                                            onClick={handlePreviousPage}
                                            disabled={currentPage <= 1}
                                            className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition ${
                                                currentPage <= 1
                                                    ? 'cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400'
                                                    : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                                            }`}
                                        >
                                            <ArrowLeft className="h-4 w-4" />
                                            <span>Previous Page</span>
                                        </button>

                                        <span className="text-sm text-gray-600">
                                            Page {currentPage} of{' '}
                                            {pagination.last_page || 1}
                                        </span>

                                        <button
                                            onClick={handleNextPage}
                                            disabled={
                                                !pagination.has_more_pages
                                            }
                                            className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition ${
                                                !pagination.has_more_pages
                                                    ? 'cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400'
                                                    : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                                            }`}
                                        >
                                            <span>Next Page</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>

                                    {/* Letter Navigation */}
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={handlePreviousLetter}
                                            disabled={
                                                alphabet.indexOf(
                                                    selectedLetter,
                                                ) <= 0
                                            }
                                            className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition ${
                                                alphabet.indexOf(
                                                    selectedLetter,
                                                ) <= 0
                                                    ? 'cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400'
                                                    : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                                            }`}
                                        >
                                            <ArrowLeft className="h-4 w-4" />
                                            <span>Previous Letter</span>
                                        </button>

                                        <button
                                            onClick={handleNextLetter}
                                            disabled={
                                                alphabet.indexOf(
                                                    selectedLetter,
                                                ) >=
                                                alphabet.length - 1
                                            }
                                            className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition ${
                                                alphabet.indexOf(
                                                    selectedLetter,
                                                ) >=
                                                alphabet.length - 1
                                                    ? 'cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400'
                                                    : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                                            }`}
                                        >
                                            <span>Next Letter</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </>
        </FrontendLayout>
    );
}

export default BrowseAlphabetically;
