import React from 'react';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  color: string;
}

export default function NewsCard({ title, description, imageUrl, category, date, color }: NewsCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
          {category}  {color}
        </span>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{description}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </article>
  );
}