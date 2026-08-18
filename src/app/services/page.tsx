import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50">
            Our Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 leading-tight">
            Professional Interpretation & Translation
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Reliable, accurate, and secure language services designed to meet regulatory compliance and operational requirements across Alberta.
          </p>
        </section>

        {/* Core Services Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Services Cards List (Left Column on Desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: On-Site */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-blue-950">On-Site Interpretation</h2>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Face-to-face language support matching local, qualified interpreters to clinical appointments, client interviews, and court hearings.
                  </p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-blue-950">Telephone Interpretation</h2>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Secure and rapid audio connections for on-demand assistance, bridging language barriers within moments of dialing.
                  </p>
                </div>
              </div>

              {/* Card 3: Video */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-blue-950">Video Remote (VRI)</h2>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    High-definition remote video interpretation matching, suitable for telehealth and secure online consultations.
                  </p>
                </div>
              </div>

              {/* Card 4: Translation */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-blue-950">Document Translation</h2>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Professional, certified translation of documents, certificates, legal filings, and technical handbooks with guaranteed confidentiality.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Visual Showcase (Right Column on Desktop) */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[450px] rounded-xl overflow-hidden border border-slate-100 shadow-md">
            <Image
              src="/services_interpreter.png"
              alt="Lingora professional remote telephone interpreter with headset working in office environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </section>

        {/* Sectors & Industries Matrix */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-blue-950">Sectors We Serve</h2>
            <p className="mt-2 text-sm text-slate-500">
              Each sector has unique regulatory constraints and terminology. Our certified interpreters undergo rigorous domain vetting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-blue-900">Healthcare & Medical</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                HIPAA-compliant, certified clinical interpreters for patient intakes, complex procedures, and discharge consultations.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-blue-900">Legal & Judicial</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accurate translation and courtroom-certified interpretation for trials, depositions, witness interviews, and legal discovery.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-blue-900">Government & Municipalities</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Language matching for public registries, immigration support, housing authorities, and federal offices.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-blue-900">Education & Schools</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connecting educators with families during parent-teacher interviews, administrative registration, and individual program sessions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-blue-900">Corporations & Business</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-language support for commercial contracts, corporate compliance documents, user guides, and international expansion.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-blue-900">Community & Non-Profits</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assisting non-profits, resettlement committees, and local community outreach programs with accessible regional services.
              </p>
            </div>
          </div>
        </section>

        {/* Languages matrix */}
        <section className="bg-slate-100 border border-slate-200 rounded-2xl p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-2xl font-bold text-blue-950">Supported Languages</h2>
          <p className="max-w-2xl mx-auto text-sm text-slate-600">
            We specialize in primary languages spoken across East Africa, Arab-speaking communities, and global populations residing in Alberta:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Tigrinya', 'Amharic', 'Arabic', 'Swahili', 'Oromo', 'Somali', 'Tigre', 'Bilen'].map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 border border-slate-200 bg-white rounded-lg text-sm font-semibold text-slate-700 shadow-sm"
              >
                {lang}
              </span>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-200 max-w-lg mx-auto">
            <p className="text-xs text-slate-500 italic">
              Additional dialects and language configurations are available upon request.
            </p>
          </div>
        </section>

        {/* CTA section */}
        <section className="text-center py-6">
          <Link
            href="/request"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-sm text-center"
          >
            Request an Interpreter Now
          </Link>
        </section>

      </div>
    </div>
  );
}