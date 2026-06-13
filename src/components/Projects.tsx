"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, PieChart, Activity, Briefcase } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "CLEO - AI Personal Finance Assistant",
    role: "Business Analyst",
    icon: Briefcase,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    description: "A comprehensive personal finance assistant powered by AI.",
    tasks: [
      "Conducted user interviews & identified pain points",
      "Built user personas",
      "Created BPMN diagrams",
      "Designed AS-IS / TO-BE process",
      "Developed use cases",
      "Designed database model",
      "Defined functional requirements",
    ],
    link: "https://notion.so/", // Replace with actual notion link
  },
  {
    id: 2,
    title: "PUBG Player Segmentation Analytics",
    role: "Data Analyst",
    icon: Activity,
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    description: "Analyzing player psychology and performance metrics to generate meaningful gameplay insights.",
    tasks: [
      "Processed player psychology and performance metrics",
      "Segmented players into distinct profiles",
      "Created an analytical dashboard using Power BI",
    ],
  },
  {
    id: 3,
    title: "COVID-19 Data Analytics Dashboard",
    role: "Data Analyst",
    icon: Database,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    description: "Global pandemic trends analysis including infection rates and regional comparisons.",
    tasks: [
      "Analyzed global infection and mortality (CFR) trends",
      "Built interactive dashboards using Power BI",
      "Provided regional comparative analysis",
    ],
  },
  {
    id: 4,
    title: "Bakery Sales Analytics Dashboard",
    role: "Data Analyst",
    icon: PieChart,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    description: "Sales performance and trend analysis for a bakery business.",
    tasks: [
      "Cleaned and modeled sales data",
      "Developed revenue and product performance visualizations",
      "Identified key sales trends and patterns",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.bgColor}`}>
                    <project.icon className={`w-6 h-6 ${project.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {project.role}
                    </span>
                  </div>
                </div>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {project.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {project.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
