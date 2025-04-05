
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Tag, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

// Mock API function (replace with actual API call when backend is available)
const fetchBlogPost = async (slug: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock post data
  const post = {
    id: 1,
    title: "Understanding Crypto Market Cycles and How to Profit From Them",
    content: `
      <p class="text-lg mb-6">The cryptocurrency market is known for its cyclical nature, with patterns of boom and bust that repeat over time. Understanding these cycles is crucial for investors looking to maximize their returns and minimize risks.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Four Phases of Crypto Market Cycles</h2>
      
      <p class="mb-4">Like traditional markets, crypto market cycles typically consist of four phases:</p>
      
      <h3 class="text-xl font-bold mt-6 mb-2">1. Accumulation Phase</h3>
      <p class="mb-4">This phase occurs after a period of decline when market sentiment is still negative. Prices stabilize as investors who recognize value at these lower prices begin to accumulate positions. Trading volume is typically low, and public interest is minimal.</p>
      <p class="mb-4">During this phase, smart money—institutional investors and experienced traders—begin to build positions while prices are low, anticipating future appreciation.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-2">2. Markup Phase (Bull Market)</h3>
      <p class="mb-4">As more investors recognize the trend reversal, prices begin to rise. Technical indicators confirm the uptrend, and trading volume increases. Market sentiment shifts from negative to neutral and eventually to positive.</p>
      <p class="mb-4">As prices rise, media coverage increases, attracting more investors to the market. This phase often includes several pullbacks and consolidation periods, but the overall trend is upward.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-2">3. Distribution Phase</h3>
      <p class="mb-4">After a sustained uptrend, the market reaches a point where selling pressure begins to match or exceed buying pressure. Prices often move sideways in a range as early investors begin to sell their holdings to late-arriving market participants.</p>
      <p class="mb-4">This phase is characterized by excessive optimism, belief that "this time is different," and media hype. Technical indicators may show divergences, and trading volume often peaks during this period.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-2">4. Markdown Phase (Bear Market)</h3>
      <p class="mb-4">Eventually, selling pressure overwhelms buying pressure, and prices begin to decline. The downtrend accelerates as more investors sell their holdings to avoid further losses. Market sentiment turns increasingly negative.</p>
      <p class="mb-4">This phase often includes bear market rallies (temporary upward movements), but the overall trend is downward until prices reach levels that again attract accumulation, starting the cycle anew.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Strategies for Each Phase</h2>
      
      <h3 class="text-xl font-bold mt-6 mb-2">Accumulation Phase Strategies:</h3>
      <ul class="list-disc list-inside mb-4 ml-4 space-y-2">
          <li>Dollar-cost averaging into fundamentally strong projects</li>
          <li>Focus on projects with strong teams, active development, and real-world utility</li>
          <li>Set target allocations for your portfolio and stick to them</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-2">Markup Phase Strategies:</h3>
      <ul class="list-disc list-inside mb-4 ml-4 space-y-2">
          <li>Set incremental profit-taking targets</li>
          <li>Trail stop losses as prices rise</li>
          <li>Consider rotating from large-cap cryptocurrencies to promising mid-caps as the bull market matures</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-2">Distribution Phase Strategies:</h3>
      <ul class="list-disc list-inside mb-4 ml-4 space-y-2">
          <li>Take profits on significant portions of your positions</li>
          <li>Move to more conservative allocations</li>
          <li>Watch for technical divergences and sentiment extremes</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-2">Markdown Phase Strategies:</h3>
      <ul class="list-disc list-inside mb-4 ml-4 space-y-2">
          <li>Maintain higher cash allocations</li>
          <li>Focus on capital preservation</li>
          <li>Watch for signs of capitulation that often mark cycle bottoms</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">While no investor can perfectly time market cycles, understanding the characteristics of each phase can significantly improve your decision-making. By recognizing which phase the market is likely in, you can adjust your strategy accordingly, optimizing your risk and potential returns.</p>
      <p class="mb-4">Remember that crypto market cycles are often more dramatic and compressed than traditional market cycles. Volatility is higher, and transitions between phases can happen more quickly. This makes risk management and emotional discipline even more critical.</p>
    `,
    author: "Alexander Thompson",
    authorPosition: "Founder & Head Trader",
    authorImage: "/placeholder.svg",
    date: "2025-03-28",
    category: "Market Analysis",
    readTime: "8 min read",
    image: "/placeholder.svg",
    slug: "understanding-crypto-market-cycles"
  };
  
  // In a real implementation, you would fetch the post based on the slug
  return post;
};

