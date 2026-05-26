
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Trophy, Shield, Coins, Map, Users, LayoutDashboard, Menu, X, Rocket, Info, BookOpen, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/", icon: Rocket },
  { name: "About", href: "/about", icon: Info },
  { name: "Gameplay", href: "/gameplay", icon: Shield },
  { name: "Ecosystem", href: "/ecosystem", icon: LayoutDashboard },
  { name: "Tokenomics", href: "/tokenomics", icon: Coins },
  { name: "Insights", href: "/blog", icon: BookOpen },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
  { name: "Roadmap", href: "/roadmap", icon: Map },
  { name: "Team", href: "/team", icon: Users },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled ? "py-4 px-6" : "py-8 px-6"
      )}
    >
      <div className={cn(
        "container mx-auto max-w-7xl flex items-center justify-between rounded-full px-6 py-2 transition-all duration-500",
        isScrolled 
          ? "bg-secondary/80 backdrop-blur-2xl border border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent backdrop-blur-none shadow-none"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className={cn(
            "relative h-10 w-10 flex items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110",
            isScrolled ? "bg-primary text-white glow-blue" : "bg-white/10 text-white"
          )}>
            <Trophy className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-2xl font-bold tracking-tighter text-white leading-none">IFM</span>
            <span className={cn(
              "text-[8px] font-bold tracking-[0.4em] uppercase transition-colors duration-500",
              isScrolled ? "text-primary" : "text-white/60"
            )}>Empire</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-full group",
                  isActive ? "text-primary" : "text-white/70 hover:text-white"
                )}
              >
                <Icon className={cn("h-3.5 w-3.5 transition-colors", isActive ? "text-primary" : "group-hover:text-primary")} />
                {item.name}
                {isActive && isScrolled && (
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
          <Button asChild className={cn(
            "hidden sm:flex font-bold h-10 px-8 rounded-full transition-all duration-500 uppercase tracking-widest text-[10px]",
            isScrolled 
              ? "bg-primary hover:bg-primary/90 text-white glow-blue" 
              : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
          )}>
            <Link href="/early-access">Early Access</Link>
          </Button>

          <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 lg:hidden glass rounded-[2rem] p-8 border border-white/10 z-40 bg-card/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-all",
                    pathname === item.href ? "bg-primary/10 text-primary" : "text-white/70"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-headline text-xl font-bold uppercase tracking-tight">{item.name}</span>
                </Link>
              ))}
              <Button asChild className="w-full h-14 bg-primary text-white font-headline text-lg mt-4 glow-blue rounded-2xl">
                <Link href="/early-access">EARLY ACCESS</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
