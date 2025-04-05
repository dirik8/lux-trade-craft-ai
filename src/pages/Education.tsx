
import React from "react";
import { Book, BookOpen, GraduationCap, FileText, CheckCircle2, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Education = () => {
  const courses = [
    {
      id: "day-trading",
      title: "Day Trading Masterclass",
      description: "Master the art of day trading with our comprehensive program designed for serious traders.",
      duration: "8 weeks",
      lessons: 24,
      level: "Intermediate to Advanced",
      price: "$1,997",
      features: [
        "Live market analysis sessions",
        "Proprietary trading indicators",
        "Risk management frameworks",
        "Advanced charting techniques",
        "Psychology mastery modules"
      ]
    },
    {
      id: "swing-trading",
      title: "Swing Trading Academy",
      description: "Capitalize on medium-term market movements with our proven swing trading methodology.",
      duration: "6 weeks",
      lessons: 18,
      level: "Beginner to Intermediate",
      price: "$1,497",
      features: [
        "Trend identification strategies",
        "Entry and exit timing",
        "Position sizing techniques",
        "Market cycle analysis",
        "Weekend preparation routines"
      ]
    },
    {
      id: "crypto",
      title: "Crypto Selection Course",
      description: "Learn to identify promising cryptocurrencies before they explode in value.",
      duration: "4 weeks",
      lessons: 12,
      level: "All Levels",
      price: "$997",
      features: [
        "Fundamental analysis techniques",
        "Technical indicators for crypto",
        "On-chain metrics interpretation",
        "Project evaluation framework",
        "Risk management for volatile assets"
      ]
    },
    {
      id: "risk",
      title: "Risk Management Blueprint",
      description: "The ultimate guide to protecting and growing your capital in any market condition.",
      duration: "3 weeks",
      lessons: 9,
      level: "All Levels",
      price: "$697",
      features: [
        "Position sizing formulas",
        "Stop loss strategies",
        "Portfolio allocation models",
        "Drawdown management",
        "Psychological risk factors"
      ]
    }
  ];

  const resources = [
    {
      title: "Market Analysis Playbook",
      description: "Our collection of step-by-step guides for analyzing any market condition.",
      icon: BookOpen
    },
    {
      title: "Trading Journal Templates",
      description: "Professional templates to track your trades, identify patterns, and improve performance.",
      icon: FileText
    },
    {
      title: "Weekly Strategy Webinars",
      description: "Live sessions covering current market conditions and strategic adjustments.",
      icon: Calendar
    },
    {
      title: "Indicator Library",
      description: "Access our proprietary indicators designed specifically for our trading methodology.",
      icon: GraduationCap
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
              Master the Art of Trading with Our <span className="text-blkr-gold">Proprietary Education</span>
            </h1>
            <p className="text-xl text-blkr-offWhite/80 mb-12">
              Exclusive educational resources designed by professional traders with decades of experience. 
              Unlock the methods that have generated millions in profits across all market conditions.
            </p>
            <Button 
              className="cta-button animate-gold-pulse px-8 py-6 text-lg"
              onClick={() => window.location.href = "/join"}
            >
              Access The Education Hub
            </Button>
          </div>
        </div>

        {/* Courses Section */}
        <div className="bg-blkr-blackLight py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title inline-block">
                Premium Trading Education
              </h2>
              <p className="mt-4 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
                Our carefully crafted courses are designed to transform you into a confident, 
                skilled trader capable of navigating any market condition.
              </p>
            </div>

            <Tabs defaultValue="day-trading" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-blkr-black/50 p-1 mb-8">
                {courses.map(course => (
                  <TabsTrigger 
                    key={course.id} 
                    value={course.id}
                    className="data-[state=active]:bg-blkr-gold data-[state=active]:text-black"
                  >
                    {course.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {courses.map(course => (
                <TabsContent key={course.id} value={course.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-3xl font-bold mb-4 font-playfair">{course.title}</h3>
                      <p className="text-lg mb-6 text-blkr-offWhite/80">{course.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="flex items-center space-x-2">
                          <Clock className="text-blkr-gold" />
                          <div>
                            <p className="text-sm text-blkr-offWhite/60">Duration</p>
                            <p className="font-medium">{course.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Book className="text-blkr-gold" />
                          <div>
                            <p className="text-sm text-blkr-offWhite/60">Lessons</p>
                            <p className="font-medium">{course.lessons} Modules</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="text-blkr-gold" />
                          <div>
                            <p className="text-sm text-blkr-offWhite/60">Level</p>
                            <p className="font-medium">{course.level}</p>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold mb-4">What You'll Learn</h4>
                      <ul className="space-y-3 mb-8">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="text-blkr-gold mr-3 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <Card className="bg-blkr-black border-blkr-gold/30">
                        <CardHeader>
                          <CardTitle className="text-2xl font-playfair">Enrollment Details</CardTitle>
                          <CardDescription>Join this exclusive program</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-4xl font-bold mb-6">{course.price}</div>
                          <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                              <CheckCircle2 className="text-blkr-gold mr-2 h-5 w-5" />
                              <span className="text-sm">Lifetime access to course materials</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="text-blkr-gold mr-2 h-5 w-5" />
                              <span className="text-sm">Private Discord community</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="text-blkr-gold mr-2 h-5 w-5" />
                              <span className="text-sm">Monthly Q&A sessions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="text-blkr-gold mr-2 h-5 w-5" />
                              <span className="text-sm">Certificate of completion</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full cta-button" onClick={() => window.location.href = "/join"}>
                            Enroll Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* Resources Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title inline-block">
                Additional Trading Resources
              </h2>
              <p className="mt-4 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
                Beyond our structured courses, we provide a wealth of resources to support your trading journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-blkr-black border-blkr-gold/30 hover:border-blkr-gold transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-4">
                      <resource.icon className="text-blkr-gold" size={24} />
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blkr-offWhite/70">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="cta-button" onClick={() => window.location.href = "/join"}>
                Access All Resources
              </Button>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-blkr-blackLight py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-16">Your Path to Trading Mastery</h2>
              
              <div className="space-y-16">
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-blkr-gold bg-blkr-black text-xl font-bold">1</div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold mb-3">Foundation Building</h3>
                      <p className="text-blkr-offWhite/80">
                        Start with our core concepts and terminology. Understand market structure, 
                        basic technical analysis, and establish your trading psychology foundation.
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
                      <h3 className="text-2xl font-bold mb-3">Strategy Development</h3>
                      <p className="text-blkr-offWhite/80">
                        Master our proprietary trading strategies and learn how to adapt them to 
                        different market conditions and asset classes.
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
                      <h3 className="text-2xl font-bold mb-3">Risk Management & Psychology</h3>
                      <p className="text-blkr-offWhite/80">
                        Develop robust risk management rules and strengthen your trading psychology
                        to maintain composure during volatile market conditions.
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
                      <h3 className="text-2xl font-bold mb-3">Live Trading Practice</h3>
                      <p className="text-blkr-offWhite/80">
                        Apply your knowledge in real-time with our mentors guiding you through live markets.
                        Receive immediate feedback and make rapid improvements.
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
                      <h3 className="text-2xl font-bold mb-3">Mastery & Mentorship</h3>
                      <p className="text-blkr-offWhite/80">
                        Become part of our elite community of successful traders. Refine your edge
                        and eventually mentor others on their journey to trading success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <Button className="cta-button" onClick={() => window.location.href = "/join"}>
                  Begin Your Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Education;
