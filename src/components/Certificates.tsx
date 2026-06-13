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

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Certificates</h3>
            </div>
            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
              {[
                {
                  title: "Big Data Specialization",
                  issuer: "UC San Diego",
                  date: "Apr 2026",
                },
                {
                  title: "Data Visualization",
                  issuer: "Univ. of Illinois Urbana-Champaign",
                  date: "May 2026",
                },
                {
                  title: "Foundations of Business Intelligence",
                  issuer: "Google",
                  date: "Apr 2026",
                },
                {
                  title: "Software Development Lifecycle Specialization",
                  issuer: "Univ. of Minnesota",
                  date: "Jan 2025",
                },
                {
                  title: "Architecting Solutions on AWS",
                  issuer: "Amazon Web Services",
                  date: "Jan 2025",
                },
                {
                  title: "Information Systems Specialization",
                  issuer: "Univ. of Minnesota",
                  date: "Sep 2024",
                },
              ].map((cert, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 gap-2">
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">{cert.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full w-fit">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
