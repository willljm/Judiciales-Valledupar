import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, Sun, Moon} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import CategoryNav from './CategoryNav';
import { articles } from '../data/articles';
import Logo from '../public/cropped-cropped-cropped-cropped-logo-judiciales-valledupar-e1678684785552-removebg-preview.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-md hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 lg:hidden"
            >
              <Menu className="h-6 w-6 dark:text-white" />
            </button>
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <SearchBar articles={articles} />
            <button className="p-2 rounded-md hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300">
              <Bell className="h-5 w-5 dark:text-white hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 hover:scale-110 transition-transform" />
              ) : (
                <Sun className="h-5 w-5 text-white hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>

      <CategoryNav />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}