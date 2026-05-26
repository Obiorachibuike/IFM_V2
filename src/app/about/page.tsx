
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Trophy, Shield, Target, Cpu, Users, Zap, Coins, 
  TrendingUp, BarChart3, Clock, Globe, Rocket, 
  Play, Search, LayoutDashboard, Microscope, Network,
  ChevronRight, ArrowRight, ShieldCheck, Activity,
  Dna, Boxes, HeartPulse, BrainCircuit, Sparkles,
  Lock, Wallet, Layers
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
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AboutPage() {
  const heroImg = PlaceHolderImages.find(i => i.id === "hero-stadium")
  const tacticsImg = PlaceHolderImages.find(i => i.id === "tactical-board")
  const academyImg = PlaceHolderImages.find(i => i.id === "scouting-ui")
  const matchImg = PlaceHolderImages.find(i => i.id === "match-engine-live")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "rewards-visual")
  const nftImg = PlaceHolderImages.find(i => i.id === "player-card-gold")
  const aboutHero = PlaceHolderImages.find(i => i.id === "about-hero")

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] overflow-hidden selection:bg-accent selection:text-background">
      
      {/* 1. CINEMATIC HERO - THE ARCHITECT'S VISION */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt="IFM Vision" 
              fill 
              className="object-cover opacity-40 grayscale-[0.5] brightness-[0.3]"
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
            className="flex flex-col items-center text-center space-y-10"
          >
            <motion.div variants={fadeIn}>
              <Badge className="bg-primary/10 text-primary border-primary/30 px-8 py-2.5 uppercase tracking-[0.6em] text-[10px] font-bold rounded-full backdrop-blur-xl">
                The Architect Protocol
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-[11rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]"
            >
              BUILD. DEVELOP. <br />
              <span className="text-gradient-blue italic">OWN. COMPETE.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed opacity-80"
            >
              IFM is a persistent football management universe where tactical intelligence meets digital sovereignty. Build your club, develop your talent, and create a permanent legacy on the blockchain.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 pt-6">
              <Button asChild size="lg" className="h-20 px-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl uppercase tracking-widest">
                <Link href="/#early-access">START YOUR CLUB</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-14 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest">
                <Link href="/gameplay">WATCH GAMEPLAY</Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 w-full max-w-5xl"
            >
              {[
                { label: "Active Clubs", value: "12,402", icon: Shield },
                { label: "Matches Simulated", value: "1.2M+", icon: Activity },
                { label: "Developed Talent", value: "48K+", icon: Target },
                { label: "Treasury Rewards", value: "$4.2M", icon: Coins },
              ].map((metric, i) => (
                <div key={i} className="flex flex-col items-center space-y-2 group cursor-default">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <metric.icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold font-headline tracking-tight">{metric.value}</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE SEASONAL CADENCE - VISUAL TIMELINE */}
      <section className="py-48 relative border-y border-white/5 bg-card/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full radial-glow-blue opacity-5 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-32">
            <div className="space-y-6 text-left">
              <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Temporal Loop</Badge>
              <h2 className="text-5xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">THE SEASONAL <br /><span className="text-primary italic">CADENCE</span></h2>
            </div>
            <p className="text-muted-foreground text-xl font-light max-w-md lg:text-right">
              Every IFM season is a 4-week tactical marathon designed for consistency, competition, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Pre-Season", desc: "Squad analysis, scouting, and infrastructure planning to define the seasonal objective.", icon: Target, day: "Days 1-2" },
              { title: "Academy Reveal", desc: "Discover and mint fresh youth prospects unique to your club's geography.", icon: Microscope, day: "Day 3" },
              { title: "Daily Matches", desc: "22 days of daily competitive league fixtures against real managers worldwide.", icon: Play, day: "Days 4-25" },
              { title: "The Payout", desc: "Promotion, relegation, and treasury reward distributions based on standings.", icon: Trophy, day: "Days 26-28" },
            ].map((step, i) => (
              <GlassCard key={i} className="p-10 border-white/5 bg-white/5 group relative h-full flex flex-col justify-between" hoverable={true}>
                <div className="absolute top-0 right-0 p-8 text-primary/10 font-headline text-6xl font-bold italic">{i+1}</div>
                <div>
                  <div className="text-primary text-[10px] font-bold uppercase tracking-widest mb-6 opacity-60">{step.day}</div>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-all duration-500">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4 uppercase tracking-tighter">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NFT OWNERSHIP LAYER - SOVEREIGN ASSETS */}
      <section className="py-48 relative overflow-hidden bg-accent/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Sovereignty Layer</Badge>
                <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">ASSETS THAT <br /><span className="text-gradient-gold italic">EVOLVE.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  In IFM, assets are functional gameplay units. NFTs represent the core layer of your empire's progression, performance history, and market value.
                </p>
                
                <div className="space-y-8">
                  {[
                    { title: "NFT Player Cards", desc: "Every player is a unique on-chain asset with rarity tiers from Common to Iconic.", icon: Users },
                    { title: "Evolving Stadiums", desc: "Upgrade your capacity and facilities; your stadium NFT evolves visually as prestige grows.", icon: Shield },
                    { title: "Academy Prospects", desc: "Discover and sign seasonal prospects unique to your club's neural geography.", icon: Microscope }
                  ].map((asset, k) => (
                    <div key={k} className="flex gap-6 group">
                      <div className="h-14 w-14 shrink-0 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500">
                        <asset.icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold uppercase tracking-tight">{asset.title}</h4>
                        <p className="text-sm text-muted-foreground font-light">{asset.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-[4/5]" hoverable={false}>
                {nftImg && (
                  <Image src={nftImg.imageUrl} alt="NFT Asset" fill className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                  <Badge className="bg-accent text-background font-bold px-6 py-2 uppercase tracking-widest">ICONIC TIER</Badge>
                  <div className="p-6 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-[10px] font-bold text-accent uppercase tracking-widest">Verified On-Chain Asset</div>
                      <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                    </div>
                    <div className="flex justify-between text-white font-headline text-lg font-bold">
                      <span>ASSET ID</span>
                      <span>#IFM-ICON-001</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. MANAGEMENT IDENTITIES - CHOOSE YOUR ARCHETYPE */}
      <section className="py-48 relative bg-card/5 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32 space-y-8">
             <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Archetype Protocol</Badge>
             <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">CHOOSE YOUR <br /><span className="text-primary italic">IDENTITY</span></h2>
             <p className="text-muted-foreground text-xl font-light mt-4">Define your club's philosophy through your strategic approach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "The Mastermind", desc: "Superior tactics, smart lineups, and real-time match reads define your success.", icon: Zap, theme: "blue" },
              { title: "The Academy Club", desc: "Develop future stars from youth ranks and build a sustainable homegrown empire.", icon: Microscope, theme: "gold" },
              { title: "The Value Finder", desc: "Identify undervalued talent on the market and flip them for ecosystem gains.", icon: BarChart3, theme: "blue" },
              { title: "The Big Spender", desc: "Utilize your $IFM treasury to build world-class squads during transfer windows.", icon: Coins, theme: "gold" },
            ].map((style, i) => (
              <GlassCard 
                key={i} 
                className="p-12 border-white/5 hover:bg-primary/5 group h-full flex flex-col" 
                glowColor={style.theme === "blue" ? "blue" : "gold"}
              >
                <div className={cn(
                  "h-20 w-20 flex items-center justify-center rounded-3xl mb-10 transition-all group-hover:scale-110",
                  style.theme === "blue" ? "bg-primary/10 text-primary border-primary/20" : "bg-accent/10 text-accent border-accent/20"
                )}>
                  <style.icon className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold font-headline mb-6 uppercase tracking-tighter leading-none">{style.title}</h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed">{style.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MATCH ENGINE SHOWCASE - NEURAL SIMULATION */}
      <section className="py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-video" hoverable={false}>
                  {matchImg && (
                    <Image src={matchImg.imageUrl} alt="Match Engine" fill className="object-cover brightness-50" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-primary">
                        <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-red-500 animate-ping" /> LIVE ANALYTICS</div>
                        <div>POSSESSION: 62% • TACTICAL SYNC: OPTIMAL</div>
                      </div>
                    </div>
                  </div>
               </GlassCard>
            </motion.div>
            <div className="space-y-12">
              <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Neural Core</Badge>
              <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE ENGINE OF <br /><span className="text-primary italic">AUTHENTICITY.</span></h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                The IFM Match Engine processes 15,000+ variables per cycle, reflecting authentic player psychology, physics-based ball movement, and real-time tactical overrides.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Real-Time Overrides", desc: "Adjust formation and intensity mid-match to counter opponent moves.", icon: Zap },
                  { title: "Bio-State Monitoring", desc: "Monitor player fatigue and psychological pressure live.", icon: Activity },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><item.icon className="h-5 w-5" /></div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-tight">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ECOSYSTEM REWARDS - THE VALUE LOOP */}
      <section className="py-48 relative overflow-hidden bg-accent/5">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-16">
                <div className="space-y-6">
                  <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Protocol Engine</Badge>
                  <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE VALUE OF <br /><span className="text-gradient-gold italic">OWNERSHIP.</span></h2>
                </div>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  In traditional games, your time is a cost. In IFM, your tactical mastery is an investment. The $IFM utility hub ensures all performance is rewarded with persistent value.
                </p>
                <div className="space-y-8">
                  {[
                    { title: "Marketplace Liquidity", desc: "The primary currency for elite player acquisitions.", icon: Coins },
                    { title: "Seasonal Payouts", desc: "Earn rewards directly from the global IFM treasury.", icon: TrendingUp },
                    { title: "Infrastructure Fuel", desc: "Upgrade stadiums and academy facilities using $IFM.", icon: ShieldCheck }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group items-center">
                      <div className="h-16 w-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500 shrink-0">
                        <item.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-tighter mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
                <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden shadow-2xl relative aspect-square" hoverable={false}>
                  {rewardsImg && (
                    <Image src={rewardsImg.imageUrl} alt="Rewards" fill className="object-cover opacity-60" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                     <div className="space-y-6">
                        <Badge className="bg-accent/20 text-accent border-accent/40 px-6 py-2 uppercase tracking-[0.4em] text-[10px] font-bold">Treasury Verified</Badge>
                        <h4 className="text-5xl md:text-7xl font-bold font-headline uppercase text-white tracking-tighter leading-none">$IFM REWARD <br />ENGINE</h4>
                     </div>
                  </div>
                </GlassCard>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 7. FINAL CTA - START YOUR DYNASTY */}
      <section className="py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full mb-12">
              The Manager's Manifesto
            </Badge>
            <h2 className="text-7xl md:text-[12rem] font-bold font-headline tracking-tighter uppercase leading-[0.7] mb-12">
              START YOUR <br />
              <span className="text-gradient-blue italic">DYNASTY</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed opacity-80 max-w-3xl mx-auto mb-16">
              The global elite division is waiting for its next great architect. Lead your club, own your assets, and master the simulation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="h-24 px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl glow-blue text-2xl uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105">
                <Link href="/#early-access" className="flex items-center gap-6">
                  JOIN EARLY ACCESS <Rocket className="h-8 w-8" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-24 px-20 border-white/10 hover:bg-white/5 text-2xl font-bold rounded-3xl uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105">
                <Link href="/gameplay">EXPLORE GAMEPLAY</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
