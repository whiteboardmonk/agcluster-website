'use client';

import { Monitor, Activity, BarChart3, Users } from 'lucide-react';

export default function WebUIDashboard() {
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
            See every tool execution, task, and resource metric in real-time
          </p>
        </div>

        {/* Screenshot Placeholder */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-effect rounded-xl overflow-hidden border border-primary-500/20">
            {/* Browser Frame */}
            <div className="bg-gradient-to-b from-primary-950/50 to-black">
              {/* Browser chrome */}
              <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 ml-4 text-xs text-gray-500 bg-gray-800/50 rounded px-3 py-1">
                  localhost:3000
                </div>
              </div>

              {/* Content area - Dashboard Screenshot */}
              <div style={{ aspectRatio: '2590 / 1916' }} className="bg-gradient-to-br from-primary-950 via-purple-950 to-black p-0">
                <img
                  src="/screenshots/dashboard.webp"
                  alt="Web UI Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="glass-effect rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Tool Execution Streaming</h3>
            <p className="text-gray-400 text-sm">Watch Bash commands, file operations, and web requests execute in real-time via SSE</p>
          </div>

          {/* Feature 2 */}
          <div className="glass-effect rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Resource Monitoring</h3>
            <p className="text-gray-400 text-sm">Live CPU, memory, and disk metrics per container with usage graphs</p>
          </div>

          {/* Feature 3 */}
          <div className="glass-effect rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Task Tracking</h3>
            <p className="text-gray-400 text-sm">TodoWrite integration with live status updates - track progress visually</p>
          </div>

          {/* Feature 4 */}
          <div className="glass-effect rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Session Management</h3>
            <p className="text-gray-400 text-sm">View active containers, manage persistent sessions, trigger cleanup</p>
          </div>
        </div>

        {/* Differentiator */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-lg p-8 max-w-2xl mx-auto border border-primary-500/30">
            <p className="text-gray-300 text-lg">
              <span className="text-primary-300 font-semibold">Most Claude SDK tools stop at the API.</span>
              <br />
              <span className="mt-2 block">AgCluster includes the dashboard.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
