
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, ShieldCheck, Users } from "lucide-react";
import FAQSection from "@/components/FAQSection";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <main className="bg-blkr-black min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-blkr-blackLight">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
                About BLKR Trading
              </h1>
              <p className="text-xl text-blkr-offWhite/80">
                Empowering traders with elite strategies, personalized coaching, and cutting-edge market insights since 2016.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Mission</h2>
                <p className="mt-6 text-lg text-blkr-offWhite/80">
                  To democratize access to professional-grade crypto trading strategies while providing 
                  personalized coaching that empowers investors to achieve financial freedom in the 
                  digital asset space.
                </p>
              </div>
              <div>
                <h2 className="section-title">Our Vision</h2>
                <p className="mt-6 text-lg text-blkr-offWhite/80">
                  To build a community of successful, knowledgeable crypto traders who consistently 
                  outperform the market while managing risk effectively through our expert guidance 
                  and proprietary systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-blkr-blackLight">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title inline-block">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-premium">
                <div className="p-6">
                  <div className="rounded-full bg-blkr-gold/10 p-4 inline-flex mb-4">
                    <ShieldCheck className="h-8 w-8 text-blkr-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Integrity</h3>
                  <p className="text-blkr-offWhite/80">
                    We uphold the highest standards of honesty and transparency in all our dealings, 
                    ensuring that our members' interests always come first.
                  </p>
                </div>
              </Card>
              <Card className="card-premium">
                <div className="p-6">
                  <div className="rounded-full bg-blkr-gold/10 p-4 inline-flex mb-4">
                    <Award className="h-8 w-8 text-blkr-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                  <p className="text-blkr-offWhite/80">
                    We are committed to delivering outstanding results and continuously improving 
                    our strategies, systems, and educational resources.
                  </p>
                </div>
              </Card>
              <Card className="card-premium">
                <div className="p-6">
                  <div className="rounded-full bg-blkr-gold/10 p-4 inline-flex mb-4">
                    <Users className="h-8 w-8 text-blkr-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Community</h3>
                  <p className="text-blkr-offWhite/80">
                    We foster a supportive environment where members can learn, grow, and succeed together, 
                    sharing knowledge and insights along the way.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder's Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Founder" 
                  className="rounded-lg shadow-xl border border-blkr-gold/20" 
                />
              </div>
              <div>
                <h2 className="section-title">Founder's Story</h2>
                <p className="mt-6 text-lg text-blkr-offWhite/80">
                  As a Certified Public Accountant and Certified Financial Planner, I built a $5M 
                  Registered Investment Adviser in the Pacific Northwest before discovering the 
                  transformative potential of blockchain technology in 2016. Combining my 
                  financial expertise with my passion for cryptocurrencies, I created BLKR Trading 
                  to help investors safely navigate the complex world of digital assets.
                </p>
                <p className="mt-4 text-lg text-blkr-offWhite/80">
                  Having served as a fiduciary financial planner for most of my career, I bring 
                  the same level of care and responsibility to my cryptocurrency coaching services, 
                  ensuring that my members receive the highest quality guidance and support on their 
                  trading journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
