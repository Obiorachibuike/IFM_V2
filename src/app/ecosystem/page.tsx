"use client"

/**
 * IFM | Ecosystem Blueprint
 * Narrative-driven explanation of the football management economy.
 * Architectural Rule: NO Marketplace UI. Functional conceptualization only.
 */

import * as React from "react"
import Image from "next/image"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Globe, Shield, Zap, TrendingUp, Layers, Cpu, ArrowRight, ShieldCheck, Database, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function EcosystemPage() {
  const heroImg = PlaceHolderImages.find(i => i.id === "marketplace-hero")

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <Navbar />
      
      {/* Cinematic Narrative Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImg?.imageUrl || ""} 
            alt="Ecosystem Economy" 
            fill 
            className="object-cover opacity-20 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
          <div className="stadium-light-sweep" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl space-y-8"
          >
            <Badge className="bg-secondary/10 text-secondary border-secondary/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Protocol Architecture</Badge>
            <h1 className="text-7xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8] mb-6">
              THE OWNERSHIP <br /><span className="text-secondary italic">REVOLUTION</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              IFM is a multi-dimensional football ecosystem where digital ownership, professional esports infrastructure, and decentralized finance converge to create a global sports empire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ownership Pillars */}
      <section className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-40">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-5xl font-headline font-bold uppercase leading-none tracking-tighter">Digital Asset <br /><span className="text-secondary italic">Sovereignty</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Every functional asset in the IFM ecosystem is a verified blockchain asset. Unlike traditional games, you hold permanent deeds to your club licenses and player contracts.
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  { icon: ShieldCheck, title: "Club Franchises", desc: "Verifiable deeds to global clubs with embedded governance rights." },
                  { icon: Database, title: "Smart Contracts", desc: "Automated reward distribution based on on-pitch league performance." },
                  { icon: Award, title: "Manager Reputation", desc: "Soulbound achievement tokens marking your legacy in the prime divisions." },
                ].map((pill, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="h-14 w-14 rounded-2xl bg-secondary/5 border border-secondary/20 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      <pill.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white uppercase text-sm tracking-widest">{pill.title}</h4>
                      <p className="text-base text-muted-foreground font-light">{pill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative aspect-square max-w-xl mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-secondary/15 blur-[120px] rounded-full" />
              <GlassCard className="h-full border-white/5 flex items-center justify-center group overflow-hidden" glowColor="blue">
                <Image 
                  src={PlaceHolderImages.find(i => i.id === "token-visual")?.imageUrl || ""} 
                  alt="Protocol Visual" 
                  width={600} 
                  height={600} 
                  className="animate-float grayscale brightness-125 group-hover:grayscale-0 transition-all duration-1000"
                />
              </GlassCard>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Governance", icon: Cpu, desc: "Protocol-level voting on league expansions, treasury management, and competitive rule-sets." },
              { title: "Transfer Protocol", icon: TrendingUp, desc: "A narrative-driven exchange engine where player valuations react to real match data." },
              { title: "Esports Rewards", icon: Zap, desc: "Performance-driven reward pools for elite managers competing in the IFM World Series." },
            ].map((card, i) => (
              <GlassCard key={i} className="p-12 border-white/5 bg-card/20 hover:bg-secondary/5 group">
                <div className="h-20 w-20 rounded-[1.5rem] bg-secondary/5 border border-secondary/20 flex items-center justify-center text-secondary mb-10 group-hover:bg-secondary group-hover:text-white transition-all duration-700">
                  <card.icon className="h-9 w-9" />
                </div>
                <h3 className="text-3xl font-headline font-bold uppercase mb-6">{card.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">{card.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Billion-Dollar Infrastructure Vision */}
      <section className="py-48 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <Badge variant="outline" className="border-secondary/50 text-secondary uppercase tracking-[0.5em] px-8 py-2 text-[10px] font-bold">Visionary Narrative</Badge>
            <h2 className="text-6xl md:text-[9rem] font-headline font-bold uppercase tracking-tighter leading-none">THE <span className="text-secondary italic">FUTURE</span> PITCH</h2>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">
              We are building the first professional sports infrastructure for the decentralized era. IFM isn't just a game; it's the foundation of a global digital football empire.
            </p>
            <div className="pt-8">
              <Button size="lg" className="h-24 px-16 bg-secondary hover:bg-secondary/90 glow-blue gap-4 font-bold text-xl rounded-3xl transition-all duration-500 shadow-3xl">
                DOWNLOAD PROTOCOL V4 <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
