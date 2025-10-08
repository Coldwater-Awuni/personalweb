"use client";
import { motion } from 'framer-motion';
import { skills } from '@/content/skills';
import { Code2, Hammer, Palette, ServerCog, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Software Development": Code2,
  "Digital Fabrication": Hammer,
  "Design & Multimedia": Palette,
  "IT & Support": ServerCog,
  "Emerging Tech & AI": Sparkles,
};

const SkillsPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Skill <span className="gradient-text">Matrix</span>
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            A balanced intersection of software engineering, fabrication precision, design systems, and emerging AI workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {skills.map((group: { category: string; items: { name: string; level: number }[] }, idx: number) => {
            const Icon = iconMap[group.category] || Code2;
            const colors = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500',
              'from-orange-500 to-red-500',
              'from-green-500 to-emerald-500',
              'from-fuchsia-500 to-rose-500'
            ];
            const color = colors[idx % colors.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${color}`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold">{group.category}</h2>
                </div>
                <div className="space-y-5">
                  {group.items.map((skill: { name: string; level: number }) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/90">{skill.name}</span>
                        <span className="text-white/60">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.9, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center text-white/50 text-sm">
          * Levels represent relative proficiency & applied project frequency, not formal certification metrics.
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
