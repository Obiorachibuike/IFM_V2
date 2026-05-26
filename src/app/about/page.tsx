
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { 
  Trophy, Shield, Target, Cpu, Users, Zap, Coins, 
  TrendingUp, BarChart3, Globe, Rocket, 
  Play, Search, Microscope, Network,
  ChevronRight, ShieldCheck, Activity,
  Sparkles, Layers, History, LayoutDashboard
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

export default function AboutPage() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })

  // Asset Fetching
  const heroImg = PlaceHolderImages.find(i => i.id === "hero-stadium")
  const matchImg = PlaceHolderImages.find(i => i.id === "match-engine-live")
  const nftImg = PlaceHolderImages.find(i => i.id === "player-card-gold")
  const tacticsImg = PlaceHolderImages.find(i => i.id === "tactical-board")
  const academyImg = PlaceHolderImages.find(i => i.id === "scouting-ui")
  const trainingImg = PlaceHolderImages.find(i => i.id === "training-facility")
  const leagueImg = PlaceHolderImages.find(i => i.id === "league-table-ui")
  const devImg = PlaceHolderImages.find(i => i.id === "development-tree")
  const marketImg = PlaceHolderImages.find(i => i.id === "transfer-market-ui")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "rewards-visual")

  return (
    <div ref={containerRef} className="flex flex-col w-full min-h-screen bg-[#05070D] overflow-hidden selection:bg-accent selection:text-background font-body">
      
      {/* 1. CINEMATIC HERO - THE MANAGER'S MANIFESTO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt="IFM Experience" 
              fill 
              className="object-cover opacity-30 grayscale-[0.2] brightness-[0.4]"
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
                The Architect Protocol
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-[11rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]"
            >
              BUILD. OWN. <br />
              <span className="text-gradient-blue italic">DOMINATE.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed opacity-80"
            >
              IFM is a persistent football management simulation where strategic intelligence meets digital sovereignty. Lead your club across seasons, develop your assets, and own your legacy.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 pt-10">
              <Button asChild size="lg" className="h-20 px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl uppercase tracking-widest">
                <Link href="/#early-access">START YOUR CLUB</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-16 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest backdrop-blur-xl">
                <Link href="/gameplay">WATCH GAMEPLAY</Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-24 w-full max-w-5xl"
            >
              {[
                { label: "Active Clubs", value: "14.2K", icon: Shield },
                { label: "Daily Matches", value: "240K", icon: Activity },
                { label: "Asset Transfers", value: "$4.8M", icon: Network },
                { label: "Treasury Pool", value: "8.5M", icon: Coins },
              ].map((metric, i) => (
                <div key={i} className="flex flex-col items-center space-y-3 group cursor-default">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold font-headline tracking-tight">{metric.value}</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
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
              Every IFM season is a 4-week tactical marathon. Consistent management is rewarded with persistent club growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-24">
            {[
              { 
                title: "Pre-Season Ops", 
                desc: "Strengthen squads, finalize tactics, and define the seasonal objective during the 48-hour window.", 
                icon: Target, 
                day: "Day 1-2",
                image: tacticsImg
              },
              { 
                title: "Academy Reveal", 
                desc: "Every club generates unique youth prospects. Analyze their potential and secure them to your academy.", 
                icon: Microscope, 
                day: "Day 3",
                image: academyImg
              },
              { 
                title: "Daily Matches", 
                desc: "22 days of competitive league fixtures against real managers. Live tactical adjustments are critical.", 
                icon: Play, 
                day: "Days 4-25",
                image: matchImg
              },
              { 
                title: "The Payout", 
                desc: "Final standings determine promotion, relegation, and reward distributions from the global treasury.", 
                icon: Trophy, 
                day: "Days 26-28",
                image: rewardsImg
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
                  <Button variant="ghost" className="p-0 text-primary hover:text-white gap-2 font-bold uppercase tracking-widest text-xs">
                    LEARN MORE <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className={cn(i % 2 === 1 ? "lg:order-1" : "lg:order-2")}>
                   <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden aspect-video relative" hoverable={false}>
                      {step.image && (
                        <Image src={step.image.imageUrl} alt={step.title} fill className="object-cover brightness-75 hover:scale-105 transition-transform duration-1000" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                   </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEAGUE PYRAMID - BROADCAST UI */}
      <section className="py-48 relative overflow-hidden bg-accent/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Global Pyramid</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">8 DIVISIONS. <br /><span className="text-gradient-gold italic">ONE ELITE.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  The IFM Football League is a massive decentralized pyramid. Promotion and relegation are absolute, creating high-stakes rivalry in every division.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Promotion Race", desc: "Top 2 teams in every league move up to higher yield divisions." },
                    { title: "Relegation Battle", desc: "Bottom 4 teams fall into the lower tiers of the pyramid." },
                    { title: "Global Ranking", desc: "Track your progress against 85,000+ managers worldwide." }
                  ].map((item, k) => (
                    <div key={k} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-accent/30 transition-all">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm uppercase tracking-tight">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-[4/5]" hoverable={false}>
                  {leagueImg && (
                    <Image src={leagueImg.imageUrl} alt="League Table" fill className="object-cover brightness-50" />
                  )}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="space-y-6">
                        <Badge className="bg-accent text-background font-bold px-6 py-2">DIVISION 2 • LEAGUE B</Badge>
                        <div className="p-6 bg-black/60 backdrop-blur-3xl rounded-2xl border border-white/10">
                           <div className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4">Live Standings</div>
                           <div className="space-y-3">
                              {[1, 2, 3].map(r => (
                                <div key={r} className="flex justify-between items-center text-sm font-bold font-headline">
                                   <div className="flex gap-4 items-center">
                                      <span className="text-accent">#{r}</span>
                                      <span>NEO LONDON</span>
                                   </div>
                                   <span>{52 - r * 4} PTS</span>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. NFT SOVEREIGNTY LAYER */}
      <section className="py-48 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32 space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/30 px-8 py-3 uppercase tracking-[0.5em] text-[10px] font-bold">The Sovereignty Protocol</Badge>
            <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">ASSETS THAT <br /><span className="text-primary italic">EVOLVE</span></h2>
            <p className="text-muted-foreground text-xl font-light max-w-2xl mx-auto">
              In IFM, you don't just use players. You own them. Verified on the blockchain, your assets are permanent investments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                title: "Player NFT Cards", 
                desc: "Unique on-chain units with persistent stats, history, and rarity tiers from Common to Iconic.", 
                icon: Users,
                img: nftImg 
              },
              { 
                title: "Stadium Facilities", 
                desc: "Upgrade your ground capacity and infrastructure; every upgrade is recorded to your stadium NFT.", 
                icon: ShieldCheck,
                img: heroImg 
              },
              { 
                title: "Academy Prospects", 
                desc: "Discover and sign youth talent unique to your geography. Develop them to sell or lead your squad.", 
                icon: Microscope,
                img: devImg 
              },
            ].map((item, i) => (
              <GlassCard key={i} className="p-0 border-white/10 overflow-hidden flex flex-col" glowColor={i === 0 ? "gold" : "blue"}>
                <div className="relative aspect-[16/10]">
                   {item.img && <Image src={item.img.imageUrl} alt={item.title} fill className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />}
                   <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-10 space-y-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline uppercase">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MATCH ENGINE NEURAL CORE */}
      <section className="py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
                 <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-video" hoverable={false}>
                    {matchImg && <Image src={matchImg.imageUrl} alt="Match Engine" fill className="object-cover brightness-50" />}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="h-24 w-24 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse">
                          <Play className="h-10 w-10 text-primary ml-1" />
                       </div>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                       <div className="p-5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                          <div className="flex justify-between items-center text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
                             <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-red-500 animate-ping" /> LIVE SIMULATION</div>
                             <div>NEURAL CORE V4.2 • OPTIMAL SYNC</div>
                          </div>
                       </div>
                    </div>
                 </GlassCard>
              </motion.div>
              <div className="space-y-12">
                 <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Neural Core</Badge>
                 <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">SIMULATION <br /><span className="text-primary italic">REDEFINED.</span></h2>
                 <p className="text-xl text-muted-foreground font-light leading-relaxed">
                   The IFM Match Engine processes 15,000+ tactical variables per cycle, reflecting physics-based ball movement and authentic player psychology.
                 </p>
                 <div className="grid grid-cols-1 gap-4">
                    {[
                      { title: "Real-Time Overrides", desc: "Change formations and sub players live to counter opponent tactics.", icon: Zap },
                      { title: "Psychology Engine", desc: "Player performance shifts based on pressure and morale live.", icon: Activity },
                      { title: "Physics-Based Ball", desc: "No pre-determined outcomes. True physics engine for every shot.", icon: Shield }
                    ].map((feat, k) => (
                      <div key={k} className="flex gap-4 items-center p-4 bg-white/5 border border-white/5 rounded-2xl group hover:border-primary/30 transition-all">
                        <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors"><feat.icon className="h-5 w-5" /></div>
                        <div>
                          <div className="text-sm font-bold uppercase tracking-tight">{feat.title}</div>
                          <div className="text-xs text-muted-foreground">{feat.desc}</div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. MANAGEMENT IDENTITIES - CHOOSE YOUR STYLE */}
      <section className="py-48 relative bg-card/5 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-32 space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-8 py-3 uppercase tracking-[0.5em] text-[10px] font-bold">Archetype Protocol</Badge>
              <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">DEFINE YOUR <br /><span className="text-accent italic">LEGACY</span></h2>
              <p className="text-muted-foreground text-xl font-light max-w-2xl mx-auto">Choose your management philosophy and build your club's unique identity.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "The Mastermind", desc: "Superior tactics, smart lineups, and real-time match reads define your success.", icon: Zap, theme: "blue" },
                { title: "The Academy Club", desc: "Develop future stars from youth ranks and build a sustainable homegrown empire.", icon: Microscope, theme: "gold" },
                { title: "The Value Finder", desc: "Identify undervalued talent on the market and flip them for significant gains.", icon: BarChart3, theme: "blue" },
                { title: "The Big Spender", desc: "Utilize your $IFM treasury to build a title-winning squad in the transfer windows.", icon: Coins, theme: "gold" },
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

      {/* 7. THE VALUE LOOP - TOKENOMICS VISUAL */}
      <section className="py-48 relative overflow-hidden bg-accent/5">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-16">
                 <div className="space-y-6">
                    <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Protocol Engine</Badge>
                    <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE VALUE OF <br /><span className="text-gradient-gold italic">OWNERSHIP.</span></h2>
                 </div>
                 <p className="text-xl text-muted-foreground font-light leading-relaxed">
                   In traditional games, your time is a cost. In IFM, your tactical mastery is an investment. The $IFM token powers everything from squad building to stadium evolution.
                 </p>
                 <div className="space-y-8">
                    {[
                      { title: "Marketplace Liquidity", desc: "Buy and sell elite players using $IFM in the global transfer market.", icon: Coins },
                      { title: "Seasonal Payouts", desc: "Earn rewards directly from the global IFM treasury based on performance.", icon: TrendingUp },
                      { title: "Infrastructure Fuel", desc: "Upgrade facilities and stadiums to unlock higher yield potential.", icon: ShieldCheck }
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
                <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden relative aspect-square" hoverable={false}>
                   {rewardsImg && <Image src={rewardsImg.imageUrl} alt="Rewards" fill className="object-cover opacity-60" />}
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

      {/* 8. FINAL CTA - START YOUR DYNASTY */}
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
