import React from 'react';
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

export const ContactPage: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/919876543210?text=Hello%20Swarnim%20Inotecs,%20I%20would%20like%20to%20enquire%20about%20your%20practical%20technical%20courses.';

  return (
    <div id="contact-us-page" className="bg-[#f8fafc] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            We Are Here to Help
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mt-3">
            Contact Swarnim Inotecs
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Have questions about syllabus, lab visits, fees, or college partnerships? Reach out via phone, WhatsApp, email, or fill out the enquiry form below.
          </p>
        </div>

        {/* Contact Channels Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {/* 1. Phone Bento Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0f172a] text-base mb-1">
                Call Admissions Helpline
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                Speak directly with an academic counsellor for course advice.
              </p>
              <div className="text-base font-extrabold text-[#0f172a]">
                +91 98765 43210
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Alternate: +91 98765 43211
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100">
              <a
                id="call-helpline-link"
                href="tel:+919876543210"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0f172a] hover:bg-slate-800 text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* 2. WhatsApp Click-to-Chat Bento Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-emerald-300 transition-colors relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="font-bold text-[#0f172a] text-base">
                  WhatsApp Direct Chat
                </h3>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Instant
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Get PDF syllabus, fee breakdown, and demo schedule straight on WhatsApp.
              </p>
              <div className="text-sm font-bold text-emerald-700">
                Online & Quick Response
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Typical reply time: within 15 minutes
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100">
              <a
                id="whatsapp-chat-link"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* 3. Email Bento Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors sm:col-span-2 lg:col-span-1">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0f172a] text-base mb-1">
                Email Official Inquiries
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                For institutional MoUs, recruitment, or curriculum requests.
              </p>
              <div className="text-sm font-bold text-[#0f172a] break-all">
                contact@swarniminotecs.com
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Admissions: admissions@swarniminotecs.com
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100">
              <a
                id="email-official-link"
                href="mailto:contact@swarniminotecs.com"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Grid: Form + Location & Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* General Enquiry Form in Bento Box (Left 7 Cols) */}
          <div className="lg:col-span-7">
            <LeadForm
              idPrefix="contact"
              source="contact_page"
              title="General Enquiry & Free Counselling Request"
              subtitle="Submit your contact details and our team will get in touch immediately."
            />
          </div>

          {/* Location, Map & Business Hours (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Business Hours Bento Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-[#0f172a] text-base mb-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Working & Lab Hours</span>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">Monday – Friday:</span>
                  <span>9:00 AM – 7:00 PM IST</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">Saturday:</span>
                  <span>9:00 AM – 6:00 PM IST</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span className="font-semibold text-slate-800">Sunday:</span>
                  <span className="text-blue-600 font-medium">Offline Lab Batches (By appointment)</span>
                </div>
              </div>
            </div>

            {/* Address & Embedded Map Bento Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm overflow-hidden">
              <div className="flex items-start gap-2.5 mb-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0f172a] text-base">
                    Headquarters & Main Innovation Lab
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Swarnim Inotecs Private Limited<br />
                    Innovation Hub, 3rd Floor, Institutional Area, Sector 62,<br />
                    Noida, National Capital Region (NCR), Uttar Pradesh 201309, India
                  </p>
                </div>
              </div>

              {/* Embedded Interactive Map */}
              <div className="mt-4 rounded-2xl overflow-hidden border border-slate-200 relative aspect-video bg-slate-100 flex items-center justify-center">
                <iframe
                  title="Swarnim Inotecs Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.974917415415!2d77.360155!3d28.622435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36a9f%3A0x35f483c6cb1936c!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Secondary Branch Lab info */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <strong className="text-slate-800">Branch Center:</strong> Viman Nagar, Pune, Maharashtra 411014 (Offline batches for West India).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
