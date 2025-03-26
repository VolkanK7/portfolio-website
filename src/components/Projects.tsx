import { motion } from 'framer-motion';
import { useState } from 'react';
import pickupp from '../../public/pickupp.png';
import ottobus from '../../public/ottobus.png';
import softalya from '../../public/softalya.jpeg';

const projects = [
   {
      id: 1,
      title: 'Ottobus (Transportation Industry Platform)',
      description:
         'Built responsive and scalable UI components for a transportation industry application. Focused on creating a seamless user experience with modern React patterns.',
      image: ottobus,
      tags: ['React', 'GraphQL', 'Apollo', 'Scrum'],
      position: 'Frontend Developer (Full-time)',
      company: 'Softalya Software Inc.',
      date: 'May 2022 - Present',
      liveUrl: 'https://www.ottobus.net/en',
      githubUrl: '#',
   },
   {
      id: 2,
      title: 'Pickupp (Tourism Management System)',
      description:
         'Developed scalable and user-friendly web application for the tourism industry. Worked in an Agile environment, applying Scrum methodologies to improve workflows and collaboration.',
      image: pickupp,
      tags: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
      position: 'Frontend Developer (Full-time)',
      company: 'Softalya Software Inc.',
      date: 'May 2022 - Present',
      liveUrl: 'https://pickupp.site/',
      githubUrl: '#',
   },
   {
      id: 3,
      title: 'Pickupp (Tourism Management System)',
      description:
         'Contributed to a project developing solutions for the tourism industry as a Frontend Developer Intern. Focused on building responsive and scalable UIs.',
      image: pickupp,
      tags: ['Vue.js', 'JavaScript', 'Bootstrap', 'Sass'],
      position: 'Frontend Developer (Internship)',
      company: 'Softalya Software Inc.',
      date: 'Feb 2022 - May 2022',
      liveUrl: 'https://pickupp.site/',
      githubUrl: '#',
   },
];

const Projects = () => {
   const [activeFilter, setActiveFilter] = useState('All');

   // Extract unique tags
   const allTags = ['All', ...new Set(projects.flatMap((project) => project.tags))];

   // Filter projects based on active tag
   const filteredProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.tags.includes(activeFilter));

   return (
      <section id="projects" className="py-20 px-6 md:px-12 bg-[#0F172A]">
         <div className="container mx-auto">
            <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <h2 className="text-3xl md:text-4xl font-bold inline-block pb-2 mb-4 border-b-2 border-[#3B82F6]">Work Experience</h2>
               <p className="text-[#E2E8F0]/60 max-w-3xl mx-auto mb-8">Discover my professional experience developing web applications</p>

               <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {allTags.map((tag) => (
                     <motion.button
                        key={tag}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                     ${activeFilter === tag ? 'bg-[#3B82F6] text-white' : 'bg-[#030712] text-[#E2E8F0]/70 hover:bg-[#3B82F6]/10'}`}
                        onClick={() => setActiveFilter(tag)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        {tag}
                     </motion.button>
                  ))}
               </div>
            </motion.div>

            <motion.div
               className="grid grid-cols-1 lg:grid-cols-2 gap-8"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               {filteredProjects.map((project, index) => (
                  <motion.div
                     key={project.id}
                     className="bg-[#030712] rounded-xl overflow-hidden border border-[#3B82F6]/10 hover:border-[#3B82F6]/30 transition-all duration-300"
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     whileHover={{ y: -10, boxShadow: '0 10px 20px -15px rgba(139, 92, 246, 0.5)' }}
                  >
                     <div className="relative h-48 bg-gray-800">
                        <div className="absolute inset-0 flex items-center justify-center bg-[#030712]">
                           <div className="flex items-center space-x-4">
                              <span className="text-[#3B82F6] text-opacity-20 text-6xl font-bold">
                                 <img src={project.image.src} alt="" height={120} width={120} className="rounded-xl" />
                              </span>
                              <div className="h-20 w-1 bg-[#3B82F6]/10 rounded-full"></div>
                              <div className="flex flex-col items-start">
                                 <span className="text-[#3B82F6] font-medium">{project.company}</span>
                                 <span className="text-[#E2E8F0]/40 text-sm">{project.date}</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                           {project.tags.map((tag) => (
                              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-[#3B82F6]/10 text-[#3B82F6]">
                                 {tag}
                              </span>
                           ))}
                        </div>

                        <h3 className="text-xl font-bold mb-1 text-[#F8FAFC]">{project.title}</h3>
                        <p className="text-[#3B82F6]/80 mb-3 text-sm font-medium">{project.position}</p>
                        <p className="text-[#E2E8F0]/70 text-sm mb-4">{project.description}</p>

                        <div className="flex gap-3">
                           <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-[#3B82F6] hover:text-[#10B981] transition-colors"
                           >
                              <span>View Project</span>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor"
                                 className="w-4 h-4"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                 />
                              </svg>
                           </a>

                           {/* <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-[#E2E8F0]/70 hover:text-[#E2E8F0] transition-colors"
                           >
                              <span>Code</span>
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                           </a> */}
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>

            <motion.div
               className="mt-16 text-center"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <p className="text-[#E2E8F0]/60 mb-8">Looking forward to working on new exciting projects in the frontend development space</p>
               <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 text-[#3B82F6] px-6 py-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <span>Discuss a project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                     />
                  </svg>
               </motion.a>
            </motion.div>
         </div>
      </section>
   );
};

export default Projects;
