
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { 
  Rocket, ShieldCheck, Trophy, Target, 
  Coins, Zap, Play, LayoutDashboard, 
  ArrowRight, Loader2, Globe, Star,
  Shield, CheckCircle2, ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(2, "Please enter your country"),
  favoriteClub: z.string().min(2, "Please enter your favorite club"),
  wallet: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid wallet address").optional().or(z.literal("")),
})

type SignupData = z.infer<typeof signupSchema>

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

export default function EarlyAccessPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  // Assets
  const stadiumHero = PlaceHolderImages.find(i => i.id === "hero-stadium")
  const founderBadge = PlaceHolderImages.find(i => i.id === "nft-club-1")
  const dashboardPreview = PlaceHolderImages.find(i => i.id === "tactical-board")
  const rewardPreview = PlaceHolderImages.find(i => i.id === "rewards-visual")
  const matchPreview = PlaceHolderImages.find(i => i.id === "match-engine-live")
  const stadiumEvolution = PlaceHolderImages.find(i => i.id === "about-hero")
  const tokenVisual = PlaceHolderImages.find(i => i.id === "token-visual")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
    toast({
      title: "FOUNDING STATUS GRANTED",
      description: "Welcome to the IFM Universe, Manager.",
    })
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-background overflow-hidden selection:bg-accent selection:text-background">
      
      {/* 1. CINEMATIC HERO - THE CALL */}
