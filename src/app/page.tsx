
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, Play, ArrowRight, Activity, Cpu, Target, Globe, Trophy, Rocket, Coins, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"
import { RoadmapSection } from "@/components/sections/RoadmapSection"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const containerRef = React.useRef(null)
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-stadium")
  const mintImage = PlaceHolderImages.find(img => img.id === "mint-preview")
  const rewardsImage = PlaceHolderImages.find(img => img.id === "rewards-visual")

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
            src={heroImage?.imageUrl || ""}
            alt="Stadium"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
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
                <Badge className="bg-primary/20 text-primary border-primary/40 text-[9px] uppercase tracking-widest px-3">Phase 1: Foundation</Badge>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/80">Protocol Status</span>
                <Activity className="h-3.5 w-3.5 text-primary animate-pulse" />
              </motion.div>
              
              <h1 className="text-7xl md:text-[11rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase mb-2">
                THE GLOBAL <br />
                <span className="text-primary italic">FOOTBALL EMPIRE</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-secondary-foreground max-w-4xl mx-auto leading-relaxed font-light tracking-wide opacity-70">
                Experience the premier high-fidelity blockchain management ecosystem. <br className="hidden md:block" />
                Phase 1 Enrollment is now live for Founding Managers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <Button asChild size="lg" className="h-20 px-14 text-xl font-bold bg-primary hover:bg-primary/90 text-white glow-blue group rounded-2xl shadow-2xl transition-all duration-500">
                <Link href="#early-access">
                  JOIN EARLY ACCESS <Rocket className="h-6 w-6 ml-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-14 text-xl font-bold border-white/10 hover:bg-white/5 rounded-2xl backdrop-blur-3xl shadow-2xl transition-all">
                <Link href="/gameplay">EXPLORE GAMEPLAY <Play className="h-6 w-6 ml-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PLAY-TO-EARN LOOP SECTION */}
      <section className="py-48 relative bg-secondary-background/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-[0.4em] text-[10px] font-bold">Economic Infrastructure</Badge>
                <h2 className="text-6xl md:text-7xl font-bold font-headline uppercase leading-none tracking-tighter">
                  COMPETE & <br /><span className="text-primary italic">EARN REWARDS</span>
                </h2>
                <p className="text-xl text-secondary-foreground font-light leading-relaxed">
                  Winning leagues and tournaments distributes $IFM tokens directly to your manager treasury. These rewards are fully withdrawable, reflecting your true tactical mastery.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Coins, title: "Withdrawable Earnings", desc: "Convert in-game success into liquid ecosystem rewards through verified smart contracts." },
                  { icon: Trophy, title: "Championship Pools", desc: "Compete for massive seasonal prize pools fueled by the ecosystem treasury." },
                  { icon: Activity, title: "Dynamic Multipliers", desc: "Elite club licenses grant reward multipliers based on rarity and performance." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-sm text-secondary-foreground leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className="p-4 border-white/10 glow-blue" hoverable={false}>
                <Image 
                  src={rewardsImage?.imageUrl || ""} 
                  alt="Rewards Visual" 
                  width={800} 
                  height={600} 
                  className="rounded-xl brightness-90 grayscale-[0.2]"
                />
                <div className="absolute -bottom-10 -right-10">
                   <GlassCard className="p-8 border-accent/30 bg-accent/5 backdrop-blur-3xl glow-gold">
                      <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Treasury Status</div>
                      <div className="text-3xl font-bold text-white">$4.2M POOL</div>
                   </GlassCard>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. GENESIS MINT SECTION */}
      <section className="py-48 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <GlassCard className="p-0 border-white/5 overflow-hidden" glowColor="gold">
                <Image 
                  src={mintImage?.imageUrl || ""} 
                  alt="Mint Preview" 
                  width={1200} 
                  height={800} 
                  className="object-cover h-[500px]"
                />
                <div className="p-10 space-y-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] font-bold text-accent uppercase tracking-[0.5em] mb-2">Genesis Launch</div>
                      <h3 className="text-3xl font-bold font-headline uppercase tracking-tighter">CLUB LICENSE MINTING</h3>
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/30 px-4 py-1">PHASE 2 PREVIEW</Badge>
                  </div>
                  <p className="text-secondary-foreground font-light leading-relaxed">
                    Founding managers can mint their persistent Club Licenses in the next phase. Secure your foundation license today by joining the Phase 1 whitelist.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-12"
            >
              <div className="space-y-6">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-[0.4em] text-[10px] font-bold">Ownership Protocol</Badge>
                <h2 className="text-6xl md:text-7xl font-bold font-headline uppercase leading-none tracking-tighter">
                  SECURE YOUR <br /><span className="text-accent italic">GENESIS LICENSE</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Immutable Ownership", desc: "Your club is secured on the blockchain, granting you full control over its legacy." },
                  { title: "Governance Rights", desc: "Genesis license holders vote on protocol upgrades and league rules." },
                  { title: "Early Access", desc: "Be the first to field your squad in the Alpha tournament series." },
                  { title: "Limited Supply", desc: "Only 10,000 Genesis licenses will ever be minted for the Foundation layer." }
                ].map((perk, i) => (
                  <div key={i} className="space-y-3">
                    <div className="h-2 w-12 bg-accent/40 rounded-full" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest">{perk.title}</h4>
                    <p className="text-xs text-secondary-foreground leading-relaxed font-light">{perk.desc}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="h-16 px-10 bg-accent hover:bg-accent/90 text-background font-bold rounded-xl glow-gold group">
                <Link href="#early-access">
                  APPLY FOR WHITELIST <ArrowRight className="h-5 w-5 ml-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
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
            src={heroImage?.imageUrl || ""}
            alt="Stadium Footer"
            fill
            className="object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl space-y-16">
          <h2 className="text-7xl md:text-[11rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase">
            OWN YOUR <br />
            <span className="text-primary italic">LEGACY</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 pt-10">
            <Button asChild size="lg" className="h-24 px-16 text-2xl font-bold bg-primary hover:bg-primary/90 text-white glow-blue rounded-3xl shadow-3xl transition-all duration-700">
              <Link href="#early-access">
                JOIN FOUNDING MANAGERS
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
