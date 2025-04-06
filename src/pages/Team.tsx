
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, TwitterIcon, GlobeIcon, Mail, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const TeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Alexander Thompson",
      role: "Founder & Head Trader",
      image: "/placeholder.svg",
      bio: "Certified Financial Planner with over 15 years of experience in traditional markets and 7 years in cryptocurrency trading.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    },
    {
      id: 2,
      name: "Sophia Rodriguez",
      role: "Chief Market Analyst",
      image: "/placeholder.svg",
      bio: "Former Wall Street analyst specializing in technical analysis and market trends with a focus on emerging crypto assets.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: ""
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Trading Systems Developer",
      image: "/placeholder.svg",
      bio: "Blockchain developer and quantitative analyst responsible for developing our proprietary trading algorithms.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: ""
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "Education Director",
      image: "/placeholder.svg",
      bio: "Financial educator with expertise in translating complex trading concepts into accessible learning materials.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: ""
    },
    {
      id: 5,
      name: "David Patel",
      role: "Risk Management Specialist",
      image: "/placeholder.svg",
      bio: "Expert in portfolio construction and risk mitigation strategies for volatile crypto markets.",
      linkedin: "https://linkedin.com",
      twitter: "",
      website: "https://example.com"
    },
    {
      id: 6,
      name: "Jessica Williams",
      role: "Community Manager",
      image: "/placeholder.svg",
      bio: "Responsible for cultivating our vibrant trading community and ensuring members receive timely support.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: ""
    },
    {
      id: 7,
      name: "Robert Kim",
      role: "Fundamental Research Analyst",
      image: "/placeholder.svg",
      bio: "Specializes in evaluating blockchain projects, tokenomics, and on-chain metrics to identify promising investments.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: ""
    },
    {
      id: 8,
      name: "Olivia Martinez",
      role: "Compliance Officer",
      image: "/placeholder.svg",
      bio: "Former regulatory advisor ensuring our trading programs meet international compliance standards.",
      linkedin: "https://linkedin.com",
      twitter: "",
      website: "https://example.com"
    },
    {
      id: 9,
      name: "William Jackson",
      role: "Technical Trading Coach",
      image: "/placeholder.svg",
      bio: "Specializes in chart pattern recognition and technical indicator strategies for day traders.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: ""
    },
    {
      id: 10,
      name: "Elizabeth Taylor",
      role: "Sentiment Analysis Expert",
      image: "/placeholder.svg",
      bio: "Data scientist focused on social media and news sentiment analysis for trading opportunities.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: ""
    },
    {
      id: 11,
      name: "Daniel Lee",
      role: "Institutional Relations",
      image: "/placeholder.svg",
      bio: "Former investment banker responsible for developing relationships with institutional trading partners.",
      linkedin: "https://linkedin.com",
      twitter: "",
      website: "https://example.com"
    },
    {
      id: 12,
      name: "Sarah Cooper",
      role: "Trading Psychology Coach",
      image: "/placeholder.svg",
      bio: "Certified coach specializing in mental resilience and psychological aspects of successful trading.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: ""
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  // Hero section animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-blkr-black via-blkr-blackLight to-blkr-black min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blkr-black via-blkr-black/80 to-blkr-black"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="inline-block mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Users size={64} className="text-blkr-gold mx-auto mb-6" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blkr-gold via-blkr-goldLight to-blkr-gold">
                Our Elite Trading Team
              </h1>
              
              <motion.p 
                className="mt-6 text-xl text-blkr-offWhite/80 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Meet the trading visionaries and financial experts behind BLKR Trading's unprecedented success. Our diverse team brings together decades of experience from Wall Street, Silicon Valley, and global financial markets.
              </motion.p>
              
              <motion.div 
                className="mt-10 flex justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button className="bg-blkr-gold hover:bg-blkr-goldLight text-blkr-black px-8 py-6 text-lg font-medium">
                  <Award size={18} className="mr-2" />
                  Join Our Team
                </Button>
                <Button variant="outline" className="border-blkr-gold/50 text-blkr-gold hover:bg-blkr-gold/10 px-8 py-6 text-lg">
                  <Mail size={18} className="mr-2" />
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated gold line */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blkr-gold to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          />
        </section>
      
        <section className="py-16 relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgyNGMxLjEgMCAyIC45IDIgMnYyNGMwIDEuMS0uOSAyLTIgMkg0MGMtMS4xIDAtMi0uOS0yLTJWMzR6TTQwIDRjMC0xLjEuOS0yIDItMmgyNGMxLjEgMCAyIC45IDIgMnYyNGMwIDEuMS0uOSAyLTIgMkg0MmMtMS4xIDAtMi0uOS0yLTJWNHpNNCAxNGMwLTEuMS45LTIgMi0yaDI0YzEuMSAwIDIgLjkgMiAydjI0YzAgMS4xLS45IDItMiAySDZjLTEuMSAwLTItLjktMi0yVjE0eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {teamMembers.map((member) => (
                <motion.div 
                  key={member.id} 
                  variants={item}
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <Card className="overflow-hidden relative group">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden relative">
                        {/* Gold overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-blkr-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>
                        
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        
                        {/* Gold border animation on hover */}
                        <motion.div 
                          className="absolute inset-0 pointer-events-none z-20"
                          animate={hoveredMember === member.id ? {
                            boxShadow: [
                              "inset 0 0 0 0 rgba(212,175,55,0)",
                              "inset 0 0 0 2px rgba(212,175,55,0.6)",
                            ]
                          } : {}}
                          transition={{ duration: 0.4 }}
                        ></motion.div>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-b from-blkr-blackLight to-black">
                        <motion.h3 
                          className="text-xl font-bold font-playfair"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {member.name}
                        </motion.h3>
                        
                        <p className="text-sm text-blkr-gold mb-3">{member.role}</p>
                        
                        <p className="text-blkr-offWhite/80 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {member.bio}
                        </p>
                        
                        <div className="flex space-x-3 pt-2">
                          {member.linkedin && (
                            <a 
                              href={member.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="bg-blkr-blackLight hover:bg-blkr-black text-blkr-gold/70 hover:text-blkr-gold p-2 rounded-full transition-colors duration-300"
                            >
                              <LinkedinIcon size={16} />
                            </a>
                          )}
                          {member.twitter && (
                            <a 
                              href={member.twitter} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="bg-blkr-blackLight hover:bg-blkr-black text-blkr-gold/70 hover:text-blkr-gold p-2 rounded-full transition-colors duration-300"
                            >
                              <TwitterIcon size={16} />
                            </a>
                          )}
                          {member.website && (
                            <a 
                              href={member.website} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="bg-blkr-blackLight hover:bg-blkr-black text-blkr-gold/70 hover:text-blkr-gold p-2 rounded-full transition-colors duration-300"
                            >
                              <GlobeIcon size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blkr-gold via-blkr-goldLight to-blkr-gold bg-clip-text text-transparent">
                Join Our Elite Trading Team
              </h2>
              <p className="text-blkr-offWhite/80 max-w-2xl mx-auto mb-8">
                We're always looking for exceptional talent to join our world-class team of trading professionals. If you have what it takes to excel in the high-stakes world of elite trading, we want to hear from you.
              </p>
              <Button className="bg-gradient-to-r from-blkr-gold to-blkr-goldDark text-blkr-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-shadow duration-300 px-8 py-6 text-lg">
                Apply for a Position
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TeamPage;
