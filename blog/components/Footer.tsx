import React from 'react';
import { ICONS } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-800 mt-20">
            <div className="container mx-auto px-4 lg:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand and social */}
                    <div>
                        <div className="text-2xl font-bold text-white tracking-wider mb-4">
                            asa<span className="text-emerald-400">blog</span>
                        </div>
                        <p className="text-neutral-400 text-sm mb-4">Unpacking the future of technology and business.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-neutral-400 hover:text-emerald-400">{ICONS.twitter}</a>
                            <a href="#" className="text-neutral-400 hover:text-emerald-400">{ICONS.linkedin}</a>
                            <a href="#" className="text-neutral-400 hover:text-emerald-400">{ICONS.github}</a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold text-white uppercase tracking-wider mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-neutral-400 hover:text-white">Technology</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white">Business</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white">Startups</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white">AI</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-neutral-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white">Contact</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-neutral-500 text-sm">
                    &copy; {new Date().getFullYear()} asablog. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
