
import DayContent from '@/components/sections/frontend/word-of-the-day/day-content';
import FrontendLayout from '@/layouts/frontend-layout'


interface TrendingWord {
  word: string;
  slug: string;
}

interface HomeProps {
  trendingWords: TrendingWord[];
  wordOfTheDay: {
    word: {
      word: string;
      slug: string;
    };
  };
}
export default function WordOfTheDay({trendingWords, wordOfTheDay}: HomeProps) {
  
  return (
    <FrontendLayout>
      <DayContent trendingWords={trendingWords} wordOfTheDay={wordOfTheDay} />
    </FrontendLayout>
  )
}
