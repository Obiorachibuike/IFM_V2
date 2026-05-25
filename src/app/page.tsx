
"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Shield, Zap, TrendingUp, Cpu, Layers, ArrowRight, Play } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-stadium")
  const managerImage = PlaceHolderImages.find(img => img.id === "manager-silhouette")

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Stadium"}
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          {/* Animated Scan Lines */}
          <div className="absolute inset-0 opacity-10 football-grid pointer-events-none" />
        </div>

        <div className="container relative z-10 px-4 text-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur-md border border-secondary/30 rounded-full px-5 py-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Genesis Season is Live</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold font-headline leading-[0.85] tracking-tighter uppercase">
              OWN THE <span className="text-secondary italic">PITCH</span>.<br />
              <span className="text-gradient">BUILD YOUR LEGACY</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Experience the world's first AAA-grade blockchain football management ecosystem. 
              True ownership. Tactical depth. Professional esports infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <Button size="lg" className="h-16 px-12 text-lg font-bold bg-secondary hover:bg-secondary/90 glow-blue group rounded-2xl">
                PLAY NOW <Play className="h-5 w-5 ml-2 fill-current group-hover:scale-110 transition-all" />
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold border-white/20 hover:bg-white/5 rounded-2xl">
                EXPLORE ECOSYSTEM
              </Button>
            </div>
          </motion.div>

          {/* Floating Stats Teaser */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-24"
          >
            {[
              { label: "Active Clubs", value: "12,450+" },
              { label: "Manager Assets", value: "$42M+" },
              { label: "Tournaments", value: "320" },
              { label: "Prize Pools", value: "$1.5M" },
            ].map((stat, i) => (
              <GlassCard key={i} className="py-6 px-8 border-white/5 bg-white/5" hoverable={false}>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">{stat.label}</div>
                <div className="text-3xl font-headline font-bold text-white tracking-tighter">{stat.value}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Ecosystem Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-10"
            >
              <div className="space-y-4">
                <Badge variant="outline" className="border-secondary text-secondary font-bold px-4 py-1">THE IFM VISION</Badge>
                <h2 className="text-5xl md:text-6xl font-bold font-headline uppercase leading-none tracking-tighter">
                  A NEW ERA OF<br /><span className="text-secondary italic">FOOTBALL OWNERSHIP</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  IFM isn't just a game. It's a high-stakes football economy where every tactical decision has real-world impact. Manage players, scout talent, and upgrade your stadium as true owners of your digital legacy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Cpu, title: "Tactical Depth", desc: "Advanced AI-driven match engine simulate realistic gameplay." },
                  { icon: Shield, title: "Asset Security", desc: "Blockchain-backed ownership of clubs, players, and land." },
                  { icon: Zap, title: "Esports Ready", desc: "Competitive seasonal structure with pro-tier championships." },
                  { icon: Layers, title: "Deep Economy", desc: "Integrated marketplace for trading players and club assets." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-secondary/10 border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white uppercase text-sm tracking-widest">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="absolute -inset-10 bg-secondary/10 blur-[120px] rounded-full" />
              <GlassCard className="p-4 border-white/10 glow-blue overflow-hidden rotate-3">
                <Image
                  src={managerImage?.imageUrl || ""}
                  alt="IFM Manager"
                  width={800}
                  height={600}
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </GlassCard>
              {/* Overlay Stat Card */}
              <div className="absolute -bottom-10 -left-10">
                <GlassCard className="p-8 border-accent/20 bg-accent/10 backdrop-blur-2xl glow-gold">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-accent flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-background" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">PRO LEAGUE RANK</div>
                      <div className="text-2xl font-headline font-bold text-white uppercase tracking-tighter">TIER 1 ELITE</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Clubs Preview */}
      <section className="py-32 bg-card/20 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-20 space-y-6">
          <Badge variant="outline" className="border-white/20 text-muted-foreground uppercase tracking-[0.3em]">Exotic Collections</Badge>
          <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">MINT YOUR <span className="text-secondary italic">LEGACY</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose from exclusive club collections across the globe. Each NFT grants full ownership and participation in the IFM ecosystem.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Neo London United", tier: "Legendary", rarity: "0.5%", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl, glow: "gold" },
              { name: "Tokyo Cyber Strikers", tier: "Elite", rarity: "2.1%", img: PlaceHolderImages.find(i => i.id === "nft-club-2")?.imageUrl, glow: "blue" },
              { name: "Metropolis City FC", tier: "Rare", rarity: "8.5%", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl, glow: "none" },
            ].map((club, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="group p-0" glowColor={club.glow as any}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={club.img || ""} alt={club.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    <div className="absolute top-6 right-6">
                      <Badge className={cn(
                        "font-bold px-4 py-1",
                        club.tier === 'Legendary' ? "bg-accent text-background" : "bg-secondary text-white"
                      )}>
                        {club.tier}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold font-headline uppercase tracking-tighter leading-none">{club.name}</h3>
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-widest">
                        <span>Rarity Score</span>
                        <span className="text-white font-bold">{club.rarity}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full h-14 rounded-xl border-white/10 group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-all text-sm font-bold tracking-widest uppercase">
                      VIEW CLUB DETAILS
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/nft-clubs">
              <Button variant="ghost" className="text-secondary hover:text-white hover:bg-white/5 gap-2 uppercase tracking-widest text-xs font-bold">
                View All Collections <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt="Stadium Background"
            fill
            className="object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-6xl md:text-8xl font-bold font-headline leading-[0.85] tracking-tighter uppercase">READY TO LEAD THE <span className="text-secondary italic">ECOSYSTEM?</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join the whitelist for the Phase 1 NFT Mint and secure your place in the Premier Division.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button size="lg" className="h-20 px-16 bg-secondary hover:bg-secondary/90 text-xl font-bold glow-blue rounded-2xl uppercase tracking-tighter">
                Apply for Club License
              </Button>
              <Button size="lg" variant="ghost" className="h-20 px-16 text-xl hover:bg-white/5 flex items-center gap-3 font-bold rounded-2xl">
                <Users className="h-8 w-8" /> JOIN DISCORD
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
