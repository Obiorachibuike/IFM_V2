import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "blue" | "gold" | "none"
  hoverable?: boolean
  variant?: "default" | "blue"
}

export function GlassCard({
  className,
  children,
  glowColor = "none",
  hoverable = true,
  variant = "default",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] transition-all duration-500 overflow-hidden",
        variant === "default" ? "glass" : "glass-blue",
        hoverable && "hover:-translate-y-3 hover:border-secondary/40 hover:shadow-2xl",
        glowColor === "blue" && "glow-blue",
        glowColor === "gold" && "glow-gold",
        className
      )}
      {...props}
    >
      {/* Subtle internal gradient sweep */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      {children}
    </div>
  )
}