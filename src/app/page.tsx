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
  const tacticsImg = PlaceHolderImages.find(i => i.id === "tactical-board")
  const matchImg = PlaceHolderImages.find(i => i.id === "match-engine-live")
  const marketImg = PlaceHolderImages.find(i => i.id === "transfer-market-ui")
  const leagueImg = PlaceHolderImages.find(i => i.id === "league-table-ui")
  const academyImg = PlaceHolderImages.find(i => i.id === "academy-reveal")
  const playerCardImg = PlaceHolderImages.find(i => i.id === "player-card-gold")

  return (
    <div className="flex flex-col w-full bg-background selection:bg-primary selection:text-white">
      
      {/* 1. CINEMATIC BANNER */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        //  {genesisBanner && (
            <Image
              src={genesisBanner.imageUrl}
              alt="IFM Genesis"
              fill
              className="object-cover brightness-[0.4]"
              priority
              data-ai-hint="IFM Genesis stadium"
            />
          )}//
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 football-grid opacity-10" />
          
          <div className="absolute bottom-20 left-12 hidden md:block">
            <h4 className="text-4xl font-bold text-white uppercase tracking-[0.4em] italic opacity-80">DAWN OF SOVEREIGNTY</h4>
            <p className="text-[10px] text-primary font-bold uppercase tracking-[0.5em] mt-2">Protocol: Genesis_Initial_Active</p>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-6"
          >
             <div className="inline-flex items-center gap-4 px-6 py-2 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-full mb-8">
               <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
               <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">Genesis Protocol Active</span>
             </div>
             <h1 className="text-5xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-none">
               BUILD. OWN. <br />
               <span className="text-gradient-blue italic">DOMINATE.</span>
             </h1>
             <p className="text-muted-foreground uppercase tracking-[0.6em] text-xs font-bold opacity-60">Phase 1: Establishing the Empire</p>
             
             <div className="flex flex-wrap justify-center gap-6 pt-10">
                <Button asChild size="lg" className="h-16 px-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-lg uppercase tracking-widest">
                  <Link href="/early-access">JOIN EARLY ACCESS</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-12 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-lg uppercase tracking-widest backdrop-blur-xl">
                  <Link href="/gameplay">WATCH GAMEPLAY</Link>
                </Button>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. "WHAT IS IFM?" - THE FANTASY */}
      <section className="py-48 relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Core Mission</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">BEYOND THE <br /><span className="text-gradient-gold italic">SIMULATION.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  IFM is more than a manager game. It is a living football economy where every decision you make—from tactical shifts to stadium investments—creates permanent value on the blockchain.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Strategic Depth", desc: "Manage squads across seasons." },
                    { label: "Digital Sovereignty", desc: "Own your players and assets." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <div className="h-1 w-12 bg-accent" />
                      <div className="font-bold text-lg uppercase tracking-tight">{item.label}</div>
                      <div className="text-sm text-muted-foreground font-light">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-square" hoverable={false}>
                  {tacticsImg && (
                    <Image src={tacticsImg.imageUrl} alt="Tactical Board" fill className="object-cover brightness-50" />
                  )}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="space-y-6">
                        <Badge className="bg-primary text-white font-bold px-4 py-1 uppercase tracking-widest text-[10px]">Command Overlay Active</Badge>
                        <h3 className="text-4xl font-bold font-headline uppercase leading-tight">THE ARCHITECT'S <br />HUB</h3>
                        <p className="text-muted-foreground text-sm font-light uppercase tracking-widest">Processing Tactical Data: 12.8M Iterations/sec</p>
                     </div>
                  </div>
                  <div className="absolute top-8 right-8">
                    <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] bg-primary px-4 py-1">TACTICAL INTERFACE: HUD_SQUAD_V2</span>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. GAMEPLAY PILLARS GRID */}
      <section className="py-48 bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32 space-y-8">
            <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">THE FOUR <span className="text-primary italic">PILLARS</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Master the systems of the living football universe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Squad Building", desc: "Scout, trade, and build a world-class squad in the transfer market.", icon: Users, image: marketImg, label: "Market Intel" },
              { title: "Competition", desc: "Compete in an 8-division decentralized pyramid for global glory.", icon: Trophy, image: leagueImg, label: "Pyramid Data" },
              { title: "Development", desc: "Evolve academy prospects into legendary digital assets.", icon: Microscope, image: academyImg, label: "Academy Scan" },
              { title: "Ownership", desc: "True ownership of your club, stadium, and legacy assets.", icon: ShieldCheck, image: playerCardImg, label: "Asset Verify" }
            ].map((pillar, i) => (
              <GlassCard key={i} className="p-0 group overflow-hidden border-white/5 flex flex-col" glowColor={i % 2 === 0 ? "blue" : "gold"}>
                <div className="relative aspect-[4/5]">
                  {pillar.image && (
                    <Image src={pillar.image.imageUrl} alt={pillar.title} fill className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
                  <div className="absolute top-4 left-4">
                     <Badge className="bg-black/60 backdrop-blur-md text-[8px] uppercase tracking-widest border-white/10">{pillar.label}</Badge>
                  </div>
                  <div className="absolute bottom-6 left-8">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                     <span className="text-[8px] font-bold text-white uppercase tracking-widest bg-primary/40 px-2 py-1">MODULE_TYPE: {pillar.label}</span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h4 className="text-2xl font-bold font-headline uppercase">{pillar.title}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{pillar.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MATCH ENGINE SHOWCASE */}
      <section className="py-48 relative bg-accent/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
                <div className="space-y-12">
                   <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Neural Core v2.4</Badge>
                   <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">REACTIVE <br /><span className="text-gradient-blue italic">SIMULATION.</span></h2>
                   <p className="text-xl text-muted-foreground font-light leading-relaxed">
                     Matches in IFM are not just static results. Our Neural Match Engine processes 15,000+ tactical variables per cycle, reacting to your real-time adjustments, substitutions, and momentum shifts.
                   </p>
                   <div className="space-y-6">
                      {[
                        { label: "Real-time Overrides", desc: "Change intensity and formation mid-match." },
                        { label: "Psychological States", desc: "Players react to fatigue and match pressure." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-center p-6 rounded-2xl bg-white/5 border border-white/5">
                           <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><Activity className="h-5 w-5" /></div>
                           <div>
                              <div className="font-bold text-sm uppercase tracking-tight">{item.label}</div>
                              <div className="text-xs text-muted-foreground">{item.desc}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </motion.div>
             <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1">
                <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-video" hoverable={false}>
                  {matchImg && (
                    <Image src={matchImg.imageUrl} alt="Match Engine" fill className="object-cover brightness-75" />
                  )}
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                    <div className="h-20 w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-xl animate-pulse cursor-pointer">
                      <Play className="h-8 w-8 text-primary fill-current" />
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">Live Stream: Cycle 8.42</span>
                  </div>
                  <div className="absolute bottom-6 right-8">
                     <Badge variant="outline" className="border-primary/40 text-primary uppercase text-[8px] tracking-widest">Broadcast Feed: High Fidelity</Badge>
                  </div>
                  <div className="absolute top-6 left-8">
                    <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em] bg-primary px-4 py-1">NEURAL ENGINE SIMULATION v2.4</span>
                  </div>
                </GlassCard>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION - INTELLIGENCE BASE */}
      <section className="py-48 relative border-t border-white/5 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-24 space-y-6">
            <Badge variant="outline" className="border-primary/30 text-primary uppercase tracking-[0.5em] px-8 py-2">
              Clarity Protocol
            </Badge>
            <h2 className="text-5xl md:text-8xl font-bold font-headline uppercase tracking-tighter">
              INTELLIGENCE <br /><span className="text-gradient-blue italic">BASE</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">Everything you need to know about established the IFM Empire.</p>
          </div>

          <div className="space-y-6">
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
                    "border-white/5 transition-all duration-500",
                    openFaqIndex === i ? "border-primary/50 bg-primary/5" : "hover:border-white/20"
                  )}
                  hoverable={false}
                >
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="w-full p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <div className={cn(
                        "h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-500",
                        openFaqIndex === i ? "bg-primary text-white glow-blue" : "bg-white/5 text-primary"
                      )}>
                        <HelpCircle className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-bold uppercase tracking-tight">{faq.q}</h4>
                    </div>
                    <ChevronDown className={cn("h-6 w-6 text-muted-foreground transition-transform duration-500", openFaqIndex === i && "rotate-180 text-primary")} />
                  </button>
                  
                  <AnimatePresence>
                    {openFaqIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-24 pb-10 text-muted-foreground leading-relaxed text-lg font-light border-t border-white/5 pt-8">
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
      <section className="py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-7xl md:text-[12rem] font-bold font-headline tracking-tighter uppercase leading-[0.7] mb-12">
              START YOUR <br />
              <span className="text-gradient-blue italic">DYNASTY.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="h-24 px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl glow-blue text-2xl uppercase tracking-[0.2em]">
                <Link href="/early-access" className="flex items-center gap-6">
                  CLAIM FOUNDING STATUS <Rocket className="h-8 w-8" />
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground uppercase tracking-[0.5em] text-[10px] mt-12 font-bold opacity-60">Phase 1 enrollment is currently 84% full.</p>
          </motion.div>
        </div>
        
        {/* Banner Overlay */}
        <div className="absolute top-1/2 left-0 w-full text-center pointer-events-none opacity-5">
           <h4 className="text-[20vw] font-bold text-white uppercase tracking-tighter italic">SOVEREIGNTY</h4>
        </div>
      </section>

    </div>
  )
}
