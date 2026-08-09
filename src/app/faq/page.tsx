"use client";

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "How do I request an interpreter?",
      answer: (
        <span>
          You can submit scheduling details through our online{" "}
          <Link href="/request" className="text-blue-600 font-semibold hover:underline">
            Interpreter Request Portal
          </Link>
          . Specify the target language, date, duration, industry specialization, and format (in-person, telephone, or video remote). For urgent bookings, please contact our coordinating office directly.
        </span>
      ),
    },
    {
      question: "What geographic areas do you serve?",
      answer: "We support organizations across the province of Alberta, providing local in-person interpreters in Calgary, Edmonton, Red Deer, Lethbridge, and surrounding municipalities. Our telephone and video remote interpretation (VRI) solutions are accessible internationally.",
    },
    {
      question: "What languages do you support?",
      answer: "We specialize in primary languages spoken across East Africa, Arab-speaking communities, and global populations residing in Alberta. Core supported languages include Tigrinya, Amharic, Arabic, Swahili, Oromo, Somali, Tigre, and Bilen. Additional dialects and world languages can be sourced upon request.",
    },
    {
      question: "Are your services confidential and secure?",
      answer: "Yes. All of our certified interpreters sign strict non-disclosure agreements and adhere to a professional Code of Ethics. For medical assignments, our systems and coordinators are fully HIPAA-compliant to safeguard private client coordinates and clinical data.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Page Header */}
        <section className="text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50">
            Support & FAQs
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find quick answers regarding our booking coordinates, regional coverage, language matrix, and secure HIPAA compliance standards.
          </p>
        </section>

        {/* Accordion List */}
        <section className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h2 className="text-base sm:text-lg font-bold text-blue-950 pr-4">
                    {item.question}
                  </h2>
                  <svg
                    className={`h-5 w-5 text-slate-400 transform transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Panel Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0 pointer-events-none'
                  }`}
                >
                  <div className="p-6 text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Fallback Contact Card */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-950">Still Have Questions?</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our coordination team is available to assist you with custom language setups, urgent bookings, or pricing details.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-6 py-3 border border-slate-200 text-sm font-semibold rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition duration-200"
            >
              Contact Support Team
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}