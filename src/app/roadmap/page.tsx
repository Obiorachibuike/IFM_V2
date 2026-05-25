
"use client"

import * as React from "react"
import Image from "next/image"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { CheckCircle2, Clock, MapPin, Rocket, Shield, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const roadmapPhases = [
  {
    phase: "Phase 1: Foundation",
    status: "Completed",
    title: "Brand & Community Launch",
    items: [
      "Whitepaper release and core game design",
      "Official website launch and ecosystem showcase",
      "Discord and social community building",
      "Initial investor round and strategic partnerships"
    ],
    icon: Shield,
    current: false
  },
  {
    phase: "Phase 2: Genesis",
    status: "In Progress",
    title: "NFT Club Mint & Marketplace",
    items: [
      "Genesis NFT Club License mint (Phase 1)",
      "Marketplace launch for club transfers",
      "Manager staking system v1",
      "Early Access Alpha for club owners"
    ],
    icon: Rocket,
    current: true
  },
  {
    phase: "Phase 3: Kick-off",
    status: "Upcoming",
    title: "League Competitions & DAO",
    items: [
      "Official League v1 season start",
      "DAO Governance implementation",
      "Performance-based reward pool activation",
      "Integration of $IFM token utility"
    ],
    icon: Trophy,
    current: false
  },
  {
    phase: "Phase 4: Expansion",
    status: "Planned",
    title: "Esports & International Growth",
    items: [
      "Mobile companion app release",
      "Global esports championship series",
      "Cross-chain asset interoperability",
      "Real-world franchise partnerships"
    ],
    icon: MapPin,
    current: false
  }
]

export default function RoadmapPage() {
  const roadmapHero = PlaceHolderImages.find(i => i.id === "roadmap-visual")

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={roadmapHero?.imageUrl || ""} 
            alt="Roadmap" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-6"
          >
            <Badge className="bg-secondary/20 text-secondary border-secondary/30">ECOSYSTEM ROADMAP</Badge>
            <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-none">
              THE FUTURE OF <br />
              <span className="text-secondary italic">FOOTBALL</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              From genesis mint to global esports dominance. Follow our journey as we build the world's premier blockchain football manager.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary/50 via-secondary/20 to-transparent hidden lg:block -translate-x-1/2" />

          <div className="space-y-32">
            {roadmapPhases.map((phase, i) => {
              const Icon = phase.icon
              const isEven = i % 2 === 0
              return (
                <div key={i} className="relative">
                  {/* Circle Marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 hidden lg:flex items-center justify-center">
                    <div className={cn(
                      "h-12 w-12 rounded-full border-4 border-background flex items-center justify-center transition-all duration-500",
                      phase.current ? "bg-secondary scale-125 glow-blue" : phase.status === 'Completed' ? "bg-emerald-500" : "bg-card border-white/10"
                    )}>
                      {phase.status === 'Completed' ? <CheckCircle2 className="h-6 w-6 text-white" /> : <Icon className="h-6 w-6 text-white" />}
                    </div>
                  </div>

                  <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24",
                    isEven ? "lg:text-right" : "lg:text-left"
                  )}>
                    {/* Content Block */}
                    <div className={cn(isEven ? "order-1" : "lg:order-2")}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <GlassCard 
                          className={cn(
                            "p-8 border-white/10",
                            phase.current && "border-secondary/50 glow-blue bg-secondary/5"
                          )}
                        >
                          <div className={cn("flex flex-col gap-4", isEven ? "lg:items-end" : "lg:items-start")}>
                            <Badge className={cn(
                              "w-fit",
                              phase.status === 'Completed' ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : 
                              phase.current ? "bg-secondary text-white" : "bg-white/5 text-muted-foreground border-white/10"
                            )}>
                              {phase.phase} • {phase.status}
                            </Badge>
                            <h3 className="text-3xl font-bold font-headline uppercase leading-none">{phase.title}</h3>
                            <ul className={cn("space-y-3 mt-4 text-muted-foreground", isEven ? "lg:text-right" : "lg:text-left")}>
                              {phase.items.map((item, j) => (
                                <li key={j} className="flex items-center gap-3 lg:justify-end even:lg:justify-start">
                                  {isEven ? (
                                    <>
                                      <span>{item}</span>
                                      <div className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0 hidden lg:block" />
                                    </>
                                  ) : (
                                    <>
                                      <div className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                                      <span>{item}</span>
                                    </>
                                  )}
                                  <div className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0 lg:hidden" />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </GlassCard>
                      </motion.div>
                    </div>
                    {/* Empty Space for LG */}
                    <div className="hidden lg:block" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 bg-card/20 relative">
        <div className="container mx-auto px-4 text-center max-w-4xl space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter uppercase leading-none mb-8">
              BEYOND THE <br /><span className="text-secondary italic">HORIZON</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <GlassCard className="p-8 border-white/5 bg-white/5">
                <h4 className="text-xl font-bold mb-4 uppercase">AI Management Systems</h4>
                <p className="text-muted-foreground leading-relaxed">Implementing deep learning agents for advanced tactical analysis and scouting recommendations.</p>
              </GlassCard>
              <GlassCard className="p-8 border-white/5 bg-white/5">
                <h4 className="text-xl font-bold mb-4 uppercase">VR Stadium Experiences</h4>
                <p className="text-muted-foreground leading-relaxed">Immersive pitch-side view for managers to watch matches live in 3D virtual environments.</p>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
