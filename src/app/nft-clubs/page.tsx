"use client"

import Image from "next/image"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Shield, Trophy, Users, Zap, Search, SlidersHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

const clubCollections = [
  { id: 1, name: "Neo London United", tier: "Legendary", rarity: "0.2%", price: "4.5 ETH", supply: "1/50", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl },
  { id: 2, name: "Tokyo Cyber Strikers", tier: "Mythic", rarity: "0.05%", price: "12.0 ETH", supply: "1/10", img: PlaceHolderImages.find(i => i.id === "nft-club-2")?.imageUrl },
  { id: 3, name: "Metropolis City FC", tier: "Elite", rarity: "1.5%", price: "1.2 ETH", supply: "25/150", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl },
  { id: 4, name: "Berlin Digital FC", tier: "Rare", rarity: "12.5%", price: "0.4 ETH", supply: "80/500", img: PlaceHolderImages.find(i => i.id === "nft-club-2")?.imageUrl },
  { id: 5, name: "Neo Paris Saint", tier: "Common", rarity: "65%", price: "0.1 ETH", supply: "1200/5000", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl },
  { id: 6, name: "Rio Silicon Rovers", tier: "Rare", rarity: "15%", price: "0.35 ETH", supply: "150/1000", img: PlaceHolderImages.find(i => i.id === "nft-club-2")?.imageUrl },
]

export default function NFTClubs() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-3xl space-y-4">
              <Badge className="bg-accent/20 text-accent border-accent/30">CLUB LICENSES</Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter">SECURE YOUR <span className="text-gradient">FRANCHISE</span></h1>
              <p className="text-xl text-muted-foreground">
                Owning an IFM Club NFT isn't just a collectable—it's your deed to a professional football ecosystem with full governance rights.
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 glow-blue h-14 px-8">Mint Phase 1</Button>
              <Button size="lg" variant="outline" className="border-white/10 h-14 px-8">Secondary Market</Button>
            </div>
          </div>

          {/* Filters Bar */}
          <GlassCard className="p-4 mb-12 flex flex-wrap items-center gap-6 border-white/5 bg-white/5" hoverable={false}>
            <div className="flex-1 flex items-center gap-3 px-4 bg-white/5 rounded-lg border border-white/10 h-12">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input placeholder="Search clubs by name or region..." className="bg-transparent border-none outline-none text-white w-full text-sm" />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-white">
                <SlidersHorizontal className="h-4 w-4" /> Filter
              </Button>
              <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
              <div className="flex gap-2">
                {["Common", "Rare", "Elite", "Legendary"].map(tier => (
                  <Badge key={tier} variant="outline" className="cursor-pointer hover:bg-white/10 border-white/10">{tier}</Badge>
                ))}
              </div>
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubCollections.map((club) => (
              <GlassCard key={club.id} className="group p-0" glowColor={club.tier === 'Mythic' || club.tier === 'Legendary' ? 'gold' : 'none'}>
                <div className="relative aspect-video overflow-hidden">
                  <Image src={club.img || ""} alt={club.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" data-ai-hint="football badge" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <Badge className={cn(
                      club.tier === 'Mythic' ? "bg-gradient-to-r from-purple-600 to-accent text-white" :
                      club.tier === 'Legendary' ? "bg-accent text-background" :
                      "bg-secondary text-white"
                    )}>
                      {club.tier}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-headline">{club.name}</h3>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground uppercase">Supply</div>
                      <div className="text-sm font-mono text-white">{club.supply}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="text-[10px] text-muted-foreground uppercase mb-1">Floor Price</div>
                      <div className="text-lg font-headline font-bold text-white">{club.price}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="text-[10px] text-muted-foreground uppercase mb-1">Rarity</div>
                      <div className="text-lg font-headline font-bold text-secondary">{club.rarity}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <div className="flex items-center gap-1"><Users className="h-3 w-3" /> 50k Fans</div>
                    <div className="flex items-center gap-1"><Trophy className="h-3 w-3" /> Tier 1 Div</div>
                    <div className="flex items-center gap-1"><Shield className="h-3 w-3" /> KYC Verified</div>
                  </div>

                  <Button className="w-full h-12 bg-white/10 hover:bg-secondary/20 hover:text-white border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-all">
                    Purchase License
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
