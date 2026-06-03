"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Calendar, Clock, ArrowRight, Sparkles, BookOpen, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Gameplay Guides",
  "Strategy",
  "Ecosystem",
  "Updates",
  "Season Stories",
  "Developer Logs"
]

export const blogPosts = [
  {
    id: "hero-stadium",
    title: "IFM Genesis: The Architect's Guide to Club Ownership",
    subtitle:
      "Everything you need to know about the Phase 1 Genesis enrollment and building a digital football empire.",
    excerpt:
      "Learn the foundational principles of building a digital football empire in IFM. From License minting to squad registration.",
    category: "Gameplay Guides",
    date: "May 12, 2024",
    readTime: "8 min read",
    featured: true,

    image: PlaceHolderImages.find(i => i.id === "hero-stadium"),

    author: {
      name: "Marcus Thorne",
      role: "Founder & CEO",
      image: "https://picsum.photos/seed/marcus/100/100",
    },

    content: [
      {
        type: "paragraph",
        text: "Welcome to the first chapter of your dynasty. Club ownership in IFM is not just about a seat at the table; it's about owning a piece of the ecosystem's foundation. As an IFM manager, you aren't just playing a game—you are architecting a persistent digital legacy that evolves across seasons."
      },
      {
        type: "heading",
        text: "The Genesis License Protocol"
      },
      {
        type: "paragraph",
        text: "The core of your ownership is the Genesis License. This isn't a generic subscription; it's an immutable record of your club's birth."
      },
      {
        type: "visual",
        id: "mint-preview",
        caption:
          "Module Verification: The Genesis Minting process ensures unique club identifiers for every manager."
      },
      {
        type: "takeaways",
        title: "Key Onboarding Protocols",
        items: [
          "Secure your license during the 48-hour Genesis window.",
          "Register your club name on the global registry immediately.",
          "Activate your first scouting bot.",
          "Review the Division 8 league structure."
        ]
      }
    ]
  },

  {
    id: "tactical-board",
    title: "The 4-3-3 Meta: Tactical Masterclass for Season 1",
    subtitle:
      "A deep dive into the dominant formation of the preseason. How to set your defensive line and high-press triggers.",
    excerpt:
      "A deep dive into the dominant formation of the preseason. How to set your defensive line and high-press triggers.",
    category: "Strategy",
    date: "May 10, 2024",
    readTime: "12 min read",
    featured: true,

    image: PlaceHolderImages.find(i => i.id === "tactical-board"),

    author: {
      name: "David 'Gaffer' Chen",
      role: "Lead Game Engineer",
      image: "https://picsum.photos/seed/david/100/100",
    },

    content: [
      {
        type: "paragraph",
        text: "Tactical mastery is the ultimate currency in IFM."
      },
      {
        type: "heading",
        text: "The Neural Fatigue Variable"
      },
      {
        type: "paragraph",
        text: "The IFM Match Engine v2.4 introduces Neural Fatigue."
      },
      {
        type: "visual",
        id: "match-engine-live",
        caption:
          "Live heatmaps showing the dominance of the 4-3-3 transition phase."
      },
      {
        type: "takeaways",
        title: "Tactical Takeaways",
        items: [
          "Set High Press to 85%.",
          "CDM Work Rate should be 78+.",
          "Switch to 4-4-2 if possession drops below 40%."
        ]
      }
    ]
  },

  // token-visual
  // match-engine-live
  // scouting-ui
  // nova-league-board
]



