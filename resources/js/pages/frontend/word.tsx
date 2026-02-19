import FrontendLayout from '@/layouts/frontend-layout';
import { Link } from '@inertiajs/react';
import AudioPlayer from '@/components/ui/audio-player';

interface Example {
    id: number;
    sentence: string;
}
interface Definition {
    id: number;
    definition: string;
    examples: Example[];
}
interface PartOfSpeech {
    id: number;
    name: string;
}
interface WordEntry {
    audio_url: string;
    pronunciation_ipa: string;
    definitions: Definition[];
    part_of_speech: PartOfSpeech[];
    synonyms?: string[];
    antonyms?: string[];
}
interface RelatedWord {
    word: Word;
    slug: string;
}
interface Word {
    slug: string;
    word: string;
    etymology: string;
    word_entries: WordEntry[];
    related_words: RelatedWord[];
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
                                    <AudioPlayer 
                                        audioUrl={word.word_entries[0]?.audio_url}
                                        className="text-md rounded-full p-2 font-arial text-blue-500 hover:bg-slate-100"
                                    />

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
                                {word.word_entries[0]?.pronunciation_ipa}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-4 shadow-sm">
                            <h3 className="mb-6 font-arial text-xs font-medium tracking-wider text-foreground uppercase">
                                Meanings
                            </h3>

                            <div className="space-y-6 px-4">
                                {word.word_entries.map((entry, index) => (
                                    <div key={index}>
                                        <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500 uppercase">
                                            {entry.part_of_speech[0]?.name}
                                        </span>
                                        <p className="mt-3 font-arial font-medium text-slate-700">
                                            {word.etymology}
                                        </p>
                                        {entry.definitions.map(
                                            (definition, index) => (
                                                <>
                                                    {definition.examples.map(
                                                        (example, index) => (
                                                            <div className="mt-3 rounded-lg border-l-4 border-blue-500 bg-slate-50/80 p-4">
                                                                <p className="mb-1 font-arial text-xs font-medium tracking-tight text-gray-400 uppercase">
                                                                    Example {index + 1} :
                                                                </p>
                                                                <p
                                                                    key={index}
                                                                    className="text-sm text-foreground italic"
                                                                >
                                                                    {
                                                                        example.sentence
                                                                    }
                                                                </p>
                                                            </div>
                                                        ),
                                                    )}
                                                </>
                                            ),
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-white p-6 shadow-sm">
                                <h3 className="mb-4 font-arial text-xs font-medium tracking-wider text-foreground uppercase">
                                    Synonyms
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {word.word_entries[0]?.synonyms?.map((synonym, index) => (
                                        <span key={index} className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-500">
                                            {synonym}
                                        </span>
                                    )) || (
                                        <span className="text-gray-400 text-sm">No synonyms available</span>
                                    )}
                                </div>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-sm">
                                <h3 className="mb-4 font-arial text-xs font-medium tracking-wider text-foreground uppercase">
                                    Antonyms
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {word.word_entries[0]?.antonyms?.map((antonym, index) => (
                                        <span key={index} className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
                                            {antonym}
                                        </span>
                                    )) || (
                                        <span className="text-gray-400 text-sm">No antonyms available</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <h3 className="mb-4 font-arial text-xs font-semibold tracking-wider text-foreground uppercase">
                                Related Words
                            </h3>
                            <div className="divide-y divide-slate-50">
                                {word.related_words.map((relatedWord) => (
                                    
                                    <Link key={relatedWord.word.slug} href={route('word', { slug: relatedWord.word.slug })} className="group flex w-full items-center justify-between py-3 text-left font-arial text-sm font-medium text-slate-700 hover:text-blue-500">
                                        {relatedWord.word.word} →
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </FrontendLayout>
    );
}
