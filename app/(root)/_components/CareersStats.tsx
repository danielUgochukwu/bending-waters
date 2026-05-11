// FILE: components/sections/careers/CareersStats.tsx
// Three key figures displayed as a horizontal stat row.
// Used inside CareersContent.tsx.

const STATS = [
  { value: "50+", label: "Team Members" },
  { value: "6+", label: "Years Building" },
  { value: "3", label: "African Markets" },
] as const;

const CareersStats = () => {
  return (
    <div
      data-reveal
      className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
    >
      {STATS.map(({ value, label }) => (
        <div key={label} className="flex flex-col gap-1.5">
          <span className="text-3xl md:text-4xl font-black text-primary tracking-tight leading-none">
            {value}
          </span>
          <span className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CareersStats;
