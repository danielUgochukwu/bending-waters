export interface Project {
  _id: string;
  title: string;
  category: string;
  slug: { current: string };
  mainImage: any; 
  publishedAt: string;
  body: any[];
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  thumbnail: any;
  publishedAt: string;
  category: string;
}

export interface NewsGridProps {
  searchParams?: {
    search?: string;
    category?: string;
    tag?: string;
  };
}