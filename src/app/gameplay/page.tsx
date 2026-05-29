
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Shield, Target, Activity, Cpu, Trophy, Zap, 
  Play, LayoutDashboard, Microscope, Network,
  ArrowRight, Users, Sparkles, ChevronRight,
  History, BarChart3, Coins, Rocket, Gauge, Database
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

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
}

export default function GameplayPage() {
  const matchEngineImg = PlaceHolderImages.find(i => i.id === "match-engine-live")
  const tacticsImg = PlaceHolderImages.find(i => i.id === "tactical-board")
  const heroImg = PlaceHolderImages.find(i => i.id === "gameplay-hero")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "reward-flow-visual")
  const academyImg = PlaceHolderImages.find(i => i.id === "academy-reveal")
  const devTreeImg = PlaceHolderImages.find(i => i.id === "development-tree")

  return (
    <div className="flex flex-col w-full bg-background font-body selection:bg-primary selection:text-white">
      
      {/* 1. HERO - THE COMMAND CENTER */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt="IFM Universe" 
              fill 
              className="object-cover opacity-30 grayscale-[0.2] brightness-[0.4]"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 radial-glow-blue opacity-40" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl text-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeIn}>
              <Badge className="bg-primary/10 text-primary border-primary/30 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full backdrop-blur-3xl glow-blue">
                Tactical Intelligence v2.4
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]"
            >
              LEARN TO <br />
              <span className="text-gradient-blue italic">COMMAND.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed opacity-80"
            >
              Build squads, set tactics, develop players, compete in leagues, and earn rewards—all in a living football universe.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 pt-10">
              <Button asChild size="lg" className="h-20 px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl uppercase tracking-widest">
                <Link href="/early-access">START YOUR CLUB</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-20 px-16 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest backdrop-blur-xl">
                <Link href="#loop">VIEW PROTOCOLS</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Banner Overlay */}
        <div className="absolute top-24 left-12 hidden md:block">
           <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.5em]">Command Center Protocol: Operational</span>
        </div>
      </section>

      {/* 2. CORE GAME LOOP - THE PROGRESSION CYCLE */}
      <section id="loop" className="py-48 relative border-y border-white/5 bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Temporal Loop</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE CYCLE OF <br /><span className="text-gradient-gold italic">DOMINANCE.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  IFM is a persistent progression universe. Every win on the pitch fuels your club's infrastructure, which in turn develops your squad for higher-stakes competition.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Play & Compete", desc: "Participate in daily league fixtures and tournaments." },
                    { title: "Earn Rewards", desc: "Performance yields $IFM from the global treasury." },
                    { title: "Upgrade Club", desc: "Invest in facilities, stadium, and scouting networks." },
                    { title: "Develop Talent", desc: "Train players and evolve your academy prospects." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-accent/30 transition-all">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                        <div className="font-headline font-bold">0{i+1}</div>
                      </div>
                      <div>
                        <div className="font-bold text-lg uppercase tracking-tight">{step.title}</div>
                        <div className="text-sm text-muted-foreground font-light">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-square" hoverable={false}>
                  {rewardsImg && (
                    <Image src={rewardsImg.imageUrl} alt="Game Loop" fill className="object-cover opacity-60" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="p-8 bg-black/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 space-y-6">
                        <Badge className="bg-accent text-background font-bold px-6 py-2">LIVE PROGRESSION MOCK</Badge>
                        <div className="flex justify-between items-end">
                           <div>
                              <div className="text-[10px] text-accent font-bold uppercase mb-1">Seasonal Yield</div>
                              <div className="text-4xl font-bold font-headline text-white">42,500 $IFM</div>
                           </div>
                           <div className="text-right">
                              <div className="text-[10px] text-muted-foreground font-bold uppercase">Club Level</div>
                              <div className="text-2xl font-bold text-accent">LVL 14</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-12 right-12">
                     <h4 className="text-xl font-bold text-white uppercase tracking-[0.4em] italic bg-accent text-background px-4 py-1">SYSTEM CYCLE: ACTIVE</h4>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SQUAD BUILDING - THE MANAGER'S DESK */}
      <section className="py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
              <div className="space-y-12">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Tactical Deployment</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">ELITE SQUAD <br /><span className="text-gradient-blue italic">ARCHITECTURE.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  You have absolute control. Define your tactical identity through complex formation settings, player roles, and chemistry protocols.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Formations", desc: "Deploy classic or custom shapes.", icon: LayoutDashboard },
                    { title: "Player Roles", desc: "Assign specific tactical duties.", icon: Target },
                    { title: "Chemistry", desc: "Link players for performance boosts.", icon: Zap },
                    { title: "Squad Depth", desc: "Manage fatigue across 2 fixtures.", icon: Users }
                  ].map((feat, k) => (
                    <div key={k} className="space-y-3">
                       <div className="flex items-center gap-3">
                          <feat.icon className="h-5 w-5 text-primary" />
                          <span className="font-bold uppercase tracking-tight text-sm">{feat.title}</span>
                       </div>
                       <p className="text-xs text-muted-foreground font-light">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-[16/10]" hoverable={false}>
                  {tacticsImg && (
                    <Image src={tacticsImg.imageUrl} alt="Tactical Board" fill className="object-cover" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                     <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] bg-primary px-4 py-1">TACTICAL INTERFACE: HUD_SQUAD_V2</span>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-7xl md:text-[12rem] font-bold font-headline tracking-tighter uppercase leading-[0.7] mb-12">
              BUILD YOUR <br />
              <span className="text-gradient-blue italic">DYNASTY.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="h-24 px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl glow-blue text-2xl uppercase tracking-[0.2em]">
                <Link href="/early-access" className="flex items-center gap-6">
                  CLAIM YOUR CLUB <Rocket className="h-8 w-8" />
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground uppercase tracking-[0.5em] text-[10px] mt-12 font-bold opacity-60">Phase 1 Manager Enrollment is Active.</p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
