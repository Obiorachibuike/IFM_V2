
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, LayoutGrid, Coins, Map, Users, Store, Menu, X, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

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
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
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
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors hover:text-secondary group",
                  isActive ? "text-secondary" : "text-muted-foreground"
                )}
              >
                <Icon className={cn("h-4 w-4", isActive ? "animate-pulse" : "group-hover:animate-pulse")} />
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-secondary glow-blue" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden lg:flex border-secondary/50 hover:bg-secondary/10 hover:border-secondary transition-all">
            Join Community
          </Button>
          <Button className="bg-primary hover:bg-primary/90 glow-blue text-white font-semibold">
            Launch App
          </Button>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-white/10">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <item.icon className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                    <span className="font-headline text-lg font-medium">{item.name}</span>
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-8">
                  <Button variant="outline" className="w-full">Discord</Button>
                  <Button className="w-full">Play Now</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
