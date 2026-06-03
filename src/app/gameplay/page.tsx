"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Shield, Target, Activity, Cpu, Trophy, Zap, 
  LayoutDashboard, Microscope, Network, ArrowRight, 
  Users, Sparkles, ChevronRight, History, BarChart3, 
  Coins, Rocket, Gauge, Database, Award, Binary, 
  TrendingUp, Milestone, Landmark, Eye
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { GenerateWidget } from "@/components/ui/generate-widget"
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
    <div className="flex flex-col w-full bg-background font-body selection:bg-primary selection:text-white text-white">

      {/* 1. HERO - THE COMMAND CENTER */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* BACKGROUND IMAGE - RESPONSIVE COVER STRATEGY WITH ADAPTIVE CONTRAST DROP */}
        <div className="absolute inset-0 z-0 w-full h-full opacity-40 mix-blend-luminosity">
          {heroImg && (
            <Image
              src={heroImg.imageUrl}
              alt="IFM Universe"
              fill
              priority
              className="object-cover w-full h-full"
            />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,7,13,0.3)_0%,rgba(5,7,13,0.8)_90%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        {/* CONTENT */}
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-6 md:space-y-10 bg-black/30 backdrop-blur-md py-10 rounded-3xl border border-white/5 shadow-2xl max-w-5xl mx-auto px-4 md:px-8"
          >
            {/* BADGE */}
            <motion.div variants={fadeIn}>
              <Badge className="bg-white/5 text-accent border-amber-500/20 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold rounded-full backdrop-blur-xl border">
                Tactical Intelligence v3.0 // Blockchain Ecosystem
              </Badge>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-7xl lg:text-[7.5rem] font-bold font-headline tracking-tighter uppercase leading-[0.95] md:leading-[0.9] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            >
              LEARN TO <br />
              <span className="text-gradient-gold italic font-extrabold drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                COMMAND.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeIn}
              className="text-sm md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed px-4 drop-shadow-md"
            >
              Build world-class squads, engineer multi-layered tactics, evolve high-yield youth prospects, and claim real token stakes in a decentralized corporate football universe.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4 pt-6 w-full sm:w-auto px-6 sm:px-0">
              <Button
                asChild
                size="lg"
                className="h-16 px-12 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.3)] text-base uppercase tracking-widest w-full sm:w-auto transition-all"
              >
                <Link href="/early-access">
                  START YOUR CLUB
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-16 px-12 border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-base uppercase tracking-widest backdrop-blur-xl w-full sm:w-auto transition-all"
              >
                <Link href="#loop">
                  VIEW PROTOCOLS
                </Link>
              </Button>
            </motion.div>

            {/* STATS MATRIX */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 border-t border-white/5 w-full max-w-5xl"
            >
              {[
                { label: "Active Operations", value: "85,420 Clubs" },
                { label: "Decentralized Fixtures", value: "1.2M+ Matches" },
                { label: "Assets Synthesized", value: "3.5M Players" },
                { label: "Treasury Injections", value: "4.8M $IFM" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur-sm text-left sm:text-center">
                  <div className="text-[9px] text-white/40 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-white mt-1 font-headline">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-12 hidden md:block">
          <span className="text-[10px] font-bold text-amber-500/40 uppercase tracking-[0.4em] flex items-center gap-2">
            <Cpu className="h-3 w-3 animate-pulse" /> COMMAND CENTER PROTOCOL: OPERATIONAL
          </span>
        </div>
      </section>

      {/* 2. LIVE INTERACTIVE ENGINE & SIMULATOR */}
      <section className="py-24 bg-black border-y border-white/5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-4 py-1 uppercase tracking-widest text-[9px] font-bold">
              Predictive UI Matrix
            </Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight">
              TACTICAL <span className="text-gradient-gold italic">PROJECTION LAB</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-light">
              Fine-tune variables to visualize dynamic tactical payouts and on-chain token yields instantly.
            </p>
          </div>

          <GenerateWidget height="620px">
            {/* Reason: Interactive simulation of football tactical setups, squad conditioning, and corresponding performance yield outputs. */}
            ```json
            {
              "widgetSpec": {
                "height": "620px",
                "prompt": "**Objective:** Create an ultra-premium luxe-tech tactical manager playground interface for 'Invincible Football Manager'. \n **Data State:** Mentality options include Defensive, Balanced, Counter-Attack, Heavy Attack. Training states include Light, Optimized, Intensive. \n **Strategy:** Form Layout with multi-step interactive results panel. \n **Inputs:** 1. Mentality (Dropdown selection), 2. Training Focus Intensity (Slider from 1 to 100), 3. Squad Morale Level (Slider from 50 to 100), 4. Token Allocation Staked (Numeric input, default 500). \n **Visuals/Behavior:** Render a complex data visualization panel updating automatically when configurations shift. Display simulated fields for 'Projected Match Win Probabilities (%)', 'Calculated Squad Fatigue Rate', and an calculated '$IFM Daily Staking Yield Multiplier'. Include sleek neon structural borders, status meters, and technical telemetry outputs to look highly tactical and elite corporate."
              }
            }
            ```
          </GenerateWidget>
        </div>
      </section>

      {/* 3. CORE GAME LOOP - THE PROGRESSION CYCLE */}
      <section id="loop" className="py-32 relative bg-neutral-950/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-8">
                <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">The Temporal Loop</Badge>
                <h2 className="text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE CYCLE OF <br /><span className="text-gradient-gold italic">DOMINANCE.</span></h2>
                <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                  IFM operates as a high-fidelity algorithmic universe. Tactical brilliance secures on-pitch achievements, powering asset accumulation to dominate high-tier, global competitions.
                </p>
                
                <div className="grid gap-4">
                  {[
                    { title: "Play & Compete", desc: "Execute automated, data-backed strategies in persistent league calendars.", icon: Binary },
                    { title: "Secure Treasury Yields", desc: "Performance yields dynamic $IFM token rewards directly from the smart contract pools.", icon: Coins },
                    { title: "Upgrade Infrastructure", desc: "Reinvest capital setups into medical centers, sports tech networks, and corporate offices.", icon: Database },
                    { title: "Develop Human Capital", desc: "Unlock player attribute tiers and bring forth the next generation of golden academy superstars.", icon: TrendingUp }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-amber-500/30 transition-all">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors font-headline font-bold text-sm">
                        0{i+1}
                      </div>
                      <div>
                        <div className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                          <step.icon className="h-4 w-4 text-amber-500/60" /> {step.title}
                        </div>
                        <div className="text-xs text-muted-foreground font-light mt-1">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-0 border-white/5 glow-gold overflow-hidden relative aspect-square" hoverable={false}>
                  {rewardsImg && (
                    <Image src={rewardsImg.imageUrl} alt="Game Loop Layout" fill className="object-cover opacity-50 transition-transform duration-700 hover:scale-105" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-background via-background/40 to-transparent">
                     <div className="p-6 bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/10 space-y-4 shadow-2xl">
                        <Badge className="bg-amber-500 text-black font-extrabold px-4 py-1 text-[9px] tracking-widest rounded">LIVE ECOSYSTEM TELEMETRY</Badge>
                        <div className="flex justify-between items-end">
                           <div>
                              <div className="text-[9px] text-amber-400 font-bold uppercase tracking-wider">Estimated Seasonal Yield</div>
                              <div className="text-3xl font-bold font-headline text-white mt-1">42,500 $IFM</div>
                           </div>
                           <div className="text-right">
                              <div className="text-[9px] text-white/40 font-bold uppercase tracking-wider">Club Tier</div>
                              <div className="text-xl font-bold text-amber-500 font-headline">RANK XIV</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-8 right-8">
                     <h4 className="text-[10px] font-bold text-black uppercase tracking-widest bg-amber-500 px-3 py-1 font-headline">SYSTEM CYCLE: SYNCED</h4>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SQUAD BUILDING - THE MANAGER'S DESK */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
              <div className="space-y-8">
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Tactical Deployment</Badge>
                <h2 className="text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">ELITE SQUAD <br /><span className="text-gradient-blue italic">ARCHITECTURE.</span></h2>
                <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                  Every metric counts. Take full configuration privileges over deep matrix configurations, custom positional fluidities, adaptive chemistry mechanics, and operational team instructions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    { title: "Dynamic Geometry", desc: "Deploy hyper-fluid structures changing shapes from defensive transition to attacking blocks.", icon: LayoutDashboard },
                    { title: "Micro-Roles Matrix", desc: "Assign bespoke specialized directives to match individual physical attributes.", icon: Target },
                    { title: "On-Chain Synergy", desc: "Build strategic networks matching player attributes for cross-functional on-pitch boosts.", icon: Zap },
                    { title: "Squad Depth Control", desc: "Regulate wear-and-tear, fitness thresholds, and structural recovery rotations.", icon: Users }
                  ].map((feat, k) => (
                    <div key={k} className="p-4 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
                       <div className="flex items-center gap-2">
                          <feat.icon className="h-4 w-5 text-blue-400" />
                          <span className="font-bold uppercase tracking-wider text-xs text-white">{feat.title}</span>
                       </div>
                       <p className="text-xs text-muted-foreground font-light leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1">
               <GlassCard className="p-0 border-white/5 glow-blue overflow-hidden relative aspect-[16/10]" hoverable={false}>
                  {tacticsImg && (
                    <Image src={tacticsImg.imageUrl} alt="Tactical Operational Grid" fill className="object-cover" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                     <span className="text-[9px] font-bold text-white uppercase tracking-[0.3em] bg-blue-600 px-3 py-1 rounded-sm">
                       TACTICAL INTERFACE // INTERIOR_CORE_V3
                     </span>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. HIGH-FIDELITY LIVE SIMULATION ENGINE */}
      <section className="py-32 relative border-t border-white/5 bg-neutral-950/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-8">
              <div>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Deterministic Engine</Badge>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.95]">HIGH-FIDELITY <br /><span className="text-gradient-blue italic">MATCH LOGIC.</span></h2>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Matches are not simple dice rolls. Our backend calculates player coordinates, dynamic attributes, physical fatigue vectors, and environmental modifiers frame-by-frame.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "2,400 Calculations/Sec", desc: "Every step, tackle, and strike is dynamically generated based on data metrics.", icon: Cpu },
                  { title: "Real-time Auditing", desc: "Track performance variables visually as matches unfold on screen.", icon: BarChart3 },
                  { title: "Contextual Physics", desc: "Grass friction, ball inertia, and climate parameters alter play patterns directly.", icon: Activity },
                  { title: "In-Game Directives", desc: "Deploy strategic substitutions and real-time tactical adaptions instantly.", icon: Gauge }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs uppercase tracking-tight text-white mb-1">{item.title}</div>
                      <div className="text-[11px] text-muted-foreground font-light leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* LIVE DATA GRAPHICS BLOCK */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <GlassCard className="p-0 border-white/5 glow-blue overflow-hidden relative aspect-square" hoverable={false}>
                {matchEngineImg && (
                  <Image src={matchEngineImg.imageUrl} alt="Simulation Engine" fill className="object-cover opacity-80" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/40 p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-blue-400 font-mono tracking-widest uppercase">// NETWORK_STREAM: SIM_FRAME_ACTIVE</span>
                    <Badge className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-mono text-[9px]">60 FPS LIVE</Badge>
                  </div>
                  
                  <div className="space-y-4 p-6 bg-black/80 backdrop-blur-md rounded-2xl border border-white/5 max-w-sm ml-auto">
                    <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest">// DETONATING_PROJECTIONS</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono"><span className="text-white/60">Positional Accuracy:</span> <span className="text-white font-bold">98.4%</span></div>
                      <div className="flex justify-between text-xs font-mono"><span className="text-white/60">Calculated Trajectories:</span> <span className="text-blue-400 font-bold">14,240/m</span></div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. THE YOUTH ACADEMY ECOSYSTEM & TRIPLE GRID HIGHLIGHTS */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-24">
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2 space-y-8">
              <div>
                <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Talent Scouting Framework</Badge>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.95]">THE ACADEMY <br /><span className="text-gradient-gold italic">FOUNDRY.</span></h2>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Discover raw prospects before they surface on global boards. Upgrade infrastructure to expand your scouting net, filter deep attribute matrices, and harvest elite generational cohorts.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Generational Cohorts", desc: "Scout variable youth pools with complex, unique asset potential variants.", icon: Milestone },
                  { title: "Asset Management & Liquidity", desc: "Mint talent certificates directly to establish blockchain contract records and scale corporate club valuations.", icon: Database },
                  { title: "Facility Infrastructure Optimization", desc: "Scale local operations to boost overall trait discovery metrics and scouting precision tiers.", icon: Landmark }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-amber-500/30 transition-all duration-300">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-tight text-white mb-0.5">{item.title}</div>
                      <div className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1">
              <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-[16/11]" hoverable={false}>
                {academyImg && (
                  <Image src={academyImg.imageUrl} alt="Youth Academy Reveal" fill className="object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="text-[9px] font-bold tracking-widest text-amber-500 uppercase bg-black/60 px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/5">FOUNDRY SYSTEM: DISCOVERY_LAYER</span>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* THREE COLUMN GRID GRAPHICS SUMMARY OVERVIEW */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-white/5 pt-24">
            {/* MATCH ENGINE OVERVIEW */}
            <GlassCard className="p-6 border-white/5 flex flex-col justify-between space-y-6" hoverable>
              <div className="space-y-4">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
                  {matchEngineImg && <Image src={matchEngineImg.imageUrl} alt="Cinematic Match Stream" fill className="object-cover opacity-75" />}
                  <div className="absolute top-3 left-3 bg-red-600 px-2 py-0.5 text-[8px] font-bold uppercase rounded animate-pulse">Live Simulator</div>
                </div>
                <h3 className="text-xl font-headline font-bold uppercase tracking-tight flex items-center gap-2">
                  <Activity className="h-5 w-5 text-amber-500" /> Cinematic Match Stream
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Watch structural decisions unfold in an advanced state visualizer updating live telemetry dynamically.
                </p>
              </div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-semibold pt-2 border-t border-white/5">Telemetry Engine V4</div>
            </GlassCard>

            {/* YOUTH ACADEMY OVERVIEW */}
            <GlassCard className="p-6 border-white/5 flex flex-col justify-between space-y-6" hoverable>
              <div className="space-y-4">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
                  {academyImg && <Image src={academyImg.imageUrl} alt="Youth Academy Incubation" fill className="object-cover opacity-75" />}
                  <div className="absolute top-3 left-3 bg-amber-500 text-black px-2 py-0.5 text-[8px] font-bold uppercase rounded">Incubator</div>
                </div>
                <h3 className="text-xl font-headline font-bold uppercase tracking-tight flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-amber-500" /> Academy Incubation
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Scout and synthesize raw human mechanics with intricate potential variants into highly valuable digital profiles.
                </p>
              </div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-semibold pt-2 border-t border-white/5">Asset Generation Protocol</div>
            </GlassCard>

            {/* DEVELOPMENT TREE OVERVIEW */}
            <GlassCard className="p-6 border-white/5 flex flex-col justify-between space-y-6" hoverable>
              <div className="space-y-4">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
                  {devTreeImg && <Image src={devTreeImg.imageUrl} alt="RPG Skill Trees" fill className="object-cover opacity-75" />}
                  <div className="absolute top-3 left-3 bg-blue-600 px-2 py-0.5 text-[8px] font-bold uppercase rounded">Node Matrix</div>
                </div>
                <h3 className="text-xl font-headline font-bold uppercase tracking-tight flex items-center gap-2">
                  <Network className="h-5 w-5 text-blue-400" /> RPG Skill Mapping
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Allocate earned points down modular progression trees to build structural play styles tailored to tactical setups.
                </p>
              </div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-semibold pt-2 border-t border-white/5">Attribute Progression Core</div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 7. EXTENSIVE TALENT DEVELOPMENT TREE MATRIX */}
      <section className="py-32 relative border-t border-white/5 bg-neutral-950/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-8">
              <div>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Dynamic Progression Path</Badge>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.95]">THE DEVELOPMENT <br /><span className="text-gradient-blue italic">MATRIX.</span></h2>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Shape your players according to your unique tactical identity. Assign specialized training regimens to build physical, technical, mental, and spatial capability nodes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="h-1 bg-blue-500/40 w-12 rounded" />
                  <div className="font-bold text-xs uppercase tracking-tight text-white pt-2">Specialized Archetypes</div>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">Train specialized roles like inverted wingbacks, deep-lying playmakers, or advanced high-press triggers.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-1 bg-blue-500/40 w-12 rounded" />
                  <div className="font-bold text-xs uppercase tracking-tight text-white pt-2">Attribute Customization</div>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">Allocate earned XP points across core attribute sectors to mitigate weaknesses or reinforce strengths.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-1 bg-blue-500/40 w-12 rounded" />
                  <div className="font-bold text-xs uppercase tracking-tight text-white pt-2">Physical Conditioning</div>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">Balance training intensity levels with stamina depletion to maintain peak freshness for match fixtures.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-1 bg-blue-500/40 w-12 rounded" />
                  <div className="font-bold text-xs uppercase tracking-tight text-white pt-2">Legacy Milestones</div>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">Unlock signature abilities and high-impact traits as players achieve career performance thresholds.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <GlassCard className="p-0 border-white/5 glow-blue overflow-hidden relative aspect-square" hoverable={false}>
                {devTreeImg && (
                  <Image src={devTreeImg.imageUrl} alt="Development Progression Trees" fill className="object-cover opacity-75" />
                )}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_30%,#05070D_95%)]" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/75 backdrop-blur-md rounded-xl border border-white/5 flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">// ATHLETE_MATRIX_EXP</div>
                    <div className="text-sm font-bold uppercase tracking-tight text-white">Advanced Trait Node Unlocked</div>
                  </div>
                  <Microscope className="h-5 w-5 text-blue-400 shrink-0 animate-pulse" />
                </div>
              </GlassCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-48 relative text-center overflow-hidden bg-black">
        <div className="absolute inset-0 radial-glow-blue opacity-10 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-12">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-6xl md:text-[9rem] font-bold font-headline tracking-tighter uppercase leading-[0.75] mb-8">
              BUILD YOUR <br />
              <span className="text-gradient-gold italic font-extrabold">DYNASTY.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
              <Button asChild size="lg" className="h-20 px-12 bg-amber-500 hover:bg-amber-600 text-black font-extrabold rounded-xl shadow-[0_0_40px_rgba(245,158,11,0.2)] text-xl uppercase tracking-wider w-full transition-all">
                <Link href="/early-access" className="flex items-center justify-center gap-4">
                  CLAIM YOUR CLUB <Rocket className="h-6 w-6" />
                </Link>
              </Button>
            </div>
            <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] mt-10 font-bold">
              Phase 1 Manager Enrollment is Active // Cryptographic Clearance Required.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
