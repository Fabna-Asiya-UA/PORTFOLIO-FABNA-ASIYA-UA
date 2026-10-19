
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#08090d]/85 backdrop-blur-2xl"
    >
      <nav className="container-custom flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <motion.span
            whileHover={{ scale: 1.08, rotate: -5 }}
            whileTap={{ scale: 0.94 }}
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-violet-300/25 bg-violet-300/[0.08] font-bold text-violet-200 transition-colors duration-300 group-hover:border-violet-300/70 group-hover:bg-violet-300/15"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">F.</span>
          </motion.span>

          <span className="font-semibold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-violet-200">
            Fabna Asiya UA
            <span className="ml-2 hidden text-xs font-normal text-zinc-500 sm:inline">
              / Portfolio
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.08, duration: 0.35 }}
            >
              <Link
                href={link.href}
                className="group relative py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-300 to-cyan-300 transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            </motion.div>
          ))}

          <motion.a
            href="https://github.com/Fabna-Asiya-UA"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-violet-300/25 bg-violet-300/[0.08] px-4 py-2 text-sm font-medium text-violet-100 transition-all duration-300 hover:border-violet-300/60 hover:bg-violet-300/15 hover:shadow-[0_0_24px_rgba(167,139,250,0.12)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">GitHub</span>
            <ArrowUpRight
              size={15}
              className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-white/10 p-2 text-zinc-200 transition-colors duration-300 hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-violet-200 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Animated mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.08] bg-[#08090d]/95 md:hidden"
          >
            <div className="container-custom flex flex-col gap-1 px-5 py-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045, duration: 0.22 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm text-zinc-300 transition-all duration-300 hover:bg-violet-300/[0.07] hover:pl-5 hover:text-violet-200"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={15}
                      className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-200"
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="https://github.com/Fabna-Asiya-UA"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.22 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 flex items-center justify-between rounded-xl border border-violet-300/20 bg-violet-300/[0.06] px-3 py-3 text-sm text-violet-200 transition-colors duration-300 hover:bg-violet-300/[0.12]"
              >
                Visit GitHub
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
