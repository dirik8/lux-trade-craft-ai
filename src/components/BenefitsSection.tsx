
import React from "react";
import { CircleCheck } from "lucide-react";
import CTAButton from "./CTAButton";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Exclusive Trading Strategies",
      description: "Access our proprietary trading systems with proven ROI across all market conditions."
    },
    {
      title: "Expert Mentorship",
      description: "Learn directly from traders with over 30 years of combined experience in financial markets."
    },
    {
      title: "Luxury Retreats",
      description: "Network with elite members at our exclusive destination events held across the globe."
    },
    {
      title: "Private Discord Access",
      description: "Real-time trade signals, market analysis, and direct access to our trading experts."
    },
    {
      title: "Risk Management System",
      description: "Our proprietary risk management protocol minimizes losses and maximizes gains."
    },
    {
      title: "Lifetime Support",
      description: "Ongoing education, market updates, and community support as you grow your portfolio."
    }
  ];

  return (
    <section className="py-20 bg-blkr-blackLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-centered">
          <h2 className="section-title inline-block">
            Why Elite Traders Choose BLKR
          </h2>
          <p className="mt-6 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
            Join a select group of high performers who have transformed their trading outcomes with our exclusive resources and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card-premium"
            >
              <div className="flex items-start mb-4">
                <CircleCheck className="text-blkr-gold mr-3 mt-1 flex-shrink-0" />
                <h3 className="font-bold text-xl">{benefit.title}</h3>
              </div>
              <p className="text-blkr-offWhite/70 ml-8">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton text="Apply for Membership" href="/join" className="px-10" />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
