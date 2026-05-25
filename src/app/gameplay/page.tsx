"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Target, Activity, Cpu, Trophy, Coins, Zap, Globe, BarChart3, Users } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"

export default function GameplayPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      
      {/* 1. GAMEPLAY HERO - BROADCAST STYLE */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[70vh] flex items-center">
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
              NEXT-GEN <br /><span className="text-primary italic">SIMULATION</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light opacity-80">
              The deepest management simulation on the blockchain. Real-time tactical overrides, neural scouting, and an advanced physics engine redefine what it means to lead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MATCH ENGINE SHOWCASE */}
      <section className="py-32 relative border-t border-white/5 bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden" hoverable={false}>
               <div className="relative aspect-video">
                 <Image src="https://picsum.photos/seed/ifm-engine/1200/800" alt="Match Engine" fill className="object-cover brightness-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                 </div>
               </div>
            </GlassCard>
            <div className="space-y-10">
               <h2 className="text-5xl font-headline font-bold uppercase leading-none tracking-tighter">THE NEURAL <br /><span className="text-primary italic">MATCH ENGINE</span></h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed">
                 Traditional match engines use static dice rolls. IFM uses a neural-network simulation that processes 15,000+ tactical variables per cycle, reflecting authentic player psychology and real-time fatigue.
               </p>
               <div className="space-y-6">
                 {[
                   { title: "Real-Time Overrides", desc: "Adjust formation, passing directness, and press intensity mid-match." },
                   { title: "Physical Authenticity", desc: "Ball physics and player collisions simulated at 60Hz." },
                   { title: "Neural Scouting", desc: "AI-driven talent identification based on 400+ distinct attributes." }
                 ].map((feat, i) => (
                   <div key={i} className="flex gap-4 items-start">
                     <div className="h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary mt-1">
                        <Zap className="h-3 w-3" />
                     </div>
                     <div>
                       <h4 className="font-bold text-white uppercase text-sm tracking-widest">{feat.title}</h4>
                       <p className="text-xs text-muted-foreground">{feat.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPETITIVE INFRASTRUCTURE */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
             <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">ELITE <span className="text-primary">COMPETITION</span></h2>
             <p className="text-muted-foreground text-xl font-light">From Sunday Leagues to the World Championship Series.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Pro Leagues", desc: "Standard 20-team tiers with weekly promotion and relegation systems." },
              { icon: Trophy, title: "Championship Cups", desc: "High-stakes knockout tournaments with ecosystem-wide prize pools." },
              { icon: Globe, title: "Global Masters", desc: "Annual professional esports tournament for the world's top 128 managers." },
              { icon: Users, title: "Syndicate Wars", desc: "Cooperative club management where multiple managers control one empire." },
              { icon: Activity, title: "Ranked Seasons", desc: "Monthly competitive sprints for global leaderboard supremacy." },
              { icon: Cpu, title: "AI Gauntlet", desc: "Test your tactics against legendary manager-less AI profiles." },
            ].map((mode, i) => (
              <GlassCard key={i} className="p-10 border-white/5 hover:bg-primary/5 transition-all group">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <mode.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold font-headline uppercase mb-4">{mode.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{mode.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <EarlyAccessForm />
    </div>
  )
}