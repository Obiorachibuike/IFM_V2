
"use client"

import * as React from "react"
import Image from "next/image"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Search, SlidersHorizontal, ArrowUpRight, Filter, ShoppingCart, Tag } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const marketItems = [
  { id: 1, name: "Marcus 'Voltage' Storm", type: "Player Card", tier: "Legendary", price: "4.2 ETH", img: PlaceHolderImages.find(i => i.id === "player-card-gold")?.imageUrl },
  { id: 2, name: "Neo London Stadium", type: "Stadium Asset", tier: "Elite", price: "12.5 ETH", img: PlaceHolderImages.find(i => i.id === "hero-stadium")?.imageUrl },
  { id: 3, name: "Berlin Digital FC", type: "Club License", tier: "Rare", price: "0.8 ETH", img: PlaceHolderImages.find(i => i.id === "nft-club-1")?.imageUrl },
  { id: 4, name: "Tokyo Cyber Strikers", type: "Club License", tier: "Mythic", price: "18.0 ETH", img: PlaceHolderImages.find(i => i.id === "nft-club-2")?.imageUrl },
  { id: 5, name: "Energy Core Boots", type: "Cosmetic", tier: "Common", price: "0.05 ETH", img: PlaceHolderImages.find(i => i.id === "player-card-gold")?.imageUrl },
  { id: 6, name: "Scout Drone v2", type: "Manager Utility", tier: "Rare", price: "0.45 ETH", img: PlaceHolderImages.find(i => i.id === "manager-silhouette")?.imageUrl },
]

export default function MarketplacePage() {
  const heroImg = PlaceHolderImages.find(i => i.id === "marketplace-hero")

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImg?.imageUrl || ""} 
            alt="Marketplace" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30">TRANSFER MARKET</Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter uppercase leading-none">
                THE GLOBAL <span className="text-secondary italic">EXCHANGE</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Trade club licenses, elite player cards, and stadium assets in the most advanced digital football economy.
              </p>
            </div>
            
            <GlassCard className="p-6 border-white/5 bg-white/5 flex gap-8 items-center" hoverable={false}>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">24h Volume</div>
                <div className="text-2xl font-bold text-white">4,285 ETH</div>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Active Listings</div>
                <div className="text-2xl font-bold text-white">12.4K</div>
              </div>
            </GlassCard>
          </div>

          {/* Search & Filter Bar */}
          <GlassCard className="p-4 mb-12 flex flex-wrap items-center gap-6 border-white/10 bg-white/5" hoverable={false}>
            <div className="flex-1 flex items-center gap-3 px-4 bg-black/40 rounded-xl border border-white/10 h-14">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input 
                placeholder="Search players, clubs, or items..." 
                className="bg-transparent border-none outline-none text-white w-full text-sm font-medium focus:ring-0" 
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="h-14 px-6 border-white/10 gap-2 hover:bg-white/5">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </Button>
              <Button className="h-14 px-8 bg-secondary hover:bg-secondary/90 glow-blue gap-2">
                <ShoppingCart className="h-4 w-4" /> My Inventory
              </Button>
            </div>
          </GlassCard>

          {/* Quick Filter Tabs */}
          <div className="flex gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            {["All Assets", "Clubs", "Players", "Stadiums", "Cosmetics", "Utilities"].map((tab, i) => (
              <Button 
                key={tab} 
                variant={i === 0 ? "default" : "outline"} 
                className={cn(
                  "rounded-full px-8 h-10 border-white/10",
                  i === 0 ? "bg-secondary hover:bg-secondary/90" : "hover:bg-white/5"
                )}
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Marketplace Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {marketItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="group p-0" glowColor={item.tier === 'Mythic' || item.tier === 'Legendary' ? 'gold' : 'none'}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image 
                      src={item.img || ""} 
                      alt={item.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 right-4">
                      <Badge className={cn(
                        "font-bold",
                        item.tier === 'Mythic' ? "bg-gradient-to-r from-purple-600 to-accent text-white" :
                        item.tier === 'Legendary' ? "bg-accent text-background" :
                        "bg-secondary text-white"
                      )}>
                        {item.tier}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.type}</div>
                      <h3 className="text-xl font-bold font-headline leading-tight">{item.name}</h3>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="space-y-1">
                        <div className="text-[10px] text-muted-foreground uppercase">Price</div>
                        <div className="text-lg font-bold text-white">{item.price}</div>
                      </div>
                      <Button size="sm" className="bg-white/10 hover:bg-secondary group-hover:bg-secondary transition-all">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Button variant="outline" size="lg" className="h-14 px-12 border-white/10 hover:bg-white/5">
              Load More Assets
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
