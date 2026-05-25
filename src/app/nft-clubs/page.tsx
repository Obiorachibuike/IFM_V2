
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
import { motion } from "framer-motion"

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
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          >
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-accent/20 text-accent border-accent/30 font-bold px-4 py-1">CLUB LICENSES</Badge>
              <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-none">
                SECURE YOUR <br /><span className="text-secondary italic">FRANCHISE</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Owning an IFM Club NFT isn't just a collectible—it's your deed to a professional football ecosystem with full governance rights.
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 glow-blue h-16 px-10 font-bold rounded-2xl">MINT PHASE 1</Button>
              <Button size="lg" variant="outline" className="border-white/20 h-16 px-10 font-bold rounded-2xl hover:bg-white/5">SECONDARY MARKET</Button>
            </div>
          </motion.div>

          {/* Filters Bar */}
          <GlassCard className="p-4 mb-16 flex flex-wrap items-center gap-6 border-white/10 bg-white/5" hoverable={false}>
            <div className="flex-1 flex items-center gap-3 px-6 bg-black/40 rounded-xl border border-white/10 h-14">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input 
                placeholder="Search clubs by name or region..." 
                className="bg-transparent border-none outline-none text-white w-full text-sm font-medium focus:ring-0" 
              />
            </div>
            <div className="flex items-center gap-6">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-white uppercase tracking-widest text-xs font-bold">
                <SlidersHorizontal className="h-4 w-4" /> Filter
              </Button>
              <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
              <div className="flex gap-2">
                {["Common", "Rare", "Elite", "Legendary"].map(tier => (
                  <Badge key={tier} variant="outline" className="cursor-pointer hover:bg-white/10 border-white/10 px-4 py-1 uppercase text-[10px] font-bold tracking-widest">{tier}</Badge>
                ))}
              </div>
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clubCollections.map((club, i) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="group p-0" glowColor={club.tier === 'Mythic' || club.tier === 'Legendary' ? 'gold' : 'none'}>
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={club.img || ""} alt={club.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
                    <div className="absolute top-6 right-6">
                      <Badge className={cn(
                        "font-bold px-4 py-1",
                        club.tier === 'Mythic' ? "bg-gradient-to-r from-purple-600 to-accent text-white" :
                        club.tier === 'Legendary' ? "bg-accent text-background" :
                        "bg-secondary text-white"
                      )}>
                        {club.tier}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold font-headline uppercase tracking-tighter">{club.name}</h3>
                      <div className="text-right">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Supply</div>
                        <div className="text-sm font-mono text-white font-bold">{club.supply}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-1">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Floor Price</div>
                        <div className="text-xl font-headline font-bold text-white">{club.price}</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-1">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Rarity</div>
                        <div className="text-xl font-headline font-bold text-secondary">{club.rarity}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-widest pt-2">
                      <div className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> 50k Fans</div>
                      <div className="flex items-center gap-1.5"><Trophy className="h-3.5 w-3.5" /> Tier 1 Div</div>
                      <div className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> Verified</div>
                    </div>

                    <Button className="w-full h-14 bg-white/5 hover:bg-secondary hover:text-white border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-all font-bold tracking-[0.2em] rounded-xl text-xs">
                      PURCHASE LICENSE
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
