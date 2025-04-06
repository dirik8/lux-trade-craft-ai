
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ApplyToJoinPage = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    tradingExperience: "",
    currentProfession: "",
    tradingGoals: "",
    heardFrom: "",
    additionalInfo: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally send the data to a backend
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Application Submitted",
      description: "We've received your application and will be in touch soon!",
      duration: 5000,
    });
    
    // Move to thank you step
    setFormStep(3);
  };

  const handleNext = () => {
    if (formStep === 1 && (!formData.fullName || !formData.email || !formData.phone)) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields before continuing.",
        variant: "destructive",
      });
      return;
    }
    setFormStep(formStep + 1);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const requirements = [
    "Minimum 2 years of active trading experience",
    "Commitment to ongoing education and improvement",
    "Willingness to participate in community discussions",
    "Professional demeanor and ethical trading practices",
    "Ability to contribute valuable insights to the community"
  ];

  const benefits = [
    "Access to proprietary trading algorithms",
    "Daily market analysis from expert traders",
    "Private Discord community with 24/7 support",
    "Weekly masterclass webinars with professional traders",
    "One-on-one coaching sessions (Platinum members)"
  ];

  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-blkr-black to-blkr-blackLight min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-blkr-gold to-blkr-goldLight">
              Apply to Join the Elite
            </h1>
            <p className="mt-6 text-xl text-blkr-offWhite/80 max-w-3xl mx-auto">
              Our exclusive trading community is by application only. 
              We carefully review each application to ensure our members 
              maintain our high standards for knowledge and collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Requirements & Benefits */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="card-premium bg-blkr-black/50 backdrop-blur-sm mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blkr-gold" />
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blkr-gold mt-2 mr-2"></span>
                        <span className="text-blkr-offWhite/80">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="card-premium bg-blkr-black/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blkr-gold" />
                    Benefits
                  </h2>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blkr-gold mt-2 mr-2"></span>
                        <span className="text-blkr-offWhite/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Right Column - Application Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="card-premium border-blkr-gold/30">
                <CardContent className="pt-6">
                  {formStep === 1 && (
                    <motion.div
                      key="step1"
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                    >
                      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              required
                              className="bg-blkr-blackLight border-blkr-gold/30"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              required
                              className="bg-blkr-blackLight border-blkr-gold/30"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 123-4567"
                              required
                              className="bg-blkr-blackLight border-blkr-gold/30"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            type="button" 
                            onClick={handleNext}
                            className="w-full bg-blkr-gold hover:bg-blkr-goldDark text-blkr-black"
                          >
                            Continue to Trading Experience
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                  
                  {formStep === 2 && (
                    <motion.div
                      key="step2"
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                    >
                      <h2 className="text-2xl font-bold mb-6">Trading Experience</h2>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="tradingExperience">Years of Trading Experience *</Label>
                            <Input
                              id="tradingExperience"
                              name="tradingExperience"
                              value={formData.tradingExperience}
                              onChange={handleChange}
                              placeholder="e.g. 5 years"
                              required
                              className="bg-blkr-blackLight border-blkr-gold/30"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="currentProfession">Current Profession</Label>
                            <Input
                              id="currentProfession"
                              name="currentProfession"
                              value={formData.currentProfession}
                              onChange={handleChange}
                              placeholder="e.g. Financial Analyst"
                              className="bg-blkr-blackLight border-blkr-gold/30"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="tradingGoals">Your Trading Goals</Label>
                            <textarea
                              id="tradingGoals"
                              name="tradingGoals"
                              value={formData.tradingGoals}
                              onChange={handleChange}
                              placeholder="Describe your short and long-term trading goals"
                              rows={3}
                              className="w-full rounded-md bg-blkr-blackLight border border-blkr-gold/30 p-3 text-blkr-offWhite"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="heardFrom">How did you hear about us?</Label>
                            <Input
                              id="heardFrom"
                              name="heardFrom"
                              value={formData.heardFrom}
                              onChange={handleChange}
                              placeholder="e.g. Referral, Social Media, Search"
                              className="bg-blkr-blackLight border-blkr-gold/30"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="additionalInfo">Additional Information</Label>
                            <textarea
                              id="additionalInfo"
                              name="additionalInfo"
                              value={formData.additionalInfo}
                              onChange={handleChange}
                              placeholder="Anything else you'd like us to know?"
                              rows={3}
                              className="w-full rounded-md bg-blkr-blackLight border border-blkr-gold/30 p-3 text-blkr-offWhite"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-4 flex space-x-4">
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => setFormStep(1)}
                            className="flex-1 border-blkr-gold/50 text-blkr-offWhite"
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit"
                            className="flex-1 bg-blkr-gold hover:bg-blkr-goldDark text-blkr-black"
                          >
                            <Send className="mr-2 h-4 w-4" />
                            Submit Application
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                  
                  {formStep === 3 && (
                    <motion.div
                      key="success"
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                      className="text-center py-8"
                    >
                      <div className="bg-blkr-gold/20 rounded-full p-4 inline-block mb-6">
                        <CheckCircle className="h-16 w-16 text-blkr-gold" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
                      <p className="text-blkr-offWhite/80 mb-8 max-w-md mx-auto">
                        Thank you for applying to join the BLKR Trading community. Our team will carefully 
                        review your application and contact you within 2-3 business days.
                      </p>
                      <Button
                        onClick={() => window.location.href = '/'}
                        className="bg-blkr-gold hover:bg-blkr-goldDark text-blkr-black"
                      >
                        Return to Homepage
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ApplyToJoinPage;
