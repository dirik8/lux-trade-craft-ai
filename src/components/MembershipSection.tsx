
import React from "react";
import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

const MembershipSection = () => {
  const membershipTiers = [
    {
      name: "Silver",
      price: "$997",
      period: "per month",
      features: [
        "Basic Trading Resources",
        "Daily Trade Signals",
        "Weekly Market Analysis",
        "Community Forum Access",
        "Monthly Group Q&A"
      ],
      cta: "Join Silver",
      popular: false
    },
    {
      name: "Gold",
      price: "$2,997",
      period: "per month",
      features: [
        "All Silver Features",
        "Weekly Group Coaching",
        "Advanced Trading Webinars",
        "Trade Performance Analysis",
        "Proprietary Strategy Access",
        "Priority Support"
      ],
      cta: "Join Gold",
      popular: true
    },
    {
      name: "Platinum Elite",
      price: "$9,997",
      period: "per month",
      features: [
        "All Gold Features",
        "1-on-1 Private Mentorship",
        "Exclusive Retreat Invitations",
        "Personalized Trading Plan",
        "Direct Phone Access to Coaches",
        "Lifetime Strategy Updates"
      ],
      cta: "Apply for Platinum",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blkr-black to-blkr-blackLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-centered">
          <h2 className="section-title inline-block">
            Choose Your Path to Financial Freedom
          </h2>
          <p className="mt-6 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
            Select the membership tier that aligns with your trading goals and level of commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {membershipTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg overflow-hidden ${
                tier.popular 
                  ? "border-2 border-blkr-gold transform md:scale-105 md:-translate-y-2" 
                  : "border border-blkr-gold/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-blkr-gold text-blkr-black px-4 py-1 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="bg-blkr-blackLight p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blkr-gold">{tier.price}</span>
                  <span className="text-blkr-offWhite/60 ml-1">{tier.period}</span>
                </div>
                
                <ul className="mt-6 mb-8 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-blkr-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-blkr-offWhite/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <CTAButton 
                  text={tier.cta} 
                  href="/join" 
                  className={`w-full ${!tier.popular ? "bg-transparent border border-blkr-gold text-blkr-gold hover:bg-blkr-gold/10" : ""}`}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blkr-offWhite/60 mb-4">
            Only 50 new memberships available this quarter
          </p>
          <CTAButton text="Apply for BLKR Membership" href="/join" pulse={true} className="px-10" />
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
