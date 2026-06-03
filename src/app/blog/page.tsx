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

// Helper to ensure consistency across the app
const getImg = (id: string) => PlaceHolderImages.find((i) => i.id === id)

const blogPosts = [
  {
    id: 1,
    title: "IFM Genesis: The Architect's Guide to Club Ownership",
    excerpt: "Learn the foundational principles of building a digital football empire in IFM.",
    category: "Gameplay Guides",
    date: "May 12, 2024",
    readTime: "8 min read",
    imageId: "tactical-interface",
    featured: true
  },
  {
    id: 2,
    title: "The 4-3-3 Meta: Tactical Masterclass for Season 1",
    excerpt: "A deep dive into the dominant formation of the preseason.",
    category: "Strategy",
    date: "May 10, 2024",
    readTime: "12 min read",
    imageId: "alpha-tactics-grid",
    featured: true
  },
  {
    id: 3,
    title: "Understanding $IFM: The Utility Protocol Breakdown",
    excerpt: "How the ecosystem token powers club progression and the transfer market.",
    category: "Ecosystem",
    date: "May 08, 2024",
    readTime: "10 min read",
    imageId: "token-reward",
    featured: false
  },
  {
    id: 4,
    title: "Match Engine v2.4: Neural Fatigue & Ball Physics",
    excerpt: "Engineering the most realistic football simulation on the blockchain.",
    category: "Developer Logs",
    date: "May 05, 2024",
    readTime: "15 min read",
    imageId: "simulation-engine",
    featured: false
  },
  {
    id: 5,
    title: "Scouting the Alpha Window: Finding Undervalued Talent",
    excerpt: "Strategic insights for using neural scouting bots to identify youth prospects.",
    category: "Strategy",
    date: "May 02, 2024",
    readTime: "6 min read",
    imageId: "scouting-ui",
    featured: false
  },
  {
    id: 6,
    title: "The Road to Division 1: A Manager's Journey",
    excerpt: "Exclusive interview with the top-ranked manager from the closed beta.",
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

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const safeTitle = post.title.toLowerCase()
    return matchesCategory && safeTitle.includes(searchQuery.toLowerCase())
  })

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D]">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          {blogHero && <Image src={blogHero.imageUrl} alt={blogHero.description} fill className="object-cover opacity-40" priority />}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] to-transparent" />
        </div>
        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-white">
            IFM <span className="text-primary italic">INSIGHTS</span>
          </h1>
          <Input 
            className="mt-8 max-w-md bg-black/40 border-white/20 text-white" 
            placeholder="Search tactical logs..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* 2. GRID */}
      <section className="py-20 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const img = getImg(post.imageId)
            return (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <GlassCard className="h-full overflow-hidden p-0 group">
                  <div className="relative aspect-video">
                    {img && <Image src={img.imageUrl} alt={img.description} fill className="object-cover group-hover:scale-105 transition-transform" />}
                  </div>
                  <div className="p-6">
                    <Badge className="mb-2">{post.category}</Badge>
                    <h3 className="text-xl font-bold text-white">{post.title}</h3>
                  </div>
                </GlassCard>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
