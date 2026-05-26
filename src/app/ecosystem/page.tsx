
"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Target, Wallet, Rocket, Zap, Trophy, Coins, Cpu, Lock, Globe, TrendingUp, BarChart3, Sparkles, LayoutDashboard } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

export default function EcosystemPage() {
  const tokenImg = PlaceHolderImages.find(i => i.id === "token-visual")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "rewards-visual")
  const nftImg = PlaceHolderImages.find(i => i.id === "player-card-gold")
  const aboutHero = PlaceHolderImages.find(i => i.id === "about-hero")
  const mintImg = PlaceHolderImages.find(i => i.id === "mint-preview")
  const stadiumImg = PlaceHolderImages.find(i => i.id === "hero-stadium")

  const rarityTiers = [
    { name: "Common", color: "bg-muted text-muted-foreground", glow: "none" },
    { name: "Rare", color: "bg-blue-600 text-white", glow: "blue" },
    { name: "Elite", color: "bg-primary text-white", glow: "blue" },
    { name: "Legendary", color: "bg-accent text-background font-bold", glow: "gold" },
    { name: "Iconic", color: "bg-purple-600 text-white font-bold shadow-[0_0_20px_rgba(147,51,234,0.5)]", glow: "none" }
  ]

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      
      {/* 1. ECOSYSTEM HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background to-background" />
          <Image 
            src={aboutHero?.imageUrl || ""}
            alt="Ecosystem Hero"
            fill
            className="object-cover opacity-20 grayscale brightness-50"
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

      {/* 2. THE NFT ASSET LAYER */}
      <section className="py-32 relative border-t border-white/5 bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="space-y-4">
              <Badge className="bg-accent/10 text-accent border-accent/30 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Structural Assets</Badge>
              <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">PROGRESSION <span className="text-accent italic">VERIFIED</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                title: "Player NFT Cards", 
                desc: "Unique on-chain representations of your squad. Each card evolves its stats, potential, and history based on performance and training.",
                img: nftImg,
                rarity: "Legendary"
              },
              { 
                title: "Club License NFTs", 
                desc: "The structural permit for your empire. Grants permanent entry into the competitive league system and eligibility for seasonal payouts.",
                img: mintImg,
                rarity: "Elite"
              },
              { 
                title: "Stadium & Facility NFTs", 
                desc: "Visual and functional infrastructure that evolves. Upgrade your capacity and facilities to unlock higher passive revenue tiers.",
                img: stadiumImg,
                rarity: "Rare"
              }
            ].map((asset, i) => (
              <GlassCard key={i} className="group p-0" glowColor={asset.rarity === 'Legendary' ? 'gold' : 'blue'}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  {asset.img && (
                    <Image src={asset.img.imageUrl} alt={asset.title} fill className="object-cover brightness-75 group-hover:scale-110 transition-transform duration-700" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 right-6">
                    <Badge className={cn(
                      "font-bold uppercase tracking-widest px-4 py-1",
                      rarityTiers.find(t => t.name === asset.rarity)?.color
                    )}>
                      {asset.rarity}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold font-headline uppercase tracking-tighter">{asset.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{asset.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RARITY & PROGRESSION INFOGRAPHIC */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter leading-none">THE HIERARCHY OF <br /><span className="text-primary italic">RARITY</span></h2>
              <p className="text-xl text-muted-foreground font-light">
                Every asset in IFM is categorized by rarity, directly influencing progression speed, market value, and visual depth.
              </p>
              <div className="space-y-4">
                {rarityTiers.map((tier, k) => (
                  <div key={k} className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                    <div className={cn("h-4 w-4 rounded-full", tier.color.split(' ')[0])} />
                    <div className="flex-1 flex justify-between items-center">
                      <span className="font-bold uppercase tracking-widest text-sm">{tier.name}</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Multiplier: x{1 + k*0.5}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <GlassCard className="p-12 border-white/10 bg-card/60 relative overflow-hidden h-[600px] flex flex-col justify-center items-center text-center space-y-12" glowColor="gold">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full animate-pulse" />
                    <Trophy className="h-40 w-40 text-accent relative z-10" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-headline font-bold uppercase tracking-tighter">ICONIC STATUS</h3>
                    <p className="text-muted-foreground font-light max-w-md">The pinnacle of digital ownership. Only 100 Iconic Player Cards exist in the Genesis Cycle.</p>
                    <Badge className="bg-purple-600 text-white font-bold px-8 py-2">VERIFIED OWNERSHIP</Badge>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. TOKEN & ECOSYSTEM REWARDS */}
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
                    {tokenImg && <Image src={tokenImg.imageUrl} alt="Token Visual" width={800} height={800} className="w-full h-auto opacity-80" />}
                </GlassCard>
             </motion.div>
             <div className="space-y-12">
                <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">$IFM <br /><span className="text-primary italic">UTILITY HUB</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  The $IFM token powers everything from transfer fees to stadium upgrades, ensuring all performance is rewarded with persistent value.
                </p>
                <div className="grid grid-cols-1 gap-6">
                    {[
                        { title: "Marketplace Liquidity", desc: "The primary currency for transfers and rare NFT acquisitions.", icon: BarChart3, img: aboutHero },
                        { title: "Performance Yield", desc: "Earn directly from the treasury through seasonal performance.", icon: TrendingUp, img: rewardsImg },
                    ].map((item, i) => (
                        <GlassCard key={i} className="p-0 border-white/5 bg-white/5 flex h-32 overflow-hidden group">
                            <div className="relative w-48 h-full">
                               {item.img && (
                                 <Image src={item.img.imageUrl} alt={item.title} fill className="object-cover brightness-50 group-hover:scale-110 transition-transform duration-700" />
                               )}
                               <div className="absolute inset-0 flex items-center justify-center text-primary">
                                  <item.icon className="h-8 w-8" />
                               </div>
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                                <h4 className="text-lg font-bold uppercase mb-1 tracking-tight">{item.title}</h4>
                                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <EarlyAccessForm />
    </div>
  )
}
