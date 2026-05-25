
"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Coins, Database, Layers, ArrowRight, Zap, Trophy, Cpu, Target } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"

export default function EcosystemPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. ECOSYSTEM HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-ifm-dark">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/ifm-eco-hero/1920/1080"
            alt="Ecosystem Hero"
            fill
            className="object-cover opacity-10 grayscale"
            priority
            data-ai-hint="blockchain football"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ifm-dark via-transparent to-ifm-dark" />
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-ifm-blue/10 blur-[150px] rounded-full -mr-40 -mt-40" />
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-10"
          >
            <Badge className="bg-ifm-gold/10 text-ifm-gold border-ifm-gold/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Protocol Infrastructure</Badge>
            <h1 className="text-7xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              DIGITAL <br /><span className="text-ifm-gold italic">SOVEREIGNTY</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              IFM represents the convergence of professional football management and decentralized economic infrastructure. Own your assets, control your destiny, and lead the global empire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. GENESIS COLLECTION TIERS */}
      <section className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter leading-none">
              GENESIS <br /><span className="text-ifm-gold italic">PRESTIGE TIERS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                tier: "Academy", 
                rarity: "Common", 
                perks: ["Entry League Access", "Basic Scout Network", "Standard Reward Multiplier"],
                supply: "10,000 Units",
                color: "border-blue-500/20"
              },
              { 
                tier: "Professional", 
                rarity: "Rare", 
                perks: ["Advanced Scouting", "Governance Tier 1", "1.5x Reward Multiplier", "Staking Access"],
                supply: "2,500 Units",
                color: "border-ifm-green/20"
              },
              { 
                tier: "Elite", 
                rarity: "Legendary", 
                perks: ["Pro League Guaranteed", "Governance Tier 2", "2.5x Reward Multiplier", "Genesis DAO Voting"],
                supply: "500 Units",
                color: "border-ifm-gold/20"
              },
              { 
                tier: "Invincible", 
                rarity: "Mythic", 
                perks: ["Master League Access", "Governance Tier 3", "5.0x Reward Multiplier", "Ecosystem Revenue Share"],
                supply: "50 Units",
                color: "border-accent/40"
              }
            ].map((tier, i) => (
              <GlassCard key={i} className={cn("p-12 bg-ifm-surface/30", tier.color)} glowColor={i >= 2 ? "gold" : "blue"}>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="space-y-6 flex-1">
                    <div className="space-y-2">
                       <Badge className="bg-white/5 border-white/10 text-[10px] font-bold tracking-widest uppercase">{tier.rarity}</Badge>
                       <h3 className="text-4xl font-bold font-headline uppercase tracking-tighter">{tier.tier}</h3>
                    </div>
                    <ul className="space-y-3">
                      {tier.perks.map((perk, j) => (
                        <li key={j} className="flex items-center gap-3 text-muted-foreground font-light text-sm">
                          <Zap className="h-3 w-3 text-ifm-gold" /> {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Protocol Supply</div>
                    <div className="text-2xl font-headline font-bold text-white">{tier.supply}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOKEN ECONOMY */}
      <section className="py-48 relative overflow-hidden bg-ifm-surface/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <Badge className="bg-ifm-blue/10 text-ifm-blue border-ifm-blue/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Economic Architecture</Badge>
                <h2 className="text-6xl font-bold font-headline uppercase leading-none tracking-tighter">
                  THE <span className="text-ifm-blue italic">$IFM TOKEN</span>
                </h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  The $IFM token powers every layer of the ecosystem, from managerial operations to decentralized protocol governance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Utility", desc: "Used for transfers, training, and club expansions." },
                  { icon: Database, title: "Staking", desc: "Lock tokens to boost rewards and unlock scouting tiers." },
                  { icon: Shield, title: "Governance", desc: "Vote on protocol upgrades and league rule-sets." },
                  { icon: Trophy, title: "Rewards", desc: "Distributed based on competitive on-pitch performance." },
                ].map((item, i) => (
                  <GlassCard key={i} className="p-8 border-white/5 bg-ifm-dark/60">
                    <div className="h-10 w-10 rounded-xl bg-ifm-blue/10 flex items-center justify-center text-ifm-blue mb-6">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <GlassCard className="p-12 border-white/10" glowColor="blue">
               <h4 className="text-2xl font-bold font-headline uppercase tracking-tighter mb-10">Allocation Breakdown</h4>
               <div className="space-y-8">
                  {[
                    { label: "Ecosystem Rewards", value: 35, color: "bg-ifm-blue" },
                    { label: "Community & DAO", value: 20, color: "bg-ifm-green" },
                    { label: "Strategic Partners", value: 15, color: "bg-ifm-gold" },
                    { label: "Treasury Fund", value: 15, color: "bg-purple-500" },
                    { label: "Team & Advisors", value: 15, color: "bg-pink-500" },
                  ].map((alloc, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                        <span>{alloc.label}</span>
                        <span>{alloc.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${alloc.value}%` }}
                           viewport={{ once: true }}
                           transition={{ duration: 1, delay: i * 0.1 }}
                           className={cn("h-full", alloc.color)} 
                         />
                      </div>
                    </div>
                  ))}
               </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. ECOSYSTEM FLOW DIAGRAM (Narrative) */}
      <section className="py-48 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32 space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">
              VALUE <span className="text-ifm-green italic">ARCHITECTURE</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              IFM is engineered for long-term sustainability. Match data feeds player value, which drives ecosystem growth.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
             {/* Connectors (Abstract) */}
             <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-ifm-green/0 via-ifm-green/20 to-ifm-green/0 hidden md:block -translate-y-1/2" />
             
             {[
               { icon: Target, label: "Gameplay", color: "green" },
               { icon: Cpu, label: "Match Logic", color: "blue" },
               { icon: BarChart3, label: "Performance", color: "gold" },
               { icon: Database, label: "Progression", color: "green" },
               { icon: Trophy, label: "Rewards", color: "blue" },
               { icon: Shield, label: "Legacy", color: "gold" }
             ].map((step, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10"
               >
                 <div className={cn(
                   "h-24 w-24 rounded-full flex flex-col items-center justify-center border-2 shadow-2xl transition-all duration-500 hover:scale-110 cursor-default",
                   step.color === 'green' ? 'border-ifm-green bg-ifm-green/10 text-ifm-green glow-green' :
                   step.color === 'blue' ? 'border-ifm-blue bg-ifm-blue/10 text-ifm-blue glow-blue' :
                   'border-ifm-gold bg-ifm-gold/10 text-ifm-gold glow-gold'
                 )}>
                   <step.icon className="h-8 w-8" />
                   <span className="text-[9px] font-bold uppercase tracking-widest mt-2">{step.label}</span>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      <EarlyAccessForm />
      <FAQSection />
    </div>
  )
}
