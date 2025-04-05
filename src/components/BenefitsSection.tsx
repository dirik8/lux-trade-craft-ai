
import React from "react";
import { CircleCheck, CheckCircle2 } from "lucide-react";
import CTAButton from "./CTAButton";
import { Separator } from "@/components/ui/separator";

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

  const amazingBenefits = [
    {
      number: "01",
      title: "Accelerated Learning",
      description: "Save time and effort by learning from an expert who have already navigated the complexities of the crypto market."
    },
    {
      number: "02",
      title: "Increased Profit Potential",
      description: "Maximize your returns by leveraging expert strategies, tools, and guidance tailored to your specific goals."
    },
    {
      number: "03",
      title: "Informed Decision Making",
      description: "Gain access to valuable insights and information to make well-informed decisions about your crypto investments."
    },
    {
      number: "04",
      title: "Confidence and Peace of Mind",
      description: "Navigate the dynamic world of cryptocurrencies with the assurance that you have a knowledgeable expert guiding your decisions."
    }
  ];

  const coachingServices = [
    {
      title: "Personalized Crypto Trading Coaching",
      description: "One-on-one sessions tailored to your experience level, risk tolerance, and investment goals."
    },
    {
      title: "Portfolio Management and Diversification",
      description: "Assistance in creating and maintaining a balanced crypto portfolio that aligns with your objectives."
    },
    {
      title: "Market Analysis and Research",
      description: "In-depth reports and insights on market trends, emerging technologies, and potential investment opportunities."
    },
    {
      title: "Technical Analysis and Charting",
      description: "Comprehensive chart analysis using various tools and indicators to identify potential trading signals and entry/exit points."
    },
    {
      title: "Risk Management Strategies",
      description: "Guidance on how to mitigate risks and protect your investments in the volatile crypto market."
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
        
        {/* Additional sections */}
        <div className="mt-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Amazing Benefits with Me</h2>
            <p className="text-blkr-offWhite/80 text-lg mb-16 text-center">
              By unlocking the secrets of profitable crypto trading, you'll be better prepared to navigate the dynamic world of cryptocurrency and seize the opportunities that await. Begin your journey to financial success with my comprehensive program and join the ranks of successful crypto traders today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {amazingBenefits.map((benefit, index) => (
                <div key={index} className="relative">
                  <span className="text-4xl md:text-5xl font-playfair font-bold text-blkr-gold opacity-60">{benefit.number}</span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2">{benefit.title}</h3>
                  <p className="text-blkr-offWhite/70 mt-3">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="section-title mb-12">Personalized Crypto Trading Coaching</h2>
              <div className="space-y-8">
                {coachingServices.map((service, index) => (
                  <div key={index}>
                    <div className="flex items-start">
                      <CheckCircle2 className="text-blkr-gold mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-xl">{service.title}</h3>
                        <p className="text-blkr-offWhite/70 mt-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    {index < coachingServices.length - 1 && (
                      <Separator className="my-6 bg-blkr-gold/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <h2 className="section-title mb-8">Top Blockchain Expert</h2>
                <p className="text-blkr-offWhite/80 text-lg leading-relaxed">
                  I help cryptocurrency investors safely manage their digital assets portfolios. Previously, I built a $5m Registered Investment Adviser in the Pacific Northwest and served as its Chief Compliance Officer. 
                </p>
                <p className="text-blkr-offWhite/80 text-lg leading-relaxed mt-4">
                  In 2016, I merged my continuing education company for accountants with my passion, creating a full-service digital assets education and signal course for crypto investors. Being a Certified Public Accountant and Certified Financial Planner, I've spent most of my career as an independent fiduciary financial planner.
                </p>
                <div className="mt-8">
                  <CTAButton text="Learn More About Me" href="/about" className="px-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
