const skills = ['C++', 'AI', 'JS', 'Xd', 'Ps', 'Py', 'Figma'];

export function StorySection() {
  return (
    <section id="resume" className="section-spacing">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-glow glass-panel">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="grid h-14 place-items-center rounded-xl border border-white/15 bg-black/40 text-sm font-semibold text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-glow glass-panel">
          <p className="text-xs tracking-[0.3em] text-muted">STORY OF NATALIYA</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-white">Designing Experiences, Building Connections</h2>
          <p className="mt-3 text-base text-muted">
            Hey there! I’m Nataliya, and I’m all about creating experiences that make a difference. I blend strategy, visual craft,
            and interaction design to build products people love.
          </p>
          <a
            className="mt-4 inline-flex h-11 items-center justify-center rounded-full border border-purple/40 bg-gradient-to-r from-purple to-purple2 px-5 text-sm font-semibold shadow-pill transition hover:-translate-y-0.5"
            href="#contact"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
