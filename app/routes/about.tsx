import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="px-6 md:px-12 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-zinc-400 mb-8">
              I'm a data science student, programmer, and entrepreneur passionate about creating 
              innovative solutions that make a real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio section */}
      <section className="px-6 md:px-12 py-12 md:py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-zinc-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent z-10" />
                <img 
                  src="/image1.jpg?height=600&width=600" 
                  alt="Anurag Saroj" 
                  className="w-full h-full object-cover mix-blend-luminosity"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl bg-zinc-800 p-6 flex flex-col justify-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">IIT</div>
                <div className="text-zinc-300">Madras student + Founder </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <p className="text-zinc-400 mb-4">
                I am currently pursuing a <strong>B.S. in Data Science and Programming</strong> from 
                <strong> IIT Madras</strong>, where I've been developing my technical skills and 
                theoretical knowledge in the field of data science.
              </p>
              <p className="text-zinc-400 mb-4">
                My passion lies in leveraging data and technology to solve real-world problems. 
                This drive led me to found <strong>TheLibraryHub</strong>, a platform that connects 
                learners with the perfect study spaces while helping library owners manage their 
                spaces efficiently.
              </p>
              <p className="text-zinc-400 mb-6">
                I believe in the power of education and accessible learning resources, which is why 
                I'm dedicated to creating solutions that make quality education more accessible to everyone.
              </p>
              <a 
                href="/projects" 
                className="inline-flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
              >
                Check out my projects
                <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="px-6 md:px-12 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              My academic journey and professional experiences that have shaped my career.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:translate-x-[-0.5px]"></div>
            
            <div className="space-y-12">
              <TimelineItem 
                icon={<GraduationCap className="w-6 h-6" />}
                year="2022 - Present"
                title="B.S. in Data Science & Programming"
                organization="IIT Madras"
                description="Pursuing a comprehensive degree program focused on data science, machine learning, and programming fundamentals."
                isLeft={true}
                delay={0}
              />
              
              <TimelineItem 
                icon={<Briefcase className="w-6 h-6" />}
                year="2024 - Present"
                title="Founder"
                organization="TheLibraryHub"
                description="Founded and currently leading the development of a platform connecting learners with libraries and study spaces."
                isLeft={false}
                delay={0.2}
              />
              
              <TimelineItem 
                icon={<BookOpen className="w-6 h-6" />}
                year="2023 - 2024"
                title="PR & PUBLICITY TEAM"
                organization="PARADOX, IIT Madras"
                description="Handled PR and publicity strategies to enhance outreach and engagement for PARADOX, IIT Madras."
                isLeft={true}
                delay={0.4}
              />
              
              <TimelineItem 
                icon={<Award className="w-6 h-6" />}
                year="2024 - 2025"
                title="Technical Team"
                organization="PARADOX, IIT Madras"
                description="Developed and managed technical solutions to support PARADOX, IIT Madras."
                isLeft={false}
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="px-6 md:px-12 py-12 md:py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-zinc-400 max-w-2xl">
              A range of technical and soft skills I've developed throughout my academic and professional journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
              
              <div className="space-y-6">
                <SkillBar label="Data Science & Analysis" percentage={90} delay={0} />
                <SkillBar label="Machine Learning" percentage={85} delay={0.1} />
                <SkillBar label="Python Programming" percentage={95} delay={0.2} />
                <SkillBar label="Web Development" percentage={80} delay={0.3} />
                <SkillBar label="App Development" percentage={70} delay={0.4} />
                <SkillBar label="Database Management" percentage={75} delay={0.5} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <SkillTag label="Problem Solving" delay={0} />
                <SkillTag label="Critical Thinking" delay={0.1} />
                <SkillTag label="Communication" delay={0.2} />
                <SkillTag label="Leadership" delay={0.3} />
                <SkillTag label="Teamwork" delay={0.4} />
                <SkillTag label="Time Management" delay={0.5} />
                <SkillTag label="Adaptability" delay={0.6} />
                <SkillTag label="Creativity" delay={0.7} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 md:px-12 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Working Together?</h2>
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

function TimelineItem({ 
  icon, 
  year, 
  title, 
  organization, 
  description,
  isLeft,
  delay
}: { 
  icon: React.ReactNode; 
  year: string; 
  title: string; 
  organization: string; 
  description: string;
  isLeft: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="md:w-1/2"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-zinc-900 border-2 border-emerald-400 rounded-full flex items-center justify-center transform -translate-x-1/2 md:-translate-x-1/2 z-10">
        {icon}
      </div>
      
      <div className={`md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
          <div className="text-emerald-400 font-medium mb-2">{year}</div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="text-zinc-400 mb-4">{organization}</div>
          <p className="text-zinc-500">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function SkillBar({ 
  label, 
  percentage,
  delay
}: { 
  label: string; 
  percentage: number;
  delay: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-zinc-300">{label}</span>
        <span className="text-zinc-500">{percentage}%</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay }}
        />
      </div>
    </div>
  );
}

function SkillTag({ 
  label,
  delay
}: { 
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay }}
      className="bg-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-700 transition-colors"
    >
      {label}
    </motion.div>
  );
}
