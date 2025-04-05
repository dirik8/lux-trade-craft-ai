
import React from "react";
import CTAButton from "./CTAButton";

const CTASection = () => {
  return (
    <section className="py-20 bg-blkr-gold relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blkr-goldDark to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-blkr-black">
            Ready to Transform Your Trading Journey?
          </h2>
          
          <p className="text-blkr-black/80 text-lg mb-8">
            Join the exclusive BLKR Trading Community today. Limited spots available.
          </p>
          
          <CTAButton 
            text="Apply for Membership Now" 
            href="/join" 
            className="bg-blkr-black text-blkr-gold hover:bg-opacity-80 px-10" 
          />
          
          <p className="mt-6 text-sm text-blkr-black/70">
            Only accepting 50 new members this quarter. Application required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
