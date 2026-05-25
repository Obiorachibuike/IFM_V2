"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Shield, Zap, TrendingUp, Cpu, Layers, ArrowRight, Play, Globe, Target } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-stadium")
  const managerImage = PlaceHolderImages.find(img => img.id === "manager-silhouette")

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[1000px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Stadium"}
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
          
          {/* Tactical Overlays */}
          <div className="absolute inset-0 opacity-20 football-grid pointer-events-none" />
          <div className="scanline" />
          <div className="stadium-light left-1/4" />
          <div className="stadium-light left-3/4 delay-1000" />
        </div>

        <div className="container relative z-10 px-4 text-center max-w-7xl mx-auto pt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-4 bg-secondary/10 backdrop-blur-2xl border border-secondary/40 rounded-full px-8 py-3 mb-8"
            >
              <div className="h-3 w-3 rounded-full bg-secondary animate-pulse shadow-[0_0_15px_rgba(59,130,246,1)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-secondary">GENESIS SEASON COMMENCING NOW</span>
            </motion.div>
            
            <h1 className="text-7xl md:text-[11rem] font-bold font-headline leading-[0.82] tracking-tighter uppercase mb-6">
              OWN THE <span className="text-secondary italic">PITCH</span>.<br />
              <span className="text-gradient">MASTER YOUR LEGACY</span>.
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light tracking-wide opacity-80">
              The world's premier high-fidelity blockchain football management ecosystem. 
              True asset ownership. Unmatched tactical simulation. Global esports grade.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-16">
              <Button size="lg" className="h-24 px-16 text-2xl font-bold bg-secondary hover:bg-secondary/90 glow-blue group rounded-[2.5rem] transition-all duration-700 shadow-2xl">
                ENTER ECOSYSTEM <Play className="h-8 w-8 ml-4 fill-current group-hover:scale-125 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-24 px-16 text-2xl font-bold border-white/20 hover:bg-white/10 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl transition-all">
                WHITEPAPER V3
              </Button>
            </div>
          </motion.div>

          {/* Broadcast Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-40 max-w-6xl mx-auto"
          >
            {[
              { label: "Active Managers", value: "142.5K", trend: "+12.4%" },
              { label: "Asset Valuation", value: "$840.2M", trend: "NEW ATH" },
              { label: "Global Leagues", value: "3,200", trend: "PHASE 1" },
              { label: "Championship Pool", value: "$2.5M", trend: "SECURED" },
            ].map((stat, i) => (
              <GlassCard key={i} className="py-10 px-8 border-white/10 bg-white/5 hover:bg-secondary/10 transition-all group relative overflow-hidden" hoverable={false}>
                <div className="absolute top-0 right-0 p-2 opacity-5">
                  <TrendingUp className="h-24 w-24 text-white" />
                </div>
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold">{stat.label}</div>
                  <Badge variant="outline" className="text-[9px] border-secondary/40 text-secondary py-0.5 px-2 bg-secondary/5 uppercase font-bold">{stat.trend}</Badge>
                </div>
                <div className="text-5xl font-headline font-bold text-white tracking-tighter group-hover:text-secondary transition-colors relative z-10">{stat.value}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Luxury Ecosystem Section */}
      <section className="py-56 relative overflow-hidden bg-gradient-to-b from-background via-card/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-16"
            >
              <div className="space-y-8">
                <Badge className="bg-secondary/20 text-secondary border-secondary/40 font-bold px-6 py-2 rounded-full uppercase tracking-widest text-[10px]">THE IFM ECOSYSTEM</Badge>
                <h2 className="text-7xl md:text-8xl font-bold font-headline uppercase leading-none tracking-tighter">
                  A DIGITAL FOOTBALL <br /><span className="text-secondary italic">EMPIRE</span>
                </h2>
                <p className="text-2xl text-muted-foreground leading-relaxed font-light opacity-90 max-w-2xl">
                  IFM fuses high-stakes simulation with decentralized finance. Every scout report, tactical tweak, and stadium expansion is a permanent stroke on your manager's legacy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {[
                  { icon: Target, title: "Tactical Depth", desc: "AI-driven engine processing 10,000+ match variables per second." },
                  { icon: Shield, title: "Asset Security", desc: "ERC-721 Club Licenses with full governance and revenue rights." },
                  { icon: Zap, title: "Esports Grade", desc: "Built-in professional tournament systems and live broadcast tech." },
                  { icon: Globe, title: "Global Economy", desc: "A liquid transfer market integrated with the $IFM utility engine." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="h-20 w-20 shrink-0 flex items-center justify-center rounded-2xl bg-secondary/10 border border-secondary/30 group-hover:bg-secondary group-hover:text-white transition-all duration-700 shadow-2xl">
                      <item.icon className="h-9 w-9" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-white uppercase text-sm tracking-[0.3em]">{item.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="absolute -inset-24 bg-secondary/20 blur-[180px] rounded-full opacity-60" />
              <GlassCard className="p-6 border-white/10 glow-blue rotate-3 relative z-10 overflow-hidden group">
                <Image
                  src={managerImage?.imageUrl || ""}
                  alt="IFM Manager"
                  width={900}
                  height={700}
                  className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-1500 brightness-90 hover:brightness-110 scale-105 group-hover:scale-110"
                />
              </GlassCard>
              
              <div className="absolute -bottom-16 -left-16 z-20">
                <GlassCard className="p-12 border-accent/40 bg-accent/10 backdrop-blur-3xl glow-gold border-2">
                  <div className="flex items-center gap-10">
                    <div className="h-24 w-24 rounded-[2rem] bg-accent flex items-center justify-center shadow-2xl">
                      <Trophy className="h-12 w-12 text-background" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-accent uppercase tracking-[0.4em] mb-2">GLOBAL RANKING</div>
                      <div className="text-4xl font-headline font-bold text-white uppercase tracking-tighter">PREMIER ELITE</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Section Separator */}
      <section className="py-24 border-y border-white/5 bg-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap gap-20 items-center overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-20">
              <span className="text-6xl font-headline font-bold text-white/10 uppercase tracking-tighter">Ownership Ecosystem</span>
              <div className="h-3 w-3 rounded-full bg-secondary/30" />
              <span className="text-6xl font-headline font-bold text-white/10 uppercase tracking-tighter italic">Manager Legacy</span>
              <div className="h-3 w-3 rounded-full bg-secondary/30" />
              <span className="text-6xl font-headline font-bold text-white/10 uppercase tracking-tighter">Esports Grade</span>
              <div className="h-3 w-3 rounded-full bg-secondary/30" />
            </div>
          ))}
        </div>
      </section>

      {/* Final Billion-Dollar CTA */}
      <section className="py-72 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt="Stadium Background"
            fill
            className="object-cover opacity-5 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto space-y-20">
            <h2 className="text-8xl md:text-[12rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase">READY TO <br /><span className="text-secondary italic">DOMINATE?</span></h2>
            <p className="text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light opacity-80">
              Join the elite whitelist for the Phase 1 Genesis Mint and claim your throne in the digital football empire.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <Button size="lg" className="h-28 px-24 bg-secondary hover:bg-secondary/90 text-3xl font-bold glow-blue rounded-[3rem] uppercase tracking-tighter shadow-3xl transition-all duration-700">
                APPLY FOR LICENSE
              </Button>
              <Button size="lg" variant="ghost" className="h-28 px-24 text-3xl hover:bg-white/5 flex items-center gap-6 font-bold rounded-[3rem] border border-white/10 backdrop-blur-3xl">
                <Users className="h-12 w-12" /> COMMAND CENTER
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
