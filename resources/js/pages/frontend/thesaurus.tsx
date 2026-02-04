import FrontendLayout from "@/layouts/frontend-layout";
import React from "react";

export default function Thesaurus() {
  return (
    <FrontendLayout>
      <>
        <section
          className="relative py-8 md:py-20 px-4 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url("assets/images/backgrounds.png")',
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-bg-background2 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl">
              <div className="flex justify-center lg:mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center">
                 <svg width="54" height="54" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19V5C4 3.89543 4.89543 3 6 3H19V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H19" 
                          stroke="#0055ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    <path d="M8 7H15" stroke="#0055ff" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M8 11H17" stroke="#0055ff" stroke-width="2.5" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl text-foreground text-center mb-4 font-medium">
                Thesaurus
              </h1>
              <p className="text-gray-600 text-base md:text-lg text-center mb-8 md:mb-10 max-w-xl mx-auto font-inter font-medium">
                Find synonyms and antonyms to enrich your vocabulary
              </p>
              <div className="flex flex-col md:flex-row items-center gap-3 mb-10 md:mb-12 max-w-3xl mx-auto w-full">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for synonyms..."
                    className="w-full pl-12 pr-4 py-4 text-gray-700 bg-bg-background2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all active:scale-95 shadow-md">
                  Search
                </button>
              </div>
              <div className="bg-text-white rounded-2xl p-5 md:p-8 border border-gray-200">
                <h2 className="text-lg font-medium text-foreground mb-6 text-center md:text-left font-inter">
                  Popular Thesaurus Searches
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    happy
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    sad
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    good
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    bad
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    beautiful
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    smart
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    important
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    difficult
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    easy
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-foreground font-medium py-3 px-6 rounded-lg transition-colors font-arial">
                    strong
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </FrontendLayout>
  );
}
