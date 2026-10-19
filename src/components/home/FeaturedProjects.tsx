import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding section-divider">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects with purpose."
            description="A selection of projects exploring education, civic technology, and service marketplaces."
          />

          <Link
            href="/projects"
            className="mb-10 inline-flex shrink-0 items-center gap-2 text-sm text-violet-200 transition hover:text-white"
          >
            All projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}