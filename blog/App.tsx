// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'; // Vamos criar este componente
import {PostPage} from './pages/posts/PostPage'; // O componente que você já importou

const App: React.FC = () => {
  return (
    <Router>
      <div className=" text-neutral-200 font-sans" style={{ backgroundColor: '#1e2021' }}>
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<HomePage />} />
          {/* Rota para a página específica do post */}
          <Route path="/posts/:postId" element={<PostPage />} />
          {/* Você pode adicionar outras rotas aqui */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;