export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  category: string;
  subcategory?: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readTime: string;
  tags: string[];
  relatedArticles?: string[];
  views: number;
  shareCount: number;
}