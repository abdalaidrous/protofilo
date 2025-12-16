export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Protofilio · Crafted with Next.js</span>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:hello@portfolio.dev">Email</a>
      </div>
    </footer>
  );
}
