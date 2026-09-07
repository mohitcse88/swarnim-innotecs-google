import React, { useState, useMemo, useEffect } from 'react';
import { Search, BookOpen, X } from 'lucide-react';
import { Course, CourseCategory, LearningMode, SkillLevel } from '../types';
import { COURSES, COURSE_CATEGORIES } from '../data/coursesData';
import { CourseCard } from '../components/CourseCard';
import { CourseDetailView } from '../components/CourseDetailView';

interface CoursesPageProps {
  initialCourseId?: string;
  initialCategory?: CourseCategory;
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  initialCourseId,
  initialCategory,
  onOpenEnquiry,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'all'>(
    initialCategory || 'all'
  );
  const [selectedMode, setSelectedMode] = useState<LearningMode | 'all'>('all');
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle initial course if routed with deep-link
  useEffect(() => {
    if (initialCourseId) {
      const found = COURSES.find((c) => c.id === initialCourseId || c.slug === initialCourseId);
      if (found) {
        setSelectedCourse(found);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [initialCourseId]);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredCourses = useMemo(() => {
    return COURSES.filter((c) => {
      // Category filter
      if (selectedCategory !== 'all' && c.category !== selectedCategory) {
        return false;
      }
      // Mode filter
      if (selectedMode !== 'all') {
        if (!c.modes.includes(selectedMode)) {
          return false;
        }
      }
      // Level filter
      if (selectedLevel !== 'all') {
        if (selectedLevel !== 'All Levels' && c.level !== selectedLevel && c.level !== 'All Levels') {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = c.title.toLowerCase().includes(query);
        const matchesDesc = c.description.toLowerCase().includes(query);
        const matchesTagline = c.tagline.toLowerCase().includes(query);
        const matchesCategory = c.categoryLabel.toLowerCase().includes(query);
        const matchesProjects = c.practicalProjects.some(
          (p) =>
            p.title.toLowerCase().includes(query) ||
            p.techStack.some((t) => t.toLowerCase().includes(query))
        );
        if (!matchesTitle && !matchesDesc && !matchesTagline && !matchesCategory && !matchesProjects) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedMode, selectedLevel, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMode('all');
    setSelectedLevel('all');
    setSearchQuery('');
  };

  // If a course is selected, render the reusable CourseDetailView template!
  if (selectedCourse) {
    return (
      <CourseDetailView
        course={selectedCourse}
        onBack={() => {
          setSelectedCourse(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onEnroll={(title) => onOpenEnquiry(title)}
      />
    );
  }

  return (
    <div id="courses-listing-page" className="bg-[#f8fafc] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Hands-on Technical Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight mt-3">
            Practical, Industry-Grade Technical Courses
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Every course combines live mentor guidance, hands-on lab projects, and recognized certification. Filter by mode and skill level below.
          </p>
        </div>

        {/* Filter Controls Bento Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm mb-8 space-y-4">
          {/* Search and Quick Filters */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="relative w-full md:flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="course-search-input"
                type="text"
                placeholder="Search by topic, tech stack (e.g. Next.js, Python, Arduino, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mode Filter Dropdown/Tabs */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Mode:</span>
              <div className="inline-flex rounded-xl bg-slate-100 p-1 text-xs font-semibold w-full sm:w-auto justify-between sm:justify-start">
                {(['all', 'Online', 'Offline', 'Hybrid'] as const).map((mode) => (
                  <button
                    key={mode}
                    id={`filter-mode-${mode.toLowerCase()}`}
                    onClick={() => setSelectedMode(mode)}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      selectedMode === mode
                        ? 'bg-blue-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {mode === 'all' ? 'All Modes' : mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filter Dropdown/Tabs */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap">Level:</span>
              <select
                id="filter-level-select"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as SkillLevel | 'all')}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto cursor-pointer"
              >
                <option value="all">All Levels</option>
                <option value="Beginner">Beginner Friendly</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Category Tabs / Pills (Scrollable) */}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-semibold scrollbar-none">
            <button
              id="category-pill-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#0f172a] text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Categories ({COURSES.length})
            </button>

            {COURSE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                id={`category-pill-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info & Reset */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <div>
            Showing <strong className="text-[#0f172a]">{filteredCourses.length}</strong> practical courses
            {selectedCategory !== 'all' && (
              <span> in <strong className="text-blue-600">{COURSE_CATEGORIES.find(c => c.id === selectedCategory)?.name}</strong></span>
            )}
            {selectedMode !== 'all' && <span> • <strong>{selectedMode}</strong></span>}
            {selectedLevel !== 'all' && <span> • <strong>{selectedLevel}</strong></span>}
          </div>

          {(selectedCategory !== 'all' || selectedMode !== 'all' || selectedLevel !== 'all' || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={(c) => {
                  setSelectedCourse(c);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onQuickEnquire={(c) => onOpenEnquiry(c.title)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0f172a]">No matching courses found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-4">
              Try adjusting your search terms or clearing mode and category filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
            >
              View All Courses
            </button>
          </div>
        )}

        {/* Bottom Help strip in Bento Style */}
        <div className="mt-16 bg-[#0f172a] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-xl font-extrabold text-white">
              Not sure which course matches your background?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Talk directly with a senior mentor. We assess your goals and recommend the exact beginner-friendly track.
            </p>
          </div>
          <button
            id="courses-page-counselling-btn"
            onClick={() => onOpenEnquiry()}
            className="relative z-10 px-6 py-3 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 shrink-0 transition-colors cursor-pointer"
          >
            Free Tech Counselling Call
          </button>
        </div>
      </div>
    </div>
  );
};
