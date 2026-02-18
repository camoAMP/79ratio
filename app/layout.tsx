import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://79ratio.com"),
  title: "79 Ratio - Calm Technology Guidance for Growing Teams",
  description:
    "Clear guidance, steady support, and secure systems for law firms, healthcare providers, nonprofits, manufacturers, and many more.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "v0.app",
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const shouldLoadVercelAnalytics = process.env.VERCEL === "1"

  return (
    <html lang="en">
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        {shouldLoadVercelAnalytics ? <Analytics /> : null}
      </body>
    </html>
  )
}
