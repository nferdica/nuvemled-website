import Link from "next/link";

type LogoVariant = "white" | "blue" | "black";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  showText?: boolean;
}

const variantColors: Record<LogoVariant, string> = {
  white: "#FFFFFF",
  blue: "#14107E",
  black: "#000000",
};

export function Logo({ variant = "white", className = "", showText = true }: LogoProps) {
  const color = variantColors[variant];

  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.5 10.5C32.5 10.5 32 5 27 3C22 1 18.5 4 18.5 4C18.5 4 16 0 11 1C6 2 5 7 5 7C5 7 0 8 0 13.5C0 19 4.5 21 4.5 21H33C33 21 40 20 40 14C40 8 32.5 10.5 32.5 10.5Z"
          fill={color}
        />
      </svg>
      {showText && (
        <span
          className="text-xl font-bold tracking-tight"
          style={{ color }}
        >
          nuvemled
        </span>
      )}
    </Link>
  );
}
