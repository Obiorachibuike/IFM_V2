
"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Shield, Trophy, Users, Zap, Search, Cpu, Target, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const aboutHero = PlaceHolderImages.find(i => i.id === "about-hero")
  const managerImage = PlaceHolderImages.find(i => i.id === "manager-silhouette")

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={aboutHero?.imageUrl || ""} 
            alt="About IFM" 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8"
          >
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-1">ABOUT THE ECOSYSTEM</Badge>
            <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter leading-none">
              REDEFINING <br />
              <span className="text-secondary italic">FOOTBALL LEGACY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              IFM is a high-stakes football management ecosystem where every tactical decision is etched onto the blockchain. We are building the future of digital sports ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-headline">FOOTBALL MANAGER <br /><span className="text-secondary text-gradient">MEETS WEB3 ESPORTS</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Imagine the depth of a world-class football simulation paired with the stakes of a professional esports organization and the true ownership of blockchain assets. IFM isn't just a game—it's a digital career.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "Global Leagues", desc: "Compete against thousands of managers worldwide in a tiered league system." },
                  { icon: Target, title: "Tactical Mastery", desc: "Engineered for depth. Your scouts, tactics, and training dictate your rise." },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary border border-secondary/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className="p-4 border-white/10 glow-blue rotate-2">
                <Image 
                  src={managerImage?.imageUrl || ""} 
                  alt="Manager Silhoette" 
                  width={800} 
                  height={600} 
                  className="rounded-xl"
                />
              </GlassCard>
              <div className="absolute -bottom-8 -left-8">
                <GlassCard className="p-6 border-accent/20 bg-accent/10 glow-gold backdrop-blur-xl">
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Ecosystem Status</div>
                  <div className="text-3xl font-bold text-white">LIVE BETA</div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Mechanics */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter">Core Mechanics</h2>
            <p className="text-muted-foreground text-lg">Four pillars that define the IFM management experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Ownership", desc: "Every club, player, and stadium asset is a verified NFT on the blockchain.", icon: Shield },
              { title: "Governance", desc: "Token holders vote on league expansions, rule changes, and treasury use.", icon: Users },
              { title: "Simulation", desc: "Advanced AI match engine processes thousands of tactical variables per game.", icon: Cpu },
              { title: "Rewards", desc: "Performance-based earnings in $IFM for winning leagues and tournaments.", icon: Trophy },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full p-8 border-white/5 hover:bg-secondary/5 group transition-all">
                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-secondary/10 text-secondary border border-secondary/20 mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all">
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-4 uppercase">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter uppercase">START YOUR <span className="text-secondary italic">LEGACY</span></h2>
          <p className="text-xl text-muted-foreground">The premier division is waiting for its next great manager. Will you lead the ecosystem?</p>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Button asChild size="lg" className="h-16 px-12 bg-secondary hover:bg-secondary/90 text-lg font-bold glow-blue">
              <Link href="/#early-access">JOIN EARLY ACCESS</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 border-white/20 hover:bg-white/5 text-lg font-bold">
              <Link href="/community">JOIN COMMUNITY</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
