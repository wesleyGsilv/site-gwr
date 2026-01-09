import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5531995903893"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden sm:inline">Fale Conosco</span>
    </motion.a>
  );
};
