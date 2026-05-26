
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { 
  ArrowLeft, Calendar, Clock, Share2, 
  Bookmark, ChevronRight, Sparkles, 
  Target, ShieldCheck, Trophy, Zap, 
  BarChart3, Microscope, LayoutDashboard
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

// Extended post data for the detail view
const detailedPosts = [
  {
    id: 1,
    title: "IFM Genesis: The Architect's Guide to Club Ownership",
    subtitle: "Everything you need to know about the Phase 1 Genesis enrollment and building a digital football empire.",
    category: "Gameplay Guides",
    date: "May 12, 2024",
    readTime: "8 min read",
    author: { name: "Marcus Thorne", role: "Founder & CEO", image: "https://picsum.photos/seed/marcus/100/100" },
    heroImage: "hero-stadium",
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
        text: "The core of your ownership is the Genesis License. This isn't a generic subscription; it's an immutable record of your club's birth. Holders of this license receive permanent 'Founding Status', which unlocks unique visual identifiers, higher reward multipliers, and priority access to all future expansion modules."
      },
      {
        type: "visual",
        id: "mint-preview",
        caption: "Module Verification: The Genesis Minting process ensures unique club identifiers for every manager."
      },
      {
        type: "takeaways",
        title: "Key Onboarding Protocols",
        items: [
          "Secure your license during the 48-hour Genesis window.",
          "Register your club name on the global registry immediately.",
          "Activate your first scouting bot to identify initial academy prospects.",
          "Review the Division 8 league structure for Season 1 orientation."
        ]
      },
      {
        type: "paragraph",
        text: "In the following weeks, we will be rolling out the first tactical hubs. Your focus during Genesis should be on squad architecture and long-term planning. The decisions you make now will ripple through the next three seasons of play."
      }
    ]
  },
  {
    id: 2,
    title: "The 4-3-3 Meta: Tactical Masterclass for Season 1",
    subtitle: "A deep dive into the dominant formation of the preseason. How to set your defensive line and high-press triggers.",
    category: "Strategy",
    date: "May 10, 2024",
    readTime: "12 min read",
    author: { name: "David 'Gaffer' Chen", role: "Lead Game Engineer", image: "https://picsum.photos/seed/david/100/100" },
    heroImage: "tactical-board",
    content: [
      {
        type: "paragraph",
        text: "Tactical mastery is the ultimate currency in IFM. While squad quality matters, the ability to read the match engine and adjust triggers in real-time is what separates the elite from the average. In Season 1, the 4-3-3 'Modern Press' meta has emerged as the most effective counter to traditional low-block systems."
      },
      {
        type: "heading",
        text: "The Neural Fatigue Variable"
      },
      {
        type: "paragraph",
        text: "The IFM Match Engine v2.4 introduces Neural Fatigue. This means players don't just lose physical stamina; their decision-making accuracy drops if they are isolated for long periods. The 4-3-3 formation minimizes isolation by creating constant passing triangles in the middle third."
      },
      {
        type: "visual",
        id: "match-engine-live",
        caption: "Live heatmaps showing the dominance of the 4-3-3 transition phase in recent simulation cycles."
      },
      {
        type: "takeaways",
        title: "Tactical Takeaways",
        items: [
          "Set your 'High Press' trigger to 85% physical intensity for the first 20 minutes.",
          "Ensure your CDM has a 'Work Rate' rating of at least 78 to cover the defensive gaps.",
          "Use 'Real-time Overrides' to switch to a 4-4-2 if your possession drops below 40%."
        ]
      }
    ]
  }
]

