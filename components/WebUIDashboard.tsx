'use client';

import { Monitor, Activity, Layout, Code, Box, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const screenshots = [
  {
    src: '/screenshots/screenshot-dashboard-1.webp',
    alt: 'Dashboard - Tool Execution Monitoring',
  },
  {
    src: '/screenshots/screenshot-sessions-2.webp',
    alt: 'Sessions - Container Management',
  },
  {
    src: '/screenshots/screenshot-builder3.webp',
    alt: 'Builder - Agent Development',
  },
  {
    src: '/screenshots/screenshot-data-agent-4.webp',
    alt: 'Data Agent - Analysis Capabilities',
  },
];

export default function WebUIDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 5000); // Change screenshot every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-950/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Prototype Agents Faster</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build, test, and iterate on AI agents with full visibility into every action
          </p>
        </div>

        {/* Screenshot Container - Slideshow */}
        <div className="max-w-2xl mx-auto mb-16 border border-gray-800 rounded-lg overflow-hidden bg-black">
          {/* Browser chrome */}
          <div className="bg-zinc-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 ml-4 text-xs text-gray-600 bg-zinc-800 rounded px-3 py-1">
              localhost:3000
            </div>
          </div>

          {/* Content area - Screenshot Slideshow */}
          <div style={{ aspectRatio: '1186 / 962' }} className="bg-black p-0 relative">
            {screenshots.map((screenshot, index) => (
              <Image
                key={index}
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className={`object-cover transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Slideshow Indicators */}
          <div className="bg-zinc-900 px-4 py-3 flex items-center justify-center space-x-2 border-t border-gray-800">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="border border-gray-800 rounded-xl p-6 bg-transparent">
            <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center mb-4">
              <Layout className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Integrated Web UI</h3>
            <p className="text-gray-400 text-sm">Next.js 15 dashboard with real-time tool execution monitoring, task tracking, and resource usage visualization.</p>
          </div>

          {/* Feature 2 */}
          <div className="border border-gray-800 rounded-xl p-6 bg-transparent">
            <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Custom Agent Configs</h3>
            <p className="text-gray-400 text-sm">4 preset configs (code-assistant, research-agent, data-analysis, fullstack-team) plus custom inline configs.</p>
          </div>

          {/* Feature 3 */}
          <div className="border border-gray-800 rounded-xl p-6 bg-transparent">
            <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center mb-4">
              <Box className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Docker Isolation</h3>
            <p className="text-gray-400 text-sm">Each session runs in isolated containers with full resource limits and security hardening.</p>
          </div>

          {/* Feature 4 */}
          <div className="border border-gray-800 rounded-xl p-6 bg-transparent">
            <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Tool Execution Streaming</h3>
            <p className="text-gray-400 text-sm">Watch Bash commands, file operations, and web requests execute in real-time via SSE</p>
          </div>

          {/* Feature 5 */}
          <div className="border border-gray-800 rounded-xl p-6 bg-transparent">
            <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Task Tracking</h3>
            <p className="text-gray-400 text-sm">TodoWrite integration with live status updates - track progress visually</p>
          </div>

          {/* Feature 6 */}
          <div className="border border-gray-800 rounded-xl p-6 bg-transparent">
            <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Multi-Agent Orchestration</h3>
            <p className="text-gray-400 text-sm">Fullstack-team preset with 3 specialized sub-agents (frontend, backend, devops) working together.</p>
          </div>
        </div>

        {/* Technology Stack */}
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
