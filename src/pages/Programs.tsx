
import React from "react";
import { CheckCircle2, X, Users, Zap, Shield, Trophy, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Programs = () => {
  const [billingCycle, setBillingCycle] = React.useState("annual");
  
  const membershipTiers = [
    {
      name: "Silver",
      description: "Essential trading tools and market insights for starting your journey.",
      monthly: "$97",
      annually: "$970",
      savings: "Save $194",
      features: [
        "Daily market analysis",
        "Basic trade signals",
        "Weekly webinars",
        "Education library access",
        "Trading community access"
      ],
      notIncluded: [
        "Group coaching sessions",
        "Advanced indicators",
        "Trade review sessions",
        "Private Discord channel",
        "In-person events"
      ],
      highlight: false,
      buttonText: "Join Silver Tier"
    },
    {
      name: "Gold",
      description: "Enhanced trading tools and personalized guidance for serious traders.",
      monthly: "$297",
      annually: "$2,970",
      savings: "Save $594",
      features: [
        "Everything in Silver, plus:",
        "Premium trade signals",
        "Group coaching sessions",
        "Advanced trading indicators",
        "Trade review sessions",
        "Priority support",
        "Private Discord channel"
      ],
      notIncluded: [
        "One-on-one coaching",
        "In-person events",
        "Custom strategy development"
      ],
      highlight: true,
      buttonText: "Join Gold Tier"
    },
    {
      name: "Platinum Elite",
      description: "The ultimate trading experience with personalized coaching and exclusive benefits.",
      monthly: "$997",
      annually: "$9,970",
      savings: "Save $1,994",
      features: [
        "Everything in Gold, plus:",
        "One-on-one coaching sessions",
        "Custom trading strategy",
        "Exclusive in-person events",
        "Luxury trading retreats",
        "VIP Discord access",
        "Direct line to senior traders",
        "Proprietary algorithm access"
      ],
      notIncluded: [],
      highlight: false,
      buttonText: "Apply for Platinum"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Elite Community",
      description: "Connect with like-minded traders who are serious about success and growth."
    },
    {
      icon: Zap,
      title: "Actionable Strategies",
      description: "Learn proven trading methods that deliver consistent results across market conditions."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Master the art of preserving capital while maximizing profit potential."
    },
    {
      icon: Trophy,
      title: "Performance Tracking",
      description: "Track your progress with advanced analytics and performance metrics."
    },
    {
      icon: MessageCircle,
      title: "Expert Support",
      description: "Get answers to your trading questions from seasoned professionals."
    },
    {
      icon: Calendar,
      title: "Live Events",
      description: "Participate in exclusive webinars, workshops, and in-person retreats."
    }
  ];

  return (
    <>
      <Navigation />
      <div className="pt-24 bg-blkr-black min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Choose Your Path to <span className="text-blkr-gold">Financial Freedom</span>
            </h1>
            <p className="text-xl text-blkr-offWhite/80 mb-12">
              Select the membership tier that best aligns with your trading goals, experience level, and desired support.
            </p>
          </div>
        </div>

        {/* Membership Benefits */}
        <div className="py-12 bg-blkr-blackLight">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title inline-block">
                Membership Benefits
              </h2>
              <p className="mt-4 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
                All BLKR Trading membership tiers provide exceptional value and resources to elevate your trading.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blkr-gold/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-blkr-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-blkr-offWhite/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title inline-block">
                Membership Tiers
              </h2>
              <p className="mt-4 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
                Select the tier that best fits your trading goals and commitment level.
              </p>
              
              <div className="mt-8 flex justify-center">
                <ToggleGroup 
                  type="single" 
                  value={billingCycle}
                  onValueChange={(value) => value && setBillingCycle(value)}
                  className="border border-blkr-gold/30 rounded-md p-1"
                >
                  <ToggleGroupItem 
                    value="monthly" 
                    className="data-[state=on]:bg-blkr-gold data-[state=on]:text-black px-6"
                  >
                    Monthly
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="annual" 
                    className="data-[state=on]:bg-blkr-gold data-[state=on]:text-black px-6"
                  >
                    Annual <span className="text-xs opacity-80 ml-1">(Save 20%)</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {membershipTiers.map((tier, index) => (
                <Card 
                  key={index} 
                  className={`bg-blkr-black border-blkr-gold/30 overflow-hidden ${
                    tier.highlight ? 'border-blkr-gold ring-1 ring-blkr-gold transform lg:scale-105 z-10' : ''
                  }`}
                >
                  {tier.highlight && (
                    <div className="bg-blkr-gold text-black text-center py-1 text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                    <p className="text-blkr-offWhite/70">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">
                          {billingCycle === "monthly" ? tier.monthly : tier.annually}
                        </span>
                        <span className="text-blkr-offWhite/70 ml-2">
                          {billingCycle === "monthly" ? "/month" : "/year"}
                        </span>
                      </div>
                      {billingCycle === "annual" && (
                        <div className="mt-2">
                          <span className="text-blkr-gold text-sm font-medium">{tier.savings}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="text-blkr-gold mr-2 mt-1 flex-shrink-0" size={18} />
                            <span className="text-blkr-offWhite/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tier.notIncluded.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Not included:</h4>
                        <ul className="space-y-2">
                          {tier.notIncluded.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <X className="text-blkr-offWhite/50 mr-2 mt-1 flex-shrink-0" size={18} />
                              <span className="text-blkr-offWhite/50">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${tier.highlight ? 'cta-button' : 'bg-blkr-black border border-blkr-gold hover:bg-blkr-gold hover:text-black'}`}
                      onClick={() => window.location.href = "/join"}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12 text-blkr-offWhite/70">
              <p>All memberships include a 7-day money-back guarantee. No questions asked.</p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="py-20 bg-blkr-blackLight">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title inline-block">
                Features Comparison
              </h2>
              <p className="mt-4 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
                Compare membership tiers to find the perfect fit for your trading journey.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-blkr-gold/30">
                    <th className="py-4 px-4 text-left font-bold text-lg">Feature</th>
                    <th className="py-4 px-4 text-center font-bold text-lg">Silver</th>
                    <th className="py-4 px-4 text-center font-bold text-lg">Gold</th>
                    <th className="py-4 px-4 text-center font-bold text-lg">Platinum Elite</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blkr-gold/10">
                    <td className="py-4 px-4">Daily Market Analysis</td>
                    <td className="py-4 px-4 text-center"><CheckCircle2 className="text-blkr-gold mx-auto" size={20} /></td>
                    <td className="py-4 px-4 text-center"><CheckCircle2 className="text-blkr-gold mx-auto" size={20} /></td>
                    <td className="py-4 px-4 text-center"><CheckCircle2 className="text-blkr-gold mx-auto" size={20} /></td>
                  </tr>
                  <tr className="border-b border-blkr-gold/10">
                    <td className="py-4 px-4">Trade Signals</td>
                    <td className="py-4 px-4 text-center">Basic</td>
                    <td className="py-4 px-4 text-center">Premium</td>
                    <td className="py-4 px-4 text-center">Elite</td>
                  </tr>
                  <tr className="border-b border-blkr-gold/10">
                    <td className="py-4 px-4">Educational Webinars</td>
                    <td className="py-4 px-4 text-center">Weekly</td>
                    <td className="py-4 px-4 text-center">Weekly</td>
                    <td className="py-4 px-4 text-center">Weekly + Archives</td>
                  </tr>
                  <tr className="border-b border-blkr-gold/10">
                    <td className="py-4 px-4">Discord Community</td>
                    <td className="py-4 px-4 text-center">Basic Access</td>
                    <td className="py-4 px-4 text-center">Private Channels</td>
                    <td className="py-4 px-4 text-center">VIP Access</td>
                  </tr>
                  <tr className="border-b border-blkr-gold/10">
                    <td className="py-4 px-4">Coaching Sessions</td>
                    <td className="py-4 px-4 text-center"><X className="text-blkr-offWhite/50 mx-auto" size={20} /></td>
                    <td className="py-4 px-4 text-center">Group</td>
                    <td className="py-4 px-4 text-center">One-on-One</td>
                  </tr>
                  <tr className="border-b border-blkr-gold/10">
                    <td className="py-4 px-4">Trading Indicators</td>
                    <td className="py-4 px-4 text-center">Basic</td>
                    <td className="py-4 px-4 text-center">Advanced</td>
                    <td className="py-4 px-4 text-center">Proprietary</td>
                  </tr>
                  <tr className="border-b border-blkr-gold/10">
                    <td className="py-4 px-4">Trade Reviews</td>
                    <td className="py-4 px-4 text-center"><X className="text-blkr-offWhite/50 mx-auto" size={20} /></td>
                    <td className="py-4 px-4 text-center">Weekly Group</td>
                    <td className="py-4 px-4 text-center">Individual</td>
                  </tr>
                  <tr className="border-b border-blkr-gold/10">
                    <td className="py-4 px-4">In-Person Events</td>
                    <td className="py-4 px-4 text-center"><X className="text-blkr-offWhite/50 mx-auto" size={20} /></td>
                    <td className="py-4 px-4 text-center"><X className="text-blkr-offWhite/50 mx-auto" size={20} /></td>
                    <td className="py-4 px-4 text-center"><CheckCircle2 className="text-blkr-gold mx-auto" size={20} /></td>
                  </tr>
                  <tr className="border-b border-blkr-gold/10">
                    <td className="py-4 px-4">Custom Strategy</td>
                    <td className="py-4 px-4 text-center"><X className="text-blkr-offWhite/50 mx-auto" size={20} /></td>
                    <td className="py-4 px-4 text-center"><X className="text-blkr-offWhite/50 mx-auto" size={20} /></td>
                    <td className="py-4 px-4 text-center"><CheckCircle2 className="text-blkr-gold mx-auto" size={20} /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Direct Support</td>
                    <td className="py-4 px-4 text-center">Email</td>
                    <td className="py-4 px-4 text-center">Priority Email</td>
                    <td className="py-4 px-4 text-center">Direct Line</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                className="cta-button px-8"
                onClick={() => window.location.href = "/join"}
              >
                Choose Your Membership
              </Button>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="text-blkr-gold mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-6">Our 7-Day Satisfaction Guarantee</h2>
              <p className="text-lg text-blkr-offWhite/80 mb-8">
                We're confident you'll love your BLKR Trading membership. If for any reason you're not 
                completely satisfied in the first 7 days, simply let us know and we'll refund your payment in full.
                No questions asked, no complicated procedures.
              </p>
              <Button 
                className="cta-button"
                onClick={() => window.location.href = "/join"}
              >
                Join Risk-Free Today
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
