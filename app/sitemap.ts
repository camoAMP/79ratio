import type { MetadataRoute } from "next"
import { blogCategories } from "@/lib/blog-posts"

export const dynamic = "force-static"

const baseUrl = "https://79ratio.com"

const routes = [
  "/",
  "/challenges",
  "/our-approach",
  "/who-we-are-for",
  "/blog",
  "/talk-with-us",
  "/services",
  "/industries",
  "/about",
  "/contact",
  ...blogCategories.map((category) => `/blog/category/${category.slug}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
    lastModified: new Date(),
  }))
}
