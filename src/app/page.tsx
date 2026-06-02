"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Trophy, Rocket, Shield, Target, Cpu, Zap, 
  Coins, Play, Users, BarChart3, Microscope, 
  ShieldCheck, Sparkles, ChevronRight, Activity,
  History, Star, HelpCircle, ChevronDown, Network
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
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

const faqData = [
  {
    q: "What is Invincible Football Manager (IFM)?",
    a: "IFM is a next-generation football management ecosystem built on blockchain technology. It combines deep tactical simulation with true digital ownership of clubs, players, and assets. Unlike traditional games, every decision you make contributes to a persistent on-chain legacy."
  },
  {
    q: "How do matches work?",
    a: "Matches are simulated using our proprietary Neural Match Engine. It processes 15,000+ tactical variables per second, including player fatigue, psychological states, and tactical overrides. You don't just watch; you manage the flow of the game."
  },
  {
    q: "What are NFTs in IFM?",
    a: "NFTs in IFM are functional gameplay assets. This includes your Club License, Player Cards, and Stadium Infrastructure. They grant you true ownership, meaning your progress is immutable, verifiable, and tradable."
  },
  {
    q: "How do I earn $IFM rewards?",
    a: "Managers earn $IFM based on match performance (wins yield the most), league standings, tournament success, and academy player development. These rewards are distributed from the global ecosystem treasury."
  },
  {
    q: "Is IFM free to play?",
    a: "Yes, IFM offers a free-to-play entry tier. To compete in the professional league pyramid and earn seasonal $IFM rewards, managers typically require a Club License which validates their status in the ecosystem."
  }
]

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null)

  // Assets
  const genesisBanner = PlaceHolderImages.find(i => i.id === "hero-stadium")
  const tacticsImg = PlaceHolderImages.find(i => i.id === "alpha-tactics-grid")
  const matchImg = PlaceHolderImages.find(i => i.id === "orion-live-match")
  const marketImg = PlaceHolderImages.find(i => i.id === "zenith-transfer-hub")
  const leagueImg = PlaceHolderImages.find(i => i.id === "nova-league-board")
  const academyImg = PlaceHolderImages.find(i => i.id === "vertex-academy-prospect")
    const ctaImg = PlaceHolderImages.find(i => i.id === "cta-img")
  const playerCardImg = PlaceHolderImages.find(i => i.id === "aurora-player-card")
  const scaleImg = PlaceHolderImages.find(i => i.id === "scale-architecture-blueprint")

  return (
    <div className="flex flex-col w-full bg-background selection:bg-primary selection:text-white overflow-x-hidden">

      {/* 1. CINEMATIC BANNER */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          {genesisBanner && (
            <Image
              src={genesisBanner.imageUrl}
              alt="IFM Genesis"
              fill
              priority
              className="object-cover scale-[1.02]"
              data-ai-hint="IFM Genesis stadium"
            />
          )}

          <div className="stadium-light-sweep z-30" />
          <div className="absolute inset-0 football-grid opacity-[0.08] z-30" />

          {/* Bottom left cinematic text - Visible on mid/large displays */}
          <div className="absolute bottom-12 left-6 md:bottom-20 md:left-12 hidden sm:block z-40">
            <h4 className="text-xl md:text-4xl font-bold text-white uppercase tracking-[0.4em] italic opacity-90">
              DAWN OF SOVEREIGNTY
            </h4>
            <p className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-[0.5em] mt-2">
              Protocol: Genesis_Initial_Active
            </p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-50 mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 max-w-5xl mx-auto"
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-full mb-4 sm:mb-8">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                Genesis Protocol Active
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.95] sm:leading-none">
              BUILD. OWN. <br />
              <span className="text-gradient-blue italic">
                DOMINATE.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 uppercase tracking-[0.3em] sm:tracking-[0.6em] text-[10px] sm:text-xs font-bold px-4">
              Phase 1: Establishing the Empire
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 sm:pt-10 px-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-sm sm:text-lg uppercase tracking-widest"
              >
                <Link href="/early-access">
                  JOIN EARLY ACCESS
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-sm sm:text-lg uppercase tracking-widest backdrop-blur-xl"
              >
                <Link href="/gameplay">
                  WATCH GAMEPLAY
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


                        {/* 2. "WHAT IS IFM?" - THE FANTASY */}
      <section className="py-16 md:py-28 lg:py-36 relative border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Layout Wrapper: Stacks full-width on mobile/tablet, splits 50/50 on large desktops */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            
            {/* LEFT SIDE: VALUE PROPOSITION */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full">
              {/* Force text-left alignment globally for this block instead of centering on mobile */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-12 text-left">
                <div className="flex justify-start">
                  <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 sm:px-6 sm:py-2 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold rounded-md">
                    The Core Mission
                  </Badge>
                </div>
                
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1.1] lg:leading-[0.9]">
                  BEYOND THE <br />
                  <span className="text-gradient-gold italic">SIMULATION.</span>
                </h2>
                
                <p className="text-sm sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                  IFM is more than a manager game. It is a living football economy where every decision you make—from tactical shifts to stadium investments—creates permanent value on the blockchain.
                </p>
                
                {/* Metric Pillar Row Blocks: Structured text alignment directly to the left */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-xl">
                  {[
                    { label: "Strategic Depth", desc: "Manage squads across seasons with real consequences." },
                    { label: "Digital Sovereignty", desc: "Complete cryptographic ownership over your players and training assets." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2 sm:space-y-3 flex flex-col items-start text-left">
                      <div className="h-1 w-12 bg-accent hidden lg:block" />
                      <div className="font-bold text-base sm:text-lg uppercase tracking-tight text-white">{item.label}</div>
                      <div className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: INTERACTIVE PANEL CARD (Removed max-w limits to take absolute full space) */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full mx-auto">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-3xl bg-[#040914]/40 w-full" hoverable={false}>
                  {tacticsImg && (
                    <Image 
                      src={tacticsImg.imageUrl} 
                      alt="Tactical Board Blueprint" 
                      fill 
                      {/* Changed from brightness-50 to brightness-75 to let more image light through */}
                      className="object-cover brightness-75 select-none transition-transform duration-700 hover:scale-[1.02]" 
                    />
                  )}
                  
                  {/* Bottom Panel Text Layer: Softened the gradient color stop thresholds */}
                  <div className="absolute inset-0 p-5 sm:p-8 lg:p-12 flex flex-col justify-end bg-gradient-to-t from-[#03060F]/90 via-[#03060F]/20 to-transparent z-10">
                     <div className="space-y-2 sm:space-y-4 text-left">
                        <div className="flex">
                          <Badge className="bg-primary text-white font-bold px-2.5 py-0.5 sm:px-4 sm:py-1 uppercase tracking-widest text-[8px] sm:text-[9px] rounded-sm">
                            Command Overlay Active
                          </Badge>
                        </div>
                        <h3 className="text-xl sm:text-3xl font-bold font-headline uppercase leading-tight text-white">THE ARCHITECT'S <br />HUB</h3>
                        <p className="text-slate-200 text-[9px] sm:text-xs font-light uppercase tracking-widest font-mono drop-shadow-md">Processing Tactical Data: 12.8M Iterations/sec</p>
                     </div>
                  </div>
                  
                  {/* Top Floating Badge Component */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 max-w-[85%] sm:max-w-none text-right z-10">
                    <span className="text-[8px] sm:text-[9px] font-mono font-bold text-white uppercase tracking-[0.15em] sm:tracking-[0.25em] bg-primary/90 border border-white/10 backdrop-blur-md px-3 py-1 rounded shadow-lg">
                      TACTICAL INTERFACE // HUD_SQUAD_V2
                    </span>
                  </div>
               </GlassCard>
            </motion.div>

          </div>
        </div>
      </section>



            {/* 3. GAMEPLAY PILLARS GRID */}
      <section className="py-20 md:py-36 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-16 sm:mb-24 md:mb-32 space-y-4 sm:space-y-8">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">
              THE FOUR <span className="text-primary italic">PILLARS</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto px-4">
              Master the systems of the living football universe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-md sm:max-w-none mx-auto">
            {[
              { 
                title: "Build Your Team", 
                desc: "Scout talent globally, sign superstars, and assemble an elite squad via the real-time peer-to-peer transfer market.", 
                icon: Users, 
                image: marketImg, 
                label: "Roster Management" 
              },
              { 
                title: "Compete globally", 
                desc: "Climb an aggressive 8-division decentralized league pyramid, dominate live tournaments, and secure seasonal ecosystem promotions.", 
                icon: Trophy, 
                image: leagueImg, 
                label: "League Standings" 
              },
              { 
                title: "Upgrade Facilities", 
                desc: "Expand your stadium capacity, unlock advanced corporate infrastructure, and build state-of-the-art youth academies to supercharge training.", 
                icon: Microscope, 
                image: academyImg, 
                label: "Infrastructure Scan" 
              },
              { 
                title: "Own Digital Tokens", 
                desc: "Exercise complete sovereignty with player and club NFTs, while earning governance and utility rewards directly in native $IFM coin.", 
                icon: ShieldCheck, 
                image: playerCardImg, 
                label: "Asset Valuation" 
              }
            ].map((pillar, i) => (
              <GlassCard key={i} className="p-0 group overflow-hidden border-white/5 flex flex-col h-full" glowColor={i % 2 === 0 ? "blue" : "gold"}>
                <div className="relative aspect-[4/5] w-full">
                  {pillar.image && (
                    <Image src={pillar.image.imageUrl} alt={pillar.title} fill className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
                  <div className="absolute top-4 left-4">
                     <Badge className="bg-black/60 backdrop-blur-md text-[8px] uppercase tracking-widest border-white/10">{pillar.label}</Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 sm:left-8">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <pillar.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-right max-w-[60%]">
                     <span className="text-[7px] sm:text-[8px] font-bold text-white uppercase tracking-widest bg-primary/40 px-2 py-1 block">MODULE_TYPE: {pillar.label.toUpperCase().replace(" ", "_")}</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold font-headline uppercase">{pillar.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>


      {/* 4. MATCH ENGINE SHOWCASE */}
      <section className="py-20 md:py-36 relative bg-gradient-to-b from-[#03060F] via-[#08152E]/20 to-[#03060F] border-y border-white/[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.04),transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
             
             {/* LEFT SIDE: GAMEPLAY LIVE SCREEN PREVIEW */}
             <motion.div 
               variants={fadeIn} 
               initial="initial" 
               whileInView="whileInView" 
               className="lg:col-span-7 w-full order-2 lg:order-1"
             >
                <div className="relative group">
                  {/* Outer Tech Accents */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/20 blur-xl opacity-30 group-hover:opacity-50 transition duration-1000" />
                  
                  <GlassCard className="p-2 sm:p-3 border-white/10 glow-blue overflow-hidden relative rounded-2xl sm:rounded-3xl bg-[#040914]/90 backdrop-blur-2xl" hoverable={false}>
                    <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden group">
                      {matchImg && (
                        <Image 
                          src={matchImg.imageUrl} 
                          alt="Neural Match Engine Interface" 
                          fill 
                          className="object-cover brightness-75 group-hover:scale-[1.02] transition-transform duration-700" 
                        />
                      )}
                      
                      {/* Technical HUD Grid Overlays */}
                      <div className="absolute inset-0 bg-football-grid opacity-[0.12] mix-blend-overlay pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03060F]/90 via-transparent to-black/20 pointer-events-none" />
                      
                      {/* Header System Label */}
                      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 max-w-[70%]">
                        <div className="text-[8px] sm:text-[10px] font-bold text-white/90 uppercase tracking-[0.2em] bg-primary/80 border border-primary/40 backdrop-blur-sm px-3 py-1 rounded-sm">
                          NEURAL ENGINE SIMULATION v2.4
                        </div>
                      </div>

                      {/* Bottom Interface Telemetry */}
                      <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5">
                         <Badge variant="outline" className="border-white/10 text-white/60 bg-black/40 backdrop-blur-sm uppercase text-[7px] sm:text-[8px] tracking-widest px-2 py-0.5">
                           Interface View: HUD_LIVE_MAIN
                         </Badge>
                      </div>
                    </div>
                  </GlassCard>

                  {/* Tactical Analytics Floating Module Data Stream */}
                  <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#060D1F] border border-white/10 backdrop-blur-xl p-3 rounded-xl shadow-2xl hidden sm:flex items-center gap-4 max-w-xs animate-bounce-slow">
                    <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium">Processing Rate</p>
                      <p className="text-xs font-bold text-white uppercase tracking-tight">15,000+ Variables / Sec</p>
                    </div>
                  </div>
                </div>
             </motion.div>

             {/* RIGHT SIDE: CORE TECH SYSTEM METRICS */}
             <motion.div 
               variants={fadeIn} 
               initial="initial" 
               whileInView="whileInView" 
               className="lg:col-span-5 w-full order-1 lg:order-2"
             >
                <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
                   <div className="flex justify-center lg:justify-start">
                     <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-1 sm:px-5 sm:py-1.5 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold rounded-md">
                       Neural Core Matrix
                     </Badge>
                   </div>
                   
                   <div className="space-y-3 sm:space-y-4">
                     <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1.05]">
                       REACTIVE <br />
                       <span className="text-gradient-blue italic">SIMULATION.</span>
                     </h2>
                     <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                       Matches in IFM are dynamic tactical operations. Every substitution, real-time mentality adjustment, and dynamic system tweak instantly cascades through our match calculations framework.
                     </p>
                   </div>

                   {/* Command Dashboard Controls List */}
                   <div className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                      {[
                        { 
                          label: "Real-time Overrides", 
                          desc: "Instantly change intensity parameters, adjustments, and team formatting mid-match.",
                          icon: Zap,
                          status: "System Active" 
                        },
                        { 
                          label: "Psychological States", 
                          desc: "Players react organically to mental fatigue, crowd pressure fluctuations, and tactical flow.",
                          icon: Activity,
                          status: "Tracking Node" 
                        }
                      ].map((item, i) => (
                        <div 
                          key={i} 
                          className="group/item flex gap-4 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/[0.01] to-transparent border border-white/5 hover:border-primary/20 hover:bg-[#050B1A] transition-all duration-300"
                        >
                           <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/5 border border-white/5 text-primary flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                              <item.icon className="h-5 w-5" />
                           </div>
                           <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <div className="font-bold text-xs sm:text-sm uppercase tracking-wider text-white">{item.label}</div>
                                <span className="text-[8px] uppercase tracking-widest text-primary/60 font-mono font-semibold bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                                  {item.status}
                                </span>
                              </div>
                              <div className="text-[11px] sm:text-xs text-slate-400 mt-1 font-light leading-relaxed">{item.desc}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </motion.div>

          </div>
        </div>
      </section>



      {/* 5. PROACTIVE SCALING & LEAGUE ARCHITECTURE */}
      <section className="py-16 md:py-28 lg:py-36 relative border-b border-white/[0.02] bg-gradient-to-b from-[#03060F] via-[#060D1F] to-[#03060F] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.03),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Main Grid: Stacks on mobile/tablet (cols-1), splits on large desktops (cols-12) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-8 xl:gap-16 items-stretch">

            {/* LEFT SIDE: CONCEPT & VALUE PROPOSITION (5 Columns on Desktop) */}
            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="whileInView"
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <Badge className="bg-primary/10 text-primary border-primary/30 px-3 py-1 sm:px-4 sm:py-1.5 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold rounded-md">
                    Dynamic Architecture
                  </Badge>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1.1] lg:leading-[1.05]">
                    INFINITE SCALING. <br />
                    <span className="text-gradient-blue italic">FLUID IDENTITIES.</span>
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    The mathematical structure of global football allows the game to expand infinitely without diluting elite competition. While the pinnacle remains hyper-exclusive, the foundation scales automatically to accommodate an unlimited influx of new clubs and managers.
                  </p>
                </div>

                {/* Technical Metric Row Blocks */}
                <div className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                  {[
                    { 
                      title: "Exponential Progression Layers", 
                      desc: "Just like traditional setups where an elite top division sits above thousands of lower tiers, every new club injection organically spawns deeper regional divisions.",
                      icon: Network 
                    },
                    { 
                      title: "Dynamic Commercial Adaptability", 
                      desc: "The structural integrity of a division remains absolute, but its branding layer is modular—allowing live commercial partnerships and brand alignment to swap fluidly.", 
                      icon: Sparkles 
                    }
                  ].map((item, k) => (
                    <div 
                      key={k} 
                      className="group/item flex gap-4 p-4 rounded-xl bg-gradient-to-r from-white/[0.01] to-transparent border border-white/5 hover:border-primary/20 hover:bg-[#040914] transition-all duration-300 cursor-default"
                    >
                      <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-lg bg-primary/5 border border-white/5 text-primary flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <div className="font-bold text-xs sm:text-sm uppercase tracking-wider text-white truncate">{item.title}</div>
                        <div className="text-[11px] sm:text-xs text-slate-400 font-light leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: ARCHITECTURAL BLUEPRINT PANEL (7 Columns on Desktop) */}
            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="whileInView" 
              className="lg:col-span-7 w-full flex"
            >
              <div className="relative group w-full flex">
                {/* Backing Ambient Glow */}
                <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-500/10 via-primary/5 to-blue-500/10 blur-xl opacity-40 group-hover:opacity-60 transition duration-1000" />
                
                {/* 
                  Removed restrictive min-h/aspect-square constraints. 
                  Used h-full + flex to adjust naturally based entirely on dynamic text size metrics.
                */}
                <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative w-full h-full rounded-2xl sm:rounded-3xl bg-[#040914]/90 backdrop-blur-2xl flex flex-col" hoverable={false}>

                  {/* BACKGROUND DECORATIVE BLUEPRINT */}
                  {scaleImg && (
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
                      <Image 
                        src={scaleImg.imageUrl} 
                        alt="Ecosystem Scale Architecture Blueprint" 
                        fill 
                        className="object-cover opacity-[0.08] sm:opacity-[0.12] grayscale brightness-[0.3] mix-blend-screen transition-all duration-1000 group-hover:scale-[1.01]" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03060F] via-[#03060F]/60 to-transparent" />
                      <div className="absolute inset-0 bg-football-grid opacity-[0.06] sm:opacity-[0.08]" />
                    </div>
                  )}

                  {/* FOREGROUND PANEL DATA WRAPPER */}
                  <div className="relative z-10 p-5 sm:p-8 lg:p-8 xl:p-10 flex flex-col justify-between flex-1 gap-6 sm:gap-8">

                    {/* Top Header Module */}
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/5 pb-4">
                        <div className="space-y-0.5">
                          <span className="text-[8px] sm:text-[9px] font-mono font-semibold text-primary uppercase tracking-[0.25em]">System Module // Scale_Engine</span>
                          <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-white">Decentralized Pyramid Model</h3>
                        </div>
                        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[8px] sm:text-[9px] uppercase tracking-widest font-mono font-medium rounded px-2 py-0.5 shrink-0">
                          Elastic_Core
                        </Badge>
                      </div>

                      {/* STRUCTURAL ENGINE PILLARS ROW SPLIT: Stacks on mobile, splits 50/50 on tablets and above */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

                        {/* Structural Core Column */}
                        <div className="space-y-2 p-4 sm:p-5 rounded-xl bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors duration-300">
                          <div className="flex items-center gap-2 text-primary">
                            <Target className="h-3.5 w-3.5" />
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest font-mono">Core_Spec</span>
                          </div>
                          <div className="space-y-1">
                            <div className="text-base sm:text-lg font-headline font-bold text-white uppercase tracking-wider">Fixed Tiers</div>
                            <p className="text-[11px] sm:text-xs text-slate-400 font-light leading-relaxed">
                              The competitive blueprint remains static. Promotion, relegation, and scheduling metrics are mathematically protected to guarantee real competitive stakes at every layer.
                            </p>
                          </div>
                        </div>

                        {/* Identity Layer Column */}
                        <div className="space-y-2 p-4 sm:p-5 rounded-xl bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors duration-300">
                          <div className="flex items-center gap-2 text-blue-400">
                            <BarChart3 className="h-3.5 w-3.5" />
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest font-mono">Branding_Spec</span>
                          </div>
                          <div className="space-y-1">
                            <div className="text-base sm:text-lg font-headline font-bold text-white uppercase tracking-wider">Modular Branding</div>
                            <p className="text-[11px] sm:text-xs text-slate-400 font-light leading-relaxed">
                              League naming schemes, UI asset cosmetics, and partnership rights update dynamically without interrupting underlying tournament mechanics.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* FOOTER METRIC FRAMEWORK */}
                    <div className="space-y-4 mt-auto">
                      <div className="p-3 sm:p-4 rounded-xl bg-primary/[0.01] border border-white/5 text-[11px] sm:text-xs text-slate-300 font-light leading-relaxed backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-[2px] bg-primary/40" />
                        <span className="font-bold text-primary uppercase tracking-widest block mb-1 text-[8px] sm:text-[9px] font-mono">Real-World Reference Data</span>
                        Much like traditional top flights seamlessly transitioning title identities across corporate eras without modifying the core division formula, this network completely isolates backend calculation mechanics from client branding filters to support infinite, organic community scaling.
                      </div>

                      <div className="text-center pt-1">
                        <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.35em] block sm:inline">Pyramid Protocol // Auto_Expand_Nodes_Enabled</span>
                      </div>
                    </div>

                  </div>
                </GlassCard>
              </div>
            </motion.div>

          </div>
        </div>
      </section>




      {/* 6. FAQ SECTION - INTELLIGENCE BASE */}
      <section className="py-20 md:py-36 relative border-t border-white/5 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6">
            <div className="flex justify-center">
              <Badge variant="outline" className="border-primary/30 text-primary uppercase tracking-[0.3em] sm:tracking-[0.5em] px-6 sm:px-8 py-1.5 sm:py-2 text-[9px] sm:text-[10px]">
                Clarity Protocol
              </Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold font-headline uppercase tracking-tighter leading-none">
              INTELLIGENCE <br />
              <span className="text-gradient-blue italic">BASE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto px-4">
              Everything you need to know about establishing the IFM Empire.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard 
                  className={cn(
                    "border-white/5 transition-all duration-500 p-0",
                    openFaqIndex === i ? "border-primary/50 bg-primary/5" : "hover:border-white/20"
                  )}
                  hoverable={false}
                >
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="w-full p-5 sm:p-8 flex items-center justify-between text-left group gap-4"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className={cn(
                        "h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-500",
                        openFaqIndex === i ? "bg-primary text-white glow-blue" : "bg-white/5 text-primary"
                      )}>
                        <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight line-clamp-2 sm:line-clamp-none">{faq.q}</h4>
                    </div>
                    <ChevronDown className={cn("h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-muted-foreground transition-transform duration-500", openFaqIndex === i && "rotate-180 text-primary")} />
                  </button>

                  <AnimatePresence>
                    {openFaqIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-24 sm:pb-10 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg font-light border-t border-white/5 pt-6 sm:pt-8">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                 {/* FINAL CALL TO ACTION */}
      <section className="py-24 md:py-48 xl:py-64 relative text-center overflow-hidden border-t border-white/[0.02] bg-[#03060F]">

        {/* BACKGROUND IMAGE LAYER WITH FILTERS */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src={ctaImg?.imageUrl || "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop"} 
            alt="Dynasty Background Texture" 
            fill 
            priority
            className="object-cover opacity-[0.07] grayscale brightness-50 mix-blend-screen scale-105 select-none" 
          />
          {/* Ambient vignette and section blend gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#03060F] via-transparent to-[#03060F]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03060F] via-transparent to-[#03060F]" />
          <div className="absolute inset-0 bg-football-grid opacity-[0.04]" />
        </div>

        <div className="absolute inset-0 radial-glow-blue opacity-25 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-5xl space-y-10 sm:space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.95] sm:leading-[0.7] mb-8 sm:mb-12">
              START YOUR <br />
              <span className="text-gradient-blue italic">DYNASTY.</span>
            </h2>

            <div className="w-full max-w-md mx-auto sm:max-w-none flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto h-14 sm:h-20 lg:h-24 px-6 sm:px-12 lg:px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl sm:rounded-3xl glow-blue text-sm sm:text-xl lg:text-2xl uppercase tracking-[0.1em] sm:tracking-[0.2em]"
              >
                <Link href="/early-access" className="flex items-center justify-center gap-3 sm:gap-6 w-full">
                  <span className="whitespace-nowrap">CLAIM FOUNDING STATUS</span> 
                  <Rocket className="h-5 w-5 sm:h-7 sm:w-7 lg:h-8 lg:w-8 shrink-0" />
                </Link>
              </Button>
            </div>

            <p className="text-muted-foreground uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[10px] mt-8 sm:mt-12 font-bold opacity-60 px-4">
              Phase 1 enrollment is currently 84% full.
            </p>
          </motion.div>
        </div>

        {/* Large Decorative Backdrop Watermark Text */}
        <div className="absolute top-1/2 left-0 w-full text-center pointer-events-none opacity-[0.03] hidden sm:block -translate-y-1/2 select-none z-0">
           <h4 className="text-[20vw] font-bold text-white uppercase tracking-tighter italic">SOVEREIGNTY</h4>
        </div>
      </section>


    </div>
  )
}
