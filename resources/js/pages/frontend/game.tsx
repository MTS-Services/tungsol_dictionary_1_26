import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function Game() {
  return (
    <FrontendLayout>
      <section className="relative lg:py-20 py-8 px-4 overflow-hidden min-h-screen bg-[var(--mobilebg)]">
        {/* Background Overlay */}
        <div
          className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url("assets/images/backgrounds.png")'
          }}
        />
        
        {/* Main Content Container */}
        <div className="max-w-5xl container mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="p-2 rounded-lg inline-block mb-4">
              <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7H18C20.2091 7 22 8.79086 22 11V15C22 17.2091 20.2091 19 18 19C17.4477 19 17 18.5523 17 18V17C17 15.8954 16.1046 15 15 15H9C7.89543 15 7 15.8954 7 17V18C7 18.5523 6.55228 19 6 19C3.79086 19 2 17.2091 2 15V11C2 8.79086 3.79086 7 6 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 11H8M7 10V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="15" cy="11" r="1" fill="currentColor"/>
                <circle cx="17" cy="12" r="1" fill="currentColor"/>
              </svg>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 font-sans px-4">Word Guess Game</h1>
            <p className="text-slate-600 font-medium font-sans text-lg px-4">Challenge your vocabulary and have fun!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rules Section */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-2xl p-6 lg:p-10 border border-slate-100">
              <h2 className="text-2xl font-medium text-primary font-arial">How to Play</h2>
              <p className="text-slate-500 mb-8 text-sm font-sans uppercase tracking-wide">Master the rules and start playing</p>

              <ul className="space-y-5 mb-10">
                {[
                  "Guess the 4-letter word in 6 attempts",
                  "Each guess must be a valid word",
                  "After each guess, tiles change color to show closeness",
                  "Green: Correct letter, correct position",
                  "Yellow: Correct letter, wrong position",
                  "Gray: Letter is not in the word"
                ].map((rule, index) => (
                  <li key={index} className="flex items-start gap-4 text-slate-700">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-1">
                      {index + 1}
                    </span>
                    <span className="font-medium font-sans text-base leading-snug">{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
                <p className="text-xs font-medium text-primary mb-4 uppercase tracking-widest">Example:</p>
                <div className="flex gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 text-white flex items-center justify-center rounded-lg font-bold text-xl shadow-md">W</div>
                  <div className="w-12 h-12 bg-slate-400 text-white flex items-center justify-center rounded-lg font-bold text-xl shadow-md">O</div>
                  <div className="w-12 h-12 bg-amber-500 text-white flex items-center justify-center rounded-lg font-bold text-xl shadow-md">R</div>
                  <div className="w-12 h-12 bg-slate-400 text-white flex items-center justify-center rounded-lg font-bold text-xl shadow-md">D</div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic font-sans">
                  <strong>W</strong> is correct • <strong>R</strong> is misplaced • <strong>O</strong> and <strong>D</strong> are incorrect
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => window.location.href = '/games2'} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-emerald-200 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Now
                </button>
                <button className="flex-1 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-4 px-6 rounded-xl transition-all">
                  Play as Guest 
                </button>
              </div>
            </div>

            {/* Sidebar Stats & Challenges */}
            <div className="flex flex-col gap-6">
              <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="mb-4">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="48" 
                        height="48" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        {/* Trophy Cup */}
                        <path d="M6 3h12v4a6 6 0 0 1-12 0V3z" />
                        
                        {/* Left Handle */}
                        <path d="M6 5H4a2 2 0 0 0 0 4h2" />
                        
                        {/* Right Handle */}
                        <path d="M18 5h2a2 2 0 0 1 0 4h-2" />
                        
                        {/* Stem */}
                        <path d="M12 13v4" />
                        
                        {/* Base */}
                        <path d="M8 21h8" />
                      </svg>

                  </div>
                  <h3 className="text-xl font-medium font-arial mb-3">Track Your Progress</h3>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">Save your stats and compete on the global leaderboard!</p>
                  <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md">
                    Sign Up Free
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <h3 className="text-lg font-medium font-arial text-primary mb-4">Daily Challenge</h3>
                <div className="flex items-center gap-3 text-slate-500 text-sm mb-6">
                  <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth="2"/>
                    <path d="M12 7v5l3 2" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-semibold text-slate-600">Resets in 08:23:12</span>
                </div>
                <button className="w-full border-2 border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all text-sm">
                  Play Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  )
}