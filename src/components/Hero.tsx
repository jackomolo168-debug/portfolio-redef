import { motion } from 'framer-motion';
import { Terminal, Palette, Shield, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 mesh-bg">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-[10px] font-black mb-8 uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 border-indigo-500/20 shadow-xl shadow-indigo-500/5">
              <Sparkles size={12} className="animate-pulse" />
              Available for new projects
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white leading-[1.1] mb-8 tracking-tighter">
              Design. <br />
              Code. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500 bg-[length:200%_auto] animate-gradient-x">Secure.</span>
            </h1>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-medium">
              Transforming complex problems into elegant, high-performance digital solutions with a focus on security and user-centric design.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/start-project"
                className="bg-zinc-950 dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-indigo-500/10 group"
              >
                Start a Project
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
                <a 
                href="https://portfolio-gpdd.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-zinc-900 dark:text-white px-10 py-5 rounded-2xl font-black transition-all hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]"
                >
                My Portfolio
                </a>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-6 grid-rows-6 gap-4 aspect-square"
            >
              <div className="col-span-3 row-span-4 glass rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-indigo-500/50 transition-all duration-500 shadow-2xl shadow-black/5">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <Terminal size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">Fullstack</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">Scalable systems & modern architectures.</p>
                </div>
              </div>

              <div className="col-span-3 row-span-2 glass rounded-[2.5rem] p-8 flex items-center justify-between group hover:border-pink-500/50 transition-all duration-500 shadow-2xl shadow-black/5">
                <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <Palette size={24} />
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">UI/UX</h3>
                </div>
              </div>

              <div className="col-span-3 row-span-2 glass rounded-[2.5rem] p-8 flex items-center justify-between group hover:border-emerald-500/50 transition-all duration-500 shadow-2xl shadow-black/5">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Shield size={24} />
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">Security</h3>
                </div>
              </div>

              <div className="col-span-6 row-span-2 bg-indigo-600 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group shadow-2xl shadow-indigo-600/20">
                <div className="absolute top-0 left-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 animate-shimmer" />
                <p className="text-indigo-200 text-xs font-black uppercase tracking-widest mb-2">Collaboration</p>
                <h4 className="text-3xl font-black text-white tracking-tighter">Ready to scale?</h4>
              </div>
            </motion.div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[120px] -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