export default function BlogDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  
  // Find the post, default to the first one if not found for the demo
  const post = detailedPosts.find(p => p.id === id) || detailedPosts[0]
  const heroImg = PlaceHolderImages.find(img => img.id === post.heroImage)

  return (
    <main className="flex flex-col w-full min-h-screen bg-background">
      
      {/* 1. CINEMATIC INTRO HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-primary/10 z-[1]" />
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt={post.title} 
              fill 
              className="object-cover grayscale-[0.2] brightness-[0.4]"
              priority
            />
          )}
          <div className="stadium-light-sweep" />
        </div>

        <div className="container relative z-20 mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Intelligence Feed</span>
            </Link>
            
            <div className="space-y-4">
              <Badge className="bg-primary/20 backdrop-blur-xl border-primary/40 text-primary uppercase tracking-widest text-[10px] px-6 py-1.5">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tighter uppercase leading-[0.9]">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                {post.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-white/10">
                  <Image src={post.author.image} alt={post.author.name} width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase">{post.author.name}</div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-8 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 gap-16">
            
            {/* Dynamic Content Sections */}
            {post.content.map((section, idx) => {
              if (section.type === "paragraph") {
                return (
                  <motion.p 
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xl text-muted-foreground leading-relaxed font-light"
                  >
                    {section.text}
                  </motion.p>
                )
              }
              if (section.type === "heading") {
                return (
                  <motion.h2 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-headline font-bold uppercase tracking-tighter mt-8"
                  >
                    {section.text}
                  </motion.h2>
                )
              }
              if (section.type === "visual") {
                const visualImg = PlaceHolderImages.find(img => img.id === section.id)
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <GlassCard className="p-0 border-white/10 glow-blue overflow-hidden aspect-video relative" hoverable={false}>
                      {visualImg && (
                        <Image src={visualImg.imageUrl} alt={section.caption || ""} fill className="object-cover brightness-75" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-6 left-8 flex items-center gap-3">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Protocol Visualization</span>
                      </div>
                    </GlassCard>
                    <p className="text-sm text-muted-foreground italic font-light pl-4 border-l-2 border-primary/30">
                      {section.caption}
                    </p>
                  </motion.div>
                )
              }
              if (section.type === "takeaways") {
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard className="p-12 border-accent/20 bg-accent/5" glowColor="gold" hoverable={false}>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                          <Target className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-headline uppercase tracking-tight">{section.title}</h3>
                      </div>
                      <ul className="space-y-4">
                        {section.items?.map((item, i) => (
                          <li key={i} className="flex gap-4 text-lg text-white/80 font-light">
                            <span className="text-accent font-bold">0{i+1}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </motion.div>
                )
              }
              return null
            })}

            {/* Author Footer & Share */}
            <div className="pt-20 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6">
                <Button variant="outline" className="border-white/10 rounded-xl gap-2 hover:bg-white/5">
                  <Share2 className="h-4 w-4" /> Share Report
                </Button>
                <Button variant="outline" className="border-white/10 rounded-xl gap-2 hover:bg-white/5">
                  <Bookmark className="h-4 w-4" /> Save to Vault
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Verified Intelligence Feed</span>
                <ShieldCheck className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED INTELLIGENCE */}
      <section className="py-24 bg-card/5 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-headline font-bold uppercase tracking-tighter">Related <span className="text-primary italic">Intelligence</span></h3>
            <Button asChild variant="link" className="text-primary uppercase tracking-widest text-[10px] font-bold">
              <Link href="/blog">View All Articles <ChevronRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedPosts.slice(0, 2).map((p) => (
              <Link key={p.id} href={`/blog/${p.id}`}>
                <GlassCard className="group p-8 border-white/5 bg-white/5 hover:border-primary/30 h-full">
                  <div className="space-y-4">
                    <Badge className="bg-white/5 text-muted-foreground uppercase text-[8px] tracking-widest">{p.category}</Badge>
                    <h4 className="text-xl font-bold font-headline uppercase leading-tight group-hover:text-primary transition-colors">{p.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2 font-light">{p.subtitle}</p>
                    <div className="pt-4 flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      <Clock className="h-3 w-3" /> {p.readTime}
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION ANCHOR */}
      <section className="py-32 relative text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 radial-glow-blue opacity-10" />
        <div className="container relative z-10 mx-auto px-6 max-w-3xl space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold font-headline uppercase tracking-tighter leading-none">
            READY TO APPLY THIS <br /><span className="text-gradient-blue italic">INTELLIGENCE?</span>
          </h2>
          <Button asChild size="lg" className="h-20 px-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-xl uppercase tracking-widest">
            <Link href="/early-access">START YOUR CLUB</Link>
          </Button>
        </div>
      </section>

    </main>
  )
}
