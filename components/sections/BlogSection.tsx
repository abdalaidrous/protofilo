const posts = [
  {
    title: 'How to become a good designer',
    date: '📅 12th June, 2023',
    excerpt: 'Learn fundamentals, practice daily, and sharpen your taste.',
    background: "bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=70')]",
  },
  {
    title: 'Best Practices for Inclusive UX',
    date: '📅 21st Dec, 2023',
    excerpt: 'Design for accessibility and build for everyone.',
    background: "bg-[url('https://images.unsplash.com/photo-1529336953121-a0b1dfc8bd87?auto=format&fit=crop&w=1200&q=70')]",
  },
  {
    title: 'Effective Personas for Better Decisions',
    date: '📅 20th Aug, 2023',
    excerpt: 'Make user needs concrete and actionable.',
    background: "bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=70')]",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="section-spacing">
      <div className="mx-auto max-w-6xl px-4">
        <div>
          <p className="text-xs tracking-[0.3em] text-muted">BLOG</p>
          <h2 className="text-3xl font-semibold leading-tight text-white">A journey to the science of UI/UX design</h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-glow transition hover:-translate-y-1"
            >
              <div className={`h-44 bg-cover bg-center ${post.background}`} />
              <div className="p-4">
                <div className="text-xs text-muted">{post.date}</div>
                <h3 className="mt-2 text-base font-semibold text-white">{post.title}</h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
