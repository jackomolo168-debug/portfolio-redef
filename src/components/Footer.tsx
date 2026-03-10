const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-800 rounded flex items-center justify-center shadow-lg shadow-black/10">
              <span className="text-white font-bold text-sm">JO</span>
            </div>
            <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">© 2026 Personal Portfolio. All rights reserved.</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 hover:text-indigo-600 dark:text-zinc-500 dark:hover:text-white text-sm font-bold transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-500 dark:hover:text-white text-sm font-bold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
