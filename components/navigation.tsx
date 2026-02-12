import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const topNavLinks = [
  { label: "Home", href: "/" },
  { label: "Challenges We Solve", href: "/challenges" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Who We're For", href: "/who-we-are-for" },
  { label: "Insights", href: "/blog" },
  { label: "Talk With Us", href: "/talk-with-us" },
] as const

const clientLoginUrl = "https://79ratio.deskdirector.com/auth/v1/email"

export function Navigation() {
  return (
    <nav className="border-b sticky top-0 z-50 bg-black text-foreground border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" prefetch={false} className="flex items-center">
            <Image src="/79ratio-logo.webp" alt="79 Ratio Logo" width={160} height={50} className="h-10 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {topNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              asChild
              className="text-foreground border-border hover:bg-primary/20 hover:text-primary bg-transparent"
            >
              <a href={clientLoginUrl} target="_blank" rel="noopener noreferrer">
                Client Login
              </a>
            </Button>
          </div>

          <details className="group md:hidden">
            <summary
              className="list-none inline-flex h-8 items-center justify-center rounded-md px-3 text-foreground hover:text-primary cursor-pointer [&::-webkit-details-marker]:hidden"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-6 w-6 group-open:hidden" />
              <X className="hidden h-6 w-6 group-open:block" />
            </summary>
            <div className="absolute left-0 right-0 top-16 border-t border-black bg-black pb-4 max-h-[80vh] overflow-y-auto">
              <div className="px-3 pt-3 space-y-1">
                {topNavLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-transparent text-primary border-primary hover:bg-primary hover:text-black"
                  >
                    <a href={clientLoginUrl} target="_blank" rel="noopener noreferrer">
                      Client Login
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}
