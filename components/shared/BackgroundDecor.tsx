export function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-100">
      <span className="blob absolute -left-44 top-16 h-[520px] w-[520px] bg-[radial-gradient(circle_at_30%_30%,rgba(139,44,255,0.45),rgba(139,44,255,0)_60%),radial-gradient(circle_at_70%_70%,rgba(210,27,255,0.3),rgba(210,27,255,0)_55%)]" />
      <span className="blob absolute -right-60 top-52 h-[620px] w-[620px] bg-[radial-gradient(circle_at_30%_30%,rgba(139,44,255,0.38),rgba(139,44,255,0)_60%),radial-gradient(circle_at_70%_70%,rgba(210,27,255,0.35),rgba(210,27,255,0)_55%)] opacity-[0.85]" />
      <span className="blob absolute left-[12%] -bottom-72 h-[720px] w-[720px] bg-[radial-gradient(circle_at_30%_30%,rgba(139,44,255,0.32),rgba(139,44,255,0)_60%),radial-gradient(circle_at_70%_70%,rgba(210,27,255,0.28),rgba(210,27,255,0)_55%)] opacity-70" />
      <span className="grid-mask absolute inset-0 opacity-25 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:80px_80px]" />
    </div>
  );
}
