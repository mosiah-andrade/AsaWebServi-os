import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PostCard } from './components/PostCard';
import { Footer } from './components/Footer';
import { featuredPost, posts } from './data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import PostPage from './posts/post1';

const App: React.FC = () => {
  return (
    <div className="bg-black text-neutral-200 font-sans">
      <Header />
      <main>
        <HeroSection post={featuredPost} />

        <section className="container mx-auto px-4 lg:px-6 py-12 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;