
import React from "react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-blkr-black">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-blkr-black via-blkr-black to-blkr-blackLight opacity-90"></div>
        <div className="w-full h-full absolute top-0 left-0 bg-[url('/path/to/trading-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Join the Inner Circle of <span className="text-blkr-gold">Elite Traders</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light mb-8">
            The #1 Day Trading Community for High Achievers Ready to Master the Market.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <CTAButton text="Apply for Membership" href="/join" pulse={true} />
            <Button variant="outline" className="border-blkr-gold text-blkr-gold hover:bg-blkr-gold/10">
              Discover Our Programs
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blkr-blackLight/50 backdrop-blur-sm p-6 rounded-lg border border-blkr-gold/20">
              <div className="text-blkr-gold text-3xl font-bold mb-2">$100M+</div>
              <div className="text-blkr-offWhite/70">Trading Profits Generated</div>
            </div>
            
            <div className="bg-blkr-blackLight/50 backdrop-blur-sm p-6 rounded-lg border border-blkr-gold/20">
              <div className="text-blkr-gold text-3xl font-bold mb-2">1,000+</div>
              <div className="text-blkr-offWhite/70">Elite Members Worldwide</div>
            </div>
            
            <div className="bg-blkr-blackLight/50 backdrop-blur-sm p-6 rounded-lg border border-blkr-gold/20">
              <div className="text-blkr-gold text-3xl font-bold mb-2">94%</div>
              <div className="text-blkr-offWhite/70">Success Rate for Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
