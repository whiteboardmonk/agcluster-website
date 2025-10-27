'use client';

import { Code2, Search, BarChart3, Users, Shield, FileText } from 'lucide-react';

const useCases = [
  {
    icon: Code2,
    title: 'Build Development Agents',
    description: 'Agents that execute code, modify files, run tests, and deploy. Full CLI access with visibility into every command.',
    example: 'Code execution + file operations',
  },
  {
    icon: Search,
    title: 'Research & Analysis',
    description: 'Agents that search the web, fetch documents, analyze data with pandas/numpy, and generate reports with citations.',
    example: 'WebSearch + data analysis + synthesis',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis Agents',
    description: 'Jupyter-capable agents for statistical analysis, pandas workflows, and data visualization with NotebookEdit.',
    example: 'CSV → pandas → matplotlib → insights',
  },
  {
    icon: Users,
    title: 'Multi-Agent Teams',
    description: 'Fullstack-team preset coordinates frontend, backend, and DevOps specialists for complex development tasks.',
    example: 'React + FastAPI + Docker',
  },
  {
    icon: Shield,
    title: 'Code Review Bots',
    description: 'Automated PR reviews with file access, security scanning, and style guide enforcement.',
    example: 'GitHub webhook → agent → review',
  },
  {
    icon: FileText,
    title: 'Research Assistants',
    description: 'Web-enabled agents that fetch sources, cross-reference facts, and generate cited reports.',
    example: 'WebSearch + WebFetch + synthesis',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-950/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Agent Deployment Patterns</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Monitor and manage agents that actually execute code
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group border border-gray-800 rounded-xl p-8 bg-transparent hover:border-gray-700 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl border border-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <useCase.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{useCase.description}</p>

              {/* Example tag */}
              <div className="inline-block px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50">
                <span className="text-xs text-gray-400">{useCase.example}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/whiteboardmonk/agcluster-container?tab=readme-ov-file#-use-cases"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-800 text-white rounded-lg hover:border-gray-700 transition-all"
          >
            <span>Explore More Use Cases</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
