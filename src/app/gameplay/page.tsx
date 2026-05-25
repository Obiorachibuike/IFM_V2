
"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Target, Activity, Cpu, Play, BarChart3, Users2, Zap, Layout, Globe, Trophy, Coins } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { cn } from "@/lib/utils"

export default function GameplayPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. GAMEPLAY HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/ifm-gameplay-hero/1920/1080"
            alt="Gameplay Hero"
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-10"
          >
            <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Tactical Simulation</Badge>
            <h1 className="text-7xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              ELITE <br /><span className="text-primary italic">SQUAD CONTROL</span>
            </h1>
            <p className="text-2xl text-secondary-foreground leading-relaxed max-w-3xl font-light">
              Experience the deepest tactical simulation in digital football. From neural-scouting to real-time pitch adjustments, every decision dictates your rise to glory and your earning potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE EARNING LOOP */}
      <section className="py-32 relative border-t border-white/5 bg-secondary-background/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter uppercase">THE <span className="text-primary">REWARD</span> CYCLE</h2>
            <p className="text-secondary-foreground text-xl font-light">How tactical mastery translates to ecosystem value.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Compete", 
                desc: "Enter your squad into weekly league fixtures and knockout cups. Your tactics against live opponents determine the outcome.",
                icon: Target 
              },
              { 
                step: "02", 
                title: "Distribute", 
                desc: "Winning matches earns you $IFM. Top league positions and tournament victories trigger direct payouts from the prize pools.",
                icon: Coins 
              },
              { 
                step: "03", 
                title: "Withdraw", 
                desc: "Your earnings are verified and stored in your manager wallet. Withdraw your rewards at any time to the IFM blockchain.",
                icon: Zap 
              }
            ].map((item, i) => (
              <GlassCard key={i} className="p-10 border-white/5 bg-secondary-background/40 hover:bg-primary/5 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <span className="text-4xl font-headline font-bold text-white/10">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold font-headline uppercase tracking-widest mb-4">{item.title}</h3>
                <p className="text-secondary-foreground font-light leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUILD YOUR CLUB */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter uppercase leading-none">
                  BUILD YOUR <br /><span className="text-primary italic">DYNASTY</span>
                </h2>
                <p className="text-xl text-secondary-foreground font-light leading-relaxed">
                  Manage every facet of your club license. Scout future legends, negotiate contracts, and design tactical blueprints that dominate global leagues.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: "Transfers", desc: "Liquid transfer market powered by real match performance data." },
                  { icon: Layout, title: "Squad Mgmt", desc: "Dynamic chemistry systems based on manager tactical style." },
                  { icon: Target, title: "Formations", desc: "Over 50+ preset formations and infinite custom tactical maps." },
                  { icon: Users2, title: "Coaching", desc: "Hire world-class staff to boost player development curves." },
                ].map((item, i) => (
                  <GlassCard key={i} className="p-8 border-white/5 bg-secondary-background/30">
                    <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-sm text-secondary-foreground font-light leading-relaxed">{item.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <GlassCard className="p-0 border-white/10 overflow-hidden shadow-3xl" glowColor="blue">
               <div className="bg-background/80 p-6 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-sm tracking-widest uppercase">Squad Performance Radar</span>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">LIVE DATA</Badge>
               </div>
               <div className="p-10 space-y-8">
                  {[
                    { label: "Tactical Execution", value: 85, color: "bg-primary" },
                    { label: "Squad Morale", value: 92, color: "bg-blue-300" },
                    { label: "Fitness Levels", value: 78, color: "bg-accent" },
                    { label: "Scouting Reach", value: 64, color: "bg-blue-900" },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                        <span>{stat.label}</span>
                        <span>{stat.value}%</span>
                      </div>
                      <Progress value={stat.value} className="h-2 bg-white/5">
                        <div className={cn("h-full", stat.color)} style={{ width: `${stat.value}%` }} />
                      </Progress>
                    </div>
                  ))}
               </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. COMPETITIVE MODES */}
      <section className="py-48 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-none">
              COMPETITIVE <br /><span className="text-primary italic">ARENAS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Pro League", icon: Trophy, desc: "Standard tiered league system with weekly promotion and relegation." },
              { icon: Activity, title: "Ranked Seasons", desc: "Monthly competitive sprints for global leaderboard dominance." },
              { icon: Cpu, title: "AI Tournaments", desc: "Manager-less simulation cups testing pure tactical depth." },
              { title: "World Series", icon: Globe, desc: "Professional esports tournaments with massive ecosystem prize pools." },
              { icon: Shield, title: "Clan Battles", desc: "Cooperative club management in decentralized league expansions." },
              { icon: Zap, title: "Blitz Cups", desc: "High-speed knockout tournaments for rapid reward cycles." },
            ].map((mode, i) => (
              <GlassCard key={i} className="p-12 border-white/5 bg-secondary-background/40 hover:bg-primary/5 group">
                <div className="h-16 w-16 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <mode.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold font-headline uppercase tracking-tight mb-4">{mode.title}</h3>
                <p className="text-secondary-foreground font-light leading-relaxed">{mode.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <EarlyAccessForm />
    </div>
  )
}
