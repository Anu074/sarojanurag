import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from 'lucide-react';
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleHoverStart = () => setCursorHover(true);
  const handleHoverEnd = () => setCursorHover(false);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-950 text-zinc-100 font-syne selection:bg-emerald-500/30 selection:text-emerald-50">
        {/* Custom cursor - hidden on mobile */}
        <div className="hidden md:block">
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400 z-50 pointer-events-none mix-blend-difference"
            animate={{
              x: cursorPosition.x - 16,
              y: cursorPosition.y - 16,
              scale: cursorHover ? 1.5 : 1,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
          />
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-400 z-50 pointer-events-none mix-blend-difference"
            animate={{
              x: cursorPosition.x - 4,
              y: cursorPosition.y - 4,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 500, mass: 0.2 }}
          />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="fixed top-6 right-6 z-50 p-2 md:hidden"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="fixed top-0 left-0 w-full py-8 px-12 hidden md:flex justify-between items-center z-40">
          <motion.a
            href="/"
            className="text-xl font-bold tracking-tighter"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-emerald-400">A</span>nurag
          </motion.a>
          <div className="flex gap-12">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                currentPath={location.pathname}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Mobile navigation overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-zinc-950/95 z-40 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center gap-8">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Projects", path: "/projects" },
                  { name: "Contact", path: "/contact" },
                ].map((item, index) => (
                  <motion.a
                    key={item.path}
                    href={item.path}
                    className={`text-3xl font-medium ${
                      location.pathname === item.path
                        ? "text-emerald-400"
                        : "text-zinc-300 hover:text-white"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-12 px-6 md:px-12 border-t border-zinc-800/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-emerald-400">A</span>nurag Saroj
              </h3>
              <p className="text-zinc-400 max-w-xs">
                Data science student, programmer, and founder building TheLibraryHub that connect learners with perfect study spaces and also makes it easy to manage it for library owners.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="/" className="hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="/projects" className="hover:text-emerald-400 transition-colors">Projects</a></li>
                <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                  <SocialLink href="https://github.com/Anu074" label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/anurag-saroj-17114526b/" label="LinkedIn" />
                  <SocialLink href="https://www.youtube.com/@anuragsaroj7" label="YouTube" />
              </div>
              <p className="mt-6 text-zinc-500 text-sm">
                © {new Date().getFullYear()} Anurag Saroj. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function NavLink({ 
  to, 
  children, 
  onHoverStart, 
  onHoverEnd,
  currentPath
}: { 
  to: string; 
  children: React.ReactNode; 
  onHoverStart: () => void; 
  onHoverEnd: () => void;
  currentPath: string;
}) {
  const isActive = currentPath === to;
  
  return (
    <motion.a
      href={to}
      className="relative text-lg font-medium"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      whileHover={{ y: -2 }}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-emerald-400"
        initial={{ width: isActive ? "100%" : "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
      aria-label={label}
    >
      {label === "GitHub" && "GH"}
      {label === "LinkedIn" && "LI"}
      {label === "YouTube" && "YT"}
    </a>
  );
}

export default function App() {
  return <Outlet />;
}
