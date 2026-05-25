
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Github } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Marcus Thorne",
    role: "FOUNDER & CEO",
    bio: "Ex-EA Sports executive with 15 years in football simulation design.",
    twitter: "#",
    linkedin: "#",
    img: "https://picsum.photos/seed/ifm-team1/400/400"
  },
  {
    name: "Elena Vance",
    role: "CHIEF OPERATING OFFICER",
    bio: "Web3 strategy lead previously at a top-tier L2 blockchain protocol.",
    twitter: "#",
    linkedin: "#",
    img: "https://picsum.photos/seed/ifm-team2/400/400"
  },
  {
    name: "David 'Gaffer' Chen",
    role: "LEAD ARCHITECT",
    bio: "Veteran systems engineer specializing in high-concurrency match engines.",
    github: "#",
    linkedin: "#",
    img: "https://picsum.photos/seed/ifm-team3/400/400"
  },
  {
    name: "Sarah Jenkins",
    role: "HEAD OF DESIGN",
    bio: "Award-winning UI/UX designer focused on immersive gaming environments.",
    twitter: "#",
    linkedin: "#",
    img: "https://picsum.photos/seed/ifm-team4/400/400"
  }
]

export function TeamSection() {
  return (
    <section className="py-32 relative overflow-hidden" id="team">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase tracking-[0.4em] text-[10px] font-bold">
            Elite Personnel
          </Badge>
          <h2 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-[0.8]">
            THE <span className="text-primary italic">ELITE</span> UNIT
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            A specialized coalition of veterans from AAA gaming, professional football, and blockchain infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="group p-8 border-white/5 bg-ifm-surface/30 text-center" glowColor="blue">
                {/* Reduced and Rounded Image */}
                <div className="relative h-32 w-32 mx-auto mb-8 rounded-[2rem] overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] text-primary font-bold uppercase tracking-[0.3em] mb-1">{member.role}</div>
                    <h4 className="text-2xl font-bold font-headline tracking-tighter uppercase">{member.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed min-h-[60px]">
                    {member.bio}
                  </p>
                  
                  {/* Subtle Social Links */}
                  <div className="flex justify-center gap-4 pt-2">
                    {member.twitter && <LinkIcon icon={Twitter} href={member.twitter} />}
                    {member.linkedin && <LinkIcon icon={Linkedin} href={member.linkedin} />}
                    {member.github && <LinkIcon icon={Github} href={member.github} />}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LinkIcon({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <Link 
      href={href} 
      className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-primary/20"
    >
      <Icon className="h-4 w-4" />
    </Link>
  )
}
