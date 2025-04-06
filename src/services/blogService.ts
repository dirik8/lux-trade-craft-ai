import { useQuery } from "@tanstack/react-query";

// Types for our blog system
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorPosition?: string;
  authorImage?: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
  slug: string;
  source?: string;
  sourceUrl?: string;
}

// RSS feed sources
const rssSources = [
  "https://www.coindesk.com/arc/outboundfeeds/rss/",
  "https://cointelegraph.com/rss",
  "https://decrypt.co/feed",
];

// Mock function to fetch and parse RSS feeds (to be replaced with actual implementation)
const fetchRssFeeds = async (): Promise<BlogPost[]> => {
  console.log("Fetching RSS feeds...");
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real implementation, we would:
  // 1. Fetch RSS feeds from the sources
  // 2. Parse the XML
  // 3. Convert to our BlogPost format
  // 4. Process with AI for summarization or enhancement
  
  // For now, we'll return mock data
  return [
    {
      id: 7,
      title: "Bitcoin ETFs See $100M in Outflows: Market Analysis",
      excerpt: "Bitcoin ETFs experienced significant outflows this week, raising questions about institutional sentiment.",
      content: `<p>Bitcoin ETFs have seen approximately $100 million in outflows over the past week, marking a shift in institutional sentiment. This article explores the potential causes and what it might mean for the broader crypto market.</p>
      <h2>Institutional Sentiment Shift</h2>
      <p>After months of consistent inflows, Bitcoin ETFs are now experiencing their first significant outflows. Analysts suggest this could be due to several factors:</p>
      <ul>
        <li>Profit-taking after Bitcoin's recent all-time highs</li>
        <li>Concerns about regulatory developments</li>
        <li>Portfolio rebalancing by institutional investors</li>
      </ul>
      <h2>Market Impact</h2>
      <p>Despite these outflows, Bitcoin's price has remained relatively stable, suggesting strong support at current levels from other market participants.</p>`,
      author: "CoinDesk",
      date: "2025-04-05",
      category: "Market Analysis",
      readTime: "5 min read",
      image: "/placeholder.svg",
      featured: false,
      slug: "bitcoin-etfs-outflows-market-analysis",
      source: "CoinDesk",
      sourceUrl: "https://www.coindesk.com/markets/2025/04/05/bitcoin-etfs-see-100m-in-outflows/"
    },
    {
      id: 8,
      title: "Ethereum Upgrades to Implement New Scaling Solutions",
      excerpt: "Ethereum developers have announced the timeline for the next major network upgrade focused on scaling improvements.",
      content: `<p>Ethereum's core developers have announced plans for the next major network upgrade, scheduled for Q3 2025. The upgrade will focus primarily on scaling solutions and infrastructure improvements.</p>
      <h2>Key Improvements</h2>
      <p>The upcoming Ethereum upgrade will introduce several key improvements:</p>
      <ul>
        <li>Enhanced sharding implementation</li>
        <li>Reduced gas fees through optimizations</li>
        <li>Improved validator rewards distribution</li>
        <li>Better cross-layer compatibility</li>
      </ul>
      <h2>Impact on DeFi and NFTs</h2>
      <p>These improvements are expected to significantly benefit the DeFi and NFT ecosystems built on Ethereum, potentially driving increased adoption and activity.</p>`,
      author: "Cointelegraph",
      date: "2025-04-04",
      category: "Technology",
      readTime: "6 min read",
      image: "/placeholder.svg",
      featured: true,
      slug: "ethereum-upgrades-scaling-solutions",
      source: "Cointelegraph",
      sourceUrl: "https://cointelegraph.com/news/ethereum-upgrades-scaling-solutions"
    },
    {
      id: 9,
      title: "DeFi Lending Protocols See Surge in TVL Despite Market Volatility",
      excerpt: "Leading DeFi lending protocols have reported a substantial increase in Total Value Locked despite recent market volatility.",
      content: `<p>Despite recent market volatility, major DeFi lending protocols have seen their Total Value Locked (TVL) increase by over 30% in the past month. This trend suggests growing confidence in decentralized finance even during uncertain market conditions.</p>
      <h2>Rising TVL Metrics</h2>
      <p>Several leading protocols have reported significant increases:</p>
      <ul>
        <li>Aave: 37% increase in TVL</li>
        <li>Compound: 32% increase</li>
        <li>MakerDAO: 28% increase</li>
      </ul>
      <h2>Changing User Behavior</h2>
      <p>Analysis of on-chain data reveals interesting patterns in user behavior, with more users seeking yield opportunities and using DeFi protocols for sophisticated trading strategies.</p>`,
      author: "Decrypt",
      date: "2025-04-03",
      category: "DeFi",
      readTime: "7 min read",
      image: "/placeholder.svg",
      featured: false,
      slug: "defi-lending-tvl-surge",
      source: "Decrypt",
      sourceUrl: "https://decrypt.co/articles/defi-lending-tvl-surge"
    }
  ];
};

