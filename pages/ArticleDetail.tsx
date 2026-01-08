
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { ARTICLES } from '../constants';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/articles" className="text-blue-600 hover:underline">Back to Articles</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/articles" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-12 transition-colors group">
          <ChevronLeft size={20} className="mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            <span className="flex items-center bg-slate-100 px-3 py-1 rounded-full text-blue-600">
              <Tag size={12} className="mr-1" />
              {article.category}
            </span>
            <span className="flex items-center">
              <Calendar size={12} className="mr-1" />
              {article.date}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>
        </header>

        <div className="prose prose-slate lg:prose-lg max-w-none mb-16">
          <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed italic">
            {article.excerpt}
          </p>
          <div className="text-slate-800 leading-relaxed space-y-6 whitespace-pre-line">
            {article.content}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Takeaway</h3>
            <p>The core of strategy is choosing what not to do. In the bar exam context, this means stopping the endless loop of "learning" and starting the difficult work of "performing."</p>
          </div>
        </div>

        <footer className="pt-12 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
               <div className="w-10 h-10 bg-slate-900 rounded-full"></div>
               <div>
                 <p className="text-sm font-bold text-slate-900">CyBarPrep Editorial</p>
                 <p className="text-xs text-slate-500">Independent Bar Strategy</p>
               </div>
            </div>
            <button className="inline-flex items-center text-slate-400 hover:text-slate-900 transition-colors">
              <Share2 size={18} className="mr-2" />
              Share
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ArticleDetail;
