
"use client"

import * as React from "react"
import Image from "next/image"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { MessageSquare, Twitter, Users, Trophy, Radio, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function CommunityPage() {
  const communityHero = PlaceHolderImages.find(i => i.id === "esports-tournament")

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={communityHero?.imageUrl || ""} 
            alt="Community" 
            fill 
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-8"
          >
            <Badge className="bg-secondary/20 text-secondary border-secondary/30">MANAGER ECOSYSTEM</Badge>
            <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter leading-none uppercase">
              OWN THE <br />
              <span className="text-secondary italic">CONVERSATION</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Join a global network of elite football managers. Collaborate on tactics, vote on governance, and compete for prestige.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-16 px-10 bg-secondary hover:bg-secondary/90 glow-blue gap-3 font-bold">
                <MessageSquare className="h-5 w-5" /> JOIN DISCORD
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 border-white/20 hover:bg-white/5 gap-3 font-bold">
                <Twitter className="h-5 w-5" /> FOLLOW ON X
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 border-y border-white/5 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Total Managers", value: "85,420" },
              { label: "Active Pro Clubs", value: "12,110" },
              { label: "Community Proposals", value: "342" },
              { label: "Ecosystem Members", value: "240K+" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                <div className="text-3xl font-bold font-headline text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Esports Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-headline uppercase leading-none tracking-tighter">
                ESPORTS <br /><span className="text-secondary italic text-gradient">GRADE COMPETITION</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The IFM Championship Series is the ultimate stage for football managers. With prize pools exceeding $1.5M, our seasonal tournaments define the elite of the ecosystem.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Trophy, title: "Seasonal Leagues", desc: "Promotion and relegation systems across 5 competitive tiers." },
                  { icon: Radio, title: "Live Streaming", desc: "Key matches are broadcasted live with professional commentary." },
                ].map((item, i) => (
                  <GlassCard key={i} className="p-6 border-white/5 bg-white/5 flex gap-6 items-start">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-secondary/10 text-secondary shrink-0">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full" />
              <GlassCard className="p-4 border-white/10 glow-blue overflow-hidden">
                <div className="flex items-center justify-between mb-4 px-4">
                  <h4 className="font-bold text-white uppercase tracking-widest text-sm">Top Managers (Season 4)</h4>
                  <Badge variant="outline" className="border-secondary text-secondary">LIVE</Badge>
                </div>
                <div className="space-y-2">
                  {[
                    { rank: 1, name: "Manager_CryptoX", points: "4,820", club: "Neo London" },
                    { rank: 2, name: "Strikers_HQ", points: "4,755", club: "Tokyo Cyber" },
                    { rank: 3, name: "Web3_Gaffer", points: "4,690", club: "Berlin Digital" },
                    { rank: 4, name: "Tactical_Ace", points: "4,620", club: "Metropolis" },
                    { rank: 5, name: "Digital_Boss", points: "4,580", club: "Rio Rovers" },
                  ].map((manager) => (
                    <div key={manager.rank} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-4">
                        <span className="font-headline font-bold text-secondary">#{manager.rank}</span>
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">M</div>
                        <div>
                          <div className="font-bold text-sm text-white">{manager.name}</div>
                          <div className="text-[10px] text-muted-foreground uppercase">{manager.club}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-white">{manager.points} PTS</div>
                        <div className="text-[10px] text-muted-foreground uppercase">+12.5%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: "Discord", desc: "Join 150k+ managers for tactical discussions, rule changes, and announcements.", label: "Join Chat" },
              { icon: Twitter, title: "X (Twitter)", desc: "Follow us for the latest scouting reports, NFT drops, and ecosystem news.", label: "Follow Us" },
              { icon: Users, title: "Manager DAO", desc: "Participate in governance proposals and help shape the future of IFM.", label: "Vote Now" },
            ].map((channel, i) => (
              <GlassCard key={i} className="p-10 border-white/5 bg-white/5 group text-center space-y-6">
                <div className="h-20 w-20 mx-auto flex items-center justify-center rounded-3xl bg-secondary/10 text-secondary border border-secondary/20 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <channel.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold font-headline uppercase">{channel.title}</h3>
                <p className="text-muted-foreground">{channel.desc}</p>
                <Button variant="outline" className="w-full h-12 border-white/10 hover:bg-secondary/20 hover:border-secondary gap-2">
                  {channel.label} <ArrowRight className="h-4 w-4" />
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
