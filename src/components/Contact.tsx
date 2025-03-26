import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
   const [status, setStatus] = useState('');

   const sendEmail = (e: any) => {
      e.preventDefault();
      emailjs
         .sendForm('service_vppyhy9', 'template_gvyvr4i', e.target, 'bWJHaixZ9oZXc_WrV')
         .then(() => {
            setStatus('success');
            e.target.reset();
         })
         .catch(() => {
            setStatus('error');
         });
   };

   return (
      <section id="contact" className="py-20 px-6 md:px-12 bg-[#030712]">
         <div className="container mx-auto">
            <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <h2 className="text-3xl md:text-4xl font-bold inline-block pb-2 mb-4 border-b-2 border-[#3B82F6]">Contact Me</h2>
               <p className="text-[#E2E8F0]/60 max-w-3xl mx-auto">
                  Want to discuss a project or just say hello? Feel free to reach out to me through the contact form or via my social media.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <motion.div
                  className="bg-[#0F172A] p-6 md:p-8 rounded-xl border border-[#3B82F6]/10"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  <h3 className="text-xl font-bold text-[#3B82F6] mb-6">Contact Form</h3>

                  {status === 'success' && (
                     <div className="mb-4 p-3 text-green-800 bg-green-200 border border-green-400 rounded-lg">Your message has been sent successfully! ✅</div>
                  )}
                  {status === 'error' && (
                     <div className="mb-4 p-3 text-red-800 bg-red-200 border border-red-400 rounded-lg">Oops! Something went wrong. Please try again. ❌</div>
                  )}

                  <form className="space-y-5" /* action="https://formspree.io/f/xdkedqnp" method="POST"  */ onSubmit={sendEmail}>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                           <label htmlFor="name" className="block text-sm font-medium text-[#E2E8F0]/80 mb-1">
                              Name
                           </label>
                           <input
                              type="text"
                              id="name"
                              name="name" // **EKLENDİ**
                              className="w-full px-4 py-3 bg-[#030712] border border-[#3B82F6]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent text-[#E2E8F0]"
                              placeholder="Your name"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="email" className="block text-sm font-medium text-[#E2E8F0]/80 mb-1">
                              Email
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email" // **EKLENDİ**
                              className="w-full px-4 py-3 bg-[#030712] border border-[#3B82F6]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent text-[#E2E8F0]"
                              placeholder="Your email address"
                              required
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[#E2E8F0]/80 mb-1">
                           Subject
                        </label>
                        <input
                           type="text"
                           id="subject"
                           name="subject" // **EKLENDİ**
                           className="w-full px-4 py-3 bg-[#030712] border border-[#3B82F6]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent text-[#E2E8F0]"
                           placeholder="Subject of your message"
                           required
                        />
                     </div>

                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#E2E8F0]/80 mb-1">
                           Message
                        </label>
                        <textarea
                           id="message"
                           name="message" // **EKLENDİ**
                           rows={5}
                           className="w-full px-4 py-3 bg-[#030712] border border-[#3B82F6]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent text-[#E2E8F0] resize-none"
                           placeholder="Your message..."
                           required
                        ></textarea>
                     </div>

                     <motion.button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-lg font-medium transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                     >
                        Send Message
                     </motion.button>
                  </form>
               </motion.div>

               <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <div>
                     <h3 className="text-xl font-bold text-[#3B82F6] mb-4">Contact Information</h3>
                     <p className="text-[#E2E8F0]/70 mb-6">
                        You can reach me directly through the channels below. I typically respond to messages within 24 hours.
                     </p>

                     <div className="space-y-4">
                        <div className="flex items-start gap-4">
                           <div className="text-[#3B82F6] p-3 bg-[#0F172A] rounded-full">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor"
                                 className="w-5 h-5"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                 />
                              </svg>
                           </div>
                           <div>
                              <h4 className="text-sm font-medium text-[#E2E8F0]/90">Email</h4>
                              <a href="mailto:volkan.kaya007@gmail.com" className="text-[#3B82F6] hover:underline">
                                 volkan.kaya007@gmail.com
                              </a>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="text-[#3B82F6] p-3 bg-[#0F172A] rounded-full">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor"
                                 className="w-5 h-5"
                              >
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                 />
                              </svg>
                           </div>
                           <div>
                              <h4 className="text-sm font-medium text-[#E2E8F0]/90">Location</h4>
                              <p className="text-[#E2E8F0]/70">Antalya, Turkey</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="text-[#3B82F6] p-3 bg-[#0F172A] rounded-full">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor"
                                 className="w-5 h-5"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                 />
                              </svg>
                           </div>
                           <div>
                              <h4 className="text-sm font-medium text-[#E2E8F0]/90">Phone</h4>
                              <a href="tel:+905534134" className="text-[#3B82F6] hover:underline">
                                 +90 (553) 413 473
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div>
                     <h3 className="text-xl font-bold text-[#3B82F6] mb-4">Social Media</h3>
                     <div className="flex gap-4">
                        {[
                           {
                              name: 'GitHub',
                              icon: (
                                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                 </svg>
                              ),
                              url: 'https://github.com/VolkanK7',
                           },
                           {
                              name: 'LinkedIn',
                              icon: (
                                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                 </svg>
                              ),
                              url: 'https://linkedin.com/in/volkann7',
                           },
                        ].map((social, index) => (
                           <motion.a
                              key={social.name}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-[#0F172A] text-[#E2E8F0]/70 hover:text-[#3B82F6] rounded-full transition-colors duration-300"
                              whileHover={{ y: -5, color: '#8B5CF6' }}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.1 * index }}
                           >
                              {social.icon}
                           </motion.a>
                        ))}
                     </div>
                  </div>

                  <motion.div
                     className="p-5 bg-gradient-to-r from-[#3B82F6]/5 to-[#10B981]/5 rounded-xl border border-[#3B82F6]/10 relative overflow-hidden"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/5 rounded-full -mr-16 -mt-16 z-0"></div>
                     <div className="relative z-10">
                        <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">Ready to work together?</h3>
                        <p className="text-[#E2E8F0]/70 mb-4">I'm currently available for freelance work or full-time positions.</p>
                        <div className="inline-flex items-center gap-2 text-[#3B82F6]">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                              />
                           </svg>
                           <span>Let's build something amazing together</span>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
