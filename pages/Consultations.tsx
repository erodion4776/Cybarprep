
import React from 'react';
import { Check, X, Info, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONSULTATIONS } from '../constants';

const Consultations: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Strategic Consultations</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the level of focus you need for your final bar exam preparations. All sessions are 1-on-1 and highly targeted.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {CONSULTATIONS.map((opt) => (
            <motion.div 
              key={opt.id} 
              variants={item}
              whileHover={{ y: -10, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col transition-all duration-300"
            >
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{opt.title}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-slate-900">{opt.price}</span>
                </div>
                <div className="flex items-center text-sm text-slate-500 mb-6">
                  <Clock size={16} className="mr-2" />
                  Turnaround: {opt.turnaround}
                </div>
                <motion.a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-all flex items-center justify-center ${
                    opt.id === 'full-strategy' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Book Now
                  <ExternalLink size={16} className="ml-2" />
                </motion.a>
              </div>
              <div className="p-8 flex-grow">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">What's Included</h4>
                <ul className="space-y-4 mb-8">
                  {opt.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium">{inc}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Does NOT Include</h4>
                <ul className="space-y-3">
                  {opt.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start">
                      <X size={18} className="text-slate-300 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-400">{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Policy Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl border border-blue-100 p-8 lg:p-12 shadow-sm"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Info size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Consultation Policy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { title: 'No Unlimited Access', desc: 'Each booking is for a discrete session or service. I do not provide ongoing messaging or unlimited support between sessions.' },
              { title: 'No Rescheduling', desc: 'Missed sessions without 24-hour notice are forfeited. Professional courtesy is expected as schedule slots are limited.' },
              { title: 'Single Scope', desc: 'Feedback options are limited to the specific assignment submitted. New assignments require a new booking.' },
              { title: 'New Bookings Required', desc: 'Further consultations or follow-up beyond the defined package require a completely new booking.' }
            ].map((policy, idx) => (
              <div key={idx} className="border-l-4 border-slate-200 pl-4 group hover:border-blue-400 transition-colors">
                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{policy.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {policy.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <p className="text-slate-500 text-sm italic">
              "Clarity + boundaries = credibility. I prioritize your success by staying focused on defined strategic goals."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Consultations;
