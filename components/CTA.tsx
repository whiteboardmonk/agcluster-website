'use client';

import { Github, Terminal, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-effect rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Deploy your first agent in minutes with Docker Compose
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://github.com/whiteboardmonk/agcluster-container#quick-start"
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg hover:from-primary-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold"
            >
              <Terminal className="w-5 h-5" />
              <span>Quick Start</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/whiteboardmonk/agcluster-container"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-effect text-white rounded-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2 font-semibold"
            >
              <Github className="w-5 h-5" />
              <span>Star on GitHub</span>
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Open source MIT License • Self-hosted • No cloud dependency
          </p>
        </div>
      </div>
    </section>
  );
}
