import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-white.svg"
        alt="NuvemLED"
        width={160}
        height={22}
        priority
      />
    </Link>
  );
}
