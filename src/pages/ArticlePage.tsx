import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Eye, Share2, Bookmark } from 'lucide-react';
import { articles } from '../data/articles';

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Article not found</h1>
        <Link to="/" className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-start mb-6">
        <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Share2 className="h-5 w-5" />
            <span>{article.shareCount}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>
      </div>

      <header className="space-y-4 mb-8">
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
            {article.category}
          </span>
          {article.subcategory && (
            <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              {article.subcategory}
            </span>
          )}
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{article.title}</h1>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{article.author.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{article.author.role}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>{article.views} views</span>
            </div>
          </div>
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
          {article.description}
        </p>
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-800 dark:text-gray-200">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Link
              key={tag}
              to={`/tag/${tag}`}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}