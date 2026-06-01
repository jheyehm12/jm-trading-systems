import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from '../lib/animations'

export function SkillCard({ item, index }) {
  const Icon = item.icon

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      custom={index * 0.05}
      className="group rounded-[1.45rem] border border-cyan-400/10 bg-[#07131d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.22)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/12 bg-cyan-400/8 text-cyan-200">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowRight className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
    </motion.div>
  )
}
