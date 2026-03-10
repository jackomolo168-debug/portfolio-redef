import { motion } from 'framer-motion';
import { ChevronLeft, Send, Rocket, Target, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const StartProject = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-indigo-600 transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
        >
          <ChevronLeft size={16} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter">
            Let's <span className="text-indigo-600">Start.</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-xl mb-16 max-w-2xl font-medium leading-relaxed">
            Have a project in mind? Fill out the form below and let's bring your vision to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass p-8 rounded-3xl border-indigo-500/10">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="font-black text-xl mb-2 text-zinc-900 dark:text-white">Goal</h3>
              <p className="text-zinc-500 text-sm">Define what you want to achieve.</p>
            </div>
            <div className="glass p-8 rounded-3xl border-emerald-500/10">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Target size={24} />
              </div>
              <h3 className="font-black text-xl mb-2 text-zinc-900 dark:text-white">Target</h3>
              <p className="text-zinc-500 text-sm">Identify your audience.</p>
            </div>
            <div className="glass p-8 rounded-3xl border-pink-500/10">
              <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-black text-xl mb-2 text-zinc-900 dark:text-white">Feedback</h3>
              <p className="text-zinc-500 text-sm">Continuous iteration.</p>
            </div>
          </div>

          <form className="space-y-8 glass p-8 md:p-12 rounded-[2.5rem] border-white/10 shadow-2xl shadow-black/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-zinc-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-zinc-900 dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-2">Project Description</label>
              <textarea 
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-zinc-900 dark:text-white resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 rounded-2xl font-black text-lg transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 group">
              Send Project Proposal
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default StartProject;
