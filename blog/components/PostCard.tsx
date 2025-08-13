import React from 'react';
import type { Post, Category } from '../types';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: Post;
}

const categoryColors: { [key in Category]: string } = {
  Technology: 'bg-teal-500/10 text-teal-400',
  Business: 'bg-emerald-500/10 text-emerald-400',
  AI: 'bg-green-500/10 text-green-400',
  Startups: 'bg-lime-500/10 text-lime-400',
};

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex flex-col group">
      <div className="overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
            <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${categoryColors[post.category]}`}>
                {post.category}
            </span>
            <span className="text-neutral-400 text-xs">{post.readingTime} min read</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 flex-grow">
          <Link 
            to={post.linkPost} 
            className="hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
          >
            {post.title}
          </Link>
        </h3>
        <p className="text-neutral-400 text-sm mb-4">
            {post.excerpt}
        </p>
        <div className="flex items-center mt-auto pt-4 border-t border-zinc-800">
            <img src={post.author.avatarUrl} alt={post.author.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
                <p className="font-semibold text-sm text-white">{post.author.name}</p>
                <p className="text-neutral-500 text-xs">{post.date}</p>
            </div>
        </div>
      </div>
    </div>
  );
};