<section className="relative min-h-[80vh] flex items-center justify-center border-b border-white/5 py-20">
  <div className="absolute inset-0 z-0">
    {stadiumHero && (
      <Image 
        src={stadiumHero.imageUrl} 
        alt="IFM Universe" 
        fill 
        className="object-cover"
        priority
      />
    )}
  </div>

  <div className="container relative z-10 mx-auto px-6 max-w-7xl">
    <motion.div 
      initial="initial"
      animate="animate"
      className="flex flex-col items-center text-center space-y-12"
    >
      <motion.div variants={fadeIn}>
        <Badge className="bg-accent/10 text-accent border-accent/30 px-10 py-3 uppercase tracking-[0.8em] text-[10px] font-bold rounded-full backdrop-blur-3xl glow-gold animate-pulse">
          Phase 1: Genesis Enrollment
        </Badge>
      </motion.div>
      
      <motion.h1 
        variants={fadeIn}
        className="text-6xl md:text-[10rem] font-bold font-headline tracking-tighter uppercase leading-[0.8]"
      >
        BECOME A <br />
        <span className="text-gradient-gold italic">FOUNDING MANAGER</span>
      </motion.h1>
      
      <motion.p 
        variants={fadeIn}
        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
      >
        The IFM football universe is expanding. Secure your license, register your club, and start building your legacy before the global kick-off.
      </motion.p>

      {/* Button sizing adjusted to be responsive/flexible */}
      <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-6 pt-10">
        <Button asChild size="lg" className="h-auto py-6 px-16 bg-accent hover:bg-accent/90 text-background font-bold rounded-2xl glow-gold text-xl uppercase tracking-widest">
          <Link href="#signup-form">SECURE ACCESS</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-auto py-6 px-16 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest backdrop-blur-xl">
          <Link href="/gameplay">WATCH GAMEPLAY</Link>
        </Button>
      </motion.div>

      <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-16 pt-16">
        {[
          { label: "FOUNDER SLOTS", value: "2,500" },
          { label: "Genesis Tier", value: "ALPHA" },
          { label: "Rewards Multiplier", value: "2.5x" }
        ].map((m, i) => (
          <div key={i} className="text-center space-y-2">
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{m.label}</div>
            <div className="text-2xl font-bold font-headline text-white">{m.value}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* 2. VALUE RECAP - THE ADVANTAGE */}
      <section className="py-32 relative bg-card/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <div className="space-y-12">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2">Founding Advantage</Badge>
                <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter leading-none">THE STRATEGIC <br /><span className="text-primary italic">EDGE</span></h2>
                <div className="space-y-8">
                  {[
                    { title: "Priority Progression", desc: "Gain 3 seasons of head-start progression in the league pyramid before public launch." },
                    { title: "Genesis Asset Multiplier", desc: "Founding Managers receive permanent +25% reward yields on all matchday achievements." },
                    { title: "Immutable Legacy", desc: "Your club name and history are permanently recorded on-chain with Founder's credentials." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                        <Star className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="font-bold text-lg uppercase tracking-tight">{item.title}</div>
                        <div className="text-muted-foreground font-light">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <GlassCard className="p-0 border-white/10 glow-gold overflow-hidden aspect-[4/5] relative" hoverable={false}>
                {founderBadge && (
                  <Image src={founderBadge.imageUrl} alt="Founder Badge" fill className="object-cover brightness-50" />
                )}
                <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent">
                  <div className="space-y-6">
                    <Badge className="bg-accent text-background font-bold px-6 py-2">GENESIS LICENSE v1.0</Badge>
                    <div className="p-6 bg-black/60 backdrop-blur-3xl rounded-2xl border border-white/10">
                      <div className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4">Ownership Verified</div>
                      <p className="text-sm font-light text-white/80 italic leading-relaxed">"This license grants the bearer permanent founding status and priority access to all future IFM expansions."</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. REWARDS PREVIEW */}
      <section className="py-32 relative overflow-hidden bg-accent/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 space-y-8">
             <h2 className="text-6xl md:text-8xl font-bold font-headline uppercase tracking-tighter leading-none">SEASONAL <span className="text-accent italic">REWARDS</span></h2>
             <p className="text-muted-foreground text-xl font-light max-w-2xl mx-auto">Founding managers are first in line for the seasonal treasury distributions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "League Dividends", desc: "Direct $IFM rewards based on final league standing each season.", icon: Coins },
              { title: "NFT Drop Priority", desc: "First access to limited edition academy prospect mints.", icon: Star },
              { title: "Governance Rights", desc: "Vote on ecosystem rules and treasury allocation proposals.", icon: Globe }
            ].map((r, i) => (
              <GlassCard key={i} className="p-10 border-white/5 hover:bg-accent/5 group" glowColor="gold">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-background transition-all">
                   <r.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold font-headline uppercase mb-4">{r.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{r.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE SIGNUP CEREMONY - CORE CONVERSION */}
      <section className="py-48 relative border-y border-white/5 overflow-hidden" id="signup-form">
        <div className="absolute inset-0 radial-glow-blue opacity-20" />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20 space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/30 px-8 py-3 uppercase tracking-[0.5em] text-[10px] font-bold">Registration Protocol</Badge>
            <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">REGISTER YOUR <br /><span className="text-primary italic">EMPIRE</span></h2>
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <GlassCard className="p-12 md:p-16 border-white/10 bg-card/60 relative overflow-hidden" glowColor="blue">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <Label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Full Name</Label>
                        <Input 
                          {...register("name")}
                          placeholder="Alex Ferguson" 
                          className="h-16 bg-white/5 border-white/10 rounded-2xl focus:border-primary/50 text-lg"
                        />
                        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <Label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Email Intelligence</Label>
                        <Input 
                          {...register("email")}
                          type="email"
                          placeholder="gaffer@ifm.club" 
                          className="h-16 bg-white/5 border-white/10 rounded-2xl focus:border-primary/50 text-lg"
                        />
                        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <Label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Base Operations (Country)</Label>
                        <Input 
                          {...register("country")}
                          placeholder="United Kingdom" 
                          className="h-16 bg-white/5 border-white/10 rounded-2xl focus:border-primary/50 text-lg"
                        />
                        {errors.country && <p className="text-xs text-destructive">{errors.country.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <Label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Favorite Football Club</Label>
                        <Input 
                          {...register("favoriteClub")}
                          placeholder="Manchester United" 
                          className="h-16 bg-white/5 border-white/10 rounded-2xl focus:border-primary/50 text-lg"
                        />
                        {errors.favoriteClub && <p className="text-xs text-destructive">{errors.favoriteClub.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Wallet Signature (Optional)</Label>
                      <Input 
                        {...register("wallet")}
                        placeholder="0x..." 
                        className="h-16 bg-white/5 border-white/10 rounded-2xl focus:border-primary/50 font-mono text-sm"
                      />
                      {errors.wallet && <p className="text-xs text-destructive">{errors.wallet.message}</p>}
                    </div>

                    <div className="pt-8">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-24 bg-primary hover:bg-primary/90 text-white font-headline text-3xl font-bold rounded-3xl glow-blue transition-all duration-500 uppercase tracking-tighter"
                      >
                        {isSubmitting ? (
                          <Loader2 className="h-8 w-8 animate-spin" />
                        ) : (
                          <span className="flex items-center gap-6">CLAIM FOUNDING STATUS <ArrowRight className="h-8 w-8" /></span>
                        )}
                      </Button>
                      <p className="text-center text-[10px] text-muted-foreground mt-8 font-bold uppercase tracking-[0.5em] opacity-60">
                        Securely stored on the IFM Neural Network • 256-Bit Encryption
                      </p>
                    </div>
                  </form>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-12"
              >
                <div className="h-32 w-32 bg-accent/20 border border-accent/40 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <CheckCircle2 className="h-16 w-16 text-accent" />
                </div>
                <h2 className="text-6xl md:text-8xl font-bold font-headline uppercase tracking-tighter leading-none">WELCOME, <br /><span className="text-gradient-gold italic">FOUNDER</span></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                  Your registration has been verified. You have been granted Genesis Tier status. Check your intelligence feed (email) for the next phase of onboarding.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
                  <Button asChild size="lg" className="h-20 px-16 bg-primary text-white font-bold rounded-2xl uppercase tracking-widest">
                    <Link href="/gameplay">EXPLORE SYSTEMS</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-20 px-16 border-white/10 font-bold rounded-2xl uppercase tracking-widest">
                    <Link href="/#early-access">JOIN DISCORD</Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. FINAL MISSION CLOSE */}
      <section className="py-40 relative text-center">
        <div className="container relative z-10 mx-auto px-6 max-w-5xl space-y-12">
           <h2 className="text-5xl md:text-8xl font-bold font-headline uppercase tracking-tighter leading-none">YOUR LEGACY <br /><span className="text-gradient-blue italic">BEGINS NOW.</span></h2>
           <p className="text-muted-foreground text-xl font-light">Join 85,000+ managers building the future of digital football.</p>
           <div className="flex justify-center gap-8 pt-8">
              <div className="flex -space-x-4">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-12 w-12 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                       <Image src={`https://picsum.photos/seed/face-${i}/100/100`} alt="User" width={100} height={100} className="object-cover" />
                    </div>
                 ))}
              </div>
              <div className="text-left">
                 <div className="text-lg font-bold text-white">85.4K+ Managers Joined</div>
                 <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">LIVE WORLDWIDE FEED</div>
              </div>
           </div>
        </div>
      </section>

    </div>
  )
}
