"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Linkedin, Twitter, Github
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const teamMembers = [
  {
    name: "Marcus Thorne",
    role: "FOUNDER & CEO",
    bio: "Ex-EA Sports executive with 15 years in football simulation design. Leading the vision of digital sovereignty in sports.",
    image: "https://picsum.photos/seed/marcus/400/400",
    theme: "gold",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Elena Vance",
    role: "CHIEF OPS OFFICER",
    bio: "Web3 strategy lead previously at a top-tier L2 protocol. Scaling the infrastructure of the global IFM economy.",
    image: "https://picsum.photos/seed/elena/400/400",
    theme: "blue",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "David 'Gaffer' Chen",
    role: "LEAD GAME ENGINEER",
    bio: "Systems architect specializing in high-concurrency match engines and neural simulation logic.",
    image: "https://picsum.photos/seed/david/400/400",
    theme: "blue",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Sarah Jenkins",
    role: "HEAD OF DESIGN",
    bio: "Award-winning UI/UX designer focused on immersive sports broadcasting and next-gen management interfaces.",
    image: "https://picsum.photos/seed/sarah/400/400",
    theme: "gold",
    social: { linkedin: "#", twitter: "#" }
  }
]

export default function TeamPage() {
  const hqImg = PlaceHolderImages.find(i => i.id === "studio-hq")

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] font-body selection:bg-primary selection:text-white">

      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          {hqImg && (
            <Image src={hqImg.imageUrl} alt="IFM Studio HQ" fill className="object-cover" priority />
          )}
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div initial="initial" animate="animate" className="flex flex-col items-center text-center space-y-12">
            <motion.div variants={fadeIn}>
              <Badge className="bg-white/10 text-white border-white/20 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full backdrop-blur-md">
                The Executive Roster
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-6xl md:text-[11rem] font-bold font-headline tracking-tighter uppercase leading-[0.8] text-white drop-shadow-2xl">
              ARCHITECTS OF <br />
              <span className="text-blue-400 italic">LEGACY.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
              Meet the specialized coalition of veterans from AAA gaming, professional football, and blockchain infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION SECTION */}
      <section id="vision" className="py-48 relative border-b border-white/5 bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Founder's Creed</Badge>
                <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-none">BUILDING FOR <br /><span className="text-gradient-gold italic">DECADES.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  "IFM is not just a game; it is a persistent football universe. We are building a world where managerial brilliance is recorded on-chain."
                </p>
                <div className="pt-8 flex items-center gap-6">
                  <div className="h-20 w-20 rounded-2xl border-2 border-accent/30 overflow-hidden">
                    <Image src="https://picsum.photos/seed/marcus/200/200" alt="Marcus Thorne" width={100} height={100} className="object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-bold uppercase tracking-tight">Marcus Thorne</div>
                    <div className="text-sm text-accent font-bold uppercase tracking-widest">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden rounded-2xl aspect-[4/5] relative" hoverable={false}>
                  {hqImg && <Image src={hqImg.imageUrl} alt="Studio Life" fill className="object-cover" />}
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE TEAM */}
      <section className="py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div key={i} variants={fadeIn} initial="initial" whileInView="whileInView">
                  <GlassCard 
                    className="group p-0 border-white/5 h-full flex flex-col rounded-2xl" 
                    glowColor={member.theme === "gold" ? "gold" : "blue"}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                      <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    </div>
                    <div className="p-8 space-y-6 flex flex-col flex-grow">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold font-headline uppercase tracking-tighter">{member.name}</h3>
                        <p className="text-xs text-accent font-bold tracking-widest uppercase">{member.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground flex-grow">{member.bio}</p>
                      
                      {/* Social Links */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                        {Object.entries(member.social).map(([platform, url]) => {
                          const Icon = platform === 'linkedin' ? Linkedin : platform === 'twitter' ? Twitter : Github;
                          return (
                            <Link 
                              key={platform} 
                              href={url} 
                              className="text-white/40 hover:text-white transition-colors"
                            >
                              <Icon size={18} />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  )
}
