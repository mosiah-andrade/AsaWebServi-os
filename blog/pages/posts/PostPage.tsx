// src/pages/posts/PostPage.tsx

import React from 'react';
import type { Post } from '../../types';
import { useParams, useNavigate } from 'react-router-dom';
import { posts, featuredPost } from '../../data';
import { Header } from '../../components/Header'; // Importe os componentes de layout
import { Footer } from '../../components/Footer';

// A interface PostPageProps não é mais necessária, pois o componente não recebe props.

export const PostPage: React.FC = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  // Combine featuredPost e posts para buscar em todos os seus dados
  const allPosts = [featuredPost, ...posts];

  // Encontre o post com base no ID da URL
  const foundPost = allPosts.find(p => p.id === parseInt(postId));

  // Se o post não for encontrado, mostre uma mensagem de erro
  if (!foundPost) {
    return (
      <div className="text-neutral-200 font-sans h-screen flex flex-col justify-between" style={{ backgroundColor: '#1e2021' }}>
        <Header />
        <main className="flex-grow flex items-center justify-center" style={{ backgroundColor: '#1e2021' }}>
          <div className="text-center text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Post não encontrado!</h1>
            <button
              onClick={() => navigate('/')}
              className="mt-4 text-emerald-400 hover:underline"
            >
              Voltar para a página inicial
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Se o post for encontrado, renderize o conteúdo
  return (
    <div className="bg-black text-neutral-200 font-sans" style={{ backgroundColor: '#1e2021' }}>
      <Header />
      <main>
        <article className="container mx-auto px-4 lg:px-6 py-12 md:py-20 max-w-4xl">
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)} // Retorna para a página anterior
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar
            </button>
          </div>

          <header className="mb-8">
            <span className="text-emerald-400 font-semibold uppercase tracking-wider">{foundPost.category}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              {foundPost.title}
            </h1>
            <div className="flex items-center text-neutral-400">
              <img src={foundPost.author.avatarUrl} alt={foundPost.author.name} className="w-12 h-12 rounded-full mr-4 border-2 border-zinc-700" />
              <div>
                <p className="font-semibold text-white">{foundPost.author.name}</p>
                <p className="text-sm">{foundPost.date} &middot; {foundPost.readingTime} min read</p>
              </div>
            </div>
          </header>

          <div className="mb-8">
            <img src={foundPost.imageUrl} alt={foundPost.title} className="rounded-2xl shadow-2xl object-cover w-full aspect-video" />
          </div>

          <div className="prose prose-lg max-w-none text-neutral-300 prose-headings:text-white prose-strong:text-white prose-a:text-emerald-400 hover:prose-a:text-emerald-300" dangerouslySetInnerHTML={{ __html: foundPost.content }} />
        </article>
      </main>
      <Footer />
    </div>
  );
};