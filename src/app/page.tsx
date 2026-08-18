import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-100 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50">
              Trusted Across Alberta and Beyond
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight">
              Bridging the Language Gap with Certified Interpretation
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Connecting public sectors, healthcare facilities, legal organizations, and community enterprises with accurate, confidential, and professional interpretation and translation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/request"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-sm hover:shadow-md text-center"
              >
                Request an Interpreter
              </Link>
              <Link
                href="/careers"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-200 text-base font-semibold rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition duration-200 text-center"
              >
                Join Our Team
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <Image
              src="/interpreter_hero.png"
              alt="Lingora professional medical interpreter speaking with a patient and a clinician"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Stats Indicators / Trust Section */}
      <section className="bg-slate-50 border-b border-slate-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-slate-200">
            <div className="text-center md:text-left md:px-8 first:pl-0">
              <span className="block text-3xl font-extrabold text-blue-950">50+</span>
              <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wide mt-1">
                Languages Supported
              </span>
            </div>
            <div className="text-center md:px-8">
              <span className="block text-3xl font-extrabold text-blue-950">99.8%</span>
              <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wide mt-1">
                Certified Accuracy
              </span>
            </div>
            <div className="text-center md:text-right md:px-8 last:pr-0">
              <span className="block text-3xl font-extrabold text-blue-950">24/7</span>
              <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wide mt-1">
                Rapid On-Demand Scheduling
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl">
              Professional Language Solutions
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              We offer certified and reliable interpretation and translation solutions tailored to your organization&apos;s compliance and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm transition hover:shadow-md duration-300 flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">On-Site Interpretation</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Face-to-face interpreters for highly sensitive medical consultations, complex courtroom cases, depositions, public community forums, and conferences across Alberta.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm transition hover:shadow-md duration-300 flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Telephone & Virtual Interpretation</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Instant phone or secure high-definition video connections, enabling your staff to easily communicate with non-English speakers at a moment&apos;s notice.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm transition hover:shadow-md duration-300 flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Certified Document Translation</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Precise translation of legal filings, medical reports, patient intake instructions, policy handbooks, official consent documents, and employee manuals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl">
              Simple and Standard Booking Flow
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              How we match your request with an experienced interpreter in four simple stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-slate-200 p-6 rounded-xl relative">
              <div className="absolute top-4 right-4 text-xs font-bold text-slate-300">01</div>
              <h3 className="text-base font-bold text-blue-950 mb-2">Submit Request</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Provide details online about location, language, time, and specific domain constraints.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl relative">
              <div className="absolute top-4 right-4 text-xs font-bold text-slate-300">02</div>
              <h3 className="text-base font-bold text-blue-950 mb-2">Verification Review</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our coordination team reviews parameters to confirm availability and specialized qualifications.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl relative">
              <div className="absolute top-4 right-4 text-xs font-bold text-slate-300">03</div>
              <h3 className="text-base font-bold text-blue-950 mb-2">Interpreter Assigned</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We assign a qualified, local professional interpreter matching the required background.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl relative">
              <div className="absolute top-4 right-4 text-xs font-bold text-slate-300">04</div>
              <h3 className="text-base font-bold text-blue-950 mb-2">Confirmation Received</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                You receive full matching details, secure access, and clear check-in protocols for your session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Core Languages Section */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Industries */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-blue-950 mb-6">
              Sectors We Serve
            </h2>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              Different industries demand different vocabularies and compliance. We provide specialized interpreters well-versed in industry-specific terminologies and standards:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 border border-slate-100 rounded-lg bg-slate-50/50">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span className="text-sm font-bold text-blue-950">Healthcare & Clinical</span>
              </div>
              <div className="flex items-center space-x-3 p-4 border border-slate-100 rounded-lg bg-slate-50/50">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <span className="text-sm font-bold text-blue-950">Legal & Judicial</span>
              </div>
              <div className="flex items-center space-x-3 p-4 border border-slate-100 rounded-lg bg-slate-50/50">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-bold text-blue-950">Government & Public Offices</span>
              </div>
              <div className="flex items-center space-x-3 p-4 border border-slate-100 rounded-lg bg-slate-50/50">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm font-bold text-blue-950">Education & Non-Profits</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-blue-950 mb-6">
              Languages We Support
            </h2>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              We specialize in primary languages spoken across East Africa, Arab-speaking communities, and global populations residing in Alberta. Our main supported languages include:
            </p>
            <div className="flex flex-wrap gap-3">
              {['Tigrinya', 'Amharic', 'Arabic', 'Swahili', 'Oromo', 'Somali', 'Tigre', 'Bilen'].map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 border border-slate-200 bg-white rounded-lg text-sm font-semibold text-slate-700 hover:border-blue-300 transition"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 italic mt-6">
              Additional dialects and languages are available upon request. Contact us to verify support for specific region codes.
            </p>
          </div>
        </div>
      </section>

      {/* Final Action / CTA section */}
      <section className="bg-slate-50 border-t border-slate-100 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Ensure Clear Communication Today
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to book a professional interpreter or translate your documentation? Contact us now to discuss scheduling, certifications, and rates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/request"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-sm text-center"
            >
              Request an Interpreter
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-base font-semibold rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition duration-200 text-center"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}