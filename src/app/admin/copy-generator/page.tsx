
"use client"

import * as React from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateMarketingCopy, type GenerateMarketingCopyInput } from "@/ai/flows/generate-marketing-copy"
import { Sparkles, Loader2, Copy, CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CopyGenerator() {
  const { toast } = useToast()
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState("")
  const [copied, setCopied] = React.useState(false)

  const [input, setInput] = React.useState<GenerateMarketingCopyInput>({
    sectionType: "ecosystem benefits",
    keyPoints: [""],
    tone: "premium",
    length: "medium",
  })

  const handleKeyPointChange = (index: number, value: string) => {
    const newPoints = [...input.keyPoints]
    newPoints[index] = value
    setInput({ ...input, keyPoints: newPoints })
  }

  const addKeyPoint = () => {
    setInput({ ...input, keyPoints: [...input.keyPoints, ""] })
  }

  const removeKeyPoint = (index: number) => {
    if (input.keyPoints.length > 1) {
      const newPoints = input.keyPoints.filter((_, i) => i !== index)
      setInput({ ...input, keyPoints: newPoints })
    }
  }

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const response = await generateMarketingCopy({
        ...input,
        keyPoints: input.keyPoints.filter(p => p.trim() !== "")
      })
      setResult(response.copy)
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating the copy. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: "Copied to clipboard",
    })
  }

  return (
    <main className="flex-1 pt-40 pb-20 container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-headline font-bold uppercase tracking-tighter">BRAND COPY <span className="text-accent italic">GENERATOR</span></h1>
          <p className="text-muted-foreground">Internal AI tool for crafting cinematic, investor-ready IFM brand messaging.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <GlassCard className="p-8 border-white/10 bg-card/50">
          <h3 className="text-xl font-headline font-bold mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" /> Configuration
          </h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Section Type</Label>
              <Input 
                placeholder="e.g. NFT club perks, Roadmap phase 2" 
                value={input.sectionType}
                onChange={(e) => setInput({ ...input, sectionType: e.target.value })}
                className="bg-white/5 border-white/10"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Tone</Label>
                <Select 
                  value={input.tone} 
                  onValueChange={(v: any) => setInput({ ...input, tone: v })}
                >
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="immersive">Immersive</SelectItem>
                    <SelectItem value="football-focused">Football Focused</SelectItem>
                    <SelectItem value="investor-ready">Investor Ready</SelectItem>
                    <SelectItem value="cinematic">Cinematic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Length</Label>
                <Select 
                  value={input.length} 
                  onValueChange={(v: any) => setInput({ ...input, length: v })}
                >
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="long">Long</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Key Points</Label>
              {input.keyPoints.map((point, index) => (
                <div key={index} className="flex gap-2">
                  <Input 
                    placeholder={`Point ${index + 1}`}
                    value={point}
                    onChange={(e) => handleKeyPointChange(index, e.target.value)}
                    className="bg-white/5 border-white/10"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeKeyPoint(index)}
                    className="hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={addKeyPoint} className="w-full border-dashed border-white/20">
                + Add Point
              </Button>
            </div>

            <Button 
              onClick={handleGenerate} 
              className="w-full h-12 bg-accent hover:bg-accent/90 glow-gold text-background font-bold"
              disabled={loading}
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <Sparkles className="h-5 w-5 mr-2" />}
              Generate Marketing Copy
            </Button>
          </div>
        </GlassCard>

        <GlassCard className="p-8 border-white/10 bg-card/50 flex flex-col min-h-[500px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-headline font-bold">Generated Result</h3>
            {result && (
              <Button variant="ghost" size="sm" onClick={handleCopy} className="text-accent hover:text-white">
                {copied ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            )}
          </div>
          
          <div className="flex-1 bg-black/40 rounded-xl p-6 border border-white/5 overflow-auto">
            {result ? (
              <div className="prose prose-invert max-w-none">
                <p className="whitespace-pre-wrap leading-relaxed text-lg">{result}</p>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground text-center">
                <Sparkles className="h-12 w-12 mb-4 opacity-20" />
                <p>Configure and generate to see results here.</p>
              </div>
            )}
          </div>
        </GlassCard>
      </div>
    </main>
  )
}
