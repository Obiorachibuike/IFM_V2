
"use client"

import * as React from "react"
import { RoadmapSection } from "@/components/sections/RoadmapSection"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { Cpu, Target, Rocket } from "lucide-react"

export default function RoadmapPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-48 pb-20 relative overflow-hidden bg-ifm-dark">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <Badge className="bg-ifm-gold/10 text-ifm-gold border-ifm-gold/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Strategic Path</Badge>
            <h1 className="text-7xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              THE FUTURE <br /><span className="text-ifm-gold italic">UNFOLDING</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              From foundation layers to global football dominance. Explore the vision that will define digital sports management for decades.
            </p>
          </motion.div>
        </div>
      </section>

      <RoadmapSection />

      {/* Future Vision Section */}
      <section className="py-48 relative bg-ifm-surface/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">
              BEYOND THE <br /><span className="text-ifm-blue italic">HORIZON</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <GlassCard className="p-16 border-white/5 bg-ifm-dark/60" glowColor="blue">
              <div className="h-16 w-16 rounded-2xl bg-ifm-blue/10 flex items-center justify-center text-ifm-blue mb-10">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold font-headline uppercase tracking-tighter mb-6">AI Neural Management</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Implementation of deep learning agents that evolve based on community tactical trends, creating a truly dynamic and unpredictable simulation environment.
              </p>
            </GlassCard>
            <GlassCard className="p-16 border-white/5 bg-ifm-dark/60" glowColor="gold">
              <div className="h-16 w-16 rounded-2xl bg-ifm-gold/10 flex items-center justify-center text-ifm-gold mb-10">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold font-headline uppercase tracking-tighter mb-6">VR Stadium Access</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Direct immersive matchday experiences. Founding managers will be able to watch live simulations from the touchline in full virtual reality.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <EarlyAccessForm />
    </div>
  )
}
