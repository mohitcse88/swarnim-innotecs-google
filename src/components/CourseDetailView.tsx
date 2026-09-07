import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  BarChart,
  Calendar,
  Award,
  CheckCircle2,
  Hammer,
  ChevronDown,
  ChevronUp,
  Share2,
  Terminal,
} from 'lucide-react';
import { Course } from '../types';

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({
  course,
  onBack,
  onEnroll,
}) => {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleModule = (idx: number) => {
    setOpenModuleIndex(openModuleIndex === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div id="course-detail-view-container" className="bg-[#f8fafc] min-h-screen pb-20">
      {/* Top Breadcrumb / Back Bar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-[73px] z-20 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            id="back-to-courses-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              id="share-course-btn"
              onClick={handleShare}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              title="Share Course"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              id="detail-top-enroll-btn"
              onClick={() => onEnroll(course.title)}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xs shadow-blue-500/20 transition-colors cursor-pointer"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Section in Bento Slate */}
      <section className="bg-[#0f172a] text-white py-12 lg:py-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left Column: Title & Overview */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {course.categoryLabel}
                </span>
                {course.modes.map((mode) => (
                  <span
                    key={mode}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {mode === 'Offline' ? 'In-Person Lab' : mode === 'Online' ? 'Live Online' : 'Hybrid'}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                {course.tagline}
              </p>

              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                {course.description}
              </p>

              {/* Meta pills */}
              <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700/60">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span><strong>Duration:</strong> {course.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700/60">
                  <BarChart className="w-4 h-4 text-blue-400" />
                  <span><strong>Level:</strong> {course.level}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700/60">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span><strong>Batches:</strong> {course.batchSchedule}</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Action & Pricing Enquiry Box (Bento Card) */}
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Pricing & Cohort Access
                  </span>
                  <div className="text-2xl font-black text-[#0f172a] mt-0.5">
                    Student Friendly
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  ₹
                </div>
              </div>

              <p className="text-xs text-slate-600 my-4 leading-relaxed">
                Scholarships available for college students and merit applicants. Includes access to live mentors, lab hardware, and placement training.
              </p>

              <div className="space-y-3">
                {/* Required "Enquire for Pricing" CTA */}
                <button
                  id="enquire-pricing-cta-btn"
                  onClick={() => onEnroll(course.title)}
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer text-center"
                >
                  Enquire for Pricing & Batch Timings
                </button>

                {/* Required "Enroll Now" CTA */}
                <button
                  id="enroll-now-modal-btn"
                  onClick={() => onEnroll(course.title)}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-[#0f172a] hover:bg-slate-800 text-white transition-colors cursor-pointer text-center"
                >
                  Enroll Now (Book Free Demo)
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>100% Practical project deliverables</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Physical lab access + online session recordings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Recognized certification with QR verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main 2 Cols */}
          <div className="lg:col-span-2 space-y-10">

            {/* VISUALLY PROMINENT: Practical Projects Covered in Bento Styling */}
            <section
              id="practical-projects-section"
              className="bg-white rounded-3xl border border-blue-200 p-6 sm:p-8 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-blue-600 text-xs font-black uppercase tracking-widest mb-2">
                <Hammer className="w-4 h-4" />
                <span>The Swarnim Inotecs Differentiator</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight">
                Practical Projects Covered
              </h2>
              <p className="text-sm text-slate-600 mt-1 mb-6">
                You do not learn by passively watching slides. You build these real-world projects from scratch with full mentor code reviews:
              </p>

              <div className="space-y-4">
                {course.practicalProjects.map((project, idx) => (
                  <div
                    key={project.title}
                    id={`project-card-${idx}`}
                    className="bg-slate-50 rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                          #{idx + 1}
                        </span>
                        <h3 className="font-bold text-[#0f172a] text-base">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-500 mr-1">Stack:</span>
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white text-slate-800 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Deliverable Badge */}
                      <div className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 self-start sm:self-auto flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Deliverable: {project.deliverable}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Syllabus / Module List */}
            <section id="course-syllabus-section" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
                    Comprehensive Curriculum & Syllabus
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Step-by-step modular progression with concrete hands-on lab exercises in every unit.
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {course.syllabus.length} Modules
                </span>
              </div>

              <div className="space-y-3">
                {course.syllabus.map((mod, idx) => {
                  const isOpen = openModuleIndex === idx;
                  return (
                    <div
                      key={mod.moduleNumber}
                      id={`syllabus-module-${mod.moduleNumber}`}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#0f172a] text-blue-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                            M{mod.moduleNumber}
                          </span>
                          <div>
                            <h3 className="font-bold text-[#0f172a] text-sm sm:text-base">
                              {mod.title}
                            </h3>
                            <span className="text-xs text-slate-500">{mod.duration}</span>
                          </div>
                        </div>

                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 space-y-3">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                              Core Topics Explored:
                            </span>
                            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                              {mod.topics.map((t) => (
                                <li key={t} className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold">•</span>
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-3 border-t border-slate-100 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                            <span className="text-xs font-bold text-blue-900 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                              <Terminal className="w-3.5 h-3.5 text-blue-600" />
                              <span>Hands-on Lab Task:</span>
                            </span>
                            <p className="text-xs sm:text-sm text-slate-700 font-medium">
                              {mod.handsOnTask}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Instructor Bio */}
            <section id="course-instructor-section" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] mb-6">
                Your Lead Mentor & Instructor
              </h2>

              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-blue-600 shadow-sm shrink-0"
                />
                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                      {course.instructor.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600">
                      {course.instructor.role} • {course.instructor.experience}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {course.instructor.bio}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {course.instructor.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        ✓ {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Accordion */}
            <section id="course-faq-section" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Clear answers regarding lab sessions, schedules, and prerequisites.
              </p>

              <div className="space-y-3">
                {course.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.question}
                      id={`faq-item-${idx}`}
                      className="border border-slate-200 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 font-bold text-sm sm:text-base text-[#0f172a] flex items-center justify-between gap-3 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-4 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar Info Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm sticky top-28">
              <h3 className="text-base font-extrabold text-[#0f172a] mb-4 pb-2 border-b border-slate-100">
                Course Highlights
              </h3>

              <div className="space-y-3.5 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-[#0f172a] block mb-1">Prerequisites:</span>
                  <p className="text-slate-600">{course.prerequisites}</p>
                </div>

                <div>
                  <span className="font-bold text-[#0f172a] block mb-1">Who Should Join:</span>
                  <ul className="space-y-1 text-slate-600">
                    {course.whoShouldJoin.map((w) => (
                      <li key={w} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="font-bold text-[#0f172a] block mb-1">Certification:</span>
                  <div className="flex items-center gap-2 text-slate-800">
                    <Award className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{course.certification}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    id="sidebar-enroll-btn"
                    onClick={() => onEnroll(course.title)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs shadow-blue-500/20 cursor-pointer"
                  >
                    Enroll Now / Request Syllabus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
