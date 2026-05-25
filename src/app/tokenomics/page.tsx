
"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Coins, Lock, Zap, TrendingUp, Cpu, Layers } from "lucide-react"

const allocationData = [
  { name: 'Ecosystem Rewards', value: 35, color: '#3B82F6' },
  { name: 'Staking & Governance', value: 20, color: '#1E3A8A' },
  { name: 'Development Fund', value: 15, color: '#F5B041' },
  { name: 'Team & Advisors', value: 12, color: '#2563EB' },
  { name: 'Strategic Partnerships', value: 10, color: '#1E40AF' },
  { name: 'Public Sale', value: 8, color: '#D97706' },
]

export default function Tokenomics() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-6 mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30">TOKEN ECONOMY</Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter">THE <span className="text-secondary">$IFM</span> ENGINE</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Powering the next generation of football management through a sustainable, value-driven token ecosystem. $IFM is the fuel for every club operation, transfer, and championship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Allocation Chart */}
            <GlassCard className="p-8 border-white/5 bg-card/50">
              <h3 className="text-2xl font-headline font-bold mb-8">Token Allocation</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={140}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A0F1C', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {allocationData.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Utility Cards */}
            <div className="space-y-6">
              {[
                { icon: Coins, title: "Manager Salaries & Bonuses", desc: "Clubs use $IFM to pay player wages and performance-based bonuses." },
                { icon: Zap, title: "Transfer Market Currency", desc: "The primary medium of exchange for all scouting and player acquisitions." },
                { icon: Lock, title: "Governance Staking", desc: "Stake $IFM to vote on ecosystem upgrades, league rules, and treasury allocations." },
                { icon: TrendingUp, title: "League Entrance Fees", desc: "Premium tournament entry fees that feed back into the global prize pool." },
              ].map((item, i) => (
                <GlassCard key={i} className="p-6 flex items-start gap-6 hover:bg-secondary/5 border-white/5">
                  <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-primary/20 text-secondary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staking Section */}
      <section className="py-24 bg-card/20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4">MANAGER STAKING</h2>
            <p className="text-muted-foreground">Lock your tokens to increase your club's operational budget and unlock exclusive scouting perks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tier: "Silver", apy: "12%", boost: "1.2x Scout XP", min: "5,000 $IFM" },
              { tier: "Gold", apy: "24%", boost: "2.0x Scout XP", min: "25,000 $IFM", best: true },
              { tier: "Platinum", apy: "45%", boost: "3.5x Scout XP", min: "100,000 $IFM" },
            ].map((tier, i) => (
              <GlassCard key={i} className={cn("p-8 text-center relative", tier.best && "border-secondary/50 glow-blue scale-105")}>
                {tier.best && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary">MOST POPULAR</Badge>}
                <h3 className="text-2xl font-headline font-bold mb-2">{tier.tier} Tier</h3>
                <div className="text-4xl font-bold text-gradient mb-6">{tier.apy} APY</div>
                <ul className="space-y-4 mb-8 text-muted-foreground">
                  <li className="flex items-center justify-center gap-2 font-medium text-white">{tier.boost}</li>
                  <li>Governance Rights</li>
                  <li>Weekly NFT Drops</li>
                  <li>Min stake: {tier.min}</li>
                </ul>
                <Button className={cn("w-full h-12", tier.best ? "bg-secondary hover:bg-secondary/90" : "bg-white/10 hover:bg-white/20")}>
                  Select Tier
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
