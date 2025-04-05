
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-blkr-black text-blkr-offWhite flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">404</h1>
          <div className="w-16 h-1 bg-blkr-gold mx-auto mb-8"></div>
          <p className="text-xl text-blkr-offWhite/80 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <CTAButton text="Return to Homepage" href="/" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
