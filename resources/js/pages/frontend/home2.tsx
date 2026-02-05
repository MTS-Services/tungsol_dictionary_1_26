
import FrontendLayout from "@/layouts/frontend-layout";
import React from "react";

export default function About() {
  return (
   <FrontendLayout>
 <>
    <div className="min-h-screen w-full relative flex flex-col items-center py-12 px-4 font-sans overflow-x-hidden">
  
  <div 
    className="fixed inset-0 z-0 bg-cover bg-center"
   style={{backgroundImage: "url('assets/images/backgrounds.png')"}}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-blue-200/40 via-blue-400/30 to-blue-500/50"></div>
  </div>

  <div className="relative z-10 w-full max-w-4xl space-y-4 bg-white p-4">
    
    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-6">
      <span>Home</span>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      <span>Dictionary</span>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      <span className="text-slate-800">Knowledge</span>
    </div>

    <div className="bg-white rounded-2xl shadow-sm p-8">
      <div className="flex justify-between items-start mb-2">
        <h1 className="text-4xl font-bold text-slate-800">Knowledge</h1>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-slate-100 rounded-full text-blue-500"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg></button>
          <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 5h14v14H5z"/></svg></button>
          <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg></button>
        </div>
      </div>
      <p className="text-slate-400 text-sm font-mono mb-8">/k-n-o-w-l-e-d-g-e/</p>

      <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">Meanings</h3>

      <div className="space-y-6">
        <div>
          <span className="px-2 py-0.5 bg-slate-100 text-[10px] font-bold text-slate-500 rounded uppercase">noun</span>
          <p className="mt-3 text-slate-700 font-medium">The state or quality of being knowledge.</p>
          <div className="mt-2 bg-slate-50/80 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-xs text-blue-400 font-semibold mb-1 uppercase tracking-tight">Example:</p>
            <p className="text-sm italic text-slate-600">"The knowledge of the landscape was breathtaking."</p>
          </div>
        </div>

        <div>
          <p className="text-slate-700 font-medium">Something that possesses the characteristics of knowledge.</p>
          <div className="mt-2 bg-slate-50/80 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-xs text-blue-400 font-semibold mb-1 uppercase tracking-tight">Example:</p>
            <p className="text-sm italic text-slate-600">"She found knowledge in the simple things in life."</p>
          </div>
        </div>

        <div className="pt-4">
          <span className="px-2 py-0.5 bg-slate-100 text-[10px] font-bold text-slate-500 rounded uppercase">adjective</span>
          <p className="mt-3 text-slate-700 font-medium">Possessing qualities that give great pleasure or satisfaction to see, hear, think about, etc.</p>
          <div className="mt-2 bg-slate-50/80 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-xs text-blue-400 font-semibold mb-1 uppercase tracking-tight">Example:</p>
            <p className="text-sm italic text-slate-600">"It was a knowledge day for a walk in the park."</p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">Synonyms</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full border border-green-100">lovely</span>
          <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full border border-green-100">attractive</span>
          <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full border border-green-100">gorgeous</span>
          <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full border border-green-100">stunning</span>
          <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full border border-green-100">elegant</span>
          <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full border border-green-100">graceful</span>
          <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-medium rounded-full border border-green-100">charming</span>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">Antonyms</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full border border-red-100">ugly</span>
          <span className="px-3 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full border border-red-100">unattractive</span>
          <span className="px-3 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full border border-red-100">plain</span>
          <span className="px-3 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full border border-red-100">unpleasant</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">Related Words</h3>
      <div className="divide-y divide-slate-50">
        <button className="w-full text-left py-3 text-sm text-slate-700 hover:text-blue-500 flex justify-between items-center group">
          beauty <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </button>
        <button className="w-full text-left py-3 text-sm text-slate-700 hover:text-blue-500 flex justify-between items-center group">
          beautifully <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </button>
        <button className="w-full text-left py-3 text-sm text-slate-700 hover:text-blue-500 flex justify-between items-center group">
          beautify <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </button>
      </div>
    </div>

  </div>
</div>
    </>
   </FrontendLayout>
  );
}
