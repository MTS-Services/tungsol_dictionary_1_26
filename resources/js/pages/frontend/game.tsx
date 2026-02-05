import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function Game() {
  return (
  <FrontendLayout>

      
<div
        className=" relative lg:py-20 py-5 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url('assets/images/backgrounds.png')",
        }}
      >
    

    <div className="max-w-5xl container mx-auto">
        <div className="text-center mb-8">
            <div className=" p-2 rounded-lg inline-block">
              <svg className="w-16 h-16 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7H18C20.2091 7 22 8.79086 22 11V15C22 17.2091 20.2091 19 18 19C17.4477 19 17 18.5523 17 18V17C17 15.8954 16.1046 15 15 15H9C7.89543 15 7 15.8954 7 17V18C7 18.5523 6.55228 19 6 19C3.79086 19 2 17.2091 2 15V11C2 8.79086 3.79086 7 6 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 11H8M7 10V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="15" cy="11" r="1" fill="currentColor"/>
                <circle cx="17" cy="12" r="1" fill="currentColor"/>
              </svg>
            </div>
            <h1 className="text-4xl font-medium text-slate-800 mb-2 font-arial">Word Guess Game</h1>
            <p className="text-slate-600 font-medium font-arial">Challenge your vocabulary and have fun!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-2xl font-medium text-slate-800 font-arial">How to Play</h2>
                <p className="text-slate-500 mb-6 text-sm font-arial">Master the rules and start playing</p>

                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-4 text-slate-700">
                        <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                        <span className="font-medium font-arial text-base">Guess the 4-letter word in 6 attempts</span>
                    </li>
                    <li className="flex items-start gap-4 text-slate-700">
                        <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                        <span className="font-medium font-arial text-base">Each guess must be a valid word</span>
                    </li>
                    <li className="flex items-start gap-4 text-slate-700">
                        <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                        <span className="font-medium font-arial text-base">After each guess, tiles change color to show how close you are</span>
                    </li>
                    <li className="flex items-start gap-4 text-slate-700">
                        <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                        <span className="font-medium font-arial text-base">Green means correct letter in correct position</span>
                    </li> 
                    <li className="flex items-start gap-4 text-slate-700">
                        <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">5</span>
                        <span className="font-medium font-arial text-base">Yellow means correct letter in wrong position</span>
                    </li>
                    <li className="flex items-start gap-4 text-slate-700">
                        <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">6</span>
                        <span className="font-medium font-arial text-base">Gray means letter is not in the word</span>
                    </li>
                </ul>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 mb-8">
                    <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest font-arial">Example:</p>
                    <div className="flex gap-2 mb-4">
                        <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded font-bold text-xl shadow-sm">W</div>
                        <div className="w-12 h-12 bg-slate-400 text-white flex items-center justify-center rounded font-bold text-xl shadow-sm">O</div>
                        <div className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center rounded font-bold text-xl shadow-sm">R</div>
                        <div className="w-12 h-12 bg-slate-400 text-white flex items-center justify-center rounded font-bold text-xl shadow-sm">D</div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed italic font-arial">
                        W is in the correct position • R is in the word but wrong position • O and D are not in the word
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-arial font-medium py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 4v16l13-8z" />
                        </svg>
                        Play Now
                    </button>
                    <button className="flex-1 border-2 border-slate-100 hover:bg-slate-50 text-foreground font-medium py-3.5 px-6 rounded-xl transition-all font-arial">
                        Play as Guest
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="bg-blue-600 rounded-2xl shadow-xl p-7 text-white">
                    <div className="text-3xl mb-4">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9V2C6 1.44772 6.44772 1 7 1H17C17.5523 1 18 1.44772 18 2V9C18 12.3137 15.3137 15 12 15C8.68629 15 6 12.3137 6 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 5H4C2.89543 5 2 5.89543 2 7V8C2 9.10457 2.89543 10 4 10H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18 5H20C21.1046 5 22 5.89543 22 7V8C22 9.10457 21.1046 10 20 10H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 15V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8 23H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-arial">Track Your Progress</h3>
                    <p className="text-blue-100 text-base mb-6 leading-relaxed font-arial">Sign up to save your stats, compete with friends, and track your improvement!</p>
                    <button className="w-full bg-white text-foreground font-medium py-2.5 rounded-lg hover:bg-blue-50 transition-colors shadow-sm font-arial">
                        Sign Up Free
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-7 border border-white/50">
                    <h3 className="text-lg font-medium text-slate-800 mb-4 font-arial">Daily Challenge</h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V6M12 18V22M6 12H2M22 12H18M15.657 15.657L13.243 13.243M13.243 10.757L15.657 13.171M10.757 13.243L8.343 10.829M10.757 10.757L8.343 13.171" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        <span className="font-medium font-arial">Resets in 8h 23m</span>
                    </div>
                    <button className="w-full border-2 border-slate-100 text-foreground font-medium py-2.5 rounded-lg hover:bg-slate-50 transition-colors font-arial text-sm">
                        Play Today's Challenge
                    </button>
                </div>
            </div>
        </div>
    </div>
</div> 

  </FrontendLayout>
  )
}

