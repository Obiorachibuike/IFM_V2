
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Coins, Map, Users, Store, Menu, Trophy, MessageSquare } from "lucide-react"
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
  { name: "Marketplace", href: "/marketplace", icon: Store },
  { name: "Tokenomics", href: "/tokenomics", icon: Coins },
  { name: "Roadmap", href: "/roadmap", icon: Map },
  { name: "Community", href: "/community", icon: Users },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-white/10 py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 flex items-center justify-center rounded-lg bg-primary glow-blue transition-transform group-hover:scale-110">
            <Trophy className="h-6 w-6 text-white" />
            <div className="absolute inset-0 rounded-lg animate-pulse bg-secondary/20 -z-10" />
          </div>
          <span className="font-headline text-2xl font-bold tracking-tighter text-white">IFM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:text-white group",
                  isActive ? "text-white" : "text-muted-foreground"
                )}
              >
                <Icon className={cn("h-3.5 w-3.5", isActive ? "text-secondary" : "group-hover:text-secondary")} />
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

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden xl:flex text-muted-foreground hover:text-white hover:bg-white/5">
            <MessageSquare className="h-4 w-4 mr-2" />
            Discord
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 glow-blue text-white font-bold h-11 px-6 rounded-xl">
            LAUNCH APP
          </Button>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden bg-white/5 border border-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-white/10 w-[300px]">
              <nav className="flex flex-col gap-2 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl transition-all group",
                      pathname === item.href ? "bg-secondary/20 text-white" : "hover:bg-white/5 text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5 text-secondary" />
                    <span className="font-headline text-lg font-bold">{item.name}</span>
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-white/10">
                  <Button variant="outline" className="w-full h-12 border-white/10">Whitepaper</Button>
                  <Button className="w-full h-12 bg-secondary">Join Discord</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
