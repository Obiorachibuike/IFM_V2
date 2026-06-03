"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Activity, 
  Coins, 
  Rocket, 
  TrendingUp, 
  Trophy, 
  ShieldAlert, 
  Cpu, 
  LineChart, 
  ShieldCheck, 
  Terminal,
  ChevronRight,
  Sparkles,
  Sliders
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const fadeIn = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  },
  viewport: { once: true }
}

export default function EcosystemPage() {
  // Live Simulation Interactive State
  const [tacticalDepth, setTacticalDepth] = React.useState(75)
  const [stadiumLevel, setStadiumLevel] = React.useState(2)
  const [winRate, setWinRate] = React.useState(60)

  // Pure mathematical simulator calculations derived from gameplay equations
  const baseYield = (tacticalDepth * 15) + (stadiumLevel * 450)
  const efficiencyMultiplier = winRate / 100
  const totalProjectedYield = Math.floor(baseYield * efficiencyMultiplier)
  const dynamicSecurityRating = Math.min(100, Math.floor((tacticalDepth * 0.4) + (winRate * 0.6)))

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#03050A] text-white font-body selection:bg-primary selection:text-white overflow-x-hidden">
      
      {/* 1. CINEMATIC PROTOCOL HERO */}
      <section className="relative min-h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden py-20 border-b border-white/[0.04]">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10"
          >
            <motion.div variants={fadeIn}>
              <Badge className="bg-white/5 text-white/90 border-white/10 px-4 py-1.5 uppercase tracking-[0.4em] text-[9px] font-mono rounded-full backdrop-blur-xl">
                SYSTEM ARCHITECTURE // REWARD LOGIC
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tighter uppercase leading-[0.95] max-w-5xl"
            >
              THE SOVEREIGN <br />
              <span className="text-gradient-blue italic font-extrabold">FOOTBALL ECONOMY.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-sm sm:text-base md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed px-2"
            >
              Every decision, tactical blueprint, and transfer window transaction fuels a persistent, skill-first loop. We build for performance, value sustainability, and absolute player ownership.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl glow-blue text-sm uppercase tracking-widest w-full sm:w-auto transition-all"
              >
                <Link href="/early-access">FOUND YOUR CLUB</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 border-white/10 hover:bg-white/5 text-white font-bold rounded-xl text-sm uppercase tracking-widest backdrop-blur-xl w-full sm:w-auto transition-all"
              >
                <Link href="#interactive-simulator">LIVE LOOP SIMULATOR</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 pt-12 border-t border-white/5 w-full max-w-5xl text-left md:text-center"
            >
              {[
                { label: "Active Operational Clubs", value: "85,420" },
                { label: "Verified Match Simulations", value: "1.2M+" },
                { label: "On-Chain Athletes Minted", value: "3.5M" },
                { label: "Treasury Payout Allocations", value: "4.8M $IFM" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[9px] text-white/40 uppercase tracking-wider font-mono flex items-center gap-1.5 md:justify-center">
                    <span className="h-1 w-1 bg-primary rounded-full" /> {stat.label}
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-headline text-white tracking-tight">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NEW INTEGRATION: INTERACTIVE ECOSYSTEM LOOP & VISUAL CAROUSEL */}
      <section id="interactive-simulator" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#03050A] to-[#060913] border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-4 py-1.5 uppercase tracking-wider text-[10px] font-mono">
              INTERACTIVE PREVIEW // VALUE GENERATION MODEL
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold uppercase tracking-tight">
              SIMULATE YOUR <span className="text-gradient-gold italic font-extrabold">YIELD PIPELINE</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light max-w-2xl mx-auto">
              Adjust your club parameters below to observe how deep tactical architecture calculations automatically affect your $IFM distribution metrics and global matrix rank.
            </p>
          </div>

          {/* SIMULATOR INTERFACE WORKSPACE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <GlassCard className="p-6 border-white/10 bg-black/60 space-y-6" hoverable={false}>
                <div className="flex items-center gap-2 pb-3 border-b border-white/5 font-mono text-[11px] uppercase tracking-wider text-amber-400">
                  <Sliders className="h-4 w-4" /> Operational Metrics Inputs
                </div>

                {/* Range Controller 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-white/70">
                    <span className="uppercase tracking-wide">Tactical Rigor & Formations</span>
                    <span className="text-white font-bold">{tacticalDepth}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={tacticalDepth} 
                    onChange={(e) => setTacticalDepth(Number(e.target.value))}
                    className="w-full accent-primary bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-[10px] text-white/40 font-light font-sans">Controls pressing trap triggers and spatial complexity calculations.</p>
                </div>

                {/* Range Controller 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-white/70">
                    <span className="uppercase tracking-wide">Stadium Facility Tier</span>
                    <span className="text-amber-400 font-bold">Tier {stadiumLevel}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    value={stadiumLevel} 
                    onChange={(e) => setStadiumLevel(Number(e.target.value))}
                    className="w-full accent-accent bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-[10px] text-white/40 font-light font-sans">Drives localized ticket brackets and stadium monetization capacities.</p>
                </div>

                {/* Range Controller 3 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-white/70">
                    <span className="uppercase tracking-wide">Target Match Win-Rate</span>
                    <span className="text-white font-bold">{winRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="95" 
                    value={winRate} 
                    onChange={(e) => setWinRate(Number(e.target.value))}
                    className="w-full accent-emerald-500 bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-[10px] text-white/40 font-light font-sans">Your dynamic verification success factor across the 22-match season.</p>
                </div>
              </GlassCard>
            </div>

            {/* Right Output Engine Dashboard (7 Cols) */}
            <div className="lg:col-span-7">
              <GlassCard className="p-6 md:p-8 border-white/10 bg-[#040710]/90 glow-blue space-y-6 relative rounded-2xl" hoverable={false}>
                
                <div className="flex items-center justify-between pb-4 border-b border-white/5 font-mono text-xs text-white/40">
                  <span className="flex items-center gap-2 uppercase tracking-widest"><Terminal className="h-4 w-4 text-primary" /> Live_Ecosystem_Yield_Engine</span>
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                </div>

                {/* Output Parameter Rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">Projected Seasonal Yield</span>
                    <span className="text-2xl sm:text-3xl font-bold text-gradient-gold font-headline font-mono tracking-tight">
                      {totalProjectedYield.toLocaleString()} <span className="text-sm font-normal text-white/70 font-sans">$IFM</span>
                    </span>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">Security Trust Matrix</span>
                    <span className="text-2xl sm:text-3xl font-bold text-white font-headline font-mono tracking-tight">
                      {dynamicSecurityRating}/100
                    </span>
                  </div>
                </div>

                {/* Visual Simulation Feedback */}
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl font-mono text-[11px] space-y-2 text-white/80">
                  <div className="flex items-center gap-2 text-[10px] text-emerald-400 uppercase font-bold tracking-wider mb-1">
                    <Sparkles className="h-3.5 w-3.5" /> Simulation Core Log
                  </div>
                  <p>&gt; Analytical engine mapped matching tactics at <span className="text-primary">{tacticalDepth}% efficiency.</span></p>
                  <p>&gt; Treasury clearance authorized: Base infrastructure reward tokenization active.</p>
                  <p className="text-white/40">&gt; Loop status: <span className="text-emerald-400 font-bold">STABLE RECYCLING PROCESS IDENTIFIED</span></p>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">
                    ▲ All results calculations adhere strictly to protocol parameters tokenomics rules ▲
                  </p>
                </div>

              </GlassCard>
            </div>
          </div>

          {/* INTEGRATED PERSISTENT INTERFACE SHOWCASE CAROUSEL */}
          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-white/5" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Cinematic Platform Interfaces</span>
              <span className="h-px flex-1 bg-white/5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Tactical Execution Core", category: "MANAGEMENT CONSOLE", desc: "Configure high-fidelity macro strategies, custom defensive tracking zones, and pressing traps." },
                { title: "Sovereign Transfer Hub", category: "MARKET ESCROW", desc: "Securely trade, auction, or lease tokenized elite athletes with instant zero-trusted settlement logs." },
                { title: "Global Treasury Ledger", category: "FINANCIAL NODE", desc: "Audit and claim seasonal tournament division prize allocations streamed direct from pool locks." }
              ].map((card, key) => (
                <GlassCard key={key} className="p-5 border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent flex flex-col justify-between group hover:border-primary/30 transition-all duration-500" hoverable={true}>
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono text-primary uppercase tracking-widest font-bold block">{card.category}</span>
                    <h3 className="font-bold text-sm uppercase tracking-tight text-white flex items-center justify-between">
                      {card.title} <ChevronRight className="h-3 w-3 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-xs text-white/60 font-light leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.03] flex justify-between text-[9px] font-mono text-white/30 uppercase">
                    <span>INTERFACE COMPLIANT</span>
                    <span>v2.0.26</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE LIVING LOOP & SKILL-TO-YIELD PIPELINE */}
      <section id="loop" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-background">
...
