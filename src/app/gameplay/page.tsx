"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Target, Activity, Cpu, Play, BarChart3, Users2, Zap, Layout, Globe } from "lucide-react"
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
            data-ai-hint="football tactics"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ifm-dark via-transparent to-ifm-dark" />
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-10"
          >
            <Badge className="bg-ifm-blue/10 text-ifm-blue border-ifm-blue/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Tactical Simulation</Badge>
            <h1 className="text-7xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              ELITE <br /><span className="text-ifm-blue italic">SQUAD CONTROL</span>
            </h1>
            <p className="text-2xl text-ifm-textSecondary leading-relaxed max-w-3xl font-light">
              Experience the deepest tactical simulation in digital football. From neural-scouting to real-time pitch adjustments, every decision dictates your rise to glory.
            </p>
            <div className="flex gap-6">
              <GlassCard className="p-6 bg-ifm-blue/5 border-ifm-blue/20" hoverable={false}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-ifm-blue flex items-center justify-center text-white">
                    <Play className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-ifm-blue uppercase tracking-widest">Simulation Version</div>
                    <div className="text-lg font-bold text-white">PROTOCOL V4.2</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BUILD YOUR CLUB */}
      <section className="py-32 relative bg-ifm-surface/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter uppercase leading-none">
                  BUILD YOUR <br /><span className="text-ifm-blue italic">DYNASTY</span>
                </h2>
                <p className="text-xl text-ifm-textSecondary font-light leading-relaxed">
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
                  <GlassCard key={i} className="p-8 border-white/5 bg-ifm-surface/30">
                    <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-ifm-blue mb-6">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-sm text-ifm-textSecondary font-light leading-relaxed">{item.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <GlassCard className="p-0 border-white/10 overflow-hidden shadow-3xl" glowColor="blue">
               <div className="bg-ifm-dark/80 p-6 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-ifm-blue/20 flex items-center justify-center text-ifm-blue">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-sm tracking-widest uppercase">Squad Performance Radar</span>
                  </div>
                  <Badge className="bg-ifm-blue/20 text-ifm-blue border-ifm-blue/30">LIVE DATA</Badge>
               </div>
               <div className="p-10 space-y-8">
                  {[
                    { label: "Tactical Execution", value: 85, color: "bg-ifm-blue" },
                    { label: "Squad Morale", value: 92, color: "bg-blue-300" },
                    { label: "Fitness Levels", value: 78, color: "bg-ifm-gold" },
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

      {/* 3. COMPETITIVE MODES */}
      <section className="py-48 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-none">
              COMPETITIVE <br /><span className="text-ifm-blue italic">ARENAS</span>
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
              <GlassCard key={i} className="p-12 border-white/5 bg-ifm-surface/40 hover:bg-ifm-blue/5 group">
                <div className="h-16 w-16 rounded-2xl bg-ifm-blue/5 border border-ifm-blue/20 flex items-center justify-center text-ifm-blue mb-8 group-hover:bg-ifm-blue group-hover:text-white transition-all duration-500">
                  <mode.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold font-headline uppercase tracking-tight mb-4">{mode.title}</h3>
                <p className="text-ifm-textSecondary font-light leading-relaxed">{mode.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <EarlyAccessForm />
    </div>
  )
}