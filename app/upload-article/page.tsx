'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { blogCategories } from '@/lib/blog-posts'

export default function UploadArticlePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    author: '',
    category: 'Cybersecurity',
    readTime: '5 min read',
    contentHtml: '',
    featured: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const inputElement = e.target as HTMLInputElement
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? inputElement.checked : value
    }))

    // Auto-generate slug from title
    if (name === 'title') {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setFormData(prev => ({
        ...prev,
        slug: generatedSlug
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitError('')

    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmitError(data.error || 'Failed to submit article')
        return
      }

      setSubmitMessage('Article submitted successfully! It will be reviewed and added to the blog.')
      
      // Reset form
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        author: '',
        category: 'Cybersecurity',
        readTime: '5 min read',
        contentHtml: '',
        featured: false
      })
    } catch (error) {
      setSubmitError('An error occurred while submitting the article. Please try again.')
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/76 via-black/58 to-black/76" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary text-balance">Share Your Insights</h1>
          <p className="text-xl text-white/95 leading-relaxed text-pretty max-w-3xl mx-auto">
            Contribute an article to our blog and help the community stay informed about technology, security, and business excellence.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Submit an Article</CardTitle>
              <CardDescription>
                Fill out the form below to submit your article for our blog. Our team will review it before publishing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Article Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Article Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., 5 Essential Cybersecurity Practices for 2024"
                    required
                  />
                </div>

                {/* Article Slug */}
                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug * (auto-generated from title)</Label>
                  <Input
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="article-url-slug"
                    required
                  />
                  <p className="text-xs text-muted-foreground">This will be used in the article URL</p>
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Article Excerpt * (1-2 sentences)</Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    placeholder="Brief summary of the article for the listing page"
                    className="min-h-[80px]"
                    required
                  />
                </div>

                {/* Author */}
                <div className="space-y-2">
                  <Label htmlFor="author">Author Name *</Label>
                  <Input
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    required
                  >
                    {blogCategories.map(cat => (
                      <option key={cat.slug} value={cat.label}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Read Time */}
                <div className="space-y-2">
                  <Label htmlFor="readTime">Estimated Read Time *</Label>
                  <Input
                    id="readTime"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleChange}
                    placeholder="e.g., 8 min read"
                    required
                  />
                </div>

                {/* Featured */}
                <div className="flex items-center space-x-2">
                  <input
                    id="featured"
                    name="featured"
                    type="checkbox"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="h-4 w-4 accent-primary"
                  />
                  <Label htmlFor="featured" className="cursor-pointer">
                    Feature this article on the homepage
                  </Label>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label htmlFor="contentHtml">Article Content (HTML) *</Label>
                  <Textarea
                    id="contentHtml"
                    name="contentHtml"
                    value={formData.contentHtml}
                    onChange={handleChange}
                    placeholder={`<h2>Introduction</h2>\n<p>Your article content here...</p>\n<h2>Section Title</h2>\n<p>More content...</p>`}
                    className="min-h-[300px] font-mono text-sm"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Use HTML for formatting: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, etc.
                  </p>
                </div>

                {/* Messages */}
                {submitMessage && (
                  <div className="rounded-md bg-green-500/15 border border-green-500/30 p-4">
                    <p className="text-sm text-green-600 dark:text-green-400">{submitMessage}</p>
                  </div>
                )}

                {submitError && (
                  <div className="rounded-md bg-red-500/15 border border-red-500/30 p-4">
                    <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Article'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * All fields are required
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="border-border bg-card mt-8">
            <CardHeader>
              <CardTitle className="text-lg">HTML Content Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Headings:</p>
                <code className="block bg-black/50 p-2 rounded">&lt;h2&gt;Section Title&lt;/h2&gt;</code>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Paragraphs:</p>
                <code className="block bg-black/50 p-2 rounded">&lt;p&gt;Your text here&lt;/p&gt;</code>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Lists:</p>
                <code className="block bg-black/50 p-2 rounded">&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</code>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Bold/Italic:</p>
                <code className="block bg-black/50 p-2 rounded">&lt;strong&gt;Bold&lt;/strong&gt; &lt;em&gt;Italic&lt;/em&gt;</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
