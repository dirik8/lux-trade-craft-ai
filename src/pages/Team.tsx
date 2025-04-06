
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, TwitterIcon, GlobeIcon } from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";

const TeamPage = () => {
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

  // Animation variants for the team section
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

  return (
    <>
      <Navigation />
      <main className="bg-blkr-black min-h-screen pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
                Our Expert Team
              </h1>
              <p className="mt-4 text-xl text-blkr-offWhite/80 max-w-3xl mx-auto">
                Meet the professionals behind BLKR Trading's success. Our diverse team brings 
                together decades of experience across traditional finance, blockchain technology, 
                and cryptocurrency trading.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {teamMembers.map((member) => (
                <motion.div key={member.id} variants={item}>
                  <Card className="card-premium overflow-hidden hover:shadow-lg hover:shadow-blkr-gold/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-sm text-blkr-gold mb-3">{member.role}</p>
                        <p className="text-blkr-offWhite/80 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blkr-offWhite/70 hover:text-blkr-gold">
                              <LinkedinIcon size={18} />
                            </a>
                          )}
                          {member.twitter && (
                            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blkr-offWhite/70 hover:text-blkr-gold">
                              <TwitterIcon size={18} />
                            </a>
                          )}
                          {member.website && (
                            <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-blkr-offWhite/70 hover:text-blkr-gold">
                              <GlobeIcon size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-20 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Want to join our elite trading team?</h2>
              <CTAButton text="Apply for a Position" href="/apply-to-join" className="text-lg px-8 py-6" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TeamPage;
