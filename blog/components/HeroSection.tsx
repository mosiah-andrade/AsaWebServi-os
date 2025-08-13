import React from 'react';
import type { Post } from '../types';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  post: Post;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ post }) => {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-emerald-400 font-semibold uppercase tracking-wider">{post.category}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={post.author.avatarUrl} alt={post.author.name} className="w-12 h-12 rounded-full mr-4 border-2 border-zinc-700"/>
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-neutral-400 text-sm">{post.date} &middot; {post.readingTime} min read</p>
              </div>
            </div>
            <Link 
            to={post.linkPost}  className="bg-neutral-100 text-black font-bold px-6 py-3 rounded-lg hover:bg-neutral-300 transition-colors duration-200 shadow-lg" onClick={() => window.location.href = post.linkPost || '#'}>
              Read Article
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
            <img src={post.imageUrl} alt={post.title} className="rounded-2xl shadow-2xl object-cover w-full h-full aspect-video lg:aspect-square transition-shadow duration-300 hover:shadow-lg hover:shadow-emerald-500/20" />
        </div>
      </div>
    </section>
  );
};