// Mock related posts function
const fetchRelatedPosts = async (slug: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: 2,
      title: "5 Essential Risk Management Strategies for Crypto Traders",
      excerpt: "Discover the essential risk management techniques that professional traders use to protect their capital in volatile markets.",
      author: "David Patel",
      date: "2025-03-22",
      image: "/placeholder.svg",
      slug: "essential-risk-management-strategies"
    },
    {
      id: 3,
      title: "Technical Analysis 101: Essential Indicators for Crypto Trading",
      excerpt: "A comprehensive guide to the most important technical indicators that every crypto trader should understand and use.",
      author: "Sophia Rodriguez",
      date: "2025-03-15",
      image: "/placeholder.svg",
      slug: "technical-analysis-101"
    }
  ];
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => fetchBlogPost(slug || ""),
    enabled: !!slug,
  });

  const { data: relatedPosts = [], isLoading: relatedLoading } = useQuery({
    queryKey: ["relatedPosts", slug],
    queryFn: () => fetchRelatedPosts(slug || ""),
    enabled: !!slug,
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    });
  };

  if (postLoading) {
    return (
      <>
        <Navigation />
        <main className="bg-blkr-black min-h-screen pt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blkr-gold"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="bg-blkr-black min-h-screen pt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
              <p className="text-blkr-offWhite/80 mb-8">The article you're looking for doesn't exist or has been removed.</p>
              <Link to="/blog">
                <Button>Return to Blog</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="bg-blkr-black min-h-screen pt-24">
        <article className="container mx-auto px-4 py-12">
          {/* Back to blog link */}
          <div className="mb-8">
            <Link to="/blog" className="text-blkr-gold hover:text-blkr-goldLight flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>

          {/* Featured image */}
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-64 md:h-96 object-cover rounded-lg border border-blkr-gold/20"
            />
          </div>

          {/* Article header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Tag size={16} className="text-blkr-gold" />
              <span className="text-sm text-blkr-gold">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-blkr-offWhite/70">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article content */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author bio */}
          <div className="mb-12">
            <Card className="card-premium">
              <div className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-center md:text-left">About the Author</h3>
                  <p className="text-blkr-gold mb-2 text-center md:text-left">{post.author}, {post.authorPosition}</p>
                  <p className="text-blkr-offWhite/80">
                    Alexander is a Certified Financial Planner with over 15 years of experience in traditional 
                    markets and 7 years in cryptocurrency trading. He shares his insights and strategies to help 
                    traders navigate the complex world of digital assets.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Social sharing */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Share this Article</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={handleCopyLink}>
                <Copy size={18} />
              </Button>
            </div>
          </div>

          {/* Related articles */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            {relatedLoading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blkr-gold"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map(post => (
                  <Card key={post.id} className="card-premium overflow-hidden">
                    <div className="grid grid-cols-3 h-full">
                      <div className="col-span-1">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="col-span-2 p-4 flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-bold mb-2">{post.title}</h4>
                          <p className="text-sm text-blkr-offWhite/80 line-clamp-2">{post.excerpt}</p>
                        </div>
                        <Link to={`/blog/${post.slug}`} className="text-blkr-gold hover:text-blkr-goldLight text-sm flex items-center gap-1 mt-2">
                          Read more <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
