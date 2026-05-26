
"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Target, Wallet, Rocket, Zap, Trophy, Coins, Cpu, Lock, Globe, TrendingUp, BarChart3 } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function EcosystemPage() {
  const tokenImg = PlaceHolderImages.find(i => i.id === "token-visual")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "rewards-visual")
  const nftImg = PlaceHolderImages.find(i => i.id === "player-card-gold")

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      
      {/* 1. ECOSYSTEM HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/ifm-eco-hero/1920/1080"
            alt="Ecosystem Hero"
            fill
            className="object-cover opacity-10 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 radial-glow-blue opacity-30" />
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-10"
          >
            <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">The Sovereignty Protocol</Badge>
            <h1 className="text-6xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              DIGITAL <br /><span className="text-primary italic">OWNERSHIP</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light opacity-80">
              IFM merges elite football management with the power of decentralized assets. Own your club, control your rewards, and build a permanent legacy on the blockchain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE OWNERSHIP LAYER - CONVICTION */}
      <section className="py-32 relative border-t border-white/5 bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter leading-none">THE VALUE OF <br /><span className="text-primary italic">SOVEREIGNTY</span></h2>
               <p className="text-xl text-muted-foreground font-light leading-relaxed">
                 In traditional games, your time is a cost. In IFM, your time is an investment. Every club license and player contract you hold is a verified digital asset with persistent value.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { icon: Lock, title: "Immutable Assets", desc: "Your NFTs cannot be deleted, revoked, or frozen." },
                    { icon: Globe, title: "Global Marketplace", desc: "Trade your verified assets on any open exchange." },
                    { icon: Coins, title: "Yield Potential", desc: "Top-tier club licenses grant ecosystem reward bonuses." },
                    { icon: Zap, title: "Active Governance", desc: "Token holders vote on league expansions and rules." },
                  ].map((p, i) => (
                    <div key={i} className="space-y-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold uppercase tracking-widest text-white text-sm">{p.title}</h4>
                      <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
              <GlassCard className="p-0 border-white/10 overflow-hidden glow-blue" hoverable={false}>
                 <Image 
                    src={nftImg?.imageUrl || ""} 
                    alt="NFT Card" 
                    width={800} 
                    height={1000} 
                    className="w-full h-auto brightness-75" 
                    data-ai-hint={nftImg?.imageHint}
                 />
                 <div className="absolute top-6 left-6 right-6">
                    <GlassCard className="p-4 bg-black/80 backdrop-blur-lg border-white/20">
                        <div className="flex justify-between items-center">
                            <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Asset ID #4412</div>
                            <div className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Verified On-Chain</div>
                        </div>
                    </GlassCard>
                 </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TOKENOMICS VISUAL BREAKDOWN */}
      <section className="py-32 relative bg-card/10 border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
             >
                <GlassCard className="p-0 border-white/10 overflow-hidden shadow-2xl" glowColor="blue">
                    <Image src={tokenImg?.imageUrl || ""} alt="Token Visual" width={800} height={800} className="w-full h-auto opacity-80" data-ai-hint={tokenImg?.imageHint} />
                </GlassCard>
             </motion.div>
             <div className="space-y-12">
                <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">$IFM <br /><span className="text-primary italic">UTILITY HUB</span></h2>
                <div className="space-y-8">
                    {[
                        { title: "Marketplace Liquidity", desc: "The primary currency for transfers, license acquisitions, and trade.", icon: BarChart3 },
                        { title: "Performance Yield", desc: "Win trophies, hit targets, and earn directly from the treasury.", icon: TrendingUp },
                        { icon: Shield, title: "Governance Rights", desc: "Stake your tokens to propose and vote on ecosystem expansions." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6 group">
                            <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase mb-1 tracking-tight">{item.title}</h4>
                                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. REWARDS ENGINE */}
      <section className="py-32 relative bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
             <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">THE <span className="text-primary italic">DISTRIBUTION</span> ENGINE</h2>
             <p className="text-muted-foreground text-xl font-light">Fuelling the world's first decentralized football empire.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Operational Fuel", desc: "Pay player wages, staff contracts, and stadium upgrades exclusively in $IFM.", icon: Cpu },
              { title: "Governance Power", desc: "Stake $IFM to vote on major ecosystem proposals and treasury allocations.", icon: Shield },
              { title: "Prize Distributions", desc: "League winners receive $IFM payouts directly to their manager vault.", icon: Trophy },
            ].map((pillar, i) => (
              <GlassCard key={i} className="p-12 border-white/5 hover:bg-primary/5 group">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold font-headline uppercase mb-6">{pillar.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{pillar.desc}</p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden h-[400px]" hoverable={false}>
             <Image src={rewardsImg?.imageUrl || ""} alt="Rewards" fill className="object-cover opacity-40" data-ai-hint={rewardsImg?.imageHint} />
             <div className="absolute inset-0 flex items-center justify-center text-center p-12">
                <div className="space-y-6 max-w-2xl">
                    <h3 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-tight">TRANSPARENT <span className="text-primary italic">REWARDS</span></h3>
                    <p className="text-lg text-white font-light opacity-80">Our decentralized treasury ensures all performance rewards are distributed instantly upon verification of match results.</p>
                </div>
             </div>
          </GlassCard>
        </div>
      </section>

      <FAQSection />
      <EarlyAccessForm />
    </div>
  )
}
