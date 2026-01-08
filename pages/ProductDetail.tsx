
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, XCircle, ShoppingCart, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/courses" className="text-blue-600 hover:underline">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Top Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group">
            <ChevronLeft size={18} className="mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 mb-6 border border-blue-100 uppercase tracking-widest"
              >
                {product.type} Resource
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
              >
                {product.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 mb-10 leading-relaxed"
              >
                {product.longDescription || product.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-6"
              >
                <div className="text-3xl font-extrabold text-slate-900">{product.price}</div>
                <button className="flex-grow sm:flex-grow-0 px-10 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center group">
                  Purchase Access
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              <div className="mt-8 flex items-center text-slate-400 text-sm">
                <ShieldCheck size={18} className="mr-2" />
                Secure checkout • Instant digital delivery
              </div>
            </div>

            {/* Visual Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center p-12 border border-slate-200"
            >
              <div className="text-slate-300 text-center">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                   <ShoppingCart size={40} className="text-slate-200" />
                </div>
                <p className="font-bold text-slate-400 uppercase tracking-widest text-sm">Product Preview</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section (What it is / What it is not) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Clarity & Expectations</h2>
            <p className="text-slate-600">Know exactly what you're getting. No prep-company fluff, just tactical precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* What it is */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-green-100"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">What it IS</h3>
              </div>
              <ul className="space-y-6">
                {(product.whatItIs || []).map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What it is NOT */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-red-100"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mr-4">
                  <XCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">What it is NOT</h3>
              </div>
              <ul className="space-y-6">
                {(product.whatItIsNot || []).map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-slate-500 leading-relaxed italic">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center uppercase tracking-widest text-sm">Key Features & Modules</h3>
          <div className="space-y-4">
            {(product.features || []).map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-white border border-slate-100 rounded-xl flex items-center shadow-sm hover:border-blue-200 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4 text-sm font-bold">
                  {i + 1}
                </div>
                <span className="text-slate-900 font-semibold">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-6">Ready to streamline your execution?</h2>
            <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all">
              Get Instant Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
