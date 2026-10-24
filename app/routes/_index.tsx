import type { MetaFunction } from "@remix-run/node";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Code, Database, ExternalLink, Library, Sparkles, CheckCircle2 } from "lucide-react";
import { projects } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Anurag Saroj | Data Scientist & Founder" },
    {
      name: "description",
      content:
        "Portfolio of Anurag Saroj, B.S. in Data Science & Programming at IIT Madras and Founder of TheLibraryHub.",
    },
  ];
};

export default function Index() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Featured flagship
  const flagship = projects.find((p) => p.id === "thelibraryhub") || projects[0];
  // Selected other projects for homepage showcase
  const selectedProjects = projects.filter((p) => p.id !== "thelibraryhub").slice(0, 4);

  return (
    <div className="relative selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Hero section with parallax effect */}
      <div ref={targetRef} className="h-screen relative overflow-hidden flex items-center">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            y,
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
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles size={14} />
              Data Scientist &amp; Founder
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hi, I&apos;m <span className="text-emerald-400">Anurag Saroj</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              B.S. in Data Science &amp; Programming at{" "}
              <span className="text-zinc-200">IIT Madras</span> and Founder of{" "}
              <span className="text-zinc-200">TheLibraryHub</span>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href="/projects"
                className="group px-6 py-3.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>View Projects</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/contact"
                className="px-6 py-3.5 rounded-xl border border-zinc-700 text-zinc-200 font-medium flex items-center justify-center hover:border-zinc-500 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
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
              <p className="text-zinc-400 mb-4 leading-relaxed">
                I&apos;m a data scientist and programmer with a passion for creating innovative solutions
                that make a real-world impact. Currently pursuing my B.S. in Data Science and Programming
                at IIT Madras, I combine technical expertise with entrepreneurial vision.
              </p>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                As the founder of TheLibraryHub, I&apos;m building a platform that connects learners with
                the perfect study spaces while helping library owners manage their resources efficiently.
              </p>
              <a
                href="/about"
                className="inline-flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors group"
              >
                <span>Learn more about my journey</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-zinc-900 overflow-hidden relative border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent" />
                <img
                  src="/anu.jpg?height=600&width=600"
                  alt="Anurag Saroj"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-85"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl bg-zinc-800/90 backdrop-blur-md border border-zinc-700/80 p-6 flex flex-col justify-center shadow-xl">
                <div className="text-5xl font-bold text-emerald-400 mb-2">1+</div>
                <div className="text-zinc-300 text-sm">Years of experience in development and data science</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-900/50 border-y border-zinc-800/50">
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
              I specialize in data science, modern web engineering, and product development to build impactful solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              icon={<Database className="w-10 h-10 text-emerald-400" />}
              title="Data Science"
              description="Analyzing complex datasets to extract meaningful insights, build models, and drive data-informed decisions."
              delay={0}
            />
            <SkillCard
              icon={<Code className="w-10 h-10 text-emerald-400" />}
              title="Full-Stack Engineering"
              description="Building performant, responsive web apps using React, Next.js, Remix, Node.js, and cloud backends."
              delay={0.2}
            />
            <SkillCard
              icon={<Library className="w-10 h-10 text-emerald-400" />}
              title="Product Development"
              description="Creating user-centered products from concept and architecture to live deployment and operations."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Featured Flagship Project */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Flagship Startup
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Project: {flagship.title}</h2>
              <p className="text-zinc-400 max-w-2xl mt-2">
                {flagship.tagline}
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors group"
            >
              <span>Explore all projects ({projects.length})</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-2xl"
          >
            {/* Visual preview */}
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-2xl group">
                {/* Browser bar */}
                <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 font-mono truncate">
                    {flagship.link}
                  </div>
                  <a
                    href={flagship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                  <img
                    src={flagship.image}
                    alt={flagship.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  {flagship.category}
                </span>
                <h3 className="text-3xl font-bold mb-3">{flagship.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {flagship.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {flagship.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {flagship.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-zinc-800/90 border border-zinc-700/60 text-zinc-300 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={flagship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink size={18} />
                </a>
                <a
                  href="/projects"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-700 text-zinc-200 font-medium hover:border-zinc-500 transition-colors"
                >
                  <span>View All Projects</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Production Projects Showcase */}
      <section className="py-20 px-6 md:px-12 bg-zinc-900/30 border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">Other Production Works</h2>
              <p className="text-zinc-400 text-sm max-w-xl">
                Real-world web apps spanning CA software directories, global export portals, travel, and wellness.
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors group"
            >
              <span>See full showcase</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-70" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-zinc-950/80 border border-zinc-700/80 text-[10px] font-semibold text-emerald-300 uppercase">
                    Live
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-emerald-400 font-medium mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold group-hover:text-emerald-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-auto mb-4">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-emerald-500 text-zinc-200 hover:text-zinc-950 text-xs font-semibold transition-colors"
                  >
                    <span>Visit Site</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-emerald-500 text-zinc-200 hover:text-emerald-300 font-medium text-sm transition-all"
            >
              <span>View All {projects.length} Projects with Full Details</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-900/50 border-t border-zinc-800/60">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Get in Touch</span>
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
  delay,
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
      <p className="text-zinc-400 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}
