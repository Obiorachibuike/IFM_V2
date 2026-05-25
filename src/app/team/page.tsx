
"use client"

import * as React from "react"
import { TeamSection } from "@/components/sections/TeamSection"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-48 pb-20 relative overflow-hidden bg-ifm-dark">
         <div className="absolute inset-0 bg-gradient-to-b from-ifm-green/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <Badge className="bg-ifm-green/10 text-ifm-green border-ifm-green/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Executive Roster</Badge>
            <h1 className="text-7xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              ARCHITECTS OF <br /><span className="text-ifm-green italic">LEGACY</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Meet the specialized coalition of veterans from AAA gaming, professional football, and blockchain infrastructure building the IFM Empire.
            </p>
          </motion.div>
        </div>
      </section>

      <TeamSection />
      
      {/* Advisor section */}
      <section className="py-24 relative bg-ifm-surface/20">
         <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-16">
              <h3 className="text-3xl font-bold font-headline uppercase tracking-tighter text-white/40 italic">Strategic Advisors</h3>
           </div>
           <div className="flex flex-wrap justify-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {/* Partner Logos placeholders */}
              {["Partner One", "Strategic Two", "Eco Three", "Block Four"].map((p) => (
                <div key={p} className="text-xl font-headline font-bold uppercase tracking-widest">{p}</div>
              ))}
           </div>
         </div>
      </section>

      <EarlyAccessForm />
    </div>
  )
}
