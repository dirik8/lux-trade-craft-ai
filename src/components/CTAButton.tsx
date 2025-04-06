
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  href: string;
  className?: string;
  pulse?: boolean;
  icon?: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  className = "",
  pulse = false,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      {pulse && (
        <span className="absolute inset-0 rounded-md bg-blkr-gold/30 animate-gold-pulse"></span>
      )}
      <Button
        className={`cta-button relative bg-gradient-to-r from-blkr-gold to-blkr-goldDark text-blkr-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 overflow-hidden group ${className}`}
        onClick={() => window.location.href = href}
      >
        {/* Shimmer effect */}
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        
        {/* Icon */}
        {icon || null}
        
        {/* Text */}
        <span className="relative z-10">{text}</span>
        
        {/* Arrow icon */}
        <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
      </Button>
    </motion.div>
  );
};

export default CTAButton;
