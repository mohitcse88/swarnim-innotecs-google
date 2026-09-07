import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page, courseId?: string) => void;
  onOpenEnquiry: (prefillCourse?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Courses', page: 'courses' },
    { label: 'Colleges & Schools', page: 'colleges-schools' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 py-3'
          : 'bg-white border-b border-slate-200 py-3.5'
      }`}
    >
      {/* Top Bento Announcement Strip */}
      <div className="hidden lg:block bg-[#0f172a] text-white text-xs font-semibold py-1.5 px-4 text-center -mt-3.5 mb-3 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Admissions Open: Practical Cohorts (Online & In-Person Lab Centers)</span>
          </span>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 font-medium text-slate-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-blue-400" />
              <span>Admissions Helpline: +91 98765 43210</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              100% Practical Labs
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand Logo - Bento Grid Blue Icon */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <div className="w-4 h-4 border-2 border-white rotate-45" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  Swarnim<span className="text-blue-600">Inotecs</span>
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase -mt-0.5">
                Private Limited
              </p>
            </div>
          </button>

          {/* Desktop Navigation (Exact 5 items with Bento Grid tab style) */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`py-1 text-sm font-semibold transition-colors duration-150 relative cursor-pointer ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action: Bento Theme Enquire Now Pill Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="header-enquire-btn"
              onClick={() => onOpenEnquiry()}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/30 transition-all active:scale-[0.98] cursor-pointer"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-header-enquire-btn"
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
            >
              Enquire
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`mobile-nav-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                id="mobile-drawer-enquire-now"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 rounded-full font-bold text-sm bg-blue-600 text-white flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                <span>Enquire Now for Batches</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <p className="text-center text-xs text-slate-500 pt-1">
                Call / WhatsApp: +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
