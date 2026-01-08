
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle, ArrowRight, Shield, Zap, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const IndependentLogo = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-10 h-10"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
    <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-6 border border-blue-100"
              >
                Strategic | Independent | Practical
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight"
              >
                Strategic Bar Exam Guidance
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed"
              >
                One-on-one strategy, focused feedback, and practical execution — <span className="font-semibold text-slate-900 underline decoration-blue-500 underline-offset-4">not</span> a traditional bar prep company.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    to="/consultations"
                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center group w-full"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    to="/courses"
                    className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center w-full"
                  >
                    Explore Courses
                  </Link>
                </motion.div>
              </motion.div>

              {/* Prominent Disclaimer */}
              <motion.div 
                variants={fadeInUp}
                className="p-4 bg-amber-50 border border-amber-100 rounded-lg inline-block text-left"
              >
                <p className="text-xs sm:text-sm text-amber-800 flex items-start">
                  <Shield size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Disclaimer:</strong> This is not a full bar prep course. Services are limited, strategic, and execution-focused.</span>
                </p>
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
                <img 
                  src="https://i.ibb.co/xt38XXnf/1767880105306-019b9ddc-e572-7891-b12d-a7f5f6e5e9e2.jpg" 
                  alt="Professional Legal Strategy" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-slate-200 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { 
                icon: <Target size={32} />, 
                color: 'bg-blue-600 text-white', 
                title: 'Focused Feedback', 
                desc: "Direct, unvarnished critiques of your writing assignments. We don't just tell you what's wrong; we show you how to fix it for the graders." 
              },
              { 
                icon: <Zap size={32} />, 
                color: 'bg-slate-900 text-white', 
                title: 'Practical Execution', 
                desc: "Move past the \"learning\" phase and into the \"doing\" phase. We help you build the endurance and mechanical skills needed to pass." 
              },
              { 
                icon: <IndependentLogo />, 
                color: 'bg-indigo-700 text-white', 
                title: 'Independent Approach', 
                desc: "No corporate fluff. Just strategic guidance from an attorney who has navigated the trenches and knows what actually works." 
              }
            ].map((prop, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100 group hover:shadow-lg transition-all"
              >
                <div className={`w-20 h-20 ${prop.color} rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                  {prop.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {prop.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Focus Your Final Stretch?</h2>
              <p className="text-slate-400 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Stop guessing and start executing. Book a strategy session today to refine your path to the bar.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/consultations"
                  className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all shadow-md active:scale-95"
                >
                  See Consultation Options
                </Link>
              </motion.div>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
