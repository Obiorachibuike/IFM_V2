
"use client"

import * as React from "react"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Search, SlidersHorizontal, ShoppingCart, Sparkles, Filter } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function MarketplacePage() {
  const heroImg = PlaceHolderImages.find(i => i.id === "mint-preview")
  const player1 = PlaceHolderImages.find(i => i.id === "player-card-gold")
  const stadium1 = PlaceHolderImages.find(i => i.id === "hero-stadium")
  const club1 = PlaceHolderImages.find(i => i.id === "nft-club-1")
  const club2 = PlaceHolderImages.find(i => i.id === "nft-club-2")

  const rarityTiers = {
    "Common": "bg-muted text-muted-foreground",
    "Rare": "bg-blue-600 text-white",
    "Elite": "bg-primary text-white",
    "Legendary": "bg-accent text-background",
    "Iconic": "bg-purple-600 text-white"
  }

  const marketItems = [
    { 
      id: 1, 
      name: "Marcus 'Voltage' Storm", 
      type: "Player NFT", 
      tier: "Legendary", 
      price: "12,400 $IFM", 
      image: player1 
    },
    { 
      id: 2, 
      name: "Neo London Stadium", 
      type: "Infrastructure NFT", 
      tier: "Elite", 
      price: "45,000 $IFM", 
      image: stadium1 
    },
    { 
      id: 3, 
      name: "Berlin Digital FC", 
      type: "Club License NFT", 
      tier: "Rare", 
      price: "8,500 $IFM", 
      image: club1 
    },
    { 
      id: 4, 
      name: "Tokyo Cyber Strikers", 
      type: "Club License NFT", 
      tier: "Iconic", 
      price: "150,000 $IFM", 
      image: club2 
    },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-48 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        {/* Background System */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          {heroImg && (
            <Image 
              src={heroImg.imageUrl}
              alt={heroImg.description}
              fill
              className="object-cover opacity-20 grayscale brightness-50"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 radial-glow-blue opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">The Global Exchange</Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter uppercase leading-none">
                ASSET <span className="text-accent italic">LIQUIDITY</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Trade verified club licenses, elite player cards, and stadium infrastructure in the ecosystem's native football economy.
              </p>
            </div>
          </div>

          <GlassCard className="p-4 mb-12 flex flex-wrap items-center gap-6 border-white/10 bg-white/5" hoverable={false}>
            <div className="flex-1 flex items-center gap-3 px-4 bg-black/40 rounded-xl border border-white/10 h-14">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input 
                placeholder="Search players, clubs, or items..." 
                className="bg-transparent border-none outline-none text-white w-full text-sm font-medium focus:ring-0" 
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="h-14 px-6 border-white/10 gap-2 hover:bg-white/5 uppercase tracking-widest text-[10px] font-bold">
                <Filter className="h-4 w-4" /> Filters
              </Button>
              <Button className="h-14 px-8 bg-accent hover:bg-accent/90 glow-gold text-background gap-2 font-bold rounded-xl uppercase tracking-widest text-[10px]">
                <ShoppingCart className="h-4 w-4" /> My Vault
              </Button>
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="group p-0" glowColor={item.tier === 'Iconic' || item.tier === 'Legendary' ? 'gold' : 'blue'}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {item.image && (
                      <Image 
                        src={item.image.imageUrl} 
                        alt={item.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 right-4">
                      <Badge className={cn(
                        "font-bold uppercase tracking-widest px-3 py-1 text-[10px]",
                        rarityTiers[item.tier as keyof typeof rarityTiers]
                      )}>
                        {item.tier}
                      </Badge>
                    </div>
                    {item.tier === 'Iconic' && (
                      <div className="absolute inset-0 border-2 border-purple-500/30 animate-pulse pointer-events-none" />
                    )}
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold flex items-center gap-2">
                        {item.type} <Sparkles className="h-3 w-3 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold font-headline leading-tight">{item.name}</h3>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="space-y-1">
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Current Bid</div>
                        <div className="text-lg font-bold text-white tracking-tight">{item.price}</div>
                      </div>
                      <Button size="sm" className="bg-white/10 hover:bg-accent group-hover:bg-accent transition-all hover:text-background font-bold rounded-lg uppercase text-[10px] tracking-widest px-4">
                        Buy Now
                      </Button>
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
