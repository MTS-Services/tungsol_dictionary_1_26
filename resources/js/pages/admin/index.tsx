import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Link } from '@inertiajs/react';
import { BarChart } from 'lucide-react';
import { Search } from '@/components/search/search';

interface Word {
    id: number;
    word: string;
    slug: string;
}

interface Props {
    totalWords: number;
    totalDefinitions: number;
    totalInquiries: number;
    words: Word[];
}

export default function index({
    totalWords,
    totalDefinitions,
    totalInquiries,
    words,
}: Props) {
    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                    <p className="text-gray-600">
                        Welcome to your admin dashboard
                    </p>
                </div>

                {/* Stats Cards Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Link href={route('admin.wm.words.index')}>
                        <Card className="p-6">
                            <div className="flex items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                    <svg
                                        className="h-6 w-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">
                                        Total Words
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {totalWords}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Link href={route('admin.wm.words.index')}>
                        <Card className="p-6">
                            <div className="flex items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                                    <svg
                                        className="h-6 w-6 text-green-600"
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
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">
                                        Definitions
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {totalDefinitions}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Card className="p-6">
                        <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                                <svg
                                    className="h-6 w-6 text-orange-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                    Today's Searches
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    -
                                </p>
                            </div>
                        </div>
                    </Card>
                    <Link href={route('admin.cu.contact-us.index')}>
                        <Card className="p-6">
                            <div className="flex items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                    <BarChart />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">
                                        Inquiries
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {totalInquiries}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>

                {/* Charts and Recent Activity */}
                <div className="">
                    {/* Chart Card */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Word Search Trends</CardTitle>
                        </CardHeader>
                         <div className="space-y-4 p-4">
                                {words  ? (
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                                        {words.map((word) => (
                                            <Link
                                                key={word.id}
                                                href={route('word', {
                                                    slug: word.slug,
                                                })}
                                                className="group flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4 font-medium text-gray-800 transition-colors hover:bg-blue-100"
                                            >
                                                <span>{word.word}</span>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-8 text-center text-gray-500">
                                        No words found starting with 
                                    </div>
                                )}
                            </div>
                    </Card>
                </div>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                            
                                <Link href={route('admin.lm.languages.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add Language
                                </Link>
                            
                            
                                <Link href={route('admin.wm.words.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add New Word
                                </Link>
                            
                            
                                <Link href={route('admin.posm.parts-of-speech.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add Parts of Speech
                                </Link>
                            
                            
                                <Link href={route('admin.wm.words-entries.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add Word Entries
                                </Link>
                            

                                <Link href={route('admin.wm.definitions.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add Word Definitions
                                </Link>
                                <Link href={route('admin.em.examples.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add Word Examples
                                </Link>
                                <Link href={route('admin.sm.synonyms.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add Synonyms
                                </Link>
                                <Link href={route('admin.rwm.related-words.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add Related Words
                                </Link>
                                <Link href={route('admin.am.antonyms.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add Antonyms
                                </Link>
                                <Link href={route('admin.wotdm.word-of-the-day.create')} className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add Word of the Day
                                </Link>
                            
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
