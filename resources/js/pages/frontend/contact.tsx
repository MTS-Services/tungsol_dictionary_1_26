import FrontendLayout from "@/layouts/frontend-layout";
import React from "react";

export default function Contact() {
  return (
  <FrontendLayout>
      <>
      <section
        className="relative px-4 bg-cover bg-center overflow-hidden p-8"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url(\"img/images.png\")",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className=" rounded-2xl md:rounded-3xl p-2  ">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  >
                  </path>
                </svg>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 text-base  text-center mb-8 md:mb-10 max-w-1xl mx-auto">
              Have a question, suggestion, or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
        <section className=" pb-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <form>
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {/* Name Field */}
                      <div>
                        <label className="block text-gray-800 font-medium mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                      {/* Email Field */}
                      <div>
                        <label className="block text-gray-800 font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                    {/* Subject Field */}
                    <div className="mb-6">
                      <label className="block text-gray-800 font-medium mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="What is this about?"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    {/* Message Field */}
                    <div className="mb-6">
                      <label className="block text-gray-800 font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us more..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                        defaultValue={""}
                      />
                    </div>
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                    >
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
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Email Us Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      >
                      </path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Email Us
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    For general inquiries and support
                  </p>
                  <a
                    href="mailto:support@wordwise.com"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    support@wordwise.com
                  </a>
                </div>
                {/* Feedback Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      >
                      </path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Feedback
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We value your feedback and continuously work to improve our dictionary. Let us know how we can serve
                    you better.
                  </p>
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
