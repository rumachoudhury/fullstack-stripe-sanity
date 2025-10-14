import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  children?: React.ReactNode;
  className?: string;
}
function Logo({ children, className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <h2
        className={cn(
          "text-2xl text-darkColor font-black tracking-wider upercase"
        )}
      >
        {children}
      </h2>
    </Link>
  );
}

export default Logo;
