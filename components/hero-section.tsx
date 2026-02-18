import { Button } from "@/components/ui/button"
import { Clock, Shield, Sparkles, Workflow } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { homeContent } from "@/lib/brief-content"

const highlights = [
  {
    icon: Shield,
    title: "Secure",
    subtitle: "Protection built in",
  },
  {
    icon: Workflow,
    title: "Organized",
    subtitle: "Clear systems and ownership",
  },
  {
    icon: Clock,
    title: "Responsive",
    subtitle: "Problems handled quickly",
  },
  {
    icon: Sparkles,
    title: "Dependable",
    subtitle: "Technology you can trust",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-32 bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/home-mobile.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/home.webp"
            alt=""
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
            style={{
              opacity: 0.9,
              filter: "brightness(1.12)",
            }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 hidden md:block home-hero-spiral-core animate-spiral-center-rotate">
          <Image
            src="/home.webp"
            alt=""
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
            style={{
              opacity: 0.88,
              filter: "brightness(1.24)",
            }}
          />
        </div>
        <div className="absolute inset-0 hero-edge-fade pointer-events-none hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/14 via-black/28 to-black/50 md:hidden" />

        <div className="absolute inset-0 hidden md:block">
          <div
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-80"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float-slow opacity-60"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/40 rounded-full animate-float opacity-50"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-float-slow opacity-70"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-3/4 left-1/2 w-2.5 h-2.5 bg-primary/60 rounded-full animate-float opacity-40"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-cyan-200 rounded-full animate-float-slow opacity-80"
            style={{ animationDelay: "2.5s" }}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-b from-transparent via-black/80 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="flex justify-center">
            <Image
              src="/79ratio-logo.webp"
              alt="79 Ratio Logo"
              width={300}
              height={100}
              className="h-16 w-auto brand-logo-subtle-glow"
              priority
            />
          </div>

          <div className="space-y-8 max-w-4xl mx-auto hero-text-panel home-hero-panel">
            <div className="space-y-5">
              <h1 className="home-hero-headline lg:text-6xl font-bold text-primary leading-tight text-balance text-3xl">
                {homeContent.hero.headline}
              </h1>
              <p className="home-hero-copy text-xl leading-relaxed text-pretty">
                {homeContent.hero.subheadline}
              </p>
              <p className="home-hero-copy home-hero-copy-muted text-base mt-4 leading-relaxed text-pretty">
                {homeContent.hero.body}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link prefetch={false} href={homeContent.hero.primaryCta.href}>{homeContent.hero.primaryCta.label}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link prefetch={false} href={homeContent.hero.secondaryCta.href}>{homeContent.hero.secondaryCta.label}</Link>
              </Button>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 pt-8 justify-items-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {highlights.map((item, index) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="flex w-full max-w-[220px] items-center justify-center gap-3 animate-fade-in sm:justify-start"
                    style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--foreground)]">{item.title}</div>
                      <div className="text-sm text-[var(--muted-foreground)]">{item.subtitle}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="pt-6">
              <p className="home-hero-tagline text-lg text-primary font-medium">79 Ratio. Calm systems. Clear decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
