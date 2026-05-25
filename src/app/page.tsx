"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Rocket, Activity, Trophy, Shield, Cpu, Target, ArrowRight, Zap, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"
import { RoadmapSection } from "@/components/sections/RoadmapSection"

const comparisonData = [
  { feature: "Digital Ownership", trad: "None (License Only)", ifm: "Full (On-Chain Assets)" },
  { feature: "Reward System", trad: "In-Game Currency", ifm: "Withdrawable $IFM tokens" },
  { feature: "Asset Persistence", trad: "Seasonal Reset", ifm: "Lifetime Verification" },
  { feature: "Governance", trad: "Developer Controlled", ifm: "Manager DAO Voting" },
  { feature: "Match Engine", trad: "Standard Simulation", ifm: "Neural AI Processing" },
]

export default function HomePage() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div ref={containerRef} className="flex flex-col w-full relative bg-background">
      
      {/* 1. HERO SECTION - STADIUM CINEMATIC */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src="https://kommodo.ai/i/HKs6FkZPntMZVPJB9JWf"
            alt="Cinematic Stadium"
            fill
            className="object-cover brightness-50 grayscale-[0.2]"
            priority
            data-ai-hint="futuristic stadium"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 football-grid opacity-20" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="flex flex-col items-center gap-6">
              <Badge className="bg-primary/20 text-primary border-primary/40 text-[10px] uppercase tracking-[0.4em] px-6 py-2">Phase 1: Foundation Enrollment</Badge>
              <h1 className="text-6xl md:text-[10rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase mb-4">
                OWN THE <br />
                <span className="text-primary italic">EMPIRE</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Lead the next generation of football clubs. Master your tactics, own your assets, and convert success into persistent digital legacy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="h-16 px-12 text-lg font-bold bg-primary hover:bg-primary/90 text-white glow-blue group rounded-2xl">
                <Link href="#early-access">JOIN EARLY ACCESS <Rocket className="h-5 w-5 ml-3 group-hover:translate-x-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-12 text-lg font-bold border-white/10 hover:bg-white/5 rounded-2xl backdrop-blur-3xl">
                <Link href="/gameplay">WATCH TRAILER <Play className="h-5 w-5 ml-3 text-primary" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE IFM MISSION - WHAT IS IFM */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20">The Ecosystem Vision</Badge>
              <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase leading-none tracking-tighter">
                REDEFINING <br /><span className="text-primary italic">MANAGEMENT</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                IFM merges the tactical depth of a world-class simulation with the sovereignty of blockchain ownership. Every decision you make is etched into your club's history.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Tactical Depth", desc: "Engineered for pure strategic mastery." },
                  { icon: Shield, title: "Digital Assets", desc: "True ownership of players and clubs." },
                  { icon: Coins, title: "Earn Rewards", desc: "Convert performance into $IFM tokens." },
                  { icon: Activity, title: "Live Economy", desc: "A thriving marketplace for elite assets." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-sm text-white uppercase tracking-widest">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-0 border-white/10 overflow-hidden glow-blue">
                <Image src="https://picsum.photos/seed/ifm-game/1200/800" alt="Gameplay" width={1200} height={800} className="w-full h-auto brightness-75" />
              </GlassCard>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Squad Building", desc: "Scout and mint the next generation of legendary players." },
              { icon: Target, title: "Tactical Mastery", desc: "Adjust your formations in real-time with our neural engine." },
              { icon: Activity, title: "Progression", desc: "Advance your club through 5 tiers of professional competition." },
              { icon: Zap, title: "Ownership", desc: "Every club and player is an immutable digital asset." }
            ].map((card, i) => (
              <GlassCard key={i} className="p-10 border-white/5 hover:bg-primary/5 group">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold font-headline uppercase mb-4">{card.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{card.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPARISON SECTION - INVESTOR READY */}
      <section className="py-32 relative bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">THE <span className="text-primary">SOVEREIGNTY</span> GAP</h2>
            <p className="text-muted-foreground text-lg font-light">Why traditional managers fail in the digital ownership era.</p>
          </div>
          
          <GlassCard className="overflow-hidden border-white/10 bg-black/40" hoverable={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-8 font-headline uppercase tracking-widest text-muted-foreground">Feature</th>
                    <th className="p-8 font-headline uppercase tracking-widest text-muted-foreground">Traditional Sims</th>
                    <th className="p-8 font-headline uppercase tracking-widest text-primary italic">IFM Protocol</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-8 font-bold text-white uppercase tracking-tighter">{row.feature}</td>
                      <td className="p-8 text-muted-foreground">{row.trad}</td>
                      <td className="p-8 text-primary font-bold">{row.ifm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 4. GENESIS COLLECTION PREVIEW */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">GENESIS <span className="text-accent italic">TIERS</span></h2>
            <p className="text-muted-foreground text-xl font-light opacity-70">Securing your foundation status in the digital football empire.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { tier: "Academy", color: "blue", rarity: "Foundation", supply: "Unlimited" },
              { tier: "Professional", color: "blue", rarity: "Premium", supply: "10,000 Units" },
              { tier: "Elite", color: "gold", rarity: "Legendary", supply: "2,500 Units" },
              { tier: "Invincible", color: "gold", rarity: "Mythic", supply: "1,000 Units" },
            ].map((card, i) => (
              <GlassCard key={i} className="p-0 border-white/10 group overflow-hidden" glowColor={card.color === 'gold' ? 'gold' : 'blue'}>
                <div className="p-10 text-center space-y-6">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">{card.rarity}</div>
                  <h3 className="text-3xl font-bold font-headline uppercase tracking-tighter">{card.tier}</h3>
                  <div className="h-40 relative flex items-center justify-center">
                    <div className={`h-24 w-24 rounded-full blur-3xl absolute opacity-30 ${card.color === 'gold' ? 'bg-accent' : 'bg-primary'}`} />
                    <Trophy className={`h-20 w-20 transition-transform group-hover:scale-110 ${card.color === 'gold' ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Supply Model</div>
                    <div className="font-bold text-white">{card.supply}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <RoadmapSection />
      <EarlyAccessForm />
      <FAQSection />
    </div>
  )
}