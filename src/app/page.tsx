'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
   return (
      <div className="min-h-screen bg-darker text-light">
         <Header />
         <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
         </main>
         <Footer />
         <ScrollToTop />
      </div>
   );
}
