
"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Target, Wallet, Rocket, Zap, Trophy, Coins, Cpu } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"

export default function EcosystemPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D]">
      
      {/* 1. ECOSYSTEM HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden">
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
            <Badge className="bg-accent/10 text-accent border-accent/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">The Sovereignty Protocol</Badge>
            <h1 className="text-6xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              DIGITAL <br /><span className="text-accent italic">SOVEREIGNTY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light opacity-80">
              IFM merges elite football management with decentralized economy. Own your club, control your rewards, and lead the global empire from Phase 1 onwards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE MINTING PROTOCOL (WHY NFT?) */}
      <section className="py-32 relative border-t border-white/5 bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">THE <span className="text-accent">MINTING</span> PROTOCOL</h2>
            <p className="text-muted-foreground text-xl font-light opacity-70">Securing your foundation club license as an immutable asset.</p>
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
                <p className="text-sm text-muted-foreground leading-relaxed font-light opacity-70">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-accent/30 to-transparent -ml-10 -z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REWARD CONVICTION LOOP */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <h2 className="text-5xl font-headline font-bold uppercase leading-none tracking-tighter">CONVERT SUCCESS INTO <br /><span className="text-accent italic">PERSISTENT VALUE</span></h2>
               <p className="text-xl text-muted-foreground font-light leading-relaxed">
                 Traditional gaming profits the publisher. IFM profits the manager. Your tactical decisions are rewarded with $IFM tokens, fueling your rise to global dominance.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Coins, title: "Withdrawable $IFM", desc: "Rewards are verifiable on-chain and fully withdrawable." },
                    { icon: Trophy, title: "Genesis Multipliers", desc: "Elite club licenses grant tiered reward bonuses." },
                    { icon: Cpu, title: "AI Scouting", desc: "Spend $IFM to unlock high-concurrency neural scouts." },
                    { icon: Zap, title: "Liquid Assets", desc: "Trade your verified club license at any time." },
                  ].map((p, i) => (
                    <GlassCard key={i} className="p-8 border-white/5 bg-white/5" hoverable={true}>
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold uppercase tracking-tight mb-1">{p.title}</h4>
                      <p className="text-xs text-muted-foreground font-light">{p.desc}</p>
                    </GlassCard>
                  ))}
               </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-full animate-pulse" />
              <GlassCard className="p-0 border-white/10 overflow-hidden glow-gold" hoverable={false}>
                <Image 
                  src="https://picsum.photos/seed/ifm-token-vis/800/800"
                  alt="Token Visual"
                  width={800}
                  height={800}
                  className="w-full h-auto brightness-75"
                />
                <div className="p-10 bg-background/80 border-t border-white/10">
                   <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Protocol Status</span>
                      <Badge className="bg-accent/20 text-accent border-accent/30">ALPHA LIVE</Badge>
                   </div>
                   <div className="text-2xl font-bold font-headline uppercase tracking-tighter">$IFM REWARD POOL: $4.2M</div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <EarlyAccessForm />
      <FAQSection />
    </div>
  )
}
