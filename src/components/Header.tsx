import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.svg";

const navItems = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-background/95 py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="GWR Empreiteira" className="h-10 sm:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium text-sm uppercase tracking-wide ${
                  isScrolled 
                    ? "text-foreground/80 hover:text-accent" 
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:31995903893"
              className={`flex items-center gap-2 transition-colors ${
                isScrolled 
                  ? "text-foreground/80 hover:text-accent" 
                  : "text-foreground/80 hover:text-accent"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(31) 99590-3893</span>
            </a>
            <Button variant="accent" asChild>
              <a href="https://wa.me/5531995903893" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/95 backdrop-blur-md"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-primary-foreground/90 hover:text-accent transition-colors font-medium py-2 border-b border-primary-foreground/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="accent" className="mt-4" asChild>
                <a href="https://wa.me/5531995903893" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
