
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, Play, ArrowRight, Activity, Cpu, Target, Globe, Trophy, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"
import { RoadmapSection } from "@/components/sections/RoadmapSection"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function HomePage() {
  const containerRef = React.useRef(null)
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-stadium")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4])

  return (
    <div ref={containerRef} className="flex flex-col w-full relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[110vh] min-h-[900px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || "https://kommodo.ai/i/HKs6FkZPntMZVPJB9JWf"}
            alt="Stadium"
            fill
            className="object-cover opacity-60"
            priority
            data-ai-hint="futuristic stadium"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ifm-dark via-ifm-dark/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-ifm-dark/80 via-transparent to-ifm-dark" />
          
          {/* Lighting effects */}
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 football-grid opacity-10" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 py-2"
              >
                <Badge variant="outline" className="bg-ifm-green/20 text-ifm-green border-ifm-green/40 text-[9px] uppercase tracking-widest px-3">Ecosystem Online</Badge>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/80">Protocol Status</span>
                <Activity className="h-3 w-3 text-ifm-green animate-pulse" />
              </motion.div>
              
              <h1 className="text-7xl md:text-[12rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase mb-2">
                OWN YOUR <br />
                <span className="text-ifm-green italic">FOOTBALL LEGACY</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light tracking-wide opacity-70">
                Experience the premier high-fidelity blockchain management ecosystem. <br className="hidden md:block" />
                True digital ownership meets elite esports performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <Button asChild size="lg" className="h-20 px-14 text-xl font-bold bg-ifm-green hover:bg-ifm-green/90 text-ifm-dark glow-green group rounded-2xl shadow-2xl transition-all duration-500">
                <Link href="#early-access">
                  JOIN EARLY ACCESS <Rocket className="h-6 w-6 ml-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-14 text-xl font-bold border-white/10 hover:bg-white/5 rounded-2xl backdrop-blur-3xl shadow-2xl transition-all">
                WATCH TRAILER <Play className="h-6 w-6 ml-4" />
              </Button>
            </div>
          </motion.div>

          {/* Broadcast Telemetry */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-32 max-w-5xl mx-auto"
          >
            {[
              { label: "FOUNDING MANAGERS", value: "340K+", sub: "Verified Licenses" },
              { label: "GLOBAL DIVISIONS", value: "1,200", sub: "Active Leagues" },
              { label: "STAKES POOL", value: "$4.2M", sub: "Season 1 Protocol" },
              { label: "PROTOCOL LAYER", value: "ERC-721", sub: "Immutable Assets" },
            ].map((stat, i) => (
              <GlassCard key={i} className="py-8 px-6 border-white/5 bg-ifm-surface/40 text-left" hoverable={true}>
                <div className="text-[8px] text-muted-foreground uppercase tracking-[0.4em] mb-2 font-bold">{stat.label}</div>
                <div className="text-4xl font-headline font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                <div className="text-[9px] text-ifm-green font-bold uppercase tracking-widest">{stat.sub}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED ECOSYSTEM SECTION */}
      <section className="py-64 relative bg-ifm-surface/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-12"
            >
              <div className="space-y-6">
                <Badge className="bg-ifm-green/10 text-ifm-green border-ifm-green/20 px-6 py-2 uppercase tracking-[0.4em] text-[10px] font-bold">Managerial Excellence</Badge>
                <h2 className="text-7xl md:text-8xl font-bold font-headline uppercase leading-none tracking-tighter">
                  MASTER YOUR <br /><span className="text-ifm-green italic">LEGACY</span>
                </h2>
                <p className="text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
                  IFM is the first professional sports infrastructure for the decentralized era. Build, own, and lead your club to global dominance in a tiered competitive system.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: Target, title: "Tactical Depth", desc: "Engineered with 15k+ tactical variables per match engine cycle." },
                  { icon: Shield, title: "Verified Assets", desc: "Every club and player contract is a unique digital asset." },
                  { icon: Globe, title: "Global Leagues", desc: "Compete in a hierarchical league structure across 140+ countries." },
                  { icon: Cpu, title: "AI Scouting", desc: "Neural networks process raw data into actionable scouting insights." },
                ].map((item, i) => (
                  <div key={i} className="space-y-4 group">
                    <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-ifm-green/5 border border-ifm-green/20 group-hover:bg-ifm-green group-hover:text-ifm-dark transition-all duration-500">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h4 className="font-bold text-white uppercase text-sm tracking-widest">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="absolute -inset-20 bg-ifm-green/10 blur-[150px] rounded-full opacity-50" />
              <GlassCard className="p-4 border-white/10 glow-green rotate-2 relative z-10">
                <Image
                  src="https://picsum.photos/seed/ifm-tactical/800/600"
                  alt="IFM Tactical"
                  width={800}
                  height={600}
                  className="rounded-xl grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  data-ai-hint="football manager"
                />
                <div className="absolute -bottom-10 -left-10 z-20">
                  <GlassCard className="p-10 border-ifm-gold/30 bg-ifm-gold/5 backdrop-blur-3xl glow-gold border-2">
                    <div className="text-[12px] font-bold text-ifm-gold uppercase tracking-[0.4em] mb-2">Authority Level</div>
                    <div className="text-4xl font-headline font-bold text-white uppercase">Genesis MGR</div>
                  </GlassCard>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON SECTION */}
      <section className="py-48 relative">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter uppercase leading-none">
              TRADITIONAL SIM <br /><span className="text-ifm-green italic">VS IFM ECOSYSTEM</span>
            </h2>
          </div>
          
          <GlassCard className="overflow-hidden border-white/5 bg-ifm-surface/40" hoverable={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-8 text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">Feature</th>
                    <th className="p-8 text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">Traditional Sim</th>
                    <th className="p-8 text-sm font-bold uppercase tracking-[0.3em] text-ifm-green">IFM Protocol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: "Asset Ownership", trad: "Licensed Data Only", ifm: "Permanent NFT Deeds" },
                    { feature: "Progression", trad: "Seasonal Reset", ifm: "Infinite Persistent Legacy" },
                    { feature: "Economy", trad: "In-game Virtual Only", ifm: "Liquid Ecosystem Value" },
                    { feature: "Governance", trad: "None", ifm: "DAO Protocol Voting" },
                    { feature: "Rewards", trad: "Achievements Only", ifm: "Performance-Based Rewards" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="p-8 text-lg font-bold uppercase tracking-tight text-white">{row.feature}</td>
                      <td className="p-8 text-muted-foreground font-light">{row.trad}</td>
                      <td className="p-8 font-bold text-ifm-green">{row.ifm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 4. GENESIS COLLECTION PREVIEW */}
      <section className="py-48 relative bg-ifm-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="space-y-6">
              <Badge className="bg-ifm-gold/10 text-ifm-gold border-ifm-gold/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Genesis Collection</Badge>
              <h2 className="text-6xl md:text-8xl font-bold font-headline uppercase leading-none tracking-tighter">
                PRECISION <span className="text-ifm-gold italic">TIERS</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-md font-light">
              Each Club License tier grants specific protocol rights, treasury access, and competitive multipliers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { tier: "Academy", rarity: "Common", supply: "10,000", color: "blue" },
              { tier: "Professional", rarity: "Rare", supply: "2,500", color: "green" },
              { tier: "Elite", rarity: "Legendary", supply: "500", color: "gold" },
              { tier: "Invincible", rarity: "Mythic", supply: "50", color: "gold" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-0 border-white/5 group" glowColor={item.color as any}>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image 
                      src={`https://picsum.photos/seed/ifm-tier-${i}/400/533`}
                      alt={item.tier}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
                      data-ai-hint="football badge"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ifm-dark via-transparent to-transparent" />
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-[10px] font-bold tracking-widest uppercase px-4 py-1">
                        {item.rarity}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-3xl font-bold font-headline uppercase tracking-tighter">{item.tier}</h3>
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-t border-white/5 pt-4">
                      <span>Protocol Supply</span>
                      <span className="text-white">{item.supply}</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RoadmapSection />
      <EarlyAccessForm />
      <FAQSection />

      {/* FINAL CTA */}
      <section className="py-80 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || "https://kommodo.ai/i/HKs6FkZPntMZVPJB9JWf"}
            alt="Stadium Footer"
            fill
            className="object-cover opacity-10 grayscale"
            data-ai-hint="stadium floodlights"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ifm-dark via-transparent to-ifm-dark" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl space-y-16">
          <h2 className="text-7xl md:text-[11rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase">
            SECURE YOUR <br />
            <span className="text-ifm-green italic">EMPIRE</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto opacity-70 leading-relaxed">
            The prime-division whitelist is closing. Join the elite network of managers shaping the future of the digital football empire.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-10">
            <Button asChild size="lg" className="h-24 px-16 text-2xl font-bold bg-ifm-green hover:bg-ifm-green/90 text-ifm-dark glow-green rounded-3xl shadow-3xl transition-all duration-700">
              <Link href="#early-access">
                APPLY FOR LICENSE
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-24 px-16 text-2xl font-bold hover:bg-white/5 rounded-3xl border border-white/10 gap-4 uppercase tracking-widest font-headline">
              <Link href="/ecosystem">
                Command Center <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
