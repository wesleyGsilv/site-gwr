import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Users, Building2, Wrench } from "lucide-react";

const stats = [
  { icon: Building2, value: "200+", label: "Projetos Realizados" },
  { icon: Users, value: "150+", label: "Clientes Satisfeitos" },
  { icon: Wrench, value: "28+", label: "Anos de Experiência" },
];

const differentials = [
  "Equipe experiente e qualificada",
  "Uso de materiais de alta qualidade",
  "Compromisso com prazos",
  "Atendimento personalizado",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl -rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Equipe de construção"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 lg:right-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-accent">28+</span>
                <p className="text-sm mt-1 text-primary-foreground/80">Anos de Experiência</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Quem Somos
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A GWR Empreiteira é referência em soluções completas para construção civil, 
              oferecendo excelência em projetos residenciais, comerciais e industriais.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa equipe, formada por profissionais experientes e altamente qualificados, 
              garante resultados que aliam qualidade, eficiência e atenção aos mínimos detalhes.
              Com foco na satisfação do cliente, atuamos com seriedade e compromisso em cada etapa.
            </p>

            {/* Differentials */}
            <div className="space-y-4 mb-8">
              {differentials.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 mt-16 lg:mt-24"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="text-center p-6 bg-background rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <span className="text-3xl lg:text-4xl font-heading font-bold text-foreground block">
                {value}
              </span>
              <span className="text-sm lg:text-base text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
