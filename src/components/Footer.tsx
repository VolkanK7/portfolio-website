import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="py-10 px-6 md:px-12 bg-[#030712] border-t border-[#3B82F6]/10">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
               <div>
                  <Link href="#hero" className="text-2xl font-bold text-[#3B82F6] mb-4 inline-block">
                     Volkan Kaya
                  </Link>
                  <p className="text-[#E2E8F0]/60 max-w-xs">
                     A dedicated Frontend Developer focused on building high-performance and user-friendly web applications.
                  </p>
               </div>

               <div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC] mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                     {[
                        { label: 'Home', href: '#hero' },
                        { label: 'About', href: '#about' },
                        { label: 'Skills', href: '#skills' },
                        { label: 'Projects', href: '#projects' },
                        { label: 'Contact', href: '#contact' },
                     ].map((link) => (
                        <li key={link.href}>
                           <Link href={link.href} className="text-[#E2E8F0]/70 hover:text-[#3B82F6] transition-colors duration-300">
                              {link.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC] mb-4">Contact</h3>
                  <ul className="space-y-3">
                     <li className="flex items-center gap-2 text-[#E2E8F0]/70">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-5 h-5 text-[#3B82F6]"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                           />
                        </svg>
                        <a href="mailto:volkan.kaya007@gmail.com" className="hover:text-[#3B82F6] transition-colors duration-300">
                           volkan.kaya007@gmail.com
                        </a>
                     </li>
                     <li className="flex items-center gap-2 text-[#E2E8F0]/70">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-5 h-5 text-[#3B82F6]"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                           />
                        </svg>
                        <span>Antalya, Turkey</span>
                     </li>
                     <li className="flex items-center gap-2 text-[#E2E8F0]/70">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-5 h-5 text-[#3B82F6]"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                           />
                        </svg>
                        <span>+90 (553) 413 473</span>
                     </li>
                  </ul>
               </div>
            </div>

            <motion.div
               className="pt-8 border-t border-[#3B82F6]/10 flex flex-col md:flex-row justify-between items-center"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <p className="text-[#E2E8F0]/60 text-sm mb-4 md:mb-0">&copy; {currentYear} Volkan Kaya. All rights reserved.</p>

               <div className="flex gap-6">
                  <a
                     href="https://github.com/VolkanK7"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[#E2E8F0]/60 hover:text-[#3B82F6] text-sm transition-colors duration-300"
                  >
                     GitHub
                  </a>
                  <a
                     href="https://linkedin.com/in/volkann7"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[#E2E8F0]/60 hover:text-[#3B82F6] text-sm transition-colors duration-300"
                  >
                     LinkedIn
                  </a>
               </div>
            </motion.div>
         </div>
      </footer>
   );
};

export default Footer;
