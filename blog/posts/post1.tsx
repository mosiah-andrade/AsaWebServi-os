import React from 'react';
import type { Post } from '../types';

interface PostPageProps {
  post: Post;
  onBack: () => void;
}

export const PostPage: React.FC<PostPageProps> = ({ post, onBack }) => {
  return (
    <article className="container mx-auto px-4 lg:px-6 py-12 md:py-20 max-w-4xl">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </button>
      </div>

      <header className="mb-8">
        <span className="text-emerald-400 font-semibold uppercase tracking-wider">{post.category}</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-neutral-400">
          <img src={post.author.avatarUrl} alt={post.author.name} className="w-12 h-12 rounded-full mr-4 border-2 border-zinc-700" />
          <div>
            <p className="font-semibold text-white">{post.author.name}</p>
            <p className="text-sm">{post.date} &middot; {post.readingTime} min read</p>
          </div>
        </div>
      </header>

      <div className="mb-8">
        <img src={post.imageUrl} alt={post.title} className="rounded-2xl shadow-2xl object-cover w-full aspect-video" />
      </div>

      <div className="prose prose-lg max-w-none text-neutral-300 prose-headings:text-white prose-strong:text-white prose-a:text-emerald-400 hover:prose-a:text-emerald-300">
         {post.content.trim().split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
            </p>
         ))}
      </div>
    </article>
  );
};
