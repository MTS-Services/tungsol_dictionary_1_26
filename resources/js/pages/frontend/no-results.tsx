import FrontendLayout from '@/layouts/frontend-layout'
import { Head, Link, router } from '@inertiajs/react'
import React from 'react'
import { TrendingWords } from '@/components/sections/frontend/common/trending-word'

interface TrendingWord {
  word: string;
  slug: string;
}

interface Props {
  query: string;
  trendingWords: TrendingWord[];
}

const NoResults: React.FC<Props> = ({ query, trendingWords }) => {
  return (
    <FrontendLayout>
      <Head title={`No results found for "${query}"`} />
      
      <div className="min-h-screen bg-white">
        <section className="relative lg:py-20 py-8 px-4">
          <div className="container mx-auto">
            {/* No Results Message */}
            <div className="text-center mb-12">
              <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                  <svg 
                    className="w-24 h-24 mx-auto text-gray-300 mb-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                  <h1 className="text-4xl font-arial font-bold text-text-primary mb-4">
                    No Results Found
                  </h1>
                  <p className="text-xl text-text-secondary mb-2">
                    We couldn't find any results for "<span className="font-semibold text-blue-600">{query}</span>"
                  </p>
                  <p className="text-text-secondary">
                    Try different keywords or check your spelling
                  </p>
                </div>
              </div>
            </div>

            {/* Trending Searches Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl lg:p-12 p-8 lg:mb-12 mb-6 border border-blue-600/10">
              <h2 className="text-3xl font-arial font-regular text-text-primary mb-6 flex items-center gap-2">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Trending Searches
              </h2>
              <p className="text-text-secondary mb-6 text-center">
                Discover what others are searching for right now
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <TrendingWords trendingWords={trendingWords} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={route('dictionary')} 
                  className="bg-accent text-secondary-foreground font-arial px-8 py-3 text-lg rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Browse Dictionary
                </Link>
                <Link 
                  href={route('game')} 
                  className="bg-bg-color-1 hover:bg-green-600 text-white font-arial px-8 py-3 text-lg rounded-lg font-medium flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect width={20} height={12} x={2} y={6} rx={2} />
                    <circle cx={8} cy={12} r={2} />
                    <path d="M15 12h2" />
                    <path d="M16 11v2" />
                  </svg>
                  Play Word Games
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </FrontendLayout>
  )
}

export default NoResults
