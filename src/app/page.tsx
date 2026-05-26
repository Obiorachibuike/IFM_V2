
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Rocket, Activity, Trophy, Shield, Cpu, Target, ArrowRight, Zap, Coins, TrendingUp, LayoutDashboard, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"
import { RoadmapSection } from "@/components/sections/RoadmapSection"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import Autoplay from "embla-carousel-autoplay"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const comparisonData = [
  { feature: "Digital Ownership", trad: "None (License Only)", ifm: "Full (On-Chain Assets)" },
  { feature: "Reward System", trad: "In-Game Currency", ifm: "Withdrawable $IFM tokens" },
  { feature: "Asset Persistence", trad: "Seasonal Reset", ifm: "Lifetime Verification" },
  { feature: "Governance", trad: "Developer Controlled", ifm: "Manager DAO Voting" },
  { feature: "Match Engine", trad: "Standard Simulation", ifm: "Neural AI Processing" },
]

export default function HomePage() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])
  
  const heroImg = PlaceHolderImages.find(i => i.id === "hero-stadium")
  const badgeImg = PlaceHolderImages.find(i => i.id === "nft-club-1")
  const scoutImg = PlaceHolderImages.find(i => i.id === "scouting-ui")
  const stadiumImg = PlaceHolderImages.find(i => i.id === "hero-stadium")
  const playerImg = PlaceHolderImages.find(i => i.id === "player-card-gold")
  const missionImg = PlaceHolderImages.find(i => i.id === "mission-gameplay")
  const tournamentImg = PlaceHolderImages.find(i => i.id === "esports-tournament")

  const nftGenesisAssets = [
    {
      id: 1,
      name: "Alpha Club License",
      description: "The foundational permit required to register and manage a professional club in the IFM ecosystem.",
      importance: "Grants permanent entry into the competitive league system and unlocks eligibility for $IFM rewards.",
      requirement: "Whitelisted Founding Manager status and successful Phase 1 enrollment.",
      image: badgeImg,
      tier: "Founder"
    },
    {
      id: 2,
      name: "Legendary Scout Bot",
      description: "An advanced AI-driven scouting unit designed to identify high-potential youth talent across global networks.",
      importance: "Drastically increases the efficiency of talent identification and reduces scouting overhead costs.",
      requirement: "Active Tier 2 Management License or higher ecosystem standing.",
      image: scoutImg,
      tier: "Legendary"
    },
    {
      id: 3,
      name: "Neo London Stadium",
      description: "A premium digital venue capable of hosting Tier 1 championship matches and community events.",
      importance: "Unlock significant passive revenue streams from ticket sales and commercial matchday activities.",
      requirement: "Ownership of at least 5 elite player contracts and stadium development tokens.",
      image: stadiumImg,
      tier: "Elite"
    },
    {
      id: 4,
      name: "Mythic Striker: 'Voltage'",
      description: "A generation-zero player card featuring peak physical attributes and exclusive tactical traits.",
      importance: "Provides a definitive competitive edge in high-stakes knockout tournaments and seasonal leagues.",
      requirement: "Available exclusively through the limited Phase 2 Genesis Mint event.",
      image: playerImg,
      tier: "Mythic"
    }
  ]

  const [selectedAsset, setSelectedAsset] = React.useState<typeof nftGenesisAssets[0] | null>(null)
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div ref={containerRef} className="flex flex-col w-full relative bg-background">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF]/20 via-background to-background" />
          {heroImg && (
            <Image
              src={heroImg.imageUrl}
              alt={heroImg.description}
              fill
              className="object-cover brightness-[0.35] grayscale-[0.1]"
              priority
              data-ai-hint="futuristic stadium"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 football-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full radial-glow-blue opacity-40 blur-[120px]" />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
          <div className="container mx-auto h-full relative max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute left-10 top-1/4"
            >
              <GlassCard className="p-4 w-64 border-primary/20 bg-primary/5 backdrop-blur-xl" hoverable={false} glowColor="blue">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Asset Liquidity</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ delay: 1, duration: 2 }} className="h-full bg-primary" />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-white">
                    <span>$IFM VALUE</span>
                    <span className="text-primary">+12.4%</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="absolute right-10 top-1/3"
            >
              <GlassCard className="p-4 w-72 border-accent/20 bg-accent/5 backdrop-blur-xl" hoverable={false} glowColor="gold">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-4 w-4 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Squad Readiness</span>
                </div>
                <div className="flex gap-2 mb-2">
                  {[1, 1, 1, 1, 1].map((_, i) => (
                    <div key={i} className="h-8 flex-1 rounded-sm bg-accent/20 border border-accent/10 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    </div>
                  ))}
                </div>
                <span className="text-[8px] font-bold text-accent/60 uppercase tracking-widest">TACTICAL SYNC: OPTIMAL</span>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="absolute bottom-20 left-20"
            >
              <GlassCard className="p-5 border-white/5 bg-white/5 backdrop-blur-md" hoverable={false}>
                <div className="flex items-center gap-3">
                  <Coins className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Treasury Yield</div>
                    <div className="text-lg font-bold text-white font-headline">485.20 $IFM</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        <div className="container relative z-20 px-6 max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="bg-primary/10 text-primary border-primary/30 text-[10px] uppercase tracking-[0.5em] px-8 py-2.5 backdrop-blur-xl rounded-full">
                  Phase 1 Foundation Enrollment
                </Badge>
              </motion.div>
              <h1 className="text-6xl md:text-[10.5rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase mb-4">
                OWN THE <br />
                <span className="text-gradient-blue italic">EMPIRE</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light opacity-80">
                The architect of digital football legacy has arrived. Lead your club, own your assets, and master the simulation in the ultimate blockchain management ecosystem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
              <Button asChild size="lg" className="h-20 px-14 text-xl font-bold bg-primary hover:bg-primary/90 text-white glow-blue group rounded-2xl transition-all duration-500">
                <Link href="#early-access" className="flex items-center gap-3">
                  JOIN EARLY ACCESS <Rocket className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-14 text-xl font-bold border-white/10 hover:bg-white/5 rounded-2xl backdrop-blur-3xl group">
                <Link href="/gameplay" className="flex items-center gap-3">
                  WATCH TRAILER <Play className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. NFT GENESIS CAROUSEL */}
      <section className="py-32 relative bg-background overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 radial-glow-gold opacity-10" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">The Sovereignty Protocol</Badge>
              <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase leading-none tracking-tighter">
                GENESIS <span className="text-gradient-gold italic">ASSETS</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-xl">
                Immutable digital infrastructure. Rare assets that grant permanent utility and voting power within the IFM DAO.
              </p>
            </div>
          </div>

          <Carousel
            plugins={[autoplay.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {nftGenesisAssets.map((asset) => (
                <CarouselItem key={asset.id} className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => setSelectedAsset(asset)}
                    className="cursor-pointer h-full"
                  >
                    <GlassCard 
                      className="p-0 border-white/10 overflow-hidden group h-full flex flex-col" 
                      glowColor={asset.tier === 'Mythic' || asset.tier === 'Founder' ? 'gold' : 'blue'}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
                          {asset.image && (
                            <Image 
                              src={asset.image.imageUrl} 
                              alt={asset.name} 
                              fill 
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              data-ai-hint={asset.image.imageHint}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                          <div className="absolute top-4 right-4">
                            <Badge className={asset.tier === 'Mythic' || asset.tier === 'Founder' ? 'bg-accent text-background font-bold' : 'bg-primary text-white font-bold'}>
                              {asset.tier}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-8 flex flex-col justify-between bg-card/40">
                          <div className="space-y-6">
                            <h3 className="text-2xl font-bold font-headline uppercase tracking-tighter">{asset.name}</h3>
                            <div className="space-y-4">
                              <div>
                                <div className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">Strategic Description</div>
                                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 font-light">{asset.description}</p>
                              </div>
                              <div className="pt-2">
                                <Button variant="link" className="p-0 h-auto text-[10px] text-primary font-bold uppercase tracking-widest hover:text-accent transition-colors">View Detailed Analysis <ArrowRight className="ml-1 h-3 w-3" /></Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-white/10 bg-white/5 hover:bg-white/10 text-white" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-white/10 bg-white/5 hover:bg-white/10 text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* 3. VISUAL MISSION SECTION - MORE IMAGERY */}
      <section className="py-32 relative bg-card/10 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20">The Ecosystem Vision</Badge>
              <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase leading-none tracking-tighter">
                REDEFINING <br /><span className="text-gradient-blue italic">MANAGEMENT</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                IFM merges the tactical depth of a world-class simulation with the sovereignty of blockchain ownership. Every decision you make is etched into your club's history.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Target, title: "Tactical Depth", img: scoutImg },
                  { icon: Shield, title: "Digital Assets", img: badgeImg },
                ].map((item, i) => (
                  <GlassCard key={i} className="p-0 border-white/10 overflow-hidden aspect-square relative group">
                    {item.img && (
                      <Image src={item.img.imageUrl} alt={item.title} fill className="object-cover brightness-50 group-hover:scale-110 transition-transform duration-700" />
                    )}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background to-transparent">
                      <h4 className="font-bold text-white uppercase tracking-widest text-sm">{item.title}</h4>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full" />
              <GlassCard className="p-0 border-white/10 overflow-hidden glow-blue relative aspect-[4/5]">
                {missionImg && (
                  <Image 
                    src={missionImg.imageUrl} 
                    alt={missionImg.description} 
                    fill
                    className="object-cover brightness-75"
                    data-ai-hint={missionImg.imageHint}
                  />
                )}
                <div className="absolute bottom-10 left-10 right-10">
                  <GlassCard className="p-6 bg-black/60 backdrop-blur-xl border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="h-1 w-12 bg-primary" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Official Game Engine Render</span>
                    </div>
                  </GlassCard>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE GALLERY - ALL IMAGES */}
      <section className="py-32 relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">CINEMATIC <span className="text-primary italic">MOMENTS</span></h2>
            <p className="text-muted-foreground text-xl font-light">The atmosphere of the IFM world, captured in 8K fidelity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[stadiumImg, tournamentImg, missionImg].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-0 border-white/10 overflow-hidden aspect-[16/10] group">
                  {img && (
                    <Image src={img.imageUrl} alt="Gallery" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  )}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NFT DETAIL MODAL */}
      <Dialog open={!!selectedAsset} onOpenChange={(open) => !open && setSelectedAsset(null)}>
        <DialogContent className="max-w-4xl bg-[#05070D]/95 border-white/10 backdrop-blur-[40px] rounded-[2.5rem] overflow-hidden p-0 gap-0">
          {selectedAsset && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
                {selectedAsset.image && (
                  <Image 
                    src={selectedAsset.image.imageUrl} 
                    alt={selectedAsset.name} 
                    fill 
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <Badge className={selectedAsset.tier === 'Mythic' || selectedAsset.tier === 'Founder' ? 'bg-accent text-background font-bold text-lg px-6 py-2 shadow-2xl' : 'bg-primary text-white font-bold text-lg px-6 py-2 shadow-2xl'}>
                    {selectedAsset.tier}
                  </Badge>
                </div>
              </div>
              <div className="p-12 space-y-8 flex flex-col justify-center relative bg-glass-gradient">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Trophy className="h-32 w-32 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-tighter leading-none">{selectedAsset.name}</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-3">Asset Classification</h4>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">{selectedAsset.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-3">Strategic Importance</h4>
                    <p className="text-lg text-white font-medium italic leading-relaxed">"{selectedAsset.importance}"</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-2">Manager Requirement</h4>
                    <p className="text-sm font-bold text-white uppercase tracking-tight">{selectedAsset.requirement}</p>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <Button className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl glow-blue uppercase tracking-widest text-xs">
                    Apply for Minting
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedAsset(null)} className="flex-1 h-14 border-white/10 hover:bg-white/5 font-bold rounded-xl uppercase tracking-widest text-xs">
                    Close Protocol
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <RoadmapSection />
      <EarlyAccessForm />
      <FAQSection />
    </div>
  )
}
