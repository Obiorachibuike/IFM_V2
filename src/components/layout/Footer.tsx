
import Link from "next/link"
import { Trophy, Twitter, Send, MessageSquare, ShieldCheck, Youtube, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative z-10 bg-ifm-dark border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-ifm-green/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-ifm-green text-ifm-dark glow-green">
                <Trophy className="h-6 w-6" />
              </div>
              <span className="font-headline text-3xl font-bold tracking-tighter text-white uppercase">IFM</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
              Building the future of digital football ownership. Cinematic management simulation meets persistent blockchain rewards.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: MessageSquare, href: "#" },
                { icon: Send, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-ifm-green/20 hover:text-ifm-green transition-all duration-300 border border-white/5"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline text-lg font-bold mb-8 text-white uppercase tracking-widest text-sm">Ecosystem</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/gameplay" className="text-muted-foreground hover:text-ifm-green transition-colors">Gameplay Vision</Link></li>
              <li><Link href="/ecosystem" className="text-muted-foreground hover:text-ifm-green transition-colors">Genesis Collection</Link></li>
              <li><Link href="/roadmap" className="text-muted-foreground hover:text-ifm-green transition-colors">Project Roadmap</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-ifm-green transition-colors">Elite Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-bold mb-8 text-white uppercase tracking-widest text-sm">Information</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="text-muted-foreground hover:text-ifm-green transition-colors">Whitepaper V4</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-ifm-green transition-colors">Founding Documents</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-ifm-green transition-colors">Brand Assets</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-ifm-green transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="font-headline text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Newsletter</h4>
              <p className="text-muted-foreground text-xs mb-4">Secure founding manager status and tactical updates.</p>
              <div className="flex gap-2">
                <Input placeholder="gaffer@ifm.club" className="bg-white/5 border-white/10 rounded-xl text-xs h-12" />
                <Button size="sm" className="bg-ifm-green hover:bg-ifm-green/90 text-ifm-dark rounded-xl h-12 px-6">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-muted-foreground bg-white/5 p-4 rounded-2xl border border-white/5">
              <ShieldCheck className="h-5 w-5 text-ifm-green shrink-0" />
              Verified Digital Ownership Protocol
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
          <p>© 2024 IFM EMPIRE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
