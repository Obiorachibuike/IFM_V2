
"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Target, Activity, Cpu, Trophy, Zap, Play, LayoutDashboard, Microscope, Network } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function GameplayPage() {
  const matchEngineImg = PlaceHolderImages.find(i => i.id === "match-engine-live")
  const tacticsImg = PlaceHolderImages.find(i => i.id === "tactical-board")
  const trainingImg = PlaceHolderImages.find(i => i.id === "training-facility")
  const scoutingImg = PlaceHolderImages.find(i => i.id === "scouting-ui")
  const heroImg = PlaceHolderImages.find(i => i.id === "hero-stadium")

  return (
    <div className="flex flex-col w-full bg-background">
      
      {/* 1. GAMEPLAY HERO - BROADCAST STYLE */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background System */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          {heroImg?.imageUrl && (
            <Image 
              src={heroImg.imageUrl}
              alt="Gameplay Hero"
              fill
              className="object-cover opacity-30 grayscale brightness-50"
              priority
              data-ai-hint="football manager"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 radial-glow-blue opacity-30" />
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
                 {matchEngineImg?.imageUrl && (
                    <Image 
                      src={matchEngineImg.imageUrl} 
                      alt="Match Engine Live" 
                      fill 
                      className="object-cover brightness-75" 
                      data-ai-hint={matchEngineImg?.imageHint}
                    />
                 )}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <GlassCard className="p-4 bg-black/60 backdrop-blur-md border-white/10">
                        <div className="flex justify-between items-center text-[10px] font-bold text-white uppercase tracking-widest">
                            <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-red-500 animate-ping" /> LIVE SIMULATION</div>
                            <div>MIN 74' • IFM LONDON 2 - 1 METRO FC</div>
                        </div>
                    </GlassCard>
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

      {/* 3. TACTICAL DEPTH SHOWCASE */}
      <section className="py-32 relative bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-10">
               <h2 className="text-5xl font-headline font-bold uppercase leading-none tracking-tighter">ELITE <br /><span className="text-primary italic">MANAGEMENT UI</span></h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed">
                 Experience a dashboard designed for tactical masters. Every metric, from xG (Expected Goals) to player positional heatmaps, is updated on-chain in real-time.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <GlassCard className="p-6 border-white/5 bg-white/5">
                    <LayoutDashboard className="h-6 w-6 text-primary mb-4" />
                    <h4 className="text-sm font-bold uppercase mb-2">Tactical Hub</h4>
                    <p className="text-[10px] text-muted-foreground">Comprehensive control over squad dynamics.</p>
                  </GlassCard>
                  <GlassCard className="p-6 border-white/5 bg-white/5">
                    <Microscope className="h-6 w-6 text-primary mb-4" />
                    <h4 className="text-sm font-bold uppercase mb-2">Bio-Analytics</h4>
                    <p className="text-[10px] text-muted-foreground">Monitor fatigue and player psychological states.</p>
                  </GlassCard>
               </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden shadow-2xl" hoverable={false}>
                {tacticsImg?.imageUrl && (
                  <Image 
                    src={tacticsImg.imageUrl} 
                    alt="Tactical UI" 
                    width={1200} 
                    height={800} 
                    className="w-full h-auto brightness-90"
                    data-ai-hint={tacticsImg?.imageHint}
                  />
                )}
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE & SCOUTING */}
      <section className="py-32 relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
             <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">THE <span className="text-primary italic">GAFFER'S</span> SUITE</h2>
             <p className="text-muted-foreground text-xl font-light">From data-driven scouting to high-performance facilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <GlassCard className="p-0 border-white/10 bg-black/40 group overflow-hidden" glowColor="blue">
               <div className="relative aspect-[16/10]">
                  {trainingImg?.imageUrl && (
                    <Image src={trainingImg.imageUrl} alt="Training" fill className="object-cover opacity-60 group-hover:scale-105 transition-all duration-1000" data-ai-hint={trainingImg?.imageHint} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold font-headline uppercase mb-2">Performance Labs</h3>
                    <p className="text-sm text-muted-foreground font-light">Optimize player growth with specialized AI coaches and state-of-the-art facilities.</p>
                  </div>
               </div>
            </GlassCard>
            <GlassCard className="p-0 border-white/10 bg-black/40 group overflow-hidden" glowColor="blue">
               <div className="relative aspect-[16/10]">
                  {scoutingImg?.imageUrl && (
                    <Image src={scoutingImg.imageUrl} alt="Scouting" fill className="object-cover opacity-60 group-hover:scale-105 transition-all duration-1000" data-ai-hint={scoutingImg?.imageHint} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold font-headline uppercase mb-2">Neural Scout Network</h3>
                    <p className="text-sm text-muted-foreground font-light">Deploy global scouting bots to identify next-gen talent before the competition catches on.</p>
                  </div>
               </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <EarlyAccessForm />
    </div>
  )
}
