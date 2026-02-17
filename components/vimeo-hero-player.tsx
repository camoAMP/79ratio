"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

type VimeoHeroPlayerProps = {
  videoUrl: string
  eyebrow?: string
  title: string
  description: string
  ctaLabel?: string
  posterSrc?: string
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function getVimeoId(videoUrl: string) {
  const idMatch = videoUrl.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (idMatch?.[1]) {
    return idMatch[1]
  }
  return videoUrl.replace(/\D/g, "")
}

export function VimeoHeroPlayer({
  videoUrl,
  eyebrow = "Overview Video",
  title,
  description,
  ctaLabel = "Watch now",
  posterSrc = "/cards.jpg",
}: VimeoHeroPlayerProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const autoStartedRef = useRef(false)
  const [scrollFade, setScrollFade] = useState(0)
  const [isStarting, setIsStarting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [shouldLoadPlayer, setShouldLoadPlayer] = useState(false)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const startPlayback = useCallback(() => {
    if (isStarting || isPlaying) return
    setIsStarting(true)
    timeoutRef.current = window.setTimeout(() => {
      setShouldLoadPlayer(true)
      setIsPlaying(true)
      setIsStarting(false)
    }, 420)
  }, [isPlaying, isStarting])

  useEffect(() => {
    const updateScroll = () => {
      if (!frameRef.current || isPlaying || isStarting) return
      const rect = frameRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const start = viewportHeight * 0.92
      const end = viewportHeight * 0.32
      const progress = clamp((start - rect.top) / (start - end), 0, 1)
      setScrollFade(progress)
      const nextTextOpacity = clamp(1 - progress, 0, 1)

      if (nextTextOpacity <= 0.12 && !autoStartedRef.current) {
        autoStartedRef.current = true
        startPlayback()
      }
    }

    const onScrollOrResize = () => {
      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        updateScroll()
      })
    }

    updateScroll()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)
    return () => {
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [isPlaying, isStarting, startPlayback])

  const vimeoId = useMemo(() => getVimeoId(videoUrl), [videoUrl])
  const playerSrc = useMemo(() => {
    return `https://player.vimeo.com/video/${vimeoId}?autoplay=1&autopause=0&muted=1&playsinline=1&title=0&byline=0&portrait=0`
  }, [vimeoId])

  const textOpacity = isPlaying || isStarting ? 0 : clamp(1 - scrollFade, 0, 1)
  const textOffset = Math.round((1 - textOpacity) * 26)

  return (
    <div ref={frameRef} className="relative h-full w-full overflow-hidden">
      <Image
        src={posterSrc}
        alt="79 Ratio video cover"
        fill
        sizes="(min-width: 768px) 1100px, 100vw"
        className="object-cover opacity-56"
      />

      {shouldLoadPlayer ? (
        <iframe
          title="79 Ratio overview video"
          src={playerSrc}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-700",
            isPlaying ? "opacity-100" : "opacity-0"
          )}
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="eager"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
      ) : null}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/74 via-black/55 to-black/82 transition-opacity duration-700",
          isPlaying ? "opacity-0" : "opacity-100"
        )}
      />

      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-700",
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <div
          className="relative mb-6 flex justify-center transition-all duration-700"
          style={{
            opacity: isStarting ? 0 : 1,
            transform: isStarting ? "translateY(-8px) scale(0.96)" : "translateY(0px) scale(1)",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
          <Image
            src="/79ratio-logo.webp"
            alt="79 Ratio logo"
            width={260}
            height={84}
            className="relative z-10 h-16 w-auto"
          />
        </div>

        <div
          className="mx-auto max-w-3xl space-y-4 transition-all duration-300"
          style={{ opacity: textOpacity, transform: `translateY(${textOffset}px)` }}
        >
          <p className="text-sm uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-base text-white/92">{description}</p>
          <button
            type="button"
            onClick={startPlayback}
            disabled={isStarting}
            className="inline-flex items-center rounded-md border border-primary/60 bg-black/65 px-5 py-2.5 font-medium text-primary transition-colors hover:border-primary hover:text-[var(--primary-soft)] disabled:opacity-70"
          >
            {isStarting ? "Starting video..." : ctaLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
