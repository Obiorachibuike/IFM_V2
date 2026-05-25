"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, ArrowRight, Activity, Trophy, Rocket, Coins, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { EarlyAccessForm } from "@/components/sections/EarlyAccessForm"
import { FAQSection } from "@/components/sections/FAQSection"
import { RoadmapSection } from "@/components/sections/RoadmapSection"

export default function HomePage() {
  const containerRef = React.useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3])

  return (
    <div ref={containerRef} className="flex flex-col w-full relative bg-background">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src="https://kommodo.ai/i/HKs6FkZPntMZVPJB9JWf"
            alt="Stadium"
            fill
            className="object-cover opacity-60 brightness-75"
            priority
            data-ai-hint="futuristic stadium"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
          <div className="stadium-light-sweep" />
          <div className="absolute inset-0 football-grid opacity-20" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-5 py-2"
              >
                <Badge className="bg-accent/20 text-accent border-accent/40 text-[9px] uppercase tracking-widest px-3">Phase 1: LIVE</Badge>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/80">Foundation Enrollment</span>
                <Activity className="h-3.5 w-3.5 text-accent animate-pulse" />
              </motion.div>
              
              <h1 className="text-6xl md:text-[9rem] font-bold font-headline leading-[0.8] tracking-tighter uppercase mb-2">
                MASTER YOUR <br />
                <span className="text-accent italic">FOOTBALL LEGACY</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
                Lead the next generation of football clubs. Own your assets, control your tactics, and earn withdrawable rewards in a persistent digital empire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Button asChild size="lg" className="h-16 px-12 text-lg font-bold bg-accent hover:bg-accent/90 text-background glow-gold group rounded-2xl transition-all duration-500">
                <Link href="#early-access">
                  JOIN EARLY ACCESS <Rocket className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-12 text-lg font-bold border-white/10 hover:bg-white/5 rounded-2xl backdrop-blur-3xl transition-all">
                <Link href="/gameplay">EXPLORE GAMEPLAY <Play className="h-5 w-5 ml-3" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PLAY-TO-EARN REWARD LOOP */}
      <section className="py-32 relative bg-background border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-[0.4em] text-[10px] font-bold">Economic Infrastructure</Badge>
                <h2 className="text-5xl md:text-6xl font-bold font-headline uppercase leading-none tracking-tighter">
                  COMPETE & <br /><span className="text-accent italic">EARN REWARDS</span>
                </h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed opacity-80">
                  Winning leagues and tournaments distributes $IFM tokens directly to your manager treasury. These rewards are verified on-chain and fully withdrawable.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Coins, title: "Withdrawable Earnings", desc: "Convert tactical success into liquid ecosystem rewards via secure smart contracts." },
                  { icon: Trophy, title: "Prize Pool Distribution", desc: "Compete for seasonal championship pools fueled by the ecosystem treasury." },
                  { icon: Zap, title: "Performance Multipliers", desc: "Elite club licenses grant tiered multipliers based on your on-pitch dominance." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20 shrink-0 group-hover:bg-accent group-hover:text-background transition-all duration-500">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light opacity-70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className="p-4 border-white/10 glow-gold" hoverable={false}>
                <Image 
                  src="https://picsum.photos/seed/ifm-rewards/1200/800" 
                  alt="Rewards Visual" 
                  width={800} 
                  height={600} 
                  className="rounded-xl brightness-90"
                  data-ai-hint="golden coins"
                />
                <div className="absolute -bottom-8 -right-8">
                   <GlassCard className="p-8 border-accent/30 bg-accent/5 backdrop-blur-3xl glow-gold">
                      <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Treasury Status</div>
                      <div className="text-3xl font-bold text-white uppercase tracking-tighter">$4.2M POOL</div>
                   </GlassCard>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      <RoadmapSection />
      <EarlyAccessForm />
      <FAQSection />
    </div>
  )
}