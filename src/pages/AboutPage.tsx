import React from 'react';
import {
  Target,
  CheckCircle2,
  Hammer,
  ShieldCheck,
  HeartHandshake,
  Code2,
} from 'lucide-react';
import { MENTORS } from '../data/contentData';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div id="about-us-page" className="bg-[#f8fafc] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. HERO / STORY / MISSION SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            About Swarnim Inotecs
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mt-3">
            Democratizing Practical Tech Education
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            We are on a mission to replace passive slide lectures with tactile, hands-on engineering — empowering students to build real systems, whether in our physical innovation labs or online.
          </p>
        </div>

        {/* Company Story & Mission Narrative in Bento Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Target className="w-4 h-4" />
                <span>Our Founding Story</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                Born From a Simple Frustration: Why Is Tech Still Taught from Textbooks?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Swarnim Inotecs Private Limited was established by a collective of senior software architects, robotics hobbyists, and university educators who noticed a painful contradiction in technical education: students spent 4 years memorizing definitions of databases and microcontrollers without ever deploying an app to the cloud or wiring an actual circuit.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We set out to create the kind of learning environment we wished we had as beginners: high-energy, friendly, supportive, and grounded 100% in building real things with your own two hands.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <h4 className="font-bold text-[#0f172a] text-sm">Our Mission</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    To make practical technical skills approachable, enjoyable, and directly employable for every student and young learner.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-[#0f172a] text-sm">Our Vision</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    To be India’s premier hands-on skills ecosystem spanning high-school STEM tinkerers to college engineers and working professionals.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0f172a] text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl border border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span>Registered Credentials</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Swarnim Inotecs Private Limited is a legally incorporated technical education and innovation company, registered under the Companies Act, Government of India.
                </p>

                <div className="space-y-3 pt-2 text-xs text-slate-300 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>MCA Incorporated Private Limited Entity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>ISO 9001:2015 Certified Educational Quality Standards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Recognized Partner for University Technical Training</span>
                  </div>
                </div>

                <button
                  id="about-talk-to-us-btn"
                  onClick={onOpenEnquiry}
                  className="w-full py-3 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs shadow-blue-500/20 cursor-pointer"
                >
                  Visit Our Physical Lab or Talk to a Mentor
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. "OUR PRACTICAL LEARNING PHILOSOPHY" IN BENTO TILES */}
        <div id="learning-philosophy-section" className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              How We Teach
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-3">
              Our Practical Learning Philosophy
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Learning technology shouldn't feel like deciphering an ancient language. We follow four clear principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm mb-4 border border-blue-100">
                  80/20
                </div>
                <h3 className="font-bold text-[#0f172a] text-base mb-1">
                  80% Building, 20% Theory
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We spend just enough time explaining the core concept, then immediately open the terminal or wire the circuit to test it live.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm mb-4 border border-blue-100">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0f172a] text-base mb-1">
                  Real Hardware & Tools
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No dumbed-down toys. You write code in VS Code, deploy to real cloud servers, inspect real oscilloscope signals, and commit to GitHub.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm mb-4 border border-blue-100">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0f172a] text-base mb-1">
                  Friendly Mentorship
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  There are no "stupid questions." Every mentor sits beside you, reviews your error logs, and helps you untangle confusion step-by-step.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm mb-4 border border-blue-100">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0f172a] text-base mb-1">
                  Portfolio First
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When you finish a course, you do not just have a piece of paper — you have working URLs, physical robots, and code repositories to show recruiters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. INSTRUCTOR / MENTOR CARDS (Photo, Name, Specialization — Placeholders) */}
        <div id="instructors-mentors-section" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              The Faculty
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-3">
              Meet Your Expert Mentors
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Industry practitioners who build commercial software and hardware systems during the day and guide future engineers in our labs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {MENTORS.map((mentor) => (
              <div
                key={mentor.id}
                id={`mentor-card-${mentor.id}`}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative mb-4">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-600 shadow-xs mx-auto"
                    />
                    <span className="absolute bottom-0 right-1/2 translate-x-7 translate-y-1 text-[10px] font-bold bg-[#0f172a] text-blue-400 px-2.5 py-0.5 rounded-full shadow">
                      {mentor.experience}
                    </span>
                  </div>

                  <div className="text-center">
                    <h3 className="font-extrabold text-[#0f172a] text-lg">
                      {mentor.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">
                      {mentor.role}
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {mentor.specialization}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 text-center leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1 justify-center">
                  {mentor.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Lab Showcase Banner in Bento Slate */}
        <div className="mt-16 bg-[#0f172a] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Physical Lab Centers
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Step into Our Offline Innovation Labs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Equipped with high-performance desktop development rigs, dual monitors, electronic soldering test-benches, oscilloscope gear, 3D printing equipment, and robot test tracks. Located conveniently in Noida Sector 62 and Pune.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="bg-slate-850 px-3.5 py-1.5 rounded-xl border border-slate-700">
                  📍 Noida Center: Sector 62
                </span>
                <span className="bg-slate-850 px-3.5 py-1.5 rounded-xl border border-slate-700">
                  📍 Pune Center: Viman Nagar
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <button
                id="book-lab-visit-btn"
                onClick={onOpenEnquiry}
                className="px-7 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-colors cursor-pointer"
              >
                Schedule an In-Person Lab Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
