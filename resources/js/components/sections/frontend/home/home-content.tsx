
 function HomeContent() {
  return (
    <>
          <section
    className="relative lg:py-20 py-8 px-4 bg-cover bg-center overflow-hidden"
    style={{
      backgroundImage:
        'linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url("assets/images/backgrounds.png")'
    }}
  >
    <div className="container mx-auto relative z-10 ">
      <h1 className="lg:text-6xl text-3xl font-bold text-gray-900 text-center mb-4 ">
        Discover the Power of Words
      </h1>
      <p className="text-center text-gray-600 mb-4 mx-auto font-medium">
        Search meanings, play word games, and enhance your vocabulary.
      </p>
      <div className="max-w-2xl mx-auto lg:mb-12 mb-6">
        <div className="  rounded-lg lg:p-4 flex flex-col sm:flex-row gap-3">
          <div className="flex gap-3 justify-center">
            <button className="transition duration-150 ease-in-out bg-parpal  text-white px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors">
              Dictionary
            </button>
            <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors">
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
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95">
            <svg
              className="w-8 h-8 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
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
            Explore Dictionary
          </button>
          <button className="bg-[#00A63E] hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md transition-all active:scale-95">
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
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8 relative overflow-hidden border border-white/20">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-[#155DFC] text-white px-3 py-1 rounded text-xs font-medium uppercase tracking-wider">
            Word of the Day
          </span>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#155DFC"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          </button>
        </div>
        <h2 className="text-3xl font-medium text-gray-900 mb-2">
          Perspicacious
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          <span className="font-semibold italic">per·spi·ca·cious</span>
          <br /> • adjective
        </p>
        <p className="text-gray-800 text-lg font-medium mb-4 leading-relaxed">
          Having a ready insight into and understanding of things: mentally
          sharp or keen.
        </p>
        <div className=" bg-gray-100 p-4 rounded pt-4">
          <p className="text-gray-500 text-xs font-bold uppercase mb-2">
            Example:
          </p>
          <p className="text-gray-700 italic">
            "The perspicacious detective noticed the tiny clue that everyone
            else had missed."
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <section className="relative lg:py-20 py-8 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="img/Crop.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-40/90 via-blue-100/90 to-indigo-100/90" />
      </div>
      <div className="container mx-auto relative">
        {/* Trending Words Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl lg:p-12 p-8 lg:mb-12 mb-6 shadow-lg">
          <h2 className="text-3xl font-medium text-gray-800 mb-6 flex items-center gap-2">
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
            Trending Words
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              serendipity
            </span>
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              ephemeral
            </span>
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              resilience
            </span>
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              paradigm
            </span>
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              ubiquitous
            </span>
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              eloquent
            </span>
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              enigma
            </span>
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              nostalgia
            </span>
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              aesthetic
            </span>
            <span className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              ambiguous
            </span>
          </div>
        </div>
        {/* How It Works Section */}
        <h2 className=" lg:text-4xl text-2xl font-bold text-center text-gray-800 lg:mb-12 mb-6">
          How It Works
        </h2>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mb-16 mb-8">
          {/* Comprehensive Dictionary */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
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
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Comprehensive Dictionary
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Search thousands of words with detailed definitions,
              pronunciations, and examples.
            </p>
          </div>
          {/* Thesaurus & Synonyms */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
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
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Thesaurus &amp; Synonyms
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discover related words, synonyms, and antonyms to expand your
              vocabulary.
            </p>
          </div>
          {/* Word Games */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
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
            <h3 className="text-xl font-bold text-gray-800 mb-3">Word Games</h3>
            <p className="text-gray-600 leading-relaxed">
              Challenge yourself with fun word games and improve your language
              skills.
            </p>
          </div>
          {/* Learning Resources */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
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
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Learning Resources
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access educational content, word lists, and study materials.
            </p>
          </div>
        </div>
        {/* CTA Section */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
            Ready to Expand Your Vocabulary?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of word enthusiasts improving their language skills
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
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
  )
}


export default HomeContent;