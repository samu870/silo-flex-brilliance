import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/siloflex";

type Variant = "solid" | "light" | "outline";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-cta)]",
  light:
    "bg-background text-primary hover:bg-secondary shadow-[var(--shadow-soft)]",
  outline:
    "border-2 border-primary/25 bg-transparent text-primary hover:border-primary/60 hover:bg-secondary",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5 text-sm",
  lg: "px-8 py-4.5 text-base",
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
        "group inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
