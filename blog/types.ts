
export type Category = 'Technology' | 'Business' | 'IA' | 'Startups';

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
    content?: string; // Optional property for the post content
}


