
import FrontendLayout from "@/layouts/frontend-layout";
import React from "react";

export default function About() {
  return (
   <FrontendLayout>
 <>
      <section
        className="relative px-4 bg-cover bg-center overflow-hidden lg:p-8 p-2"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url('assets/images/backgrounds.png')",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className=" rounded-2xl md:rounded-3xl  ">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center bg-blue-500/10 rounded-full">
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
                  >
                  </path>
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-4xl  font-bold text-card-foreground text-center mb-4">
              About WordWise
            </h1>
            <p className="text-chart-2 text-base  text-center max-w-1xl mx-auto">
              Your trusted companion for exploring the richness of language
            </p>
          </div>
        </div>
        <section className="  py-4 px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Our Mission Section */}
            <div className="bg-white rounded-2xl shadow-lg p-5 mx-4 my-6">
              <h2 className="text-center text-xl font-semibold text-secondary-foreground mb-6">
                Our Mission
              </h2>
              
              <p className="text-chart-2 text-sm leading-relaxed mb-4 text-center px-4 md:px-40 lg:px-60 py-2 font-medium">
                WordWise is dedicated to making language learning accessible, enjoyable, and enriching for everyone. We
                believe that understanding words is the foundation of effective communication and lifelong learning.
              </p>
              
              <p className="text-chart-2 text-sm leading-relaxed text-center px-4 md:px-40 lg:px-60 py-2 font-medium">
                Whether you're a student expanding your vocabulary, a writer searching for the perfect word, or simply
                curious about language, WordWise provides the tools and resources you need to explore words with
                confidence.
              </p>
            </div>
            {/* Why Choose WordWise Section */}
            <div>
              <h2 className="text-center text-4xl lg:text-5xl font-bold text-secondary-foreground mb-8">
                Why Choose WordWise?
              </h2>
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Fast & Responsive */}
                <div className="bg-white rounded-2xl shadow-lg p-12">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-medium text-foreground mb-2">
                    Fast &amp; Responsive
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Lightning-fast search with instant results. Optimized for speed and performance.
                  </p>
                </div>
                {/* Comprehensive Database */}
                <div className="bg-white rounded-2xl shadow-lg p-12">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
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
                  <h3 className="text-lg lg:text-xl font-medium text-foreground mb-2">
                    Comprehensive Database
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Access thousands of words with detailed definitions, examples, and usage notes.
                  </p>
                </div>
                {/* User-Friendly */}
                <div className="bg-white rounded-2xl shadow-lg p-12">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">
                    User-Friendly
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Clean, intuitive interface designed for students, writers, and language enthusiasts.
                  </p>
                </div>
                {/* Educational Games */}
                <div className="bg-white rounded-2xl shadow-lg p-12">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      >
                      </path>
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-medium text-foreground mb-2 font-inter">
                    Educational Games
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-inter">
                    Learn while you play with interactive vocabulary quizzes and word games.
                  </p>
                </div>
              </div>
              {/* Our Commitment Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 font-inter">
                <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-6 font-inter">
                  Our Commitment
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1 font-inter">Accuracy</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-inter">
                      We ensure all definitions and examples are carefully curated and verified for accuracy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 font-inter">
                      Accessibility
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-inter">
                      Our platform is designed to be accessible to everyone, regardless of their language proficiency
                      level.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 font-inter">
                      Continuous Improvement
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-inter">
                      We regularly update our dictionary with new words, improved definitions, and enhanced features
                      based on user feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
   </FrontendLayout>
  );
}
