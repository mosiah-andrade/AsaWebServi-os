
export type Category = 'Technology' | 'Business' | 'AI' | 'Startups';

export interface Author {
    name: string;
    avatarUrl: string;
}

export interface Post {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: Category;
    author: Author;
    date: string;
    readingTime: number; 
    linkPost?: string; // Optional property for the post link
}

export type View = 'dashboard' | 'new-post' | 'analytics' | 'settings';

export interface PostIdea {
  title: string;
  summary: string;
}
