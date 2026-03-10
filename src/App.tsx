import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import StartProject from './pages/StartProject'
import HireMe from './pages/HireMe'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    // Default to false (light) if no preference is saved
    return saved === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/hire-me" element={<HireMe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
