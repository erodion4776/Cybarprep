
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, BookOpen } from 'lucide-react';
import { ARTICLES } from '../constants';

const Articles: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Strategic Insights</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Short, tactical articles on bar strategy, MPT mastery, and the mental game of the final stretch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {ARTICLES.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.id}`}
              className="group block border-b border-gray-100 pb-12 transition-all"
            >
              <article>
                <div className="flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                  <BookOpen size={14} className="mr-2" />
                  {article.category}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar size={14} className="mr-2" />
                    {article.date}
                  </div>
                  <span className="inline-flex items-center text-slate-900 font-bold group-hover:translate-x-1 transition-transform">
                    Read Article
                    <ChevronRight size={18} className="ml-1" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 bg-slate-50 rounded-3xl p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between border border-gray-100">
          <div className="lg:max-w-lg mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategy, Directly to Your Inbox</h2>
            <p className="text-slate-600">
              Get tactical updates and the latest bar exam insights. No spam, just high-value execution tips.
            </p>
          </div>
          <form className="w-full lg:max-w-sm flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Articles;
