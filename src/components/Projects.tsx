"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, PieChart, Activity, Briefcase } from "lucide-react";
import Link from "next/link";

const baProjects = [
  {
    id: 1,
    title: "CLEO - AI Financial Assistant",
    role: "Business Analyst",
    icon: Briefcase,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    tools: ["Notion", "Draw.io", "Figma"],
    artifacts: [
      "Problem Statement",
      "User Interview",
      "Insight",
      "Persona",
      "Use Case",
      "BPMN",
      "Solution",
      "ERD",
      "Functional Requirements",
      "Product Backlog",
      "Project Contribution",
      "Lessons Learned",
      "Executive Summary",
    ],
    link: "https://app.notion.com/p/CLEO-Tr-l-T-i-ch-nh-C-nh-n-AI-m-h-n-37ae861cc4b780a99998d686cc0b0158?source=copy_link",
  },
  {
    id: 2,
    title: "AI Invoice Processing",
    role: "BA & Developer (Startup)",
    icon: Briefcase,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    tools: ["Notion", "Draw.io", "React Native", "FastAPI"],
    artifacts: [
      "Process Modeling",
      "Requirement Specification",
      "Use Case",
      "API Integration",
      "Fullstack Dev"
    ],
    link: "https://github.com/sonbui060804/exe2-",
  },
];

const daProjects = [
  {
    id: 3,
    title: "Bakery Sales Dashboard",
    role: "Data Analyst",
    icon: PieChart,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    tools: ["Power BI", "SQL"],
    description: "Sales performance and trend analysis for a bakery business. Cleaned and modeled sales data, developed revenue and product performance visualizations, and identified key sales trends and patterns.",
  },
  {
    id: 4,
    title: "PUBG Analytics",
    role: "Data Analyst",
    icon: Activity,
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    tools: ["Python", "Power BI"],
    description: "Analyzing player psychology and performance metrics to generate meaningful gameplay insights. Segmented players into distinct profiles and created an analytical dashboard.",
  },
  {
    id: 5,
    title: "COVID-19 Analytics",
    role: "Data Analyst",
    icon: Database,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    tools: ["Power BI", "SQL"],
    description: "Global pandemic trends analysis including infection rates and regional comparisons. Analyzed global infection and mortality (CFR) trends and built interactive dashboards.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Business Analysis Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">
            Business Analysis Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {baProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.bgColor}`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
                        {project.title}
                      </h4>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {project.role}
                      </span>
                    </div>
                  </div>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm"
                    >
                      <span className="hidden sm:inline">View Project</span>
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mr-2">Tools:</span>
                  {project.tools.map((tool, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mt-auto">
                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                    Artifacts
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.artifacts.map((artifact, i) => (
                      <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                        {artifact}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Analytics Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200 border-l-4 border-emerald-500 pl-4">
            Data Analytics Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {daProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${project.bgColor}`}>
                    <project.icon className={`w-5 h-5 ${project.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h4>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-auto leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
