import React from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building,
  GraduationCap,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  BarChart3,
  Brain,
  Radio,
  Bot,
  Code2,
  Hammer,
  Users,
} from 'lucide-react';
import { Page, CourseCategory } from '../types';
import { COURSE_CATEGORIES } from '../data/coursesData';
import { FOUR_PILLARS } from '../data/contentData';
import { StatsBar } from '../components/StatsBar';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { LeadForm } from '../components/LeadForm';

interface HomePageProps {
  onNavigate: (page: Page, courseId?: string, category?: CourseCategory) => void;
  onOpenEnquiry: (prefillCourse?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-600" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-blue-600" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-blue-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-blue-600" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-blue-600" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-600" />;
      case 'Building':
        return <Building className="w-5 h-5 text-indigo-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div id="home-page-container" className="bg-[#f8fafc] text-[#0f172a] space-y-12 pb-16">
      {/* 1. BENTO GRID HERO & SHOWCASE SECTION */}
      <section id="hero-bento-grid" className="pt-6 sm:pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* BENTO CARD 1: Hero Main Value Prop (Col 7 on Desktop) */}
          <div className="lg:col-span-7 bg-[#0f172a] rounded-3xl p-6 sm:p-10 relative overflow-hidden flex flex-col justify-center border border-slate-800 shadow-xl min-h-[420px]">
            {/* Ambient Blue Radial Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/30">
                Practical First Education
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Learn by Doing. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Master Future Tech.
                </span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
                The easiest way to gain industry-relevant skills. Online or Offline, we build your confidence with hands-on projects and personal mentorship.
              </p>

              {/* Two Required CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  id="hero-explore-courses-btn"
                  onClick={() => onNavigate('courses')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-partner-with-us-btn"
                  onClick={() => onNavigate('colleges-schools')}
                  className="bg-white/10 hover:bg-white/20 text-white px-7 py-3 rounded-xl font-bold text-sm sm:text-base border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <Building className="w-4 h-4 text-blue-400" />
                </button>
              </div>

              {/* Quick Proof Badges */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Live Code & Hardware
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Online + Offline Labs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Verified Certification
                </span>
              </div>
            </div>
          </div>

          {/* BENTO CARD 2: Popular Categories Grid (Col 5 on Desktop) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900">
                <span className="w-2 h-6 bg-blue-600 rounded-full" />
                <span>Popular Categories</span>
              </h3>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {COURSE_CATEGORIES.slice(0, 9).map((cat) => (
                  <div
                    key={cat.id}
                    id={`bento-cat-${cat.id}`}
                    onClick={() => onNavigate('courses', undefined, cat.id)}
                    className="group bg-slate-50 border border-slate-100 rounded-2xl p-3 sm:p-3.5 flex flex-col items-center justify-center text-center hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer"
                    title={cat.name}
                  >
                    <div className="w-10 h-10 bg-white rounded-xl shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 group-hover:text-blue-600 transition-colors truncate max-w-full">
                      {cat.name.split(' ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">9 Career Specializations</span>
              <button
                onClick={() => onNavigate('courses')}
                className="text-blue-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View all tracks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* BENTO CARD 3: Institutional Partner Banner (Col 4 on Desktop) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white border border-blue-500/20 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg leading-tight text-white">
                  Partner with<br />Swarnim Inotecs
                </h3>
                <span className="text-2xl p-2 rounded-xl bg-white/10">🏫</span>
              </div>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-4">
                Empower your institution with industry-ready training, summer batches, and expert-led engineering workshops.
              </p>
            </div>
            <button
              id="bento-partner-college-btn"
              onClick={() => onNavigate('colleges-schools')}
              className="w-full bg-white text-blue-700 hover:bg-blue-50 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
            >
              College & School Programs
            </button>
          </div>

          {/* BENTO CARD 4: Why Us 4-feature Bento (Col 5 on Desktop) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-blue-600 rounded-full" />
              <span>Why Us — Practical Learning</span>
            </h3>

            <div className="grid grid-cols-2 gap-3.5 flex-1">
              <div className="flex gap-2.5 items-start">
                <div className="text-blue-600 font-black text-base mt-0.5">✓</div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Project-Based</p>
                  <p className="text-[11px] text-slate-500">Build real applications</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="text-blue-600 font-black text-base mt-0.5">✓</div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Hybrid Mode</p>
                  <p className="text-[11px] text-slate-500">Online & Offline labs</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="text-blue-600 font-black text-base mt-0.5">✓</div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Expert Mentors</p>
                  <p className="text-[11px] text-slate-500">Active industry pros</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="text-blue-600 font-black text-base mt-0.5">✓</div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Zero Fluff</p>
                  <p className="text-[11px] text-slate-500">Beginner-friendly easy steps</p>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">100% Practical Pedagogy</span>
              <button
                onClick={() => onNavigate('about')}
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Learn our philosophy →
              </button>
            </div>
          </div>

          {/* BENTO CARD 5: Dashed Metric Bento (Col 3 on Desktop) */}
          <div className="lg:col-span-3 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-5 flex flex-col justify-center items-center text-center shadow-xs">
            <div className="flex -space-x-2 mb-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Student"
                className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
              />
            </div>
            <p className="text-xs text-slate-500 font-medium mb-0.5">Trusted by</p>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">12,500+</p>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mt-0.5">
              Happy Students
            </p>
            <button
              onClick={() => onOpenEnquiry()}
              className="mt-3 text-[11px] font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full shadow-2xs transition-colors cursor-pointer"
            >
              Join Next Cohort
            </button>
          </div>
        </div>
      </section>

      {/* 2. COURSE CATEGORIES EXPLORER (Full 9 Categories in Bento Card Grid) */}
      <section id="course-categories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Course Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                Explore Practical Tech Specializations
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Every track includes live mentor guidance, hardware workbenches, and portfolio projects.
              </p>
            </div>

            <button
              id="view-all-courses-cta-btn"
              onClick={() => onNavigate('courses')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#0f172a] hover:bg-slate-800 text-white shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              <span>View All 24+ Courses</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {COURSE_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => onNavigate('courses', undefined, cat.id)}
                className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-md p-5 sm:p-6 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 group-hover:border-blue-200 flex items-center justify-center shadow-2xs mb-4 transition-colors">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-blue-600">
                  <span>Browse Tracks</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY SWARNIM INOTECS — 4 PILLARS IN BENTO CARDS */}
      <section id="why-swarnim-inotecs-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            The Swarnim Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
            Why Students & Colleges Choose Us
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Built from the ground up for hands-on confidence and practical industry readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FOUR_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              id={`pillar-card-${pillar.number}`}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-black font-mono text-slate-300">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-2">
                  {pillar.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STATS BAR (Bento Grid Style) */}
      <StatsBar />

      {/* 5. TESTIMONIALS CAROUSEL */}
      <section id="testimonials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Verified Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
              Stories from Practical Learners
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Read how hands-on lab work translated into careers and successful college projects.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* 6. INSTITUTIONAL TEASER BANNER (Bento Gradient Style) */}
      <section id="institutional-teaser-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0f172a] via-slate-900 to-[#0f172a] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute right-0 top-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                <Building className="w-3.5 h-3.5" />
                <span>Institutional Partnerships</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Looking to Train Batches at Your College or School?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We conduct on-campus technical bootcamps, summer/winter certified training, and turnkey IoT & Robotics lab setups for schools and universities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                id="teaser-explore-colleges-btn"
                onClick={() => onNavigate('colleges-schools')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Institutional Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="teaser-request-mou-btn"
                onClick={() => onNavigate('colleges-schools')}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Institutional Proposal</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA / ENQUIRY FORM IN BENTO ENCLOSURE */}
      <section id="final-enquiry-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Get Started
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ready to Stop Watching and Start Building?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect directly with our admissions and mentor team. Whether you want to attend in-person in our innovation labs or join online evening cohorts, we will help you choose the right roadmap.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Free 1-on-1 career & tech stack counselling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Hands-on lab tour & hardware kit demonstration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>College student & group enrollment fee waivers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm
                idPrefix="home-bottom"
                source="home_bottom"
                title="Request Free Syllabus, Fees & Batch Details"
                subtitle="Fill out the form below to receive immediate details via WhatsApp and Email."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
