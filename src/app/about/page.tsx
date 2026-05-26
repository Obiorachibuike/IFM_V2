
"use client"

import Image from "next/image"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Shield, Trophy, Users, Cpu, Target, Globe, Zap, Rocket, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const aboutHero = PlaceHolderImages.find(i => i.id === "about-hero")
  const managerImage = PlaceHolderImages.find(i => i.id === "manager-silhouette")
  const tacticsImage = PlaceHolderImages.find(i => i.id === "tactical-board")

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. HERO SECTION - ATMOSPHERIC DEPTH */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          <Image 
            src={aboutHero?.imageUrl || ""} 
            alt="About IFM" 
            fill 
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 radial-glow-blue opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-10"
          >
            <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">The Strategic Vision</Badge>
            <h1 className="text-6xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              REDEFINING <br />
              <span className="text-gradient-blue italic">FOOTBALL LEGACY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light opacity-80">
              IFM is a high-stakes football management ecosystem where tactical intelligence meets the power of decentralized ownership. We are building the future of digital sports careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE VISION - FM MEETS WEB3 */}
      <section className="py-32 relative border-t border-white/5 bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-5xl md:text-6xl font-bold font-headline uppercase leading-none tracking-tighter">FOOTBALL MANAGER <br /><span className="text-primary italic">MEETS WEB3 ESPORTS</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Imagine the depth of a world-class football simulation paired with the stakes of a professional esports organization and the true ownership of blockchain assets. IFM isn't just a game—it's a digital career path.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Globe, title: "Global Leagues", desc: "Compete against thousands of managers worldwide in a tiered, hyper-competitive league system." },
                  { icon: Target, title: "Tactical Mastery", desc: "Engineered for depth. Your scouts, tactics, and training dictate your rise to the elite ranks." },
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
              <GlassCard className="p-4 border-white/10 glow-blue rotate-2">
                <Image 
                  src={managerImage?.imageUrl || ""} 
                  alt="Manager Silhouette" 
                  width={800} 
                  height={600} 
                  className="rounded-2xl brightness-75 grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </GlassCard>
              <div className="absolute -bottom-8 -left-8">
                <GlassCard className="p-6 border-primary/20 bg-primary/10 glow-blue backdrop-blur-xl">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-1">Ecosystem Status</div>
                  <div className="text-3xl font-bold text-white uppercase tracking-tighter">LIVE FOUNDATION</div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE MECHANICS - FOUR PILLARS */}
      <section className="py-32 relative bg-card/5 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
            <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">CORE <span className="text-primary italic">MECHANICS</span></h2>
            <p className="text-muted-foreground text-xl font-light">The four architectural pillars of the IFM management experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Ownership", desc: "Every club, player contract, and stadium asset is a verified digital asset held in your vault.", icon: Shield },
              { title: "Governance", desc: "Token holders vote on league expansions, rule changes, and ecosystem treasury allocation.", icon: Users },
              { title: "Simulation", desc: "Our neural match engine processes thousands of tactical variables per second for total realism.", icon: Cpu },
              { title: "Rewards", desc: "Performance-based earnings in $IFM are distributed for winning leagues and tournaments.", icon: Trophy },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full p-10 border-white/5 hover:bg-primary/5 group transition-all" glowColor="blue">
                  <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <pillar.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4 uppercase tracking-tighter">{pillar.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{pillar.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHOOSE YOUR LEGACY */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden shadow-2xl">
                <Image src={tacticsImage?.imageUrl || ""} alt="Tactics" width={1200} height={800} className="w-full h-auto brightness-75" />
              </GlassCard>
            </motion.div>
            <div className="space-y-12">
               <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter">CHOOSE YOUR <br /><span className="text-primary italic">MANAGEMENT STYLE</span></h2>
               <div className="space-y-8">
                  {[
                    { title: "The Mastermind", desc: "Win through superior tactics, smart lineups, and real-time match reads.", icon: Zap },
                    { title: "The Academy Club", desc: "Develop future stars from your youth ranks and build a sustainable empire.", icon: Target },
                    { title: "The Value Finder", desc: "Identify undervalued talent on the market and flip them for significant gains.", icon: BarChart3 },
                    { title: "The Big Spender", desc: "Utilize your $IFM treasury to build a title-winning squad in the transfer windows.", icon: Coins },
                  ].map((style, i) => (
                    <div key={i} className="flex gap-6 group">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                           <style.icon className="h-6 w-6" />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold uppercase mb-1 tracking-tight">{style.title}</h4>
                           <p className="text-sm text-muted-foreground font-light">{style.desc}</p>
                        </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA - THE GAFFER'S CALL */}
      <section className="py-40 relative text-center bg-accent/5 border-t border-white/5">
        <div className="absolute inset-0 radial-glow-gold opacity-10" />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl space-y-12">
          <Badge className="bg-accent/10 text-accent border-accent/30 px-6 py-2 uppercase tracking-[0.5em] text-[10px] font-bold">The Empire Awaits</Badge>
          <h2 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-none">
            START YOUR <br />
            <span className="text-gradient-gold italic">LEGACY TODAY</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed opacity-80">
            The global elite division is waiting for its next great manager. Will you lead the ecosystem or fall to the tactical masters?
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Button asChild size="lg" className="h-18 px-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl">
              <Link href="/#early-access">JOIN EARLY ACCESS</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-18 px-12 border-white/10 hover:bg-white/5 text-xl font-bold rounded-2xl">
              <Link href="/community">JOIN COMMUNITY</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
