'use client';

import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 border border-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">Ag</span>
              </div>
              <span className="text-xl font-bold text-white">AgCluster</span>
            </div>
            <p className="text-gray-400 text-sm">
              Self-hosted platform for Claude Agent SDK
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/whiteboardmonk/agcluster-container?tab=readme-ov-file#-quick-start" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Quick Start
                </a>
              </li>
              <li>
                <a href="https://github.com/whiteboardmonk/agcluster-container#api-reference" className="text-gray-400 hover:text-white text-sm transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="https://github.com/whiteboardmonk/agcluster-container#agent-configurations" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Agent Configs
                </a>
              </li>
              <li>
                <a href="https://github.com/whiteboardmonk/agcluster-container#architecture" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/whiteboardmonk/agcluster-container" className="text-gray-400 hover:text-white text-sm transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/whiteboardmonk/agcluster-container/issues" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Issues
                </a>
              </li>
              <li>
                <a href="https://github.com/whiteboardmonk/agcluster-container/discussions" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Discussions
                </a>
              </li>
              <li>
                <a href="https://docs.claude.com/en/api/agent-sdk/overview" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Claude SDK Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/anthropics/claude-agent-sdk-python" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Claude Agent SDK
                </a>
              </li>
              <li>
                <a href="https://github.com/whiteboardmonk/agcluster-container/blob/main/CONTRIBUTING.md" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contributing
                </a>
              </li>
              <li>
                <a href="https://github.com/whiteboardmonk/agcluster-container/blob/main/LICENSE" className="text-gray-400 hover:text-white text-sm transition-colors">
                  License (MIT)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 AgCluster. Built with ❤️ by Claude Code
          </p>

          {/* Social links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/whiteboardmonk/agcluster-container"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center hover:border-gray-700 transition-all"
            >
              <Github className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center hover:border-gray-700 transition-all"
            >
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a
              href="mailto:contact@agcluster.dev"
              className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center hover:border-gray-700 transition-all"
            >
              <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
