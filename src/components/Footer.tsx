import React from 'react';
import {
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  LogIn,
  Linkedin,
  Youtube,
  Instagram,
  Twitter,
  Github,
  Award,
} from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0f172a] text-slate-300 border-t border-slate-800">
      {/* Utility Bar with Bento Grid uppercase links */}
      <div className="border-b border-slate-800/80 bg-slate-900/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered Under Ministry of Corporate Affairs (Govt. of India)</span>
            </div>

            {/* Exactly the two utility links formatted with Bento design */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-xs font-bold uppercase tracking-wider">
              <a
                id="footer-utility-student-login"
                href="https://lms.swarniminotecs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                title="Access your student portal, lecture recordings, and assignments"
              >
                <LogIn className="w-3.5 h-3.5 text-blue-400" />
                <span>Student Login</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <span className="text-slate-700">|</span>

              <a
                id="footer-utility-verify-certificate"
                href="https://verify.swarniminotecs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                title="Verify genuine course completion and internship credentials"
              >
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>Verify Your Certificate</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
                <div className="w-4 h-4 border-2 border-white rotate-45" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Swarnim<span className="text-blue-500">Inotecs</span>
                </span>
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase -mt-0.5">
                  Private Limited
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Learn by Doing — Practical, Easy, Industry-Relevant Tech Education, Online or Offline.
              We empower students, schools, and colleges with hands-on engineering in Web, AI, DevOps, IoT, and Robotics.
            </p>

            {/* Social Icons in Bento Style */}
            <div className="pt-2 flex items-center gap-2.5">
              {[
                { label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
                { label: 'YouTube', icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com' },
                { label: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com' },
                { label: 'Twitter', icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com' },
                { label: 'GitHub', icon: <Github className="w-4 h-4" />, href: 'https://github.com' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-all text-xs"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-blue-500 rounded-full" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  All Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('colleges-schools')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  Colleges & Schools
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer"
                >
                  Book Free Counselling
                </button>
              </li>
            </ul>
          </div>

          {/* Top Categories */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-blue-500 rounded-full" />
              <span>Popular Tracks</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Full Stack Web Development</li>
              <li>AI & Machine Learning</li>
              <li>IoT & Embedded Systems</li>
              <li>Robotics Engineering</li>
              <li>DevOps & Kubernetes</li>
              <li>Programming (C, C++, Java, Python)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-blue-500 rounded-full" />
              <span>Get in Touch</span>
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Innovation Hub, Sector 62, Noida, Uttar Pradesh 201309, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:contact@swarniminotecs.com" className="hover:text-white transition-colors">
                  contact@swarniminotecs.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-500 pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST<br />(Offline Lab Open for Batches)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Swarnim Inotecs Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Corporate Identity: U80903DL2023PTC123456</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
