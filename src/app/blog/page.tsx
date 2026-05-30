"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Calendar, Clock, ArrowRight, Sparkles, BookOpen, ChevronRight } from "lucide-react"
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

const blogPosts = [
  {
    id: 1,
    title: "IFM Genesis: The Architect's Guide to Club Ownership",
    excerpt: "Learn the foundational principles of building a digital football empire in IFM. From License minting to squad registration.",
    category: "Gameplay Guides",
    date: "May 12, 2024",
    readTime: "8 min read",
    image: PlaceHolderImages.find(i => i.id === "blog-thumb-1"),
    featured: true
  },
  {
    id: 2,
    title: "The 4-3-3 Meta: Tactical Masterclass for Season 1",
    excerpt: "A deep dive into the dominant formation of the preseason. How to set your defensive line and high-press triggers.",
    category: "Strategy",
    date: "May 10, 2024",
    readTime: "12 min read",
    image: PlaceHolderImages.find(i => i.id === "blog-thumb-2"),
    featured: true
  },
  {
    id: 3,
    title: "Understanding $IFM: The Utility Protocol Breakdown",
    excerpt: "How the ecosystem token powers club progression, stadium upgrades, and the transfer market without speculation.",
    category: "Ecosystem",
    date: "May 08, 2024",
    readTime: "10 min read",
    image: PlaceHolderImages.find(i => i.id === "blog-thumb-3"),
    featured: false
  },
  {
    id: 4,
    title: "Match Engine v2.4: Neural Fatigue & Ball Physics",
    excerpt: "Engineering the most realistic football simulation on the blockchain. Our latest dev log on matchday authenticity.",
    category: "Developer Logs",
    date: "May 05, 2024",
    readTime: "15 min read",
    image: PlaceHolderImages.find(i => i.id === "blog-thumb-4"),
    featured: false
  },
  {
    id: 5,
    title: "Scouting the Alpha Window: Finding Undervalued Talent",
    excerpt: "Strategic insights for the transfer market. How to use neural scouting bots to identify youth prospects early.",
    category: "Strategy",
    date: "May 02, 2024",
    readTime: "6 min read",
    image: PlaceHolderImages.find(i => i.id === "scouting-ui"),
    featured: false
  },
  {
    id: 6,
    title: "The Road to Division 1: A Manager's Journey",
    excerpt: "Exclusive interview with the top-ranked manager from the closed beta. Discipline, data, and digital dominance.",
    category: "Season Stories",
    date: "Apr 28, 2024",
    readTime: "9 min read",
    image: PlaceHolderImages.find(i => i.id === "esports-tournament"),
    featured: false
  }
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  // Fetch the strategic blog hero visual asset
  const blogHeroImg = PlaceHolderImages.find(i => i.id === "blog-hero") || PlaceHolderImages.find(i => i.id === "stadium-light")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(p => p.featured)
  const regularPosts = filteredPosts.filter(p => !p.featured)

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#05070D] font-body selection:bg-accent selection:text-background">

      {/* 1. CINEMATIC BLOG HERO */}
      <section className="relative pt-48 pb-20 overflow-hidden min-h-[55vh] flex items-center border-b border-white/5">
        
        {/* PREMIUM FROSTED GLASS BACKGROUND INTERFACE */}
        <div className="absolute inset-0 z-0 w-full h-full">
          {blogHeroImg?.imageUrl && (
            <Image
              src={blogHeroImg.imageUrl}
              alt="IFM Intelligence Hub"
              fill
              priority
              className="object-fill md:object-cover w-full h-full opacity-60"
            />
          )}
          {/* Frosted glass backdrop layer */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md pointer-events-none" />
          {/* Dynamic tactical gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 pointer-events-none mix-blend-color-dodge" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.2),transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#05070D] to-transparent pointer-events-none" />
          <div className="stadium-light-sweep opacity-30" />
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl shadow-2xl">
              <BookOpen className="h-3.5 w-3.5 text-primary" /> Intelligence Hub
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-[0.8] text-white drop-shadow-sm">
              IFM <span className="text-gradient-blue italic">INSIGHTS</span>
            </h1>
            <p className="text-xl text-white font-light leading-relaxed max-w-2xl drop-shadow-md">
              Tactical guides, ecosystem updates, and developer logs from the forefront of the football simulation revolution.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <div className="relative w-full sm:w-96 drop-shadow-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
                <Input 
                  placeholder="Search intelligence database..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.value)}
                  className="pl-12 h-14 bg-black/40 border-white/20 rounded-2xl text-white placeholder:text-white/40 backdrop-blur-xl focus:border-primary/50 focus:bg-black/60 transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="sticky top-20 z-40 bg-[#05070D]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border",
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

      {/* 3. FEATURED ARTICLES GRID */}
      {featuredPosts.length > 0 && activeCategory === "All" && (
        <section className="py-20 relative overflow-hidden bg-white/[0.01]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center gap-4 mb-12">
              <Sparkles className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold font-headline uppercase tracking-tighter text-white">Flagship <span className="text-accent italic">Intelligence</span></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <GlassCard 
                      className="group p-0 border-white/10 h-full flex flex-col"
                      glowColor={post.category === 'Strategy' ? 'blue' : 'gold'}
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        {post.image?.imageUrl && (
                          <Image 
                            src={post.image.imageUrl} 
                            alt={post.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-transparent opacity-80" />
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-primary/20 backdrop-blur-xl border-primary/40 text-primary uppercase tracking-widest text-[10px] px-4">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold font-headline uppercase leading-none tracking-tighter text-white group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                          <div className="flex items-center gap-6 text-[10px] font-bold text-white/50 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                            <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                          </div>
                          <span className="text-primary group-hover:translate-x-2 transition-transform">
                            <ArrowRight className="h-5 w-5" />
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
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {regularPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <GlassCard className="group p-0 border-white/5 bg-white/5 h-full flex flex-col hover:border-primary/30">
                      <div className="relative aspect-video overflow-hidden">
                        {post.image?.imageUrl && (
                          <Image 
                            src={post.image.imageUrl} 
                            alt={post.title} 
                            fill 
                            className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] to-transparent opacity-60" />
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-black/60 backdrop-blur-md text-[8px] border-white/10 uppercase tracking-widest px-3 text-white">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h4 className="text-xl font-bold font-headline leading-tight text-white group-hover:text-primary transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-white/60 leading-relaxed line-clamp-3 font-light">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[10px] text-white/50 font-bold uppercase tracking-widest">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-3 w-3" /> {post.date}
                          </div>
                          <div className="flex items-center gap-2 text-white group-hover:text-primary transition-colors">
                            READ MORE <ChevronRight className="h-3 w-3" />
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
            <div className="py-40 text-center space-y-6">
              <div className="text-white/60 italic text-xl">No intelligence found matching your current filters.</div>
              <Button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} variant="outline" className="border-white/10 text-white hover:bg-white/5">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 5. NEWSLETTER INTEGRATION */}
      <section className="py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-10 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-headline uppercase tracking-tighter text-white">SECURE THE <span className="text-gradient-blue italic">FEED</span></h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto font-light">
            Founding managers get intelligence reports delivered directly. No noise, just elite football strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input placeholder="gaffer@stadium.club" className="bg-white/5 border-white/10 h-14 rounded-xl text-white placeholder:text-white/30" />
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-xl glow-blue uppercase tracking-widest text-xs">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
