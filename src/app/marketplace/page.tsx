
"use client"

import * as React from "react"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Search, SlidersHorizontal, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const marketItems = [
  { id: 1, name: "Marcus 'Voltage' Storm", type: "Player Card", tier: "Legendary", price: "4.2 ETH", img: "https://picsum.photos/seed/ifm-player/400/600" },
  { id: 2, name: "Neo London Stadium", type: "Stadium Asset", tier: "Elite", price: "12.5 ETH", img: "https://picsum.photos/seed/ifm-stadium/800/600" },
  { id: 3, name: "Berlin Digital FC", type: "Club License", tier: "Rare", price: "0.8 ETH", img: "https://picsum.photos/seed/ifm-club1/400/400" },
  { id: 4, name: "Tokyo Cyber Strikers", type: "Club License", tier: "Mythic", price: "18.0 ETH", img: "https://picsum.photos/seed/ifm-club2/400/400" },
]

export default function MarketplacePage() {
  const heroImg = PlaceHolderImages.find(i => i.id === "mint-preview")

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-48 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        {/* Background System */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <Image 
            src={heroImg?.imageUrl || ""}
            alt="Marketplace Hero"
            fill
            className="object-cover opacity-20 grayscale brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 radial-glow-blue opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-1">TRANSFER MARKET</Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter uppercase leading-none">
                THE GLOBAL <span className="text-accent italic">EXCHANGE</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Trade club licenses, elite player cards, and stadium assets in the most advanced digital football economy.
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
              <Button variant="outline" className="h-14 px-6 border-white/10 gap-2 hover:bg-white/5">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </Button>
              <Button className="h-14 px-8 bg-accent hover:bg-accent/90 glow-gold text-background gap-2 font-bold rounded-xl">
                <ShoppingCart className="h-4 w-4" /> My Inventory
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
                <GlassCard className="group p-0" glowColor={item.tier === 'Mythic' || item.tier === 'Legendary' ? 'gold' : 'none'}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 right-4">
                      <Badge className={cn(
                        "font-bold",
                        item.tier === 'Mythic' ? "bg-purple-600 text-white" :
                        item.tier === 'Legendary' ? "bg-accent text-background" :
                        "bg-primary text-white"
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
                      <Button size="sm" className="bg-white/10 hover:bg-accent group-hover:bg-accent transition-all hover:text-background font-bold rounded-lg">
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
