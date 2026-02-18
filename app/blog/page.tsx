import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, TrendingUp } from "lucide-react"
import { blogCategories, blogPosts, getCategorySlug } from "@/lib/blog-posts"

const recentPosts = blogPosts.slice(0, 4)

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift hero-bg-image"
          style={{ backgroundImage: "url(/it-helpdesk-services-24-7.jpg)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/70" />

        {/* Floating Elements Animation */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-float-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/70 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-float-slow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-primary/50 rounded-full animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto hero-text-panel">
            <Badge className="mb-4 bg-primary/20 text-white border-primary/30">Technology Insights & Resources</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Insights, Trends, and Tips from 79 Ratio’s Technology Experts
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed text-pretty">
              Stay informed on the latest in cloud innovation, cybersecurity, and sector-specific advancements with our
              regularly updated blog.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white"
              />
            </div>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="#posts">Explore Our Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="posts" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Featured Articles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our most popular and impactful articles on technology best practices and industry trends.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Link href={`/blog/category/${getCategorySlug(post.category)}`}>
                        <Badge variant="secondary">{post.category}</Badge>
                      </Link>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Featured
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <div>{post.readTime}</div>
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
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">All Articles</h2>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="default" size="sm" className="text-xs">
                    <Link href="/blog">All Posts</Link>
                  </Button>
                  {blogCategories.map((category) => (
                    <Button key={category.slug} asChild variant="outline" size="sm" className="text-xs">
                      <Link href={`/blog/category/${category.slug}`}>{category.label}</Link>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-border bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between space-x-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-2">
                            <Link href={`/blog/category/${getCategorySlug(post.category)}`}>
                              <Badge variant="secondary" className="text-xs">
                                {post.category}
                              </Badge>
                            </Link>
                            {post.featured && (
                              <Badge className="text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground hover:text-primary transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {post.date}
                            </div>
                            <div>{post.readTime}</div>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-card-foreground hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`} className="text-sm leading-tight">
                          {post.title}
                        </Link>
                      </h4>
                      <div className="text-xs text-muted-foreground">{post.date}</div>
                      {index < recentPosts.length - 1 && <div className="border-b border-border pt-2" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {blogCategories.map((category) => (
                    <Button key={category.slug} asChild variant="ghost" className="w-full justify-start text-sm" size="sm">
                      <Link href={`/blog/category/${category.slug}`}>{category.label}</Link>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Newsletter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Get the latest technology insights and tips delivered to your inbox monthly.
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Your email address" type="email" />
                    <Button className="w-full" size="sm">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
