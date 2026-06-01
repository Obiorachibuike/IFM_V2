"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Trophy, Rocket, Shield, Target, Cpu, Zap, 
  Coins, Play, Users, BarChart3, Microscope, 
  ShieldCheck, Sparkles, ChevronRight, Activity,
  History, Star, HelpCircle, ChevronDown
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
const playerCardImg = PlaceHolderImages.find(i => i.id === "aurora-player-card")



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
      <section className="py-20 md:py-36 relative border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 sm:px-6 sm:py-2 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold">
                    The Core Mission
                  </Badge>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1.1] lg:leading-[0.9]">
                  BEYOND THE <br />
                  <span className="text-gradient-gold italic">SIMULATION.</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  IFM is more than a manager game. It is a living football economy where every decision you make—from tactical shifts to stadium investments—creates permanent value on the blockchain.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left max-w-md mx-auto lg:mx-0">
                  {[
                    { label: "Strategic Depth", desc: "Manage squads across seasons." },
                    { label: "Digital Sovereignty", desc: "Own your players and assets." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2 sm:space-y-3">
                      <div className="h-1 w-12 bg-accent hidden lg:block" />
                      <div className="font-bold text-base sm:text-lg uppercase tracking-tight text-center sm:text-left">{item.label}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-light text-center sm:text-left">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full max-w-md lg:max-w-none mx-auto">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-square" hoverable={false}>
                  {tacticsImg && (
                    <Image src={tacticsImg.imageUrl} alt="Tactical Board" fill className="object-cover brightness-50" />
                  )}
                  <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="space-y-3 sm:space-y-6">
                        <Badge className="bg-primary text-white font-bold px-3 py-0.5 sm:px-4 sm:py-1 uppercase tracking-widest text-[8px] sm:text-[10px]">Command Overlay Active</Badge>
                        <h3 className="text-2xl sm:text-4xl font-bold font-headline uppercase leading-tight">THE ARCHITECT'S <br />HUB</h3>
                        <p className="text-muted-foreground text-[10px] sm:text-sm font-light uppercase tracking-widest">Processing Tactical Data: 12.8M Iterations/sec</p>
                     </div>
                  </div>
                  <div className="absolute top-4 right-4 sm:top-8 sm:right-8 max-w-[70%] sm:max-w-none text-right">
                    <span className="text-[8px] sm:text-[10px] font-bold text-white uppercase tracking-[0.2em] sm:tracking-[0.4em] bg-primary px-3 py-1 block sm:inline">TACTICAL INTERFACE: HUD_SQUAD_V2</span>
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
              { title: "Squad Building", desc: "Scout, trade, and build a world-class squad in the transfer market.", icon: Users, image: marketImg, label: "Market Intel" },
              { title: "Competition", desc: "Compete in an 8-division decentralized pyramid for global glory.", icon: Trophy, image: leagueImg, label: "Pyramid Data" },
              { title: "Development", desc: "Evolve academy prospects into legendary digital assets.", icon: Microscope, image: academyImg, label: "Academy Scan" },
              { title: "Ownership", desc: "True ownership of your club, stadium, and legacy assets.", icon: ShieldCheck, image: playerCardImg, label: "Asset Verify" }
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
      <section className="py-20 md:py-36 relative bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-center">
             <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
                <div className="space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left">
                   <div className="flex justify-center lg:justify-start">
                     <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 sm:px-6 sm:py-2 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold">Neural Core v2.4</Badge>
                   </div>
                   <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1.1] lg:leading-[0.9]">
                     REACTIVE <br />
                     <span className="text-gradient-blue italic">SIMULATION.</span>
                   </h2>
                   <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                     Matches in IFM are not just static results. Our Neural Match Engine processes 15,000+ tactical variables per cycle, reacting to your real-time adjustments, substitutions, and momentum shifts.
                   </p>
                   <div className="space-y-4 text-left max-w-xl mx-auto lg:mx-0">
                      {[
                        { label: "Real-time Overrides", desc: "Change intensity and formation mid-match." },
                        { label: "Psychological States", desc: "Players react to fatigue and match pressure." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 sm:gap-6 items-center p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/5">
                           <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><Activity className="h-5 w-5" /></div>
                           <div>
                              <div className="font-bold text-xs sm:text-sm uppercase tracking-tight">{item.label}</div>
                              <div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </motion.div>
             
             <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1 w-full max-w-2xl mx-auto">
                <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-video" hoverable={false}>
                  {matchImg && (
                    <Image src={matchImg.imageUrl} alt="Match Engine" fill className="object-cover brightness-75" />
                  )}
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 sm:space-y-4">
                    <div className="h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-xl animate-pulse cursor-pointer">
                      <Play className="h-6 w-6 sm:h-8 sm:w-8 text-primary fill-current" />
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-bold text-white uppercase tracking-[0.2em] sm:tracking-[0.4em] bg-black/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md">Live Stream: Cycle 8.42</span>
                  </div>
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8">
                     <Badge variant="outline" className="border-primary/40 text-primary uppercase text-[7px] sm:text-[8px] tracking-widest bg-black/40">Broadcast Feed: High Fidelity</Badge>
                  </div>
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-8 max-w-[60%] sm:max-w-none">
                    <span className="text-[8px] sm:text-[10px] font-bold text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-primary px-3 py-1 block">NEURAL ENGINE SIMULATION v2.4</span>
                  </div>
                </GlassCard>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION - INTELLIGENCE BASE */}
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
                        {/* Fixed mobile horizontal paddings */}
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
      <section className="py-24 md:py-48 xl:py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
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

        {/* Banner Background Text Overlay - Responsive hide on micro viewports to avoid overflows */}
        <div className="absolute top-1/2 left-0 w-full text-center pointer-events-none opacity-5 hidden sm:block">
           <h4 className="text-[20vw] font-bold text-white uppercase tracking-tighter italic select-none">SOVEREIGNTY</h4>
        </div>
      </section>

    </div>
  )
}
