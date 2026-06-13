"use client";

import { motion } from "framer-motion";
import { User, BookOpen, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <p>
              I am an IT student with a clear orientation towards Business Analysis and Data Analytics. 
              I am passionate about bridging the gap between business needs and technical solutions.
            </p>
            <p>
              My experience includes business process analysis, constructing BPMN diagrams, 
              writing Use Cases and User Stories, creating Requirement Specifications, and Data Modeling.
            </p>
            <p>
              Furthermore, I have hands-on experience with data analytics projects, utilizing SQL, Python, and Power BI 
              to extract meaningful insights and drive data-driven decision-making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <User className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Profile</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Highly motivated and analytical problem solver.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <BookOpen className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Focus</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Data modeling, Process optimization & Visualization.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 sm:col-span-2">
              <GraduationCap className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Languages</h3>
              <div className="flex gap-4 mt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  TOEIC: 550
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  JLPT: N4
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
