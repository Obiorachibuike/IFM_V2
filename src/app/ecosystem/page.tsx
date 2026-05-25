"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Database, Zap, Trophy, Target, Wallet, Rocket, Coins } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"
import { cn } from "@/lib/utils"

export default function EcosystemPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. ECOSYSTEM HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/ifm-eco-hero/1920/1080"
            alt="Ecosystem Hero"
            fill
            className="object-cover opacity-10 grayscale"
            priority
            data-ai-hint="futuristic stadium"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-10"
          >
            <Badge className="bg-accent/10 text-accent border-accent/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Protocol Architecture</Badge>
            <h1 className="text-6xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              DIGITAL <br /><span className="text-accent italic">SOVEREIGNTY</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground leading-relaxed max-w-3xl font-light opacity-80">
              IFM merges elite football management with decentralized economy. Own your club, control your rewards, and lead the global empire from Phase 1 onwards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE MINTING PROTOCOL */}
      <section className="py-32 relative border-t border-white/5 bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">THE <span className="text-accent">MINTING</span> PROTOCOL</h2>
            <p className="text-secondary-foreground text-xl font-light opacity-70">Securing your foundation club license on the blockchain.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Wallet, title: "Connect", desc: "Register your manager profile and link your secure digital wallet." },
              { icon: Shield, title: "Whitelist", desc: "Early Phase 1 managers receive priority mint status for Genesis licenses." },
              { icon: Rocket, title: "Mint", desc: "Select your tier and mint your club license as a persistent NFT." },
              { icon: Target, title: "Deploy", desc: "Field your squad instantly and begin competing in the pro-leagues." }
            ].map((step, i) => (
              <div key={i} className="text-center space-y-6 relative group">
                <div className="h-20 w-20 mx-auto rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500">
                  <step.icon className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold font-headline uppercase tracking-widest">{step.title}</h4>
                <p className="text-sm text-secondary-foreground leading-relaxed font-light opacity-70">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-accent/30 to-transparent -ml-10 -z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GENESIS COLLECTION TIERS */}
      <section className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">GENESIS <span className="text-accent italic">PRESTIGE TIERS</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { 
                tier: "Academy", 
                rarity: "Common", 
                perks: ["Entry League Access", "Basic Scout Network", "Standard Rewards"],
                supply: "10,000 Units",
                color: "border-primary/20"
              },
              { 
                tier: "Elite", 
                rarity: "Legendary", 
                perks: ["Pro League Guaranteed", "Governance Tier 2", "2.5x Reward Multiplier"],
                supply: "500 Units",
                color: "border-accent/30"
              }
            ].map((tier, i) => (
              <GlassCard key={i} className={cn("p-12 bg-card/30", tier.color)} glowColor={i === 1 ? "gold" : "blue"}>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="space-y-6 flex-1">
                    <div className="space-y-2">
                       <Badge className="bg-white/5 border-white/10 text-[10px] font-bold tracking-widest uppercase">{tier.rarity}</Badge>
                       <h3 className="text-4xl font-bold font-headline uppercase tracking-tighter">{tier.tier}</h3>
                    </div>
                    <ul className="space-y-3">
                      {tier.perks.map((perk, j) => (
                        <li key={j} className="flex items-center gap-3 text-secondary-foreground font-light text-sm opacity-80">
                          <Zap className="h-3 w-3 text-accent" /> {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="text-[10px] font-bold text-secondary-foreground uppercase tracking-widest opacity-60">Supply</div>
                    <div className="text-2xl font-headline font-bold text-white">{tier.supply}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <EarlyAccessForm />
      <FAQSection />
    </div>
  )
}