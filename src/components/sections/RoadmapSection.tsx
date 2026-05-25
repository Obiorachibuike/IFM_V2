"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Rocket, Shield, Trophy, Globe } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const roadmapPhases = [
  {
    phase: "01",
    status: "LIVE PHASE",
    title: "FOUNDATION LAYER",
    items: [
      "Ecosystem Brand Launch",
      "Founding Manager Community",
      "Phase 1 Early Access Enrollment",
      "Strategic Infrastructure Build"
    ],
    icon: Shield,
    current: true
  },
  {
    phase: "02",
    status: "UPCOMING",
    title: "GENESIS AWAKENING",
    items: [
      "Whitelisted Club License Mint",
      "Alpha Match Engine Launch",
      "Ecosystem Staking Activation",
      "Pro-League Squad Registration"
    ],
    icon: Rocket,
    current: false
  },
  {
    phase: "03",
    status: "Q2 2025",
    title: "COMPETITIVE KICK-OFF",
    items: [
      "Official Season 1 Start",
      "Reward Payouts Enabled",
      "DAO Governance Voting",
      "Manager Treasury Integration"
    ],
    icon: Trophy,
    current: false
  }
]

export function RoadmapSection() {
  return (
    <section className="py-32 relative bg-card/20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">
            Strategic Timeline
          </Badge>
          <h2 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
            THE PATH TO <br /><span className="text-accent italic">DOMINANCE</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Connector */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-white/5 to-transparent hidden lg:block -translate-x-1/2" />

          <div className="space-y-24">
            {roadmapPhases.map((phase, i) => {
              const Icon = phase.icon
              const isEven = i % 2 === 0
              return (
                <div key={i} className="relative">
                  {/* Central Hub */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 hidden lg:flex items-center justify-center">
                    <div className={cn(
                      "h-16 w-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-700 shadow-2xl",
                      phase.current ? "bg-primary scale-110 glow-blue" : "bg-card border-white/10"
                    )}>
                      <Icon className={cn("h-7 w-7", phase.current ? "text-white" : "text-white/30")} />
                    </div>
                  </div>

                  <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center",
                    isEven ? "lg:text-right" : "lg:text-left"
                  )}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={cn(isEven ? "order-1" : "lg:order-2")}
                    >
                      <GlassCard 
                        className={cn(
                          "p-10 border-white/5",
                          phase.current && "border-primary/40 bg-primary/5"
                        )}
                        hoverable={true}
                      >
                        <div className={cn("flex flex-col gap-6", isEven ? "lg:items-end" : "lg:items-start")}>
                          <div className="flex items-center gap-4">
                            {!isEven && <span className="text-3xl font-headline font-bold text-primary/20">PHASE {phase.phase}</span>}
                            <Badge className={cn(
                              "px-4 py-1.5 uppercase text-[10px] font-bold tracking-[0.2em]",
                              phase.current ? "bg-primary text-white" : "bg-white/5 text-muted-foreground border-white/10"
                            )}>
                              {phase.status}
                            </Badge>
                            {isEven && <span className="text-3xl font-headline font-bold text-primary/20">PHASE {phase.phase}</span>}
                          </div>
                          
                          <h3 className="text-3xl font-bold font-headline uppercase leading-none tracking-tighter">{phase.title}</h3>
                          
                          <ul className={cn("space-y-3 text-muted-foreground font-light", isEven ? "lg:text-right" : "lg:text-left")}>
                            {phase.items.map((item, j) => (
                              <li key={j} className="flex items-center gap-3 lg:justify-end even:lg:justify-start">
                                {isEven ? (
                                  <>
                                    <span>{item}</span>
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0 hidden lg:block" />
                                  </>
                                ) : (
                                  <>
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                                    <span>{item}</span>
                                  </>
                                )}
                                <div className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0 lg:hidden" />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassCard>
                    </motion.div>
                    
                    <div className={cn("hidden lg:block h-32 relative", isEven ? "order-2" : "order-1")}>
                       <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}