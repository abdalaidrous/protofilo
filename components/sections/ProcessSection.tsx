const steps = [
  { icon: '💡', title: 'Brainstorming', body: 'Quickly map ideas, explore directions, and pick the strongest concept.' },
  { icon: '🔎', title: 'Research', body: 'Validate assumptions with user insight, competitors, and context.' },
  { icon: '🎨', title: 'Design', body: 'Build clean UI, strong hierarchy, and a consistent design system.' },
  { icon: '🧪', title: 'Design Test', body: 'Iterate with feedback, refine flows, and polish the final details.' },
];

export function ProcessSection() {
  return (
    <section id="about" className="section-spacing">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-end gap-4 lg:grid-cols-[1.2fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.3em] text-muted">WORKING PROCESS</p>
            <h2 className="text-3xl font-semibold leading-tight text-white">To design with perfect strategy</h2>
          </div>
          <p className="text-base text-muted">
            In my working process, I dive into a whirlwind of ideas, research, and design, crafting digital experiences that
            resonate.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-glow glass-panel transition hover:-translate-y-1"
            >
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-purple/40 bg-purple/20 text-lg">
                {step.icon}
              </div>
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
