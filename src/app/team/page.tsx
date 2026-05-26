"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Trophy, Shield, Cpu, Target, Globe, 
  Linkedin, Twitter, Github, Rocket, 
  MessageSquare, Users, Sparkles, ChevronRight,
  LayoutDashboard, Network, BarChart3, Microscope
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

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
  const techImg = PlaceHolderImages.find(i => i.id === "tech-pillar")
  const designImg = PlaceHolderImages.find(i => i.id === "design-pillar")
  const economyImg = PlaceHolderImages.find(i => i.id === "economy-pillar")

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] font-body selection:bg-primary selection:text-white">
      
      {/* 1. CINEMATIC HERO - AUTHORITY START */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          {hqImg && (
            <Image 
              src={hqImg.imageUrl} 
              alt="IFM Studio HQ" 
              fill 
              className="object-cover opacity-20 grayscale brightness-50"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-transparent" />
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 radial-glow-blue opacity-40" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="initial"
            animate="animate"
            className="flex flex-col items-center text-center space-y-12"
          >
            <motion.div variants={fadeIn}>
              <Badge className="bg-primary/10 text-primary border-primary/30 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full backdrop-blur-3xl">
                The Executive Roster
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-[11rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]"
            >
              ARCHITECTS OF <br />
              <span className="text-gradient-blue italic">LEGACY.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed opacity-80"
            >
              Meet the specialized coalition of veterans from AAA gaming, professional football, and blockchain infrastructure building the IFM global empire.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 pt-10">
              <Button asChild size="lg" className="h-20 px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl uppercase tracking-widest">
                <Link href="#vision">OUR VISION</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-16 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest backdrop-blur-xl">
                <Link href="/early-access">JOIN DISCORD</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION SECTION - HUMAN LEGITIMACY */}
      <section id="vision" className="py-48 relative border-b border-white/5 bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 uppercase tracking-widest text-[10px] font-bold">The Founder's Creed</Badge>
                <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-none">BUILDING FOR <br /><span className="text-gradient-gold italic">DECADES.</span></h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  "IFM is not just a game; it is a persistent football universe. We are building a world where managerial brilliance is recorded on-chain, and club legacies outlive the seasons."
                </p>
                <div className="pt-8 flex items-center gap-6">
                  <div className="h-20 w-20 rounded-full border-2 border-accent/30 overflow-hidden">
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
               <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden aspect-[4/5] relative" hoverable={false}>
                  {hqImg && (
                    <Image src={hqImg.imageUrl} alt="Studio Life" fill className="object-cover brightness-50" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <Badge className="bg-primary/20 backdrop-blur-xl border-primary/40 text-primary uppercase tracking-[0.3em] px-4 py-2">
                      Studio Phase 1: Deployment
                    </Badge>
                  </div>
               </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE TEAM - AAA CHARACTER CARDS */}
      <section className="py-48 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-32 space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-8 py-3 uppercase tracking-[0.5em] text-[10px] font-bold">Lead Command</Badge>
              <h2 className="text-6xl md:text-8xl font-headline font-bold uppercase tracking-tighter leading-none">MEET THE <br /><span className="text-primary italic">ELITE UNIT</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard 
                    className="group p-0 border-white/5 h-full flex flex-col" 
                    glowColor={member.theme === "gold" ? "gold" : "blue"}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <Badge className={cn(
                            "uppercase text-[9px] font-bold tracking-widest",
                            member.theme === "gold" ? "bg-accent/10 text-accent border-accent/20" : "bg-primary/10 text-primary border-primary/20"
                          )}>
                            {member.role}
                          </Badge>
                          <h3 className="text-2xl font-bold font-headline mt-2 uppercase tracking-tighter leading-none">{member.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">{member.bio}</p>
                      </div>
                      <div className="flex gap-4 pt-6 border-t border-white/5">
                        {member.social.linkedin && <Link href={member.social.linkedin} className="text-muted-foreground hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></Link>}
                        {member.social.twitter && <Link href={member.social.twitter} className="text-muted-foreground hover:text-white transition-colors"><Twitter className="h-4 w-4" /></Link>}
                        {(member.social as any).github && <Link href={(member.social as any).github} className="text-muted-foreground hover:text-white transition-colors"><Github className="h-4 w-4" /></Link>}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. PILLARS OF EXCELLENCE - TECH, DESIGN, ECONOMY */}
      <section className="py-48 relative border-y border-white/5 bg-card/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 gap-32">
            {[
              { 
                title: "Engineering Excellence", 
                desc: "Our match engine is built on high-concurrency architecture, processing thousands of tactical variables in real-time.", 
                icon: Cpu, 
                label: "Systems Architecture",
                image: techImg
              },
              { 
                title: "Cinematic Design", 
                desc: "We bring esports-grade broadcast aesthetics to management software, ensuring IFM feels like an elite football production.", 
                icon: LayoutDashboard, 
                label: "Experience Design",
                image: designImg
              },
              { 
                title: "Sovereign Economy", 
                desc: "The IFM tokenomics system is designed for long-term sustainability, rewarding strategic intelligence over speculation.", 
                icon: BarChart3, 
                label: "Ecosystem Logic",
                image: economyImg
              },
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                      <pillar.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <Badge className="bg-primary/10 text-primary uppercase text-[10px] font-bold tracking-widest">{pillar.label}</Badge>
                      <h3 className="text-4xl font-headline font-bold uppercase mt-2">{pillar.title}</h3>
                    </div>
                  </div>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">{pillar.desc}</p>
                </div>
                <div>
                   <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden aspect-video relative" hoverable={false}>
                      {pillar.image && (
                        <Image src={pillar.image.imageUrl} alt={pillar.title} fill className="object-cover opacity-60 hover:scale-105 transition-all duration-1000" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                   </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL TRUST CTA */}
      <section className="py-64 relative text-center overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-16">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-7xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.7] mb-12">
              BUILD WITH <br />
              <span className="text-gradient-blue italic">CONFIDENCE.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild size="lg" className="h-24 px-20 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl glow-blue text-2xl uppercase tracking-[0.2em]">
                <Link href="/early-access" className="flex items-center gap-6">
                  JOIN EARLY ACCESS <Rocket className="h-8 w-8" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
