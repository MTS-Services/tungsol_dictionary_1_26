import FrontendLayout from "@/layouts/frontend-layout";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic for sending email goes here
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
  };

  const contactInfos = [
    {
      title: "Email Us",
      description: "For general inquiries and support",
      link: "mailto:support@wordwise.com",
      linkText: "support@wordwise.com",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
    {
      title: "Feedback",
      description: "We value your feedback and work to improve daily. Let us know how we can serve you better.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      ),
    },
  ];

  return (
    <FrontendLayout>
      <section className="relative lg:py-20 py-8 px-4 overflow-hidden min-h-screen">
        {/* Desktop Background Layer */}
        <div
          className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url("assets/images/backgrounds.png")'
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-500/10 backdrop-blur-sm">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-slate-600 font-medium max-w-lg mx-auto">
              Have a question, suggestion, or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primari font-arial font-medium mb-2">Name *</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none"
                        placeholder="Your name"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-primari font-arial font-medium mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none"
                        placeholder="your@email.com"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-primari font-arial font-medium mb-2">Subject *</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none"
                      placeholder="What is this about?"
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-primari font-arial font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none resize-none"
                      placeholder="Tell us more..."
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"     
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium font-arial  py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {contactInfos.map((info, idx) => (
                <div key={idx} className="bg-white backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-white/40 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {info.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-primary font-arial mb-3">{info.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-4">{info.description}</p>
                  {info.link && (
                    <a href={info.link} className="text-primary font-bold hover:underline">
                      {info.linkText}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}