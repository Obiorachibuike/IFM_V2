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
        "relative rounded-[2rem] transition-all duration-700 overflow-hidden",
        variant === "default" ? "glass" : "glass-blue",
        hoverable && "hover:-translate-y-4 hover:border-secondary/50 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]",
        glowColor === "blue" && "glow-blue",
        glowColor === "gold" && "glow-gold",
        className
      )}
      {...props}
    >
      {/* Subtle internal gradient sweep */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Tactical UI Corners */}
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 pointer-events-none" />
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20 pointer-events-none" />
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  )
}