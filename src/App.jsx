import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT, PROJECTS } from './data'
import ProjectModal from './components/ProjectModal'
import CustomCursor from './components/CustomCursor'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function App(){
const [active, setActive] = useState(null)

return (
<>
<CustomCursor />
<div className="min-h-screen max-w-5xl mx-auto p-6 text-slate-200">
<motion.header 
  className="flex items-center justify-between py-6" 
  aria-label="Header"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
<h1 className="text-3xl md:text-4xl font-extrabold">
Iliass <motion.span 
  className="text-accent"
  animate={{ 
    color: ['#FA9F42', '#FFC078', '#FA9F42']
  }}
  transition={{ 
    duration: 3, 
    repeat: Infinity,
    ease: "easeInOut" 
  }}
>Aarjoune</motion.span>
</h1>
<p className="mt-1 text-sm text-slate-400">Développeur Full-Stack — Laravel · React · React Native</p>
</motion.div>
<motion.nav 
  aria-label="Contact links" 
  className="flex items-center gap-3"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
<motion.a 
  href={`mailto:${CONTACT.email}`} 
  className="px-4 py-2 rounded-md border border-slate-700 text-sm transition-all"
  whileHover={{ scale: 1.05, borderColor: '#FA9F42' }}
  whileTap={{ scale: 0.95 }}
>Contact</motion.a>
<motion.a 
  href={CONTACT.github} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="px-4 py-2 rounded-md bg-accent text-black font-semibold text-sm"
  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(250, 159, 66, 0.5)' }}
  whileTap={{ scale: 0.95 }}
>GitHub</motion.a>
</motion.nav>
</motion.header>


<main>
<motion.section 
  className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
  initial="initial"
  animate="animate"
  variants={staggerContainer}
>
<motion.div 
  className="md:col-span-2 p-6 bg-[#071021] rounded-2xl border border-slate-800 hover:border-accent/30 transition-all duration-300" 
  variants={fadeInUp}
  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(250, 159, 66, 0.1)' }}
>
<motion.h2 
  className="text-xl font-bold"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>Bonjour — je suis Iliass</motion.h2>
<motion.p 
  className="mt-3 text-slate-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>Je conçois et développe des applications web et mobiles robustes et scalables. J'aime transformer des idées complexes en interfaces simples et performantes.</motion.p>
<motion.div 
  className="mt-4 flex flex-wrap gap-3" 
  aria-hidden
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
>
{['React.js', 'Laravel', 'React Native'].map((tech, i) => (
<motion.span 
  key={tech}
  className="text-xs px-3 py-1 bg-slate-800 rounded-full cursor-pointer"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.8 + i * 0.1 }}
  whileHover={{ scale: 1.1, backgroundColor: '#1e293b', color: '#FA9F42' }}
  whileTap={{ scale: 0.95 }}
>{tech}</motion.span>
))}
</motion.div>
</motion.div>


<motion.aside 
  className="p-6 rounded-2xl bg-[#071021] border border-slate-800 hover:border-accent/30 transition-all duration-300" 
  aria-label="Contact card"
  variants={fadeInUp}
  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(250, 159, 66, 0.1)' }}
>
<h3 className="font-semibold">Contact</h3>
<p className="mt-2 text-sm text-slate-400">{CONTACT.location}</p>
<p className="mt-1 text-sm">📧 <motion.a 
  className="text-accent" 
  href={`mailto:${CONTACT.email}`}
  whileHover={{ scale: 1.05, x: 5 }}
  style={{ display: 'inline-block' }}
>{CONTACT.email}</motion.a></p>
<p className="text-sm">📱 {CONTACT.phone}</p>
<div className="mt-4">
<h4 className="text-sm font-medium text-slate-300">Langues</h4>
<ul className="text-sm text-slate-400 mt-2 space-y-1">
{['Arabe — Langue maternelle', 'Français — Courant', 'Anglais — Courant'].map((lang, i) => (
<motion.li 
  key={lang}
  initial={{ opacity: 0, x: -10 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.9 + i * 0.1 }}
  whileHover={{ x: 5, color: '#FA9F42' }}
>{lang}</motion.li>
))}
</ul>
</div>
</motion.aside>
</motion.section>


<motion.section 
  className="mt-12"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
<motion.h2 
  className="text-2xl font-bold"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>Projets</motion.h2>
<motion.div 
  className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerContainer}
>
{PROJECTS.map((p) => (
<motion.article 
  key={p.id} 
  className="p-4 rounded-2xl bg-[#071021] border border-slate-800 cursor-pointer relative overflow-hidden group"
  variants={fadeInUp}
  whileHover={{ 
    y: -8, 
    scale: 1.02,
    borderColor: '#FA9F42',
    boxShadow: '0 20px 40px rgba(250, 159, 66, 0.2)'
  }}
  whileTap={{ scale: 0.98 }}
  onClick={()=>setActive(p)} 
  tabIndex={0} 
  onKeyDown={(e)=>{ if(e.key==='Enter') setActive(p)}} 
  aria-labelledby={`${p.id}-title`}
  transition={{ type: 'spring', stiffness: 300 }}
>
<motion.div
  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
/>
<div className="relative z-10">
<motion.h4 
  id={`${p.id}-title`} 
  className="font-semibold group-hover:text-accent transition-colors"
>{p.title}</motion.h4>
<p className="text-sm text-slate-400 mt-2">{p.desc}</p>
<motion.div 
  className="mt-3 flex flex-wrap gap-2"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
>
{p.stack.map((tech, idx) => (
<motion.span
  key={tech}
  className="text-xs px-2 py-1 bg-slate-800/50 rounded text-slate-400 group-hover:bg-accent/20 group-hover:text-accent transition-all"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 + idx * 0.05 }}
>{tech}</motion.span>
))}
</motion.div>
<motion.div
  className="mt-3 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
  initial={{ x: -10 }}
  whileHover={{ x: 0 }}
>
→ Voir les détails
</motion.div>
</div>
</motion.article>
))}
</motion.div>
</motion.section>


<motion.section 
  className="mt-12 p-6 rounded-2xl bg-[#071021] border border-slate-800 hover:border-accent/30 transition-all duration-300"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(250, 159, 66, 0.1)' }}
>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
<h3 className="font-semibold">Soft skills</h3>
<p className="text-slate-400 mt-2">Adaptabilité · Résolution de problèmes · Communication interculturelle · Collaboration · Gestion du stress</p>
</motion.div>
<motion.div 
  className="text-right"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
>
<p className="text-sm text-slate-400">Disponible pour stage ou opportunités junior.</p>
<motion.a 
  href={`mailto:${CONTACT.email}?subject=Opportunit%C3%A9%20-%20Iliass%20Aarjoune`} 
  className="inline-block mt-3 px-4 py-2 rounded bg-accent text-black font-semibold"
  whileHover={{ 
    scale: 1.05, 
    boxShadow: '0 0 25px rgba(250, 159, 66, 0.6)',
    y: -2
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 400 }}
>Contactez-moi</motion.a>
</motion.div>
</div>
</motion.section>
</main>


<motion.footer 
  className="mt-12 text-center text-slate-500 text-sm"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
>
© {new Date().getFullYear()} Iliass Aarjoune
</motion.footer>


<AnimatePresence mode="wait">
{active && <ProjectModal project={active} onClose={() => setActive(null)} />}
</AnimatePresence>
</div>
</>
)
}