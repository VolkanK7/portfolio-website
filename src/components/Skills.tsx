import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = [
   {
      title: 'Frontend',
      skills: [
         { name: 'HTML5', level: 95 },
         { name: 'CSS3', level: 90 },
         { name: 'JavaScript', level: 90 },
         { name: 'TypeScript', level: 85 },
         { name: 'React', level: 90 },
         { name: 'Vue.js', level: 80 },
         { name: 'Redux', level: 85 },
      ],
   },
   {
      title: 'UI Libraries & Tools',
      skills: [
         { name: 'Tailwind CSS', level: 90 },
         { name: 'MUI', level: 85 },
         { name: 'PrimeReact', level: 80 },
         { name: 'Bootstrap', level: 90 },
         { name: 'Sass', level: 85 },
         { name: 'GraphQL', level: 75 },
         { name: 'Apollo', level: 70 },
      ],
   },
   {
      title: 'Other Skills',
      skills: [
         { name: 'Git & GitHub', level: 90 },
         { name: 'Agile & Scrum', level: 85 },
         { name: 'Responsive Design', level: 90 },
         { name: 'REST APIs', level: 85 },
         { name: 'Performance Optimization', level: 80 },
      ],
   },
];

const Skills = () => {
   const [activeCategory, setActiveCategory] = useState(skillCategories[0].title);

   const container = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };

   const item = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.5 },
      },
   };

   return (
      <section id="skills" className="py-20 px-6 md:px-12 bg-[#030712] relative overflow-hidden">
         {/* Animated code background */}
         <motion.div
            className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
         >
            <pre className="text-xs md:text-sm text-[#3B82F6] font-mono leading-relaxed">
               {`import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>My React Application</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {item.name}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;`}
            </pre>
         </motion.div>

         <div className="container mx-auto relative z-10">
            <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <h2 className="text-3xl md:text-4xl font-bold inline-block pb-2 mb-4 border-b-2 border-[#3B82F6]">Technical Skills</h2>
               <p className="text-[#E2E8F0]/60 max-w-3xl mx-auto">
                  Proficient in developing dynamic web applications using TypeScript, React, Vue, GraphQL, and REST technologies.
               </p>
            </motion.div>

            {/* Category tabs */}
            <div className="flex justify-center mb-12 space-x-4">
               {skillCategories.map((category) => (
                  <motion.button
                     key={category.title}
                     className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
                        activeCategory === category.title ? 'bg-[#3B82F6] text-white' : 'bg-[#0F172A] text-[#E2E8F0]/70 hover:bg-[#3B82F6]/10'
                     }`}
                     onClick={() => setActiveCategory(category.title)}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     {category.title}
                  </motion.button>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {skillCategories
                  .filter((category) => category.title === activeCategory)
                  .map((category) => (
                     <motion.div key={category.title} className="col-span-1 md:col-span-2 lg:col-span-3">
                        <motion.div className="space-y-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {category.skills.map((skill) => (
                                 <motion.div
                                    key={skill.name}
                                    variants={item}
                                    className="bg-[#0F172A] p-6 rounded-xl border border-[#3B82F6]/10 hover:border-[#3B82F6]/30 transition-all duration-300"
                                 >
                                    <div className="flex justify-between items-center mb-3">
                                       <span className="text-[#E2E8F0]/90 font-medium">{skill.name}</span>
                                       <span className="text-[#3B82F6] font-medium">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-[#030712] rounded-full overflow-hidden">
                                       <motion.div
                                          className="h-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"
                                          style={{ width: 0 }}
                                          animate={{ width: `${skill.level}%` }}
                                          transition={{ duration: 1, delay: 0.3 }}
                                       />
                                    </div>
                                 </motion.div>
                              ))}
                           </div>
                        </motion.div>
                     </motion.div>
                  ))}
            </div>

            <motion.div
               className="mt-16 p-6 bg-[#0F172A] rounded-xl border border-[#3B82F6]/10 relative overflow-hidden"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
            >
               <h3 className="text-xl font-bold text-[#F8FAFC] mb-6">Other Professional Skills</h3>
               <div className="flex flex-wrap gap-3">
                  {[
                     'Solution-oriented approach to problems',
                     'Ability to learn and use new technologies quickly',
                     'Continuous learning-focused work',
                     'Good communication skills',
                     'Cross-functional team experience',
                     'Version Control Systems (VCS)',
                     'UI component libraries',
                     'Performance optimization',
                  ].map((skill, index) => (
                     <motion.span
                        key={index}
                        className="bg-[#030712] px-3 py-1 rounded-full text-sm text-[#E2E8F0]/80 border border-[#3B82F6]/10 hover:border-[#3B82F6]/30 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ y: -3, boxShadow: '0 5px 15px -5px rgba(139, 92, 246, 0.3)' }}
                     >
                        {skill}
                     </motion.span>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Skills;
