import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

export default function CategoryNav() {
  return (
    <nav className="border-t border-red-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 h-12 overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 whitespace-nowrap transition-all duration-300 hover:scale-105"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}