"use client";

import { motion } from "framer-motion";
import { Award, Languages } from "lucide-react";

export function Certificates() {
  const languages = [
    {
      language: "English",
      level: "TOEIC 550",
    },
    {
      language: "Japanese",
      level: "JLPT N4",
    },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Languages & Certificates</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Languages className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.language}</span>
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center min-h-[250px]"
          >
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Certificates</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Data Analytics and Business Analysis certifications will be updated here soon.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
