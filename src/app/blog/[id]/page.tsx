"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Target,
  ShieldCheck,
} from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-posts"

export default function BlogDetailPage() {
  const params = useParams()
  const id = params?.id as string
// Change the beginning of your component to this:
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // Now proceed with your useMemo or find logic
  const post = blogPosts.find((p) => p.id === id);
  // ...
}


  const post = React.useMemo(
    () => blogPosts.find((p) => p.id === id),
    [id]
  )

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Post not found
      </div>
    )
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-background">

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-primary/10 z-[1]" />

          {post.image?.imageUrl && (
            <Image
              src={post.image.imageUrl}
              alt={post.title}
              fill
              priority
              className="object-cover grayscale-[0.2] brightness-[0.4]"
            />
          )}
        </div>

        <div className="container relative z-20 mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Intelligence Feed
              </span>
            </Link>

            <div className="space-y-4">
              <Badge className="bg-primary/20 border-primary/40 text-primary uppercase text-[10px] px-6 py-1.5">
                {post.category}
              </Badge>

              <h1 className="text-4xl md:text-7xl font-bold uppercase leading-[0.9]">
                {post.title}
              </h1>

              {post.subtitle && (
                <p className="text-xl text-muted-foreground font-light max-w-3xl">
                  {post.subtitle}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={48}
                    height={48}
                  />
                </div>

                <div>
                  <div className="text-sm font-bold uppercase">
                    {post.author.name}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8 text-[10px] uppercase text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">

          {post.content?.map((section: any, idx: number) => {
            const key = `${section.type}-${idx}`

            switch (section.type) {
              case "paragraph":
                return (
                  <motion.p
                    key={key}
                    className="text-xl text-muted-foreground leading-relaxed font-light"
                  >
                    {section.text}
                  </motion.p>
                )

              case "heading":
                return (
                  <motion.h2
                    key={key}
                    className="text-4xl font-bold uppercase mt-8"
                  >
                    {section.text}
                  </motion.h2>
                )

              case "visual":
                return (
                  <motion.div key={key} className="space-y-4">
                    <GlassCard className="p-0 overflow-hidden aspect-video relative">
                      {/* FIX: use section.imageUrl OR fallback mapping */}
                      {section.imageUrl ? (
                        <Image
                          src={section.imageUrl}
                          alt={section.caption || ""}
                          fill
                          className="object-cover brightness-75"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/5" />
                      )}
                    </GlassCard>

                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-4">
                      {section.caption}
                    </p>
                  </motion.div>
                )

              case "takeaways":
                return (
                  <motion.div key={key}>
                    <GlassCard className="p-10 bg-accent/5 border-accent/20">
                      <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                        <Target className="h-5 w-5" />
                        {section.title}
                      </h3>

                      <ul className="space-y-3">
                        {section.items.map((item: string, i: number) => (
                          <li key={i} className="flex gap-3 text-white/80">
                            <span className="text-accent font-bold">
                              {i + 1}.
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </motion.div>
                )

              default:
                return null
            }
          })}
        </div>
      </section>

      {/* FOOTER */}
      <section className="pt-20 border-t border-white/5 flex justify-between px-6 max-w-4xl mx-auto">
        <Button variant="outline">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>

        <div className="flex items-center gap-2 text-[10px] uppercase text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Verified Intelligence Feed
        </div>
      </section>

    </main>
  )
}