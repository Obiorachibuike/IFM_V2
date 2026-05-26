
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useSpring } from "framer-motion"
import { 
  Rocket, Shield, Trophy, Globe, 
  Cpu, Target, Zap, Coins, 
  TrendingUp, LayoutDashboard, 
  ArrowRight, Users, Sparkles,
  ChevronRight, Activity, Microscope,
  Network, BarChart3
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const roadmapPhases = [
  {
    id: "01",
    status: "LIVE PHASE",
    title: "FOUNDATION LAYER",
    desc: "The birth of the IFM universe. Establishing the core management protocols and early manager enrollment.",
    items: [
      "Ecosystem Brand Deployment",
      "Genesis Manager Enrollment",
      "Foundation Infrastructure Build",
      "Alpha Community Activation"
    ],
    icon: Shield,
    image: "ifm-genesis-banner",
    current: true,
    theme: "blue"
  },
  {
    id: "02",
    status: "Q1 2025",
    title: "GENESIS AWAKENING",
    desc: "Deployment of the tactical core. Managers begin building their initial squads and academy infrastructure.",
    items: [
      "Alpha Neural Match Engine",
      "Academy Prospect Generation",
      "Initial Squad Registration",
      "Tactical Hub v1.0 Launch"
    ],
    icon: Cpu,
    image: "tactical-board",
    current: false,
    theme: "gold"
  },
  {
    id: "03",
    status: "Q2 2025",
    title: "COMPETITIVE KICK-OFF",
    desc: "The global pyramid activates. Live divisions, real-time match operations, and the first seasonal rewards.",
    items: [
      "Division 8 League Start",
      "Real-time Match Operations",
      "Seasonal Reward Distribution",
      "Promotion/Relegation Launch"
    ],
    icon: Trophy,
    image: "match-engine-live",
    current: false,
    theme: "blue"
  },
  {
    id: "04",
    status: "Q3 2025",
    title: "ECOSYSTEM SCALING",
    desc: "Expanding the management suite. Marketplace activation and advanced player development systems.",
    items: [
      "Asset Marketplace Launch",
      "Advanced Training Protocols",
      "Stadium Evolution System",
      "Elite Player Card Minting"
    ],
    icon: Zap,
    image: "transfer-market-ui",
    current: false,
    theme: "gold"
  },
  {
    id: "05",
    status: "2026+",
    title: "THE GLOBAL EMPIRE",
    desc: "Full ecosystem maturity. A persistent, multi-tiered global football universe with esports-level infrastructure.",
    items: [
      "Global Championship Series",
      "Massive League Expansion",
      "Inter-Club DAO Governance",
      "VR Stadium Integration"
    ],
    icon: Globe,
    image: "hero-stadium",
    current: false,
    theme: "blue"
  }
]

export default function RoadmapPage() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const heroImg = PlaceHolderImages.find(i => i.id === "hero-stadium")

  return (
    <div ref={containerRef} className="flex flex-col w-full min-h-screen bg-[#05070D] font-body selection:bg-primary selection:text-white">
      
      {/* 1. CINEMATIC HERO - THE VISION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-background" />
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt="Roadmap Hero" 
              fill 
              className="object-cover opacity-20 grayscale brightness-50"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-transparent" />
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 radial-glow-gold opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="initial"
            animate="animate"
            className="flex flex-col items-center text-center space-y-12"
          >
            <motion.div variants={fadeIn}>
              <Badge className="bg-accent/10 text-accent border-accent/30 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full backdrop-blur-3xl glow-gold">
                Protocol Projection
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-[11rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]"
            >
              THE FUTURE <br />
              <span className="text-gradient-gold italic">UNFOLDING.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed opacity-80"
            >
              From foundation layers to a global football empire. Explore the strategic evolution of the IFM persistent universe as we build the next generation of management simulation.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 pt-10">
              <Button asChild size="lg" className="h-20 px-16 bg-accent hover:bg-accent/90 text-background font-bold rounded-2xl glow-gold text-xl uppercase tracking-widest">
                <Link href="#timeline">VIEW TIMELINE</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-16 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest backdrop-blur-xl">
                <Link href="/early-access">JOIN EARLY ACCESS</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Banner Overlay */}
        <div className="absolute top-24 right-12 hidden md:block text-right">
           <h4 className="text-2xl font-bold text-accent uppercase tracking-[0.4em] italic">STRATEGIC PROJECTION</h4>
           <p className="text-[10px] text-accent/40 uppercase tracking-widest mt-2">Cycle: Evolution_Target_2026</p>
        </div>
      </section>

      {/* 2. THE MASTER TIMELINE - VISUAL JOURNEY */}
      <section id="timeline" className="py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32 space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2">Evolution Path</Badge>
            <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">A LIVING <br /><span className="text-primary italic">PROGRESSION</span></h2>
          </div>

          <div className="relative">
            {/* Vertical Line Connector */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 hidden lg:block" />
            <motion.div 
              style={{ scaleY }}
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent hidden lg:block origin-top z-10"
            />

            <div className="space-y-48">
              {roadmapPhases.map((phase, i) => {
                const Icon = phase.icon
                const isEven = i % 2 === 0
                const phaseImg = PlaceHolderImages.find(img => img.id === phase.image)

                return (
                  <motion.div 
                    key={phase.id}
                    variants={fadeIn}
                    initial="initial"
                    whileInView="whileInView"
                    className={cn(
                      "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative",
                      isEven ? "lg:text-right" : "lg:text-left"
                    )}
                  >
                    {/* Phase Marker - Desktop */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 hidden lg:flex items-center justify-center">
                      <div className={cn(
                        "h-16 w-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-700 shadow-2xl",
                        phase.current ? "bg-primary scale-110 glow-blue" : "bg-card border-white/10"
                      )}>
                        <Icon className={cn("h-7 w-7", phase.current ? "text-white" : "text-white/30")} />
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className={cn(isEven ? "lg:order-1" : "lg:order-2")}>
                      <GlassCard 
                        className={cn(
                          "p-12 border-white/5",
                          phase.current && "border-primary/40 bg-primary/5"
                        )}
                        glowColor={phase.theme === "gold" ? "gold" : "blue"}
                      >
                        <div className={cn("space-y-8 flex flex-col", isEven ? "lg:items-end" : "lg:items-start")}>
                          <div className="flex items-center gap-6">
                            {!isEven && <span className="text-5xl font-headline font-bold text-primary/10 italic">0{i+1}</span>}
                            <div className={cn("flex flex-col", isEven ? "items-end" : "items-start")}>
                              <Badge className={cn(
                                "uppercase text-[10px] font-bold tracking-widest px-4 py-1",
                                phase.current ? "bg-primary text-white" : "bg-white/5 text-muted-foreground"
                              )}>
                                {phase.status}
                              </Badge>
                              <h3 className="text-4xl font-headline font-bold uppercase mt-2 tracking-tighter">{phase.title}</h3>
                            </div>
                            {isEven && <span className="text-5xl font-headline font-bold text-primary/10 italic">0{i+1}</span>}
                          </div>
                          <p className="text-xl text-muted-foreground font-light leading-relaxed">{phase.desc}</p>
                          <ul className={cn("space-y-4 w-full", isEven ? "lg:text-right" : "lg:text-left")}>
                            {phase.items.map((item, j) => (
                              <li key={j} className="flex items-center gap-4 text-sm font-medium text-white/80">
                                {!isEven && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                                <span className="flex-1">{item}</span>
                                {isEven && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassCard>
                    </div>

                    {/* Image Block */}
                    <div className={cn(isEven ? "lg:order-2" : "lg:order-1")}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                      >
                        <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden aspect-video relative group" hoverable={false}>
                          {phaseImg && (
                            <Image 
                              src={phaseImg.imageUrl} 
                              alt={phase.title} 
                              fill 
                              className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000" 
                              data-ai-hint={phaseImg.imageHint}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                          <div className="absolute bottom-8 left-8 right-8">
                            <div className="flex items-center gap-4">
                              <div className="h-1 w-12 bg-primary" />
                              <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">MODULE: {phase.title}</span>
                            </div>
                          </div>
                          <div className="absolute top-6 right-8">
                             <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Target ID: 0{phase.id}</span>
                          </div>
                        </GlassCard>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL VISION CTA */}
      <section className="py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-7xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.7] mb-12">
              SHAPE THE <br />
              <span className="text-gradient-blue italic">EVOLUTION.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="h-24 px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl glow-blue text-2xl uppercase tracking-[0.2em]">
                <Link href="/early-access" className="flex items-center gap-6">
                  SECURE YOUR CLUB <Rocket className="h-8 w-8" />
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground uppercase tracking-[0.5em] text-[10px] mt-12 font-bold opacity-60">Phase 1 enrollment is currently open for a limited window.</p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
