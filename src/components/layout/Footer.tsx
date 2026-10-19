
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUp, ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.12 3.64 1.53.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="section-divider relative overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[90px]"
      />

      <div className="container-custom relative flex flex-col items-center justify-between gap-6 py-9 sm:flex-row">
        {/* Brand */}
        <motion.div
          whileHover={{ x: 3 }}
          transition={{ duration: 0.25 }}
          className="text-center sm:text-left"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 transition-colors duration-300 hover:text-violet-200"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-300/[0.08] text-xs font-bold text-violet-200 transition-all duration-300 group-hover:border-violet-300/50 group-hover:bg-violet-300/15">
              F.
            </span>
            Fabna Asiya UA
          </Link>

          <p className="mt-2 text-xs text-zinc-500">
            Building useful digital experiences.
          </p>
        </motion.div>

        {/* Footer links */}
        <div className="flex items-center gap-5 text-sm text-zinc-400">
          <Link
            href="/projects"
            className="group relative py-2 transition-colors duration-300 hover:text-white"
          >
            Projects
            <span className="absolute bottom-0 left-0 h-px w-0 bg-violet-300 transition-all duration-300 group-hover:w-full" />
          </Link>

          <motion.a
            href="https://github.com/Fabna-Asiya-UA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-violet-200 hover:shadow-[0_0_20px_rgba(167,139,250,0.12)]"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="#top"
            aria-label="Back to top"
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-violet-200"
          >
            <ArrowUp
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>

        
      </div>

      {/* Bottom accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
    </motion.footer>
  );
}
