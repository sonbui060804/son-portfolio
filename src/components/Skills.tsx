"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skills = {
  ba: [
    "Requirement Gathering",
    "User Story",
    "Use Case Diagram",
    "BPMN",
    "UML",
    "Functional Specification",
    "Stakeholder Analysis",
  ],
  da: [
    "SQL",
    "Python",
    "Pandas",
    "Power BI",
    "Excel",
    "Data Visualization",
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Business Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                BA
              </span>
              Business Analysis
            </h3>
            <ul className="space-y-4">
              {skills.ba.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Data Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500">
                DA
              </span>
              Data Analytics
            </h3>
            <ul className="space-y-4">
              {skills.da.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
