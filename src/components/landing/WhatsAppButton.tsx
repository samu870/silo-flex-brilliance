import type { ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/siloflex";
import { cn } from "@/lib/utils";

type Variant = "solid" | "light" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-primary-deep",
  light: "bg-background text-primary hover:bg-background/90",
  outline:
    "border border-primary/30 text-primary hover:border-primary hover:bg-secondary",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.7rem]",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

export function WhatsAppButton({
  children,
  variant = "solid",
  size = "md",
  className,
  icon,
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-[0.14em] uppercase transition-colors duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {icon}
      {children}
    </a>
  );
}
