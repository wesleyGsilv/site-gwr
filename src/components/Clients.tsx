import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Quote } from "lucide-react";

const clients = [
  {
    name: "Construtora Eficiência",
    url: "https://www.construtoraeficiencia.com.br/",
    description: "Parceria sólida em projetos de grande porte",
  },
  {
    name: "Milenar Reformas",
    url: "https://www.milenar.com.br/index.html",
    description: "Colaboração em reformas residenciais",
  },
];

const testimonials = [
  {
    text: "Excelente qualidade no trabalho e pontualidade na entrega. A equipe da GWR superou nossas expectativas!",
    author: "Carlos Silva",
    role: "Diretor de Projetos",
  },
  {
    text: "Profissionais extremamente qualificados. A atenção aos detalhes faz toda a diferença no resultado final.",
    author: "Marina Santos",
    role: "Arquiteta",
  },
];

export const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clientes" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            Nossos Clientes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Clientes que Confiam na{" "}
            <span className="text-accent">GWR Empreiteira</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Temos orgulho de construir parcerias sólidas e duradouras com nossos clientes.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16"
        >
          {clients.map((client, index) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-6 transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-foreground group-hover:text-accent transition-colors">
                  {client.name}
                </h3>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  {client.description}
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-primary-foreground/40 group-hover:text-accent transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 lg:p-8"
            >
              <Quote className="w-10 h-10 text-accent mb-4" />
              <p className="text-primary-foreground text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-heading font-bold text-primary-foreground">
                  {testimonial.author}
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
