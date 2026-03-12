import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { name: 'Github', icon: <Github size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start">
          <div className="max-w-md">
            <span className="text-indigo-600 dark:text-indigo-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Get in touch</span>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6">Let's <span className="text-indigo-600 dark:text-indigo-400">connect.</span></h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed font-medium">
              Have a question or want to work together? Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-black uppercase tracking-widest">Email</p>
                  <p className="text-zinc-900 dark:text-white font-bold">jackomolo168@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-white group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-black uppercase tracking-widest">Location</p>
                  <p className="text-zinc-900 dark:text-white font-bold">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {socialLinks.map(social => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 dark:hover:border-zinc-500 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-2xl shadow-black/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-zinc-500 dark:text-zinc-400 text-xs font-black uppercase tracking-widest ml-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-zinc-500 dark:text-zinc-400 text-xs font-black uppercase tracking-widest ml-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-zinc-500 dark:text-zinc-400 text-xs font-black uppercase tracking-widest ml-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none font-medium"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98]">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
