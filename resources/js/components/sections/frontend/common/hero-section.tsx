import { Search } from '@/components/search/search';
import { Link } from '@inertiajs/react';
import React from 'react';

/**
 * Reusable hero section with heading, tagline, search, and CTA buttons.
 * Used on home, games, about, and contact pages for consistent UX.
 */
export function HeroSection() {
  return (
    <section className="relative z-12 lg:py-20 py-8 px-4">
      {/* Desktop Background Layer: Hidden on mobile, visible on LG screens */}
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url("assets/images/backgrounds.png")',
        }}
      />

      {/* Mobile Background Fallback */}
      <div className="lg:hidden absolute inset-0 bg-[var(--mobilebg)] z-0" />

      <div className="container mx-auto relative z-10">
        <h1 className="lg:text-6xl text-3xl font-bold font-vardana text-text-primary text-center mb-4 px-12">
          Discover the Power of Words
        </h1>
        <p className="text-center text-text-secondary mb-4 mx-auto font-medium px-12">
          Search meanings, play word games, and enhance your vocabulary.
        </p>

        <div className="max-w-2xl mx-auto lg:mb-12 mb-6">
          <Search />

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link
              href={route('dictionary')}
              className="bg-accent text-secondary-foreground font-arial px-6 py-2 text-sm lg:text-base rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Explore Dictionary
            </Link>
            <Link
              href={route('game')}
              className="bg-bg-color-1 hover:bg-green-600 text-white font-arial px-6 py-2 text-sm lg:text-base rounded-lg font-medium flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width={20} height={12} x={2} y={6} rx={2} />
                <circle cx={8} cy={12} r={2} />
                <path d="M15 12h2" />
                <path d="M16 11v2" />
              </svg>
              Play Word Game
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
