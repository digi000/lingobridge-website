import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header/Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 leading-tight">
            Connecting Communities Across Alberta and Beyond
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            LingoBridge provides professional interpretation and translation services that help people and organizations communicate clearly, accurately, and confidently.
          </p>
        </section>

        {/* Narrative & Visual Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm">
          {/* Narrative text (left column on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo-icon.png"
                alt="LingoBridge Icon"
                width={60}
                height={60}
                className="rounded-xl bg-slate-50 p-1 object-contain border border-slate-100"
              />
              <div>
                <h2 className="text-xl font-bold text-blue-950">LingoBridge Standards</h2>
                <p className="text-xs text-slate-400">Certified language coordinators & interpreters</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Founded on the belief that communication is a fundamental right, LingoBridge acts as a vital link between service providers and individuals with limited English proficiency. We specialize in providing specialized, culturally competent language professionals for critical sectors including clinical environments, legal proceedings, public government offices, and local community service centers.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our coordinators operate diligently to align each client assignment with interpreters who possess appropriate industry certifications and dialect matching, ensuring confidentiality, extreme compliance, and accurate context delivery on every project.
            </p>
          </div>

          {/* Photographic image (right column on desktop) */}
          <div className="lg:col-span-5 relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden border border-slate-100 shadow-md">
            <Image
              src="/about_team.png"
              alt="LingoBridge language service coordinators review client translation requests"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </section>

        {/* Mission, Vision, Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
            <div>
              <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-950 mb-3">Our Mission</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Remove language barriers through reliable, accurate, and culturally respectful services, enabling equitable access to essential resources.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
            <div>
              <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-950 mb-3">Our Vision</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Become one of Canada's most trusted, responsive language service providers, recognized for absolute precision and outstanding community integration.
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
            <div>
              <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-950 mb-3">Our Values</h2>
              <div className="flex flex-wrap gap-2">
                {['Professionalism', 'Accuracy', 'Confidentiality', 'Integrity', 'Respect', 'Reliability'].map((val) => (
                  <span
                    key={val}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}