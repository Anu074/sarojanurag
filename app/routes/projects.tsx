"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TheLibraryHub",
      description:
        "A platform connecting learners with libraries and study spaces, while providing library owners with tools to manage their spaces efficiently.",
      image: "height=600&width=800",
      link: "https://thelibraryhub.in",
      github: "#",
      featured: true,
      tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 2,
      title: "Social media plateform",
      description:
        "A dynamic social media platform designed for seamless connectivity, engagement, and content sharing.",
      image: "/image2.png?height=600&width=800",
      link: "https://socialplate-e615e.web.app/",
      github: "#",
      featured: false,
      tags: ["React", "firebase", "Tailwind"],
    },
    {
      id: 3,
      title: "Machine Learning Model",
      description: "A predictive model using advanced machine learning algorithms to forecast trends and behaviors.",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
      github: "#",
      featured: false,
      tags: ["TensorFlow", "Keras", "Python", "Data Visualization"],
    },
    {
      id: 4,
      title: "Web Analytics Dashboard",
      description: "An interactive dashboard for visualizing and analyzing web traffic and user behavior data.",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
      github: "#",
      featured: false,
      tags: ["React", "D3.js", "Firebase", "Tailwind CSS"],
    },
  ]

  const featuredProject = projects.find((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-zinc-400 mb-8">
              A showcase of my work in data science, programming, and product development. Each project represents a
              unique challenge and solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured project section */}
      {featuredProject && (
        <section className="px-6 md:px-12 py-12 md:py-24 bg-zinc-900/50">
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
                My flagship project that showcases the best of my skills and expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl overflow-hidden"></div>
                <iframe
                    src="https://thelibraryhub.in"
                    title="TheLibraryHub"
                    className="w-full h-[500px] rounded-xl"
                    allowFullScreen
                ></iframe>
                </div>

              <div>
                <div className="text-emerald-400 font-medium mb-2">Featured Project</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredProject.title}</h3>
                <p className="text-zinc-400 mb-6">{featuredProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-zinc-900 font-medium hover:bg-emerald-400 transition-colors"
                  >
                    Visit Website
                    <ExternalLink size={18} />
                  </a>
                  {/* <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 text-zinc-200 font-medium hover:border-zinc-500 transition-colors"
                  >
                    View Code
                    <Github size={18} />
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other projects section */}
      <section className="px-6 md:px-12 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Projects</h2>
            <p className="text-zinc-400 max-w-2xl">
              A collection of my other notable projects across various domains and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 md:px-12 py-12 md:py-24 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              I'm always looking for new challenges and opportunities to collaborate on interesting projects.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-emerald-500 text-zinc-900 font-medium hover:bg-emerald-400 transition-colors"
            >
              Let's Discuss
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({
  project,
  delay,
}: {
  project: {
    id: number
    title: string
    description: string
    image: string
    link: string
    github: string
    tags: string[]
  }
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-emerald-500/30 transition-colors"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 z-10"></div>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-300 hover:bg-emerald-500 hover:text-zinc-900 transition-colors"
            aria-label="Visit website"
          >
            <ExternalLink size={14} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-300 hover:bg-emerald-500 hover:text-zinc-900 transition-colors"
            aria-label="View code on GitHub"
          >
            <Github size={14} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
        <p className="text-zinc-400 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs">+{project.tags.length - 3}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

