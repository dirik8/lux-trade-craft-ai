
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const TestimonialsPage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const testimonialVideos = [
    { id: 1, title: "John D.", vimeoId: "123456789", role: "Platinum Member" },
    { id: 2, title: "Sarah M.", vimeoId: "123456790", role: "Gold Member" },
    { id: 3, title: "Michael T.", vimeoId: "123456791", role: "Platinum Member" },
    { id: 4, title: "Emily R.", vimeoId: "123456792", role: "Silver Member" },
    { id: 5, title: "David K.", vimeoId: "123456793", role: "Platinum Member" },
    { id: 6, title: "Jessica L.", vimeoId: "123456794", role: "Gold Member" },
    { id: 7, title: "Robert P.", vimeoId: "123456795", role: "Platinum Member" },
    { id: 8, title: "Amanda S.", vimeoId: "123456796", role: "Silver Member" },
    { id: 9, title: "Christopher W.", vimeoId: "123456797", role: "Gold Member" },
    { id: 10, title: "Victoria H.", vimeoId: "123456798", role: "Platinum Member" },
    { id: 11, title: "Thomas B.", vimeoId: "123456799", role: "Gold Member" },
    { id: 12, title: "Olivia N.", vimeoId: "123456800", role: "Platinum Member" }
  ];

  const playVideo = (vimeoId: string) => {
    setActiveVideo(vimeoId);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  // Animation variants for cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
              Success Stories
            </h1>
            <p className="mt-6 text-xl text-blkr-offWhite/80 max-w-3xl mx-auto leading-relaxed">
              Hear directly from our members who have transformed their trading results 
              with our exclusive strategies and personalized coaching.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {testimonialVideos.map((video) => (
              <motion.div key={video.id} variants={item}>
                <Card className="overflow-hidden bg-blkr-blackLight/50 backdrop-blur-md border-blkr-gold/20 hover:border-blkr-gold transition-all duration-300 group">
                  <CardContent className="p-0 relative">
                    <div className="aspect-video bg-gradient-to-br from-blkr-black/80 to-blkr-blackLight relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-70">
                        <iframe
                          src={`https://player.vimeo.com/video/${video.vimeoId}?background=1&autoplay=0`}
                          allow="autoplay; fullscreen; picture-in-picture"
                          className="absolute top-0 left-0 w-full h-full pointer-events-none"
                          title={`Testimonial from ${video.title}`}
                        />
                      </div>
                      <div 
                        onClick={() => playVideo(video.vimeoId)}
                        className="absolute inset-0 bg-gradient-to-t from-blkr-black/90 via-transparent to-transparent flex items-center justify-center cursor-pointer group-hover:bg-blkr-black/40 transition-all duration-300"
                      >
                        <Button 
                          variant="outline" 
                          className="rounded-full p-3 bg-blkr-black/30 border-blkr-gold hover:bg-blkr-gold/20 hover:scale-110 transition-transform duration-300"
                        >
                          <PlayCircle className="h-8 w-8 text-blkr-gold" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold">{video.title}</h3>
                      <div className="flex items-center mt-1">
                        <span className="inline-block h-2 w-2 rounded-full bg-blkr-gold mr-2"></span>
                        <p className="text-sm text-blkr-gold">{video.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to action section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to join our success stories?</h2>
            <Button className="cta-button text-lg px-8 py-6">Apply for Membership</Button>
          </motion.div>
        </div>
      </main>
      
      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-blkr-black border-blkr-gold">
          <div className="relative pt-[56.25%] w-full">
            {activeVideo && (
              <iframe
                src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1`}
                allow="autoplay; fullscreen; picture-in-picture"
                className="absolute top-0 left-0 w-full h-full"
                title="Testimonial video"
              />
            )}
          </div>
          <DialogClose className="absolute top-2 right-2 bg-blkr-black/80 p-2 rounded-full">
            <X className="h-6 w-6 text-blkr-offWhite" />
          </DialogClose>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default TestimonialsPage;
