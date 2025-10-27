'use client';

import { ArrowRight, Layers, Container, Zap } from 'lucide-react';

export default function Architecture() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-950/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Two-Layer Architecture</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Infrastructure layer + Management layer in a single platform
          </p>
        </div>

        {/* Flow diagram */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Layers className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 glass-effect rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Your Application</h3>
              <p className="text-gray-400 text-sm">Deploy agents with AgCluster Container</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <ArrowRight className="w-6 h-6 text-primary-400 mx-auto transform rotate-90" />
          </div>

          {/* Step 2 */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Container className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 glass-effect rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Infrastructure Layer (API)</h3>
              <p className="text-gray-400 text-sm">FastAPI server manages container lifecycle, Claude SDK sessions, message translation</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <ArrowRight className="w-6 h-6 text-primary-400 mx-auto transform rotate-90" />
          </div>

          {/* Step 3 */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 glass-effect rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Agent Containers</h3>
              <p className="text-gray-400 text-sm">Isolated Docker containers running Claude Agent SDK with full tool access</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <ArrowRight className="w-6 h-6 text-primary-400 mx-auto transform rotate-90" />
          </div>

          {/* Step 4 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Layers className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 glass-effect rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Management Layer (Web UI)</h3>
              <p className="text-gray-400 text-sm">Real-time monitoring, task tracking, resource usage, session control</p>
            </div>
          </div>
        </div>

        {/* Key points */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">&lt;3s</div>
            <p className="text-gray-400 text-sm">Container startup time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <p className="text-gray-400 text-sm">Session isolation</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">30min</div>
            <p className="text-gray-400 text-sm">Auto cleanup timeout</p>
          </div>
        </div>
      </div>
    </section>
  );
}