export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  // Newsletter Validation States
  const [email, setEmail] = React.useState("")
  const [emailError, setEmailError] = React.useState("")
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const blogHeroImg = PlaceHolderImages.find(i => i.id === "blog-hero") || PlaceHolderImages.find(i => i.id === "stadium-light")

  // Input validation & sanitization logic for search entries
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Strip leading spaces and wild character injection variants to ensure safe data streaming
    const sanitizedValue = value.replace(/[^\w\s\-\.\'\’]/gi, "")
    setSearchQuery(sanitizedValue)
  }

  // Newsletter Validation Handler
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError("")

    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      setEmailError("Access credentials required. Email cannot be blank.")
      return
    }

    // Strict RFC 5322 compliant email regex matching high security parameters
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(trimmedEmail)) {
      setEmailError("Invalid data format. Please provide a real tactical routing address.")
      return
    }

    // If validation checks pass
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 4000) // reset success banner after window cooldown
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const safeTitle = post.title?.toLowerCase() || ""
    const safeQuery = searchQuery.trim().toLowerCase()
    return matchesCategory && safeTitle.includes(safeQuery)
  })

  const featuredPosts = filteredPosts.filter(p => p.featured)
  const regularPosts = filteredPosts.filter(p => !p.featured)

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] font-body selection:bg-accent selection:text-background">

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden min-h-[50vh] md:min-h-[55vh] flex items-center border-b border-white/5">
        <div className="absolute inset-0 z-0 w-full h-full">
          {blogHeroImg?.imageUrl && (
            <Image
              src={blogHeroImg.imageUrl}
              alt="IFM Intelligence Hub"
              fill
              priority
              className="object-cover w-full h-full opacity-60 object-center"
            />
          )}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/60 pointer-events-none mix-blend-color-dodge" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.2),transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#05070D] to-transparent pointer-events-none" />
          <div className="stadium-light-sweep opacity-30" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-8 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl shadow-2xl">
              <BookOpen className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" /> Intelligence Hub
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-[0.9] text-white drop-shadow-sm">
              IFM <span className="text-gradient-blue italic">INSIGHTS</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white font-light leading-relaxed max-w-2xl drop-shadow-md">
              Tactical guides, ecosystem updates, and developer logs from the forefront of the football simulation revolution.
            </p>

            <div className="pt-2 w-full max-w-md">
              <div className="relative w-full drop-shadow-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input 
                  type="text"
                  maxLength={60}
                  placeholder="Search by title..." 
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-12 h-12 md:h-14 w-full bg-black/40 border-white/20 rounded-2xl text-white text-sm placeholder:text-white/40 backdrop-blur-xl focus:border-primary/50 focus:bg-black/60 transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STICKY FILTER NAVIGATION */}
      <section className="sticky top-[72px] md:top-20 z-40 bg-[#05070D]/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] pb-1 native-scroll-momentum">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border",
                  activeCategory === cat 
                    ? "bg-primary text-white border-primary glow-blue" 
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP ARTICULAR GRID */}
      {featuredPosts.length > 0 && activeCategory === "All" && (
        <section className="py-12 md:py-20 relative overflow-hidden bg-white/[0.01]">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              <h2 className="text-xl md:text-2xl font-bold font-headline uppercase tracking-tighter text-white">
                Flagship <span className="text-accent italic">Intelligence</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.id}`} className="block h-full">
                    <GlassCard 
                      className="group p-0 border-white/10 h-full flex flex-col overflow-hidden"
                      glowColor={post.category === 'Strategy' ? 'blue' : 'gold'}
                    >
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                        {post.image?.imageUrl && (
                          <Image 
                            src={post.image.imageUrl} 
                            alt={post.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/40 to-transparent opacity-90" />
                        <div className="absolute top-4 left-4 md:top-6 md:left-6">
                          <Badge className="bg-primary/20 backdrop-blur-xl border-primary/40 text-primary uppercase tracking-widest text-[9px] md:text-[10px] px-3 py-0.5 md:px-4">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2 md:space-y-4">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-headline uppercase leading-tight tracking-tighter text-white group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-white/5">
                          <div className="flex flex-wrap items-center gap-4 text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5"><Calendar className="h-3 md:h-3.5 md:w-3.5 w-3" /> {post.date}</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-3 md:h-3.5 md:w-3.5 w-3" /> {post.readTime}</span>
                          </div>
                          <span className="text-primary group-hover:translate-x-1.5 transition-transform shrink-0">
                            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                          </span>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. MAIN ARTICLE FEED */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {regularPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: Math.min(i * 0.05, 0.3) }}
                >
                  <Link href={`/blog/${post.id}`} className="block h-full">
                    <GlassCard className="group p-0 border-white/5 bg-white/5 h-full flex flex-col hover:border-primary/30 overflow-hidden">
                      <div className="relative aspect-video w-full overflow-hidden">
                        {post.image?.imageUrl && (
                          <Image 
                            src={post.image.imageUrl} 
                            alt={post.title} 
                            fill 
                            className="object-cover transition-all duration-500 sm:grayscale group-hover:grayscale-0 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] to-transparent opacity-70" />
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-black/70 backdrop-blur-md text-[8px] border-white/10 uppercase tracking-widest px-2.5 py-0.5 text-white">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="text-lg font-bold font-headline leading-snug text-white group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-white/60 leading-relaxed line-clamp-3 font-light">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[9px] md:text-[10px] text-white/50 font-bold uppercase tracking-widest">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" /> {post.date}
                          </div>
                          <div className="flex items-center gap-1 text-white group-hover:text-primary transition-colors shrink-0">
                            READ <ChevronRight className="h-3 w-3" />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-24 md:py-40 text-center space-y-6 px-4">
              <div className="text-white/60 italic text-base md:text-xl">No intelligence found matching your search.</div>
              <Button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} variant="outline" className="border-white/10 text-white hover:bg-white/5 h-11 px-6 rounded-xl text-xs uppercase tracking-widest font-bold">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 5. NEWSLETTER INTEGRATION WITH INPUT VALIDATION UX */}
      <section className="py-20 md:py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-primary/5 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-8 md:space-y-10 relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-headline uppercase tracking-tighter text-white">
            SECURE THE <span className="text-gradient-blue italic">FEED</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto font-light leading-relaxed">
            Founding managers get intelligence reports delivered directly. No noise, just elite football strategy.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md md:max-w-lg mx-auto w-full space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 w-full items-start">
              <div className="w-full relative">
                <Input 
                  type="email"
                  placeholder="gaffer@stadium.club" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) setEmailError("") // clear error while typing
                  }}
                  className={cn(
                    "bg-white/5 border-white/10 h-12 md:h-14 rounded-xl text-white text-sm placeholder:text-white/30 w-full transition-all",
                    emailError && "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20 bg-red-950/10"
                  )} 
                />
              </div>
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-bold h-12 md:h-14 px-6 md:px-8 rounded-xl glow-blue uppercase tracking-widest text-[10px] md:text-xs shrink-0 w-full sm:w-auto transition-all"
              >
                Subscribe
              </Button>
            </div>

            {/* Realtime Feedback Ticker */}
            <AnimatePresence mode="fast">
              {emailError && (
                <motion.div 
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-xs text-red-400 font-medium justify-start px-2"
                >
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{emailError}</span>
                </motion.div>
              )}
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-xs text-emerald-400 font-medium justify-center px-2 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Channels encrypted. Welcome aboard, Gaffer. Check your terminal soon.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>

    </div>
  )
}