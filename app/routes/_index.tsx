import type { MetaFunction } from "@remix-run/node";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Code, Database, ExternalLink, Library } from 'lucide-react';

export const meta: MetaFunction = () => {
  return [
    { title: "Anurag Saroj | Data Scientist & Founder" },
    { name: "description", content: "Portfolio of Anurag Saroj, B.S. in Data Science & Programming at IIT Madras and Founder of TheLibraryHub." },
  ];
};

export default function Index() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative">
      {/* Hero section with parallax effect */}
      <div ref={targetRef} className="h-screen relative overflow-hidden flex items-center">
        <motion.div 
          className="absolute inset-0 -z-10"
          style={{ 
            backgroundImage: "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            y
          }}
        />
        
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-zinc-950" />
        
        <motion.div 
          className="container mx-auto px-6 md:px-12 relative z-10"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Data Scientist & Founder
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hi, I'm <span className="text-emerald-400">Anurag Saroj</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              B.S. in Data Science & Programming at <span className="text-zinc-200">IIT Madras</span> and 
              Founder of <span className="text-zinc-200">TheLibraryHub</span>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a 
                href="/projects" 
                className="group px-6 py-3 rounded-lg bg-emerald-500 text-zinc-900 font-medium flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-200 font-medium flex items-center justify-center hover:border-zinc-500 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-zinc-500 text-sm mb-2"
          >
            Scroll to explore
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="w-1 h-8 rounded-full bg-gradient-to-b from-zinc-700 to-transparent"
          />
        </div>
      </div>

      {/* About section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-zinc-400 mb-4">
                I'm a data scientist and programmer with a passion for creating innovative solutions 
                that make a real-world impact. Currently pursuing my B.S. in Data Science and Programming 
                at IIT Madras, I combine technical expertise with entrepreneurial vision.
              </p>
              <p className="text-zinc-400 mb-6">
                As the founder of TheLibraryHub, I'm building a platform that connects learners with 
                the perfect study spaces while helping library owners manage their resources efficiently.
              </p>
              <a 
                href="/about" 
                className="inline-flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
              >
                Learn more about my journey
                <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-zinc-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent" />
                <img 
                  src="/image9.jpg?height=600&width=600" 
                  alt="Anurag Saroj" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl bg-zinc-800 p-6 flex flex-col justify-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">1+</div>
                <div className="text-zinc-300">Years of experience in development and data science</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              I specialize in data science, programming, and building innovative solutions
              that solve real-world problems.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Database className="w-10 h-10 text-emerald-400" />}
              title="Data Science"
              description="Analyzing complex datasets to extract meaningful insights and drive data-informed decisions."
              delay={0}
            />
            <SkillCard 
              icon={<Code className="w-10 h-10 text-emerald-400" />}
              title="Programming"
              description="Building robust applications with modern technologies and best practices."
              delay={0.2}
            />
            <SkillCard 
              icon={<Library className="w-10 h-10 text-emerald-400" />}
              title="Product Development"
              description="Creating user-centered products that solve real problems and deliver exceptional experiences."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Featured project section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
            <p className="text-zinc-400 max-w-2xl">
              Connecting learners with the perfect study spaces while helping library owners
              manage their resources efficiently.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-10" />
            <iframe
              src="https://thelibraryhub.in"
              className="w-full h-[500px] rounded-lg shadow-lg border border-gray-700 group-hover:scale-105 transition-transform duration-700"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="text-emerald-400 font-medium mb-2">Featured Project</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">TheLibraryHub</h3>
                  <p className="text-zinc-400 max-w-xl mb-6">
                    A platform that connects learners with libraries and study spaces,
                    while providing library owners with tools to manage their spaces efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">React</span>
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">Node.js</span>
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">MongoDB</span>
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">Express</span>
                  </div>
                </div>
                <a 
                  href="https://thelibraryhub.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-zinc-900 font-medium hover:bg-emerald-400 transition-colors"
                >
                  Visit Website
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-12 text-center">
            <a 
              href="/projects" 
              className="inline-flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
            >
              View all projects
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-emerald-500 text-zinc-900 font-medium hover:bg-emerald-400 transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ 
  icon, 
  title, 
  description,
  delay
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-emerald-500/30 transition-colors group"
    >
      <div className="mb-6 p-4 rounded-lg bg-zinc-800/50 inline-block group-hover:bg-emerald-500/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  );
}
