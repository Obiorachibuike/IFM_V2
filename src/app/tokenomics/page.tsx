"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip 
} from 'recharts'
import { 
  Coins, Lock, Zap, TrendingUp, ShieldCheck, 
  Rocket, ArrowRight, Target, Activity,
  Globe, BarChart3, Microscope, LayoutDashboard,
  Users, Layers, Sparkles
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

// Data for Token Allocation
const allocationData = [
  { name: 'Ecosystem Rewards', value: 40, color: '#F5B041' }, // Gold Primary
  { name: 'Staking & Governance', value: 20, color: '#D99A2B' }, // Gold Deep
  { name: 'Development Fund', value: 15, color: '#1E3A8A' }, // Blue Primary
  { name: 'Team & Advisors', value: 12, color: '#3B82F6' }, // Blue Interactive
  { name: 'Strategic Partnerships', value: 8, color: '#070B14' }, // Deep Overlay
  { name: 'Liquidity Pool', value: 5, color: '#60A5FA' }, // Blue Accent
]

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
}

export default function TokenomicsPage() {
  const tokenVisual = PlaceHolderImages.find(i => i.id === "token-visual")
  const economyImg = PlaceHolderImages.find(i => i.id === "economy-pillar")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "rewards-visual")
  
  // Prevent hydration error with charting library
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] font-body selection:bg-accent selection:text-background">
      
      {/* 1. PROTOCOL HERO - THE ECONOMIC ENGINE */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-background" />
          {tokenVisual && (
            <Image 
              src={tokenVisual.imageUrl} 
              alt="IFM Token" 
              fill 
              className="object-cover opacity-20 grayscale brightness-50"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-transparent" />
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 football-grid opacity-10" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl space-y-12"
          >
            <motion.div variants={fadeIn}>
              <Badge className="bg-accent/10 text-accent border-accent/30 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full backdrop-blur-3xl glow-gold">
                Protocol Architecture v4.0
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]"
            >
              OWN THE <br />
              <span className="text-gradient-gold italic">ECONOMY.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed opacity-80"
            >
              The $IFM token is a gameplay-driven utility layer designed to power progression, ownership, and rewards within a persistent football universe.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-6 pt-6">
              <Button asChild size="lg" className="h-20 px-16 bg-accent hover:bg-accent/90 text-background font-bold rounded-2xl glow-gold text-xl uppercase tracking-widest">
                <Link href="/early-access">SECURE FOUNDER STATUS</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-16 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest backdrop-blur-xl">
                <Link href="#utility">EXPLORE UTILITY</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE UTILITY HUB - REAL GAMEPLAY FUNCTION */}
      <section id="utility" className="py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Utility Framework</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">THE UTILITY <br /><span className="text-gradient-blue italic">PROTOCOL.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Unlike speculative assets, $IFM is deeply integrated into every football operation. It is the primary fuel for building an elite football empire.
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Club Operations", desc: "Pay for stadium maintenance, staff wages, and facility upgrades.", icon: ShieldCheck },
                    { label: "Marketplace Power", desc: "Acquire elite player licenses and academy prospects.", icon: Zap },
                    { label: "Elite Staking", desc: "Stake to unlock higher seasonal reward multipliers and voting power.", icon: Lock },
                    { label: "Tournament Entry", desc: "Access high-stakes championship series and global knockout cups.", icon: Trophy }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-center p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg uppercase tracking-tight">{step.label}</div>
                        <div className="text-sm text-muted-foreground font-light">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-square" hoverable={false}>
                  {economyImg && (
                    <Image src={economyImg.imageUrl} alt="Economy Pillar" fill className="object-cover opacity-60" />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="space-y-6">
                        <Badge className="bg-primary text-white font-bold px-6 py-2 uppercase tracking-widest text-[10px]">Verified Token Logic</Badge>
                        <h3 className="text-4xl font-bold font-headline uppercase leading-tight text-white">THE ENGINE <br />ROOM</h3>
                        <p className="text-muted-foreground text-sm font-light">Watch your club's token treasury grow as you master the tactical simulation and progress through the pyramid.</p>
                     </div>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENT ALLOCATION - INVESTOR GRADE DATA */}
      <section className="py-48 relative border-y border-white/5 bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32 space-y-8">
            <Badge className="bg-accent/10 text-accent border-accent/20 px-8 py-3 uppercase tracking-[0.5em] text-[10px] font-bold">Transparency Protocol</Badge>
            <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">TOKEN <br /><span className="text-accent italic">DISTRIBUTION</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-12 border-white/10 bg-black/40 glow-gold h-[600px] flex flex-col justify-center" hoverable={false}>
                  <div className="h-full w-full">
                    {mounted ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={allocationData}
                            cx="50%"
                            cy="50%"
                            innerRadius={120}
                            outerRadius={180}
                            paddingAngle={8}
                            dataKey="value"
                            stroke="none"
                          >
                            {allocationData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <RechartsTooltip 
                            contentStyle={{ backgroundColor: '#0A0F1C', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-muted-foreground animate-pulse">
                        Analyzing Distribution Map...
                      </div>
                    )}
                  </div>
               </GlassCard>
            </motion.div>

            <div className="space-y-8">
              {allocationData.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex justify-between items-center p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-accent/30 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="h-4 w-4 rounded-full" style={{ backgroundColor: item.color }} />
                    <div className="font-bold text-xl uppercase tracking-tight">{item.name}</div>
                  </div>
                  <div className="text-2xl font-bold font-headline text-accent">{item.value}%</div>
                </motion.div>
              ))}
              <p className="text-muted-foreground text-sm font-light mt-8 italic border-l-2 border-accent/20 pl-6">
                "Our distribution model ensures long-term ecosystem stability by prioritizing rewards for active managers and sustainable development."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REWARD CALCULUS - EARN THROUGH EXCELLENCE */}
      <section className="py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-2">
              <div className="space-y-12">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">Reward Logic</Badge>
                <h2 className="text-6xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">PERFORMANCE <br /><span className="text-gradient-blue italic">YIELD.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  In IFM, rewards are not passive. They are a direct reflection of your management brilliance. Every seasonal payout is calculated based on skill.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Match Performance", desc: "Direct multipliers based on wins, draws, and goals.", icon: Activity },
                    { title: "League Standing", desc: "Base seasonal payout tied to your final pyramid tier.", icon: Trophy },
                    { title: "Academy Alpha", desc: "Bonuses for successfully scouting and selling top talent.", icon: Microscope },
                    { title: "Governance Staking", desc: "Yield multipliers for long-term ecosystem conviction.", icon: Users }
                  ].map((item, k) => (
                    <div key={k} className="space-y-3">
                       <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 text-primary" />
                          <span className="font-bold uppercase tracking-tight text-sm">{item.title}</span>
                       </div>
                       <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:order-1">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden relative aspect-[4/5]" hoverable={false}>
                  {rewardsImg && (
                    <Image src={rewardsImg.imageUrl} alt="Reward Flow" fill className="object-cover brightness-50" />
                  )}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent">
                     <div className="p-8 bg-black/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 space-y-6">
                        <div className="flex justify-between items-center">
                           <Badge className="bg-primary text-white font-bold px-6 py-2">SEASONAL PAYOUT</Badge>
                           <span className="text-xs font-bold text-primary">00:12:45:22 REMAINING</span>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between items-end">
                              <div>
                                 <div className="text-[10px] text-muted-foreground uppercase mb-1">Projected Reward</div>
                                 <div className="text-4xl font-bold font-headline text-white">42,500 $IFM</div>
                              </div>
                              <div className="text-right">
                                 <div className="text-[10px] text-primary font-bold uppercase">Multiplier</div>
                                 <div className="text-2xl font-bold text-white">2.4x</div>
                              </div>
                           </div>
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full w-[70%] bg-primary" />
                           </div>
                        </div>
                     </div>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. ECONOMIC ARCHETYPES - HOW WILL YOU MANAGE? */}
      <section className="py-48 relative border-t border-white/5 bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-32 space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-8 py-3 uppercase tracking-[0.5em] text-[10px] font-bold">Economic Identity</Badge>
              <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">CHOOSE YOUR <br /><span className="text-accent italic">STRATEGY</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "The Value Investor", desc: "Focuses on scouting undervalued academy talent and flipping them for treasury gains.", icon: TrendingUp, theme: "gold" },
                { title: "The Efficiency Expert", desc: "Optimizes squad wages and facility costs to maximize profit per division tier.", icon: BarChart3, theme: "blue" },
                { title: "The Empire Builder", desc: "Reinvests every $IFM into massive stadium expansions and global prestige assets.", icon: LayoutDashboard, theme: "gold" },
              ].map((style, i) => (
                <GlassCard 
                  key={i} 
                  className="p-12 border-white/5 hover:bg-primary/5 group h-full flex flex-col" 
                  glowColor={style.theme === "blue" ? "blue" : "gold"}
                >
                  <div className={cn(
                    "h-20 w-20 flex items-center justify-center rounded-3xl mb-10 transition-all group-hover:scale-110",
                    style.theme === "blue" ? "bg-primary/10 text-primary border-primary/20" : "bg-accent/10 text-accent border-accent/20"
                  )}>
                    <style.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-bold font-headline mb-6 uppercase tracking-tighter leading-none">{style.title}</h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">{style.desc}</p>
                </GlassCard>
              ))}
           </div>
        </div>
      </section>

      {/* FINAL TRUST CTA */}
      <section className="py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-gold opacity-20" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-7xl md:text-[12rem] font-bold font-headline tracking-tighter uppercase leading-[0.7] mb-12">
              HISTORY IS <br />
              <span className="text-gradient-gold italic">RECORDED.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="h-24 px-20 bg-accent hover:bg-accent/90 text-background font-bold rounded-3xl glow-gold text-2xl uppercase tracking-[0.2em]">
                <Link href="/early-access" className="flex items-center gap-6">
                  SECURE YOUR LICENSE <Rocket className="h-8 w-8" />
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground uppercase tracking-[0.5em] text-[10px] mt-12 font-bold opacity-60">The IFM Economy is optimized for persistent long-term growth.</p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
