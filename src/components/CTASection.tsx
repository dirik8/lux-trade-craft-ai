
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Clock, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blkr-black to-blkr-blackLight"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgyNGMxLjEgMCAyIC45IDIgMnYyNGMwIDEuMS0uOSAyLTIgMkg0MGMtMS4xIDAtMi0uOS0yLTJWMzR6TTQwIDRjMC0xLjEuOS0yIDItMmgyNGMxLjEgMCAyIC45IDIgMnYyNGMwIDEuMS0uOSAyLTIgMkg0MmMtMS4xIDAtMi0uOS0yLTJWNHpNNCAxNGMwLTEuMS45LTIgMi0yaDI0YzEuMSAwIDIgLjkgMiAydjI0YzAgMS4xLS45IDItMiAySDZjLTEuMSAwLTItLjktMi0yVjE0eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Gold accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blkr-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blkr-gold/30 to-transparent"></div>
      
      {/* Gold sphere decorative elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blkr-gold opacity-[0.03] blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-blkr-gold opacity-[0.05] blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-2 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blkr-gold/10 border border-blkr-gold/30 text-blkr-gold text-sm">
              <Clock className="mr-2 h-4 w-4" /> Limited Time Opportunity
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blkr-gold via-blkr-goldLight to-blkr-gold"
          >
            Ready to Transform Your Trading Journey?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-blkr-offWhite/80 text-lg text-center mb-12 max-w-2xl mx-auto"
          >
            Join the exclusive BLKR Trading Community today and gain access to proprietary strategies, elite mentorship, and a network of successful traders worldwide.
          </motion.p>
          
          {/* Feature cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-blkr-gold/20 rounded-lg p-6 hover:border-blkr-gold/50 transition-all duration-300">
              <div className="bg-blkr-gold/10 p-3 inline-flex rounded-lg mb-4">
                <Shield className="h-6 w-6 text-blkr-gold" />
              </div>
              <h3 className="font-bold text-lg mb-2">Elite Community</h3>
              <p className="text-blkr-offWhite/70 text-sm">Connect with a global network of dedicated traders committed to excellence.</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-blkr-gold/20 rounded-lg p-6 hover:border-blkr-gold/50 transition-all duration-300">
              <div className="bg-blkr-gold/10 p-3 inline-flex rounded-lg mb-4">
                <CheckCircle className="h-6 w-6 text-blkr-gold" />
              </div>
              <h3 className="font-bold text-lg mb-2">Proven Results</h3>
              <p className="text-blkr-offWhite/70 text-sm">Our members consistently outperform the market with our proprietary strategies.</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-blkr-gold/20 rounded-lg p-6 hover:border-blkr-gold/50 transition-all duration-300">
              <div className="bg-blkr-gold/10 p-3 inline-flex rounded-lg mb-4">
                <Clock className="h-6 w-6 text-blkr-gold" />
              </div>
              <h3 className="font-bold text-lg mb-2">Limited Spots</h3>
              <p className="text-blkr-offWhite/70 text-sm">Only accepting 50 new members this quarter to maintain our exclusive standards.</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <Button 
              onClick={() => window.location.href = "/join"} 
              className="bg-gradient-to-r from-blkr-gold to-blkr-goldDark hover:from-blkr-goldLight hover:to-blkr-gold text-blkr-black px-10 py-6 text-lg font-medium rounded-md shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] transition-all duration-500"
            >
              Apply for Membership Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="mt-6 text-sm text-blkr-offWhite/50">
              Only accepting 50 new members this quarter. Application required.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blkr-gold"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [0, -20, -40]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CTASection;
