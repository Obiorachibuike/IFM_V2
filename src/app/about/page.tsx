"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Trophy, Cpu, Zap, Activity, History, Microscope, Target, Play, LayoutDashboard, ShieldCheck, Rocket, Gauge, Database
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

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

export default function AboutPage() {
  // Assets mapping
  const heroImg = PlaceHolderImages.find(i => i.id === "about-hero")
  const matchImg = PlaceHolderImages.find(i => i.id === "match-engine-live")
  const tacticsImg = PlaceHolderImages.find(i => i.id === "tactical-board")
  const academyImg = PlaceHolderImages.find(i => i.id === "scouting-ui")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "rewards-visual")
  const playerCardImg = PlaceHolderImages.find(i => i.id === "player-card-gold")
  const tokenImg = PlaceHolderImages.find(i => i.id === "token-visual")

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] overflow-hidden font-body selection:bg-primary selection:text-white">

      {/* 1. CINEMATIC HERO - THE VISION */}
      {/* LOCKED HEIGHT AT 100% VIEWPORT */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE - FORCED 100% WIDTH AND HEIGHT VIA OBJECT-FILL */}
        <div className="absolute inset-0 z-0 w-full h-full">
          {heroImg?.imageUrl && (
            <Image
              src={heroImg.imageUrl}
              alt="IFM Vision"
              fill
              priority
              className="object-fill md:object-cover w-full h-full"
            />
          )}
        </div>

        {/* CONTENT - TIGHTENED MOBILE SPACING TO REMAIN COMPACT WITHIN SCREEN BOUNDS */}
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">

          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-6 md:space-y-12"
          >

            {/* BADGE */}
            <motion.div variants={fadeInUp}>
              <Badge className="bg-white/5 text-white border-white/10 px-6 md:px-10 py-2 md:py-3 uppercase tracking-[0.6em] md:tracking-[0.8em] text-[9px] md:text-[10px] font-bold rounded-full backdrop-blur-xl">
                The Architect Protocol
              </Badge>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl lg:text-[8rem] font-bold font-headline tracking-tighter uppercase leading-[0.95] md:leading-[0.9] text-white"
            >
              BUILD. OWN. <br />
              <span className="text-gradient-blue italic">
                DOMINATE.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-2xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed px-4 md:px-0"
            >
              IFM is a persistent football management simulation where strategic intelligence meets digital sovereignty.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-4 md:pt-10 w-full sm:w-auto px-6 sm:px-0">

              <Button
                asChild
                size="lg"
                className="h-14 sm:h-20 px-8 sm:px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl sm:rounded-2xl glow-blue text-lg sm:text-xl uppercase tracking-widest w-full sm:w-auto"
              >
                <Link href="/early-access">
                  START YOUR CLUB
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 sm:h-20 px-8 sm:px-16 border-white/20 hover:bg-white/10 text-white font-bold rounded-xl sm:rounded-2xl text-lg sm:text-xl uppercase tracking-widest backdrop-blur-xl w-full sm:w-auto"
              >
                <Link href="/gameplay">
                  WATCH GAMEPLAY
                </Link>
              </Button>

            </motion.div>

            {/* STATS */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 pt-8 md:pt-20 border-t border-white/10 w-full max-w-5xl"
            >
              {[
                { label: "Active Clubs", value: "85,420" },
                { label: "Matches Played", value: "1.2M+" },
                { label: "Players Developed", value: "3.5M" },
                { label: "Rewards Paid", value: "4.8M $IFM" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest font-bold">
                    {stat.label}
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>

        {/* Banner callout */}
        <div className="absolute bottom-12 left-12 hidden md:block">
           <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em] opacity-40">System Node: Central Architecture / 001</span>
        </div>
      </section>

      {/* 2. THE SEASONAL CADENCE - VISUAL TIMELINE */}
      <section className="py-48 relative border-y border-white/5 bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32"
          >
            <div className="space-y-6 text-left">
              <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Temporal Loop</Badge>
              <h2 className="text-5xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">THE SEASONAL <br /><span className="text-primary italic">CADENCE</span></h2>
            </div>
            <p className="text-muted-foreground text-xl font-light max-w-md lg:text-right">
              Every IFM season is a 4-week tactical marathon. Consistent management is rewarded with persistent club growth and asset appreciation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-24">
            {[
              { 
                title: "Pre-Season Ops", 
                desc: "Strengthen squads, finalize tactics, and define the seasonal objective during the 48-hour window. Infrastructure upgrades are prioritized here.", 
                icon: Target, 
                day: "Day 1-2",
                image: tacticsImg,
                overlay: "Tactical Configuration"
              },
              { 
                title: "Academy Reveal", 
                desc: "Every club generates unique youth prospects as NFTs. Analyze their genetic potential and secure them to your academy registry.", 
                icon: Microscope, 
                day: "Day 3",
                image: academyImg,
                overlay: "Prospect Discovery"
              },
              { 
                title: "Daily Matches", 
                desc: "22 days of competitive league fixtures against real managers worldwide. Live tactical adjustments and Neural Fatigue management are critical.", 
                icon: Play, 
                day: "Days 4-25",
                image: matchImg,
                overlay: "Live Competition"
              },
              { 
                title: "The Payout", 
                desc: "Final standings determine promotion, relegation, and reward distributions from the global treasury. Your on-chain history is permanently recorded.", 
                icon: Trophy, 
                day: "Days 26-28",
                image: rewardsImg,
                overlay: "Yield Calculation"
              },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className={cn("space-y-8", i % 2 === 1 ? "lg:order-2" : "lg:order-1")}>
                  <div className="flex items-center gap-6">
                    <div className="text-6xl font-headline font-bold text-primary/10 italic">0{i+1}</div>
                    <div>
                      <Badge className="bg-primary/10 text-primary uppercase text-[10px] font-bold tracking-widest">{step.day}</Badge>
                      <h3 className="text-4xl font-headline font-bold uppercase mt-2">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                </div>
                <div className={cn(i % 2 === 1 ? "lg:order-1" : "lg:order-2")}>
                   <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden aspect-video relative" hoverable={false}>
                      {step.image && (
                        <Image src={step.image.imageUrl} alt={step.title} fill className="object-cover brightness-75 hover:scale-105 transition-transform duration-1000" data-ai-hint={step.image.imageHint} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <span className="text-[10px] font-bold text-white uppercase tracking-[0.8em] bg-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           {step.overlay}
                         </span>
                      </div>
                      <div className="absolute bottom-4 left-6">
                        <span className="text-[8px] font-bold text-primary uppercase tracking-[0.4em]">{step.day} Phase active</span>
                      </div>
                   </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE REWARD PROTOCOL - MATCH PERFORMANCE REWARDS */}
      <section className="py-48 relative border-y border-white/5 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
              <div className="space-y-12">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Utility Hub</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE REWARD <br /><span className="text-gradient-blue italic">ENGINE.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  The $IFM token is the lifeblood of the universe. It is a gameplay-first utility asset rewarded for match performance. <strong>Yield quantities are dynamic and performance-dependent.</strong>
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Match Victory", desc: "Maximum $IFM yield for securing 3 points. Rewarded instantly upon match finalization.", icon: Zap, status: "MAX YIELD" },
                    { title: "Tactical Draw", desc: "Standard $IFM yield for high-level tactical stalemates. Keeps your club operational.", icon: Activity, status: "STANDARD" },
                    { title: "Competition Bonus", desc: "Higher rewards for cup matches and knockout tournaments compared to standard league play.", icon: Trophy, status: "MULTIPLIER" },
                    { title: "Loss Consolation", desc: "Minimal 'Neural Data' yield rewarded for match participation and stadium attendance.", icon: History, status: "MINIMAL" }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-6 items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all cursor-default group">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <feat.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                           <div className="font-bold text-lg uppercase tracking-tight">{feat.title}</div>
                           <Badge variant="outline" className="text-[8px] border-primary/20 text-primary">{feat.status}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground font-light">{feat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-square" hoverable={false}>
                  {tokenImg && (
                    <Image src={tokenImg.imageUrl} alt="Reward Engine" fill className="object-cover opacity-60" data-ai-hint="digital crypto coin" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="p-8 bg-black/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 space-y-6">
                        <div className="flex justify-between items-center">
                           <Badge className="bg-primary text-white font-bold px-6 py-2 uppercase tracking-widest text-[10px]">Active Session Payout</Badge>
                           <span className="text-[10px] font-bold text-primary animate-pulse">CALCULATING YIELD...</span>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between items-end">
                              <div>
                                 <div className="text-[10px] text-muted-foreground uppercase mb-1">Last Match: Neo London (W)</div>
                                 <div className="text-4xl font-bold font-headline text-white">4,250 $IFM</div>
                              </div>
                              <div className="text-right">
                                 <div className="text-[10px] text-primary font-bold uppercase">Performance</div>
                                 <div className="text-2xl font-bold text-white">S-TIER</div>
                              </div>
                           </div>
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-primary glow-blue" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-12 left-12">
                     <h4 className="text-xl font-bold text-white uppercase tracking-[0.3em]">IFM PROTOCOL: TREASURY_V4</h4>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SOVEREIGN ASSETS - NFT SYSTEM */}
      <section className="py-48 relative overflow-hidden bg-accent/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Functional Ownership</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">ASSETS WITH <br /><span className="text-gradient-gold italic">PURPOSE.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  NFTs in IFM are not collectibles. They are functional gameplay units. You own your squad, your stadium, and your identity—verified on-chain and evolving with every match.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Player Cards", desc: "Identity, stats, and progression history encoded as on-chain logic.", icon: Cpu },
                    { title: "Stadium Units", desc: "Customizable, revenue-generating assets that evolve visually.", icon: LayoutDashboard },
                    { title: "Club Licenses", desc: "Your keys to the competitive pyramid and global reward pool.", icon: ShieldCheck },
                    { title: "Academy Prospects", desc: "Genetic youth assets generated uniquely by your club's scouting bot.", icon: Microscope }
                  ].map((item, k) => (
                    <div key={k} className="space-y-3">
                       <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 text-accent" />
                          <span className="font-bold uppercase tracking-tight text-sm">{item.title}</span>
                       </div>
                       <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <div className="relative aspect-[3/4] max-w-md mx-auto">
                  <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-full animate-pulse" />
                  <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden h-full relative group" hoverable={false}>
                    {playerCardImg && (
                      <Image src={playerCardImg.imageUrl} alt="NFT Card" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" data-ai-hint="holographic soccer card" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute top-8 right-8">
                       <Badge className="bg-accent text-background font-bold px-6 py-2 uppercase tracking-[0.2em] shadow-2xl">LEGENDARY</Badge>
                    </div>
                    <div className="absolute top-8 left-8">
                       <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Digital Asset: PLR_942</span>
                    </div>
                    <div className="absolute bottom-10 left-10 right-10">
                       <div className="p-6 bg-black/60 backdrop-blur-3xl rounded-2xl border border-white/10 space-y-4">
                          <div className="flex justify-between items-end">
                             <div>
                                <div className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">On-Chain Identity</div>
                                <div className="text-3xl font-bold font-headline uppercase leading-none">STORM v1.0</div>
                             </div>
                             <div className="text-right">
                                <div className="text-[10px] text-muted-foreground font-bold uppercase">Potential</div>
                                <div className="text-2xl font-bold text-accent">98</div>
                             </div>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full w-4/5 bg-accent" />
                          </div>
                       </div>
                    </div>
                  </GlassCard>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MATCH ENGINE SHOWCASE - BROADCAST UI */}
      <section className="py-48 relative border-y border-white/5 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
              <div className="space-y-12">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Neural Engine v2.4</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">SIMULATION <br /><span className="text-gradient-blue italic">SUPREMACY.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  The IFM Match Engine processes 15,000+ tactical variables per cycle. Every momentum shift, fatigue trigger, and tactical override is calculated in real-time to determine match outcomes and subsequent rewards.
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Reactive AI", desc: "Players adjust behavior based on match pressure and chemistry.", icon: Cpu },
                    { label: "Real-time Overrides", desc: "Managers can change intensity and shape mid-match.", icon: Gauge },
                    { label: "Physics Integrated", desc: "Ball physics and player collisions are 60Hz deterministic.", icon: Database }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-center p-6 rounded-2xl bg-white/5 border border-white/5">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg uppercase tracking-tight">{step.label}</div>
                        <div className="text-sm text-muted-foreground font-light">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-video" hoverable={false}>
                  {matchImg && (
                    <Image src={matchImg.imageUrl} alt="Match Broadcast" fill className="object-cover" data-ai-hint="football broadcast simulation" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                  <div className="absolute bottom-6 left-8 flex items-center gap-4">
                     <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                     <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Live Session: Simulated Alpha</span>
                  </div>
                  <div className="absolute top-6 left-8">
                     <h4 className="text-xl font-bold text-white uppercase tracking-widest italic bg-primary px-4 py-1">NEURAL BROADCAST</h4>
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
            <h2 className="text-7xl md:text-[12rem] font-bold font-headline tracking-tighter uppercase leading-[0.8] mb-12">
              START YOUR <br />
              <span className="text-gradient-blue italic">DYNASTY</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="h-24 px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl glow-blue text-2xl uppercase tracking-widest">
                <Link href="/early-access" className="flex items-center gap-6">
                  CLAIM YOUR LICENSE <Rocket className="h-8 w-8" />
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground uppercase tracking-[0.5em] text-[10px] mt-12 font-bold opacity-60">Phase 1 enrollment is currently 84% full.</p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
