import FrontendLayout from '@/layouts/frontend-layout'
import React, { useState } from 'react'

export default function Game() {
  const [tiles] = useState(Array(24).fill(null))
  
  const firstRow = ['Q','W','E','R','T','Y','U','I','O','P']
  const secondRow = ['A','S','D','F','G','H','J','K','L']
  const thirdRow = ['Z','X','C','V','B','N','M']

  return (
    <FrontendLayout>
      <div
        className="relative lg:pb-20 py-10 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url('assets/images/backgrounds.png')",
        }}
      >
        <div className="min-h-screen flex flex-col items-center justify-center p-4  
        bg-cover bg-center bg-fixed ">

          <div className="grid grid-cols-4 gap-2 mb-12">
            {tiles.map((_, index) => (
              <div key={index} className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-white/60 rounded flex items-center justify-center text-white text-2xl font-bold uppercase">
                
              </div>
            ))}
          </div>

          <div className="w-full max-w-7xl p-4 rounded">
            <div className="flex flex-col gap-2">
              <div className="flex justify-center gap-1.5">
                {firstRow.map(key => (
                  <button key={key} className="h-12 w-8 bg-[var(--white-secondary)] hover:bg-slate-100 rounded font-bold text-slate-800 transition-colors shadow-sm text-sm">
                    {key}
                  </button>
                ))}
              </div>
              <div className="flex justify-center gap-1.5">
                {secondRow.map(key => (
                  <button key={key} className="h-12 w-8  bg-[var(--white-secondary)] hover:bg-slate-100 rounded font-bold text-slate-800 transition-colors shadow-sm text-sm">
                    {key}
                  </button>
                ))}
              </div>
              <div className="flex justify-center gap-1.5">
                <button className="h-12 px-2 sm:px-4 bg-[var(--muted-foreground)] hover:bg-slate-300 text-slate-800 rounded font-bold text-xs uppercase transition-colors">Enter</button>
                {thirdRow.map(key => (
                  <button key={key} className="h-12 w-8 bg-[var(--white-secondary)] hover:bg-slate-100 rounded font-bold text-slate-800 transition-colors shadow-sm text-sm">
                    {key}
                  </button>
                ))}
                <button className="h-12 px-2 sm:px-4 bg-[var(--muted-foreground)] hover:bg-slate-300 text-slate-800 rounded transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                    <line x1="18" y1="9" x2="12" y2="15"></line>
                    <line x1="12" y1="9" x2="18" y2="15"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full max-w-7xl">

            <button className="text-sm font-arial font-medium flex-1 bg-white/90 hover:bg-white text-slate-700 py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
              Give Up
            </button>

            <button className="text-sm font-arial font-medium flex-1 bg-white/90 hover:bg-white text-slate-700 py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
              Pause
            </button>
          </div>
        </div>
      </div>
    </FrontendLayout>
  )
}