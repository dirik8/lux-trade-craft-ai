
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Trophy, Shield, Star, Contact } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Coaching", path: "/coaching" },
    { name: "Programs", path: "/programs" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled ? "bg-black/95 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl font-playfair font-bold relative"
            >
              <span className="text-blkr-offWhite group-hover:text-white transition-colors duration-500">BLKR</span>
              <span className="text-blkr-gold group-hover:text-blkr-goldLight transition-colors duration-500">TRADING</span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-blkr-gold via-blkr-goldLight to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-blkr-offWhite hover:text-blkr-gold transition-colors duration-300 overflow-hidden group ${
                  location.pathname === link.path ? "text-blkr-gold" : ""
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-blkr-gold transform ${
                  location.pathname === link.path 
                    ? "translate-x-0" 
                    : "translate-x-[-100%] group-hover:translate-x-0"
                } transition-transform duration-300`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="cta-button bg-gradient-to-r from-blkr-gold to-blkr-goldDark hover:from-blkr-goldLight hover:to-blkr-gold text-blkr-black font-medium transition-all duration-500 shadow-[0_8px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)]"
              onClick={() => window.location.href = "/join"}
            >
              <Trophy size={16} className="mr-2" />
              Apply for Membership
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-blkr-offWhite hover:text-blkr-gold"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden pt-4 pb-8"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.nav className="flex flex-col space-y-6 bg-blkr-blackLight/95 backdrop-blur-lg p-6 rounded-lg border border-blkr-gold/20">
                {navLinks.map((link, index) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className={`flex items-center text-blkr-offWhite hover:text-blkr-gold py-2 transition-colors duration-300 ${
                        location.pathname === link.path ? "text-blkr-gold" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name === "Home" && <Star className="mr-3" size={16} />}
                      {link.name === "Education" && <Shield className="mr-3" size={16} />}
                      {link.name !== "Home" && link.name !== "Education" && (
                        <div className="w-4 h-4 mr-3 rounded-full bg-gradient-to-r from-blkr-gold to-blkr-goldLight opacity-70" />
                      )}
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Button
                    className="cta-button w-full bg-gradient-to-r from-blkr-gold to-blkr-goldDark text-blkr-black font-medium mt-4"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = "/join";
                    }}
                  >
                    <Trophy size={16} className="mr-2" />
                    Apply for Membership
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
