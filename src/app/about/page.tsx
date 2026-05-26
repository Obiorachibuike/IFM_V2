
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Trophy, Shield, Target, Cpu, Users, Zap, Coins, 
  TrendingUp, BarChart3, Clock, Globe, Rocket, 
  Play, Search, LayoutDashboard, Microscope, Network,
  ChevronRight, ArrowRight, ShieldCheck, Activity
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

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
      
      {/* 1. CINEMATIC HERO - THE VISION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt="IFM Hero" 
              fill 
              className="object-cover opacity-40 grayscale-[0.5] brightness-50"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-transparent" />
          <div className="absolute inset-0 radial-glow-blue opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">
              Founding Document
            </Badge>
            <h1 className="text-6xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              BUILD. DEVELOP. <br />
              <span className="text-gradient-blue italic">OWN. COMPETE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              IFM is a high-fidelity football management universe where tactical intelligence meets the power of digital sovereignty. Build your club, develop your talent, and create a permanent legacy on the blockchain.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Button asChild size="lg" className="h-16 px-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue">
                <Link href="/#early-access">START YOUR CLUB</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-12 border-white/10 hover:bg-white/5 font-bold rounded-2xl">
                <Link href="/gameplay">WATCH GAMEPLAY</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE SEASONAL LOOP - VISUAL TIMELINE */}
      <section className="py-32 relative border-y border-white/5 bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">THE SEASONAL <span className="text-primary italic">CADENCE</span></h2>
            <p className="text-muted-foreground text-lg font-light mt-4">Every IFM season is a 4-week tactical marathon.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Pre-Season", desc: "Squad analysis and initial scouting.", icon: Target, day: "Days 1-2" },
              { title: "Academy Reveal", desc: "Discover fresh youth prospects unique to your club.", icon: Microscope, day: "Day 3" },
              { title: "Daily Matches", desc: "22 days of daily competitive league fixtures.", icon: Play, day: "Days 4-25" },
              { title: "Promotion", desc: "Final standings determine rewards and tier moves.", icon: Trophy, day: "Days 26-28" },
            ].map((step, i) => (
              <GlassCard key={i} className="p-8 border-white/5 bg-white/5 group" hoverable={true}>
                <div className="text-primary text-[10px] font-bold uppercase tracking-widest mb-4 opacity-60">{step.day}</div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2 uppercase">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS - ALTERNATING SECTIONS */}
      
      {/* Academy Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-8">
                <Badge className="bg-accent/10 text-accent border-accent/20">The Academy Protocol</Badge>
                <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter leading-none">DEVELOP TALENT. <br /><span className="text-gradient-gold italic">BUILD VALUE.</span></h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Every IFM Club features a bespoke Youth Academy. Each season, fresh prospects are revealed. Your job? Analyze their potential, sign the best, and train them into global superstars.
                </p>
                <ul className="space-y-4">
                  {[
                    "Analyze fresh batches of seasonal prospects",
                    "Choose which players to sign to your pro squad",
                    "Train them to increase positional ratings",
                    "Build your empire around homegrown stars"
                  ].map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-white/80">
                      <ShieldCheck className="h-4 w-4 text-accent" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden" hoverable={false}>
                {academyImg && (
                  <Image src={academyImg.imageUrl} alt="Academy UI" width={800} height={600} className="w-full h-auto brightness-75" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl">
                      <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Academy Reveal Status</div>
                      <div className="text-xl font-bold font-headline text-white">4 PROSPECTS SIGNED</div>
                   </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Match Engine Section */}
      <section className="py-32 relative bg-card/10 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:order-2">
              <div className="space-y-8">
                <Badge className="bg-primary/10 text-primary border-primary/20">Neural Match Engine</Badge>
                <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter leading-none">LIVE SIMULATION. <br /><span className="text-gradient-blue italic">TACTICAL MASTERY.</span></h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Our bespoke match engine processes 15,000+ tactical variables per cycle. Set your formation pre-match, then react in real-time with tactical overrides and substitutions as the drama unfolds.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                      <Zap className="h-6 w-6 text-primary mb-4" />
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Live React</h4>
                      <p className="text-[10px] text-muted-foreground">Adjust tactics and subs mid-match based on live engine data.</p>
                   </div>
                   <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                      <Activity className="h-6 w-6 text-primary mb-4" />
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Neural Stats</h4>
                      <p className="text-[10px] text-muted-foreground">Advanced heatmaps and psychological state monitoring.</p>
                   </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-1">
              <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden" hoverable={false}>
                {matchImg && (
                  <Image src={matchImg.imageUrl} alt="Match Engine" width={800} height={600} className="w-full h-auto brightness-75" />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="h-20 w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse">
                      <Play className="h-8 w-8 text-primary ml-1" />
                   </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE PYRAMID - DIVISION SYSTEM */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 max-w-3xl mx-auto space-y-4">
             <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">THE FOOTBALL <span className="text-primary italic">PYRAMID</span></h2>
             <p className="text-muted-foreground text-lg font-light leading-relaxed">
               IFM utilizes a tiered division structure mirroring the intensity of elite real-world leagues. Fight for promotion or survive relegation in a hyper-competitive global ecosystem.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-6">
                {[
                  { title: "8 Divisions", desc: "The number of leagues doubles each division down, creating a massive competitive pyramid.", icon: Network },
                  { title: "Promotion & Relegation", desc: "Earn your place or lose it. Four relegated and two promoted from each league every season.", icon: TrendingUp },
                  { title: "Real-Time Rivalries", desc: "Every opponent is a real manager building their own digital empire.", icon: Users }
                ].map((feature, i) => (
                  <GlassCard key={i} className="p-6 border-white/5 bg-white/5 flex gap-6 items-center">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                       <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold uppercase tracking-tight">{feature.title}</h4>
                       <p className="text-sm text-muted-foreground font-light">{feature.desc}</p>
                    </div>
                  </GlassCard>
                ))}
             </div>
             <div className="relative aspect-square">
                <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full animate-pulse" />
                <GlassCard className="p-10 border-white/10 bg-black/40 h-full flex flex-col justify-center" hoverable={false}>
                   <div className="space-y-4">
                      {[
                        { div: "Premier Division", clubs: "12 clubs", color: "bg-accent", opacity: 1 },
                        { div: "Championship", clubs: "24 clubs", color: "bg-primary", opacity: 0.8 },
                        { div: "League One", clubs: "48 clubs", color: "bg-primary/80", opacity: 0.6 },
                        { div: "League Two", clubs: "96 clubs", color: "bg-primary/60", opacity: 0.4 },
                        { div: "Regional Leagues", clubs: "1000+ clubs", color: "bg-primary/40", opacity: 0.2 },
                      ].map((tier, i) => (
                        <div key={i} className="group relative">
                          <div 
                            className={cn("h-16 rounded-xl border border-white/5 flex items-center justify-between px-8 transition-all hover:scale-[1.02]", tier.color)}
                            style={{ opacity: tier.opacity }}
                          >
                             <span className="font-headline font-bold uppercase tracking-tight text-white">{tier.div}</span>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{tier.clubs}</span>
                          </div>
                        </div>
                      ))}
                   </div>
                </GlassCard>
             </div>
          </div>
        </div>
      </section>

      {/* 5. MANAGEMENT STYLES - CHOOSE YOUR LEGACY */}
      <section className="py-32 relative bg-card/5 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter">CHOOSE YOUR <span className="text-primary italic">STYLE</span></h2>
             <p className="text-muted-foreground text-lg font-light mt-4">How will you conquer the ecosystem?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "The Mastermind", desc: "Win through superior tactics, smart lineups, and real-time match reads.", icon: Zap },
              { title: "The Academy Club", desc: "Develop future stars from your youth ranks and build a sustainable empire.", icon: Target },
              { title: "The Value Finder", desc: "Identify undervalued talent on the market and build squad value.", icon: BarChart3 },
              { title: "The Big Spender", desc: "Utilize your $IFM treasury to build title-winning squads in transfer windows.", icon: Coins },
            ].map((style, i) => (
              <GlassCard key={i} className="p-10 border-white/5 hover:bg-primary/5 group" glowColor="blue">
                <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-8 group-hover:scale-110 transition-all">
                  <style.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-4 uppercase tracking-tighter">{style.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{style.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TOKEN & ECOSYSTEM - THE REWARD LOOP */}
      <section className="py-32 relative overflow-hidden bg-accent/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden" hoverable={false}>
                  {rewardsImg && (
                    <Image src={rewardsImg.imageUrl} alt="Rewards" width={800} height={800} className="w-full h-auto opacity-60" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center text-center p-12">
                     <div className="space-y-4">
                        <h4 className="text-xs font-bold text-accent uppercase tracking-[0.3em]">Treasury Verified</h4>
                        <div className="text-4xl font-bold font-headline uppercase text-white tracking-tighter">$IFM UTILITY ENGINE</div>
                     </div>
                  </div>
                </GlassCard>
              </motion.div>
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20">The Sovereignty Protocol</Badge>
                <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter leading-none">THE VALUE OF <br /><span className="text-gradient-gold italic">OWNERSHIP</span></h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  In traditional games, your time is a cost. In IFM, your mastery is an investment. The $IFM token powers everything from transfer fees to stadium upgrades, ensuring all performance is rewarded with withdrawable value.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Marketplace Liquidity", desc: "The primary currency for elite player acquisitions.", icon: Coins },
                    { title: "Seasonal Payouts", desc: "Performance rewards directly from the global treasury.", icon: TrendingUp },
                    { title: "Governance Voting", desc: "Stake $IFM to vote on league rule changes and expansions.", icon: Shield }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-tight text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. FINAL CTA - START YOUR LEGACY */}
      <section className="py-48 relative text-center">
        <div className="absolute inset-0 radial-glow-blue opacity-10" />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl space-y-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">The Manager's Call</Badge>
          <h2 className="text-6xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-none">
            START YOUR <br />
            <span className="text-gradient-blue italic">DYNASTY</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed opacity-80 max-w-2xl mx-auto">
            The global elite division is waiting for its next great manager. Will you lead the ecosystem or fall to the tactical masters?
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Button asChild size="lg" className="h-20 px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl">
              <Link href="/#early-access" className="flex items-center gap-4">
                JOIN EARLY ACCESS <Rocket className="h-6 w-6" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-20 px-16 border-white/10 hover:bg-white/5 text-xl font-bold rounded-2xl">
              <Link href="/community">JOIN COMMUNITY</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
