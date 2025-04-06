
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { TrendingUp, BarChart, Shield, Users, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }
    }
  };

  const statVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 1 + i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center bg-blkr-black overflow-hidden">
      {/* Video or Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blkr-black via-blkr-black/90 to-blkr-black z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-40 mix-blend-overlay"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stock-trading-monitor-closeup-34748-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Abstract gold shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 -left-10 w-64 h-64 rounded-full bg-blkr-gold/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blkr-gold/5 blur-3xl"></div>
      </div>
      
      {/* Gold particle lines - decorative */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-full h-px bg-gradient-to-r from-transparent via-blkr-gold/30 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blkr-gold/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div 
          ref={ref}
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blkr-gold/10 border border-blkr-gold/30 text-blkr-gold text-sm">
              <Shield className="mr-2 h-4 w-4" /> Elite Trading Community
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blkr-gold via-blkr-goldLight to-blkr-gold"
          >
            Join the Inner Circle of <span className="relative">
              Elite Traders
              <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blkr-gold to-transparent"></span>
            </span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants} 
            className="text-xl md:text-2xl font-light mb-8 text-blkr-offWhite/90"
          >
            The #1 Day Trading Community for High Achievers Ready to Master the Market and Achieve Unprecedented Financial Freedom.
          </motion.h2>
          
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button 
              onClick={() => window.location.href = "/join"}
              className="bg-gradient-to-r from-blkr-gold to-blkr-goldDark hover:from-blkr-goldLight hover:to-blkr-gold text-blkr-black text-lg px-8 py-6 rounded-md shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] transition-all duration-500"
            >
              Apply for Membership <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.location.href = "/programs"}
              className="border-blkr-gold/50 text-blkr-gold hover:bg-blkr-gold/10 text-lg px-8 py-6 rounded-md backdrop-blur-sm"
            >
              Discover Our Programs
            </Button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              custom={0}
              variants={statVariants}
              className="bg-gradient-to-b from-blkr-blackLight/80 to-black/80 backdrop-blur-md p-6 rounded-lg border border-blkr-gold/20 hover:border-blkr-gold/50 transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start">
                <div className="bg-blkr-gold/10 p-3 rounded-lg mr-4">
                  <TrendingUp className="text-blkr-gold h-6 w-6" />
                </div>
                <div>
                  <div className="text-blkr-gold text-3xl font-bold mb-2 font-playfair">$100M+</div>
                  <div className="text-blkr-offWhite/70">Trading Profits Generated</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              custom={1}
              variants={statVariants}
              className="bg-gradient-to-b from-blkr-blackLight/80 to-black/80 backdrop-blur-md p-6 rounded-lg border border-blkr-gold/20 hover:border-blkr-gold/50 transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start">
                <div className="bg-blkr-gold/10 p-3 rounded-lg mr-4">
                  <Users className="text-blkr-gold h-6 w-6" />
                </div>
                <div>
                  <div className="text-blkr-gold text-3xl font-bold mb-2 font-playfair">1,000+</div>
                  <div className="text-blkr-offWhite/70">Elite Members Worldwide</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              custom={2}
              variants={statVariants}
              className="bg-gradient-to-b from-blkr-blackLight/80 to-black/80 backdrop-blur-md p-6 rounded-lg border border-blkr-gold/20 hover:border-blkr-gold/50 transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start">
                <div className="bg-blkr-gold/10 p-3 rounded-lg mr-4">
                  <BarChart className="text-blkr-gold h-6 w-6" />
                </div>
                <div>
                  <div className="text-blkr-gold text-3xl font-bold mb-2 font-playfair">94%</div>
                  <div className="text-blkr-offWhite/70">Success Rate for Members</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
      >
        <div className="w-[2px] h-10 bg-gradient-to-b from-blkr-gold/20 to-blkr-gold"></div>
        <div className="text-blkr-gold/60 text-sm mt-2">Scroll</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
