
import HomeContent from '@/components/sections/frontend/home/home-content'
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
export default function Home({trendingWords, wordOfTheDay}: HomeProps) {
  
  return (
    <FrontendLayout>
      <HomeContent trendingWords={trendingWords} wordOfTheDay={wordOfTheDay} />
    </FrontendLayout>
  )
}
