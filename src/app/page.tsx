import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Shield, Zap, TrendingUp, Cpu, Layers } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-stadium")
  const managerImage = PlaceHolderImages.find(img => img.id === "manager-silhouette")

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Stadium"}
            fill
            className="object-cover opacity-50 scale-105"
            priority
            data-ai-hint="futuristic stadium"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>

        <div className="container relative z-10 px-4 text-center space-y-8 max-w-5xl mx-auto">
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Badge className="bg-primary/20 text-secondary border-secondary/30 mb-4 px-4 py-1">
              THE FUTURE OF FOOTBALL IS HERE
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold font-headline leading-[0.9] tracking-tighter text-gradient">
              OWN THE GAME.<br />MANAGE THE LEGACY.
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The world's first AAA-grade blockchain football management ecosystem. 
            Build your club, dominate the leagues, and own your assets forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 glow-blue">
              Mint NFT Club
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/20 hover:bg-white/5">
              Explore Ecosystem
            </Button>
          </div>

          {/* Floating Stats Teaser */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16">
            {[
              { label: "Active Clubs", value: "12,450+" },
              { label: "Manager Assets", value: "$42M+" },
              { label: "Tournaments", value: "320" },
              { label: "Prize Pools", value: "$1.5M" },
            ].map((stat, i) => (
              <GlassCard key={i} className="py-4 px-6 border-white/5 bg-white/5" hoverable={false}>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-2xl font-headline font-bold text-white">{stat.value}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ecosystem Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-headline">A NEW ERA OF<br /><span className="text-secondary">FOOTBALL OWNERSHIP</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  IFM isn't just a game. It's a high-stakes football economy where every tactical decision has real-world impact. Manage players, scout talent, and upgrade your stadium as true owners of your digital legacy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Cpu, title: "Tactical Depth", desc: "Advanced AI-driven match engine simulate realistic gameplay." },
                  { icon: Shield, title: "Asset Security", desc: "Blockchain-backed ownership of clubs, players, and land." },
                  { icon: Zap, title: "Esports Ready", desc: "Competitive seasonal structure with pro-tier championships." },
                  { icon: Layers, title: "Deep Economy", desc: "Integrated marketplace for trading players and club assets." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-secondary/10 border border-secondary/20">
                      <item.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full" />
              <GlassCard className="p-2 border-white/10 glow-blue overflow-hidden rotate-2">
                <Image
                  src={managerImage?.imageUrl || ""}
                  alt="IFM Manager"
                  width={600}
                  height={500}
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="football manager"
                />
              </GlassCard>
              {/* Overlay Stat */}
              <GlassCard className="absolute -bottom-6 -left-6 p-6 glow-gold border-accent/20 bg-accent/10 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-accent">TOP SCOUT</div>
                    <div className="text-white">Manager #4829</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clubs Preview */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold font-headline mb-4">MINT YOUR LEGACY</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from exclusive club collections across the globe. Each NFT grants full ownership and participation in the IFM ecosystem.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Neo London United", tier: "Legendary", rarity: "0.5%", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl, glow: "gold" },
              { name: "Tokyo Cyber Strikers", tier: "Elite", rarity: "2.1%", img: PlaceHolderImages.find(i => i.id === "nft-club-2")?.imageUrl, glow: "blue" },
              { name: "Metropolis City FC", tier: "Rare", rarity: "8.5%", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl, glow: "none" },
            ].map((club, i) => (
              <GlassCard key={i} className="group p-1" glowColor={club.glow as any}>
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
                  <Image src={club.img || ""} alt={club.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" data-ai-hint="football badge" />
                  <div className="absolute top-4 right-4">
                    <Badge variant={club.tier === 'Legendary' ? 'default' : 'secondary'} className={cn(club.tier === 'Legendary' && "bg-accent text-background")}>
                      {club.tier}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-headline mb-2">{club.name}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Rarity Score</span>
                    <span className="text-white font-mono">{club.rarity}</span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <Button variant="outline" className="w-full border-white/10 hover:bg-secondary/10 hover:border-secondary">View Club Details</Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt="Stadium Background"
            fill
            className="object-cover opacity-20"
            data-ai-hint="stadium atmosphere"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight">READY TO LEAD THE <span className="text-secondary">ECOSYSTEM?</span></h2>
            <p className="text-xl text-muted-foreground">
              Join the whitelist for the Phase 1 NFT Mint and secure your place in the Premier Division.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button size="lg" className="h-16 px-12 bg-secondary hover:bg-secondary/90 text-lg font-bold glow-blue">
                Apply for Club License
              </Button>
              <Button size="lg" variant="ghost" className="h-16 px-12 text-lg hover:bg-white/5 flex items-center gap-2">
                <Users className="h-6 w-6" /> Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
