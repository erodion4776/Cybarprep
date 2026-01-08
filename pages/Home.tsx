
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle, Shield, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-6 border border-blue-100">
              Strategic | Independent | Practical
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Strategic Bar Exam Guidance
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              One-on-one strategy, focused feedback, and practical execution — <span className="font-semibold text-slate-900 underline decoration-blue-500 underline-offset-4">not</span> a traditional bar prep company.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/consultations"
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center group"
              >
                Book a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/courses"
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center"
              >
                Explore Courses
              </Link>
              <Link
                to="/community"
                className="px-8 py-4 bg-blue-50 text-blue-700 font-bold rounded-lg hover:bg-blue-100 transition-all flex items-center justify-center"
              >
                Join Community
              </Link>
            </div>

            {/* Prominent Disclaimer */}
            <div className="mt-16 p-4 bg-amber-50 border border-amber-100 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm text-amber-800 flex items-center justify-center text-center">
                <Shield size={16} className="mr-2 flex-shrink-0" />
                <strong>Disclaimer:</strong> &nbsp; This is not a full bar prep course. Services are limited, strategic, and execution-focused.
              </p>
            </div>
          </div>
        </div>
        
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Focused Feedback</h3>
              <p className="text-slate-600 leading-relaxed">
                Direct, unvarnished critiques of your writing assignments. We don't just tell you what's wrong; we show you how to fix it for the graders.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Practical Execution</h3>
              <p className="text-slate-600 leading-relaxed">
                Move past the "learning" phase and into the "doing" phase. We help you build the endurance and mechanical skills needed to pass.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 mb-6 shadow-sm">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Independent Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                No corporate fluff. Just strategic guidance from an attorney who has navigated the trenches and knows what actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Ready to Focus Your Final Stretch?</h2>
              <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
                Stop guessing and start executing. Book a strategy session today to refine your path to the bar.
              </p>
              <Link
                to="/consultations"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all shadow-md"
              >
                See Consultation Options
              </Link>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
