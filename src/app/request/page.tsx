"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function RequestInterpreter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, form data would be sent to the backend database here.
    // TODO(security): Ensure form inputs are validated on the server side prior to database persistence.
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
          <h1 className="text-2xl font-bold text-blue-950">Request Submitted</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Thank you for your submission. Our language coordination team has received your details and will process the assignment. A confirmation email will be sent to you shortly.
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Context and Trust Column (Left) */}
        <section className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50">
              Scheduling Portal
            </span>
            <h1 className="text-4xl font-extrabold text-blue-950 leading-tight">
              Request a Certified Interpreter
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Submit your appointment coordinates to secure a qualified, certified language professional. We support healthcare, judicial, governmental, and commercial domains across Alberta.
            </p>
          </div>

          {/* Guidelines / Trust Cards */}
          <div className="space-y-6">
            <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-sm font-bold text-blue-950">Rapid Processing</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Our coordination team typically verifies and assigns certified local interpreters within 2 business hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-sm font-bold text-blue-950">HIPAA & Legal Compliance</h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  All assignments strictly adhere to confidentiality standards, security baselines, and legal-grade compliance metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Column (Right) */}
        <section className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-xl font-bold text-blue-950 border-b border-slate-100 pb-4">
              Assignment Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Organization */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Organization / Client Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alberta Health Services"
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Contact Person
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
                  Contact Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="jane.smith@example.com"
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Contact Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="555-019-2834"
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Language Required */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Language Required
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Swahili, Tigrinya"
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Interpretation Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Interpretation Delivery Type
                </label>
                <select
                  required
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white transition"
                >
                  <option value="in-person">In-person (On-site)</option>
                  <option value="telephone">Telephone (Audio)</option>
                  <option value="video">Video Remote (VRI)</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Appointment Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Time & Duration */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Time & Expected Duration
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. 10:00 AM MST - 2 hours"
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Location & Industry Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Location */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Location / Secure Video Link
                </label>
                <input
                  required
                  type="text"
                  placeholder="Full clinic address or meeting URL"
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Specialized Industry / Domain
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Healthcare, Criminal Court"
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Additional Notes or Special Directives
              </label>
              <textarea
                rows={4}
                placeholder="List any dialect constraints, patient gender preferences, or specific background context..."
                className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 hover:shadow-md transition duration-200 text-center"
              >
                Submit Interpreter Request
              </button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
}