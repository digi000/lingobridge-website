"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, client query would be saved or emailed here.
    // TODO(security): Ensure contact form inputs are validated before processing.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm space-y-6">
          <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-blue-950">Message Sent</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Thank you for contacting LingoBridge. Your message has been routed to our language coordination desk. One of our support representatives will get in touch with you shortly.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex justify-center items-center w-full px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 leading-tight">
            Contact Our Support Team
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have questions about booking availability, rates, or custom dialect requirements? We are here to support your team 24/7.
          </p>
        </section>

        {/* Narrative & Visual Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Coordinates details (left column on desktop) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact cards */}
            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-blue-950">Email Support</h2>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    General inquiries & coordinating requests:
                  </p>
                  <p className="text-sm font-semibold text-blue-600 mt-0.5">
                    info@lingobridge.ca
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-blue-950">Regional Coordinates</h2>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Serving public and private sectors in:
                  </p>
                  <p className="text-sm font-semibold text-blue-950 mt-0.5">
                    Calgary & Edmonton, Alberta
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-blue-950">Hours of Operation</h2>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Client portal and request matching is open:
                  </p>
                  <p className="text-sm font-semibold text-blue-950 mt-0.5">
                    24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </div>

            {/* Photographic image */}
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden border border-slate-100 shadow-md">
              <Image
                src="/contact_support.png"
                alt="LingoBridge customer support coordinator wearing a headset at a desk in a bright office environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>
          </div>

          {/* Contact form (right column on desktop) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl font-bold text-blue-950 border-b border-slate-100 pb-4">
                Send a Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jane.smith@example.com"
                    className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Organization */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Organization / Client Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Community Health Clinic"
                    className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Message Details
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell us about your language requirements, dialect queries, or feedback..."
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 hover:shadow-md transition duration-200 text-center"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </section>

      </div>
    </div>
  );
}
