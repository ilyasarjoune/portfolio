import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
const [currentImageIndex, setCurrentImageIndex] = useState(0)
const [showLightbox, setShowLightbox] = useState(false)

if(!project) return null

const hasImages = project.images && project.images.length > 0

const nextImage = () => {
if (hasImages) {
setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
}
}

const prevImage = () => {
if (hasImages) {
setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
}
}

const openLightbox = (index) => {
setCurrentImageIndex(index)
setShowLightbox(true)
}

const closeLightbox = () => {
setShowLightbox(false)
}

return (
<motion.div
variants={backdropVariants}
initial="hidden"
animate="visible"
exit="hidden"
className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm overflow-y-auto"
onClick={onClose}
aria-modal="true"
role="dialog"
>
<motion.div
variants={modalVariants}
className="max-w-4xl w-full bg-[#071021] p-8 rounded-2xl border border-accent/30 shadow-2xl relative overflow-hidden my-8"
onClick={e=>e.stopPropagation()}
>
<motion.div
className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#64FFDA] via-orange-400 to-[#FA9F42]"
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

{/* Image Thumbnails Gallery */}
{hasImages && (
<motion.div 
  className="mt-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.25 }}
>
<h4 className="text-sm font-semibold text-slate-400 mb-3">Aperçu de l'application</h4>
<div className="flex gap-3 overflow-x-auto pb-2">
{project.images.map((img, idx) => (
<motion.button
  key={idx}
  onClick={() => openLightbox(idx)}
  className="relative flex-shrink-0 group cursor-pointer"
  whileHover={{ scale: 1.05, y: -4 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 + idx * 0.05 }}
>
<img 
  src={img} 
  alt={`${project.title} screenshot ${idx + 1}`}
  className="h-32 w-auto rounded-lg border-2 border-slate-700 group-hover:border-accent transition-all shadow-lg"
/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 rounded-lg transition-all flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
</svg>
</div>
</motion.button>
))}
</div>
<p className="text-xs text-slate-500 mt-2">Cliquez sur une image pour l'agrandir</p>
</motion.div>
)}

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
    borderColor: '#64FFDA'
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
  className="absolute inset-0 bg-gradient-to-r from-[#8FFFF0] to-accent opacity-0 group-hover:opacity-100 transition-opacity"
/>
<span className="relative z-10">Fermer</span>
</motion.button>
</motion.div>
</motion.div>

{/* Lightbox for Full Image View */}
<AnimatePresence>
{showLightbox && (
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
  onClick={closeLightbox}
>
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 0 }}
  transition={{ type: 'spring', damping: 25 }}
  className="relative max-w-5xl w-full"
  onClick={(e) => e.stopPropagation()}
>
{/* Close Button */}
<motion.button
  onClick={closeLightbox}
  className="absolute -top-12 right-0 text-white hover:text-accent p-2"
  whileHover={{ scale: 1.1, rotate: 90 }}
  whileTap={{ scale: 0.9 }}
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</motion.button>

{/* Image Display */}
<div className="flex justify-center items-center">
<AnimatePresence mode="wait">
<motion.img
  key={currentImageIndex}
  src={project.images[currentImageIndex]}
  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
  className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.3 }}
/>
</AnimatePresence>
</div>

{/* Navigation Buttons */}
{project.images.length > 1 && (
<>
<motion.button
  onClick={(e) => { e.stopPropagation(); prevImage(); }}
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent/90 hover:bg-accent text-black p-3 rounded-full shadow-lg"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
</motion.button>
<motion.button
  onClick={(e) => { e.stopPropagation(); nextImage(); }}
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent/90 hover:bg-accent text-black p-3 rounded-full shadow-lg"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</motion.button>
</>
)}

{/* Image Counter */}
<div className="text-center mt-4 text-white">
<span className="bg-black/50 px-4 py-2 rounded-full text-sm">
{currentImageIndex + 1} / {project.images.length}
</span>
</div>
</motion.div>
</motion.div>
)}
</AnimatePresence>
</motion.div>
)
}