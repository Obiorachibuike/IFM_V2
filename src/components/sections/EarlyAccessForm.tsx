
"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Rocket, ShieldCheck, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlassCard } from "@/components/ui/glass-card"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  club: z.string().min(2, "Please enter your favorite club"),
  wallet: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum wallet address").optional().or(z.literal("")),
})

type FormData = z.infer<typeof formSchema>

export function EarlyAccessForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    
    toast({
      title: "APPLICATION RECEIVED",
      description: "You have been added to the Founding Manager whitelist.",
    })
    reset()
  }

  return (
    <section className="py-24 relative overflow-hidden" id="early-access">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ifm-green/10 border border-ifm-green/20 text-ifm-green text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <Rocket className="h-3 w-3" /> Genesis Enrollment
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold font-headline uppercase tracking-tighter">
            JOIN THE <span className="text-ifm-green italic">EMPIRE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Founding Manager status is strictly limited. Apply now for early ecosystem access and exclusive Genesis drops.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-10 border-white/5 bg-ifm-surface/40 relative overflow-hidden" glowColor="blue">
            {/* Trust Indicators */}
            <div className="absolute top-0 right-0 p-6 opacity-20 hidden md:block">
              <ShieldCheck className="h-24 w-24 text-ifm-green" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</Label>
                  <Input 
                    {...register("name")}
                    placeholder="E.g. Alex Ferguson" 
                    className="bg-white/5 border-white/10 rounded-xl h-14 focus:border-ifm-green/50 transition-colors"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</Label>
                  <Input 
                    {...register("email")}
                    type="email" 
                    placeholder="gaffer@stadium.com" 
                    className="bg-white/5 border-white/10 rounded-xl h-14 focus:border-ifm-green/50 transition-colors"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Favourite Club</Label>
                  <Input 
                    {...register("club")}
                    placeholder="E.g. Manchester United" 
                    className="bg-white/5 border-white/10 rounded-xl h-14 focus:border-ifm-green/50 transition-colors"
                  />
                  {errors.club && <p className="text-xs text-destructive mt-1">{errors.club.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Wallet Address (Optional)</Label>
                  <Input 
                    {...register("wallet")}
                    placeholder="0x..." 
                    className="bg-white/5 border-white/10 rounded-xl h-14 focus:border-ifm-green/50 transition-colors"
                  />
                  {errors.wallet && <p className="text-xs text-destructive mt-1">{errors.wallet.message}</p>}
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-16 bg-ifm-green hover:bg-ifm-green/90 text-ifm-dark font-headline text-xl font-bold rounded-2xl glow-green transition-all duration-500"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    "CLAIM FOUNDING STATUS"
                  )}
                </Button>
                <p className="text-center text-[10px] text-muted-foreground mt-6 font-bold uppercase tracking-widest">
                  Securely stored on the IFM Protocol • Privacy Encrypted
                </p>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
