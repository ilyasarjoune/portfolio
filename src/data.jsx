export const CONTACT = {
email: 'iliassaarjoune@gmail.com',
phone: '+212605739692',
location: 'Casablanca, Maroc',
github: 'https://github.com/your-github',
linkedin: 'https://www.linkedin.com/in/your-linkedin'
}


export const PROJECTS = [
{
id: 'hard-auto',
title: 'Hard Auto — App & Dashboard',
desc: 'Application mobile (fidélisation, réservation) + dashboard admin. Impact: +30% rétention clients.',
stack: ['React Native','Redux','Laravel','MySQL','CI/CD'],
images: [
new URL('./assets/projects images/Hard Auto App/IMG_3702.PNG', import.meta.url).href,
new URL('./assets/projects images/Hard Auto App/IMG_3703.PNG', import.meta.url).href,
new URL('./assets/projects images/Hard Auto App/IMG_3704.PNG', import.meta.url).href,
new URL('./assets/projects images/Hard Auto App/IMG_3705.PNG', import.meta.url).href,
new URL('./assets/projects images/Hard Auto App/IMG_3706.PNG', import.meta.url).href
]
},
{
id: 'hr-system',
title: 'Système RH',
desc: 'Plateforme RH sécurisée (RGPD, RBAC, workflows automatisés). Réduction de 70% de paperasse.',
stack: ['React.js','Laravel','Tailwind CSS']
},
{
id: 'easyinter',
title: 'EasyInter — Plateforme de stages',
desc: "PFE: moteur de recherche d'offres (scraping), tableau admin, RBAC.",
stack: ['Laravel 11','React.js','Python']
}
]