"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

/* GitHub icon */
function GithubIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.12 3.64 1.53.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

/* LinkedIn icon */
function LinkedinIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.98V9h2.95v9.45ZM6.46 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74h-2.95v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.68H9.26V9h2.83v1.29h.04a3.1 3.1 0 0 1 2.79-1.53c2.98 0 3.54 1.96 3.54 4.51v5.18Z" />
    </svg>
  );
}

/* Contact link types */
type ContactLink = {
  number: string;
  title: string;
  detail: string;
  value: string;
  href: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
  external: boolean;
};

/* Contact details */
const contactLinks: ContactLink[] = [
  {
    number: "01",
    title: "Email",
    detail: "Let's discuss an opportunity",
    value: "fabnaasiya22@gmail.com",
    href: "mailto:fabnaasiya22@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    number: "02",
    title: "GitHub",
    detail: "Explore my projects and code",
    value: "Fabna-Asiya-UA",
    href: "https://github.com/Fabna-Asiya-UA",
    icon: GithubIcon,
    external: true,
  },
 
{
  number: "03",
  title: "LinkedIn",
  detail: "Let's connect professionally",
  value: "Visit my LinkedIn profile",
  href: "https://www.linkedin.com/in/fabna-asiya-ua/",
  icon: LinkedinIcon,
  external: true,
},

];

const inputClass =
  "w-full border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-600 focus:border-violet-400/70 focus:bg-white/[0.04]";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const { name, email, subject, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please complete your name, email address, and message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const mailSubject = encodeURIComponent(
      subject.trim() || `Portfolio enquiry from ${name.trim()}`
    );

    const mailBody = encodeURIComponent(
      `Hello Fabna,\n\n${message.trim()}\n\nRegards,\n${name.trim()}\n${email.trim()}`
    );

    window.location.href =
      `mailto:fabnaasiya22@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  }

  return (
    <main
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-[#0b0b0e] text-white"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[140px]" />

        <div className="absolute -bottom-32 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-8 sm:px-8 sm:pt-12 lg:px-14">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-white/10 pb-6"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to portfolio
          </Link>

          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
            Contact
          </span>
        </motion.nav>

        {/* Hero and contact links */}
        <section className="grid gap-14 pb-16 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pb-24 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400" />

              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-zinc-400">
                <Sparkles size={14} className="text-violet-300" />
                Let's connect
              </span>
            </div>

            <h1 className="max-w-4xl text-[clamp(3.4rem,8vw,7.5rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
              Good work
              <span className="block text-zinc-500">starts with</span>
              <span className="block bg-gradient-to-r from-violet-300 via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                a conversation.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Have a job opportunity, a project idea, or simply want to
              talk about technology? I'd love to hear from you. Let's
              turn a good idea into something meaningful.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:fabnaasiya22@gmail.com"
                className="group inline-flex min-h-12 items-center gap-3 bg-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-purple-900 "
              >
                Start a conversation
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <span className="inline-flex items-center gap-2 text-xs text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to opportunities
              </span>
            </div>

            <div className="mt-14 border-t border-white/10 pt-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                What I enjoy
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Building useful web applications · Solving real problems ·
                Sharing knowledge
              </p>
            </div>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Find me here
              </p>

              <span className="text-xs text-zinc-600">01 — 03</span>
            </div>

            <div className="border-t border-white/10">
              {contactLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.number}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.2 + index * 0.1,
                    }}
                    className="group grid grid-cols-[32px_minmax(0,1fr)_24px] items-center gap-3 border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.025] sm:grid-cols-[38px_minmax(0,1fr)_24px] sm:gap-4 sm:py-7"
                  >
                    <span className="text-xs text-violet-300">
                      {item.number}
                    </span>

                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-base font-medium">
                        <Icon
                          size={17}
                          className="shrink-0 text-zinc-500 transition-colors group-hover:text-violet-300"
                        />
                        {item.title}
                      </span>

                      <span className="mt-1 block text-xs text-zinc-500">
                        {item.detail}
                      </span>

                      <span className="mt-3 block break-all text-sm text-zinc-300 transition-colors group-hover:text-violet-200">
                        {item.value}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-7 flex items-start gap-3 text-sm text-zinc-500">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-violet-300"
              />

              <span>
                Kerala, India 
              </span>
            </div>
          </motion.div>
        </section>

        {/* Contact form */}
        <section
          id="contact-form"
          className="border-t border-white/10 py-16 sm:py-20"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span className="text-xs uppercase tracking-[0.22em] text-violet-300">
                Have something in mind?
              </span>

              <h2 className="mt-5 max-w-md text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
                Tell me a little about it.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
                Share a few details below. Your email application will
                open with the message prepared, ready for you to review
                and send.
              </p>

              <div className="mt-10 flex items-center gap-3 text-sm text-zinc-500">
                <Mail size={17} className="text-violet-300" />
                Direct contact, no complicated steps.
              </div>

              <div className="mt-12 max-w-sm border-l border-violet-400/50 pl-5">
                <p className="text-sm leading-7 text-zinc-400">
                  "Every great project begins with a simple conversation
                  and a willingness to build something better."
                </p>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="border border-white/10 bg-white/[0.02] p-5 sm:p-8 lg:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs text-zinc-400"
                  >
                    Your name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs text-zinc-400"
                  >
                    Email address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs text-zinc-400"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration / Job opportunity"
                  className={inputClass}
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs text-zinc-400"
                >
                  Your message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Fabna, I'd like to discuss..."
                  className={`${inputClass} resize-y leading-7`}
                />
              </div>

              {error && (
                <p role="alert" className="mt-4 text-sm text-rose-300">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-violet-200 sm:w-auto"
              >
                Prepare email
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="mt-4 text-xs leading-5 text-zinc-600">
                Your email application opens with your message ready.
                Nothing is sent automatically by this website.
              </p>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="text-sm font-medium tracking-tight text-zinc-300 transition hover:text-white"
            >
              Fabna Asiya
              <span className="ml-2 text-zinc-600">/ Portfolio</span>
            </Link>

            <a
              href="#top"
              className="inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-white"
            >
              Back to top
              <ArrowDownRight size={15} className="-rotate-90" />
            </a>

           
          </div>
        </footer>
      </div>
    </main>
  );
}
