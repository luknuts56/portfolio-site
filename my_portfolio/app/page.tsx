import Image from 'next/image'
import NavBar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Expirience from '@/sections/Expirience';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';
 
export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Expirience />
        <Contact />
      </main>
    </div>
  ) 
}
