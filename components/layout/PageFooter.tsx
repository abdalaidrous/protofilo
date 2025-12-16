export function PageFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 border-t border-white/10 px-4 pb-8 pt-5 text-sm text-muted md:flex-row md:items-center">
      <p>© 2024 by Intuitive Pixel. All rights reserved</p>
      <div className="flex gap-4">
        <a href="#home" className="hover:text-white">Home</a>
        <a href="#about" className="hover:text-white">About Me</a>
        <a href="#contact" className="hover:text-white">Contact</a>
        <a href="#blog" className="hover:text-white">Blog</a>
      </div>
    </footer>
  );
}
