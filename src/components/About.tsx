import { motion } from 'framer-motion';

const About = () => {
   return (
      <section id="about" className="py-20 px-6 md:px-12 bg-dark">
         <div className="container mx-auto">
            <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <h2 className="text-3xl md:text-4xl font-bold inline-block pb-2 mb-4 border-b-2 border-primary">About Me</h2>
               <p className="text-light/60 max-w-3xl mx-auto">Learn more about my professional background and experience.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <p className="text-light/80 leading-relaxed">
                     I am a dedicated <span className="text-primary font-medium">Frontend Developer</span> with a strong background in web development,
                     specializing in TypeScript, React, and REST technologies. My journey started with database programming in high school and continued through
                     my Computer Engineering degree.
                  </p>

                  <p className="text-light/80 leading-relaxed">
                     Throughout my career, I have worked on projects mainly in the tourism and transportation industries, building high-performance and
                     user-friendly web applications. I work especially on React and RESTful APIs. I actively implement Agile methodologies, ensuring effective
                     collaboration and structured workflows.
                  </p>

                  <p className="text-light/80 leading-relaxed">
                     I believe in creating dynamic web applications that are not only visually appealing but also perform efficiently. My focus is on delivering
                     responsive and accessible interfaces that provide excellent user experiences.
                  </p>

                  <div className="pt-4">
                     <motion.a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
                        whileHover={{ x: 5 }}
                     >
                        <span>Download CV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                           />
                        </svg>
                     </motion.a>
                  </div>
               </motion.div>

               <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
               >
                  {[
                     { label: 'Education', value: 'Computer Engineering' },
                     { label: 'Location', value: 'Antalya, Turkey' },
                     { label: 'Experience', value: '3+ Years' },
                     { label: 'Languages', value: 'EN / TR' },
                  ].map((stat, index) => (
                     <motion.div
                        key={stat.label}
                        className="bg-darker p-6 rounded-xl border border-primary/20 flex flex-col items-center justify-center text-center group"
                        whileHover={{ y: -5, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                        transition={{ duration: 0.2 }}
                     >
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                           {stat.value}
                        </h3>
                        <p className="text-light/70">{stat.label}</p>
                     </motion.div>
                  ))}
               </motion.div>
            </div>

            <motion.div
               className="mt-16 pt-12 border-t border-primary/10"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 }}
            >
               <h3 className="text-2xl font-bold text-lighter mb-8">Education</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                     {
                        degree: 'Computer Engineering',
                        school: 'Süleyman Demirel University',
                        years: '2018-2022',
                        gpa: '3.33/4.00',
                     },
                     {
                        degree: 'Computer Programming',
                        school: 'Akdeniz University',
                        years: '2015-2017',
                        gpa: '3.75/4.00',
                     },
                     {
                        degree: 'Database Programming',
                        school: 'Antalya Teknik ve Endüstri Lisesi',
                        years: '2011-2015',
                        gpa: '72.90/100',
                     },
                  ].map((edu, index) => (
                     <motion.div
                        key={index}
                        className="bg-darker p-6 rounded-xl border border-primary/10 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ borderColor: 'rgba(139, 92, 246, 0.3)' }}
                     >
                        <motion.div
                           className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full opacity-0 group-hover:opacity-100"
                           transition={{ duration: 0.3 }}
                        />
                        <h4 className="text-xl font-bold text-lighter mb-1">{edu.degree}</h4>
                        <p className="text-primary mb-2">{edu.school}</p>
                        <p className="text-light/70 text-sm">{edu.years}</p>
                        <p className="text-light/70 text-sm">GPA: {edu.gpa}</p>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default About;
