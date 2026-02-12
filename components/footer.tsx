import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-border text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/79ratio-logo.webp" alt="79 Ratio Logo" width={160} height={50} className="h-10 w-auto" priority />
            </Link>
            <p className="text-muted-foreground text-pretty">
              Your trusted IT partner delivering comprehensive technology solutions for law firms, healthcare,
              nonprofits, and manufacturing.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>630-394-2700</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a className="hover:underline" href="mailto:info@79ratio.com">
                  info@79ratio.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>25 S Grove Ave Ste 501 Elgin, Illinois 60120</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/24-7-365-monitoring" className="text-muted-foreground hover:text-primary transition-colors">
                  24/7 Monitoring
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-muted-foreground hover:text-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-management" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Management
                </Link>
              </li>
              <li>
                <Link href="/services/backup-recovery" className="text-muted-foreground hover:text-primary transition-colors">
                  Backup &amp; Recovery
                </Link>
              </li>
              <li>
                <Link href="/services/help-desk-support" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Desk
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/law-firms" className="text-muted-foreground hover:text-primary transition-colors">
                  Law Firms
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-muted-foreground hover:text-primary transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/nonprofits" className="text-muted-foreground hover:text-primary transition-colors">
                  Nonprofits
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="text-muted-foreground hover:text-primary transition-colors">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="text-muted-foreground hover:text-primary transition-colors">
                  Challenges We Solve
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/who-we-are-for" className="text-muted-foreground hover:text-primary transition-colors">
                  Who We Are For
                </Link>
              </li>
              <li>
                <Link href="/talk-with-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Talk With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground space-x-1">
          <span>&copy; {new Date().getFullYear()} 79 Ratio. All rights reserved. |</span>
          <Link href="/privacy-policy" className="hover:text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          <span>| Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}
