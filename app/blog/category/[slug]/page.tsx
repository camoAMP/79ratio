import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, User, ArrowRight } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { blogCategories, getAllBlogCategorySlugs, getCategoryBySlug, getPostsByCategorySlug } from "@/lib/blog-posts"

type BlogCategoryPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getAllBlogCategorySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return {
      title: "Blog Categories | 79 Ratio",
      description: "Browse 79 Ratio blog articles by category.",
    }
  }

  return {
    title: `${category.label} Articles | 79 Ratio`,
    description: category.description,
  }
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = getPostsByCategorySlug(slug)

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/blog-bg.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/72 via-black/58 to-black/72" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <Badge className="bg-primary/20 text-white border-primary/30">Category</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white text-balance">{category.label}</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty">{category.description}</p>
          <Button asChild variant="outline" className="bg-transparent">
            <Link href="/blog">Back to All Articles</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button asChild size="sm" variant={slug ? "outline" : "default"}>
              <Link href="/blog">All Posts</Link>
            </Button>
            {blogCategories.map((item) => (
              <Button key={item.slug} asChild size="sm" variant={item.slug === slug ? "default" : "outline"}>
                <Link href={`/blog/category/${item.slug}`}>{item.label}</Link>
              </Button>
            ))}
          </div>

          {posts.length ? (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Card key={post.slug} className="border-border bg-card hover:shadow-md transition-shadow">
                  <CardHeader className="space-y-3">
                    <Badge variant="secondary" className="w-fit">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-2xl text-card-foreground text-balance">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="inline-flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-border bg-card max-w-2xl mx-auto">
              <CardContent className="p-8 text-center space-y-4">
                <p className="text-muted-foreground">No posts are published in this category yet.</p>
                <Button asChild>
                  <Link href="/blog">Browse all categories</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
