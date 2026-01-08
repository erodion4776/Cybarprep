
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Consultations', path: '/consultations' },
    { name: 'Courses & eBooks', path: '/courses' },
    { name: 'Community', path: '/community' },
    { name: 'Articles', path: '/articles' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-slate-900 tracking-tight">CyBarPrep<span className="text-blue-600">.com</span></span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(link.path) ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm"
              >
                Book a Call
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://calendly.com"
                className="block w-full text-center px-3 py-2 mt-4 rounded-md text-base font-semibold text-white bg-slate-900"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-bold mb-4">CyBarPrep.com</h2>
              <p className="text-slate-400 max-w-md text-sm leading-relaxed">
                Strategic Bar Exam Guidance for the Final Stretch. Independent, focused, and practical support for aspiring attorneys.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">Positioning Statement</h3>
              <p className="text-sm text-slate-400 italic">
                "I am an independent attorney providing strategic bar exam guidance based on experience. I am not a traditional bar prep company, and services are limited in scope and clearly defined."
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} CyBarPrep. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/consultations" className="hover:text-white transition-colors">Consultations</Link>
              <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
              <Link to="/articles" className="hover:text-white transition-colors">Articles</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
