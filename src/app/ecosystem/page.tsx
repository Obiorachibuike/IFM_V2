"use client"

import * as React from "react"
import Image from "next/image"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Globe, Shield, Zap, TrendingUp, Layers, Cpu, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function EcosystemPage() {
  const heroImg = PlaceHolderImages.find(i => i.id === "marketplace-hero")

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      
      {/* Narrative Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImg?.imageUrl || ""} 
            alt="Ecosystem" 
            fill 
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8"
          >
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-5 py-1.5 uppercase tracking-widest text-[10px] font-bold">The IFM Blueprint</Badge>
            <h1 className="text-6xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.85]">
              A BEYOND-GAME <br /><span className="text-secondary italic">ECONOMY</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
              IFM is a multi-layered ecosystem where tactical excellence, digital ownership, and professional esports converge into a global football empire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Economy Pillars */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-headline font-bold uppercase leading-none tracking-tighter">True Digital <br /><span className="text-secondary italic">Ownership</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every asset in IFM—from the club license in your portfolio to the elite striker on your pitch—is a verified blockchain asset. You don't just play; you build equity.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Club Licenses", desc: "Permanent deeds to franchises with governance rights." },
                  { icon: Layers, title: "Player Contracts", desc: "Dynamic NFT cards that evolve based on pitch performance." },
                  { icon: Globe, title: "Stadium Deeds", desc: "Own the ground your club plays on and earn from match-day revenue." },
                ].map((pill, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <pill.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-sm mb-1">{pill.title}</h4>
                      <p className="text-sm text-muted-foreground">{pill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-secondary/20 blur-[120px] rounded-full" />
              <GlassCard className="h-full border-white/5 overflow-hidden flex items-center justify-center">
                <Image 
                  src={PlaceHolderImages.find(i => i.id === "token-visual")?.imageUrl || ""} 
                  alt="Token Visual" 
                  width={600} 
                  height={600} 
                  className="animate-glow-pulse"
                />
              </GlassCard>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Governance", icon: Cpu, desc: "Stake $IFM to participate in DAO proposals and shape league expansions." },
              { title: "Transfer Engine", icon: TrendingUp, desc: "A narrative-driven transfer market powered by performance-based player valuations." },
              { icon: Zap, title: "Rewards Loop", desc: "Win leagues, tournaments, and community challenges to earn ecosystem rewards." },
            ].map((card, i) => (
              <GlassCard key={i} className="p-10 border-white/5 hover:bg-secondary/5 group">
                <div className="h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <card.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-headline font-bold uppercase mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Section */}
      <section className="py-40 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <Badge variant="outline" className="border-secondary/50 text-secondary uppercase tracking-[0.4em]">Investor Narrative</Badge>
            <h2 className="text-5xl md:text-8xl font-headline font-bold uppercase tracking-tighter">Beyond The <span className="text-secondary italic">Pitch</span></h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              IFM isn't just a management simulation—it's the first step toward a global football metaverse where professional esports infrastructure meets decentralized finance.
            </p>
            <div className="pt-8">
              <Button size="lg" className="h-16 px-12 bg-secondary hover:bg-secondary/90 glow-blue gap-3 font-bold">
                READ THE WHITEPAPER <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
