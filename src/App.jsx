import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT, PROJECTS, TRANSLATIONS, EXPERIENCE, EDUCATION, SKILLS } from './data'
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
const [language, setLanguage] = useState('fr')
const t = TRANSLATIONS[language]
const currentProjects = PROJECTS[language]
const currentExperience = EXPERIENCE[language]
const currentEducation = EDUCATION[language]

const toggleLanguage = () => {
setLanguage(prev => prev === 'fr' ? 'en' : 'fr')
}

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
    color: ['#64FFDA', '#8FFFF0', '#64FFDA']
  }}
  transition={{ 
    duration: 3, 
    repeat: Infinity,
    ease: "easeInOut" 
  }}
>Aarjoune</motion.span>
</h1>
<p className="mt-1 text-sm text-slate-400">{t.profile.title}</p>
<p className="mt-0.5 text-xs text-slate-500">{t.openToOpportunities}</p>
</motion.div>
<motion.nav 
  aria-label="Contact links" 
  className="flex items-center gap-3"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
{/* Language Toggle */}
<motion.button
  onClick={toggleLanguage}
  className="px-3 py-2 rounded-md border border-slate-700 text-xs font-semibold transition-all hover:border-accent"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
{language === 'fr' ? '🇺🇸 EN' : '🇫🇷 FR'}
</motion.button>
<motion.a 
  href={`mailto:${CONTACT.email}`} 
  className="px-4 py-2 rounded-md border border-slate-700 text-sm transition-all"
  whileHover={{ scale: 1.05, borderColor: '#64FFDA' }}
  whileTap={{ scale: 0.95 }}
>{t.contact}</motion.a>
<motion.a 
  href={CONTACT.github} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="px-4 py-2 rounded-md bg-accent text-black font-semibold text-sm"
  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(100, 255, 218, 0.5)' }}
  whileTap={{ scale: 0.95 }}
>{t.github}</motion.a>
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
  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }}
>
<motion.h2 
  className="text-xl font-bold"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>{t.greeting}</motion.h2>
<motion.p 
  className="mt-3 text-slate-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>{t.profile.summary}</motion.p>
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
  whileHover={{ scale: 1.1, backgroundColor: '#1e293b', color: '#64FFDA' }}
  whileTap={{ scale: 0.95 }}
>{tech}</motion.span>
))}
</motion.div>
</motion.div>


<motion.aside 
  className="p-6 rounded-2xl bg-[#071021] border border-slate-800 hover:border-accent/30 transition-all duration-300" 
  aria-label="Contact card"
  variants={fadeInUp}
  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }}
>
<h3 className="font-semibold">{t.contact}</h3>
<p className="mt-2 text-sm text-slate-400">{CONTACT.location}</p>
<p className="mt-1 text-sm">📧 <motion.a 
  className="text-accent" 
  href={`mailto:${CONTACT.email}`}
  whileHover={{ scale: 1.05, x: 5 }}
  style={{ display: 'inline-block' }}
>{CONTACT.email}</motion.a></p>
<p className="text-sm">📱 {CONTACT.phone}</p>
<div className="mt-4">
<h4 className="text-sm font-medium text-slate-300">{t.languages}</h4>
<ul className="text-sm text-slate-400 mt-2 space-y-1">
{t.languagesList.map((lang, i) => (
<motion.li 
  key={lang}
  initial={{ opacity: 0, x: -10 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.9 + i * 0.1 }}
  whileHover={{ x: 5, color: '#64FFDA' }}
>{lang.name} — {lang.level}</motion.li>
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
>{t.projects}</motion.h2>
<motion.div 
  className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerContainer}
>
{currentProjects.map((p) => (
<motion.article 
  key={p.id} 
  className="p-4 rounded-2xl bg-[#071021] border border-slate-800 cursor-pointer relative overflow-hidden group"
  variants={fadeInUp}
  whileHover={{ 
    y: -8, 
    scale: 1.02,
    borderColor: '#64FFDA',
    boxShadow: '0 20px 40px rgba(100, 255, 218, 0.2)'
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
{t.viewDetails}
</motion.div>
</div>
</motion.article>
))}
</motion.div>
</motion.section>


{/* Experience Section */}
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
>{t.experience}</motion.h2>
<motion.div 
  className="mt-6 space-y-6"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerContainer}
>
{currentExperience.map((exp) => (
<motion.article 
  key={exp.id}
  className="p-6 rounded-2xl bg-[#071021] border border-slate-800 hover:border-accent/30 transition-all duration-300"
  variants={fadeInUp}
  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }}
>
<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
<div>
<h3 className="text-lg font-semibold text-accent">{exp.role}</h3>
<p className="text-slate-300 mt-1">{exp.company}</p>
</div>
<span className="text-sm text-slate-400">{exp.period}</span>
</div>
<ul className="mt-4 space-y-2">
{exp.achievements.map((achievement, i) => (
<motion.li 
  key={i}
  className="text-sm text-slate-400 flex gap-2"
  initial={{ opacity: 0, x: -10 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 * i }}
>
<span className="text-accent mt-1">•</span>
<span>{achievement}</span>
</motion.li>
))}
</ul>
{exp.stack.length > 0 && (
<div className="mt-4 flex flex-wrap gap-2">
{exp.stack.map((tech) => (
<span 
  key={tech}
  className="text-xs px-3 py-1 bg-slate-800/50 rounded-full text-slate-400"
>{tech}</span>
))}
</div>
)}
</motion.article>
))}
</motion.div>
</motion.section>


{/* Education & Skills Section */}
<motion.section 
  className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerContainer}
