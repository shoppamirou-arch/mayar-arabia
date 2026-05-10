import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Mayar Arabia",
  description: "Respuestas a las preguntas más habituales sobre envíos, devoluciones, autenticidad y más.",
};

const faqs = [
  {
    q: "¿Los perfumes son originales?",
    a: "Sí, 100%. Trabajamos directamente con distribuidores oficiales de las marcas árabes. Todos los productos son auténticos y están fabricados por las propias marcas: Lattafa, Afnan, Armaf, Rasasi y Maison Alhambra.",
  },
  {
    q: "¿Cuánto tarda el envío?",
    a: "Los pedidos se envían en 24 horas hábiles y llegan en 24-48h dentro de España peninsular. Las Islas Baleares pueden tardar 48-72h. Envío gratuito en pedidos superiores a 50€.",
  },
  {
    q: "¿Puedo recoger en tienda?",
    a: "Sí. Selecciona 'Recogida en tienda' al hacer el pedido. Una vez confirmado el pago, recibirás un aviso y podrás recogerlo el mismo día. Estamos en Carrer de Mallorca 123, Barcelona.",
  },
  {
    q: "¿Cómo funciona la devolución?",
    a: "Tienes 30 días desde la recepción para devolver cualquier producto en perfecto estado (sin abrir o con mínimo uso). Contacta con nosotros por WhatsApp o email y gestionamos la recogida sin coste adicional.",
  },
  {
    q: "¿Los perfumes son EDP o EDT?",
    a: "La mayoría de nuestra selección son Eau de Parfum (EDP), que ofrecen mayor concentración, duración en piel y estela que los EDT. Cada ficha de producto especifica el tipo.",
  },
  {
    q: "¿Cuánto duran en la piel?",
    a: "La perfumería árabe destaca por su excepcional longevidad. La mayoría de nuestras fragancias duran entre 8 y 12 horas en piel, y algunas como Tobacco Oud o Khamrah pueden superar las 12h. Consulta la ficha de cada perfume.",
  },
  {
    q: "¿Cómo sé qué perfume elegir?",
    a: "Disponemos de una Guía de Aromas que explica cada familia olfativa con ejemplos. También puedes escribirnos por WhatsApp y te asesoramos sin compromiso según tu perfil olfativo.",
  },
  {
    q: "¿Puedo comprar como regalo?",
    a: "Sí. Todos los pedidos se presentan con estuche y packaging premium. Puedes añadir una nota personalizada en el checkout. Si no sabes qué fragancia elegir, escríbenos y te ayudamos.",
  },
  {
    q: "¿Qué métodos de pago aceptáis?",
    a: "Tarjeta de crédito/débito (Visa, Mastercard, Amex), PayPal y Bizum. Todos los pagos están cifrados con SSL y son completamente seguros.",
  },
];

export default function FaqPage() {
  return (
    <div className="pt-28 min-h-screen bg-[#FAF7F2]">
      <section className="relative bg-[#0F0F0F] py-24 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #C8A96B 0%, transparent 60%)` }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase mb-4">Ayuda</p>
          <h1 className="font-[var(--font-cinzel)] text-5xl md:text-6xl text-white font-semibold mb-4">
            Preguntas <span className="text-[#C8A96B]">frecuentes</span>
          </h1>
          <div className="gold-divider my-6" />
          <p className="text-white/60 font-[var(--font-cormorant)] text-xl leading-relaxed">
            Todo lo que necesitas saber antes de comprar.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white border border-[#EDE3D1] open:border-[#C8A96B]/40">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                <span className="font-[var(--font-cinzel)] text-base text-[#0F0F0F] font-medium pr-4">{faq.q}</span>
                <ChevronDown size={18} className="text-[#C8A96B] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 pt-1">
                <p className="text-[#0F0F0F]/70 font-[var(--font-cormorant)] text-lg leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 bg-[#0F0F0F] p-8 text-center">
          <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase mb-3">¿Más dudas?</p>
          <p className="text-white font-[var(--font-cormorant)] text-xl mb-6">
            Escríbenos y te respondemos en menos de 2 horas.
          </p>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8A96B] text-[#0F0F0F] px-8 py-3.5 text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#D4B97A] transition-colors"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
