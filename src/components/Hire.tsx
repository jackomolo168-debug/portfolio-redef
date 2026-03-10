import { Mail, Zap, Coffee, Globe } from 'lucide-react';

const Hire = () => {
  return (
    <section id="collaboration" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-900 dark:to-indigo-950 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16">
              <span className="text-indigo-600 dark:text-indigo-400 font-black mb-6 block uppercase tracking-widest text-xs">Work Together</span>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8 leading-tight tracking-tighter">Available for <br /><span className="text-indigo-600 dark:text-indigo-400">Collaboration.</span></h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 font-medium">
                I'm currently looking for new opportunities and interesting projects to collaborate on. Whether you're a startup or an established company, let's build something amazing together.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-full flex items-center justify-center">
                    <Zap className="text-indigo-600 dark:text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 dark:text-white">Fast Turnaround</h4>
                    <p className="text-zinc-500 text-sm font-medium">Efficient development without compromising quality.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <Coffee className="text-emerald-600 dark:text-emerald-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 dark:text-white">Agile Process</h4>
                    <p className="text-zinc-500 text-sm font-medium">Transparency and continuous feedback at every stage.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-pink-500/10 rounded-full flex items-center justify-center">
                    <Globe className="text-pink-600 dark:text-pink-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 dark:text-white">Remote Ready</h4>
                    <p className="text-zinc-500 text-sm font-medium">Experienced in working with teams across various timezones.</p>
                  </div>
                </div>
              </div>

              <a 
                href="mailto:contact@example.com" 
                className="inline-flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/10 group"
              >
                Send a Message
                <Mail size={20} className="group-hover:translate-y-[-2px] transition-transform" />
              </a>
            </div>

            <div className="relative h-80 lg:h-auto bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center">
              <div className="absolute inset-0 bg-indigo-600/20 dark:bg-indigo-950/40 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/5 dark:border-white/10 p-8 rounded-3xl text-center max-w-sm shadow-2xl">
                  <div className="flex justify-center -space-x-4 mb-6">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-black bg-zinc-200 dark:bg-zinc-800" />
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-white dark:border-black bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                      +12
                    </div>
                  </div>
                  <h3 className="text-zinc-900 dark:text-white font-black text-lg mb-2 underline underline-offset-4 decoration-indigo-500">Global Network</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-relaxed">Joined by dozens of developers and designers worldwide on complex open-source projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
