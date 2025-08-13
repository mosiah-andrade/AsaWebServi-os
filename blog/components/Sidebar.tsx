import React from 'react';
import { ICONS } from '../constants';
import type { View } from '../types';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

interface NavItemProps {
  view: View;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: (view: View) => void;
}

const NavItem: React.FC<NavItemProps> = ({ view, label, icon, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(view)}
      className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-emerald-600 text-white'
          : 'text-neutral-300 hover:bg-zinc-700 hover:text-white'
      }`}
    >
      {icon}
      <span className="ml-4">{label}</span>
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const navItems: { view: View; label: string; icon: React.ReactNode }[] = [
    { view: 'dashboard', label: 'Dashboard', icon: ICONS.dashboard },
    { view: 'new-post', label: 'New Post', icon: ICONS['new-post'] },
    { view: 'analytics', label: 'Analytics', icon: ICONS.analytics },
  ];

  return (
    <div className="flex flex-col w-64 bg-zinc-900 border-r border-zinc-800">
      <div className="flex items-center justify-center h-20 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-white tracking-wider">asa<span className="text-emerald-400">blog</span></h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.view}
            view={item.view}
            label={item.label}
            icon={item.icon}
            isActive={currentView === item.view}
            onClick={onNavigate}
          />
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-zinc-800">
        <NavItem
            view='settings'
            label='Settings'
            icon={ICONS.settings}
            isActive={currentView === 'settings'}
            onClick={() => {}}
        />
      </div>
    </div>
  );
};