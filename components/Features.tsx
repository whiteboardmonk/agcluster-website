'use client';

import { Box, Code, Zap, Users, Layout, Activity } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: 'Integrated Web UI',
    description: 'Next.js 15 dashboard with real-time tool execution monitoring, task tracking, and resource usage visualization.',
  },
  {
    icon: Code,
    title: 'Custom Agent Configs',
    description: '4 preset configs (code-assistant, research-agent, data-analysis, fullstack-team) plus custom inline configs.',
  },
  {
    icon: Box,
    title: 'Docker Isolation',
    description: 'Each session runs in isolated containers with full resource limits and security hardening.',
  },
  {
    icon: Activity,
    title: 'Tool Execution Panel',
    description: 'Real-time SSE streaming of Bash, Read, Write, and all tool invocations with detailed status indicators.',
  },
  {
    icon: Zap,
    title: 'Tested & Verified',
    description: '212 tests passing with 66% coverage. Includes E2E tests with Playwright for UI verification.',
  },
  {
    icon: Users,
    title: 'Multi-Agent Orchestration',
    description: 'Fullstack-team preset with 3 specialized sub-agents (frontend, backend, devops) working together.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-950/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Developer Platform for Claude SDK</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Web UI with real-time monitoring, configurable agents, and Docker isolation - developer platform with integrated tooling
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative border border-gray-800 rounded-xl p-6 bg-transparent hover:border-gray-700 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Built with modern technologies for maximum reliability
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-300">Next.js 15</span>
            <span className="px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-300">Python 3.11+</span>
            <span className="px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-300">FastAPI</span>
            <span className="px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-300">Docker</span>
            <span className="px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-300">Claude SDK</span>
            <span className="px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-300">SSE/WebSockets</span>
            <span className="px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-300">Playwright</span>
          </div>
        </div>
      </div>
    </section>
  );
}
