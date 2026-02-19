
import HomeContent from '@/components/sections/frontend/home/home-content'
import FrontendLayout from '@/layouts/frontend-layout'


interface TrendingWord {
  word: string;
  slug: string;
}
interface HomeProps {
  trendingWords: TrendingWord[];
}
export default function Home({trendingWords}: HomeProps) {
  
  return (
    <FrontendLayout>
      <HomeContent trendingWords={trendingWords} />
    </FrontendLayout>
  )
}
