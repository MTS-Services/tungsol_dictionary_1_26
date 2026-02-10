import FrontendLayout from "@/layouts/frontend-layout";
import React from "react";

export default function Dictionary() {
  return (
    <FrontendLayout>
      <>
        <section
          className="relative lg:py-20 lg:px-4 py-4 px-2 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url('assets/images/backgrounds.png')",
          }}
        >
          <div className="container mx-auto relative z-10">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center lg:mb-6 mb-4 mx-auto">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                >
                </path>
              </svg>
            </div>
            <h1 className="lg:text-6xl text-4xl font-bold font-Verdana text-gray-900 text-center mb-4">
              Dictionary
            </h1>
            <p className="text-center text-gray-600 mb-4 mx-auto font-regular font-inter px-12">
              Search meanings, play word games, and enhance your vocabulary.
            </p>
            <div className="max-w-2xl mx-auto lg:mb-12 mb-6">
              <div className="  rounded-lg p-4 flex flex-col sm:flex-row gap-3">
                <div className="flex gap-3 justify-center">
                  <button className="font-arial bg-parpal font-verdana text-text-white px-4 py-2 rounded-lg font-regular text-md whitespace-nowrap transition-colors">
                    Dictionary
                  </button>
                  <button className="font-arial bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-regular text-md whitespace-nowrap transition-colors">
                    Thesaurus
                  </button>
                </div>
                <div className="flex-1 relative">
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text "
                    placeholder="Search for synonyms and antonyms"
                    className="w-full text-sm px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto bg-white  rounded-2xl p-8 mb-12 border-2 border-gray-300">
              <h2 className="text-2xl font-arial font-regular text-gray-800 mb-6 flex items-center ">
                Popular Searches
              </h2>
              <div className="flex flex-wrap gap-4 pb-8">
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  serendipity   
                </span>
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  ephemeral
                </span>
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  resilience
                </span>
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  paradigm
                </span>
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  ubiquitous
                </span>
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  eloquent
                </span>
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  enigma
                </span>
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  nostalgia
                </span>
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  aesthetic
                </span>
                <span className="px-3 py-2.5 bg-garayasa rounded-full font-arial text-gray-900 font-medium transition-shadow cursor-pointer">
                  ambiguous
                </span>
              </div>
            </div>
            <section className="#">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Browse Alphabetically Section */}
                  
                     
                    {/* Alphabet Grid */}
                 <div className="max-w-2xl p-8 bg-white rounded-3xl  shadow-lg border-2 border-gray-300">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Browse Alphabetically</h2>

                    {/* Unified flex container for consistent spacing */}
                    <div className="flex flex-wrap gap-3">
                      {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map((letter) => (
                        <a
                          key={letter}
                          href={`#${letter}`}
                          className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg text-lg font-medium text-gray-700 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all duration-200"
                        >
                          {letter}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick Links Section */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-300">
                    <h2 className="text-1xl font-medium text-foreground mb-6">
                      Quick Links
                    </h2>
                    {/* Links List */}
                    <div className="space-y-4">
                      <a
                        href="#"
                        className="flex items-center justify-between bg-gray-100 hover:bg-blue-100 text-gray-800 font-medium py-4 px-6 rounded-lg transition-colors group"
                      >
                        <span className="flex items-center gap-2 font-arial font-medium text-foreground text-1xl"> Browse Thesaurus <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        </span>
                        
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-between bg-gray-100 hover:bg-blue-100 text-gray-800 font-medium py-4 px-6 rounded-lg transition-colors group"
                      >
                        <span className="flex items-center gap-2 font-arial font-medium text-foreground text-1xl">Learning Resources <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg></span>     
                        
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-between bg-gray-100 hover:bg-blue-100 text-gray-800 font-medium py-4 px-6 rounded-lg transition-colors group"
                      >
                        <span className="flex items-center gap-2 font-arial font-medium text-foreground text-1xl">Word of the Day<svg
                          className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg> </span>
                        
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </section>
        <section>
        

           <section className="relative lg:py-20 py-8 z-10 px-4 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <img
          src="/assets/images/background2.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-2 bg-gradient-to-br from-blue-40/50 via-blue-100/50 to-indigo-100/50" />
      </div>

      <div className="container mx-auto relative">
        {/* Trending Words Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 mb-12 border border-blue-200">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  Trending Words
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    serendipity
                  </span>
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    ephemeral
                  </span>
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    resilience
                  </span>
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    paradigm
                  </span>
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    ubiquitous
                  </span>
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    eloquent
                  </span>
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    enigma
                  </span>
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    nostalgia
                  </span>
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    aesthetic
                  </span>
                  <span className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 bg-white rounded-full text-sm sm:text-base text-foreground font-medium transition-shadow cursor-pointer border border-gray-200/100 border-2">
                    ambiguous
                  </span>
                </div>
                
              </div>
        {/* How It Works Section */}
        <h2 className=" lg:text-4xl text-2xl font-arial font-bold text-center text-text-primary lg:mb-12 mb-6">
          How It Works
        </h2>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mb-16 mb-8 ">
          {/* Comprehensive Dictionary */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 transition-shadow border border-gray-200/100">
            <div className="w-14 h-14  rounded-xl flex items-center justify-center mb-6">
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
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-arial font-regular text-text-primary mb-3">
              Comprehensive Dictionary
            </h3>
            <p className="text-text-secondary font-inter font-regular leading-relaxed">
              Search thousands of words with detailed definitions,
              pronunciations, and examples.
            </p>
          </div>
          {/* Thesaurus & Synonyms */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 transition-shadow border border-gray-200/100">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6">
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-arial font-regular text-text-primary mb-3">
              Thesaurus &amp; Synonyms
            </h3>
            <p className="text-text-secondary font-inter font-regular leading-relaxed">
              Discover related words, synonyms, and antonyms to expand your
              vocabulary.
            </p>
          </div>
          {/* Word Games */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 transition-shadow border border-gray-200/100">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6">
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-arial font-regular text-text-primary mb-3">
              Word Games
            </h3>
            <p className="text-text-secondary font-inter font-regular leading-relaxed">
              Challenge yourself with fun word games and improve your language
              skills.
            </p>
          </div>
          {/* Learning Resources */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 transition-shadow border border-gray-200/100">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6">
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
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-arial font-regular text-text-primary mb-3">
              Learning Resources
            </h3>
            <p className="text-text-secondary font-inter font-regular leading-relaxed">
              Access educational content, word lists, and study materials.
            </p>
          </div>
        </div>
        {/* CTA Section */}
        <div className="max-w-6xl mx-auto bg-btn-primary rounded-3xl p-12 text-center shadow-2xl font-arial">
          <h2 className=" font-regular font-arial lg:text-4xl text-2xl text-text-white mb-4">
            Ready to Expand Your Vocabulary?
          </h2>
          <p className="text-text-white text-md font-regular font-arial mb-8">
            Join thousands of word enthusiasts improving their language skills
          </p>
          <a
            href="#"
            className="font-regular font-arial inline-flex font-sm items-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Started Free
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

    </section>
        </section>
      </>
    </FrontendLayout>
  );
}
