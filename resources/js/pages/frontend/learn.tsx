import FrontendLayout from "@/layouts/frontend-layout";
import React from "react";

export default function Learn() {
  return (
    <FrontendLayout>
      <section
        className="relative  lg:p-10 p-4 px-4 bg-cover bg-center overflow-hidden "
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url('assets/images/backgrounds.png')",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className=" rounded-2xl md:rounded-3xl p-2  ">
            <div className="flex justify-center lg:mb-6">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={44}
                  height={44}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4F39F6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-verdana text-center text-secondary-foreground mb-4 ">
              Learning Resources
            </h1>
            <p className="text-gray-600 text-base  text-center mb-8 md:mb-10 max-w-1xl mx-auto">
              Expand your vocabulary with our curated content and study materials
            </p>
          </div>
        </div>
        <section>
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="#4F39F6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-medium text-secondary-foreground font-inter">
                  Word Lists
                </h1>
                <p className="text-gray-500 text-md mt-1 font-medium font-arial">
                  Curated lists for different skill levels
                </p>
              </div>
            </div>
            {/* Word Lists Grid */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Common SAT Words */}
                <div className="bg-bg-background2   rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Common SAT Words
                    </h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      intermediate
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">100 items</p>
                </div>
                {/* Advanced Vocabulary */}
                <div className="bg-bg-background2   rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Advanced Vocabulary
                    </h3>
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                      advanced
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">150 items</p>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Business English */}
                <div className="bg-bg-background2   rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Business English
                    </h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      intermediate
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">80 items</p>
                </div>
                {/* Daily Use Words */}
                <div className="bg-bg-background2   rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Daily Use Words
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      beginner
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">200 items</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 mt-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="#4F39F6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-secondary-foreground font-inter">
                  Word Lists
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  Curated lists for different skill levels
                </p>
              </div>
            </div>
            {/* Word Lists Grid */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Common SAT Words */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Common SAT Words
                    </h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      intermediate
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">100 items</p>
                </div>
                {/* Advanced Vocabulary */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Advanced Vocabulary
                    </h3>
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                      advanced
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">150 items</p>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Business English */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Business English
                    </h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      intermediate
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">80 items</p>
                </div>
                {/* Daily Use Words */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Daily Use Words
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      beginner
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">200 items</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 mt-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="#4F39F6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800 font-inter">
                  Word Lists
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  Curated lists for different skill levels
                </p>
              </div>
            </div>
            {/* Word Lists Grid */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Common SAT Words */}
                <div className="bg-bg-background2   rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Common SAT Words
                    </h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      intermediate
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">100 items</p>
                </div>
                {/* Advanced Vocabulary */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Advanced Vocabulary
                    </h3>
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                      advanced
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">150 items</p>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Business English */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Business English
                    </h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      intermediate
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">80 items</p>
                </div>
                {/* Daily Use Words */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Daily Use Words
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      beginner
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">200 items</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 mt-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="#4F39F6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">Word Lists</h1>
                <p className="text-gray-500 text-sm mt-1">
                  Curated lists for different skill levels
                </p>
              </div>
            </div>
            {/* Word Lists Grid */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Common SAT Words */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Common SAT Words
                    </h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      intermediate
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">100 items</p>
                </div>
                {/* Advanced Vocabulary */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Advanced Vocabulary
                    </h3>
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                      advanced
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">150 items</p>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Business English */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Business English
                    </h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      intermediate
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">80 items</p>
                </div>
                {/* Daily Use Words */}
                <div className="bg-bg-background2  rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-secondary-foreground font-inter">
                      Daily Use Words
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      beginner
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">200 items</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </FrontendLayout>
  );
}
