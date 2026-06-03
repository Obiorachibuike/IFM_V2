"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Target, Activity, Cpu, LayoutDashboard, Microscope, 
  Zap, Users, BarChart3, Rocket, Gauge, Database, 
  Milestone, Landmark
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

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
  const heroImg = PlaceHolderImages.find(i => i.id === "gameplay-hero")

  // Updated IDs for non-hero sections
  const loopImg = PlaceHolderImages.find(i => i.id === "game-loop-visual")
  const tacticsImg = PlaceHolderImages.find(i => i.id === "tactical-interface")
  const engineImg = PlaceHolderImages.find(i => i.id === "simulation-engine")
  const academyImg = PlaceHolderImages.find(i => i.id === "academy-infrastructure")
  const devTreeImg = PlaceHolderImages.find(i => i.id === "development-matrix")

  return (
    <div className="flex flex-col w-full bg-background font-body selection:bg-primary selection:text-white overflow-x-hidden">

      {/* 1. HERO - THE COMMAND CENTER */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0 w-full h-full">
          {heroImg && (
            <Image src={heroImg.imageUrl} alt="IFM Universe" fill priority className="object-cover w-full h-full opacity-60 md:opacity-70" />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,7,13,0.3)_0%,rgba(5,7,13,0.8)_90%)] bg-background/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-6 md:space-y-12 bg-black/40 backdrop-blur-md py-8 md:py-16 rounded-2xl md:rounded-3xl border border-white/5 shadow-2xl max-w-5xl mx-auto px-4 md:px-8"
          >
            <motion.div variants={fadeIn}>
              <Badge className="bg-white/5 text-white border-white/10 px-4 md:px-10 py-2 uppercase tracking-[0.4em] md:tracking-[0.8em] text-[9px] md:text-[10px] font-bold rounded-full backdrop-blur-xl">
                Tactical Intelligence v2.4
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-bold font-headline tracking-tighter uppercase leading-[1] md:leading-[0.9] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            >
              LEARN TO <br />
              <span className="text-gradient-blue italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                COMMAND.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-sm sm:text-base md:text-2xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed px-2 md:px-0 drop-shadow-md"
            >
              Build squads, set tactics, develop players, compete in leagues, and earn rewards—all in a living football universe.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-2 md:pt-6 w-full sm:w-auto px-4 sm:px-0">
              <Button asChild size="lg" className="h-14 md:h-20 px-8 md:px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl md:rounded-2xl glow-blue text-base md:text-xl uppercase tracking-widest w-full sm:w-auto shadow-lg">
                <Link href="/early-access">START YOUR CLUB</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 md:h-20 px-8 md:px-16 border-white/20 hover:bg-white/10 text-white font-bold rounded-xl md:rounded-2xl text-base md:text-xl uppercase tracking-widest backdrop-blur-xl w-full sm:w-auto shadow-lg">
                <Link href="#loop">VIEW PROTOCOLS</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-6 md:pt-16 border-t border-white/10 w-full max-w-4xl">
              {[
                { label: "Active Clubs", value: "85,420" },
                { label: "Matches Played", value: "1.2M+" },
                { label: "Players Developed", value: "3.5M" },
                { label: "Rewards Paid", value: "4.8M $IFM" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest font-bold">{stat.label}</div>
                  <div className="text-lg md:text-3xl font-bold text-white mt-1">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE GAME LOOP */}
      <section id="loop" className="py-24 md:py-48 relative border-y border-white/5 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-6 md:space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-4 md:px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Temporal Loop</Badge>
                <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1] md:leading-[0.9]">THE CYCLE OF <br /><span className="text-gradient-gold italic">DOMINANCE.</span></h2>
                <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">
                  IFM is a persistent progression universe. Every win on the pitch fuels your club's infrastructure, which in turn develops your squad for higher-stakes competition.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full">
               <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-square max-w-xl mx-auto lg:max-w-none" hoverable={false}>
                  {loopImg && <Image src={loopImg.imageUrl} alt="Game Loop" fill className="object-cover" />}
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SQUAD BUILDING */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
              <div className="space-y-6 md:space-y-12">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 md:px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Tactical Deployment</Badge>
                <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1] md:leading-[0.9]">ELITE SQUAD <br /><span className="text-gradient-blue italic">ARCHITECTURE.</span></h2>
                <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">
                  You have absolute control. Define your tactical identity through complex formation settings, player roles, and chemistry protocols.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1 w-full">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-[16/10] max-w-xl mx-auto lg:max-w-none" hoverable={false}>
                  {tacticsImg && <Image src={tacticsImg.imageUrl} alt="Tactical Board" fill className="object-cover" />}
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SIMULATION ENGINE */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-6 md:space-y-12">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 md:px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Deterministic Engine</Badge>
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1] md:leading-[0.95]">HIGH-FIDELITY <br /><span className="text-gradient-blue italic">MATCH LOGIC.</span></h2>
              <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">
                Matches are not simple dice rolls. Our backend calculates player coordinates, dynamic attributes, physical fatigue vectors, and environmental modifiers frame-by-frame.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full">
              <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-square max-w-xl mx-auto lg:max-w-none" hoverable={false}>
                {engineImg && <Image src={engineImg.imageUrl} alt="Simulation Engine" fill className="object-cover" />}
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. YOUTH ACADEMY */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2 space-y-6 md:space-y-12">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 md:px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Talent Scouting Framework</Badge>
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1] md:leading-[0.95]">THE ACADEMY <br /><span className="text-gradient-gold italic">FOUNDRY.</span></h2>
              <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">
                Discover raw prospects before they surface on global boards. Upgrade infrastructure to expand your scouting net, filter attributes, and discover elite generation cohorts.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1 w-full">
              <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-[16/11] max-w-xl mx-auto lg:max-w-none" hoverable={false}>
                {academyImg && <Image src={academyImg.imageUrl} alt="Youth Academy Reveal" fill className="object-cover" />}
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT MATRIX */}
      <section className="py-24 md:py-48 relative border-t border-white/5 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-6 md:space-y-12">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 md:px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Dynamic Progression Path</Badge>
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1] md:leading-[0.95]">THE DEVELOPMENT <br /><span className="text-gradient-blue italic">MATRIX.</span></h2>
              <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">
                Shape your players according to your unique tactical identity. Assign specialized training regimens to build physical, technical, mental, and spatial capability nodes.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full">
              <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-square max-w-xl mx-auto lg:max-w-none" hoverable={false}>
                {devTreeImg && <Image src={devTreeImg.imageUrl} alt="Development Progression Trees" fill className="object-cover" />}
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-5xl space-y-8 md:space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-5xl sm:text-6xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[1] md:leading-[0.7] mb-6 md:mb-12">
              BUILD YOUR <br />
              <span className="text-gradient-blue italic">DYNASTY.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 px-4 sm:px-0">
              <Button asChild size="lg" className="h-16 md:h-24 px-10 md:px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl md:rounded-3xl glow-blue text-lg md:text-2xl uppercase tracking-[0.2em] w-full sm:w-auto">
                <Link href="/early-access" className="flex items-center justify-center gap-4 md:gap-6">
                  CLAIM YOUR CLUB <Rocket className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] mt-8 md:mt-12 font-bold opacity-60">Phase 1 Manager Enrollment is Active.</p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}