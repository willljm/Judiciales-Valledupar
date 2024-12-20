import React from 'react';
import NewsCarousel from '../components/NewsCarousel';
import ArticleCard from '../components/ArticleCard';
import AdBanner from '../components/AdBanner';
import Footer from '../components/Footer';
import { articles } from '../data/articles';

export default function HomePage() {
  const latestArticles = articles.slice(1);

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          <NewsCarousel articles={articles} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Latest News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {latestArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            </div>
            
            <div className="space-y-16">
              <AdBanner />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}