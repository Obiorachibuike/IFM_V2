
"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Coins, Lock, Zap, TrendingUp, ShieldCheck, Rocket, ArrowRight, Target } from "lucide-react"
import { motion } from "framer-motion"

const allocationData = [
  { name: 'Ecosystem Rewards', value: 40, color: '#F5B041' },
  { name: 'Staking & Governance', value: 20, color: '#D99A2B' },
  { name: 'Development Fund', value: 15, color: '#1E3A8A' },
  { name: 'Team & Advisors', value: 12, color: '#3B82F6' },
  { name: 'Strategic Partnerships', value: 8, color: '#0A0F1C' },
  { name: 'Liquidity Pool', value: 5, color: '#60A5FA' },
]

export default function TokenomicsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D]">
      <Navbar />
      
      {/* 1. TOKEN HERO - THE ENGINE */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 football-grid opacity-10" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-10"
          >
            <Badge className="bg-accent/10 text-accent border-accent/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">The Protocol Engine</Badge>
            <h1 className="text-6xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              DON'T JUST PLAY. <br /><span className="text-accent italic">OWN THE EMPIRE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              The $IFM token is the fuel of a global digital football economy. Every fixture, every transfer, and every trophy won translates into persistent, withdrawable value.
            </p>
            <div className="flex flex-wrap gap-6 pt-6">
              <Button size="lg" className="h-16 px-12 bg-accent hover:bg-accent/90 text-background font-bold text-lg rounded-2xl glow-gold">
                VIEW WHITEPAPER <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 border-white/10 hover:bg-white/5 font-bold text-lg rounded-2xl">
                JOIN PHASE 1
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CONVICTION: WHY PLAY IFM? */}
      <section className="py-24 relative bg-card/10 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">THE VALUE OF <span className="text-accent italic">SOVEREIGNTY</span></h2>
              <div className="space-y-8">
                {[
                  { 
                    title: "Tactical Equity", 
                    desc: "In traditional games, your time is a cost. In IFM, your tactical mastery is an investment. Every win earns $IFM directly from the ecosystem treasury.",
                    icon: Target 
                  },
                  { 
                    title: "Asset Immortality", 
                    desc: "Your Club License and Player Cards are NFTs. They cannot be deleted or revoked. They belong to you, verified on-chain forever.",
                    icon: ShieldCheck 
                  },
                  { 
                    title: "Ecosystem Yield", 
                    desc: "Staking $IFM doesn't just grant governance rights; it increases your club's operational budget and unlocks higher reward multipliers.",
                    icon: TrendingUp 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="h-16 w-16 shrink-0 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold uppercase tracking-widest">{item.title}</h4>
                      <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="p-12 border-accent/20 bg-accent/5 glow-gold" hoverable={false}>
              <h3 className="text-2xl font-headline font-bold mb-10 text-center uppercase tracking-widest underline underline-offset-8 decoration-accent/30">Token Allocation</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={140}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A0F1C', border: '1px solid rgba(245,176,65,0.2)', borderRadius: '16px', color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {allocationData.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 3. UTILITY PILLARS */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter">THE <span className="text-accent">$IFM</span> UTILITY ENGINE</h2>
            <p className="text-muted-foreground text-lg font-light">Four pillars of value that ensure long-term ecosystem sustainability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Coins, title: "Operational Fuel", desc: "Pay player wages, staff contracts, and stadium upgrades exclusively in $IFM." },
              { icon: Zap, title: "Marketplace Power", desc: "The primary currency for elite player acquisitions and club license transfers." },
              { icon: Lock, title: "Empire Governance", desc: "Vote on league rules, reward distribution, and global treasury allocations." },
              { icon: Rocket, title: "Elite Staking", desc: "Unlock higher reward multipliers and exclusive Genesis NFT drops by staking." },
            ].map((pillar, i) => (
              <GlassCard key={i} className="p-10 border-white/5 hover:bg-accent/5 group">
                <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-4 uppercase">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{pillar.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO PERSUASION */}
      <section className="py-40 relative overflow-hidden bg-accent/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-12">
          <h2 className="text-5xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-none">
            HISTORY IS RECORDED ON-CHAIN. <br />
            <span className="text-accent italic">LEGACIES ARE BUILT IN $IFM.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed opacity-80">
            Phase 1 Foundation enrollment is limited. Managers who join now secure the highest yield potential and priority access to the Genesis Mint.
          </p>
          <div className="flex justify-center pt-8">
            <Button size="lg" className="h-20 px-16 text-2xl font-bold bg-accent hover:bg-accent/90 text-background rounded-3xl glow-gold transition-all duration-700">
              SECURE YOUR FOUNDING STATUS
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
