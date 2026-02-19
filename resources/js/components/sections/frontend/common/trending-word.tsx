import { router } from "@inertiajs/react";

interface TrendingWord {
  word: string;
  slug: string;
  onClick?: () => void;
}

interface TrendingWordsProps {
  trendingWords: TrendingWord[];
}

function TrendingWords({ trendingWords }: TrendingWordsProps) {
  const handleWordClick = (word: TrendingWord) => {
    if (word.onClick) {
      word.onClick();
    } else {
      router.visit(route('word', word.slug));
    }
  };

  return (
    <>
      {trendingWords.map((word, index) => (
        <span 
          key={index} 
          className="px-5 py-2.5 bg-background rounded-full text-text-primary font-arial font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200/100 border-2"
          onClick={() => handleWordClick(word)}
        >
          {word.word}
        </span>
      ))}
    </>
  );
}

export {TrendingWords}