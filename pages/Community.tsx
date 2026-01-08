
import React from 'react';
import { Users, ExternalLink, ShieldAlert, CheckCircle2 } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 lg:p-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 text-blue-600 rounded-full mb-8">
              <Users size={40} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">CyBarPrep Community</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              A dedicated space for strategic thinkers to share insights, vent frustrations, and keep each other focused on execution.
            </p>
            
            <a
              href="https://www.skool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-slate-900 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all group"
            >
              Join the Skool Community
              <ExternalLink size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center">
                  <CheckCircle2 size={16} className="mr-2 text-green-500" />
                  What it is
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li>• Peer-to-peer strategic support</li>
                  <li>• Shared resources and study logs</li>
                  <li>• High-accountability environment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center">
                  <ShieldAlert size={16} className="mr-2 text-amber-500" />
                  What it is not
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li>• Individualized coaching or tutoring</li>
                  <li>• A replacement for consultations</li>
                  <li>• Legal advice or exam predictions</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 py-6 px-8 text-center">
            <p className="text-slate-400 text-xs font-medium italic">
              "This community is supplemental and does not replace the depth and focus of formal consultations or courses."
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>Looking for 1-on-1 focus? <a href="#/consultations" className="text-blue-600 font-bold hover:underline">View Consultations</a></p>
        </div>
      </div>
    </div>
  );
};

export default Community;
