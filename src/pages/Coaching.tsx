
import React from "react";
import { CheckCircle2, Calendar, Clock, Users, BarChart2, Compass, Shield, Zap, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Coaching = () => {
  const coachingPlans = [
    {
      id: "basic",
      title: "Foundation Coaching",
      price: "$997",
      duration: "4 weeks",
      sessions: "4 one-hour sessions",
      includes: [
        "Trading plan development",
        "Basic technical analysis skills",
        "Risk management fundamentals",
        "Email support between sessions",
        "Trading psychology assessment"
      ],
      focus: "Perfect for beginners or those looking to establish proper trading foundations."
    },
    {
      id: "pro",
      title: "Advanced Trader Coaching",
      price: "$2,497",
      duration: "8 weeks",
      sessions: "8 one-hour sessions",
      includes: [
        "Advanced strategy development",
        "Portfolio optimization",
        "Position sizing techniques",
        "Market analysis deep dives",
        "Daily email support",
        "Weekly trade reviews",
        "Custom indicator setup"
      ],
      focus: "Ideal for intermediate traders looking to elevate their performance and consistency."
    },
    {
      id: "elite",
      title: "Elite Performance Coaching",
      price: "$5,997",
      duration: "12 weeks",
      sessions: "12 one-hour sessions + daily check-ins",
      includes: [
        "Personalized trading system development",
        "24/7 WhatsApp support",
        "Live trading sessions",
        "Performance analytics dashboard",
        "Advanced risk management framework",
        "Direct phone access to coach",
        "Lifetime access to BLKR trading resources",
        "Quarterly strategy reviews post-program"
      ],
      focus: "For serious traders committed to professional-level performance and results."
    }
  ];

  const faqs = [
    {
      question: "Who is eligible for coaching?",
      answer: "Our coaching is available to dedicated traders of all experience levels. We tailor our approach based on your current skills, knowledge, and goals. While we don't require a minimum account size, we do look for commitment to the process and willingness to learn and implement our strategies."
    },
    {
      question: "How are coaching sessions conducted?",
      answer: "Coaching sessions are conducted via Zoom with screen sharing capabilities. Each session is recorded and provided to you for review. Sessions are typically scheduled at a consistent time each week, with flexibility for market events and time zones."
    },
    {
      question: "What is your coaching philosophy?",
      answer: "Our coaching philosophy is centered around developing self-sufficient traders. Rather than creating dependency, we focus on transferring skills, knowledge, and mindset techniques that allow you to trade successfully on your own. We believe in a holistic approach that addresses strategy, psychology, and risk management."
    },
    {
      question: "Can I upgrade my coaching package?",
      answer: "Yes, you can upgrade to a more comprehensive coaching package at any time. We'll credit the full amount you've already paid toward the new package, making transitions seamless."
    },
    {
      question: "Do you guarantee results?",
      answer: "While we've helped numerous traders achieve consistent profitability, we cannot guarantee specific financial results. Trading involves risk, and results depend on many factors, including your dedication to the process, market conditions, and how well you implement the strategies taught."
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
              One-on-One <span className="text-blkr-gold">Elite Trading Coaching</span>
            </h1>
            <p className="text-xl text-blkr-offWhite/80 mb-12">
              Personalized guidance from professional traders who have mastered the markets.
              Transform your trading with customized strategies and direct mentorship.
            </p>
            <Button 
              className="cta-button animate-gold-pulse px-8 py-6 text-lg"
              onClick={() => window.location.href = "/join"}
            >
              Apply for Elite Coaching
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title inline-block">
                Why Choose Elite Coaching?
              </h2>
              <p className="mt-4 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
                Our personalized coaching program delivers exceptional results through 
                tailored guidance, proven strategies, and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                  <Compass className="text-blkr-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Strategy</h3>
                <p className="text-blkr-offWhite/70">
                  Develop a trading approach perfectly aligned with your goals, personality, 
                  risk tolerance, and lifestyle requirements.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                  <Shield className="text-blkr-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Risk Management Mastery</h3>
                <p className="text-blkr-offWhite/70">
                  Learn advanced capital preservation techniques that professional traders 
                  use to protect their wealth during any market condition.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                  <Zap className="text-blkr-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Accelerated Growth</h3>
                <p className="text-blkr-offWhite/70">
                  Shortcut the learning curve by years through direct mentorship 
                  and feedback from traders who've mastered the markets.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                  <BarChart2 className="text-blkr-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Performance Analysis</h3>
                <p className="text-blkr-offWhite/70">
                  Receive detailed analysis of your trading patterns to identify 
                  strengths to leverage and weaknesses to address.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                  <Users className="text-blkr-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Accountability Partner</h3>
                <p className="text-blkr-offWhite/70">
                  Stay on track with regular check-ins and goal setting that ensures 
                  you remain consistent and disciplined in your trading approach.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                  <Book className="text-blkr-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Resources</h3>
                <p className="text-blkr-offWhite/70">
                  Receive tailored educational materials, checklists, and tools 
                  specifically created to address your unique trading challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coaching Plans */}
        <div className="bg-blkr-blackLight py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title inline-block">
                Coaching Programs
              </h2>
              <p className="mt-4 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
                Choose the coaching program that best aligns with your trading goals and experience level.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coachingPlans.map((plan) => (
                <Card key={plan.id} className={`bg-blkr-black border-blkr-gold/30 overflow-hidden ${plan.id === 'elite' ? 'border-blkr-gold ring-1 ring-blkr-gold' : ''}`}>
                  {plan.id === 'elite' && (
                    <div className="bg-blkr-gold text-black text-center py-1 text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <div className="text-3xl font-bold mb-4">{plan.price}</div>
                    <p className="text-blkr-offWhite/70 mb-6">{plan.focus}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <Calendar size={18} className="text-blkr-gold mr-2" />
                        <span>{plan.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="text-blkr-gold mr-2" />
                        <span>{plan.sessions}</span>
                      </div>
                    </div>
                    
                    <Separator className="my-6 bg-blkr-gold/20" />
                    
                    <h4 className="font-semibold mb-4">What's Included:</h4>
                    <ul className="space-y-3 mb-8">
                      {plan.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="text-blkr-gold mr-2 mt-1 flex-shrink-0" size={18} />
                          <span className="text-blkr-offWhite/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.id === 'elite' ? 'cta-button' : 'bg-blkr-black border border-blkr-gold hover:bg-blkr-gold hover:text-black'}`}
                      onClick={() => window.location.href = "/join"}
                    >
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title inline-block">
                Our Coaching Process
              </h2>
              <p className="mt-4 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
                A structured yet personalized approach to transforming your trading performance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-16">
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-blkr-gold bg-blkr-black text-xl font-bold">1</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold mb-3">Initial Assessment</h3>
                      <p className="text-blkr-offWhite/80">
                        We begin with a comprehensive evaluation of your trading history, skills, 
                        knowledge, and goals to identify strengths, weaknesses, and opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-12 left-6 w-0.5 h-16 bg-blkr-gold/30"></div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-blkr-gold bg-blkr-black text-xl font-bold">2</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold mb-3">Custom Plan Creation</h3>
                      <p className="text-blkr-offWhite/80">
                        Based on your assessment, we develop a personalized coaching plan with 
                        specific milestones, strategies, and focus areas tailored to your needs.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-12 left-6 w-0.5 h-16 bg-blkr-gold/30"></div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-blkr-gold bg-blkr-black text-xl font-bold">3</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold mb-3">Implementation & Feedback</h3>
                      <p className="text-blkr-offWhite/80">
                        Through regular one-on-one sessions, you'll learn and implement strategies 
                        with continuous feedback, refinement, and support from your coach.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-12 left-6 w-0.5 h-16 bg-blkr-gold/30"></div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-blkr-gold bg-blkr-black text-xl font-bold">4</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold mb-3">Performance Review</h3>
                      <p className="text-blkr-offWhite/80">
                        Regular performance reviews track your progress against established metrics 
                        and goals, allowing for strategy adjustments and continuous improvement.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-12 left-6 w-0.5 h-16 bg-blkr-gold/30"></div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-blkr-gold bg-blkr-black text-xl font-bold">5</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold mb-3">Independence & Mastery</h3>
                      <p className="text-blkr-offWhite/80">
                        As you progress, we transition from intense coaching to supportive guidance, 
                        ensuring you develop into a self-sufficient, confident trader.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-blkr-blackLight py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title inline-block">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible key={index} className="border border-blkr-gold/30 rounded-md overflow-hidden">
                  <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium">
                    <span>{faq.question}</span>
                    <span className="text-blkr-gold">+</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 pt-0 text-blkr-offWhite/80 border-t border-blkr-gold/30">
                    {faq.answer}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-blkr-offWhite/80 mb-6">
                Ready to transform your trading performance with personalized coaching?
              </p>
              <Button 
                className="cta-button"
                onClick={() => window.location.href = "/join"}
              >
                Apply for Coaching
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Coaching;
