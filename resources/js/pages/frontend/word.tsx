import FrontendLayout from '@/layouts/frontend-layout';


interface WordEntry {
  audio_url: string;
  pronunciation_ipa: string; 
}
interface Word {
  slug: string;
  word:string;
  word_entries:any[];
}
interface Props {
    word: Word;
}
export default function Word({ word }: Props) {
  console.log(word);
    return (
        <FrontendLayout>
            <>
                <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden px-4 py-12 font-sans">
                    <div
                        className="absolute inset-0 -z-0 bg-cover bg-fixed bg-center"
                        style={{
                            backgroundImage:
                                "url('assets/images/backgrounds.png')",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/40 via-blue-400/30 to-blue-500/50"></div>
                    </div>
                    <div className="relative z-10 w-full max-w-6xl space-y-4 bg-white p-4">
                        <div className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
                            <span className="text-cofy-gray font-arial text-sm font-medium">
                                Home
                            </span>
                            <svg
                                className="h-3 w-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <span className="text-cofy-gray font-arial text-sm font-medium">
                                Dictionary
                            </span>
                            <svg
                                className="h-3 w-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <span className="font-arial text-sm font-medium text-foreground">
                                Knowledge
                            </span>
                        </div>

                        <div className="rounded-2xl bg-white p-4 shadow-sm">
                            <div className="mb-2 flex items-start justify-between">
                                <h1 className="font-arial text-4xl font-medium text-foreground">
                                    {word.word}
                                </h1>
                                <div className="flex gap-2">
                                    <button className="text-md rounded-full p-2 font-arial text-blue-500 hover:bg-slate-100">
                                        <svg
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                        </svg>
                                    </button>

                                    <button className="text-md rounded-full p-2 font-arial text-foreground hover:bg-slate-100">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M12 7V13M9 10H15"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    <button className="text-md rounded-full p-2 font-arial text-foreground hover:bg-slate-100">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                        >
                                            <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p className="text-md font-inter text-gray-500">
                               {word.word_entries[0]?.pronunciation}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-4 shadow-sm">
                            <h3 className="mb-6 font-arial text-xs font-medium tracking-wider text-foreground uppercase">
                                Meanings
                            </h3>

                            <div className="space-y-6 px-4">
                                <div>
                                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500 uppercase">
                                        noun
                                    </span>
                                    <p className="mt-3 font-arial font-medium text-slate-700">
                                        The state or quality of being knowledge.
                                    </p>
                                    <div className="mt-2 rounded-lg border-l-4 border-blue-500 bg-slate-50/80 p-4">
                                        <p className="mb-1 font-arial text-xs font-medium tracking-tight text-gray-400 uppercase">
                                            Example:
                                        </p>
                                        <p className="text-sm text-foreground italic">
                                            "The knowledge of the landscape was
                                            breathtaking."
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-arial font-medium text-slate-700">
                                        Something that possesses the
                                        characteristics of knowledge.
                                    </p>
                                    <div className="mt-2 rounded-lg border-l-4 border-blue-500 bg-slate-50/80 p-4">
                                        <p className="mb-1 font-arial text-xs font-medium tracking-tight text-gray-400 uppercase">
                                            Example:
                                        </p>
                                        <p className="text-sm text-foreground italic">
                                            "She found knowledge in the simple
                                            things in life."
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500 uppercase">
                                        adjective
                                    </span>
                                    <p className="mt-3 font-arial font-medium text-slate-700">
                                        Possessing qualities that give great
                                        pleasure or satisfaction to see, hear,
                                        think about, etc.
                                    </p>
                                    <div className="mt-2 rounded-lg border-l-4 border-blue-500 bg-slate-50/80 p-4">
                                        <p className="mb-1 font-arial text-xs font-medium tracking-tight text-gray-400 uppercase">
                                            Example:
                                        </p>
                                        <p className="text-sm text-foreground italic">
                                            "It was a knowledge day for a walk
                                            in the park."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-white p-6 shadow-sm">
                                <h3 className="mb-4 font-arial text-xs font-medium tracking-wider text-foreground uppercase">
                                    Synonyms
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-500">
                                        lovely
                                    </span>
                                    <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-500">
                                        attractive
                                    </span>
                                    <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-500">
                                        gorgeous
                                    </span>
                                    <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-500">
                                        stunning
                                    </span>
                                    <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-500">
                                        elegant
                                    </span>
                                    <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-500">
                                        graceful
                                    </span>
                                    <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-500">
                                        charming
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-sm">
                                <h3 className="mb-4 font-arial text-xs font-medium tracking-wider text-foreground uppercase">
                                    Antonyms
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
                                        ugly
                                    </span>
                                    <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
                                        unattractive
                                    </span>
                                    <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
                                        plain
                                    </span>
                                    <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
                                        unpleasant
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <h3 className="mb-4 font-arial text-xs font-semibold tracking-wider text-foreground uppercase">
                                Related Words
                            </h3>
                            <div className="divide-y divide-slate-50">
                                <button className="group flex w-full items-center justify-between py-3 text-left font-arial text-sm font-medium text-slate-700 hover:text-blue-500">
                                    beauty →
                                </button>
                                <button className="group flex w-full items-center justify-between py-3 text-left font-arial text-sm font-medium text-slate-700 hover:text-blue-500">
                                    beautifully →
                                </button>
                                <button className="group flex w-full items-center justify-between py-3 text-left font-arial text-sm font-medium text-slate-700 hover:text-blue-500">
                                    beautify →
                                </button>
                                <button className="group flex w-full items-center justify-between py-3 text-left font-arial text-sm font-medium text-slate-700 hover:text-blue-500">
                                    beautifully →
                                </button>
                                <button className="group flex w-full items-center justify-between py-3 text-left font-arial text-sm font-medium text-slate-700 hover:text-blue-500">
                                    beautify →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </FrontendLayout>
    );
}
