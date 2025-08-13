
import { Post } from './types';

export const featuredPost: Post = {
    id: 1,
    title: "The Convergence of AI and Quantum Computing: A New Era of Innovation",
    excerpt: "Explore how the fusion of artificial intelligence and quantum computing is set to revolutionize industries, solve complex problems, and redefine the boundaries of technology as we know it.",
    imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
    category: 'Technology',
    author: { name: 'Dr. Evelyn Reed', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
    date: 'July 15, 2024',
    readingTime: 12,
    linkPost: '/posts/post1'
};

export const posts: Post[] = [
    {
        id: 2,
        title: "Decoding the Future of Decentralized Finance (DeFi)",
        excerpt: "An in-depth look at the trends shaping DeFi, from regulatory challenges to the next wave of innovative financial products.",
        imageUrl: "https://images.unsplash.com/photo-1642150133290-83f5086a402a?q=80&w=2070&auto=format&fit=crop",
        category: 'Business',
        author: { name: 'Mark Chen', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
        date: 'July 12, 2024',
        readingTime: 8,
        linkPost: '/posts/post1.tsx'
    },
    {
        id: 3,
        title: "Ethical AI: Navigating the Moral Landscape of Machine Learning",
        excerpt: "As AI becomes more integrated into our lives, understanding its ethical implications is more crucial than ever. We discuss the key challenges.",
        imageUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
        category: 'AI',
        author: { name: 'Aisha Sharma', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
        date: 'July 10, 2024',
        readingTime: 10,
    },
    {
        id: 4,
        title: "Growth Hacking for Startups: 10 Strategies for Rapid Expansion",
        excerpt: "Discover proven, low-cost strategies to acquire and retain customers, and propel your startup to the next level.",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
        category: 'Startups',
        author: { name: 'Ben Carter', avatarUrl: 'https://i.pravatar.cc/150?img=4' },
        date: 'July 8, 2024',
        readingTime: 7,
    },
    {
        id: 5,
        title: "The Rise of Sustainable Business: Profitability Meets Purpose",
        excerpt: "Learn how companies are integrating sustainability into their core strategies to drive innovation, attract talent, and create long-term value.",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        category: 'Business',
        author: { name: 'Olivia Garcia', avatarUrl: 'https://i.pravatar.cc/150?img=5' },
        date: 'July 5, 2024',
        readingTime: 9,
    },
     {
        id: 6,
        title: "Beyond the Hype: Practical Applications of Generative AI in Business",
        excerpt: "Move past the buzzwords and explore real-world use cases where generative AI is creating tangible business value today.",
        imageUrl: "https://images.unsplash.com/photo-1688645511382-71c355b0a2f3?q=80&w=1974&auto=format&fit=crop",
        category: 'AI',
        author: { name: 'Dr. Evelyn Reed', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
        date: 'July 2, 2024',
        readingTime: 11,
    },
];
