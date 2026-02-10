import FrontendLayout from "@/layouts/frontend-layout";

export default function Thesaurus2() {
  return (
    <FrontendLayout>
      <>
          
        <div className="min-h-screen w-full relative flex items-center justify-center p-4 font-sans overflow-hidden">
  
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('assets/images/backgrounds.png')",
              filter: "blur(2px)" 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200/40 via-blue-400/30 to-blue-500/50"></div>
          </div>

          <div className="w-full max-w-5xl z-10">
            
            <div className="text-center mb-10">
              <div className=" w-10 h-12 rounded-md flex items-center justify-center mx-auto mb-4 ">
                <div className="flex justify-center lg:mb-6"><div className="w-10 h-10 rounded-2xl flex items-center justify-center"><svg width="54" height="54" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19V5C4 3.89543 4.89543 3 6 3H19V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H19" stroke="#0055ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 7H15" stroke="#0055ff" stroke-width="2.5" stroke-linecap="round"></path><path d="M8 11H17" stroke="#0055ff" stroke-width="2.5" stroke-linecap="round"></path></svg></div></div>
              </div>
              <h1 className="text-3xl font-medium text-slate-800 tracking-tight font-arial ">Thesaurus</h1>
              <p className="text-slate-600 mt-1 font-medium">Find synonyms and antonyms to enrich your vocabulary</p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 mb-8 max-w-2xl mx-auto">
              <div className="relative w-full max-w-md"> {/* Added width constraint for visibility */}
                  <span className="absolute inset-y-0 left-4 flex items-center z-10">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="gray"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                  </span>
                  <input 
                    type="text" 
                    defaultValue="happy" 
                    // Changed bg color to a visible slate for debugging, keep your var if you define it in CSS
                    className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-white/50 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-gray-500 bg-white/80 backdrop-blur-sm" 
                  /> 
                </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2.5 rounded-xl shadow-lg transition-all font-semibold ">
                Search
              </button>
            </div>

            <div className="container mx-auto bg-white rounded-2xl shadow-xl p-10 min-h-[450px]">
              <h2 className="text-3xl font-medium text-slate-800 mb-8 font-arial">happy</h2>

              <div className="flex bg-slate-100 p-1 rounded-xl mb-10 w-full">
                <button className="font-inter flex-1 py-1.5 text-sm font-medium rounded-lg bg-white shadow-sm text-slate-800 transition-all">
                  Synonyms
                </button>
                <button className="font-inter flex-1 py-1.5 text-sm font-medium text-cofy-gray hover:text-slate-600 transition-all font-arial text-sm">
                  Antonyms
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-cofy-gray text-sm font-inter mb-5">Common</h3>
                  <div className="flex flex-wrap gap-4">
                    {['word1', 'word2', 'word3', 'word4'].map((word) => (
                      <span key={word} className="px-5 py-2 bg-green-50 font-inter font-medium text-green-600 rounded-full text-sm transition-colors cursor-default text-sm">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-cofy-gray text-sm font-inter mb-5">Formal</h3>
                  <div className="flex flex-wrap gap-4">
                    {['formal1', 'formal2', 'formal3'].map((word) => (
                      <span key={word} className="px-5 py-2 bg-blue-50 font-inter font-medium text-blue-600 rounded-full text-sm transition-colors cursor-default hover:bg-blue-100">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-cofy-gray text-sm font-inter mb-5 font-inter font-medium text-sm">Informal</h3>
                  <div className="flex flex-wrap gap-4">
                    {['informal1', 'informal2'].map((word) => (
                      <span key={word} className="px-5 py-2 bg-purple-50 font-inter font-medium text-purple-600 rounded-full text-sm transition-colors cursor-default border border-purple-100 hover:bg-purple-100">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button className="font-inter w-full mt-6 bg-white/100 hover:bg-white py-2 rounded-xl text-cofy-gray font-medium shadow-md transition-all border border-white/20">
              New Search
            </button>
          </div>
        </div>
      </>
    </FrontendLayout>
  );
}
