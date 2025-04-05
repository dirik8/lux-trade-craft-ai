
import React from "react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  text: string;
  href: string;
  className?: string;
  pulse?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  className = "",
  pulse = false,
}) => {
  return (
    <Button
      className={`cta-button ${pulse ? "animate-gold-pulse" : ""} ${className}`}
      onClick={() => window.location.href = href}
    >
      {text}
    </Button>
  );
};

export default CTAButton;
