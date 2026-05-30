"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Trophy,
  Shield,
  Coins,
  Map,
  LayoutDashboard,
  Menu,
  X,
  Rocket,
  Info,
  BookOpen,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/", icon: Rocket },
  { name: "About", href: "/about", icon: Info },
  { name: "Gameplay", href: "/gameplay", icon: Shield },
  { name: "Ecosystem", href: "/ecosystem", icon: LayoutDashboard },
  { name: "Team", href: "/team", icon: Users },
  { name: "Tokenomics", href: "/tokenomics", icon: Coins },
  { name: "Insights", href: "/blog", icon: BookOpen },
  { name: "Roadmap", href: "/roadmap", icon: Map },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-[9990] w-full transition-all duration-500",
        isScrolled
          ? "py-3 px-4 md:py-4 md:px-6"
          : "py-6 px-4 md:py-8 md:px-6"
      )}
    >
      <div
        className={cn(
          "container mx-auto max-w-7xl flex items-center justify-between rounded-full px-4 py-2 md:px-6 transition-all duration-500",
          isScrolled
            ? "bg-secondary/80 backdrop-blur-2xl border border-white/10 shadow-2xl"
            : "bg-transparent border-transparent"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={cn(
              "relative h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-xl transition-all duration-500",
              isScrolled ? "bg-primary text-white" : "bg-white/10 text-white"
            )}
          >
            <Trophy className="h-5 w-5 md:h-6 md:w-6" />
          </div>

          <div className="flex flex-col">
            <span className="font-headline text-xl md:text-2xl font-bold tracking-tighter text-white leading-none">
              IFM
            </span>
            <span className="text-[7px] md:text-[8px] font-bold tracking-[0.4em] uppercase text-primary">
              Empire
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-full",
                  isActive
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            asChild
            className="hidden sm:flex font-bold h-10 px-6 md:px-8 rounded-full uppercase tracking-widest text-[10px] bg-primary text-white"
          >
            <Link href="/early-access">Early Access</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden text-white rounded-full"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* MOBILE MENU PORTAL */}
      {mounted &&
        isMobileMenuOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "fixed left-4 right-4 xl:hidden rounded-[2rem] p-5 border border-white/10 flex flex-col gap-4",
                "z-[99999] bg-[#05070D] shadow-2xl",
                isScrolled
                  ? "top-16 max-h-[calc(100vh-5.5rem)]"
                  : "top-24 max-h-[calc(100vh-7.5rem)]"
              )}
            >
              <nav className="flex flex-col gap-1.5 overflow-y-auto flex-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-xl transition-all border",
                        isActive
                          ? "bg-primary/10 border-primary/20 text-primary"
                          : "text-white/70 hover:text-white hover:bg-white/5 border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <Icon
                          className={cn(
                            "h-4 w-4",
                            isActive ? "text-primary" : "text-white/40"
                          )}
                        />
                        <span className="font-headline uppercase text-base">
                          {item.name}
                        </span>
                      </div>

                      <ChevronRightIcon
                        className={cn(
                          "h-4 w-4 transition-all",
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        )}
                      />
                    </Link>
                  )
                })}
              </nav>

              <div className="pt-3 border-t border-white/5">
                <Button
                  asChild
                  className="w-full h-12 bg-primary text-white font-bold tracking-widest text-xs rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/early-access">EARLY ACCESS</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </motion.header>
  )
}