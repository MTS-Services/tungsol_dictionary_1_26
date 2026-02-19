import { Search } from '@/components/search/search';
import FrontendLayout from '@/layouts/frontend-layout';
import { FC } from 'react';

const BrowseAlphabetically: FC = () => {
    return (
        <FrontendLayout>
            <>
                <section className="relative overflow-hidden px-4 py-8 lg:py-20">
                    {/* Mobile Background */}
                    <div className="absolute inset-0 z-0 bg-[var(--mobilebg)] lg:hidden" />

                    <div className="relative z-10 container mx-auto">
                        <h1 className="font-vardana mb-4 px-12 text-center text-3xl font-bold text-text-primary lg:text-6xl">
                            Discover the Power of Words
                        </h1>
                        <p className="mx-auto mb-4 px-12 text-center font-medium text-text-secondary">
                            Search meanings, play word games, and enhance your
                            vocabulary.
                        </p>
                        <div className="mx-auto mb-6 max-w-2xl lg:mb-12">
                            {/* Search Component */}
                            <Search />
                        </div>
                    </div>

                    <section className="#">
                        <div className="mx-auto max-w-full px-4">
                            <div className="flex items-center justify-center">
                                {/* Browse Alphabetically Section */}

                                {/* Alphabet Grid */}
                                <div className="w-full max-w-4xl rounded-3xl border-2 border-gray-300 bg-white p-8 shadow-lg">
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
                                                href={`#${letter}`}
                                                className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 text-lg font-medium text-gray-700 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500"
                                            >
                                                {letter}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick Links Section */}
                    <div className="container mt-10">
                        <div className="rounded-3xl border-2 border-gray-300 bg-white p-8 shadow-lg">
                            <h2 className="text-1xl mb-6 font-medium text-foreground">
                                Words starting with "A"
                            </h2>
                            {/* Links List */}
                            <div className="space-y-4">
                                <div className="grid grid-cols-4 gap-2">
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                    >
                                        Browse Thesaurus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </FrontendLayout>
    );
};

export default BrowseAlphabetically;
