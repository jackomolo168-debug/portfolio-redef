import { motion } from 'framer-motion';
import { Palette, CheckCircle2, Cpu, Globe, Layout, Lock } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <span className="text-indigo-600 dark:text-indigo-500 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Abilities</span>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6">Expertise Stack.</h2>
          <p className="text-zinc-500 dark:text-zinc-500 max-w-xl font-medium leading-relaxed">
            I specialize in the intersection of design, development, and security to deliver complete, production-ready products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 md:row-span-2 glass rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative shadow-2xl shadow-black/5"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cpu size={200} className="text-zinc-900 dark:text-white" />
            </div>
            <div>
              <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                <Layout className="text-zinc-900 dark:text-white" size={32} />
              </div>
              <h3 className="text-3xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">Fullstack Core</h3>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-md font-medium text-lg leading-relaxed">
                Expertise in developing end-to-end applications using modern frameworks and cloud-native technologies. From reactive frontends to robust microservices.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'TypeScript', 'Django', 'Docker', 'AWS', 'GraphQL'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full text-xs font-bold text-zinc-600 dark:text-zinc-300 border border-black/5 dark:border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-1 glass rounded-[2.5rem] p-8 flex flex-col justify-between group border-emerald-500/20 shadow-2xl shadow-black/5"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                <Lock className="text-emerald-600 dark:text-emerald-400" size={24} />
              </div>
              <div className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-500 tracking-widest bg-emerald-500/10 px-2 py-1 rounded">Advanced</div>
            </div>
            <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">Security Audit</h3>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-1 glass rounded-[2.5rem] p-8 flex flex-col justify-between group border-pink-500/20 shadow-2xl shadow-black/5"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center">
                <Palette className="text-pink-600 dark:text-pink-400" size={24} />
              </div>
              <div className="text-[10px] font-black uppercase text-pink-600 dark:text-pink-500 tracking-widest bg-pink-500/10 px-2 py-1 rounded">Expert</div>
            </div>
            <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">Modern Design</h3>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-2 glass rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative border-indigo-500/20 shadow-2xl shadow-black/5"
          >
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Globe size={150} className="text-zinc-900 dark:text-white" />
            </div>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">Global Infrastructure</h3>
            <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-6">
              Deploying secure, high-availability clusters across multiple regions.
            </p>
            <div className="space-y-3">
              {['VPC', 'CDN', 'Edge Computing'].map(item => (
                <div key={item} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 text-xs font-bold">
                  <CheckCircle2 size={14} className="text-indigo-600 dark:text-indigo-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 md:row-span-2 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[2.5rem] p-10 flex flex-col justify-center relative group overflow-hidden shadow-2xl shadow-indigo-600/20"
          >
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <h3 className="text-4xl font-black text-white tracking-tighter mb-4 relative z-10">95% Customer <br />Satisfaction.</h3>
            <p className="text-indigo-100/70 font-medium max-w-sm relative z-10">
              Delivering high-quality code and exceptional user experiences is my primary focus.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
    </section>
  );
};

export default Skills;
