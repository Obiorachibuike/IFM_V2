"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Shield, Zap, TrendingUp, Cpu, Layers, ArrowRight, Play, Globe, Target } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-stadium")
  const managerImage = PlaceHolderImages.find(img => img.id === "manager-silhouette")

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Stadium"}
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          
          {/* Tactical Overlays */}
          <div className="absolute inset-0 opacity-20 football-grid pointer-events-none" />
          <div className="scanline" />
          <div className="stadium-light left-1/4" />
          <div className="stadium-light left-3/4 delay-700" />
        </div>

        <div className="container relative z-10 px-4 text-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 bg-secondary/10 backdrop-blur-xl border border-secondary/30 rounded-full px-6 py-2.5 mb-6"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">GENESIS SEASON COMMENCING</span>
            </motion.div>
            
            <h1 className="text-7xl md:text-[10rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase mb-4">
              OWN THE <span className="text-secondary italic">PITCH</span>.<br />
              <span className="text-gradient">MASTER YOUR LEGACY</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              The world's premier high-fidelity blockchain football management ecosystem. 
              True asset ownership. Unmatched tactical simulation. Global esports integration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
              <Button size="lg" className="h-20 px-14 text-xl font-bold bg-secondary hover:bg-secondary/90 glow-blue group rounded-2xl transition-all duration-500">
                ENTER ECOSYSTEM <Play className="h-6 w-6 ml-3 fill-current group-hover:scale-125 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-14 text-xl font-bold border-white/20 hover:bg-white/5 rounded-2xl backdrop-blur-md">
                WHITEPAPER V2
              </Button>
            </div>
          </motion.div>

          {/* Broadcast Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-32 max-w-5xl mx-auto"
          >
            {[
              { label: "Active Managers", value: "142.5K", trend: "+12%" },
              { label: "Asset Valuation", value: "$840M", trend: "NEW HIGH" },
              { label: "Global Leagues", value: "3,200", trend: "SEASON 1" },
              { label: "Championship Pool", value: "$2.5M", trend: "SECURED" },
            ].map((stat, i) => (
              <GlassCard key={i} className="py-8 px-6 border-white/5 bg-white/5 hover:bg-secondary/5 transition-colors group" hoverable={false}>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</div>
                  <Badge variant="outline" className="text-[9px] border-secondary/30 text-secondary py-0 px-1.5">{stat.trend}</Badge>
                </div>
                <div className="text-4xl font-headline font-bold text-white tracking-tighter group-hover:text-secondary transition-colors">{stat.value}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Luxury Ecosystem Section */}
      <section className="py-40 relative overflow-hidden bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-12"
            >
              <div className="space-y-6">
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-bold px-5 py-1.5 rounded-full">THE IFM VISION</Badge>
                <h2 className="text-6xl md:text-7xl font-bold font-headline uppercase leading-none tracking-tighter">
                  A DIGITAL FOOTBALL <br /><span className="text-secondary italic">EMPIRE</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  IFM fuses high-stakes simulation with decentralized finance. Every scout report, tactical tweak, and stadium expansion is a permanent stroke on your manager's legacy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: Target, title: "Tactical Depth", desc: "AI-driven engine processing 10,000+ match variables per second." },
                  { icon: Shield, title: "Asset Security", desc: "ERC-721 Club Licenses with full governance and revenue rights." },
                  { icon: Zap, title: "Esports Infrastructure", desc: "Built-in professional tournament systems and live broadcast tech." },
                  { icon: Globe, title: "Global Economy", desc: "A liquid transfer market integrated with the $IFM utility engine." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="h-16 w-16 shrink-0 flex items-center justify-center rounded-2xl bg-secondary/10 border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-xl">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white uppercase text-sm tracking-[0.2em]">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
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
              <div className="absolute -inset-20 bg-secondary/20 blur-[150px] rounded-full opacity-50" />
              <GlassCard className="p-4 border-white/10 glow-blue rotate-2 relative z-10">
                <Image
                  src={managerImage?.imageUrl || ""}
                  alt="IFM Manager"
                  width={800}
                  height={600}
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-1000 brightness-75 hover:brightness-100"
                />
              </GlassCard>
              
              <div className="absolute -bottom-12 -left-12 z-20">
                <GlassCard className="p-10 border-accent/30 bg-accent/10 backdrop-blur-3xl glow-gold border-2">
                  <div className="flex items-center gap-8">
                    <div className="h-20 w-20 rounded-2xl bg-accent flex items-center justify-center shadow-2xl">
                      <Trophy className="h-10 w-10 text-background" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-accent uppercase tracking-widest mb-1.5">GLOBAL RANKING</div>
                      <div className="text-3xl font-headline font-bold text-white uppercase tracking-tighter">PREMIER ELITE</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exotic Club Mint Preview */}
      <section className="py-40 bg-card/20 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-24 space-y-6">
          <Badge variant="outline" className="border-white/20 text-muted-foreground uppercase tracking-[0.4em] px-6 py-1.5">MINTING PHASE 1</Badge>
          <h2 className="text-6xl md:text-8xl font-bold font-headline uppercase tracking-tighter">SECURE YOUR <span className="text-secondary italic">FRANCHISE</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Mint legendary club licenses and gain exclusive access to the IFM Pro League.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Neo London United", tier: "Legendary", rarity: "0.5%", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl, glow: "gold" },
              { name: "Tokyo Cyber Strikers", tier: "Elite", rarity: "2.1%", img: PlaceHolderImages.find(i => i.id === "nft-club-2")?.imageUrl, glow: "blue" },
              { name: "Metropolis City FC", tier: "Rare", rarity: "8.5%", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl, glow: "none" },
            ].map((club, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
              >
                <GlassCard className="group p-0 rounded-[2rem]" glowColor={club.glow as any}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={club.img || ""} alt={club.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                    <div className="absolute top-8 right-8">
                      <Badge className={cn(
                        "font-bold px-6 py-2 rounded-lg text-xs tracking-widest",
                        club.tier === 'Legendary' ? "bg-accent text-background glow-gold" : "bg-secondary text-white glow-blue"
                      )}>
                        {club.tier}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-10 space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold font-headline uppercase tracking-tighter leading-none">{club.name}</h3>
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground uppercase tracking-[0.2em] font-medium">
                        <span>ECOSYSTEM RARITY</span>
                        <span className="text-white font-bold">{club.rarity}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full h-16 rounded-2xl border-white/10 group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-all text-sm font-bold tracking-[0.2em] uppercase">
                      CLUB BLUEPRINT
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/nft-clubs">
              <Button variant="ghost" className="text-secondary hover:text-white hover:bg-white/5 gap-3 uppercase tracking-[0.3em] text-sm font-bold py-8">
                EXPLORE ALL COLLECTIONS <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Billion-Dollar CTA */}
      <section className="py-60 relative">
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
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-7xl md:text-[9rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase">READY TO <br /><span className="text-secondary italic">DOMINATE?</span></h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Join the whitelist for the Phase 1 NFT Mint and claim your throne in the digital football empire.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Button size="lg" className="h-24 px-20 bg-secondary hover:bg-secondary/90 text-2xl font-bold glow-blue rounded-[2rem] uppercase tracking-tighter shadow-2xl">
                APPLY FOR LICENSE
              </Button>
              <Button size="lg" variant="ghost" className="h-24 px-20 text-2xl hover:bg-white/5 flex items-center gap-4 font-bold rounded-[2rem] border border-white/5">
                <Users className="h-10 w-10" /> JOIN COMMAND CENTER
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}