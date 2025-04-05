
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, Clock, ArrowRight, Tag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// Mock API function (replace with actual API call when backend is available)
const fetchBlogPosts = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: 1,
      title: "Understanding Crypto Market Cycles and How to Profit From Them",
      excerpt: "Learn how to identify different phases of crypto market cycles and position your portfolio for maximum gains.",
      author: "Alexander Thompson",
      date: "2025-03-28",
      category: "Market Analysis",
      readTime: "8 min read",
      image: "/placeholder.svg",
      featured: true,
      slug: "understanding-crypto-market-cycles"
    },
    {
      id: 2,
      title: "5 Essential Risk Management Strategies for Crypto Traders",
      excerpt: "Discover the essential risk management techniques that professional traders use to protect their capital in volatile markets.",
      author: "David Patel",
      date: "2025-03-22",
      category: "Trading Strategies",
      readTime: "6 min read",
      image: "/placeholder.svg",
      featured: false,
      slug: "essential-risk-management-strategies"
    },
    {
      id: 3,
      title: "Technical Analysis 101: Essential Indicators for Crypto Trading",
      excerpt: "A comprehensive guide to the most important technical indicators that every crypto trader should understand and use.",
      author: "Sophia Rodriguez",
      date: "2025-03-15",
      category: "Technical Analysis",
      readTime: "10 min read",
      image: "/placeholder.svg",
      featured: false,
      slug: "technical-analysis-101"
    },
    {
      id: 4,
      title: "DeFi Yield Farming: Opportunities and Risks",
      excerpt: "An in-depth look at yield farming strategies, potential returns, and the hidden risks to be aware of.",
      author: "Michael Chen",
      date: "2025-03-08",
      category: "DeFi",
      readTime: "7 min read",
      image: "/placeholder.svg",
      featured: false,
      slug: "defi-yield-farming"
    },
    {
      id: 5,
      title: "Fundamental Analysis in Crypto: Evaluating Projects for Long-Term Value",
      excerpt: "Learn how to assess crypto projects beyond the hype by analyzing tokenomics, team experience, and real-world utility.",
      author: "Robert Kim",
      date: "2025-03-01",
      category: "Fundamental Analysis",
      readTime: "9 min read",
      image: "/placeholder.svg",
      featured: false,
      slug: "fundamental-analysis-in-crypto"
    },
    {
      id: 6,
      title: "NFT Trading: From Collectibles to Investment Opportunities",
      excerpt: "Explore how NFTs are evolving from digital collectibles into serious investment vehicles with unique market dynamics.",
      author: "Jennifer Wilson",
      date: "2025-02-22",
      category: "NFTs",
      readTime: "8 min read",
      image: "/placeholder.svg",
      featured: false,
      slug: "nft-trading-investment-opportunities"
    }
  ];
};

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
  });

  const categories = [
    "All Categories", 
    "Market Analysis", 
    "Trading Strategies", 
    "Technical Analysis", 
    "DeFi", 
    "Fundamental Analysis"
  ];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || selectedCategory === "All Categories" || 
                            post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  // Get non-featured posts
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Navigation />
      <main className="bg-blkr-black min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
              BLKR Trading Blog
            </h1>
            <p className="mt-4 text-xl text-blkr-offWhite/80 max-w-3xl mx-auto">
              Insights, strategies, and market analysis to elevate your crypto trading knowledge
            </p>
          </div>

          {/* Search and filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blkr-offWhite/50" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-blkr-blackLight border-blkr-gold/20 focus:border-blkr-gold text-blkr-offWhite"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0">
              <select
                className="w-full md:w-auto bg-blkr-blackLight border-blkr-gold/20 rounded-md px-4 py-2 text-blkr-offWhite focus:border-blkr-gold outline-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blkr-gold"></div>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featuredPost && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
                  <Card className="card-premium overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="aspect-video md:aspect-auto overflow-hidden">
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Tag size={16} className="text-blkr-gold" />
                            <span className="text-sm text-blkr-gold">{featuredPost.category}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{featuredPost.title}</h3>
                          <p className="text-blkr-offWhite/80 mb-4">{featuredPost.excerpt}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-blkr-offWhite/60">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User size={14} />
                              <span>{featuredPost.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{featuredPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <Link to={`/blog/${featuredPost.slug}`} className="mt-4 inline-flex">
                          <Button className="gap-2">
                            Read Article <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              )}

              {/* Regular posts */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map(post => (
                      <Card key={post.id} className="card-premium overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Tag size={16} className="text-blkr-gold" />
                            <span className="text-sm text-blkr-gold">{post.category}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                          <p className="text-blkr-offWhite/80 text-sm mb-4">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-3 text-xs text-blkr-offWhite/60">
                            <div className="flex items-center gap-1">
                              <Calendar size={12} />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User size={12} />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={12} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0 px-6 pb-6">
                          <Link to={`/blog/${post.slug}`} className="text-blkr-gold hover:text-blkr-goldLight flex items-center gap-1">
                            Read more <ArrowRight size={14} />
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-blkr-offWhite/80">No articles found matching your search criteria.</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
