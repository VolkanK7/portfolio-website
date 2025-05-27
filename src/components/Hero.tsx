import { motion } from 'framer-motion';
import profile from '../../public/profile.jpeg';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const Hero = () => {
   const [isPlaying, setIsPlaying] = useState(false);
   const [duration, setDuration] = useState(0);
   const [currentTime, setCurrentTime] = useState(0);
   const audioRef = useRef<HTMLAudioElement>(null);

   const togglePlayPause = () => {
      if (audioRef.current) {
         if (isPlaying) {
            audioRef.current.pause();
         } else {
            audioRef.current.play();
         }
         setIsPlaying(!isPlaying);
      }
   };

   const handleTimeUpdate = () => {
      if (audioRef.current) {
         setCurrentTime(audioRef.current.currentTime);
      }
   };

   const handleLoadedMetadata = () => {
      if (audioRef.current) {
         setDuration(audioRef.current.duration);
      }
   };

   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
      const seekTime = parseFloat(e.target.value);
      if (audioRef.current) {
         audioRef.current.currentTime = seekTime;
         setCurrentTime(seekTime);
      }
   };

   const formatTime = (time: number) => {
      if (!isFinite(time) || isNaN(time)) return '0:00';
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
   };

   useEffect(() => {
      const audio = audioRef.current;
      if (audio) {
         // Force reload the audio element to ensure metadata is loaded
         audio.load();

         const handleCanPlayThrough = () => {
            setDuration(audio.duration);
         };

         audio.addEventListener('timeupdate', handleTimeUpdate);
         audio.addEventListener('loadedmetadata', handleLoadedMetadata);
         audio.addEventListener('canplaythrough', handleCanPlayThrough);
         audio.addEventListener('ended', () => setIsPlaying(false));

         // Try to get duration immediately if already loaded
         if (audio.readyState >= 2) {
            setDuration(audio.duration);
         }

         return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('canplaythrough', handleCanPlayThrough);
            audio.removeEventListener('ended', () => setIsPlaying(false));
         };
      }
   }, []);

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

                  {/* Audio Player */}
                  <motion.div
                     className="w-full max-w-md mx-auto mt-8 md:mx-0"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.7 }}
                  >
                     <div className="bg-[#1E293B] rounded-xl p-4 shadow-lg border border-[#3B82F6]/20">
                        <div className="flex items-center justify-between mb-3">
                           <div className="flex items-center">
                              <motion.button
                                 onClick={togglePlayPause}
                                 className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white"
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 {isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                       <path
                                          fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                          clipRule="evenodd"
                                       />
                                    </svg>
                                 ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                       <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                          clipRule="evenodd"
                                       />
                                    </svg>
                                 )}
                              </motion.button>
                              <div className="ml-3">
                                 <p className="text-[#E2E8F0] text-sm font-medium">CV Audio Introduction</p>
                                 <p className="text-[#E2E8F0]/60 text-xs">Listen to my brief introduction</p>
                              </div>
                           </div>
                           <div className="text-[#E2E8F0]/80 text-xs">
                              {formatTime(currentTime)} / {formatTime(duration)}
                           </div>
                        </div>

                        <div className="w-full">
                           <input
                              type="range"
                              min="0"
                              max={duration || 100}
                              step="0.01"
                              value={currentTime}
                              onChange={handleSeek}
                              className="w-full h-2 bg-[#0F172A] rounded-lg appearance-none cursor-pointer accent-[#3B82F6]"
                              style={{
                                 background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(currentTime / (duration || 1)) * 100}%, #0F172A ${
                                    (currentTime / (duration || 1)) * 100
                                 }%, #0F172A 100%)`,
                              }}
                           />
                        </div>

                        <audio ref={audioRef} src={`/cv_audio.wav`} preload="metadata" />
                     </div>
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
