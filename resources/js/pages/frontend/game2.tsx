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
        bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564'),_radial-gradient(at_0%_0%,_hsla(223,89%,78%,1)_0,_transparent_50%),_radial-gradient(at_100%_100%,_hsla(216,92%,68%,1)_0,_transparent_50%)] 
        bg-cover bg-center bg-fixed bg-sky-300">

          <div className="grid grid-cols-4 gap-2 mb-12">
            {tiles.map((_, index) => (
              <div key={index} className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-white/60 rounded-lg flex items-center justify-center text-white text-2xl font-bold uppercase">
                {index + 1}
              </div>
            ))}
          </div>

          <div className="w-full max-w-2xl bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/30">
            <div className="flex flex-col gap-2">
              <div className="flex justify-center gap-1.5">
                {firstRow.map(key => (
                  <button key={key} className="h-12 w-8 sm:w-12 bg-white hover:bg-slate-100 rounded-md font-bold text-slate-800 transition-colors shadow-sm">
                    {key}
                  </button>
                ))}
              </div>
              <div className="flex justify-center gap-1.5">
                {secondRow.map(key => (
                  <button key={key} className="h-12 w-8 sm:w-12 bg-white hover:bg-slate-100 rounded-md font-bold text-slate-800 transition-colors shadow-sm">
                    {key}
                  </button>
                ))}
              </div>
              <div className="flex justify-center gap-1.5">
                <button className="h-12 px-2 sm:px-4 bg-slate-300/80 hover:bg-slate-300 text-slate-800 rounded-md font-bold text-xs uppercase transition-colors">Enter</button>
                {thirdRow.map(key => (
                  <button key={key} className="h-12 w-8 sm:w-12 bg-white hover:bg-slate-100 rounded-md font-bold text-slate-800 transition-colors shadow-sm">
                    {key}
                  </button>
                ))}
                <button className="h-12 px-2 sm:px-4 bg-slate-300/80 hover:bg-slate-300 text-slate-800 rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                    <line x1="18" y1="9" x2="12" y2="15"></line>
                    <line x1="12" y1="9" x2="18" y2="15"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
            <button className="flex-1 bg-white/90 hover:bg-white text-slate-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
              Give Up
            </button>
            <button className="flex-1 bg-white/90 hover:bg-white text-slate-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
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