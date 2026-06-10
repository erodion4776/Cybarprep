import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'subscribing' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const SITE_KEY = "cybarprep";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('subscribing');
    setMessage('');

    try {
      const res = await fetch("https://xtop-retail.onrender.com/api/external/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, siteKey: SITE_KEY })
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setMessage("🎉 " + data.message);
        setName('');
        setEmail('');
      } else {
        setStatus('error');
        setMessage("❌ " + (data.error || "Subscription failed"));
      }
    } catch (err) {
      setStatus('error');
      setMessage("❌ Connection failed. Please try again later.");
    }
  };

  return (
    <div className="max-w-sm p-6 border border-slate-700 rounded-2xl bg-slate-800 shadow-inner">
      <h3 className="text-lg font-bold text-white mb-2">Join our Newsletter</h3>
      <p className="text-sm text-slate-400 mb-4">Get the latest updates and resources delivered to your inbox.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name" 
          required 
          className="px-4 py-3 text-sm border border-slate-600 rounded-lg outline-none bg-slate-900 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 text-left"
        />
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          required 
          className="px-4 py-3 text-sm border border-slate-600 rounded-lg outline-none bg-slate-900 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 text-left"
        />
        <button 
          type="submit" 
          disabled={status === 'subscribing'}
          className="px-4 py-3 text-sm font-bold text-white bg-slate-950 hover:bg-black rounded-lg transition-colors disabled:bg-slate-700 disabled:cursor-not-allowed"
        >
          {status === 'subscribing' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-sm font-medium ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
