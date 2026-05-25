"use client"

/**
 * IFM | Home Page
 * A billionaire-dollar football gaming ecosystem launch platform.
 * Architectural Rule: Conceptual ecosystem only, no transactional UI.
 */

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Shield, Zap, TrendingUp, Cpu, Play, Globe, Target, ArrowRight, ChevronRight, Activity } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef(null)
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-stadium")
  const managerImage = PlaceHolderImages.find(img => img.id === "manager-silhouette")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-background relative">
      <Navbar />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-[110vh] min-h-[900px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Stadium"}
            fill
            className="object-cover opacity-50 transition-transform duration-[10s] ease-linear"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
          
          {/* Visual Overlays */}
          <div className="absolute inset-0 opacity-10 football-grid pointer-events-none" />
          <div className="stadium-light-sweep" />
          <div className="scanline" />
        </motion.div>

        <div className="container relative z-10 px-4 text-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-2"
              >
                <Badge variant="outline" className="bg-secondary/20 text-secondary border-secondary/40 text-[9px] uppercase tracking-widest px-3">Live Status</Badge>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">Ecosystem Initialized</span>
                <Activity className="h-3 w-3 text-secondary animate-pulse" />
              </motion.div>
              
              <h1 className="text-8xl md:text-[13rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase mb-2">
                THE GLOBAL <br />
                <span className="text-secondary italic">FOOTBALL EMPIRE</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light tracking-wide opacity-70">
                Experience the premier high-fidelity blockchain management ecosystem. <br className="hidden md:block" />
                True digital ownership meets elite esports performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
              <Button size="lg" className="h-20 px-14 text-xl font-bold bg-secondary hover:bg-secondary/90 glow-blue group rounded-2xl shadow-2xl transition-all duration-500">
                LAUNCH SYSTEM <Play className="h-6 w-6 ml-4 fill-current group-hover:scale-125 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-14 text-xl font-bold border-white/10 hover:bg-white/5 rounded-2xl backdrop-blur-3xl shadow-2xl transition-all">
                WHITE-PAPER V4
              </Button>
            </div>
          </motion.div>

          {/* System Telemetry Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-32 max-w-5xl mx-auto"
          >
            {[
              { label: "Network Capacity", value: "340K+", sub: "Verified Owners" },
              { label: "Global Leagues", value: "1,200", sub: "Operational Divisions" },
              { label: "Reward Pool", value: "$4.2M", sub: "Season 1 Allocation" },
              { label: "Asset Security", value: "ERC-721", sub: "Immutable Deeds" },
            ].map((stat, i) => (
              <GlassCard key={i} className="py-8 px-6 border-white/5 bg-white/5 text-left" hoverable={true}>
                <div className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] mb-2 font-bold">{stat.label}</div>
                <div className="text-4xl font-headline font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                <div className="text-[10px] text-secondary font-bold uppercase tracking-widest">{stat.sub}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Narrative Section: The Core Engine */}
      <section className="py-64 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-12"
            >
              <div className="space-y-6">
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-6 py-2 uppercase tracking-[0.4em] text-[10px] font-bold">Managerial Excellence</Badge>
                <h2 className="text-7xl md:text-8xl font-bold font-headline uppercase leading-none tracking-tighter">
                  BEYOND THE <br /><span className="text-secondary italic">SIMULATION</span>
                </h2>
                <p className="text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
                  IFM is not a game—it is an ecosystem designed for the next generation of professional football managers. Build, own, and lead your club to global dominance in a tiered competitive system.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: Target, title: "Tactical Depth", desc: "Engineered with 15k+ tactical variables per match engine cycle." },
                  { icon: Shield, title: "Verified Assets", desc: "Every club and player contract is a unique digital asset." },
                  { icon: Globe, title: "Global Leagues", desc: "Compete in a hierarchical league structure across 140+ countries." },
                  { icon: Cpu, title: "AI Scouting", desc: "Neural networks process raw data into actionable scouting insights." },
                ].map((item, i) => (
                  <div key={i} className="space-y-4 group">
                    <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-secondary/5 border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h4 className="font-bold text-white uppercase text-sm tracking-widest">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="absolute -inset-20 bg-secondary/10 blur-[150px] rounded-full opacity-50" />
              <GlassCard className="p-4 border-white/10 glow-blue rotate-2 relative z-10">
                <Image
                  src={managerImage?.imageUrl || ""}
                  alt="IFM Tactical"
                  width={800}
                  height={600}
                  className="rounded-xl grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute -bottom-10 -left-10 z-20">
                  <GlassCard className="p-10 border-accent/30 bg-accent/5 backdrop-blur-3xl glow-gold border-2">
                    <div className="text-[12px] font-bold text-accent uppercase tracking-[0.4em] mb-2">System Authority</div>
                    <div className="text-4xl font-headline font-bold text-white">GENESIS MGR</div>
                  </GlassCard>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Ribbon */}
      <section className="py-20 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 items-center animate-scroll-text">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-5xl font-headline font-bold text-white/5 uppercase italic tracking-widest">Ownership Economy</span>
              <div className="h-2 w-2 rounded-full bg-secondary/20" />
              <span className="text-5xl font-headline font-bold text-white/5 uppercase tracking-widest">Broadcast Infrastructure</span>
              <div className="h-2 w-2 rounded-full bg-secondary/20" />
            </div>
          ))}
        </div>
      </section>

      {/* Final Billion-Dollar CTA */}
      <section className="py-80 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt="Stadium Footer"
            fill
            className="object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl space-y-16">
          <h2 className="text-7xl md:text-[10rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase">
            SECURE YOUR <br />
            <span className="text-secondary italic">LEGACY</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto opacity-70">
            The prime-division whitelist is closing. Join the elite network of managers shaping the future of the digital football empire.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-10">
            <Button size="lg" className="h-24 px-16 text-2xl font-bold bg-secondary hover:bg-secondary/90 glow-blue rounded-3xl shadow-3xl transition-all duration-700">
              APPLY FOR LICENSE
            </Button>
            <Button size="lg" variant="ghost" className="h-24 px-16 text-2xl font-bold hover:bg-white/5 rounded-3xl border border-white/10 gap-4">
              <Users className="h-8 w-8" /> COMMAND CENTER
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
