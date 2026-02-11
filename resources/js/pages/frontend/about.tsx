import FrontendLayout from "@/layouts/frontend-layout";
import React from "react";

// 1. Extract feature data to keep the JSX clean
const FEATURES = [
  {
    title: "Fast & Responsive",
    desc: "Lightning-fast search with instant results. Optimized for speed and performance.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Comprehensive Database",
    desc: "Access thousands of words with detailed definitions, examples, and usage notes.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    title: "User-Friendly",
    desc: "Our platform is designed to be intuitive and easy to use, with a clean and modern interface.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
  },
  {
    title: "Educational Games",
    desc: "Our platform includes interactive vocabulary quizzes and word games to make learning fun and engaging.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

export default function About() {
  return (
    <FrontendLayout>
      <section className="relative lg:py-20 py-8 px-4 overflow-hidden bg-[var(--mobilebg)]">
        {/* Desktop Background Layer */}
        <div
          className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url("assets/images/backgrounds.png")'
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-500/10">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              About WordWise
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Your trusted companion for exploring the richness of language.
            </p>
          </div>

          <div className="space-y-12">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 text-center border border-slate-50">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-slate-600 leading-relaxed text-lg">
                  WordWise is dedicated to making language learning accessible, enjoyable, and enriching for everyone. 
                  We believe that understanding words is the foundation of effective communication.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Whether you're a student, a writer, or simply curious, WordWise provides the tools you need to explore 
                  words with confidence.
                </p>
              </div>
            </div>

            {/* Why Choose WordWise Section */}
            <div>
              <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-900 mb-12">
                Why Choose WordWise?
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-shadow border border-slate-50">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {feature.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium font-arial text-primary mb-3">{feature.title}</h3>
                    <p className="text-primary leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commitment Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-slate-900">
              <h3 className="text-3xl font-medium text-primary font-arial text-left mb-8">Our Commitment</h3>
              <div className="grid grid-rows-2 gap-8">
                {[
                  { title: "Accuracy", text: "We ensure all definitions and examples are carefully curated and verified for accuracy." },
                  { title: "Accessibility", text: "Our platform is designed to be accessible to everyone, regardless of their language proficiency level." },
                  { title: "Continuous Improvement", text: "We regularly update our dictionary with new words, improved definitions, and enhanced features based on user feedback." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="text-xl font-medium font-arial text-primary">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}