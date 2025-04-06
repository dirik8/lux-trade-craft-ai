
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // In a real application, this would be an API call to submit the form
    console.log("Form data submitted:", data);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | BLKR Trading</title>
        <meta 
          name="description" 
          content="Get in touch with the BLKR Trading team. We're here to help you with any questions about our trading community and services." 
        />
        <meta property="og:title" content="Contact Us | BLKR Trading" />
        <meta 
          property="og:description" 
          content="Get in touch with the BLKR Trading team. We're here to help you with any questions about our trading community and services." 
        />
        <link rel="canonical" href="https://blkrtrading.com/contact" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24 lg:pt-28">
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blkr-gold to-blkr-goldLight mb-4">
              Contact Us
            </h1>
            <p className="text-blkr-offWhite/70 max-w-2xl mx-auto text-lg">
              Have questions about BLKR Trading or need assistance? Our team is here to help you. Reach out using the form below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-blkr-blackLight p-8 rounded-lg border border-blkr-gold/20">
              <h2 className="text-2xl font-bold text-blkr-gold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-blkr-gold mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-blkr-offWhite/70">contact@blkrtrading.com</p>
                    <p className="text-blkr-offWhite/70">support@blkrtrading.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-blkr-gold mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-blkr-offWhite/70">+1 (888) 555-BLKR</p>
                    <p className="text-blkr-offWhite/70">Monday - Friday: 9AM - 5PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-blkr-gold mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-blkr-offWhite/70">
                      BLKR Trading HQ<br />
                      Wall Street<br />
                      New York, NY 10005
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-blkr-black flex items-center justify-center border border-blkr-gold/30 hover:border-blkr-gold transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-blkr-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-blkr-black flex items-center justify-center border border-blkr-gold/30 hover:border-blkr-gold transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-blkr-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-blkr-black flex items-center justify-center border border-blkr-gold/30 hover:border-blkr-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-blkr-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-blkr-black flex items-center justify-center border border-blkr-gold/30 hover:border-blkr-gold transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-blkr-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-blkr-blackLight p-8 rounded-lg border border-blkr-gold/20">
              <h2 className="text-2xl font-bold text-blkr-gold mb-6">Send a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field}
                            className="bg-blkr-black border-blkr-gold/30 text-blkr-offWhite focus:border-blkr-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            {...field}
                            className="bg-blkr-black border-blkr-gold/30 text-blkr-offWhite focus:border-blkr-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="How can we help you?" 
                            {...field}
                            className="bg-blkr-black border-blkr-gold/30 text-blkr-offWhite focus:border-blkr-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            rows={5} 
                            {...field}
                            className="bg-blkr-black border-blkr-gold/30 text-blkr-offWhite focus:border-blkr-gold resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blkr-gold to-blkr-goldDark hover:from-blkr-goldLight hover:to-blkr-gold text-blkr-black font-medium transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blkr-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2" size={18} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="border-2 border-blkr-gold/20 rounded-lg overflow-hidden h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center bg-blkr-black/50 backdrop-blur-sm">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto text-blkr-gold mb-4 opacity-60" />
                  <p className="text-blkr-offWhite/70">Interactive map loading...</p>
                  <p className="text-sm text-blkr-offWhite/50 mt-2">Wall Street, New York, NY 10005</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
