
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
          {universeImg && (
            <Image 
              src={universeImg.imageUrl} 
              alt="IFM Universe" 
              fill 
              className="object-cover opacity-20 grayscale brightness-50"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-transparent" />
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 radial-glow-blue opacity-40" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-12"
          >
            <motion.div variants={fadeIn}>
              <Badge className="bg-primary/10 text-primary border-primary/30 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full backdrop-blur-3xl">
                The Living Universe
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-[11rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]"
            >
              A WORLD OF <br />
              <span className="text-gradient-blue italic">SOVEREIGNTY.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed opacity-80"
            >
              Every decision, every match, and every player development shapes your club’s long-term legacy in a persistent football economy.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 pt-10">
              <Button asChild size="lg" className="h-20 px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl uppercase tracking-widest">
                <Link href="/early-access">START YOUR CLUB</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-16 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest backdrop-blur-xl">
                <Link href="#loop">VIEW PROTOCOL</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Banner Overlay */}
        <div className="absolute bottom-16 right-16 hidden md:block">
           <h4 className="text-2xl font-bold text-white uppercase tracking-[0.4em] italic">GLOBAL FOOTBALL NETWORK</h4>
        </div>
      </section>

      {/* 2. CORE ECOSYSTEM LOOP - VISUAL FLOW */}
      <section id="loop" className="py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Temporal Cycle</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE ENDLESS <br /><span className="text-gradient-gold italic">PROGRESSION.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  The IFM ecosystem is a closed-loop universe designed for long-term sustainability. Success on the pitch fuels club growth, which in turn unlocks higher-stakes competition.
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Play & Compete", desc: "Participate in 22 seasonal league fixtures.", icon: Activity },
                    { label: "Earn Rewards", desc: "Performance yields $IFM from the global treasury.", icon: Coins },
                    { label: "Upgrade Systems", desc: "Invest in facilities, academy, and stadium.", icon: Rocket },
                    { label: "Increase Value", desc: "Permanent on-chain growth for your digital assets.", icon: TrendingUp }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-center p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-accent/30 transition-all">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
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
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-square" hoverable={false}>
                  {economyImg && (
                    <Image src={economyImg.imageUrl} alt="Economy Flow" fill className="object-cover opacity-60" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="space-y-6">
                        <Badge className="bg-accent text-background font-bold px-6 py-2 uppercase tracking-widest text-[10px]">Verified Loop v1.0</Badge>
                        <h3 className="text-4xl font-bold font-headline uppercase leading-tight text-white">THE REWARD <br />ENGINE</h3>
                        <p className="text-muted-foreground text-sm font-light">Watch your club's valuation grow as you progress through the divisions. Every win is a permanent investment.</p>
                     </div>
                  </div>
                  <div className="absolute top-8 left-8">
                     <span className="text-[10px] font-bold text-accent uppercase tracking-[0.5em] bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">PROTOCOL: TEMPORAL_PROGRESSION</span>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. LEAGUE STRUCTURE - THE GLOBAL PYRAMID */}
      <section className="py-48 relative border-t border-white/5 bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <div className="space-y-12">
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Global Pyramid</Badge>
                  <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">COMPETITIVE <br /><span className="text-gradient-blue italic">HIERARCHY.</span></h2>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">
                    8 Divisions. 22 Matches per season. One Elite. The IFM League is a massive decentralized competition structure with absolute promotion and relegation rules.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Division 1 (Alpha)", desc: "The pinnacle of the pyramid with the highest reward yields." },
                      { title: "The Payout Cycle", desc: "Days 26-28 of every month are dedicated to treasury distributions." },
                      { title: "Manager Ranking", desc: "Track your prestige against 85,000+ clubs worldwide." }
                    ].map((item, k) => (
                      <div key={k} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all cursor-default">
                        <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                          <Trophy className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-bold text-sm uppercase tracking-tight">{item.title}</div>
                          <div className="text-xs text-muted-foreground font-light">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-video" hoverable={false}>
                  {leagueImg && (
                    <Image src={leagueImg.imageUrl} alt="League Pyramid" fill className="object-cover brightness-50" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-center bg-gradient-to-t from-background via-transparent to-background">
                     <div className="p-8 bg-black/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 space-y-6">
                        <Badge className="bg-primary text-white font-bold px-6 py-2">LIVE PYRAMID DATA</Badge>
                        <h3 className="text-3xl font-headline font-bold uppercase tracking-tight leading-none text-white">85,420 CLUBS <br />ENROLLED</h3>
                        <div className="flex gap-4 justify-center">
                           <div className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                           <span className="text-[10px] font-bold text-white uppercase tracking-widest">Global Session Active</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute bottom-6 left-8">
                     <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">INTERFACE: PYRAMID_STRUCTURE_V2</span>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL ECOSYSTEM CTA */}
      <section className="py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-7xl md:text-[12rem] font-bold font-headline tracking-tighter uppercase leading-[0.7] mb-12">
              JOIN THE <br />
              <span className="text-gradient-blue italic">NETWORK.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="h-24 px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl glow-blue text-2xl uppercase tracking-[0.2em]">
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
