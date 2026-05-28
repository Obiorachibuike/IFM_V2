"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Trophy, Shield, Target, Cpu, Users, Zap, Coins,
  TrendingUp, BarChart3, Globe, Rocket,
  Play, Search, Microscope, Network,
  ChevronRight, ShieldCheck, Activity,
  Sparkles, Layers, History, LayoutDashboard,
  Timer, ArrowRight, Gauge, Database
} from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
  viewport: { once: true }
}

export default function AboutPage() {

  const heroImg = PlaceHolderImages.find(i => i.id === "about-hero")
  const matchImg = PlaceHolderImages.find(i => i.id === "match-engine-live")
  const tacticsImg = PlaceHolderImages.find(i => i.id === "tactical-board")
  const academyImg = PlaceHolderImages.find(i => i.id === "scouting-ui")
  const rewardsImg = PlaceHolderImages.find(i => i.id === "rewards-visual")
  const playerCardImg = PlaceHolderImages.find(i => i.id === "player-card-gold")
  const tokenImg = PlaceHolderImages.find(i => i.id === "token-visual")

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] overflow-hidden font-body selection:bg-primary selection:text-white">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0">

          {/* softer overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/60 to-background/85" />

          {heroImg && (
            <Image
              src={heroImg.imageUrl}
              alt="IFM Vision"
              fill
              priority
              className="object-cover opacity-65 grayscale-[0.1] brightness-[0.78] contrast-[1.1]"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 radial-glow-blue opacity-20" />
          <div className="stadium-light-sweep opacity-40" />

        </div>

        {/* CONTENT */}
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-12"
          >

            <motion.div variants={fadeIn}>
              <Badge className="bg-primary/10 text-primary border-primary/20 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full backdrop-blur-2xl">
                The Architect Protocol
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-6xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]"
            >
              BUILD. OWN. <br />
              <span className="text-gradient-blue italic">DOMINATE.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed"
            >
              IFM is a persistent football management simulation where strategic intelligence meets digital sovereignty.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 pt-10">

              <Button asChild size="lg" className="h-20 px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl uppercase tracking-widest">
                <Link href="/early-access">START YOUR CLUB</Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="h-20 px-16 border-white/15 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest backdrop-blur-xl">
                <Link href="/gameplay">WATCH GAMEPLAY</Link>
              </Button>

            </motion.div>

            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 border-t border-white/10 w-full max-w-5xl"
            >
              {[
                { label: "Active Clubs", value: "85,420" },
                { label: "Matches Played", value: "1.2M+" },
                { label: "Players Developed", value: "3.5M" },
                { label: "Rewards Paid", value: "4.8M $IFM" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
                    {stat.label}
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CLEAN CALL OUT */}
      <div className="absolute bottom-12 left-12 hidden md:block">
        <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em] opacity-40">
          System Node: Central Architecture / 001
        </span>
      </div>

    </div>
  )
}