export function CtaSection() {
  return (
    <section id="contact" className="pb-16 pt-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-purple/50 bg-gradient-to-r from-purple to-purple2 p-6 shadow-[0_30px_80px_rgba(139,44,255,0.22)] lg:flex-row lg:items-center">
          <h2 className="text-3xl font-semibold leading-tight text-white">Have a project?
            <br />Let’s talk.</h2>
          <div className="max-w-xl text-white/85">
            <p className="text-base">
              Let’s chat and turn your ideas into reality. What’s your website, mobile app, or dashboard?
            </p>
            <button className="mt-4 inline-flex h-11 items-center justify-center rounded-full border border-white/40 bg-white/20 px-5 text-sm font-semibold transition hover:-translate-y-0.5">
              Make a call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
