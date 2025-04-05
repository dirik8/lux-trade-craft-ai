
import React from "react";
import { Star } from "lucide-react";
import CTAButton from "./CTAButton";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "James K.",
      role: "Platinum Member",
      image: "/placeholder.svg", // Replace with actual member image
      stars: 5,
      quote: "Since joining BLKR's elite program, my trading has completely transformed. I've gone from inconsistent returns to generating over $50,000 per month in profits."
    },
    {
      name: "Sarah M.",
      role: "Gold Member",
      image: "/placeholder.svg", // Replace with actual member image
      stars: 5,
      quote: "The mentorship I've received from BLKR has been invaluable. Their risk management system alone has saved me from countless bad trades."
    },
    {
      name: "Michael T.",
      role: "Platinum Member",
      image: "/placeholder.svg", // Replace with actual member image
      stars: 5,
      quote: "The exclusive strategies and real-time signals have given me an edge I never thought possible. BLKR has paid for itself many times over."
    }
  ];

  return (
    <section className="py-20 bg-blkr-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-centered">
          <h2 className="section-title inline-block">
            Hear from Our Elite Members
          </h2>
          <p className="mt-6 text-lg text-blkr-offWhite/80 max-w-2xl mx-auto">
            Success stories from traders who have leveraged BLKR's exclusive resources to achieve extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-premium flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-blkr-gold">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="fill-blkr-gold text-blkr-gold" />
                ))}
              </div>
              
              <blockquote className="text-blkr-offWhite/80 italic mb-4 flex-grow">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton text="View All Testimonials" href="/testimonials" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
