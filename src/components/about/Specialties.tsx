const SPECIALTIES = [
  "Projeto arquitetônico",
  "Projeto de retrofit",
  "Projeto luminotécnico",
  "Projeto elétrico",
  "Projeto hidráulico",
  "Projeto paisagístico",
  "Projeto de piscinas",
];

export function Specialties() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-serif-display text-2xl">O que faço</h2>
      <ul className="grid grid-cols-1 border-b border-[var(--color-line)] sm:grid-cols-2">
        {SPECIALTIES.map((item) => (
          <li
            key={item}
            className="border-t border-[var(--color-line)] py-4 text-base text-[var(--color-ink-soft)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
