
import React from 'react';
import { Mail, Phone, Calendar, Send, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight"
          >
            Connect With Your Strategist
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Direct access for serious examinees. Book a call or send a message for inquiries about custom strategy plans.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">strategy@cybarprep.com</p>
                  <p className="text-xs text-slate-400 mt-1">Typical response within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Booking</h4>
                  <p className="text-slate-600">Calendly.com/cybarprep</p>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    className="text-blue-600 font-bold text-sm hover:underline mt-2 inline-block"
                  >
                    View Real-time Availability →
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">Independent Remote Guidance</p>
                  <p className="text-xs text-slate-400 mt-1">Available across all US time zones.</p>
                </div>
              </div>
            </div>

            {/* Credibility Box */}
            <div className="mt-16 bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <ShieldCheck size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Professional Boundaries</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                To maintain the quality of guidance, I only accept a limited number of strategy clients each cycle. Inquiries are processed in the order received.
              </p>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Status: Accepting Clients for July 2024
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Next Bar Exam Date</label>
                <select className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none">
                  <option>July 2024</option>
                  <option>February 2025</option>
                  <option>Other / Future</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message / Strategic Concern</label>
                <textarea 
                  rows={5}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none resize-none"
                  placeholder="Tell me about your current prep hurdles..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center group"
              >
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
