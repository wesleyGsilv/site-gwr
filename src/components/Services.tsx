import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Paintbrush, Home, Footprints, Layers, Hammer, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Building,
    title: "Construção e Reformas Prediais",
    description: "Execução de obras de pequeno, médio e grande porte. Reformas e adaptações em prédios comerciais, residenciais e industriais.",
    features: ["Regularizações estruturais", "Manutenção preventiva", "Restauração de fachadas"],
  },
  {
    icon: Paintbrush,
    title: "Revestimentos e Pintura",
    description: "Serviços completos de revestimento e pintura de fachadas para edifícios comerciais, residenciais e industriais.",
    features: ["Técnicas modernas", "Materiais de alta qualidade", "Mão de obra especializada"],
  },
  {
    icon: Home,
    title: "Casas de Médio e Alto Padrão",
    description: "Planejamento e construção de residências exclusivas com acabamentos sofisticados e personalizados.",
    features: ["Projetos exclusivos", "Acabamentos sofisticados", "Personalização total"],
  },
  {
    icon: Footprints,
    title: "Reformas de Passeios",
    description: "Recuperação e revitalização de calçadas, passeios e acessos com padrões de acessibilidade.",
    features: ["Acessibilidade", "Alta durabilidade", "Revitalização completa"],
  },
  {
    icon: Layers,
    title: "Revestimentos Cerâmicos",
    description: "Instalação de porcelanatos, cerâmicas, granitos e mármores com acabamentos detalhados.",
    features: ["Porcelanatos", "Pedras naturais", "Soluções personalizadas"],
  },
  {
    icon: Hammer,
    title: "Reformas Internas e Externas",
    description: "Modernização de ambientes residenciais e comerciais com substituição de acabamentos.",
    features: ["Modernização", "Novos acabamentos", "Restauração de fachadas"],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Soluções Completas em{" "}
            <span className="text-gradient">Construção Civil</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de serviços para atender todas as suas necessidades 
            de construção, reforma e acabamento.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 lg:mt-16"
        >
          <Button variant="accent" size="lg" asChild>
            <a href="https://wa.me/5531995903893" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento Gratuito
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
