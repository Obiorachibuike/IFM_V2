"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Trophy, Cpu, Zap, Activity, History, Microscope, Target, Play, LayoutDashboard, 
  ShieldCheck, Rocket, Gauge, Database, Coins, ShieldAlert, Terminal, ArrowDown
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
  const stadiumBg = PlaceHolderImages.find(i => i.id === "tactical-board") // Mapping to background asset
  const matchImg = PlaceHolderImages.find(i => i.id === "match-engine-live")
  const playerCardImg = PlaceHolderImages.find(i => i.id === "player-card-gold")
  const tokenImg = PlaceHolderImages.find(i => i.id === "token-visual")

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] overflow-hidden font-body selection:bg-primary selection:text-white">

      {/* 1. CINEMATIC HERO - THE VISION */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 md:py-0">
        {/* BACKGROUND IMAGE - RESPONSIVE OBJECT COVER */}
        <div className="absolute inset-0 z-0 w-full h-full">
          {heroImg?.imageUrl && (
            <Image
              src={heroImg.imageUrl}
              alt="IFM Vision"
              fill
              priority
              className="object-cover w-full h-full brightness-[0.4]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070D]/50 to-[#05070D]" />
        </div>

        {/* CONTENT */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-6 md:space-y-10"
          >
            {/* BADGE */}
            <motion.div variants={fadeInUp}>
              <Badge className="bg-white/5 text-white border-white/10 px-4 sm:px-8 py-2 uppercase tracking-[0.4em] sm:tracking-[0.6em] md:tracking-[0.8em] text-[9px] sm:text-[10px] font-bold rounded-full backdrop-blur-xl">
                The Architect Protocol
              </Badge>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-bold font-headline tracking-tighter uppercase leading-[0.95] md:leading-[0.9] text-white"
            >
              BUILD. OWN. <br />
              <span className="text-gradient-blue italic">DOMINATE.</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed px-2 sm:px-0"
            >
              IFM is a persistent football management simulation where strategic intelligence meets digital sovereignty.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-4 md:pt-6 w-full sm:w-auto px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="h-14 sm:h-16 md:h-20 px-8 md:px-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl md:rounded-2xl glow-blue text-base md:text-lg uppercase tracking-widest w-full sm:w-auto"
              >
                <Link href="/early-access">START YOUR CLUB</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 sm:h-16 md:h-20 px-8 md:px-12 border-white/20 hover:bg-white/10 text-white font-bold rounded-xl md:rounded-2xl text-base md:text-lg uppercase tracking-widest backdrop-blur-xl w-full sm:w-auto"
              >
                <Link href="/gameplay">WATCH GAMEPLAY</Link>
              </Button>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-16 border-t border-white/10 w-full max-w-4xl mt-4"
            >
              {[
                { label: "Active Clubs", value: "85,420" },
                { label: "Matches Played", value: "1.2M+" },
                { label: "Players Developed", value: "3.5M" },
                { label: "Rewards Paid", value: "4.8M $IFM" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col justify-center">
                  <div className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Banner callout */}
        <div className="absolute bottom-8 left-8 hidden lg:block">
           <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em] opacity-40">System Node: Central Architecture / 001</span>
        </div>
      </section>


      {/* 2. MANIFESTO - SOVEREIGNTY MATRIX */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center border-b border-white/5 bg-[#03060F] py-24 sm:py-32 overflow-hidden w-full">
        
        {/* BACKGROUND GRAPHIC ARCHITECTURE */}
        <div className="absolute inset-0 z-0">
          {stadiumBg && (
            <Image
              src={stadiumBg.imageUrl}
              alt="IFM Matrix Environment Core"
              fill
              priority
              className="object-cover opacity-[0.12] grayscale scale-105 transition-all duration-1000 mix-blend-screen select-none pointer-events-none"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03060F] via-[#03060F]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03060F] via-transparent to-[#03060F]" />
          <div className="absolute inset-0 football-grid opacity-[0.04] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
        </div>

        {/* FOREGROUND HERO CONTENT WRAPPER */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl text-center flex flex-col items-center justify-center flex-1">
          <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
            
            {/* SYSTEM DIRECTIVE FLAG HEADER */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/20 rounded-md backdrop-blur-md">
                <ShieldAlert className="h-3.5 w-3.5 text-accent animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-[0.3em] whitespace-nowrap">
                  System Directive // Sovereignty Matrix
                </span>
              </div>
              
              <span className="hidden sm:inline text-white/20 font-mono text-[10px]">|</span>

              <div className="inline-flex items-center gap-1.5 text-white/40 font-mono text-[9px] uppercase tracking-wider">
                <Terminal className="h-3 w-3" />
                Node_ID: IFM_MANIFESTO_CORE
              </div>
            </motion.div>

            {/* DYNAMIC SCALE DISPLAY HEADLINE */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.95] text-white"
              >
                WE ARE NOT BUILDING <br />
                <span className="text-gradient-gold italic font-extrabold">A WALLED GARDEN.</span>
              </motion.h1>
            </div>

            {/* SYSTEM DESCRIPTION LOG FRAMEWORK */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-sm sm:text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed px-4"
            >
              Traditional manager titles lock your decisions, data metrics, and time investment inside corporate servers that inevitably phase out. 
              <span className="text-white font-medium"> IFM replaces centralized loops</span> with an immutable on-chain architecture designed to protect your physical and financial legacy across generations.
            </motion.p>

            {/* PREMIUM LAYOUT CALL TO ACTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none px-4"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl tracking-widest text-xs uppercase glow-blue transition-all duration-300"
              >
                <Link href="/whitepaper">
                  EXAMINE THE BLUEPRINT
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 border-white/10 hover:bg-white/5 hover:text-white font-bold rounded-xl tracking-widest text-xs uppercase backdrop-blur-md transition-all duration-300"
              >
                <Link href="/early-access" className="flex items-center justify-center gap-2">
                  ACQUIRE CLUB LICENSE
                </Link>
              </Button>
            </motion.div>

          </div>
        </div>

        {/* METRIC FOOTER BAR - ASYMMETRIC UI DESIGN EDGE */}
        <div className="absolute bottom-6 left-0 w-full px-6 md:px-12 z-20 flex flex-col sm:flex-row justify-between items-center gap-4 pointer-events-none">
          <div className="flex items-center gap-6 text-white/20 font-mono text-[8px] sm:text-[9px] uppercase tracking-widest">
            <div>SCALE: 1:1 COMPETITIVE REALISM</div>
            <div className="hidden sm:block">STATUS: ALPHA_VER_2.6</div>
          </div>
          
          <div className="flex items-center gap-2 text-primary/60 font-mono text-[9px] uppercase tracking-widest animate-pulse">
            <span>SCROLL TO SYSTEM CORE</span>
            <ArrowDown className="h-3 w-3" />
          </div>
        </div>

      </section>


      {/* 3. WHAT IS IFM - CORE MATRIX FEATURE GRID */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden border-t border-white/[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.02),transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <motion.div 
            variants={fadeIn} 
            initial="initial" 
            whileInView="whileInView"
            className="space-y-4 mb-12 sm:mb-20"
          >
            <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-accent">
              <span className="w-6 h-[1px] bg-accent/30"></span>
              WHAT IS IFM
              <span className="w-6 h-[1px] bg-accent/30"></span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline uppercase tracking-tighter leading-tight max-w-4xl mx-auto px-2">
              A football manager brand with a <br className="hidden sm:inline" />
              <span className="text-gradient-gold italic">real ownership layer.</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed px-4">
              Football-first gameplay. A competitive ecosystem. An economy that rewards ambition.
            </p>
          </motion.div>

          {/* 4-Column Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm sm:max-w-none mx-auto text-left">
            {[
              {
                title: "Football Manager Game",
                desc: "Build your squad, shape tactics, develop talent, and compete across a long-term football management ecosystem.",
                icon: Activity,
                glow: "blue"
              },
              {
                title: "Digital Ownership",
                desc: "Players, assets, and progression systems are designed to create real value and persistent engagement across the platform.",
                icon: ShieldCheck,
                glow: "gold"
              },
              {
                title: "Competitive Leagues",
                desc: "Rise through divisions, chase rewards, strengthen your club, and compete for status in a global manager economy.",
                icon: Trophy,
                glow: "blue"
              },
              {
                title: "IFM Economy",
                desc: "The IFM token powers transfers, upgrades, marketplace activity, competitions, and the wider economic loop.",
                icon: Coins,
                glow: "gold"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex"
              >
                <GlassCard 
                  className="p-6 sm:p-8 w-full flex flex-col justify-between border-white/5 group bg-[#040914]/40 hover:bg-[#050B1A]/60 transition-all duration-500 rounded-2xl" 
                  glowColor={feature.glow as "blue" | "gold"}
                >
                  <div className="space-y-4 sm:space-y-6">
                    <div className={cn(
                      "h-12 w-12 rounded-xl border fill-none flex items-center justify-center transition-all duration-500",
                      feature.glow === "gold" 
                        ? "bg-accent/5 border-accent/10 text-accent group-hover:bg-accent group-hover:text-black" 
                        : "bg-primary/5 border-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                    )}>
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <div className="text-[7px] font-mono font-bold tracking-widest text-white/30 uppercase">
                      SYSTEM_NODE // 00{idx + 1}_PRTCL
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-headline uppercase text-white group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE REWARD PROTOCOL - MATCH PERFORMANCE REWARDS */}
      <section className="py-16 sm:py-24 md:py-32 relative border-y border-white/5 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            
            {/* TEXT ROW */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold mb-4">Utility Hub</Badge>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-none">THE REWARD <br /><span className="text-gradient-blue italic">ENGINE.</span></h2>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                  The $IFM token is the lifeblood of the universe. It is a gameplay-first utility asset rewarded for match performance. <strong>Yield quantities are dynamic and performance-dependent.</strong>
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Match Victory", desc: "Maximum $IFM yield for securing 3 points. Rewarded instantly upon match finalization.", icon: Zap, status: "MAX YIELD" },
                    { title: "Tactical Draw", desc: "Standard $IFM yield for high-level tactical stalemates. Keeps your club operational.", icon: Activity, status: "STANDARD" },
                    { title: "Competition Bonus", desc: "Higher rewards for cup matches and knockout tournaments compared to standard league play.", icon: Trophy, status: "MULTIPLIER" },
                    { title: "Loss Consolation", desc: "Minimal 'Neural Data' yield rewarded for match participation and stadium attendance.", icon: History, status: "MINIMAL" }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-4 sm:gap-6 items-start sm:items-center p-4 sm:p-5 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all cursor-default group">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <feat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 mb-1">
                           <div className="font-bold text-sm sm:text-base uppercase tracking-tight">{feat.title}</div>
                           <Badge variant="outline" className="text-[8px] border-primary/20 text-primary px-2 py-0.5 shrink-0">{feat.status}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground font-light leading-snug">{feat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* VISUAL IMAGE CARD */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1 w-full max-w-md lg:max-w-none mx-auto">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-square rounded-2xl" hoverable={false}>
                  {tokenImg && (
                    <Image src={tokenImg.imageUrl} alt="Reward Engine" fill className="object-cover opacity-40 lg:opacity-60" data-ai-hint="digital crypto coin" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 lg:p-12 bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-3xl rounded-xl sm:rounded-3xl border border-white/10 space-y-4 sm:space-y-6">
                        <div className="flex justify-between items-center gap-2">
                           <Badge className="bg-primary text-white font-bold px-3 sm:px-4 lg:px-6 py-1.5 uppercase tracking-widest text-[8px] sm:text-[10px]">Active Session Payout</Badge>
                           <span className="text-[8px] sm:text-[10px] font-bold text-primary animate-pulse whitespace-nowrap">CALCULATING YIELD...</span>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                           <div className="flex justify-between items-end gap-4">
                              <div className="min-w-0">
                                 <div className="text-[8px] sm:text-[10px] text-muted-foreground uppercase truncate mb-1">Last Match: Neo London (W)</div>
                                 <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-headline text-white truncate">4,250 $IFM</div>
                              </div>
                              <div className="text-right shrink-0">
                                 <div className="text-[8px] sm:text-[10px] text-primary font-bold uppercase">Performance</div>
                                 <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">S-TIER</div>
                              </div>
                           </div>
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-primary glow-blue" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-12 lg:left-12">
                     <h4 className="text-xs sm:text-sm lg:text-xl font-bold text-white uppercase tracking-[0.2em] sm:tracking-[0.3em]">IFM PROTOCOL: TREASURY_V4</h4>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SOVEREIGN ASSETS - NFT SYSTEM */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            
            {/* TEXT ROW */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold mb-4">Functional Ownership</Badge>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-none">ASSETS WITH <br /><span className="text-gradient-gold italic">PURPOSE.</span></h2>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                  NFTs in IFM are not collectibles. They are functional gameplay units. You own your squad, your stadium, and your identity—verified on-chain and evolving with every match.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { title: "Player Cards", desc: "Identity, stats, and progression history encoded as on-chain logic.", icon: Cpu },
                    { title: "Stadium Units", desc: "Customizable, revenue-generating assets that evolve visually.", icon: LayoutDashboard },
                    { title: "Club Licenses", desc: "Your keys to the competitive pyramid and global reward pool.", icon: ShieldCheck },
                    { title: "Academy Prospects", desc: "Genetic youth assets generated uniquely by your club's scouting bot.", icon: Microscope }
                  ].map((item, k) => (
                    <div key={k} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                       <div className="flex items-center gap-3">
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
                          <span className="font-bold uppercase tracking-tight text-xs sm:text-sm truncate">{item.title}</span>
                       </div>
                       <p className="text-xs text-muted-foreground font-light leading-normal">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD COMPONENT */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="w-full max-w-sm lg:max-w-md mx-auto">
               <div className="relative aspect-[3/4] w-full">
                  <div className="absolute -inset-4 sm:-inset-10 bg-accent/10 blur-[60px] sm:blur-[100px] rounded-full animate-pulse pointer-events-none" />
                  <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden h-full w-full relative group rounded-2xl" hoverable={false}>
                    {playerCardImg && (
                      <Image src={playerCardImg.imageUrl} alt="NFT Card" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" data-ai-hint="holographic soccer card" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
                       <Badge className="bg-accent text-background font-bold px-4 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] shadow-2xl">LEGENDARY</Badge>
                    </div>
                    <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
                       <span className="text-[8px] sm:text-[10px] font-bold text-accent uppercase tracking-widest">Digital Asset: PLR_942</span>
                    </div>
                    <div className="absolute bottom-6 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
                       <div className="p-4 sm:p-6 bg-black/70 backdrop-blur-3xl rounded-xl border border-white/10 space-y-3 sm:space-y-4">
                          <div className="flex justify-between items-end gap-4">
                             <div className="min-w-0">
                                <div className="text-[8px] sm:text-[10px] text-accent font-bold uppercase tracking-widest mb-1 truncate">On-Chain Identity</div>
                                <div className="text-xl sm:text-2xl md:text-3xl font-bold font-headline uppercase leading-none truncate">STORM v1.0</div>
                             </div>
                             <div className="text-right shrink-0">
                                <div className="text-[8px] sm:text-[10px] text-muted-foreground font-bold uppercase">Potential</div>
                                <div className="text-xl sm:text-2xl font-bold text-accent">98</div>
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

      {/* 6. MATCH ENGINE SHOWCASE / INFINITE SCALING ARCHITECTURE */}
      <section className="py-16 sm:py-24 md:py-32 relative border-y border-white/5 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            
            {/* TEXT ROW */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold mb-4">Neural Engine v2.4</Badge>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter leading-none">SIMULATION <br /><span className="text-gradient-blue italic">SUPREMACY.</span></h2>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                  The IFM Match Engine processes 15,000+ tactical variables per cycle. Every momentum shift, fatigue trigger, and tactical override is calculated in real-time to determine match outcomes and subsequent rewards.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Reactive AI", desc: "Players adjust behavior based on match pressure and chemistry.", icon: Cpu },
                    { label: "Real-time Overrides", desc: "Managers can change intensity and shape mid-match.", icon: Gauge },
                    { label: "Physics Integrated", desc: "Ball physics and player collisions are 60Hz deterministic.", icon: Database }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 sm:gap-6 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-bold text-base sm:text-lg uppercase tracking-tight text-white">{step.label}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground font-light leading-normal">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ATMOSPHERIC BACKGROUND CARD */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1 w-full max-w-xl lg:max-w-none mx-auto">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-video rounded-2xl" hoverable={false}>
                  <Image 
                    src="/1001706686.png" 
                    alt="IFM Genesis Command Station" 
                    fill 
                    className="object-cover opacity-40 md:opacity-60 contrast-125 brightness-[0.45] saturate-[0.85]" 
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 flex items-center gap-3">
                     <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                     <span className="text-[8px] sm:text-[10px] font-bold text-white uppercase tracking-[0.2em]">Live Session: Tactical Alpha Engine</span>
                  </div>
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-8">
                     <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest italic bg-primary px-3 sm:px-4 py-1">NEURAL BROADCAST</h4>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 sm:py-36 md:py-48 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8 sm:space-y-12">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tighter uppercase leading-none">
              START YOUR <br />
              <span className="text-gradient-blue italic">DYNASTY</span>
            </h2>
            <div className="flex justify-center pt-4 px-4 sm:px-0">
              <Button asChild size="lg" className="h-16 sm:h-20 md:h-24 w-full sm:w-auto px-8 sm:px-14 md:px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl sm:rounded-2xl md:rounded-3xl glow-blue text-lg sm:text-xl md:text-2xl uppercase tracking-widest">
                <Link href="/early-access" className="flex items-center justify-center gap-4 sm:gap-6">
                  CLAIM YOUR LICENSE <Rocket className="h-6 w-6 sm:h-8 sm:w-8 shrink-0" />
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] pt-4 font-bold opacity-60">Phase 1 enrollment is currently 84% full.</p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
