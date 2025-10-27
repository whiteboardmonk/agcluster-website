'use client';

import { ArrowRight, Github, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-400">v0.2 • Active Development</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="block mb-2">Claude Agent Infrastructure</span>
          <span className="gradient-text">Test. Deploy. Scale.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Self-hosted platform for Claude Agent SDK applications. Container isolation, real-time execution tracking, and Web UI dashboard—all running on your infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="https://github.com/whiteboardmonk/agcluster-container#quick-start"
            className="group px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold"
          >
            <Terminal className="w-5 h-5" />
            <span>Quick Start</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/whiteboardmonk/agcluster-container"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-800 text-white rounded-lg hover:border-gray-700 transition-all flex items-center justify-center space-x-2 font-semibold"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>

        {/* Code snippet */}
        <div className="max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="border border-gray-800 bg-zinc-900/50 rounded-lg p-6 text-left overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-400">bash</span>
            </div>
            <pre className="text-sm text-gray-300 font-mono">
              <code>
{`# Start AgCluster (API + Web UI)
docker compose up -d

# Open Web UI Dashboard
open http://localhost:3000

# Or use API directly
curl http://localhost:8000/api/configs/`}
              </code>
            </pre>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">212</div>
            <div className="text-sm text-gray-400">Tests Passing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">66%</div>
            <div className="text-sm text-gray-400">Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">Web UI</div>
            <div className="text-sm text-gray-400">Integrated Dashboard</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">4</div>
            <div className="text-sm text-gray-400">Agent Presets</div>
          </div>
        </div>
      </div>
    </section>
  );
}
