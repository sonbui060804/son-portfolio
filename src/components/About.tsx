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
              I am an IT student with a strong entrepreneurial mindset, deeply passionate about building products that solve real-world problems. My orientation lies at the intersection of Business Analysis and Data Analytics, where I bridge the gap between user needs and technical execution.
            </p>
            <p>
              I am a proactive learner and an adaptable team player. In my startup project, I have successfully worn multiple hats—acting as both a Business Analyst (designing processes, gathering requirements) and a Developer (writing code to bring ideas to life).
            </p>
            <p>
              Whether it's creating BPMN diagrams, building analytical dashboards, or coding software features, I always focus on delivering maximum value and an exceptional user experience.
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
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Personality</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Proactive, adaptable, and highly motivated problem solver with a "can-do" startup spirit.
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
