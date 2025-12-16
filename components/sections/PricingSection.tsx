const plans = [
  {
    title: 'Hourly Basis',
    price: '$34.99',
    cadence: '/ Per hour',
    description: 'Great for quick updates & small tasks.',
    features: ['35 hours working time in a week', 'Standard ratio', 'Bulk hours discount', 'Specialized services', '50% payment before work'],
  },
  {
    title: 'Project Based',
    price: '$600.00',
    cadence: '/ Per project',
    description: 'Best value for full UI/UX deliveries.',
    features: ['35 hours working time in a week', 'Standard ratio', 'Bulk hours discount', 'Specialized services', '50% payment before work'],
    popular: true,
  },
  {
    title: 'Full Time Job',
    price: '$1500.00',
    cadence: '/ Per month',
    description: 'Ongoing design support and iteration.',
    features: ['35 hours working time in a week', 'Standard ratio', 'Bulk hours discount', 'Specialized services', '50% payment before work'],
  },
];

export function PricingSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-muted">PRICING PLAN</p>
          <h2 className="text-3xl font-semibold leading-tight text-white">
            Pricing options that meets your
            <br />
            budget and needs
          </h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl border border-white/15 bg-white/5 p-6 shadow-glow glass-panel ${
                plan.popular ? 'border-purple/50 bg-gradient-to-b from-purple/20 via-white/5 to-white/5' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full border border-purple/50 bg-purple/30 px-3 py-1 text-[11px] tracking-[0.2em] text-white">
                  POPULAR
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
              <div className="mt-2 text-3xl font-bold text-white">
                {plan.price} <small className="align-top text-xs text-muted">{plan.cadence}</small>
              </div>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {plan.features.map((feat) => (
                  <li key={feat} className="list-disc pl-4">
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="mt-5 inline-flex w-full h-11 items-center justify-center rounded-full border border-purple/40 bg-gradient-to-r from-purple to-purple2 text-sm font-semibold shadow-pill transition hover:-translate-y-0.5">
                Start project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
