
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Consultations', path: '/consultations' },
    { name: 'Courses & eBooks', path: '/courses' },
    { name: 'Community', path: '/community' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm' 
            : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="hover:opacity-90 transition-opacity">
                <Logo className="h-9 sm:h-10" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group text-sm font-semibold text-slate-600 transition-colors py-2"
                >
                  <span className={`${isActive(link.path) ? 'text-blue-600' : 'group-hover:text-blue-600'}`}>
                    {link.name}
                  </span>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive(link.path) ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
              <motion.a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md active:scale-95"
              >
                Book a Call
              </motion.a>
            </nav>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden bg-white border-b border-gray-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-base font-bold transition-colors ${
                      isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://calendly.com"
                  className="block w-full text-center px-4 py-4 mt-4 rounded-lg text-base font-bold text-white bg-slate-900 shadow-lg"
                >
                  Book a Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <Link to="/">
                <Logo className="h-10 mb-6" isDark={true} />
              </Link>
              <p className="text-slate-400 max-w-md text-sm leading-relaxed mb-6">
                Strategic Bar Exam Guidance for the Final Stretch. Independent, focused, and practical support for aspiring attorneys.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-inner">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-3">Positioning Statement</h3>
              <p className="text-sm text-slate-400 italic leading-relaxed">
                "I am an independent attorney providing strategic bar exam guidance based on experience. I am not a traditional bar prep company, and services are limited in scope and clearly defined."
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} CyBarPrep. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 mt-4 md:mt-0 font-medium">
              <Link to="/consultations" className="hover:text-white transition-colors">Consultations</Link>
              <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
              <Link to="/articles" className="hover:text-white transition-colors">Articles</Link>
              <Link to="/community" className="hover:text-white transition-colors">Community</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
