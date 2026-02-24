'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Copy, Check } from 'lucide-react'

export default function ArticlesAdminPage() {
  const [articles, setArticles] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [copiedArticleId, setCopiedArticleId] = useState<number | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles')
        const data = await response.json()
        setArticles(data.articles || [])
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const copyArticleCode = (article: any, index: number) => {
    const code = `{
    title: "${article.title}",
    slug: "${article.slug}",
    excerpt: "${article.excerpt}",
    author: "${article.author}",
    date: "${article.date}",
    category: "${article.category}",
    readTime: "${article.readTime}",
    featured: ${article.featured},
    contentHtml: \`${article.contentHtml}\`,
  },`

    navigator.clipboard.writeText(code)
    setCopiedArticleId(index)
    setTimeout(() => setCopiedArticleId(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black/76 via-black/58 to-black/76" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary text-balance">Submitted Articles</h1>
          <p className="text-xl text-white/95 leading-relaxed text-pretty max-w-3xl mx-auto">
            Manage and review articles submitted through the upload form
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Articles Queue</h2>
              <p className="text-muted-foreground mt-2">
                {articles.length === 0 ? 'No articles submitted yet' : `${articles.length} article${articles.length !== 1 ? 's' : ''} submitted`}
              </p>
            </div>
            <Button asChild>
              <Link href="/upload-article">Submit Article</Link>
            </Button>
          </div>

          {isLoading ? (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                Loading submitted articles...
              </CardContent>
            </Card>
          ) : articles.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground mb-4">No articles have been submitted yet</p>
                <Button asChild>
                  <Link href="/upload-article">Submit Your First Article</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Card key={index} className="border-border bg-card overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                        <CardDescription className="mt-2">
                          By {article.author} • {article.date}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground font-medium">Slug</p>
                        <p className="text-foreground">{article.slug}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground font-medium">Read Time</p>
                        <p className="text-foreground">{article.readTime}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-muted-foreground font-medium">Excerpt</p>
                        <p className="text-foreground">{article.excerpt}</p>
                      </div>
                    </div>

                    {article.featured && (
                      <div className="rounded-md bg-primary/10 border border-primary/30 p-3">
                        <p className="text-sm text-primary">✓ Marked to feature on homepage</p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-medium">Content Preview</p>
                      <div
                        className="bg-black/30 rounded p-3 text-xs text-muted-foreground overflow-auto max-h-40 whitespace-pre-wrap word-break"
                        dangerouslySetInnerHTML={{
                          __html: article.contentHtml.substring(0, 200) + '...'
                        }}
                      />
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">
                        Ready to publish? Copy this code and add it to <code className="bg-black/30 px-2 py-1 rounded text-xs">/lib/blog-posts.ts</code>
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyArticleCode(article, index)}
                        className="w-full"
                      >
                        {copiedArticleId === index ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied to Clipboard!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy for blog-posts.ts
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Instructions */}
          <Card className="border-border bg-card mt-12">
            <CardHeader>
              <CardTitle>How to Publish Articles</CardTitle>
              <CardDescription>
                Step-by-step process to move articles from submitted to published
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-foreground mb-2">1. Review the Article</p>
                <p className="text-muted-foreground">
                  Read through the content and make sure it meets your quality standards
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">2. Copy the Code</p>
                <p className="text-muted-foreground">
                  Click "Copy for blog-posts.ts" to copy the article in the correct format
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">3. Add to Blog Posts</p>
                <p className="text-muted-foreground">
                  Open <code className="bg-black/30 px-2 py-1 rounded text-xs">/lib/blog-posts.ts</code> and paste the article into the <code className="bg-black/30 px-2 py-1 rounded text-xs">blogPosts</code> array
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">4. Save and Deploy</p>
                <p className="text-muted-foreground">
                  Save the file and redeploy. The article will automatically appear on your blog
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
