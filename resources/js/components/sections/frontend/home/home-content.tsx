import { Search } from '@/components/search/search';

import { router } from '@inertiajs/react';
import React from 'react';
import { TrendingWords } from '../common/trending-word';

interface TrendingWord {
  word: string;
  slug: string;
  onClick?: () => void;
}

interface HomeContentProps {
  trendingWords: TrendingWord[];
}

const HomeContent = ({ trendingWords }: HomeContentProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative lg:py-20 py-8 px-4 overflow-hidden">
        {/* Desktop Background Layer: Hidden on mobile, visible on LG screens */}
        <div 
          className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url("assets/images/backgrounds.png")'
          }}
        />
        
        {/* Mobile Background Fallback: Simple light blue tint or solid white */}
        <div className="lg:hidden absolute inset-0 bg-[var(--mobilebg)] z-0" />

        <div className="container mx-auto relative z-10">
          <h1 className="lg:text-6xl text-3xl font-bold font-vardana text-text-primary text-center mb-4 px-12">
            Discover the Power of Words
          </h1>
          <p className="text-center text-text-secondary mb-4 mx-auto font-medium px-12">
            Search meanings, play word games, and enhance your vocabulary.
          </p>
          
          <div className="max-w-2xl mx-auto lg:mb-12 mb-6">

          {/* Search Component */}

            <Search />

           {/* Search Component End */}
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <button className="bg-accent text-secondary-foreground font-arial px-6 py-2 text-sm lg:text-base rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Explore Dictionary
              </button>
              <button className="bg-bg-color-1 hover:bg-green-600 text-white font-arial px-6 py-2 text-sm lg:text-base rounded-lg font-medium flex items-center justify-center gap-2 shadow-md transition-all active:scale-95">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width={20} height={12} x={2} y={6} rx={2} />
                  <circle cx={8} cy={12} r={2} />
                  <path d="M15 12h2" /><path d="M16 11v2" />
                </svg>
                Play Word Game
              </button>
            </div>
          </div>

          {/* Word of the Day Card */}
          <div onClick={() => window.location.href = '/home2'} className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8 relative overflow-hidden border border-white/20 cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-btn-primary text-white px-2 py-1 rounded text-sm font-normal uppercase tracking-wider font-arial">
                Word of the Day
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#155DFC" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
            </div>
            <h2 className="text-3xl font-arial font-regular text-text-primary mb-2">Perspicacious</h2>
            <p className="text-text-secondary text-sm mb-4">
              <span className="font-regular italic">per·spi·ca·cious</span><br /> • adjective
            </p>
            <p className="text-text-primary text-lg font-medium mb-4 leading-relaxed">
              Having a ready insight into and understanding of things: mentally sharp or keen.
            </p>
            <div className="bg-gray-100 p-4 rounded pt-4">
              <p className="text-text-secondary text-xs font-regular uppercase mb-2">Example:</p>
              <p className="text-text-secondary">
                "The perspicacious detective noticed the tiny clue that everyone else had missed."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- FEATURES & TRENDING SECTION --- */}
      <section className="relative lg:py-20 py-8 z-10 px-4 overflow-hidden">
        {/* Background Image/Gradients - ONLY VISIBLE ON DESKTOP */}
        <div className="hidden lg:block absolute inset-0 -z-10 w-full h-full">
          <img
            src="/assets/images/background2.png"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-40/50 via-blue-100/50 to-indigo-100/50" />
        </div>

        <div className="container mx-auto relative">
          {/* Trending Words Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl lg:p-12 p-8 lg:mb-12 mb-6 border border-blue-600/10">
            <h2 className="text-3xl font-arial font-regular text-text-primary mb-6 flex items-center gap-2">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Trending Words
            </h2>
            <div className="flex flex-wrap gap-3">
              <TrendingWords trendingWords={trendingWords} />
            </div>
          </div>

          {/* How It Works Section */}
          <h2 className="lg:text-4xl text-2xl font-arial font-bold text-center text-text-primary lg:mb-12 mb-6">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mb-16 mb-8">
            <FeatureCard 
              title="Comprehensive Dictionary" 
              desc="Search thousands of words with detailed definitions, pronunciations, and examples."
              iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
              secondPath=""
            />
            <FeatureCard 
              title="Thesaurus & Synonyms" 
              desc="Discover related words, synonyms, and antonyms to expand your vocabulary."
              iconPath="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
              secondPath=""
            />
            <FeatureCard 
              title="Word Games" 
              desc="Challenge yourself with fun word games and improve your language skills."
              iconPath="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
              secondPath="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <FeatureCard 
              title="Learning Resources" 
              desc="Access educational content, word lists, and study materials."
              iconPath="M12 14l9-5-9-5-9 5 9 5z" 
              secondPath="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </div>

          {/* CTA Section */}
          <div className="max-w-6xl mx-auto bg-btn-primary rounded-3xl p-12 text-center shadow-2xl font-arial">
            <h2 className="font-regular font-arial lg:text-4xl text-2xl text-text-white mb-4">
              Ready to Expand Your Vocabulary?
            </h2>
            <p className="text-text-white text-md font-regular font-arial mb-8">
              Join thousands of word enthusiasts improving their language skills
            </p>
            <a href="#" className="font-regular font-arial inline-flex font-sm items-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Get Started Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ title, desc, iconPath, secondPath }: { title: string; desc: string; iconPath: string; secondPath?: string }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 transition-shadow border border-gray-200/100">
    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        {secondPath && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={secondPath} />}
      </svg>
    </div>
    <h3 className="text-xl font-arial font-regular text-text-primary mb-3">{title}</h3>
    <p className="text-text-secondary font-inter font-regular leading-relaxed">{desc}</p>
  </div>
);

export default HomeContent;