import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const features = [
  { icon: Shield, label: "Qualidade Garantida" },
  { icon: Clock, label: "Pontualidade" },
  { icon: Award, label: "Excelência" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construção civil profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
              Construção Civil de Excelência
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            GWR Empreiteira:{" "}
            <span className="text-gradient">Projetos Sólidos</span> e{" "}
            <span className="text-gradient">Duradouros</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
          >
            Transformamos ideias em obras sólidas e duradouras. Especialistas em 
            construção, reformas e acabamentos com qualidade incomparável.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5531995903893" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#servicos">
                Nossos Serviços
              </a>
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-primary-foreground font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
