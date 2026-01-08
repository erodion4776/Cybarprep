
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, PlayCircle, Lock, Mail, ChevronRight, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';

const Courses: React.FC = () => {
  const freeProducts = PRODUCTS.filter(p => p.type === 'Free');
  const paidProducts = PRODUCTS.filter(p => p.type === 'Paid');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-16 lg:py-24 text-white overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Courses & eBooks</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Focused training resources and strategic guides designed for the final stages of your bar prep.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Paid Products Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Paid Training</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paidProducts.map((product) => (
              <motion.div 
                key={product.id} 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center p-8 overflow-hidden relative">
                  {product.id === 'mpt-ebook' ? (
                    <div className="relative transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                       <div className="w-32 h-44 bg-blue-600 shadow-2xl rounded-r-lg flex items-center justify-center text-white border-y-4 border-r-4 border-blue-500">
                          <FileText size={48} />
                       </div>
                    </div>
                  ) : (
                    <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                      <div className="w-48 h-32 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-2xl">
                         <PlayCircle size={48} />
                      </div>
                    </div>
                  )}
                  {product.tagline && (
                    <span className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold uppercase px-2 py-1 rounded shadow-sm z-10">
                      {product.tagline}
                    </span>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                    <span className="text-lg font-bold text-slate-900">{product.price}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Scope Definition */}
                  <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-100 group-hover:bg-blue-50/30 transition-colors">
                    <div className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                      <ShieldAlert size={14} className="mr-2" />
                      Scope & Limits
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="block font-bold text-slate-900 mb-1 italic underline decoration-green-500 underline-offset-2 uppercase tracking-tighter">What it IS</span>
                        <ul className="text-slate-500 space-y-1">
                          <li>• Strategy focus</li>
                          <li>• Practical tools</li>
                        </ul>
                      </div>
                      <div>
                        <span className="block font-bold text-slate-900 mb-1 italic underline decoration-red-500 underline-offset-2 uppercase tracking-tighter">What it is NOT</span>
                        <ul className="text-slate-500 space-y-1">
                          <li>• Subject lecture</li>
                          <li>• Practice portal</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to={`/courses/${product.id}`}
                    className="w-full py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors flex items-center justify-center group"
                  >
                    View Product Details
                    <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Free Resources Section */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">Free Resources</h2>
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">No Cost</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freeProducts.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col hover:border-green-200 transition-colors"
              >
                <div className="w-10 h-10 bg-white shadow-sm border border-gray-200 rounded-lg flex items-center justify-center text-slate-900 mb-4">
                  <FileText size={20} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{product.title}</h3>
                <p className="text-slate-500 text-xs mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <div className="relative mb-3">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                    />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 bg-blue-600 text-white rounded-md text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    Get Free Copy
                  </motion.button>
                </div>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-blue-600 p-8 rounded-xl text-white flex flex-col justify-center items-center text-center group"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Lock size={32} className="mb-4 opacity-50" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2">More Coming Soon</h3>
              <p className="text-xs text-blue-100 opacity-80 leading-relaxed">
                Check back weekly for new tactical guides and MPT checklists.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
