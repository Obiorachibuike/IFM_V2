
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
        "relative rounded-2xl transition-all duration-300 overflow-hidden",
        variant === "default" ? "glass" : "glass-blue",
        hoverable && "hover:-translate-y-2 hover:border-white/20",
        glowColor === "blue" && "glow-blue",
        glowColor === "gold" && "glow-gold",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
