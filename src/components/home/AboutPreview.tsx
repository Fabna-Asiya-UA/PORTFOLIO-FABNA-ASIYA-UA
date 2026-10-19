import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Lightbulb } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building frontend experiences, backend APIs, and database-driven applications.",
  },
  {
    icon: BookOpen,
    title: "Teaching & Learning",
    description:
      "Helping learners understand programming concepts through practical examples and projects.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Breaking challenges into manageable steps and improving solutions through iteration.",
  },
];

export default function AboutPreview() {
  return (
    <section id="about-preview" className="section-padding section-divider">
      <div className="container-custom">
        <SectionHeading
          eyebrow="A little about me"
          title="Code with curiosity. Build with purpose."
          description="I enjoy exploring technologies, building practical applications, and sharing what I learn through teaching."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glass-card rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/10 text-violet-200">
                <Icon size={21} />
              </div>

              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="muted-text mt-3 text-sm">{description}</p>
            </article>
          ))}
        </div>

        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-white"
        >
          More about me <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}