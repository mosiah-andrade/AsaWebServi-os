import React from 'react';

export const Header: React.FC = () => {
  const navLinks = ['Technology', 'Business', 'Startups', 'AI', 'About'];
  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-white tracking-wider">
            Asa<span className="text-emerald-400">blog</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-neutral-300 hover:text-emerald-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
          {/* <div className="flex items-center">
            <button className="bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-emerald-500 transition-colors duration-200">
              Subscribe
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
};