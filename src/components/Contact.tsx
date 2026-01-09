import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(31) 99590-3893",
    href: "tel:31995903893",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@gwrempreiteira.com.br",
    href: "mailto:contato@gwrempreiteira.com.br",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg a Sex, 8h às 18h",
    href: null,
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/box-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          idCompany: "78191f93-4f2b-4ded-8c41-9dadb9f9fc27",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data?.data || "Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error(data?.message || "Erro ao enviar mensagem.");
      }
    } catch (error) {
      toast.error("Erro de conexão com o servidor.");
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Fale Conosco
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Estamos prontos para ajudar você a transformar seu projeto em realidade!
              Entre em contato e conte com a expertise da GWR Empreiteira.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl shadow-xl p-6 lg:p-8"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Solicite um Orçamento
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome Completo
                  </label>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      placeholder="(31) 99999-9999"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Assunto
                  </label>
                  <select
                    className="w-full border rounded-lg px-3 py-2 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    required
                  >
                    <option value="" disabled>Selecione o Assunto:*</option>
                    <option value="Construção">Construção</option>
                    <option value="Reforma">Reforma</option>
                    <option value="Orçamento">Orçamento</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button variant="accent" size="lg" className="w-full" type="submit">
                  Enviar Mensagem
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
