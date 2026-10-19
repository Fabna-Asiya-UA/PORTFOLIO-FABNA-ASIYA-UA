import type { Metadata } from "next";
import { ArrowUpRight, GraduationCap, BriefcaseBusiness } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import { experiences } from "@/data/experience";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "About | Fabna Asiya",
  description: "Learn about Fabna Asiya's full-stack development experience, skills, and education.",
};

export default function AboutPage() {
  return (
    <div className="container-custom section-padding">
      <section className="mb-20">
        <p className="section-label">About me</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Developer, educator, and <span className="gradient-text">lifelong learner.</span>
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="muted-text space-y-5">
            <p>
              I&apos;m Fabna Asiya, a Computer Science graduate interested in
              building practical web applications and continuously improving
              my software development skills.
            </p>
            <p>
              My experience spans Python-based full-stack development and the
              MERN stack. I enjoy working across the frontend and backend,
              understanding how different parts of an application connect,
              and solving problems step by step.
            </p>
            <p>
              As a full-stack trainer, I also help learners develop their
              programming knowledge through explanations, exercises, and
              project work.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <GraduationCap className="text-violet-200" size={25} />
            <h2 className="mt-4 text-lg font-semibold">Education</h2>
            <p className="mt-2 text-sm text-zinc-300">
              B.Sc. Computer Science
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              College of Applied Science (IHRD), Vattamkulam
            </p>
            <a
              href="https://github.com/Fabna-Asiya-UA"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-violet-200 hover:text-white"
            >
              View GitHub profile <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-divider py-16">
        <SectionHeading
          eyebrow="My journey"
          title="Experience"
          description="My professional journey through development and technical training."
        />

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200">
                    <BriefcaseBusiness size={20} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{experience.role}</h3>
                    <p className="mt-1 text-sm text-violet-200">
                      {experience.company}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {experience.location}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-zinc-400">
                  {experience.period}
                </span>
              </div>

              <p className="muted-text mt-5 text-sm">
                {experience.description}
              </p>

              <ul className="mt-4 space-y-3">
                {experience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-zinc-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-divider py-16">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills and technologies"
          description="Technologies I use or have worked with across my development projects."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-medium text-white">{group.title}</h3>
              <p className="muted-text mt-2 text-sm">{group.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}