'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-primary-950/80 via-purple-950/80 to-primary-950/80 backdrop-blur-md border-b border-primary-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">Ag</span>
            </div>
            <span className="text-xl font-bold text-white">AgCluster</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</a>
            <a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors">Ecosystem</a>
            <a href="https://github.com/whiteboardmonk/agcluster-container" target="_blank" rel="noopener noreferrer" className="px-4 py-2 glass-effect text-white rounded-lg hover:bg-white/10 transition-all">
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-4">
            <a href="#features" className="block text-gray-400 hover:text-white">Features</a>
            <a href="#use-cases" className="block text-gray-400 hover:text-white">Use Cases</a>
            <a href="#ecosystem" className="block text-gray-400 hover:text-white">Ecosystem</a>
            <a href="https://github.com/whiteboardmonk/agcluster-container" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 glass-effect text-white rounded-lg">
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
