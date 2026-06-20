import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { Rocket, Github, Linkedin, Mail, Star, Orbit, Satellite, Telescope, Sparkles, Moon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshaya.G — AI & Software Engineer in the Cosmos" },
      { name: "description", content: "Aspiring AI & Software engineer building RAG systems, intelligent search and backend tooling — exploring the universe of code." },
      { property: "og:title", content: "Akshaya.G — AI & Software Engineer" },
      { property: "og:description", content: "RAG systems, intelligent search, and backend tooling — built among the stars." },
    ],
  }),
  component: Index,
});

const stack = [
  { icon: Rocket, label: "Languages", count: 2, items: ["Python", "Java"] },
  { icon: Sparkles, label: "AI / ML", count: 7, items: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "RAG"] },
  { icon: Orbit, label: "Frameworks", count: 3, items: ["LangChain", "LangGraph", "FastAPI"] },
  { icon: Satellite, label: "Tools", count: 5, items: ["Docker", "Git", "Jupyter", "Postman", "Colab"] },
  { icon: Telescope, label: "Databases", count: 2, items: ["MongoDB", "MySQL"] },
];

const experience = [
  { when: "Jan 2026 — Apr 2026", role: "Software & AI Intern", org: "Eigensecure Services LLC", bullets: ["Built RAG-based AI systems, intelligent search workflows and automation pipelines.", "Explored vector / vector-less search techniques and backend integration."] },
  { when: "Jan 2026 — Feb 2026", role: "AI & Cloud Computing Intern", org: "SuprMentr Technologies", bullets: ["Developed an AI-powered image classification system in Python.", "Owned preprocessing, model training, testing and evaluation."] },
  { when: "Oct 2025 — Dec 2025", role: "Data Science Intern", org: "KodNest", bullets: ["Built predictive ML mini-projects with Scikit-Learn.", "Performed preprocessing, feature analysis and visualization."] },
];

const projects = [
  { n: "01", name: "RDSO Document Management", tech: "Flutter · FastAPI", body: "Secure mobile app for railway internal file access outside Railnet — authentication, role-based access, versioning, tuned for low-connectivity use." },
  { n: "02", name: "Academic Risk Prediction", tech: "Python · Scikit-Learn", body: "ML classifier predicting student academic risk. Full pipeline from feature engineering through evaluation." },
  { n: "03", name: "AI Smart Parking System", tech: "Python · OpenCV · RFID", body: "Intelligent parking with RFID auth and OpenCV verification. Automated vehicle ID and slot monitoring." },
];

function RoverLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Solar panel */}
      <rect x="10" y="8" width="44" height="10" rx="1.5" fill="currentColor" fillOpacity="0.15" />
      <line x1="22" y1="8" x2="22" y2="18" />
      <line x1="32" y1="8" x2="32" y2="18" />
      <line x1="42" y1="8" x2="42" y2="18" />
      {/* Mast */}
      <line x1="32" y1="8" x2="32" y2="3" />
      <circle cx="32" cy="3" r="1.5" fill="currentColor" />
      {/* Body */}
      <rect x="16" y="18" width="32" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
      {/* Suspension */}
      <path d="M20 30 L16 40 M20 30 L26 40 M44 30 L40 40 M44 30 L48 40 M32 30 L32 40" />
      {/* Wheels */}
      <circle cx="16" cy="40" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="26" cy="40" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="40" cy="40" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="48" cy="40" r="4" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-primary">{n}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Index() {
  const { scrollYProgress, scrollY } = useScroll();
  const planet1Y = useTransform(scrollY, [0, 2000], [0, -400]);
  const planet2Y = useTransform(scrollY, [0, 2000], [0, 300]);
  const planet1Rot = useTransform(scrollY, [0, 3000], [0, 60]);
  return (
    <div className="relative min-h-screen text-foreground">
      <div className="starfield" />

      {/* Scroll progress bar */}
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[oklch(0.68_0.18_30)] via-[oklch(0.55_0.16_25)] to-[oklch(0.4_0.12_20)]"
      />

      {/* Floating planets */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-32 right-[8%] z-0 h-40 w-40 rounded-full opacity-70"
        style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.75 0.16 40), oklch(0.45 0.16 25) 60%, oklch(0.12 0.03 20))", boxShadow: "0 0 60px oklch(0.45 0.16 25 / 0.4)", y: planet1Y, rotate: planet1Rot }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed bottom-40 left-[5%] z-0 h-24 w-24 rounded-full opacity-60"
        style={{ background: "radial-gradient(circle at 35% 35%, oklch(0.65 0.12 50), oklch(0.35 0.1 30) 70%, oklch(0.1 0.02 20))", boxShadow: "0 0 40px oklch(0.4 0.12 30 / 0.4)", y: planet2Y }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-40 backdrop-blur-md border-b border-border/40 bg-background/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 text-foreground">
            <RoverLogo className="h-8 w-8 text-primary" />
            <span className="font-mono font-bold tracking-widest">AKSHAYA.G</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-wider text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#stack" className="hover:text-primary transition-colors">Stack</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Bengaluru · AI + Software · 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 text-6xl md:text-8xl font-black uppercase leading-[0.95]"
            >
              Hey, I'm<br />
              <span className="text-aurora">Akshaya.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              Building AI systems and backend software for people who need answers, not complexity.
              Motivated by curiosity, guided by engineering, and always looking a little further over the horizon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.68_0.18_30)] to-[oklch(0.45_0.16_25)] px-6 py-3 font-semibold text-primary-foreground glow-ring transition-transform hover:-translate-y-0.5">
                <Rocket className="h-4 w-4 transition-transform group-hover:rotate-12" /> Let's launch
              </a>
              <a href="https://github.com/g-akshaya" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-foreground transition-colors hover:border-primary">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/akshaya-g-a63486280" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-foreground transition-colors hover:border-primary">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Engineer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass relative rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Star className="h-3 w-3 fill-current" /> Mission Log
            </div>
            <p className="mt-4 text-foreground/90 leading-relaxed">
              ISE undergrad at Acharya Institute of Technology. Working across AI systems, backend infra and healthcare-adjacent workflows.
            </p>
            <div className="mt-6 space-y-2 font-mono text-sm">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-3 py-2">
                <span className="text-primary">LANG</span>
                <span className="text-muted-foreground">Python, Java</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-3 py-2">
                <span className="text-primary">DOMAIN</span>
                <span className="text-muted-foreground">AI/ML, Backend</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-3 py-2">
                <span className="text-primary">CGPA</span>
                <span className="text-muted-foreground">8.2 / 10</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-background/40 p-4">
                <div className="font-black text-3xl text-aurora">2nd</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Best paper · ICCP 2026</div>
              </div>
              <div className="rounded-xl border border-border bg-background/40 p-4">
                <div className="font-black text-3xl text-aurora">3×</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">INTERNSHIPS COMPLETED</div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About */}
      <Section id="about" n="01" title="About">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold uppercase">I like things that reveal themselves slowly.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Trails make more sense the further you walk them. Strength comes from repetition. The night sky rewards patience. Software systems aren't much different.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              That's what drew me to AI, backend engineering, and building tools that solve real problems. I enjoy finding patterns in complex systems and turning them into something useful.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Outside the editor, you'll usually find me on a trek, in the gym, sketching ideas, or looking up.
            </p>
            <p className="mt-4 font-mono text-sm text-primary">Still chasing good questions.</p>
          </div>
          <div className="glass rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-primary">// what keeps me looking up</div>
              <blockquote className="mt-6 text-2xl font-light italic leading-snug text-foreground">
                "Somewhere, something incredible is waiting to be known."
              </blockquote>
              <div className="mt-3 font-mono text-sm text-muted-foreground">— Carl Sagan</div>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                The best projects usually start the same way: with a question I can't stop thinking about.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-primary">
              <Star className="h-4 w-4 fill-current" />
              <Moon className="h-5 w-5" />
              <Sparkles className="h-4 w-4" />
              <span className="font-mono text-xs text-muted-foreground">a question · a trail · a clear night sky.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Stack */}
      <Section id="stack" n="02" title="Stack">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-border bg-background/50 p-2.5 text-primary group-hover:text-accent transition-colors">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold uppercase tracking-wide">{s.label}</h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{String(s.count).padStart(2, "0")}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-xs text-foreground/80">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" n="03" title="Experience">
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-10"
              >
                <div className={`md:text-right ${i % 2 === 0 ? "" : "md:order-2 md:text-left"}`}>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">{e.when}</div>
                  <h3 className="mt-2 text-xl font-bold uppercase">{e.role}</h3>
                  <div className="font-mono text-sm text-muted-foreground">{e.org}</div>
                </div>
                <div className={`mt-4 md:mt-0 ${i % 2 === 0 ? "" : "md:order-1"}`}>
                  <div className="glass rounded-2xl p-5">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2"><span className="text-primary">↳</span>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <Rocket className="h-3 w-3 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" n="04" title="Projects">
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl bg-gradient-to-br from-[oklch(0.75_0.2_320)] to-[oklch(0.6_0.2_220)] transition-opacity group-hover:opacity-40" />
              <div className="font-mono text-xs text-primary">PROJECT_{p.n}</div>
              <h3 className="mt-3 text-xl font-bold uppercase leading-tight">{p.name}</h3>
              <div className="mt-1 font-mono text-xs text-muted-foreground">{p.tech}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Education & Wins */}
      <Section id="wins" n="05" title="Education & Wins">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"><Telescope className="h-4 w-4" /> Education</div>
            <h3 className="mt-4 text-xl font-bold">B.E. Information Science Engineering</h3>
            <p className="mt-1 font-mono text-sm text-muted-foreground">Acharya Institute of Technology · 2022–2026 · CGPA 8.2</p>
            <div className="mt-6 border-t border-border pt-6">
              <h4 className="font-bold">Navkis Educational Centre</h4>
              <p className="mt-1 font-mono text-sm text-muted-foreground">Grade 12: 73% · Grade 10: 79%</p>
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"><Star className="h-4 w-4 fill-current" /> Achievements</div>
            <ul className="mt-4 space-y-3">
              {[
                "2nd Best Paper Award — ICCP 2026",
                "Python for Data Science — Anaconda",
                "Introduction to OpenShift Applications — Red Hat",
                "President, Nature Watch Club",
              ].map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5">★</span>
                  <span className="text-foreground/85">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" n="06" title="Contact">
        <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.22 320 / 0.4), transparent 70%)" }} />
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
            Let's build <span className="text-aurora">something curious.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Open to AI / ML / Backend roles &amp; collaborations.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:akshaya@example.com" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.68_0.18_30)] to-[oklch(0.45_0.16_25)] px-6 py-3 font-semibold text-primary-foreground glow-ring">
              <Mail className="h-4 w-4" /> Send a transmission
            </a>
            <a href="https://github.com/g-akshaya" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-foreground hover:border-primary transition-colors">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/akshaya-g-a63486280" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-foreground hover:border-primary transition-colors">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </Section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
        <div className="flex items-center gap-2"><RoverLogo className="h-5 w-5 text-primary" /> AKSHAYA.G · 2026</div>
        <div>Made among the stars ✦</div>
      </footer>
    </div>
  );
}
