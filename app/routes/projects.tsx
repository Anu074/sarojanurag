import type { MetaFunction } from "@remix-run/node";
import { useState, useMemo } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects & Production Applications | Anurag Saroj" },
    {
      name: "description",
      content:
        "Explore production platforms, SaaS applications, and community tools built by Anurag Saroj, including TheLibraryHub, cadir, Askravi, Safar-e-Ibadat, and CrystIndia.",
    },
  ];
};
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Sparkles,
  Search,
  CheckCircle2,
  Monitor,
  Layers,
  X,
  Maximize2
} from "lucide-react";
import { projects, projectCategories, type Project } from "~/data/projects";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFeaturedId, setActiveFeaturedId] = useState<string>("thelibraryhub");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [showLiveIframe, setShowLiveIframe] = useState<boolean>(false);

  // Featured project selection
  const featuredProjects = useMemo(() => projects.filter((p) => p.featured), []);
  const currentFeatured = useMemo(
    () => featuredProjects.find((p) => p.id === activeFeaturedId) || featuredProjects[0],
    [featuredProjects, activeFeaturedId]
  );

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-24 min-h-screen text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Hero section */}
      <section className="px-6 md:px-12 pt-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Crafted Products &amp;{"Live Deployments "}
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
              A curated collection of production platforms, community directories, and SaaS applications I have built and deployed. Each project addresses real user needs with intuitive design and scalable architecture.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                  <Globe size={18} />
                </div>
                <div>
                  <div className="text-xl font-bold text-zinc-100">100%</div>
                  <div className="text-xs text-zinc-400">Live &amp; Accessible</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                  <Layers size={18} />
                </div>
                <div>
                  <div className="text-xl font-bold text-zinc-100">{projects.length} Apps</div>
                  <div className="text-xs text-zinc-400">Shipped Projects</div>
                </div>
              </div>
              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                  <Monitor size={18} />
                </div>
                <div>
                  <div className="text-xl font-bold text-zinc-100">Full-Stack</div>
                  <div className="text-xs text-zinc-400">React, Next &amp; Cloud</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project Showcase */}
      {currentFeatured && (
        <section className="px-6 md:px-12 py-12 bg-zinc-900/40 border-y border-zinc-800/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Flagship Spotlight
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Featured Production Work</h2>
              </div>

              {/* Selector between featured projects */}
              <div className="flex items-center gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-xl self-start md:self-auto">
                {featuredProjects.map((fProj) => (
                  <button
                    key={fProj.id}
                    onClick={() => {
                      setActiveFeaturedId(fProj.id);
                      setShowLiveIframe(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeFeaturedId === fProj.id
                      ? "bg-emerald-500 text-zinc-950 font-semibold shadow-md shadow-emerald-500/20"
                      : "text-zinc-400 hover:text-zinc-200"
                      }`}
                  >
                    {fProj.title}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={currentFeatured.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8"
            >
              {/* Browser mockup visual */}
              <div className="lg:col-span-7">
                <div className="rounded-xl overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-2xl">
                  {/* Browser top bar */}
                  <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 max-w-sm px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 truncate text-center font-mono">
                      {currentFeatured.link}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowLiveIframe(!showLiveIframe)}
                        className={`text-xs px-2.5 py-1 rounded-md border transition-colors flex items-center gap-1.5 ${showLiveIframe
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50"
                          : "bg-zinc-800/80 text-zinc-400 border-zinc-700 hover:text-zinc-200"
                          }`}
                        title="Toggle live frame preview"
                      >
                        <Monitor size={12} />
                        <span className="hidden sm:inline">
                          {showLiveIframe ? "View Screenshot" : "Live Frame"}
                        </span>
                      </button>
                      <a
                        href={currentFeatured.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-emerald-400 transition-colors"
                        title="Open in new window"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Mockup content: Screenshot or Interactive Iframe */}
                  <div className="relative aspect-[16/10] bg-zinc-950 flex items-center justify-center overflow-hidden group">
                    {showLiveIframe ? (
                      <iframe
                        src={currentFeatured.link}
                        title={currentFeatured.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    ) : (
                      <>
                        <img
                          src={currentFeatured.image}
                          alt={currentFeatured.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
                        <button
                          onClick={() => setPreviewProject(currentFeatured)}
                          className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200 flex items-center gap-1.5 backdrop-blur-sm transition-all shadow-lg"
                        >
                          <Maximize2 size={13} />
                          Enlarge
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Info column */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                      {currentFeatured.category}
                    </span>
                    {currentFeatured.stats && (
                      <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">
                        {currentFeatured.stats.label}:{" "}
                        <strong className="text-zinc-100">{currentFeatured.stats.value}</strong>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-100">
                    {currentFeatured.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400/90 mb-4">
                    {currentFeatured.tagline}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {currentFeatured.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6">
                    {currentFeatured.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {currentFeatured.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-zinc-800/90 border border-zinc-700/60 text-zinc-300 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={currentFeatured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold transition-all shadow-lg shadow-emerald-500/20"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects Filter & Grid Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Explore All Projects</h2>
              <p className="text-zinc-400 text-sm max-w-xl">
                Browse through all production applications, categorized by industry domain and technology stack.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tags..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-emerald-500 focus:outline-none text-sm text-zinc-200 placeholder-zinc-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {projectCategories.map((category) => {
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${selectedCategory === category
                    ? "bg-emerald-500 text-zinc-950 font-semibold shadow-md shadow-emerald-500/10"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${selectedCategory === category
                      ? "bg-zinc-950/20 text-zinc-950 font-bold"
                      : "bg-zinc-800 text-zinc-400"
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center bg-zinc-900/40 border border-zinc-800/80 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-3 text-zinc-500">
                  <Search size={22} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-200 mb-1">No projects matched</h3>
                <p className="text-zinc-500 text-sm mb-4">
                  Try adjusting your search query or selecting a different category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 transition-colors"
                >
                  Reset filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    delay={index * 0.08}
                    onOpenPreview={() => setPreviewProject(project)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Modal Quick View */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
            >
              {/* Modal header */}
              <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between sticky top-0 bg-zinc-900 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                    {previewProject.category}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <h3 className="text-lg font-bold text-zinc-100">{previewProject.title}</h3>
                </div>
                <button
                  onClick={() => setPreviewProject(null)}
                  className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal image preview */}
              <div className="p-6">
                <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-inner mb-6">
                  <img
                    src={previewProject.image}
                    alt={previewProject.title}
                    className="w-full h-auto max-h-[500px] object-cover object-top"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-zinc-100 mb-1">{previewProject.title}</h4>
                    <p className="text-sm font-medium text-emerald-400">{previewProject.tagline}</p>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {previewProject.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Key Highlights &amp; Capabilities
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {previewProject.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300"
                        >
                          <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Technologies &amp; Architecture
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {previewProject.tags.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="p-6 pt-3 border-t border-zinc-800 flex items-center justify-end gap-3 sticky bottom-0 bg-zinc-900">
                <button
                  onClick={() => setPreviewProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 hover:border-zinc-500 text-xs font-medium transition-colors"
                >
                  Close Preview
                </button>
                <a
                  href={previewProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
                >
                  <span>Open Live Site</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA section */}
      <section className="px-6 md:px-12 py-20 bg-zinc-900/40 border-t border-zinc-800/60">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
              <Sparkles size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have an Idea or Need a Product Built?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto text-base">
              I specialize in rapid development from concept to full production deployment, combining data-driven architecture with clean, responsive user experiences.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 group"
            >
              <span>Let&apos;s Build Together</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
  delay,
  onOpenPreview
}: {
  project: Project;
  delay: number;
  onOpenPreview: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay }}
      className="bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col h-full"
    >
      {/* Thumbnail with overlay & controls */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Live status badge */}
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 border border-zinc-700/80 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider">
            Live
          </span>
        </div>

        {/* Quick action buttons */}
        <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5">
          <button
            onClick={onOpenPreview}
            className="w-8 h-8 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
            title="Quick Preview"
          >
            <Maximize2 size={13} />
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-emerald-500 hover:text-zinc-950 hover:border-emerald-500 transition-colors"
            title="Visit Website"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Category tag on image bottom */}
        <div className="absolute bottom-3 left-3.5 z-20">
          <span className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-[11px] font-medium text-emerald-400 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-400 font-medium line-clamp-1 mt-0.5">
            {project.tagline}
          </p>
        </div>

        <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-1.5 mb-5 mt-auto pt-2 border-t border-zinc-800/60">
          {project.highlights.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 text-[11px] font-mono border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-zinc-800/60 text-zinc-400 text-[11px] font-mono">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Card bottom button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-emerald-500 text-zinc-200 hover:text-zinc-950 text-xs font-semibold transition-all duration-200 group/btn"
        >
          <span>Visit Website</span>
          <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
