import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye } from 'lucide-react';
import { Article } from '../types/article';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Link 
      to={`/article/${article.id}`} 
      className="block group"
    >
      <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          {article.subcategory && (
            <span className="absolute top-2 left-2 px-2 py-1 text-xs font-medium bg-black/50 text-white rounded">
              {article.subcategory}
            </span>
          )}
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2 py-1 text-xs font-semibold bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
            {article.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{article.description}</p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-6 w-6 rounded-full"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">{article.author.name}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded hover:bg-red-100 dark:hover:bg-red-900 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}