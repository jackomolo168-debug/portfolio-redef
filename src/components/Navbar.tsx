import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleTheme, isDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Collaboration', href: '/#collaboration' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">JO</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Portfolio</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-500 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl glass hover:scale-110 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-indigo-600" />}
            </button>

            <Link 
              to="/hire-me"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-xl shadow-indigo-600/20 hover:scale-105 active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl glass"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-indigo-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute w-full left-0 animate-in fade-in slide-in-from-top-5 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white rounded-xl transition-all font-bold text-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-4 border-t border-zinc-200 dark:border-zinc-800 mt-4">
              <Link 
                to="/hire-me"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-black transition-all shadow-xl shadow-indigo-600/20"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
