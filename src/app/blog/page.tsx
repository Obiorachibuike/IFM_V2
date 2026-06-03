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

// Centralized image helper for total consistency across the application
const getImg = (id: string) => PlaceHolderImages.find((i) => i.id === id)

const categories = [
  "All",
  "Gameplay Guides",
  "Strategy",
  "Ecosystem",
  "Updates",
  "Season Stories",
  "Developer Logs"
]

const blogPosts = [
  {
    id: 1,
    title: "IFM Genesis: The Architect's Guide to Club Ownership",
    excerpt: "Learn the foundational principles of building a digital football empire in IFM. From License minting to squad registration.",
    category: "Gameplay Guides",
    date: "May 12, 2024",
    readTime: "8 min read",
    imageId: "tactical-interface",
    featured: true
  },
  {
    id: 2,
    title: "The 4-3-3 Meta: Tactical Masterclass for Season 1",
    excerpt: "A deep dive into the dominant formation of the preseason. How to set your defensive line and high-press triggers.",
    category: "Strategy",
    date: "May 10, 2024",
    readTime: "12 min read",
    imageId: "alpha-tactics-grid",
    featured: true
  },
  {
    id: 3,
    title: "Understanding $IFM: The Utility Protocol Breakdown",
    excerpt: "How the ecosystem token powers club progression, stadium upgrades, and the transfer market without speculation.",
    category: "Ecosystem",
    date: "May 08, 2024",
    readTime: "10 min read",
    imageId: "token-reward",
    featured: false
  },
  {
    id: 4,
    title: "Match Engine v2.4: Neural Fatigue & Ball Physics",
    excerpt: "Engineering the most realistic football simulation on the blockchain. Our latest dev log on matchday authenticity.",
    category: "Developer Logs",
    date: "May 05, 2024",
    readTime: "15 min read",
    imageId: "simulation-engine",
    featured: false
  },
  {
    id: 5,
    title: "Scouting the Alpha Window: Finding Undervalued Talent",
    excerpt: "Strategic insights for the transfer market. How to use neural scouting bots to identify youth prospects early.",
    category: "Strategy",
    date: "May 02, 2024",
    readTime: "6 min read",
    imageId: "scouting-ui",
    featured: false
  },
  {
    id: 6,
    title: "The Road to Division 1: A Manager's Journey",
    excerpt: "Exclusive interview with the top-ranked manager from the closed beta. Discipline, data, and digital dominance.",
    category: "Season Stories",
    date: "Apr 28, 2024",
    readTime: "9 min read",
    imageId: "nova-league-board",
    featured: false
  }
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [emailError, setEmailError] = React.useState("")
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const blogHero = getImg("blog-hero")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const sanitizedValue = value.replace(/[^\w\s\-\.\'\’]/gi, "")
    setSearchQuery(sanitizedValue)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError("")
    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      setEmailError("Access credentials required. Email cannot be blank.")
      return
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(trimmedEmail)) {
      setEmailError("Invalid data format. Please provide a real tactical routing address.")
      return
    }
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 4000)
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
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden min-h-[50vh] md:min-h-[55vh] flex items-center border-b border-white/5">
        <div className="absolute inset-0 z-0 w-full h-full">
          {blogHero && (
            <Image
              src={blogHero.imageUrl}
              alt={blogHero.description}
              fill
              priority
              className="object-cover w-full h-full opacity-60 object-center"
            />
          )}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/60 pointer-events-none mix-blend-color-dodge" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 md:space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl">
              <BookOpen className="h-3 w-3 text-primary" /> Intelligence Hub
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-[0.9] text-white">
              IFM <span className="text-gradient-blue italic">INSIGHTS</span>
            </h1>
            <div className="pt-2 w-full max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input type="text" maxLength={60} placeholder="Search by title..." value={searchQuery} onChange={handleSearchChange} className="pl-12 h-12 w-full bg-black/40 border-white/20 rounded-2xl text-white text-sm backdrop-blur-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-[72px] md:top-20 z-40 bg-[#05070D]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={cn("px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border", activeCategory === cat ? "bg-primary text-white border-primary" : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10")}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && activeCategory === "All" && (
        <section className="py-20 bg-white/[0.01]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {featuredPosts.map((post) => {
                const img = getImg(post.imageId)
                return (
                  <Link href={`/blog/${post.id}`} key={post.id}>
                    <GlassCard className="group p-0 overflow-hidden h-full">
                      <div className="relative aspect-[16/9] w-full">
                        {img && <Image src={img.imageUrl} alt={img.description} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />}
                      </div>
                      <div className="p-8 space-y-4">
                        <Badge className="bg-primary/20 text-primary">{post.category}</Badge>
                        <h3 className="text-3xl font-bold font-headline uppercase text-white">{post.title}</h3>
                        <p className="text-white/60 text-sm">{post.excerpt}</p>
                      </div>
                    </GlassCard>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularPosts.map((post) => {
              const img = getImg(post.imageId)
              return (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <GlassCard className="p-0 overflow-hidden group h-full">
                    <div className="relative aspect-video">
                      {img && <Image src={img.imageUrl} alt={img.description} fill className="object-cover transition-all group-hover:scale-105" />}
                    </div>
                    <div className="p-6 space-y-3">
                      <Badge className="text-[8px]">{post.category}</Badge>
                      <h4 className="font-bold text-white leading-snug">{post.title}</h4>
                    </div>
                  </GlassCard>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
