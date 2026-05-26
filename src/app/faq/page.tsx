"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronDown, Search, HelpCircle, 
  Rocket, Shield, Trophy, Coins, 
  Zap, LayoutDashboard, Microscope, 
  Globe, ArrowRight, Activity, Target
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

// FAQ Categories with icons and associated visual proof assets
const faqCategories = [
  { id: "general", name: "General", icon: Shield, image: "hero-stadium" },
  { id: "gameplay", name: "Gameplay", icon: Activity, image: "match-engine-live" },
  { id: "club", name: "Club & Squad", icon: Target, image: "tactical-board" },
  { id: "development", name: "Player Development", icon: Microscope, image: "training-facility" },
  { id: "stadium", name: "Stadium & Growth", icon: LayoutDashboard, image: "hero-stadium" },
  { id: "rewards", name: "Rewards", icon: Trophy, image: "rewards-visual" },
  { id: "ownership", name: "NFT & Ownership", icon: Coins, image: "player-card-gold" },
  { id: "ecosystem", name: "Ecosystem", icon: Globe, image: "token-visual" },
  { id: "early-access", name: "Early Access", icon: Zap, image: "mint-preview" },
]

const faqEntries = [
  {
    category: "general",
    q: "What is Invincible Football Manager (IFM)?",
    a: "IFM is a next-generation football management ecosystem built on blockchain technology. It combines deep tactical simulation with true digital ownership of clubs, players, and assets. Unlike traditional games, every decision you make contributes to a persistent on-chain legacy."
  },
  {
    category: "general",
    q: "Is IFM free to play?",
    a: "Yes, IFM offers a free-to-play entry tier. However, to compete in the professional league pyramid and earn seasonal $IFM rewards, managers typically require a Club License NFT which validates their status in the ecosystem."
  },
  {
    category: "gameplay",
    q: "How do matches work?",
    a: "Matches are simulated using our proprietary Neural Match Engine. It processes 15,000+ tactical variables per second, including player fatigue, psychological states, and tactical overrides. You don't just watch; you manage the flow of the game."
  },
  {
    category: "gameplay",
    q: "Is gameplay real-time?",
    a: "Yes. Matches occur at scheduled times based on the division cycle, allowing managers to perform real-time tactical adjustments, substitutions, and formation shifts to counter their opponents' strategies."
  },
  {
    category: "club",
    q: "How do I build my squad?",
    a: "You build your squad through scouting, academy development, and the transfer market. Every player has unique stats and potential that can be developed over multiple seasons of persistent competition."
  },
  {
    category: "development",
    q: "What is the Academy?",
    a: "The Academy is your primary source of new talent. Every season, your academy generates unique youth prospects as NFTs. It's up to you to identify the 'hidden gems' and develop them into global superstars."
  },
  {
    category: "ownership",
    q: "What are NFTs in IFM?",
    a: "NFTs in IFM are functional gameplay assets. This includes your Club License, Player Cards, and Stadium Infrastructure. They grant you true ownership, meaning your progress is immutable, verifiable, and tradable."
  },
  {
    category: "early-access",
    q: "Why join early?",
    a: "Early access managers (Founding Managers) receive exclusive Genesis drops, higher reward multipliers for the first three seasons, and priority whitelisting for the Phase 2 License Mint event."
  }
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = React.useState("general")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const filteredFaqs = faqEntries.filter(entry => {
    const matchesCategory = entry.category === activeCategory
    const matchesSearch = entry.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         entry.a.toLowerCase().includes(searchQuery.toLowerCase())
    return searchQuery ? (matchesSearch) : (matchesCategory && matchesSearch)
  })

  const currentCategory = faqCategories.find(c => c.id === activeCategory)
  const categoryImage = PlaceHolderImages.find(img => img.id === currentCategory?.image)

  return (
    <div className="flex flex-col w-full min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-white">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-48 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="stadium-light-sweep opacity-30" />
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
              <HelpCircle className="h-3.5 w-3.5" /> Clarity Protocol
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
              INTELLIGENCE <br /><span className="text-gradient-blue italic">BASE</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
              Master the systems, remove the friction, and start your dynasty. The IFM intelligence base provides the clarity needed to dominate the football universe.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="h-16 px-10 bg-primary hover:bg-primary/90 text-white glow-blue font-bold rounded-2xl uppercase tracking-widest text-xs">
                <Link href="/#early-access">Join Early Access</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 border-white/10 hover:bg-white/5 font-bold rounded-2xl uppercase tracking-widest text-xs">
                <Link href="/gameplay">Watch Gameplay</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTERACTIVE SUPPORT SEARCH */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-b border-white/5 py-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search clarity database..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl text-lg focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border",
                    activeCategory === cat.id && !searchQuery
                      ? "bg-primary text-white border-primary glow-blue" 
                      : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:text-white"
                  )}
                >
                  <cat.icon className="h-3.5 w-3.5" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTENT AREA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Visual Proof Layer - Changes with Category */}
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <GlassCard className="p-0 border-white/10 overflow-hidden glow-blue aspect-[4/5] relative" hoverable={false}>
                {categoryImage && (
                  <Image 
                    src={categoryImage.imageUrl} 
                    alt={currentCategory?.name || "FAQ Visual"} 
                    fill 
                    className="object-cover brightness-50"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="space-y-4">
                    <Badge className="bg-primary/20 backdrop-blur-md text-primary border-primary/30 uppercase tracking-[0.3em] px-4">
                      Structural Validation: {currentCategory?.name}
                    </Badge>
                    <h3 className="text-3xl font-bold font-headline uppercase leading-tight">
                      Visualizing the <br /><span className="text-gradient-blue italic">{currentCategory?.name} Layer</span>
                    </h3>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Accordion Clarity System */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-accent/30 text-accent uppercase tracking-[0.2em] px-4 py-1">
                  Objection Handling
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-tighter">
                  {searchQuery ? "Search Results" : currentCategory?.name} <span className="text-accent italic">Intelligence</span>
                </h2>
              </div>

              <div className="space-y-4 pt-8">
                <AnimatePresence mode="popLayout">
                  {filteredFaqs.map((faq, i) => (
                    <motion.div
                      key={faq.q}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      layout
                    >
                      <GlassCard 
                        className={cn(
                          "border-white/5 transition-all duration-300",
                          openIndex === i && "border-primary/50 bg-primary/5"
                        )}
                        hoverable={false}
                      >
                        <button 
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="w-full p-8 flex items-center justify-between text-left group"
                        >
                          <div className="flex items-center gap-6">
                            <div className={cn(
                              "h-12 w-12 rounded-xl flex items-center justify-center transition-all",
                              openIndex === i ? "bg-primary text-white" : "bg-white/5 text-primary"
                            )}>
                              <HelpCircle className="h-6 w-6" />
                            </div>
                            <h4 className="text-xl font-bold uppercase tracking-tight">{faq.q}</h4>
                          </div>
                          <ChevronDown className={cn("h-6 w-6 text-muted-foreground transition-transform duration-500", openIndex === i && "rotate-180 text-primary")} />
                        </button>
                        
                        <AnimatePresence>
                          {openIndex === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-24 pb-8 text-muted-foreground leading-relaxed text-lg font-light border-t border-white/5 pt-6">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </GlassCard>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {filteredFaqs.length === 0 && (
                  <div className="py-20 text-center space-y-6">
                    <div className="text-muted-foreground italic text-xl">No protocol data matches your current query.</div>
                    <Button onClick={() => { setSearchQuery(""); setActiveCategory("general"); }} variant="outline" className="border-white/10">
                      Reset Intelligence Search
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CONVERSION ANCHOR */}
      <section className="py-40 bg-card/10 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold font-headline uppercase tracking-tighter leading-none">
            PROTOCOL COMPLETE. <br /><span className="text-gradient-blue italic">OWN YOUR LEGACY.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Confusion has been eliminated. The IFM universe is ready for your leadership. Founding Manager enrollment is open for a limited window.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Button asChild size="lg" className="h-20 px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl uppercase tracking-widest">
              <Link href="/#early-access">Start Your Club</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-20 px-16 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-xl uppercase tracking-widest">
              <Link href="/gameplay">Watch Gameplay</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
