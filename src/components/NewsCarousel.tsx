import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Article } from '../types/article';

interface NewsCarouselProps {
  articles: Article[];
}

export default function NewsCarousel({ articles }: NewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const recentArticles = articles.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recentArticles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [recentArticles.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + recentArticles.length) % recentArticles.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % recentArticles.length);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex h-full">
          {recentArticles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="relative h-full min-w-full"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6 space-y-3">
                  <span className="px-3 py-1 text-sm font-semibold bg-red-600 text-white rounded-full">
                    {article.category}
                  </span>
                  <h2 className="text-4xl font-bold text-white">{article.title}</h2>
                  <p className="text-gray-200 line-clamp-2">{article.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {recentArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}