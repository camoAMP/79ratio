import { NextRequest, NextResponse } from 'next/server'

// In-memory storage (will persist during server runtime)
// For production, consider using a database or persistent file storage
const submittedArticles: any[] = []

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'slug', 'excerpt', 'author', 'category', 'readTime', 'contentHtml']
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate slug format
    const slugRegex = /^[a-z0-9-]+$/
    if (!slugRegex.test(formData.slug.toLowerCase())) {
      return NextResponse.json(
        { error: 'Slug can only contain lowercase letters, numbers, and hyphens' },
        { status: 400 }
      )
    }

    // Create article object
    const newArticle = {
      title: formData.title.trim(),
      slug: formData.slug.trim().toLowerCase().replace(/\s+/g, '-'),
      excerpt: formData.excerpt.trim(),
      author: formData.author.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: formData.category,
      readTime: formData.readTime.trim(),
      featured: formData.featured === 'true' || formData.featured === true,
      contentHtml: formData.contentHtml.trim(),
      submittedAt: new Date().toISOString()
    }

    // Check for duplicate slugs
    if (submittedArticles.some(article => article.slug === newArticle.slug)) {
      return NextResponse.json(
        { error: 'An article with this slug already exists' },
        { status: 400 }
      )
    }

    // Store article
    submittedArticles.push(newArticle)

    return NextResponse.json(
      {
        success: true,
        message: 'Article submitted successfully!',
        article: newArticle
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing article:', error)
    return NextResponse.json(
      { error: 'Failed to process article submission' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      articles: submittedArticles,
      count: submittedArticles.length,
      message: `${submittedArticles.length} article${submittedArticles.length !== 1 ? 's' : ''} submitted`
    })
  } catch (error) {
    console.error('Error retrieving articles:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve articles' },
      { status: 500 }
    )
  }
}

