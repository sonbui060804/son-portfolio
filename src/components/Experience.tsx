"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 sm:pl-0"
          >
            {/* Timeline line */}
            <div className="hidden sm:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
            <div className="sm:hidden absolute left-[15px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

            <div className="relative mb-12 sm:w-1/2 sm:ml-auto sm:pl-8">
              {/* Timeline dot */}
              <div className="absolute left-[-29px] sm:left-[-8px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-50 dark:border-slate-900 -translate-x-1/2" />
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>2025 - Present</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-blue-500" />
                  Business Analyst Intern
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                      Projects
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      <li>CLEO AI Financial Assistant</li>
                      <li>AI Invoice Processing System</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                      Data Analytics Projects
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      <li>COVID-19 Analytics</li>
                      <li>PUBG Player Analytics</li>
                      <li>Bakery Sales Dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
