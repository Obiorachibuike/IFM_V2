
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const comparisonData = [
  { feature: "Digital Ownership", trad: "None (License Only)", ifm: "Full (On-Chain Assets)" },
  { feature: "Reward System", trad: "In-Game Currency", ifm: "Withdrawable $IFM tokens" },
  { feature: "Asset Persistence", trad: "Seasonal Reset", ifm: "Lifetime Verification" },
  { feature: "Governance", trad: "Developer Controlled", ifm: "Manager DAO Voting" },
  { feature: "Match Engine", trad: "Standard Simulation", ifm: "Neural AI Processing" },
]

const nftGenesisAssets = [
  {
    id: 1,
    name: "Alpha Club License",
    description: "The foundational permit required to register and manage a professional club in the IFM ecosystem.",
    importance: "Grants permanent entry into the competitive league system and unlocks eligibility for $IFM rewards.",
    requirement: "Whitelisted Founding Manager status and successful Phase 1 enrollment.",
    img: "https://picsum.photos/seed/ifm-badge1/600/800",
    hint: "gold badge",
    tier: "Founder"
  },
  {
    id: 2,
    name: "Legendary Scout Bot",
    description: "An advanced AI-driven scouting unit designed to identify high-potential youth talent across global networks.",
    importance: "Drastically increases the efficiency of talent identification and reduces scouting overhead costs.",
    requirement: "Active Tier 2 Management License or higher ecosystem standing.",
    img: "https://picsum.photos/seed/ifm-tech1/600/800",
    hint: "hologram brain",
    tier: "Legendary"
  },
  {
    id: 3,
    name: "Neo London Stadium",
    description: "A premium digital venue capable of hosting Tier 1 championship matches and community events.",
    importance: "Unlock significant passive revenue streams from ticket sales and commercial matchday activities.",
    requirement: "Ownership of at least 5 elite player contracts and stadium development tokens.",
    img: "https://picsum.photos/seed/ifm-stadium1/600/800",
    hint: "futuristic stadium",
    tier: "Elite"
  },
  {
    id: 4,
    name: "Mythic Striker: 'Voltage'",
    description: "A generation-zero player card featuring peak physical attributes and exclusive tactical traits.",
    importance: "Provides a definitive competitive edge in high-stakes knockout tournaments and seasonal leagues.",
    requirement: "Available exclusively through the limited Phase 2 Genesis Mint event.",
    img: "https://picsum.photos/seed/ifm-player1/600/800",
    hint: "football player",
    tier: "Mythic"
  }
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

      {/* 2. NFT GENESIS CAROUSEL */}
      <section className="py-32 relative bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1">SOVEREIGNTY PROTOCOL</Badge>
              <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase leading-none tracking-tighter">
                GENESIS <span className="text-accent italic">ASSETS</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-xl">
                Verified digital infrastructure. Rare assets that grant permanent utility and voting power within the IFM DAO.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="border-white/10 hover:bg-white/5 rounded-xl">
                <Link href="/marketplace">VIEW MARKETPLACE</Link>
              </Button>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {nftGenesisAssets.map((asset) => (
                <CarouselItem key={asset.id} className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GlassCard 
                      className="p-0 border-white/10 overflow-hidden group h-full flex flex-col" 
                      glowColor={asset.tier === 'Mythic' || asset.tier === 'Founder' ? 'gold' : 'blue'}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
                          <Image 
                            src={asset.img} 
                            alt={asset.name} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            data-ai-hint={asset.hint}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                          <div className="absolute top-4 right-4">
                            <Badge className={asset.tier === 'Mythic' || asset.tier === 'Founder' ? 'bg-accent text-background font-bold' : 'bg-primary text-white font-bold'}>
                              {asset.tier}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-8 flex flex-col justify-between bg-card/40">
                          <div className="space-y-6">
                            <h3 className="text-2xl font-bold font-headline uppercase tracking-tighter">{asset.name}</h3>
                            <div className="space-y-4">
                              <div>
                                <div className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">Description</div>
                                <p className="text-xs text-muted-foreground leading-relaxed">{asset.description}</p>
                              </div>
                              <div>
                                <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Strategic Importance</div>
                                <p className="text-xs text-white/80 leading-relaxed italic">{asset.importance}</p>
                              </div>
                              <div className="pt-4 border-t border-white/5">
                                <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Requirement</div>
                                <p className="text-[10px] font-bold text-white uppercase">{asset.requirement}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-white/10 bg-white/5 hover:bg-white/10 text-white" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-white/10 bg-white/5 hover:bg-white/10 text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* 3. THE IFM MISSION */}
      <section className="py-32 relative bg-card/10">
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
        </div>
      </section>

      {/* 4. COMPARISON SECTION */}
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

      <RoadmapSection />
      <EarlyAccessForm />
      <FAQSection />
    </div>
  )
}
