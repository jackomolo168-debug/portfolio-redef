import { motion } from 'framer-motion';
import { ChevronLeft, Mail, MapPin, Calendar, Clock, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const HireMe = () => {
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
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter">
                Hire <span className="text-indigo-600">Me.</span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-xl mb-12 font-medium leading-relaxed">
                I'm currently available for full-time roles, freelance opportunities, or consulting. Let's discuss how I can contribute to your team's success.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 dark:text-white">Location</h4>
                    <p className="text-zinc-500">Remote / Worldwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 dark:text-white">Availability</h4>
                    <p className="text-zinc-500">Immediate start available</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-600">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 dark:text-white">Role Types</h4>
                    <p className="text-zinc-500">Senior Fullstack, Tech Lead, Architect</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-80 glass p-8 rounded-[2.5rem] border-white/10">
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-indigo-600/20 mx-auto">
                <span className="text-white font-black text-3xl">JO</span>
              </div>
              <h3 className="text-center font-black text-xl mb-2 text-zinc-900 dark:text-white">Jack Omolo</h3>
              <p className="text-center text-zinc-500 text-sm mb-8">Fullstack Engineer & UI Designer</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Experience</span>
                  <span className="text-zinc-900 dark:text-white font-bold">8+ Years</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Projects</span>
                  <span className="text-zinc-900 dark:text-white font-bold">150+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Response time</span>
                  <span className="text-zinc-900 dark:text-white font-bold">~2 Hours</span>
                </div>
              </div>

              <a 
                href="mailto:contact@example.com"
                className="w-full bg-zinc-950 dark:bg-white text-white dark:text-black py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight flex items-center gap-3">
              <Clock className="text-indigo-600" />
              Professional Journey
            </h3>
            <div className="space-y-12 border-l-2 border-zinc-200 dark:border-zinc-800 ml-6 pl-12 relative">
              {[
                { year: '2022 - Present', role: 'Senior Software Engineer', company: 'Tech Innovators' },
                { year: '2019 - 2022', role: 'Fullstack Developer', company: 'Creative Solutions' },
                { year: '2017 - 2019', role: 'Junior Developer', company: 'StartUp Hub' }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[58px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-zinc-50 dark:ring-zinc-950" />
                  <span className="text-indigo-600 text-xs font-black uppercase tracking-widest">{item.year}</span>
                  <h4 className="text-xl font-black text-zinc-900 dark:text-white mt-1">{item.role}</h4>
                  <p className="text-zinc-500 font-medium">{item.company}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMe;
