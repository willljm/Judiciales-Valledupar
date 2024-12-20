import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../types/article';

interface SearchBarProps {
  articles: Article[];
}

export default function SearchBar({ articles }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleArticleClick = (articleId: string) => {
    setIsOpen(false);
    setSearchQuery('');
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <SearchIcon className="h-5 w-5 dark:text-gray-200" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
          <div className="flex items-center gap-2 mb-4">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none dark:text-white"
              autoFocus
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <X className="h-4 w-4 dark:text-gray-200" />
            </button>
          </div>

          {searchQuery && (
            <div className="max-h-96 overflow-y-auto">
              {filteredArticles.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                  No articles found
                </p>
              ) : (
                <div className="space-y-4">
                  {filteredArticles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => handleArticleClick(article.id)}
                      className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    >
                      <h3 className="font-medium dark:text-white">{article.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {article.description.slice(0, 100)}...
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}