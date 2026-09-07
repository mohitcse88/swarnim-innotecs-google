import React, { useState, useEffect } from 'react';
import { Page, CourseCategory } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CollegesSchoolsPage } from './pages/CollegesSchoolsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);
  const [categoryFilter, setCategoryFilter] = useState<CourseCategory | undefined>(undefined);

  // Global Enquiry Modal State
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalPrefilledCourse, setModalPrefilledCourse] = useState<string | undefined>(undefined);

  // Scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page, courseId?: string, category?: CourseCategory) => {
    setCurrentPage(page);
    setSelectedCourseId(courseId);
    setCategoryFilter(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (prefillCourse?: string) => {
    setModalPrefilledCourse(prefillCourse);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setModalPrefilledCourse(undefined);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-950">
      {/* Sticky Header with exact 5 navigation items + persistent Enquire Now button */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Page Routing Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentPage === 'courses' && (
          <CoursesPage
            initialCourseId={selectedCourseId}
            initialCategory={categoryFilter}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentPage === 'colleges-schools' && (
          <CollegesSchoolsPage />
        )}

        {currentPage === 'about' && (
          <AboutPage onOpenEnquiry={() => handleOpenEnquiry()} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Standard Footer with utility links: Student Login & Verify Your Certificate */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Global Reusable Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        prefilledCourse={modalPrefilledCourse}
        source={modalPrefilledCourse ? 'course_detail' : 'header_modal'}
      />

      {/* Floating Action Buttons: WhatsApp & Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {showScrollTop && (
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:text-slate-900 transition-all active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Direct Float */}
        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/919876543210?text=Hello%20Swarnim%20Inotecs,%20I%20would%20like%20to%20enquire%20about%20your%20practical%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:scale-105 active:scale-95 group font-bold text-xs sm:text-sm"
          title="Chat with an Academic Mentor on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">Chat with Mentor</span>
        </a>
      </div>
    </div>
  );
}
