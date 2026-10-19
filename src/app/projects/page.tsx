import type { Metadata } from "next";
import SectionHeading from "@/components/sections/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Fabna Asiya",
  description: "Explore full-stack development projects by Fabna Asiya.",
};

export default function ProjectsPage() {
  return (
    <div className="container-custom section-padding">
      <SectionHeading
        eyebrow="Portfolio"
        title="Things I've been building."
        description="Explore projects focused on practical problems, thoughtful user experiences, and full-stack development."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <section className="section-divider mt-20 pt-12">
        <h2 className="text-2xl font-semibold text-white">
          More projects and code
        </h2>
        <p className="muted-text mt-3 max-w-2xl text-sm">
          Visit my GitHub profile to explore my repositories, source code, and
          future projects.
        </p>
        <a
          href="https://github.com/Fabna-Asiya-UA"
          target="_blank"
          rel="noreferrer"
          className="button-secondary mt-6"
        >
          Explore GitHub <ArrowUpRight size={16} />
        </a>
      </section>
    </div>
  );
}