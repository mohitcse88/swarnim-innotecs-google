import React, { useState } from 'react';
import {
  GraduationCap,
  School,
  Download,
  CheckCircle2,
  Sparkles,
  Award,
  Calendar,
  Layers,
  ShieldCheck,
  Clock,
  Hammer,
} from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

export const CollegesSchoolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'colleges' | 'schools'>('colleges');
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);

  const handleBrochureDownload = () => {
    setBrochureDownloaded(true);
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob(
        [
          `SWARNIM INOTECS PRIVATE LIMITED\nINSTITUTIONAL PARTNERSHIP BROCHURE\n\n1. For Colleges: Technical Training, Summer/Winter Camps, Placement Bootcamps.\n2. For Schools: Robotics Kits, Foundational Coding, IoT STEM Labs.\n\nHelpline: +91 98765 43210\nEmail: contact@swarniminotecs.com\nWebsite: https://swarniminotecs.com`,
        ],
        { type: 'text/plain' }
      );
      element.href = URL.createObjectURL(file);
      element.download = 'Swarnim-Inotecs-Institutional-Brochure.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 500);
  };

  return (
    <div id="colleges-schools-page" className="bg-[#f8fafc] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Institutional Alliances
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mt-3">
            Partner with Swarnim Inotecs
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Empower your students with hands-on, industry-ready technical education. We bring turnkey labs, experienced engineering mentors, and customized syllabus modules directly to your campus.
          </p>

          {/* Downloadable Brochure Button */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              id="download-brochure-btn"
              onClick={handleBrochureDownload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>{brochureDownloaded ? 'Brochure Downloaded ✓' : 'Download Partnership Brochure (PDF)'}</span>
            </button>
          </div>
        </div>

        {/* Tab Toggle for the Two Tracks */}
        <div className="flex justify-center mb-8">
          <div className="bg-white border border-slate-200 p-1.5 rounded-2xl shadow-xs inline-flex gap-2">
            <button
              id="tab-colleges-btn"
              onClick={() => setActiveTab('colleges')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'colleges'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>For Colleges & Universities</span>
            </button>

            <button
              id="tab-schools-btn"
              onClick={() => setActiveTab('schools')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'schools'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <School className="w-4 h-4" />
              <span>For Schools (K-12 STEM)</span>
            </button>
          </div>
        </div>

        {/* TRACK 1: FOR COLLEGES */}
        {activeTab === 'colleges' && (
          <div id="track-colleges" className="space-y-10 animate-in fade-in duration-200">
            {/* Highlights Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">
                    Placement Bootcamps
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Rigorous mock technical interviews, DSA coding rounds, and full-stack project building targeted for tier-1 IT & startup hiring.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">
                    Summer & Winter Batches
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    4-to-6 week certified industrial training immersions satisfying university internship credits with verified certificates.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">
                    2-Day Tech Workshops
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    High-energy, weekend campus workshops in Cyber Security CTFs, Generative AI RAG pipelines, or ESP32 IoT automation.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">
                    Centre of Excellence (CoE)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We assist departments in setting up dedicated on-campus IoT and Robotics development hardware lab infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* College Detailed Value Prop in Bento Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Direct Impact on Placements
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                    Solve the Industry-Readiness Gap on Your Campus
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Most college curriculums remain largely theoretical. Swarnim Inotecs partners with your HODs, TPO cells, and student societies to deliver structured modules where every single student deploys real code and builds verifiable GitHub portfolios.
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Zero burden on faculty — our industry mentors handle all delivery and lab grading</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Joint certificates co-branded with QR verification portal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Subsidized group fee models and flexible campus or online hybrid execution</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0f172a] text-white p-6 sm:p-8 rounded-3xl space-y-4 border border-slate-800 shadow-xl">
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                    Institutional Track Record
                  </div>
                  <div className="text-3xl sm:text-4xl font-black">
                    65+ Colleges & Engineering Institutes
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Over 450+ batches conducted across State and Private universities. Over 85% of participants successfully cleared technical rounds within 6 months.
                  </p>
                  <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-xs text-blue-300">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>MoU templates available for fast academic council approval</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TRACK 2: FOR SCHOOLS */}
        {activeTab === 'schools' && (
          <div id="track-schools" className="space-y-10 animate-in fade-in duration-200">
            {/* Highlights Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">
                    Foundational Coding
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Visual logic games transitioning smoothly into Python and JavaScript. Fun, zero intimidation, and focused on creative thinking.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">
                    Robotics Kits
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Students wire physical rovers, control obstacle sensors, and see their lines of code make physical gears spin!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">
                    IoT & Smart Devices Club
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Building automatic plant waterers, smart alarms, and light sensors that connect to phones and stimulate young minds.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">
                    STEM Exhibition Prep
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Guidance for national science fairs, Atal Tinkering Lab (ATL) competitions, and robotics hackathons.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools Detailed Value Prop in Bento Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Early Exposure & Curiosity
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                    Nurture Creators, Not Just Consumers of Technology
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Children are naturally curious builders. When taught through physical circuits, LED lights, and interactive robots, coding stops being a chore and becomes a creative playground.
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Age-appropriate tracks designed for Grades 6 to 12</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Safe, low-voltage electronic hardware kits provided for every child</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Weekly project demonstrations where parents see their children innovate</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0f172a] text-white p-6 sm:p-8 rounded-3xl space-y-4 border border-slate-800 shadow-xl">
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                    School STEM Labs
                  </div>
                  <div className="text-3xl sm:text-4xl font-black">
                    Interactive Tinkering & Clubs
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Designed in alignment with NEP (National Education Policy) guidelines to promote experiential, problem-solving-oriented learning.
                  </p>
                  <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-xs text-blue-300">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Train-the-Trainer modules for your computer science teachers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PARTNERSHIP ENQUIRY FORM WITH REQUIRED DROPDOWN */}
        <div id="partnership-form-section" className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Get Started
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                Request an Institutional Proposal
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are a College Principal looking for Winter Placement Bootcamps or a School Administrator setting up a Robotics lab, submit your inquiry below.
              </p>

              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-xs text-slate-600">
                <div className="font-bold text-[#0f172a] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Turnaround Guarantee:</span>
                </div>
                <p>
                  Our institutional relations director will provide a customized course plan, batch schedule, and commercial quote within 24 hours.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm
                idPrefix="colleges-schools"
                source="colleges_schools"
                isInstitutionForm={true}
                title="Partnership Enquiry Form"
                subtitle="Select your institution type and tell us your proposed batch size."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
