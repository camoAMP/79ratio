import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { IndustriesSection } from "@/components/industries-section"
import { Footer } from "@/components/footer"

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
      <section className="mx-auto my-16 w-full max-w-6xl px-4">
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
              <Image src="/cards.jpg" alt="" fill sizes="(min-width: 768px) 1100px, 100vw" className="object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/78" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="text-sm uppercase tracking-[0.14em] text-primary">Overview Video</p>
                <h2 className="max-w-3xl text-2xl font-bold text-primary md:text-3xl">Watch the 79 Ratio approach in 90 seconds</h2>
                <p className="max-w-2xl text-base text-white/90">Open the full video in Vimeo without loading third-party embeds on page load.</p>
                <a
                  href="https://vimeo.com/1146799101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-primary/60 bg-black/65 px-5 py-2.5 font-medium text-primary hover:border-primary hover:text-[var(--primary-soft)]"
                >
                  Watch on Vimeo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesOverview />
      <IndustriesSection />
      <Footer />
    </main>
  )
}
