
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
  Dna, Boxes, HeartPulse, BrainCircuit
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
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
  const trainingImg = PlaceHolderImages.find(i => i.id === "training-facility")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "rewards-visual")
  const managerImg = PlaceHolderImages.find(i => i.id === "manager-silhouette")

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] overflow-hidden">
      
      {/* 1. CINEMATIC HERO - THE VISION ARCHITECT */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt="IFM Hero" 
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

            {/* LIVE METRICS OVERLAY */}
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
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Temporal Loop</Badge>
              <h2 className="text-5xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">THE SEASONAL <br /><span className="text-primary italic">CADENCE</span></h2>
            </div>
            <p className="text-muted-foreground text-xl font-light max-w-md lg:text-right">
              Every IFM season is a 4-week tactical marathon designed for consistency, competition, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Pre-Season", desc: "Squad analysis, initial scouting, and infrastructure planning.", icon: Target, day: "Days 1-2" },
              { title: "Academy Reveal", desc: "Discover fresh youth prospects unique to your club's geography.", icon: Microscope, day: "Day 3" },
              { title: "Daily Matches", desc: "22 days of daily competitive league fixtures against real managers.", icon: Play, day: "Days 4-25" },
              { title: "The Payout", desc: "Promotion, relegation, and treasury reward distributions.", icon: Trophy, day: "Days 26-28" },
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

      {/* 3. CORE SYSTEMS - ALTERNATING NARRATIVE */}
      
      {/* Academy Section */}
      <section className="py-48 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Talent Engine</Badge>
                <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">DEVELOP TALENT. <br /><span className="text-gradient-gold italic">BUILD VALUE.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Every IFM Club features a bespoke Youth Academy powered by localized neural networks. Every season, fresh prospects are revealed. Analyze their potential, sign the best, and train them into global superstars.
                </p>
                <div className="space-y-6">
                  {[
                    "Analyze fresh batches of seasonal prospects",
                    "Sign high-potential talent to your pro squad",
                    "Train them to increase specific positional ratings",
                    "Own your players as verified on-chain assets"
                  ].map((item, j) => (
                    <div key={j} className="flex items-center gap-4 text-sm font-medium text-white/80">
                      <div className="h-2 w-2 rounded-full bg-accent" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden" hoverable={false}>
                {academyImg && (
                  <Image src={academyImg.imageUrl} alt="Academy UI" width={800} height={1000} className="w-full h-auto brightness-75" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                   <GlassCard className="p-6 bg-black/60 backdrop-blur-2xl border border-white/10">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-[10px] font-bold text-accent uppercase tracking-widest">Academy Reveal Live</div>
                        <Badge variant="outline" className="text-[8px] border-accent text-accent">SEASON 4</Badge>
                      </div>
                      <div className="flex gap-4">
                         {[1, 1, 1, 1].map((_, k) => (
                           <div key={k} className="h-14 flex-1 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                              <Dna className="h-5 w-5 text-accent/40" />
                           </div>
                         ))}
                      </div>
                   </GlassCard>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Match Engine Section */}
      <section className="py-48 relative bg-card/10 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-10" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:order-2">
              <div className="space-y-12">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Neural Match Engine</Badge>
                <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">LIVE SIMULATION. <br /><span className="text-gradient-blue italic">TACTICAL MASTERY.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Our bespoke match engine processes 15,000+ tactical variables per cycle. Set your formation pre-match, then react in real-time with tactical overrides and substitutions as the drama unfolds.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <GlassCard className="p-8 border-white/5 bg-white/5 flex flex-col gap-4" hoverable={false}>
                      <Zap className="h-8 w-8 text-primary" />
                      <h4 className="text-sm font-bold uppercase tracking-widest">Live Overrides</h4>
                      <p className="text-xs text-muted-foreground font-light">Adjust formation, intensity, and depth mid-match based on live data.</p>
                   </GlassCard>
                   <GlassCard className="p-8 border-white/5 bg-white/5 flex flex-col gap-4" hoverable={false}>
                      <BrainCircuit className="h-8 w-8 text-primary" />
                      <h4 className="text-sm font-bold uppercase tracking-widest">Neural Psychology</h4>
                      <p className="text-xs text-muted-foreground font-light">Monitor player psychological states and fatigue levels in real-time.</p>
                   </GlassCard>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-1">
              <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden shadow-2xl" hoverable={false}>
                {matchImg && (
                  <Image src={matchImg.imageUrl} alt="Match Engine" width={800} height={1000} className="w-full h-auto brightness-75" />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="h-24 w-24 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse backdrop-blur-xl">
                      <Play className="h-10 w-10 text-primary ml-1" />
                   </div>
                </div>
                <div className="absolute top-8 left-8">
                   <Badge className="bg-black/60 backdrop-blur-xl border-primary/40 text-primary px-4 py-1.5 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" /> LIVE ANALYTICS
                   </Badge>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE PYRAMID - DIVISION SYSTEM */}
      <section className="py-48 relative bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32 max-w-4xl mx-auto space-y-8">
             <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Football Pyramid</Badge>
             <h2 className="text-6xl md:text-9xl font-headline font-bold uppercase tracking-tighter leading-none">THE HIERARCHY OF <br /><span className="text-primary italic">PRECISION</span></h2>
             <p className="text-muted-foreground text-xl font-light leading-relaxed">
               IFM utilizes a tiered division structure mirroring the intensity of elite real-world leagues. Fight for promotion or survive relegation in a hyper-competitive global ecosystem.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <div className="space-y-6">
                {[
                  { title: "8 Divisions", desc: "A massive competitive pyramid where the number of leagues doubles each tier down.", icon: Network },
                  { title: "Promotion & Relegation", desc: "Four relegated and two promoted from every league every single season.", icon: TrendingUp },
                  { title: "Real-Time Rivalries", desc: "Every opponent is a real-world manager building their own digital dynasty.", icon: Users },
                  { title: "Division Yield", desc: "Higher tiers command significant treasury reward multipliers.", icon: Coins }
                ].map((feature, i) => (
                  <GlassCard key={i} className="p-8 border-white/5 bg-white/5 flex gap-8 items-center" hoverable={true}>
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                       <feature.icon className="h-8 w-8" />
                    </div>
                    <div>
                       <h4 className="text-2xl font-bold uppercase tracking-tighter mb-1">{feature.title}</h4>
                       <p className="text-sm text-muted-foreground font-light">{feature.desc}</p>
                    </div>
                  </GlassCard>
                ))}
             </div>
             <div className="relative aspect-square">
                <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full animate-pulse" />
                <GlassCard className="p-12 border-white/10 bg-black/40 h-full flex flex-col justify-center space-y-4" hoverable={false}>
                   {[
                     { div: "Premier Division", clubs: "12 clubs", color: "bg-accent", opacity: 1 },
                     { div: "Championship", clubs: "24 clubs", color: "bg-primary", opacity: 0.8 },
                     { div: "League One", clubs: "48 clubs", color: "bg-primary/80", opacity: 0.6 },
                     { div: "League Two", clubs: "96 clubs", color: "bg-primary/60", opacity: 0.4 },
                     { div: "Regional Leagues", clubs: "1000+ clubs", color: "bg-primary/40", opacity: 0.2 },
                   ].map((tier, i) => (
                     <div 
                       key={i} 
                       className={cn("h-20 rounded-2xl border border-white/5 flex items-center justify-between px-10 transition-all hover:scale-[1.02] cursor-default", tier.color)}
                       style={{ opacity: tier.opacity }}
                     >
                        <span className="font-headline text-2xl font-bold uppercase tracking-tight text-white">{tier.div}</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/60">{tier.clubs}</span>
                     </div>
                   ))}
                </GlassCard>
             </div>
          </div>
        </div>
      </section>

      {/* 5. MANAGEMENT IDENTITIES - CHOOSE YOUR LEGACY */}
      <section className="py-48 relative bg-card/5 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32 space-y-8">
             <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Archetype Protocol</Badge>
             <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">CHOOSE YOUR <br /><span className="text-primary italic">STYLE</span></h2>
             <p className="text-muted-foreground text-xl font-light mt-4">How will you conquer the IFM ecosystem?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "The Mastermind", desc: "Win through superior tactics, smart lineups, and real-time match reads.", icon: Zap, theme: "blue" },
              { title: "The Academy Club", desc: "Develop future stars from your youth ranks and build a sustainable homegrown empire.", icon: Target, theme: "gold" },
              { title: "The Value Finder", desc: "Identify undervalued talent on the market and flip them for significant gains.", icon: BarChart3, theme: "blue" },
              { title: "The Big Spender", desc: "Utilize your $IFM treasury to build title-winning squads in the transfer windows.", icon: Coins, theme: "gold" },
            ].map((style, i) => (
              <GlassCard 
                key={i} 
                className="p-12 border-white/5 hover:bg-primary/5 group" 
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

      {/* 6. TOKEN & ECOSYSTEM - THE SOVEREIGNTY PROTOCOL */}
      <section className="py-48 relative overflow-hidden bg-accent/5">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/10 blur-[200px] rounded-full" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden shadow-2xl relative aspect-square" hoverable={false}>
                  {rewardsImg && (
                    <Image src={rewardsImg.imageUrl} alt="Rewards" fill className="object-cover opacity-60 grayscale-[0.2]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                     <div className="space-y-6">
                        <Badge className="bg-accent/20 text-accent border-accent/40 px-6 py-2 uppercase tracking-[0.4em] text-[10px] font-bold">Treasury Verified</Badge>
                        <h4 className="text-5xl md:text-7xl font-bold font-headline uppercase text-white tracking-tighter leading-none">$IFM UTILITY <br />ENGINE</h4>
                     </div>
                  </div>
                </GlassCard>
              </motion.div>
              <div className="space-y-16">
                <div className="space-y-6">
                  <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Ownership Economy</Badge>
                  <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE VALUE OF <br /><span className="text-gradient-gold italic">OWNERSHIP</span></h2>
                </div>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  In traditional games, your time is a cost. In IFM, your tactical mastery is an investment. The $IFM token powers everything from transfer fees to stadium upgrades, ensuring all performance is rewarded with withdrawable value.
                </p>
                <div className="space-y-8">
                  {[
                    { title: "Marketplace Liquidity", desc: "The primary currency for elite player acquisitions.", icon: Coins },
                    { title: "Seasonal Payouts", desc: "Performance rewards directly from the global IFM treasury.", icon: TrendingUp },
                    { title: "Governance Voting", desc: "Stake $IFM to vote on league rule changes and expansions.", icon: ShieldCheck }
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
           </div>
        </div>
      </section>

      {/* 7. FINAL CTA - THE LEGACY CALL */}
      <section className="py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Badge className="bg-primary/10 text-primary border-primary/20 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full mb-12">
              The Manager's Manifesto
            </Badge>
            <h2 className="text-7xl md:text-[12rem] font-bold font-headline tracking-tighter uppercase leading-[0.7] mb-12">
              START YOUR <br />
              <span className="text-gradient-blue italic">DYNASTY</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed opacity-80 max-w-3xl mx-auto mb-16">
              The global elite division is waiting for its next great architect. Will you lead the ecosystem or fall to the tactical masters?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="h-24 px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl glow-blue text-2xl uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105">
                <Link href="/#early-access" className="flex items-center gap-6">
                  JOIN EARLY ACCESS <Rocket className="h-8 w-8" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-24 px-20 border-white/10 hover:bg-white/5 text-2xl font-bold rounded-3xl uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105">
                <Link href="/community">JOIN THE DISCORD</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
