interface LedGridPatternProps {
  variant?: "dark" | "light" | "accent";
  className?: string;
}

const VARIANT_COLORS = {
  dark: "rgba(255,255,255,0.08)",
  light: "rgba(20,16,126,0.06)",
  accent: "rgba(135,2,161,0.1)",
} as const;

export function LedGridPattern({ variant = "dark", className = "" }: LedGridPatternProps) {
  const fill = VARIANT_COLORS[variant];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none animate-led-pulse ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`led-${variant}`}
          x="0"
          y="0"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <rect x="2" y="2" width="4" height="4" rx="1" fill={fill} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#led-${variant})`} />
    </svg>
  );
}
