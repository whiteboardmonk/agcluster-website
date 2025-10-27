'use client';

import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

const currentFeatures = [
  'Integrated Next.js 15 Web UI dashboard',
  'Real-time tool execution monitoring (SSE)',
  'Live resource tracking (CPU/memory/disk)',
  'Task tracking with TodoWrite integration',
  'Claude Agent SDK platform - not API wrapper',
  '212 tests passing with 66% coverage',
];

const inDevelopment = [
  'Container pooling & session persistence',
  'Multi-user authentication',
  'Prometheus metrics & Grafana dashboards',
  'Per-user/per-key rate limiting',
];

const roadmap = [
  { name: 'agcluster-cli', desc: 'CLI for local agent development and deployment' },
  { name: 'Advanced monitoring', desc: 'Prometheus metrics and Grafana dashboards' },
  { name: 'agcluster-registry', desc: 'MCP server marketplace for custom tools' },
  { name: 'agcluster-orchestrator', desc: 'Multi-agent coordination and workflow engine' },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AgCluster Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building custom cloud infrastructure for Claude Agent SDK
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Current (v0.2) */}
          <div className="glass-effect rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Current (v0.2)</h3>
                <p className="text-sm text-gray-400">v1.0 Released</p>
              </div>
            </div>
            <div className="space-y-3">
              {currentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* In Development */}
          <div className="glass-effect rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">In Development</h3>
                <p className="text-sm text-gray-400">Coming Soon</p>
              </div>
            </div>
            <div className="space-y-3">
              {inDevelopment.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="glass-effect rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Roadmap</h3>
              <p className="text-sm text-gray-400">Building the Ecosystem</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roadmap.map((item, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-colors">
                <h4 className="text-lg font-semibold text-white mb-2">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            <span className="gradient-text font-semibold">The Vision:</span> Custom cloud infrastructure for deploying, managing, and scaling Claude Agent SDK applications.
          </p>
        </div>
      </div>
    </section>
  );
}
