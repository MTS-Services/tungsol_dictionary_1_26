import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
    audioUrl: string | null | undefined;
    className?: string;
}

export default function AudioPlayer({ audioUrl, className = "" }: AudioPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => setIsPlaying(false);
        const handleLoadStart = () => setIsPlaying(false);
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('loadstart', handleLoadStart);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('loadstart', handleLoadStart);
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
        };
    }, []);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (!audio || !audioUrl) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    };

    if (!audioUrl) {
        return null;
    }

    return (
        <>
            <button
                onClick={togglePlayPause}
                className={`text-gray-400 hover:text-gray-600 transition-colors ${className}`}
                title={isPlaying ? "Pause audio" : "Play audio"}
            >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#155DFC"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {isPlaying ? (
                        // Pause icon
                        <>
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                        </>
                    ) : (
                        // Play icon
                        <>
                            <path d="M11 5L6 9H2v6h4l5 4V5z" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </>
                    )}
                </svg>
            </button>
            <audio
                ref={audioRef}
                src={audioUrl}
                preload="none"
            />
        </>
    );
}
