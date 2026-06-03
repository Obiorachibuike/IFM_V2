"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Activity, Coins, Rocket, TrendingUp, Trophy 
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

export default function EcosystemPage() {
  const universeImg = PlaceHolderImages.find(i => i.id === "ecosystem-network")
  const economyImg = PlaceHolderImages.find(i => i.id === "economy-pillar")
  const leagueImg = PlaceHolderImages.find(i => i.id === "league-table-ui")

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] font-body selection:bg-primary selection:text-white overflow-x-hidden">

      {/* 1. CINEMATIC ECOSYSTEM HERO */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 md:py-0 border-b border-white/5">

        {/* BACKGROUND IMAGE - RESPONSIVE OBJECT POSITIONING */}
        <div className="absolute inset-0 z-0 w-full h-full">
          {universeImg?.imageUrl && (
            <Image
              src={universeImg.imageUrl}
              alt="IFM Universe Core"
              fill
              priority
              className="object-cover object-center w-full h-full opacity-25 md:opacity-100"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/80 to-transparent md:hidden" />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
          >
            {/* BADGE */}
            <motion.div variants={fadeIn}>
              <Badge className="bg-white/5 text-white border-white/10 px-4 sm:px-6 md:px-10 py-2 md:py-3 uppercase tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.8em] text-[9px] md:text-[10px] font-bold rounded-full backdrop-blur-xl">
                The Living Universe
              </Badge>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold font-headline tracking-tighter uppercase leading-[1] md:leading-[0.9] text-white"
            >
              A WORLD OF <br />
              <span className="text-gradient-blue italic font-extrabold">
                SOVEREIGNTY.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeIn}
              className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed px-2 sm:px-4 md:px-0"
            >
              Every decision, every match, and every player development shapes your club’s long-term legacy in a persistent football economy.
            </motion.p>

            {/* CTA ACTION ENGINE */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0 max-w-sm sm:max-w-none">
              <Button
                asChild
                size="lg"
                className="h-14 sm:h-16 lg:h-20 px-6 sm:px-10 lg:px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl lg:rounded-2xl glow-blue text-xs sm:text-sm lg:text-xl uppercase tracking-widest w-full sm:w-auto transition-all duration-300"
              >
                <Link href="/early-access">
                  START YOUR CLUB
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 sm:h-16 lg:h-20 px-6 sm:px-10 lg:px-16 border-white/20 hover:bg-white/10 text-white font-bold rounded-xl lg:rounded-2xl text-xs sm:text-sm lg:text-xl uppercase tracking-widest backdrop-blur-xl w-full sm:w-auto transition-all duration-300"
              >
                <Link href="#loop">
                  VIEW PROTOCOL
                </Link>
              </Button>
            </motion.div>

            {/* STATS MATRIX DISPLAY */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 pt-8 md:pt-12 lg:pt-20 border-t border-white/10 w-full max-w-5xl"
            >
              {[
                { label: "Active Clubs", value: "85,420" },
                { label: "Matches Played", value: "1.2M+" },
                { label: "Players Developed", value: "3.5M" },
                { label: "Rewards Paid", value: "4.8M $IFM" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1 text-center md:text-left">
                  <div className="text-[8px] sm:text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest font-bold">
                    {stat.label}
                  </div>
                  <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* FOOTER CALLOUT OVERLAY */}
        <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 hidden md:block pointer-events-none">
           <span className="text-[9px] lg:text-[10px] font-bold text-white uppercase tracking-[0.5em] opacity-40">GLOBAL FOOTBALL NETWORK</span>
        </div>
      </section>

      {/* 2. CORE ECOSYSTEM LOOP - VISUAL FLOW */}
      <section id="loop" className="py-16 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background border-b border-white/[0.02]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-6 sm:space-y-8 lg:space-y-10 order-1">
              <div>
                <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 sm:px-6 sm:py-2 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold">The Temporal Cycle</Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1] sm:leading-[0.95]">THE ENDLESS <br /><span className="text-gradient-gold italic font-extrabold">PROGRESSION.</span></h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                The IFM ecosystem is a closed-loop universe designed for long-term sustainability. Success on the pitch fuels club growth, which in turn unlocks higher-stakes competition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Play & Compete", desc: "Participate in 22 seasonal league fixtures.", icon: Activity },
                  { label: "Earn Rewards", desc: "Performance yields $IFM from the global treasury.", icon: Coins },
                  { label: "Upgrade Systems", desc: "Invest in facilities, academy, and stadium.", icon: Rocket },
                  { label: "Increase Value", desc: "Permanent on-chain growth for your digital assets.", icon: TrendingUp }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-accent/30 transition-all duration-300">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs sm:text-sm uppercase tracking-tight text-white truncate">{step.label}</div>
                      <div className="text-[11px] text-muted-foreground font-light line-clamp-1 mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ARTWORK CARD */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full order-2">
               <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-square sm:aspect-video lg:aspect-square w-full rounded-2xl" hoverable={false}>
                  {economyImg && (
                    <Image src={economyImg.imageUrl} alt="Economy Flow Hub Diagram" fill className="object-cover opacity-30 lg:opacity-60 w-full h-full" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-10 bg-gradient-to-t from-background via-background/40 to-transparent">
                     <div className="space-y-3 sm:space-y-4">
                        <div>
                          <Badge className="bg-accent text-background font-bold px-3 sm:px-4 py-1 uppercase tracking-widest text-[9px] sm:text-[10px]">Verified Loop v1.0</Badge>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-headline uppercase leading-none text-white">THE REWARD <br />ENGINE</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm font-light max-w-sm leading-relaxed">Watch your club&apos;s valuation grow as you progress through the divisions. Every win is a permanent investment.</p>
                     </div>
                  </div>
                  <div className="absolute top-4 left-4 max-w-[calc(100%-2rem)]">
                     <span className="text-[8px] sm:text-[9px] font-bold text-accent uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md block truncate">PROTOCOL: TEMPORAL_PROGRESSION</span>
                  </div>
               </GlassCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. LEAGUE STRUCTURE - THE GLOBAL PYRAMID */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 relative border-t border-white/5 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="order-1 lg:order-2 space-y-6 sm:space-y-8 lg:space-y-10">
               <div>
                 <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 sm:px-6 sm:py-2 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold">The Global Pyramid</Badge>
               </div>
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold uppercase tracking-tighter leading-[1] sm:leading-[0.95]">COMPETITIVE <br /><span className="text-gradient-blue italic font-extrabold">HIERARCHY.</span></h2>
               <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                 8 Divisions. 22 Matches per season. One Elite. The IFM League is a massive decentralized competition structure with absolute promotion and relegation rules.
               </p>
               <div className="space-y-3">
                 {[
                   { title: "Division 1 (Alpha)", desc: "The pinnacle of the pyramid with the highest reward yields." },
                   { title: "The Payout Cycle", desc: "Days 26-28 of every month are dedicated to treasury distributions." },
                   { title: "Manager Ranking", desc: "Track your prestige against 85,000+ clubs worldwide." }
                 ].map((item, k) => (
                   <div key={k} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-default">
                     <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                       <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
                     </div>
                     <div className="min-w-0">
                       <div className="font-bold text-xs sm:text-sm uppercase tracking-tight text-white">{item.title}</div>
                       <div className="text-[11px] text-muted-foreground font-light mt-0.5">{item.desc}</div>
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* PYRAMID CARD */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full order-2 lg:order-1">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-square sm:aspect-video lg:aspect-square w-full rounded-2xl" hoverable={false}>
                  {leagueImg && (
                    <Image src={leagueImg.imageUrl} alt="League Pyramid Interface" fill className="object-cover opacity-30 lg:opacity-60 w-full h-full" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8 text-center bg-gradient-to-t from-background via-background/20 to-background">
                     <div className="p-5 sm:p-8 bg-black/70 backdrop-blur-3xl rounded-2xl border border-white/10 space-y-4 max-w-xs sm:max-w-sm w-full mx-auto">
                        <div>
                          <Badge className="bg-primary text-white font-bold px-4 py-1 text-[10px] sm:text-xs">LIVE PYRAMID DATA</Badge>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-headline font-bold uppercase tracking-tight leading-none text-white">85,420 CLUBS <br />ENROLLED</h3>
                        <div className="flex gap-2 justify-center items-center">
                           <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                           <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest">Global Session Active</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                     <span className="text-[8px] sm:text-[9px] font-bold text-primary uppercase tracking-wider">INTERFACE: PYRAMID_STRUCTURE_V2</span>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FINAL ECOSYSTEM CTA */}
      <section className="py-20 sm:py-32 lg:py-48 relative text-center overflow-hidden bg-[#03060F]">
        <div className="absolute inset-0 radial-glow-blue opacity-20 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8 sm:space-y-12">
          
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9.5rem] font-bold font-headline tracking-tighter uppercase leading-[1] sm:leading-[0.9] text-white">
              JOIN THE <br />
              <span className="text-gradient-blue italic font-extrabold">NETWORK.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-0 max-w-sm mx-auto sm:max-w-none">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto h-16 md:h-20 px-8 sm:px-12 lg:px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl sm:rounded-2xl glow-blue text-xs sm:text-sm lg:text-lg uppercase tracking-widest transition-all duration-300"
              >
                <Link href="/early-access" className="flex items-center justify-center gap-3">
                  CLAIM YOUR LICENSE <Rocket className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                </Link>
              </Button>
            </div>
            
            <p className="text-muted-foreground uppercase tracking-[0.2em] sm:tracking-[0.4em] md:tracking-[0.5em] text-[9px] sm:text-[10px] font-bold opacity-60 px-4">
              Phase 1 enrollment is currently 84% full.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  )
}
