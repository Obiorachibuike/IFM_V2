"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Coins, Map, Users, LayoutDashboard, Menu, Trophy, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "About", href: "/about", icon: Shield },
  { name: "NFT Clubs", href: "/nft-clubs", icon: Trophy },
  { name: "Ecosystem", href: "/ecosystem", icon: LayoutDashboard },
  { name: "Tokenomics", href: "/tokenomics", icon: Coins },
  { name: "Roadmap", href: "/roadmap", icon: Map },
  { name: "Community", href: "/community", icon: Users },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-700",
        isScrolled 
          ? "bg-background/60 backdrop-blur-2xl border-b border-white/5 py-4" 
          : "bg-transparent py-10"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative h-14 w-14 flex items-center justify-center rounded-2xl bg-primary glow-blue transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl">
            <Trophy className="h-8 w-8 text-white" />
            <div className="absolute inset-0 rounded-2xl animate-pulse bg-secondary/30 -z-10 blur-md" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-3xl font-bold tracking-tighter text-white leading-none">IFM</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-secondary">ECOSYSTEM</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-3xl rounded-full px-4 py-2 border border-white/10 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2.5 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-white group",
                  isActive ? "text-white" : "text-muted-foreground"
                )}
              >
                <Icon className={cn("h-4 w-4 transition-colors", isActive ? "text-secondary" : "group-hover:text-secondary")} />
                {item.name}
                {isActive && (
                  <motion.span 
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-6">
          <Button variant="ghost" className="hidden xl:flex text-muted-foreground hover:text-white hover:bg-white/5 font-bold tracking-widest text-[10px] uppercase">
            <MessageSquare className="h-4 w-4 mr-2" />
            COMMAND CENTER
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 glow-blue text-white font-bold h-14 px-10 rounded-2xl transition-all duration-500 uppercase tracking-widest text-[10px]">
            LAUNCH SYSTEM
          </Button>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden bg-white/5 border border-white/5 h-12 w-12 rounded-xl">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-3xl border-l border-white/5 w-[350px]">
              <nav className="flex flex-col gap-3 mt-20">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-5 p-6 rounded-2xl transition-all group",
                      pathname === item.href ? "bg-secondary/10 text-white border border-secondary/30" : "hover:bg-white/5 text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-6 w-6 text-secondary" />
                    <span className="font-headline text-2xl font-bold tracking-tight uppercase">{item.name}</span>
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-10 pt-10 border-t border-white/5">
                  <Button variant="outline" className="w-full h-16 border-white/10 text-lg rounded-2xl font-headline">WHITEPAPER</Button>
                  <Button className="w-full h-16 bg-secondary text-lg rounded-2xl font-headline">JOIN DISCORD</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
