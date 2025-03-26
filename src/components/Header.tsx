import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
   return (
      <motion.header
         className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-[#0F172A]/80 backdrop-blur-md"
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
      >
         <div className="container mx-auto flex justify-between items-center">
            <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               <Link href="#hero" className="flex items-center">
                  <span className="text-[#3B82F6]">V</span>
                  <span className="text-[#10B981]">K</span>
                  <motion.span className="ml-1 text-xs text-[#E2E8F0]/60" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                     _
                  </motion.span>
               </Link>
            </motion.div>

            <nav className="hidden md:block">
               <ul className="flex space-x-8">
                  {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                     <motion.li
                        key={item}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                     >
                        <Link href={`#${item.toLowerCase()}`} className="text-[#E2E8F0] hover:text-[#3B82F6] transition-colors duration-300">
                           {item}
                        </Link>
                     </motion.li>
                  ))}
               </ul>
            </nav>

            <motion.div className="block md:hidden text-[#3B82F6] text-2xl" whileTap={{ scale: 0.9 }}>
               <button aria-label="Menu">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
               </button>
            </motion.div>
         </div>
      </motion.header>
   );
};

export default Header;
