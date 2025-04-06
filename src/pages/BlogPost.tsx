
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Tag, Facebook, Twitter, Linkedin, Copy, ArrowRight } from "lucide-react";
import { useBlogPost, useRelatedPosts } from "@/services/blogService";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  const { data: post, isLoading: postLoading } = useBlogPost(slug);
  const { data: relatedPosts = [], isLoading: relatedLoading } = useRelatedPosts(slug, post?.category);

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

  const excerptForMeta = post.excerpt.substring(0, 155) + (post.excerpt.length > 155 ? '...' : '');

  return (
    <>
      <Helmet>
        <title>{post.title} | BLKR Trading Blog</title>
        <meta name="description" content={excerptForMeta} />
        <meta name="keywords" content={`${post.category}, crypto trading, ${post.title.toLowerCase()}, BLKR Trading`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={excerptForMeta} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        <link rel="canonical" href={`https://blkrtrading.com/blog/${post.slug}`} />
        
        {/* Schema.org structured data for article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "image": post.image,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "BLKR Trading Community",
              "logo": {
                "@type": "ImageObject",
                "url": "https://blkrtrading.com/logo.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "description": post.excerpt
          })}
        </script>
      </Helmet>
      
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
              {post.source && (
                <Link 
                  to={post.sourceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blkr-offWhite/50 ml-2 hover:text-blkr-gold"
                >
                  via {post.source}
                </Link>
              )}
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
          {post.authorPosition && (
            <div className="mb-12">
              <Card className="card-premium">
                <div className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img 
                        src={post.authorImage || "/placeholder.svg"} 
                        alt={post.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-center md:text-left">About the Author</h3>
                    <p className="text-blkr-gold mb-2 text-center md:text-left">{post.author}, {post.authorPosition}</p>
                    <p className="text-blkr-offWhite/80">
                      {post.author} is a Certified Financial Planner with over 15 years of experience in traditional 
                      markets and 7 years in cryptocurrency trading. He shares his insights and strategies to help 
                      traders navigate the complex world of digital assets.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Social sharing */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Share this Article</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`)}>
                <Facebook size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`)}>
                <Twitter size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`)}>
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
            ) : relatedPosts.length > 0 ? (
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
            ) : (
              <p className="text-blkr-offWhite/70">No related articles found.</p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
