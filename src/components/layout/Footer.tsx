import Link from "next/link"
import { Trophy, Twitter, Github, Send, MessageSquare, ShieldCheck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative z-10 bg-card border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary glow-blue">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <span className="font-headline text-2xl font-bold tracking-tighter text-white">IFM</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              The next generation of football management. Built on blockchain, driven by community, powered by esports.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-secondary/20 transition-all">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-white" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-secondary/20 transition-all">
                <MessageSquare className="h-5 w-5 text-muted-foreground hover:text-white" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-secondary/20 transition-all">
                <Send className="h-5 w-5 text-muted-foreground hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline text-lg font-bold mb-6 text-white">Ecosystem</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-secondary transition-all">Game Mechanics</Link></li>
              <li><Link href="/nft-clubs" className="text-muted-foreground hover:text-secondary transition-all">Club Ownership</Link></li>
              <li><Link href="/ecosystem" className="text-muted-foreground hover:text-secondary transition-all">Economy Blueprint</Link></li>
              <li><Link href="/tokenomics" className="text-muted-foreground hover:text-secondary transition-all">Token Utility</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-secondary transition-all">Whitepaper</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-secondary transition-all">Smart Contracts</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-secondary transition-all">Brand Kit</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-secondary transition-all">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-muted-foreground text-sm">Get the latest scouting reports and ecosystem updates.</p>
            <div className="flex gap-2">
              <Input placeholder="manager@ifm.club" className="bg-white/5 border-white/10" />
              <Button size="sm" className="bg-secondary hover:bg-secondary/90">Join</Button>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 p-3 rounded-lg border border-white/5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Secure Blockchain Infrastructure
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 IFM Ecosystem. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-all">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-all">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
