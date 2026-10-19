import { Braces, Database, PanelsTopLeft, Wrench } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import { skillGroups } from "@/data/skills";

const icons = [PanelsTopLeft, Braces, Database, Wrench];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding section-divider">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Tools I work with"
          description="A growing toolkit for building, testing, and improving full-stack applications."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];

            return (
              <article
                key={group.title}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-violet-200">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="font-medium text-white">{group.title}</h3>
                    <p className="muted-text mt-1 text-sm">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}