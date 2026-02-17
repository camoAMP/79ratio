import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { IndustriesSection } from "@/components/industries-section"
import { Footer } from "@/components/footer"
import { VimeoHeroPlayer } from "@/components/vimeo-hero-player"

function buildFibonacciSpiralPath(points = 220, turns = 2, radiusScale = 2, viewBox = 120): string {
  const phi = (1 + Math.sqrt(5)) / 2
  const center = viewBox / 2
  let path = ""

  for (let i = 0; i <= points; i++) {
    const theta = -Math.PI / 2 + (i * (turns * 2 * Math.PI)) / points
    const radius = radiusScale * Math.pow(phi, theta / (Math.PI / 2))
    const x = center + radius * Math.cos(theta)
    const y = center + radius * Math.sin(theta)
    path += `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`
  }

  return path
}

const fibonacciSpiralPath = buildFibonacciSpiralPath()

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <section className="home-deferred mx-auto my-16 w-full max-w-6xl px-4">
        <div className="relative isolate overflow-hidden rounded-[28px] border border-primary/30 bg-gradient-to-br from-primary/10 via-black to-primary/5 shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute -inset-8 opacity-70 mix-blend-screen">
            <svg
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="fibonacciStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#f0d48a" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.15" />
                </linearGradient>
                <radialGradient id="fibonacciGlow" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.28" />
                  <stop offset="65%" stopColor="#d4af37" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="120" height="120" fill="url(#fibonacciGlow)" />
              <path
                d={fibonacciSpiralPath}
                fill="none"
                stroke="url(#fibonacciStroke)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={fibonacciSpiralPath}
                fill="none"
                stroke="#d4af37"
                strokeOpacity="0.25"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="relative p-4 sm:p-6">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/70 ring-1 ring-primary/30 shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
              <VimeoHeroPlayer
                videoUrl="https://vimeo.com/1146799101"
                title="See how we think in about 90 seconds"
                description="Quick overview of how we help teams build calmer, more reliable technology operations."
                ctaLabel="Watch now"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="home-deferred">
        <ServicesOverview />
      </div>
      <div className="home-deferred">
        <IndustriesSection />
      </div>
      <Footer />
    </main>
  )
}
