"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [primaryLanguage, setPrimaryLanguage] = useState("");
  const [otherLanguages, setOtherLanguages] = useState("");
  const [experience, setExperience] = useState("1");
  const [certifications, setCertifications] = useState<string[]>([]);
  const [summary, setSummary] = useState("");

  const handleCheckboxChange = (certName: string, checked: boolean) => {
    if (checked) {
      setCertifications((prev) => [...prev, certName]);
    } else {
      setCertifications((prev) => prev.filter((c) => c !== certName));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          primaryLanguage,
          otherLanguages,
          experience,
          certifications,
          summary,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
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
          <h1 className="text-2xl font-bold text-blue-950">Application Received</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Thank you for applying to join the Lingora interpreter network. Our recruitment team reviews credentials weekly. If your language profile matches our active requirements, we will contact you directly to conduct screening.
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
            Careers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 leading-tight">
            Join Our Professional Interpreter Network
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Help us bridge language barriers. We are seeking certified, professional, and ethical interpreters and translators to serve organizations across Alberta and beyond.
          </p>
        </section>

        {/* Narrative & Visual Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative text (left column on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-blue-950">Qualifications We Look For</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lingora maintains strict compliance standards to meet the expectations of our healthcare, judicial, and public sector clients. We look for language professionals who exhibit:
            </p>
            <ul className="space-y-3 text-slate-600 text-sm list-disc list-inside">
              <li>Recognized interpretation/translation certifications (e.g. CILI, court credentials, medical training).</li>
              <li>A strict adherence to professional codes of ethics, confidentiality, and neutral rendering.</li>
              <li>Outstanding fluency in both English and your working target languages.</li>
              <li>Reliability, punctual check-ins, and polite professional conduct.</li>
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you specialize in in-person assignments or provide over-the-phone and video remote services, we offer flexible matching cycles to accommodate your schedule.
            </p>
          </div>

          {/* Photographic image (right column on desktop) */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-100 shadow-md">
            <Image
              src="/careers_interpreter.png"
              alt="Lingora professional interpreter smiling and holding a portfolio in a bright office environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-blue-950">Why Partner with Lingora?</h2>
            <p className="mt-2 text-sm text-slate-500">
              We value our language network and strive to build collaborative, supportive contractor relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-blue-950">Flexible Engagements</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose the assignment formats and times that suit your calendar. We support on-site, OPI, and VRI modes.
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-blue-950">Competitive Compensation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive fair, transparent hourly and flat rates with rapid, reliable invoicing and payment cycles.
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-blue-950">Professional Coordination</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work alongside our dedicated matching coordinators who handle scheduling, logistics, and client interface.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form Card */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-slate-100 pb-4 text-center">
              <h2 className="text-2xl font-bold text-blue-950">Interpreter Network Application</h2>
              <p className="text-xs text-slate-400 mt-1">Submit your credentials to initiate our onboarding review.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="jane.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="555-012-3456"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Primary Language */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Primary Working Language
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Swahili, Amharic"
                  value={primaryLanguage}
                  onChange={(e) => setPrimaryLanguage(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Other Languages */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Other Working Languages
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tigrinya, Oromo"
                  value={otherLanguages}
                  onChange={(e) => setOtherLanguages(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Interpretation Experience */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Years of Experience
                </label>
                <select
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white transition"
                >
                  <option value="1">Less than 1 year</option>
                  <option value="2">1 - 3 years</option>
                  <option value="5">3 - 5 years</option>
                  <option value="10">5+ years</option>
                </select>
              </div>
            </div>

            {/* Certifications checkboxes */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Active Interpretation Certifications
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 border border-slate-200 rounded-lg bg-slate-50/50">
                <label className="flex items-center space-x-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={certifications.includes("CILI")}
                    onChange={(e) => handleCheckboxChange("CILI", e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>CILI (Certified Interpreter)</span>
                </label>
                <label className="flex items-center space-x-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={certifications.includes("Medical")}
                    onChange={(e) => handleCheckboxChange("Medical", e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>Medical Interpretation Certification</span>
                </label>
                <label className="flex items-center space-x-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={certifications.includes("Court")}
                    onChange={(e) => handleCheckboxChange("Court", e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>Court-Certified Interpreter</span>
                </label>
                <label className="flex items-center space-x-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={certifications.includes("ATIA")}
                    onChange={(e) => handleCheckboxChange("ATIA", e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>ATIA (Alberta Translators/Interpreters)</span>
                </label>
              </div>
            </div>

            {/* Cover Letter / Bio */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Brief Professional Summary
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your translation/interpretation background, target dialects, and professional references..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              ></textarea>
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 hover:shadow-md transition duration-200 text-center disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting Application..." : "Submit Application"}
              </button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
}
