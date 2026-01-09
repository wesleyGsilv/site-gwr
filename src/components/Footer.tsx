import { Phone, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 lg:py-16" style={{ /*borderTop: '1px solid hsl(25.05deg 95.37% 57.65%)' */ borderTop: '1px solid #7BC441'}}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="GWR Empreiteira" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Transformamos ideias em obras sólidas e duradouras. Especialistas em 
              construção, reformas e acabamentos com qualidade incomparável.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {["Quem Somos", "Serviços", "Clientes", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:31995903893"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (31) 99590-3893
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@gwrempreiteira.com.br"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@gwrempreiteira.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gwrempreiteira?igsh=M2xqN3l1ZXpxMGZj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} GWR Empreiteira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
