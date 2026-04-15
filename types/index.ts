export interface Project {
  _id: string;
  title: string;
  category: string;
  slug: { current: string };
  mainImage: any; // keep flexible for Sanity image
  publishedAt: string;
  body: any[];
}
