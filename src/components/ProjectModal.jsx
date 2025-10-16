import React from 'react'
import { motion } from 'framer-motion'

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const modalVariants = {
  hidden: { 
    y: 50, 
    opacity: 0,
    scale: 0.95
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300
    }
  },
  exit: { 
    y: 50, 
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
}

export default function ProjectModal({project, onClose}){
if(!project) return null
return (
<motion.div
variants={backdropVariants}
initial="hidden"
animate="visible"
exit="hidden"
className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
onClick={onClose}
aria-modal="true"
role="dialog"
>
<motion.div
variants={modalVariants}
className="max-w-2xl w-full bg-[#071021] p-8 rounded-2xl border border-accent/30 shadow-2xl relative overflow-hidden"
onClick={e=>e.stopPropagation()}
>
<motion.div
className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-orange-400 to-accent"
initial={{ scaleX: 0 }}
animate={{ scaleX: 1 }}
transition={{ duration: 0.5, delay: 0.2 }}
/>

<motion.div
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.1 }}
>
<h3 className="text-2xl font-bold text-accent">{project.title}</h3>
<motion.p 
  className="mt-4 text-base text-slate-300 leading-relaxed"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
>{project.desc}</motion.p>

<motion.div 
  className="mt-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
<h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies utilisées</h4>
<div className="flex flex-wrap gap-2">
{project.stack.map((s, i)=> (
<motion.span 
  key={s} 
  className="text-sm px-3 py-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 hover:border-accent/50 transition-all cursor-default"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4 + i * 0.05 }}
  whileHover={{ 
    scale: 1.05, 
    backgroundColor: '#1e293b',
    borderColor: '#FA9F42'
  }}
>{s}</motion.span>
))}
</div>
</motion.div>
</motion.div>


<motion.div 
  className="mt-8 flex justify-end gap-3"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>
<motion.button 
  onClick={onClose} 
  className="px-6 py-3 rounded-lg bg-accent text-black font-semibold relative overflow-hidden group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
<motion.span
  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity"
/>
<span className="relative z-10">Fermer</span>
</motion.button>
</motion.div>
</motion.div>
</motion.div>
)
}