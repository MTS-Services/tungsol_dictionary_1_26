import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    placeholder?: string;
}

function Search({
    className,
    placeholder = 'Search for synonyms and antonyms',
}: Props) {
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
                    type="text"
                    placeholder={placeholder}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
            <div className='absolute top-full left-0 w-full h-full bg-background z-10'>
                <div>
                    Loading Spinner
                </div>
                <div>
                    list of serach result
                </div>
            </div>
        </div>
    );
}

export { Search };
