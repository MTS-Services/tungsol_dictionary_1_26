import { Search } from '@/components/search/search';
import FrontendLayout from '@/layouts/frontend-layout';
import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';


function BrowseAlphabetically ({letter}: {letter: string}) {
    return (
        <FrontendLayout>
            <>
                <section className="relative overflow-hidden px-4 py-8 lg:py-20">
                    {/* Mobile Background */}
                    <div className="absolute inset-0 z-0" />

                    <div className="relative z-10 container mx-auto">
                        <h1 className="font-vardana mb-4 px-12 text-center text-3xl font-bold text-text-primary lg:text-6xl">
                            Browse Alphabetically
                        </h1>
                        <p className="mx-auto mb-4 px-12 text-center font-medium text-text-secondary">
                            Explore our dictionary by selecting a letter below
                        </p>
                        <div className="mx-auto mb-6 max-w-2xl lg:mb-12">
                            {/* Search Component */}
                            <Search placeholder={`Search words starting with ${letter}...`} />
                        </div>
                    </div>

                    <section className="#">
                        <div className="mx-auto max-w-full px-4">
                            <div className="flex items-center justify-start">
                                {/* Browse Alphabetically Section */}

                                {/* Alphabet Grid */}
                                <div className="container w-full rounded-3xl border-2 border-gray-300 bg-white p-8 shadow-lg">
                                    <h2 className="mb-6 text-xl font-semibold text-gray-800">
                                        Browse Alphabetically
                                    </h2>

                                    {/* Unified flex container for consistent spacing */}
                                    <div className="flex w-full flex-wrap gap-3 md:max-w-3xl">
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
                                        ].map((alphabetLetter) => (
                                            <Link
                                                key={alphabetLetter}
                                                href={route('browse-alphabetically', { letter: alphabetLetter })}
                                                className="relative z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-lg font-medium text-gray-700 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    console.log('Clicked letter:', alphabetLetter);
                                                    window.location.href = route('browse-alphabetically', { letter: alphabetLetter });
                                                }}
                                            >
                                                {alphabetLetter}
                                            </Link>
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
                                Words starting with {letter}
                            </h2>
                            {/* Links List */}
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
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
                    <div className="container flex w-fit items-center gap-4 rounded-xl p-4 mt-4">
                        {/* Previous Button (Disabled Style) */}
                        <button
                            disabled
                            className="flex cursor-not-allowed items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-400"
                        >
                            <ArrowLeft />
                            <span>Previous Letter</span>
                        </button>

                        {/* Next Button (Active Style) */}
                        <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 transition hover:bg-gray-50">
                            <span>Next Letter</span>
                            <ArrowRight />
                        </button>
                    </div>
                </section>
            </>
        </FrontendLayout>
    );
};

export default BrowseAlphabetically;