// AI enhancement service (mock)
const enhanceWithAI = async (posts: BlogPost[]): Promise<BlogPost[]> => {
  console.log("Enhancing posts with AI...");
  
  // In a real implementation, we would:
  // 1. Send post content to an AI service (e.g., OpenAI API)
  // 2. Get enhanced titles, excerpts, or content
  // 3. Maybe categorize or tag content automatically
  
  // For now, we'll just return the posts unchanged
  return posts;
};

// Function to combine our own content with RSS feed content
export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      // Fetch RSS feeds and enhance with AI
      const rssPosts = await fetchRssFeeds();
      const enhancedPosts = await enhanceWithAI(rssPosts);
      
      // Combine with our own original content
      const originalPosts: BlogPost[] = [
        {
          id: 1,
          title: "Understanding Crypto Market Cycles and How to Profit From Them",
          excerpt: "Learn how to identify different phases of crypto market cycles and position your portfolio for maximum gains.",
          author: "Alexander Thompson",
          authorPosition: "Head of Market Research",
          authorImage: "/placeholder.svg",
          date: "2025-03-28",
          category: "Market Analysis",
          readTime: "8 min read",
          image: "/placeholder.svg",
          featured: true,
          slug: "understanding-crypto-market-cycles",
          content: `
            <p class="text-lg mb-6">The cryptocurrency market is known for its cyclical nature, with patterns of boom and bust that repeat over time. Understanding these cycles is crucial for investors looking to maximize their returns and minimize risks.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">The Four Phases of Crypto Market Cycles</h2>
            
            <p class="mb-4">Like traditional markets, crypto market cycles typically consist of four phases:</p>
            
            <h3 class="text-xl font-bold mt-6 mb-2">1. Accumulation Phase</h3>
            <p class="mb-4">This phase occurs after a period of decline when market sentiment is still negative. Prices stabilize as investors who recognize value at these lower prices begin to accumulate positions.</p>
            
            <h3 class="text-xl font-bold mt-6 mb-2">2. Markup Phase (Bull Market)</h3>
            <p class="mb-4">As more investors recognize the trend reversal, prices begin to rise. Technical indicators confirm the uptrend, and trading volume increases.</p>
            
            <h3 class="text-xl font-bold mt-6 mb-2">3. Distribution Phase</h3>
            <p class="mb-4">After a sustained uptrend, the market reaches a point where selling pressure begins to match or exceed buying pressure.</p>
            
            <h3 class="text-xl font-bold mt-6 mb-2">4. Markdown Phase (Bear Market)</h3>
            <p class="mb-4">Eventually, selling pressure overwhelms buying pressure, and prices begin to decline.</p>
          `,
        },
        {
          id: 2,
          title: "5 Essential Risk Management Strategies for Crypto Traders",
          excerpt: "Discover the essential risk management techniques that professional traders use to protect their capital in volatile markets.",
          author: "David Patel",
          authorPosition: "Senior Risk Analyst",
          authorImage: "/placeholder.svg",
          date: "2025-03-22",
          category: "Trading Strategies",
          readTime: "6 min read",
          image: "/placeholder.svg",
          featured: false,
          slug: "essential-risk-management-strategies",
          content: "This is the content for the risk management article."
        },
        {
          id: 3,
          title: "Technical Analysis 101: Essential Indicators for Crypto Trading",
          excerpt: "A comprehensive guide to the most important technical indicators that every crypto trader should understand and use.",
          author: "Sophia Rodriguez",
          authorPosition: "Technical Analysis Specialist",
          authorImage: "/placeholder.svg",
          date: "2025-03-15",
          category: "Technical Analysis",
          readTime: "10 min read",
          image: "/placeholder.svg",
          featured: false,
          slug: "technical-analysis-101",
          content: "This is the content for the technical analysis article."
        },
        {
          id: 4,
          title: "DeFi Yield Farming: Opportunities and Risks",
          excerpt: "An in-depth look at yield farming strategies, potential returns, and the hidden risks to be aware of.",
          author: "Michael Chen",
          authorPosition: "DeFi Researcher",
          authorImage: "/placeholder.svg",
          date: "2025-03-08",
          category: "DeFi",
          readTime: "7 min read",
          image: "/placeholder.svg",
          featured: false,
          slug: "defi-yield-farming",
          content: "This is the content for the DeFi yield farming article."
        },
        {
          id: 5,
          title: "Fundamental Analysis in Crypto: Evaluating Projects for Long-Term Value",
          excerpt: "Learn how to assess crypto projects beyond the hype by analyzing tokenomics, team experience, and real-world utility.",
          author: "Robert Kim",
          authorPosition: "Fundamental Analyst",
          authorImage: "/placeholder.svg",
          date: "2025-03-01",
          category: "Fundamental Analysis",
          readTime: "9 min read",
          image: "/placeholder.svg",
          featured: false,
          slug: "fundamental-analysis-in-crypto",
          content: "This is the content for the fundamental analysis article."
        },
        {
          id: 6,
          title: "NFT Trading: From Collectibles to Investment Opportunities",
          excerpt: "Explore how NFTs are evolving from digital collectibles into serious investment vehicles with unique market dynamics.",
          author: "Jennifer Wilson",
          authorPosition: "NFT Market Specialist",
          authorImage: "/placeholder.svg",
          date: "2025-02-22",
          category: "NFTs",
          readTime: "8 min read",
          image: "/placeholder.svg",
          featured: false,
          slug: "nft-trading-investment-opportunities",
          content: "This is the content for the NFT trading article."
        }
      ];
      
      // Combine and sort by date (most recent first)
      const allPosts = [...originalPosts, ...enhancedPosts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      
      return allPosts;
    },
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
};

// Function to get a single blog post by slug
export const useBlogPost = (slug: string | undefined) => {
  const { data: allPosts } = useBlogPosts();
  
  return useQuery({
    queryKey: ["blogPost", slug],
    queryFn: async () => {
      if (!slug || !allPosts) return null;
      return allPosts.find(post => post.slug === slug) || null;
    },
    enabled: !!slug && !!allPosts,
  });
};

// Function to get related posts
export const useRelatedPosts = (slug: string | undefined, category: string | undefined) => {
  const { data: allPosts } = useBlogPosts();
  
  return useQuery({
    queryKey: ["relatedPosts", slug, category],
    queryFn: async () => {
      if (!slug || !allPosts || !category) return [];
      
      // Find posts in the same category, excluding the current post
      return allPosts
        .filter(post => post.slug !== slug && post.category === category)
        .slice(0, 3); // Limit to 3 related posts
    },
    enabled: !!slug && !!allPosts && !!category,
  });
};
