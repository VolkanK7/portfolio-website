import { motion } from 'framer-motion';
import profile from '../../public/profile.jpeg';
import Image from 'next/image';

const Hero = () => {
   return (
      <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12 bg-gradient-to-b from-[#030712] to-[#0F172A]">
         <div className="container mx-auto">
            <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
               <motion.div
                  className="text-center md:w-1/2 md:text-left"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
               >
                  <motion.span
                     className="inline-block text-[#3B82F6] text-lg font-mono mb-2"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.2 }}
                  >
                     Hello 👋, I&apos;m Volkan,
                  </motion.span>

                  <motion.h1
                     className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.3 }}
                  >
                     <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">Volkan Kaya</span>
                  </motion.h1>

                  <motion.h2
                     className="text-xl sm:text-2xl text-[#E2E8F0]/90 mb-6"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.4 }}
                  >
                     <span className="text-[#3B82F6]">Frontend</span> Developer
                  </motion.h2>

                  <motion.p
                     className="text-[#E2E8F0]/70 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                  >
                     A dedicated Frontend Developer with a strong background in web development. Creating scalable and user-friendly web applications for the
                     tourism and transportation industries.
                  </motion.p>

                  <motion.div
                     className="flex flex-wrap justify-center gap-4 md:justify-start"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6 }}
                  >
                     <motion.a
                        href="#projects"
                        className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white py-3 px-8 rounded-full font-medium hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        View My Projects
                     </motion.a>

                     <motion.a
                        href="#contact"
                        className="bg-transparent border border-[#3B82F6]/30 text-[#3B82F6] py-3 px-8 rounded-full font-medium hover:bg-[#3B82F6]/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        Contact Me
                     </motion.a>
                  </motion.div>
               </motion.div>

               <motion.div
                  className="flex justify-center md:w-1/2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
               >
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] p-1">
                     <div className="absolute overflow-hidden rounded-full inset-1">
                        <div className="w-full h-full bg-[#0F172A] flex items-center justify-center text-[#E2E8F0]">
                           <div className="relative flex items-center justify-center w-full h-full">
                              <span className="text-6xl">
                                 <Image src={profile} alt="Profile" className="rounded-full" />
                              </span>
                              <motion.div
                                 className="absolute inset-0 border-4 border-transparent rounded-full"
                                 animate={{
                                    rotate: 360,
                                    borderTopColor: 'rgba(139, 92, 246, 0.5)',
                                    borderRightColor: 'rgba(59, 130, 246, 0.5)',
                                 }}
                                 transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear',
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
