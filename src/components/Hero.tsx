"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Database, TrendingUp } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              Available for work
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Hi, I&apos;m <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-emerald-500">Bùi Văn Sơn</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-4 text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-8"
          >
            <span className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              Business Analyst
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="flex items-center gap-2">
              <Database className="w-6 h-6 text-emerald-500" />
              Data Analyst
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
          >
            <p className="mb-4 font-semibold text-slate-800 dark:text-slate-200">
              Business Analyst & Data Analyst
            </p>
            <p className="mb-6">
              Experienced in requirements gathering, process modeling, SQL analytics, dashboard development, and AI-powered product analysis.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Key Skills:</span>
              {[
                "Business Analysis",
                "SQL",
                "Power BI",
                "Python",
                "BPMN",
                "UML",
                "Product Discovery"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/CV_Bui_Van_Son.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
