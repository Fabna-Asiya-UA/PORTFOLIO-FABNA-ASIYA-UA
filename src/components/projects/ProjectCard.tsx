import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const accents = [
  "from-violet-500/20 to-indigo-500/5",
  "from-cyan-500/20 to-blue-500/5",
  "from-emerald-500/15 to-teal-500/5",
];

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.75-1.31-3.75-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.61 5.23-5.1 5.5.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function ProjectCard({
  project,
  index = 0,
}: ProjectCardProps) {
  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/30">
      <div
        className={`relative flex min-h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${
          accents[index % accents.length]
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-black/20 text-violet-200 shadow-xl backdrop-blur-md transition duration-300 group-hover:scale-110">
          <Layers3 size={34} strokeWidth={1.4} />
        </div>

        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-zinc-300">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="muted-text mt-3 text-sm">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-white/[0.06] px-2.5 py-1.5 text-xs text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
          >
            <GitHubIcon size={16} />
            Source
            <ArrowUpRight size={13} />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-violet-200 transition hover:text-white"
            >
              Live demo
              <ArrowUpRight size={14} />
            </a>
          )}

          <Link
            href="/projects"
            className="ml-auto text-xs text-zinc-500 transition hover:text-violet-200"
          >
            Case study
          </Link>
        </div>
      </div>
    </article>
  );
}
