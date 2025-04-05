
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const TestimonialsPage = () => {
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
    { id: 10, title: "Victoria H.", vimeoId: "123456798", role: "Platinum Member" }
  ];

  return (
    <>
      <Navigation />
      <main className="bg-blkr-black min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
              Success Stories
            </h1>
            <p className="mt-4 text-xl text-blkr-offWhite/80 max-w-3xl mx-auto">
              Hear directly from our members who have transformed their trading results 
              with our exclusive strategies and personalized coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialVideos.map((video) => (
              <Card key={video.id} className="card-premium overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="aspect-video bg-blkr-blackLight relative flex items-center justify-center">
                    <iframe
                      src={`https://player.vimeo.com/video/${video.vimeoId}?background=1`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="absolute top-0 left-0 w-full h-full"
                      title={`Testimonial from ${video.title}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blkr-black/80 to-transparent flex items-center justify-center">
                      <Button variant="outline" className="rounded-full p-2 bg-blkr-black/30 border-blkr-gold">
                        <PlayCircle className="h-10 w-10 text-blkr-gold" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{video.title}</h3>
                    <p className="text-sm text-blkr-gold">{video.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
