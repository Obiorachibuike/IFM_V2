
import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "blue" | "gold" | "green" | "none"
  hoverable?: boolean
  variant?: "default" | "surface"
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
        "relative rounded-[2rem] transition-all duration-700 overflow-hidden border border-white/10",
        variant === "default" ? "glass" : "bg-ifm-surface/60 backdrop-blur-3xl",
        hoverable && "hover:-translate-y-3 hover:border-primary/50 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]",
        glowColor === "blue" && "glow-blue",
        glowColor === "gold" && "glow-gold",
        glowColor === "green" && "glow-green",
        className
      )}
      {...props}
    >
      {/* Subtle internal gradient sweep */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Tactical UI Corners */}
      <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-white/20 pointer-events-none" />
      <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-white/20 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-b-2 border-l-2 border-white/20 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-white/20 pointer-events-none" />
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  )
}
