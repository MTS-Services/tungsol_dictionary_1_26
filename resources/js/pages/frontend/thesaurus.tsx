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
              "linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url(\"img/images.png\")",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl">
              <div className="flex justify-center lg:mb-6">
                <div className="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6M13 3.5L18.5 9H13V3.5M8 11H16V13H8V11M8 15H13V17H8V15Z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-4">
                Thesaurus
              </h1>
              <p className="text-gray-600 text-base md:text-lg text-center mb-8 md:mb-10 max-w-xl mx-auto">
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
                    className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all active:scale-95 shadow-md">
                  Search
                </button>
              </div>
              <div className="bg-white/50 rounded-2xl p-5 md:p-8 border border-gray-200">
                <h2 className="text-lg md:text-xl font-bold text-gray-600 mb-6 text-center md:text-left">
                  Popular Thesaurus Searches
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    happy
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    sad
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    good
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    bad
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    beautiful
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    smart
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    important
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    difficult
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    easy
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
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
