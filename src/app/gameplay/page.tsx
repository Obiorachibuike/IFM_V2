"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Target, Activity, Cpu, Play, BarChart3, Users2, Zap, Layout, Globe, Trophy, Coins } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { cn } from "@/lib/utils"

export default function GameplayPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. GAMEPLAY HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[70vh] flex items-center bg-background">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/ifm-gameplay-hero/1920/1080"
            alt="Gameplay Hero"
            fill
            className="object-cover opacity-20 grayscale"
            priority
            data-ai-hint="football manager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-10"
          >
            <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Tactical Intelligence</Badge>
            <h1 className="text-6xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              ELITE <br /><span className="text-primary italic">TACTICAL DEPTH</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground leading-relaxed max-w-3xl font-light opacity-80">
              Experience the deepest management simulation on the blockchain. From real-time pitch adjustments to neural scouting, every decision determines your empire's value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE EARNING LOOP */}
      <section className="py-32 relative border-t border-white/5 bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter uppercase">THE <span className="text-primary">REWARD</span> CYCLE</h2>
            <p className="text-secondary-foreground text-xl font-light opacity-70">How tactical mastery translates to persistent ecosystem value.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Compete", 
                desc: "Enter weekly fixtures and cups. Your tactics against live opponents determine victory and rank.",
                icon: Target 
              },
              { 
                step: "02", 
                title: "Earn", 
                desc: "Success triggers smart-contract payouts in $IFM. Top positions access larger championship pools.",
                icon: Coins 
              },
              { 
                step: "03", 
                title: "Withdraw", 
                desc: "Rewards are stored in your manager wallet. Withdraw earnings to the IFM protocol anytime.",
                icon: Zap 
              }
            ].map((item, i) => (
              <GlassCard key={i} className="p-10 border-white/5 bg-card/40 hover:bg-primary/5 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <span className="text-4xl font-headline font-bold text-white/10">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold font-headline uppercase tracking-widest mb-4">{item.title}</h3>
                <p className="text-secondary-foreground font-light leading-relaxed opacity-80">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TACTICAL PILLARS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Pro League", icon: Trophy, desc: "Standard tiered league system with weekly promotion and relegation." },
              { icon: Activity, title: "Ranked Seasons", desc: "Monthly competitive sprints for global leaderboard dominance." },
              { icon: Cpu, title: "AI Tournaments", desc: "Manager-less simulation cups testing pure tactical depth." },
              { icon: Globe, title: "World Series", desc: "Professional esports tournaments with massive ecosystem prize pools." },
            ].map((pillar, i) => (
              <GlassCard key={i} className="p-8 border-white/5 hover:bg-primary/5 group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2 uppercase">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{pillar.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <EarlyAccessForm />
    </div>
  )
}