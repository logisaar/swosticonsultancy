import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Tax Saving Tips for FY 2024-25',
      excerpt: 'Discover the most effective tax-saving strategies under the new tax regime and maximize your savings with these expert tips.',
      category: 'Tax Planning',
      author: 'CA Abinash Mishra',
      date: '2024-03-15',
      readTime: '5 min read',
      featured: true,
      tags: ['Tax Planning', 'Income Tax', 'Savings']
    },
    {
      id: 2,
      title: 'Complete Guide to GST Registration for New Businesses',
      excerpt: 'Everything you need to know about GST registration, compliance requirements, and benefits for your new business venture.',
      category: 'GST',
      author: 'CA Abinash Mishra',
      date: '2024-03-10',
      readTime: '8 min read',
      featured: false,
      tags: ['GST', 'Business Registration', 'Compliance']
    },
    {
      id: 3,
      title: 'Startup Registration Checklist: Complete Step-by-Step Guide',
      excerpt: 'A comprehensive checklist covering all aspects of startup registration, from ideation to incorporation and compliance.',
      category: 'Business Registration',
      author: 'CA Abinash Mishra',
      date: '2024-03-05',
      readTime: '10 min read',
      featured: true,
      tags: ['Startup', 'Company Registration', 'Legal Compliance']
    },
    {
      id: 4,
      title: 'NRI Investment Guide: Tax Implications and DTAA Benefits',
      excerpt: 'Understanding tax implications for NRI investments in India and how to leverage Double Taxation Avoidance Agreement benefits.',
      category: 'NRI Services',
      author: 'CA Abinash Mishra',
      date: '2024-02-28',
      readTime: '12 min read',
      featured: false,
      tags: ['NRI', 'Investment', 'DTAA', 'Tax Planning']
    },
    {
      id: 5,
      title: 'ROC Compliance: Annual Filing Requirements Explained',
      excerpt: 'Stay compliant with ROC requirements. Learn about annual filings, deadlines, and penalties to avoid compliance issues.',
      category: 'Compliance',
      author: 'CA Abinash Mishra',
      date: '2024-02-20',
      readTime: '6 min read',
      featured: false,
      tags: ['ROC', 'Compliance', 'Annual Filings']
    },
    {
      id: 6,
      title: 'Financial Planning for Small Businesses: Cash Flow Management',
      excerpt: 'Essential financial planning strategies for small businesses to maintain healthy cash flow and ensure sustainable growth.',
      category: 'Financial Advisory',
      author: 'CA Abinash Mishra',
      date: '2024-02-15',
      readTime: '7 min read',
      featured: false,
      tags: ['Financial Planning', 'Cash Flow', 'Small Business']
    },
    {
      id: 7,
      title: 'Understanding Section 44AD: Presumptive Taxation for Businesses',
      excerpt: 'Learn how Section 44AD can simplify tax compliance for small businesses and when to opt for presumptive taxation.',
      category: 'Tax Planning',
      author: 'CA Abinash Mishra',
      date: '2024-02-10',
      readTime: '9 min read',
      featured: false,
      tags: ['Section 44AD', 'Presumptive Taxation', 'Small Business']
    },
    {
      id: 8,
      title: 'Audit Preparation: Essential Documents and Best Practices',
      excerpt: 'Comprehensive guide to audit preparation including document organization, best practices, and common audit findings.',
      category: 'Auditing',
      author: 'CA Abinash Mishra',
      date: '2024-02-05',
      readTime: '11 min read',
      featured: false,
      tags: ['Audit', 'Documentation', 'Best Practices']
    }
  ];

  const categories = ['All', 'Tax Planning', 'GST', 'Business Registration', 'NRI Services', 'Compliance', 'Financial Advisory', 'Auditing'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            CA Blog & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and regulatory changes in 
            taxation, compliance, and financial management from our expert CA team.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "professional" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Posts */}
            {selectedCategory === 'All' && searchTerm === '' && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Card key={post.id} className="shadow-professional hover:shadow-ca-lg transition-all duration-300 transform hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge className="bg-ca-gold text-foreground">Featured</Badge>
                        </div>
                        <CardTitle className="text-xl hover:text-primary transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Button variant="professional" asChild>
                          <Link to={`/blog/${post.id}`}>
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'All Articles'}
              </h2>
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="shadow-ca-md hover:shadow-ca-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3">
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge variant="outline">{post.category}</Badge>
                            {post.featured && (
                              <Badge className="bg-ca-gold text-foreground text-xs">Featured</Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-primary mb-3 hover:text-primary-dark transition-colors">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="md:col-span-1 flex flex-col justify-between">
                          <div className="space-y-2 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/blog/${post.id}`}>
                              Read Article
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Recent Posts */}
              <Card className="shadow-ca-md">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Recent Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-medium text-foreground mb-2 hover:text-primary transition-colors">
                          <Link to={`/blog/${post.id}`} className="line-clamp-2">
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="shadow-ca-md">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "professional" : "ghost"}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                        <span className="ml-auto text-xs">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="shadow-ca-md bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to our newsletter for the latest tax updates and financial insights.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Enter your email" />
                    <Button variant="professional" size="sm" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center bg-gradient-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Need Professional Advice?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reading our articles is just the beginning. Get personalized guidance 
            from our expert CA team for your specific financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;