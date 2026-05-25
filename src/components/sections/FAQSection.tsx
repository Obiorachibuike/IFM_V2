
"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, HelpCircle } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const faqData = [
  {
    category: "general",
    q: "What is Invincible Football Manager (IFM)?",
    a: "IFM is a next-generation football management ecosystem built on blockchain technology. It combines deep tactical simulation with true digital ownership of clubs, players, and assets."
  },
  {
    category: "gameplay",
    q: "How does the match engine work?",
    a: "Our proprietary match engine processes over 15,000 tactical variables per cycle, simulating realistic player movements, fatigue, and tactical adjustments in real-time."
  },
  {
    category: "ownership",
    q: "What do I actually own as a manager?",
    a: "As an IFM manager, you own your Club License, Player Contracts, and Stadium Assets as verified NFTs on the blockchain, giving you permanent control and tradable value."
  },
  {
    category: "token",
    q: "What is the utility of the $IFM token?",
    a: "The $IFM token powers the entire ecosystem, used for club operations, transfer market fees, tournament entry, and decentralized governance voting."
  },
  {
    category: "genesis",
    q: "When is the Genesis NFT collection launch?",
    a: "The Genesis 'Founding Manager' collection is slated for Phase 2. Whitelisted applicants from our early access program will receive priority access."
  },
]

type Category = "all" | "general" | "gameplay" | "ownership" | "token" | "genesis"

export function FAQSection() {
  const [activeCategory, setActiveCategory] = React.useState<Category>("all")
  const [search, setSearch] = React.useState("")
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    const matchesSearch = faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-ifm-blue/30 text-ifm-blue uppercase tracking-[0.4em] px-6 py-2">
            Intelligence Base
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">
            PROTOCOL <span className="text-ifm-blue italic">INTEL</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search intelligence database..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl text-lg"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {["all", "general", "gameplay", "ownership", "token", "genesis"].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as Category)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all",
                  activeCategory === cat 
                    ? "bg-ifm-blue text-white border-ifm-blue glow-blue" 
                    : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
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
                    openIndex === i && "border-ifm-blue/50 bg-ifm-blue/5"
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
                        openIndex === i ? "bg-ifm-blue text-white" : "bg-white/5 text-ifm-blue"
                      )}>
                        <HelpCircle className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-bold uppercase tracking-tight">{faq.q}</h4>
                    </div>
                    <ChevronDown className={cn("h-6 w-6 text-muted-foreground transition-transform duration-500", openIndex === i && "rotate-180 text-ifm-blue")} />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-24 pb-8 text-muted-foreground leading-relaxed text-lg font-light">
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
            <div className="text-center py-20 text-muted-foreground italic">
              No intelligence found matching your query.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
