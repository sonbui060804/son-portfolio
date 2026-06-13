"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      title: "TOEIC 550",
      issuer: "Educational Testing Service (ETS)",
      date: "Recent",
    },
    {
      title: "JLPT N4",
      issuer: "Japan Foundation",
      date: "Recent",
    },
    // We can add more certificates related to Data Analytics / Business Analysis here in the future
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
          <h2 className="text-3xl font-bold mb-4">Certificates & Languages</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
