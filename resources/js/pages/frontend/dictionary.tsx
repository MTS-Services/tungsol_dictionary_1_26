import { Search } from '@/components/search/search';
import { TrendingWords } from '@/components/sections/frontend/common/trending-word';
import FrontendLayout from '@/layouts/frontend-layout';
import { Link } from '@inertiajs/react';
interface TrendingWord {
    word: string;
    slug: string;
}
interface DictionaryProps {
    trendingWords: TrendingWord[];
}

export default function Dictionary({ trendingWords }: DictionaryProps) {
    return (
        <FrontendLayout>
            <>
                <section className="relative overflow-hidden bg-[var(--mobilebg)] px-4 py-8 lg:py-20">
                    {/* Desktop Background Layer: Hidden on mobile, visible on LG screens */}
                    <div
                        className="absolute inset-0 z-0 hidden bg-cover bg-center lg:block"
                        style={{
                            backgroundImage:
                                'linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url("assets/images/backgrounds.png")',
                        }}
                    />

                    {/* Mobile Background Fallback: Simple light blue tint or solid white */}
                    <div className="absolute inset-0 z-0 bg-[var(--mobilebg)] lg:hidden" />
                    <div className="relative z-10 container mx-auto">
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
                            Dictionary
                        </h1>
                        <p className="font-regular mx-auto mb-4 px-12 text-center font-inter text-gray-600">
                            Search meanings, play word games, and enhance your
                            vocabulary.
                        </p>
                        <div className="mx-auto mb-6 max-w-2xl lg:mb-12">
                            <Search />
                        </div>
                        <div className="mx-auto mb-12 max-w-7xl rounded-2xl border-2 border-gray-300 bg-white p-8">
                            <h2 className="font-regular mb-6 flex items-center font-arial text-2xl text-gray-800">
                                Popular Searches
                            </h2>
                            <div className="flex flex-wrap gap-4 pb-8">
                                <TrendingWords trendingWords={trendingWords} />
                            </div>
                        </div>
                        <section className="#">
                            <div className="mx-auto max-w-7xl">
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    {/* Browse Alphabetically Section */}

                                    {/* Alphabet Grid */}
                                    <div className="max-w-2xl rounded-3xl border-2 border-gray-300 bg-white p-8 shadow-lg">
                                        <h2 className="mb-6 text-xl font-semibold text-gray-800">
                                            Browse Alphabetically
                                        </h2>

                                        {/* Unified flex container for consistent spacing */}
                                        <div className="flex flex-wrap gap-3">
                                            {[
                                                'A',
                                                'B',
                                                'C',
                                                'D',
                                                'E',
                                                'F',
                                                'G',
                                                'H',
                                                'I',
                                                'J',
                                                'K',
                                                'L',
                                                'M',
                                                'N',
                                                'O',
                                                'P',
                                                'Q',
                                                'R',
                                                'S',
                                                'T',
                                                'U',
                                                'V',
                                                'W',
                                                'X',
                                                'Y',
                                                'Z',
                                            ].map((letter) => (
                                                <a
                                                    key={letter}
                                                    href={route(
                                                        'browse-alphabetically',
                                                        { letter },
                                                    )}
                                                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 text-lg font-medium text-gray-700 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500"
                                                >
                                                    {letter}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quick Links Section */}
                                    <div className="rounded-3xl border-2 border-gray-300 bg-white p-8 shadow-lg">
                                        <h2 className="text-1xl mb-6 font-medium text-foreground">
                                            Quick Links
                                        </h2>
                                        {/* Links List */}
                                        <div className="space-y-4">
                                            {/* <a
                        href="#"
                        className="flex items-center justify-between bg-gray-100 hover:bg-blue-100 text-gray-800 font-medium py-4 px-6 rounded-lg transition-colors group"
                      >
                        <span className="flex items-center gap-2 font-arial font-medium text-foreground text-1xl"> Browse Thesaurus <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        </span>
                        
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-between bg-gray-100 hover:bg-blue-100 text-gray-800 font-medium py-4 px-6 rounded-lg transition-colors group"
                      >
                        <span className="flex items-center gap-2 font-arial font-medium text-foreground text-1xl">Learning Resources <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg></span>     
                        
                      </a> */}
                                            <Link
                                                href={route('word-of-the-day')}
                                                className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                            >
                                                <span className="text-1xl flex items-center gap-2 font-arial font-medium text-foreground">
                                                    Word of the Day
                                                    <svg
                                                        className="h-5 w-5 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-blue-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                        />
                                                    </svg>{' '}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <section className="relative z-10 overflow-hidden px-4 py-8 lg:py-20">
                        {/* Background Image */}
                        <div className="absolute inset-0 -z-10 h-full w-full">
                            <img
                                src="/assets/images/background2.png"
                                alt="Background"
                                className="h-full w-full object-cover opacity-20"
                            />
                            <div className="from-blue-40/50 absolute inset-2 bg-gradient-to-br via-blue-100/50 to-indigo-100/50" />
                        </div>

                        <div className="relative container mx-auto">
                            {/* Trending Words Section */}
                            <div className="mb-12 rounded-3xl border border-blue-200 bg-white/5 p-4 backdrop-blur-sm sm:p-6 md:p-8 lg:p-12">
                                <h2 className="mb-4 flex items-center gap-2 text-xl font-medium text-gray-800 sm:mb-6 sm:text-2xl md:text-3xl">
                                    <svg
                                        className="h-6 w-6 text-blue-600 sm:h-7 sm:w-7 md:h-8 md:w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                        />
                                    </svg>
                                    Trending Words
                                </h2>
                                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                                    <TrendingWords
                                        trendingWords={trendingWords}
                                    />
                                </div>
                            </div>
                            {/* How It Works Section */}
                            <h2 className="mb-6 text-center font-arial text-2xl font-bold text-text-primary lg:mb-12 lg:text-4xl">
                                How It Works
                            </h2>
                            {/* Feature Cards */}
                            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-16 lg:grid-cols-4">
                                {/* Comprehensive Dictionary */}
                                <div className="rounded-2xl border border-gray-200/100 bg-white/90 p-8 backdrop-blur-sm transition-shadow">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                                        <svg
                                            className="h-8 w-8 text-blue-600"
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
                                    <h3 className="font-regular mb-3 font-arial text-xl text-text-primary">
                                        Comprehensive Dictionary
                                    </h3>
                                    <p className="font-regular font-inter leading-relaxed text-text-secondary">
                                        Search thousands of words with detailed
                                        definitions, pronunciations, and
                                        examples.
                                    </p>
                                </div>
                                {/* Thesaurus & Synonyms */}
                                <div className="rounded-2xl border border-gray-200/100 bg-white/90 p-8 backdrop-blur-sm transition-shadow">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                                        <svg
                                            className="h-8 w-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="font-regular mb-3 font-arial text-xl text-text-primary">
                                        Thesaurus &amp; Synonyms
                                    </h3>
                                    <p className="font-regular font-inter leading-relaxed text-text-secondary">
                                        Discover related words, synonyms, and
                                        antonyms to expand your vocabulary.
                                    </p>
                                </div>
                                {/* Word Games */}
                                <div className="rounded-2xl border border-gray-200/100 bg-white/90 p-8 backdrop-blur-sm transition-shadow">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                                        <svg
                                            className="h-8 w-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            ></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="font-regular mb-3 font-arial text-xl text-text-primary">
                                        Word Games
                                    </h3>
                                    <p className="font-regular font-inter leading-relaxed text-text-secondary">
                                        Challenge yourself with fun word games
                                        and improve your language skills.
                                    </p>
                                </div>
                                {/* Learning Resources */}
                                <div className="rounded-2xl border border-gray-200/100 bg-white/90 p-8 backdrop-blur-sm transition-shadow">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                                        <svg
                                            className="h-8 w-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 14l9-5-9-5-9 5 9 5z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                            ></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className="font-regular mb-3 font-arial text-xl text-text-primary">
                                        Learning Resources
                                    </h3>
                                    <p className="font-regular font-inter leading-relaxed text-text-secondary">
                                        Access educational content, word lists,
                                        and study materials.
                                    </p>
                                </div>
                            </div>
                            {/* CTA Section */}
                            <div className="mx-auto max-w-6xl rounded-3xl bg-btn-primary p-12 text-center font-arial shadow-2xl">
                                <h2 className="font-regular mb-4 font-arial text-2xl text-text-white lg:text-4xl">
                                    Ready to Expand Your Vocabulary?
                                </h2>
                                <p className="text-md font-regular mb-8 font-arial text-text-white">
                                    Join thousands of word enthusiasts improving
                                    their language skills
                                </p>
                                <a
                                    href="#"
                                    className="font-regular font-sm inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-arial text-blue-600 shadow-lg transition-colors hover:bg-blue-50"
                                >
                                    Get Started Free
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </>
        </FrontendLayout>
    );
}
