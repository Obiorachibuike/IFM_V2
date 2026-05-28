{/* 1. CINEMATIC BANNER */}
<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">

    {/* Main cinematic overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/20 to-background/40 z-10" />

    {/* Background image */}
    {genesisBanner && (
      <Image
        src={genesisBanner.imageUrl}
        alt="IFM Genesis"
        fill
        priority
        className="object-cover brightness-[0.75] contrast-[1.05] saturate-125 scale-[1.02]"
        data-ai-hint="IFM Genesis stadium"
      />
    )}

    {/* Bottom fade for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent z-20" />

    {/* Premium lighting effects */}
    <div className="stadium-light-sweep z-30" />
    <div className="absolute inset-0 football-grid opacity-[0.08] z-30" />

    {/* Atmospheric glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%)] z-20" />

    {/* Bottom left cinematic text */}
    <div className="absolute bottom-20 left-12 hidden md:block z-40">
      <h4 className="text-4xl font-bold text-white uppercase tracking-[0.4em] italic opacity-90">
        DAWN OF SOVEREIGNTY
      </h4>

      <p className="text-[10px] text-primary font-bold uppercase tracking-[0.5em] mt-2">
        Protocol: Genesis_Initial_Active
      </p>
    </div>
  </div>

  {/* Hero Content */}
  <div className="container relative z-50 mx-auto px-6 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="space-y-6"
    >
      {/* Status badge */}
      <div className="inline-flex items-center gap-4 px-6 py-2 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-full mb-8">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />

        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">
          Genesis Protocol Active
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-5xl md:text-9xl font-bold font-headline tracking-tighter uppercase leading-none">
        BUILD. OWN. <br />

        <span className="text-gradient-blue italic">
          DOMINATE.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-white/60 uppercase tracking-[0.6em] text-xs font-bold">
        Phase 1: Establishing the Empire
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-6 pt-10">
        <Button
          asChild
          size="lg"
          className="h-16 px-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl glow-blue text-lg uppercase tracking-widest"
        >
          <Link href="/early-access">
            JOIN EARLY ACCESS
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-16 px-12 border-white/10 hover:bg-white/5 font-bold rounded-2xl text-lg uppercase tracking-widest backdrop-blur-xl"
        >
          <Link href="/gameplay">
            WATCH GAMEPLAY
          </Link>
        </Button>
      </div>
    </motion.div>
  </div>
</section>