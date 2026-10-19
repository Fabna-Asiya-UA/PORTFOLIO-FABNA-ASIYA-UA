
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Download,
  Sparkles,
} from "lucide-react";

const technologies = [
  "Python",
  "Django",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-[#08090e] text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-700/15 blur-[130px]" />
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="container-custom mx-auto grid w-full items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-14">
        {/* Left: Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.07] px-4 py-2 text-sm text-violet-200"
          >
            <Sparkles size={15} />
            Full Stack Developer <span className="text-violet-400">·</span>{" "}
            Trainer
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-zinc-400 sm:text-sm"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.5rem]"
          >
            Fabna Asiya
            <span className="mt-1 block bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              UA.
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-5 text-xl font-medium leading-snug text-zinc-200 sm:text-2xl lg:text-3xl"
          >
            <span className="text-violet-400">Full Stack Developer</span>
            <span className="text-zinc-500"> &amp; Trainer</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            I build practical, responsive web applications using Python,
            Django, React, and Node.js. I enjoy turning real-world problems
            into useful digital products and helping others grow through
            technology.
          </motion.p>

          {/* Technologies */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex max-w-2xl flex-wrap gap-2"
          >
            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + index * 0.07, duration: 0.35 }}
                whileHover={{ y: -3, borderColor: "rgba(167,139,250,0.6)" }}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-zinc-300 transition-colors sm:text-sm"
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition duration-300 hover:-translate-y-1 hover:bg-violet-500"
            >
              Explore My Projects
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-zinc-200 transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-white/[0.04]"
            >
              Let&apos;s Connect
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="/FABNA ASIYA UA -FULLSTACK DEVELOPER.pdf"
              download="FABNA ASIYA UA -FULLSTACK DEVELOPER.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-violet-400/40 px-5 py-3 text-sm font-medium text-violet-200 transition duration-300 hover:-translate-y-1 hover:bg-violet-400/10"
            >
              <Download size={17} />
              Download Resume
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.a
            variants={itemVariants}
            href="https://github.com/Fabna-Asiya-UA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-violet-300"
          >
            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.25-1.63-1.25-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.3 3.6 1.61.1-.73.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.67.12 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.41.36.77 1.03.77 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
            Explore my GitHub
            <ArrowUpRight size={14} />
          </motion.a>

          {/* Small personal tagline */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex items-center gap-3 border-l-2 border-violet-500 pl-4 text-sm text-zinc-400"
          >
            <span>Always learning</span>
            <ArrowRight size={15} className="text-violet-400" />
            <span>Always building</span>
          </motion.div>
        </motion.div>

        {/* Right: Profile image and developer card */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg pb-5 pt-2"
        >
          {/* Decorative glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[90px] sm:h-96 sm:w-96"
          />

          {/* Photo frame */}
          <div className="relative mx-auto w-[min(78%,320px)]">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Decorative outline */}
              <div className="absolute -inset-2 rounded-t-[48%] rounded-b-2xl border border-violet-400/50" />
              <div className="absolute -inset-4 -z-10 rounded-t-[48%] rounded-b-3xl border border-violet-400/10" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-2xl border border-white/15 bg-[#15131f] shadow-[0_0_65px_rgba(139,92,246,0.17)]">
                <Image
                  src="/images/fabna.jpeg"
                  alt="Fabna Asiya UA, Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 78vw, 320px"
                  className="object-cover object-top"
                />

                {/* Subtle bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08090e]/70 to-transparent" />
              </div>
            </motion.div>

            {/* Photo caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-5 left-1/2 z-10 w-max -translate-x-1/2 rounded-full border border-white/10 bg-[#101018]/95 px-4 py-2 shadow-xl backdrop-blur"
            >
              <span className="flex items-center gap-2 text-xs text-zinc-300 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Building with purpose
              </span>
            </motion.div>
          </div>

          {/* Floating code card */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.65, duration: 0.65 }}
            whileHover={{ y: -5 }}
            className="relative z-10 mx-auto mt-12 w-full max-w-[390px] rounded-2xl border border-violet-400/25 bg-[#0e1018]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:-ml-2 sm:mt-10 sm:p-5"
          >
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-auto text-xs text-zinc-500">
                developer.py
              </span>
              <Code2 size={16} className="text-violet-300" />
            </div>

            <div className="overflow-x-auto py-4 font-mono text-xs leading-6 sm:text-sm">
              <p className="text-zinc-500"># A little about me</p>
              <p>
                <span className="text-violet-300">class</span>{" "}
                <span className="text-cyan-300">Developer</span>:
              </p>
              <p className="pl-4 text-zinc-300">def __init__(self):</p>
              <p className="whitespace-nowrap pl-8">
                <span className="text-sky-300">self.name</span>{" "}
                <span className="text-zinc-400">=</span>{" "}
                <span className="text-emerald-300">
                  &quot;Fabna Asiya UA&quot;
                </span>
              </p>
              <p className="whitespace-nowrap pl-8">
                <span className="text-sky-300">self.role</span>{" "}
                <span className="text-zinc-400">=</span>{" "}
                <span className="text-emerald-300">
                  &quot;Full Stack Developer&quot;
                </span>
              </p>
              <p className="whitespace-nowrap pl-8">
                <span className="text-sky-300">self.mindset</span>{" "}
                <span className="text-zinc-400">=</span>{" "}
                <span className="text-emerald-300">
                  &quot;Always learning&quot;
                </span>
              </p>
            </div>
          </motion.div>

          {/* Decorative side label */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-[18%] hidden -rotate-6 text-right md:block"
          >
            <p className="font-mono text-sm leading-7 text-violet-300">
              Build.
              <br />
              Create.
              <br />
              Teach.
            </p>
            <div className="ml-auto mt-2 h-px w-12 bg-violet-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about-preview"
        aria-label="Scroll to introduction"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-zinc-500 transition hover:text-violet-300 md:flex"
      >
        <ArrowDown size={16} />
        Scroll to explore
      </motion.a>
    </section>
  );
}
