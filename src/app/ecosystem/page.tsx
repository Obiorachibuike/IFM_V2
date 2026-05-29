"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Globe, Shield, Zap, Coins, Rocket, 
  Trophy, Users, Target, Activity, 
  Search, Microscope, Network, BarChart3,
  ChevronRight, ArrowRight, LayoutDashboard,
  ShieldCheck, History, Sparkles, Star,
  TrendingUp
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

export default function EcosystemPage() {
  const universeImg = PlaceHolderImages.find(i => i.id === "ecosystem-network")
  const economyImg = PlaceHolderImages.find(i => i.id === "economy-pillar")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "rewards-visual")
  const playerCardImg = PlaceHolderImages.find(i => i.id === "player-card-gold")
  const stadiumImg = PlaceHolderImages.find(i => i.id === "hero-stadium")
  const academyImg = PlaceHolderImages.find(i => i.id === "scouting-ui")
  const leagueImg = PlaceHolderImages.find(i => i.id === "league-table-ui")
  const devImg = PlaceHolderImages.find(i => i.id === "development-tree")

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] font-body selection:bg-primary selection:text-white overflow-x-hidden">

      {/* 1. CINEMATIC ECOSYSTEM HERO */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 py-20 lg:py-0 z-0">

  {/* Background Image Wrapper with relative stacking and contrast overlay */}
  <div className="absolute inset-0 z-[-1]">
    {universeImg && (
      <Image
        src={universeImg.imageUrl}
        alt="IFM Universe"
        fill
        priority
        className="object-cover object-center select-none pointer-events-none"
      />
    )}
    {/* Radial/Linear overlay to force contrast and guarantee text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#05070D]/40 via-[#05070D]/70 to-[#05070D]" />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-12 max-w-7xl"
    >

      <motion.div variants={fadeIn}>
        <Badge className="bg-primary/20 text-white border-primary/30 px-4 sm:px-10 py-2 sm:py-3 uppercase tracking-[0.4em] sm:tracking-[0.8em] text-[9px] sm:text-[10px] font-bold rounded-full backdrop-blur-md whitespace-nowrap">
          The Living Universe
        </Badge>
      </motion.div>

      <motion.h1
        variants={fadeIn}
        className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] xl:text-[12rem] font-bold font-headline tracking-tighter uppercase leading-[0.9] sm:leading-[0.82] text-white"
      >
        A WORLD OF <br className="hidden sm:inline" />
        <span className="text-gradient-blue italic">
          SOVEREIGNTY.
        </span>
      </motion.h1>

      <motion.p
        variants={fadeIn}
        className="text-base sm:text-lg md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed px-2"
      >
        Every decision, every match, and every player development
        shapes your club’s long-term legacy in a persistent football economy.
      </motion.p>

      <motion.div
        variants={fadeIn}
        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4 w-full sm:w-auto px-4 sm:px-0"
      >
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto min-h-[4.5rem] px-8 sm:px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl text-base sm:text-xl uppercase tracking-widest py-4"
        >
          <Link href="/early-access">
            START YOUR CLUB
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="w-full sm:w-auto min-h-[4.5rem] px-8 sm:px-16 border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl text-base sm:text-xl uppercase tracking-widest backdrop-blur-md py-4"
        >
          <Link href="#loop">
            VIEW PROTOCOL
          </Link>
        </Button>
      </motion.div>

    </motion.div>
  </div>

  {/* Floating Banner */}
  <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 hidden md:block z-10">
    <h4 className="text-sm sm:text-xl font-bold text-white uppercase tracking-[0.4em] italic">
      GLOBAL FOOTBALL NETWORK
    </h4>
  </div>

</section>




      {/* 2. CORE ECOSYSTEM LOOP - VISUAL FLOW */}
      <section id="loop" className="py-20 md:py-32 lg:py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-6 sm:space-y-8 md:space-y-12">
                <div>
                  <Badge className="bg-accent/10 text-accent border-accent/20 px-4 sm:px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Temporal Cycle</Badge>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE ENDLESS <br /><span className="text-gradient-gold italic">PROGRESSION.</span></h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                  The IFM ecosystem is a closed-loop universe designed for long-term sustainability. Success on the pitch fuels club growth, which in turn unlocks higher-stakes competition.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    { label: "Play & Compete", desc: "Participate in 22 seasonal league fixtures.", icon: Activity },
                    { label: "Earn Rewards", desc: "Performance yields $IFM from the global treasury.", icon: Coins },
                    { label: "Upgrade Systems", desc: "Invest in facilities, academy, and stadium.", icon: Rocket },
                    { label: "Increase Value", desc: "Permanent on-chain growth for your digital assets.", icon: TrendingUp }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-accent/30 transition-all">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-bold text-base sm:text-lg uppercase tracking-tight">{step.label}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground font-light mt-1 sm:mt-0">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full h-full min-h-[400px] lg:min-h-0">
               <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-square lg:aspect-auto lg:h-full min-h-[400px]" hoverable={false}>
                  {economyImg && (
                    <Image src={economyImg.imageUrl} alt="Economy Flow" fill className="object-cover opacity-60" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="space-y-4 sm:space-y-6">
                        <div>
                          <Badge className="bg-accent text-background font-bold px-4 sm:px-6 py-2 uppercase tracking-widest text-[10px]">Verified Loop v1.0</Badge>
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-bold font-headline uppercase leading-tight text-white">THE REWARD <br />ENGINE</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm font-light max-w-md">Watch your club's valuation grow as you progress through the divisions. Every win is a permanent investment.</p>
                     </div>
                  </div>
                  <div className="absolute top-4 left-4 sm:top-8 sm:left-8 max-w-[calc(100%-2rem)]">
                     <span className="text-[9px] sm:text-[10px] font-bold text-accent uppercase tracking-[0.3em] sm:tracking-[0.5em] bg-black/40 px-3 sm:px-4 py-2 rounded-full backdrop-blur-md block truncate">PROTOCOL: TEMPORAL_PROGRESSION</span>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. LEAGUE STRUCTURE - THE GLOBAL PYRAMID */}
      <section className="py-20 md:py-32 lg:py-48 relative border-t border-white/5 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="order-1 lg:order-none">
               <div className="space-y-6 sm:space-y-8 md:space-y-12">
                  <div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-4 sm:px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Global Pyramid</Badge>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">COMPETITIVE <br /><span className="text-gradient-blue italic">HIERARCHY.</span></h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                    8 Divisions. 22 Matches per season. One Elite. The IFM League is a massive decentralized competition structure with absolute promotion and relegation rules.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { title: "Division 1 (Alpha)", desc: "The pinnacle of the pyramid with the highest reward yields." },
                      { title: "The Payout Cycle", desc: "Days 26-28 of every month are dedicated to treasury distributions." },
                      { title: "Manager Ranking", desc: "Track your prestige against 85,000+ clubs worldwide." }
                    ].map((item, k) => (
                      <div key={k} className="flex gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all cursor-default">
                        <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                          <Trophy className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-bold text-sm uppercase tracking-tight">{item.title}</div>
                          <div className="text-xs text-muted-foreground font-light mt-0.5">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-video" hoverable={false}>
                  {leagueImg && (
                    <Image src={leagueImg.imageUrl} alt="League Pyramid" fill className="object-cover brightness-50" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-12 text-center bg-gradient-to-t from-background via-transparent to-background">
                     <div className="p-6 sm:p-8 bg-black/60 backdrop-blur-3xl rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 space-y-4 sm:space-y-6 max-w-xs sm:max-w-md w-full">
                        <div>
                          <Badge className="bg-primary text-white font-bold px-4 sm:px-6 py-2 text-xs sm:text-sm">LIVE PYRAMID DATA</Badge>
                        </div>
                        <h3 className="text-xl sm:text-3xl font-headline font-bold uppercase tracking-tight leading-none text-white">85,420 CLUBS <br />ENROLLED</h3>
                        <div className="flex gap-3 sm:gap-4 justify-center items-center">
                           <div className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                           <span className="text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-widest">Global Session Active</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8">
                     <span className="text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-[0.3em] sm:tracking-[0.4em]">INTERFACE: PYRAMID_STRUCTURE_V2</span>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL ECOSYSTEM CTA */}
      <section className="py-24 md:py-40 lg:py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-5xl space-y-8 sm:space-y-12 md:space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[10rem] xl:text-[12rem] font-bold font-headline tracking-tighter uppercase leading-[0.9] sm:leading-[0.7] mb-8 sm:mb-12">
              JOIN THE <br />
              <span className="text-gradient-blue italic">NETWORK.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 px-4 sm:px-0">
              <Button asChild size="lg" className="w-full sm:w-auto min-h-[5rem] px-8 sm:px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl sm:rounded-3xl glow-blue text-lg sm:text-2xl uppercase tracking-[0.1em] sm:tracking-[0.2em] py-5">
                <Link href="/early-access" className="flex items-center justify-center gap-4 sm:gap-6">
                  CLAIM YOUR LICENSE <Rocket className="h-6 w-6 sm:h-8 sm:w-8 shrink-0" />
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] mt-8 sm:mt-12 font-bold opacity-60">Phase 1 enrollment is currently 84% full.</p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
