import React from 'react';

interface FeaturedArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export default function FeaturedArticle({ title, description, imageUrl, category, date }: FeaturedArticleProps) {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="absolute bottom-0 p-6 space-y-3">
          <span className="px-3 py-1 text-sm font-semibold bg-red-600 text-white rounded-full">
            {category}
          </span>
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <p className="text-gray-200 line-clamp-2">{description}</p>
          <p className="text-gray-300 text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
}