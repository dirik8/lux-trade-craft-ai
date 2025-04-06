
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Check, X, ArrowRight, Star, Shield, Users, Lightbulb, Clock, Calendar, Award, Zap } from "lucide-react";

const JoinPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };

  const plans = [
    {
      name: "Silver",
      price: 99,
      billing: "monthly",
      description: "Perfect for beginning traders looking to enhance their skills",
      features: [
        "Daily market updates",
        "Basic trading alerts",
        "Access to community forums",
        "Weekly educational webinars",
        "Trade idea snapshots",
      ],
      notIncluded: [
        "One-on-one coaching",
        "Advanced strategy sessions",
        "Priority support",
        "Proprietary indicators",
      ]
    },
    {
      name: "Gold",
      price: 249,
      billing: "monthly",
      description: "For serious traders who want comprehensive market insights",
      popular: true,
      features: [
        "Everything in Silver",
        "Real-time trade alerts",
        "Intermediate strategy sessions",
        "Priority support",
        "Weekly live trading sessions",
        "Custom risk management templates",
        "Priority Discord access",
      ],
      notIncluded: [
        "One-on-one coaching",
        "Advanced proprietary indicators",
      ]
    },
    {
      name: "Platinum",
      price: 499,
      billing: "monthly",
      description: "Elite level access for professional and full-time traders",
      features: [
        "Everything in Gold",
        "Monthly one-on-one coaching",
        "Advanced proprietary indicators",
        "VIP Discord access",
        "Early access to new features",
        "Custom trading plan development",
        "Advanced risk management tools",
        "Institutional-grade research",
        "Annual trading retreat (additional fee)",
      ],
      notIncluded: []
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Our alerts and analysis save you hours of research and chart scanning every day"
    },
    {
      icon: Lightbulb,
      title: "Develop Skills",
      description: "Learn proven strategies from professional traders with decades of experience"
    },
    {
      icon: Shield,
      title: "Reduce Risk",
      description: "Our risk management frameworks help protect your capital in volatile markets"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network of like-minded traders who support each other's growth"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Members report averaging 15-30% improvement in trading performance"
    },
    {
      icon: Calendar,
      title: "Structured Learning",
      description: "Follow our roadmap from beginner to advanced trading techniques"
    }
  ];

  // Container animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Item animation
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-blkr-black to-blkr-blackLight min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-blkr-gold to-blkr-goldLight">
              Join BLKR Trading
            </h1>
            <p className="mt-6 text-xl text-blkr-offWhite/80 max-w-3xl mx-auto">
              Choose the membership level that suits your trading goals and experience.
              All plans include access to our core community benefits and resources.
            </p>
          </motion.div>

          {/* Pricing Plans */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {plans.map((plan, index) => (
              <motion.div key={index} variants={item}>
                <Card className={`h-full flex flex-col relative overflow-hidden ${
                  plan.popular ? 'border-blkr-gold shadow-lg shadow-blkr-gold/20' : 'card-premium'
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-blkr-gold text-blkr-black text-xs font-bold px-3 py-1 transform rotate-0 origin-top-right">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-bold">
                      {plan.name === "Gold" && <Star className="mr-2 h-5 w-5 text-blkr-gold" />}
                      {plan.name === "Platinum" && <Zap className="mr-2 h-5 w-5 text-blkr-gold" />}
                      {plan.name}
                    </CardTitle>
                    <div className="mt-2">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-sm text-blkr-offWhite/70">/{plan.billing}</span>
                    </div>
                    <p className="text-sm text-blkr-offWhite/80 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="mb-6">
                      <p className="text-sm font-semibold mb-2">Includes:</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-blkr-gold mr-2 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.notIncluded.length > 0 && (
                      <div className="mb-6">
                        <p className="text-sm font-semibold mb-2">Not included:</p>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <X className="h-5 w-5 text-blkr-offWhite/40 mr-2 shrink-0" />
                              <span className="text-sm text-blkr-offWhite/60">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mt-auto pt-4">
                      <Button 
                        className={`w-full ${
                          plan.name === "Platinum" 
                            ? "bg-blkr-gold hover:bg-blkr-goldDark text-blkr-black" 
                            : plan.popular 
                              ? "bg-blkr-gold/90 hover:bg-blkr-gold text-blkr-black"
                              : "bg-blkr-blackLight border border-blkr-gold/50 hover:bg-blkr-gold/20"
                        }`}
                        onClick={() => handleSelectPlan(plan.name)}
                      >
                        Select Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Benefits Section */}
          <motion.div
            className="py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold font-playfair text-center mb-12">
              Why Join <span className="text-blkr-gold">BLKR Trading</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-premium bg-blkr-black/60 backdrop-blur-sm hover:border-blkr-gold/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-blkr-gold/20 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-blkr-gold" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-blkr-offWhite/80">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
          
          {/* CTA Section */}
          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-blkr-black to-blkr-blackLight p-10 rounded-lg border border-blkr-gold/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h2>
            <p className="mb-6 text-blkr-offWhite/80 max-w-2xl mx-auto">
              Complete our application process and our team will recommend the best membership 
              level based on your trading experience and goals.
            </p>
            <Button 
              className="bg-blkr-gold hover:bg-blkr-goldDark text-blkr-black text-lg px-8 py-6"
              onClick={() => window.location.href = '/apply-to-join'}
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </main>
      
      {/* Plan Selection Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-blkr-black border-blkr-gold">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedPlan} Membership Application
            </DialogTitle>
            <DialogDescription>
              To join our {selectedPlan} tier, you'll need to complete our application process.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-6">
              BLKR Trading is an exclusive community with a thorough vetting process. 
              This ensures all members maintain our high standards and contribute positively 
              to our trading environment.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Button 
                className="bg-blkr-gold hover:bg-blkr-goldDark text-blkr-black flex-1"
                onClick={() => window.location.href = '/apply-to-join'}
              >
                Start Application
              </Button>
              <DialogClose asChild>
                <Button variant="outline" className="flex-1 border-blkr-gold/50">
                  Go Back
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default JoinPage;