>
{/* Education */}
<motion.div
  className="p-6 rounded-2xl bg-[#071021] border border-slate-800 hover:border-accent/30 transition-all duration-300"
  variants={fadeInUp}
  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }}
>
<h3 className="text-xl font-bold mb-4">{t.education}</h3>
<div className="space-y-4">
{currentEducation.map((edu) => (
<motion.div 
  key={edu.id}
  initial={{ opacity: 0, x: -10 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
<p className="font-semibold text-slate-200">{edu.degree}</p>
<p className="text-sm text-accent">{edu.institution}</p>
<p className="text-xs text-slate-500">{edu.year}</p>
</motion.div>
))}
</div>
</motion.div>

{/* Technical Skills */}
<motion.div
  className="p-6 rounded-2xl bg-[#071021] border border-slate-800 hover:border-accent/30 transition-all duration-300"
  variants={fadeInUp}
  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }}
>
<h3 className="text-xl font-bold mb-4">{t.technicalSkills}</h3>
<div className="space-y-3">
<div>
<p className="text-sm font-semibold text-slate-300 mb-2">{t.skillCategories.languages}</p>
<div className="flex flex-wrap gap-2">
{SKILLS.languages.map((skill) => (
<span key={skill} className="text-xs px-2 py-1 bg-slate-800/50 rounded text-slate-400">{skill}</span>
))}
</div>
</div>
<div>
<p className="text-sm font-semibold text-slate-300 mb-2">{t.skillCategories.frontend}</p>
<div className="flex flex-wrap gap-2">
{SKILLS.frontend.map((skill) => (
<span key={skill} className="text-xs px-2 py-1 bg-slate-800/50 rounded text-slate-400">{skill}</span>
))}
</div>
</div>
<div>
<p className="text-sm font-semibold text-slate-300 mb-2">{t.skillCategories.backend}</p>
<div className="flex flex-wrap gap-2">
{[...SKILLS.backend, ...SKILLS.database].map((skill) => (
<span key={skill} className="text-xs px-2 py-1 bg-slate-800/50 rounded text-slate-400">{skill}</span>
))}
</div>
</div>
<div>
<p className="text-sm font-semibold text-slate-300 mb-2">{t.skillCategories.tools}</p>
<div className="flex flex-wrap gap-2">
{[...SKILLS.tools, ...SKILLS.methodologies].map((skill) => (
<span key={skill} className="text-xs px-2 py-1 bg-slate-800/50 rounded text-slate-400">{skill}</span>
))}
</div>
</div>
</div>
</motion.div>
</motion.section>


<motion.section 
  className="mt-12 p-6 rounded-2xl bg-[#071021] border border-slate-800 hover:border-accent/30 transition-all duration-300"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }}
>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
<h3 className="font-semibold">{t.softSkills}</h3>
<p className="text-slate-400 mt-2">{t.softSkillsList}</p>
</motion.div>
<motion.div 
  className="text-right"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
>
<p className="text-sm text-slate-400">{t.availableFor}</p>
<motion.a 
  href={`mailto:${CONTACT.email}?subject=Opportunit%C3%A9%20-%20Iliass%20Aarjoune`} 
  className="inline-block mt-3 px-4 py-2 rounded bg-accent text-black font-semibold"
  whileHover={{ 
    scale: 1.05, 
    boxShadow: '0 0 25px rgba(100, 255, 218, 0.6)',
    y: -2
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 400 }}
>{t.contactMe}</motion.a>
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
{active && <ProjectModal project={active} onClose={() => setActive(null)} language={language} />}
</AnimatePresence>
</div>
</>
)
}