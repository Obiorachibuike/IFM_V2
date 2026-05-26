
"use client"

import * as React from "react"
import Image from "next/image"
import { TeamSection } from "@/components/sections/TeamSection"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function TeamPage() {
  const heroImg = PlaceHolderImages.find(i => i.id === "esports-tournament")

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="pt-48 pb-20 relative overflow-hidden bg-background min-h-[60vh] flex items-center">
        {/* Background System */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          {heroImg?.imageUrl && (
            <Image 
              src={heroImg.imageUrl}
              alt="Team Hero"
              fill
              className="object-cover opacity-20 grayscale brightness-50"
              priority
              data-ai-hint="esports arena crowd"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 radial-glow-blue opacity-10" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">Executive Roster</Badge>
            <h1 className="text-7xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              ARCHITECTS OF <br /><span className="text-primary italic">LEGACY</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Meet the specialized coalition of veterans from AAA gaming, professional football, and blockchain infrastructure building the IFM Empire.
            </p>
          </motion.div>
        </div>
      </section>

      <TeamSection />
      
      {/* Advisor section */}
      <section className="py-24 relative bg-card/10 border-t border-white/5">
         <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-16">
              <h3 className="text-3xl font-bold font-headline uppercase tracking-tighter text-white/40 italic">Strategic Advisors</h3>
           </div>
           <div className="flex flex-wrap justify-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
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
