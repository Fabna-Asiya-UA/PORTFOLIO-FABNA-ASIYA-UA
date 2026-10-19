import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="section-padding section-divider">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-500/10 via-white/[0.025] to-cyan-500/5 p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[90px]" />

          <div className="relative max-w-2xl">
            <p className="section-label">Have an idea?</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something meaningful.
            </h2>

            <p className="muted-text mt-5 max-w-xl">
              Have a project in mind, an opportunity to discuss, or simply want
              to connect? I&apos;d be happy to hear from you.
            </p>

            <Link href="/contact" className="button-primary mt-8">
              <Mail size={17} /> Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}