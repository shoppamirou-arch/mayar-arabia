"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="pt-28 min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <section className="bg-[#0F0F0F] py-20 px-6 text-center">
        <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase mb-4">Estamos aquí</p>
        <h1 className="font-[var(--font-cinzel)] text-5xl text-white font-semibold mb-3">
          Contacto
        </h1>
        <div className="gold-divider my-5" />
        <p className="text-white/50 font-[var(--font-cormorant)] text-xl max-w-xl mx-auto">
          Visítanos en tienda, escríbenos o llámanos. Siempre disponibles para ayudarte.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: contact form */}
        <div>
          <h2 className="font-[var(--font-cinzel)] text-2xl text-[#0F0F0F] font-semibold mb-2">
            Envíanos un mensaje
          </h2>
          <div className="w-10 h-px bg-[#C8A96B] mb-6" />

          {sent ? (
            <div className="bg-[#C8A96B]/10 border border-[#C8A96B]/30 p-6 text-center">
              <p className="font-[var(--font-cinzel)] text-lg text-[#C8A96B] mb-2">Mensaje enviado</p>
              <p className="text-sm text-[#0F0F0F]/60 font-[var(--font-cormorant)] text-base">
                Te responderemos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">Nombre</label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full border border-[#EDE3D1] bg-white px-4 py-3 text-sm outline-none focus:border-[#C8A96B] placeholder:text-[#0F0F0F]/25"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full border border-[#EDE3D1] bg-white px-4 py-3 text-sm outline-none focus:border-[#C8A96B] placeholder:text-[#0F0F0F]/25"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">Asunto</label>
                <input
                  name="asunto"
                  value={form.asunto}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full border border-[#EDE3D1] bg-white px-4 py-3 text-sm outline-none focus:border-[#C8A96B] placeholder:text-[#0F0F0F]/25"
                />
              </div>
              <div>
                <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuéntanos lo que necesitas..."
                  className="w-full border border-[#EDE3D1] bg-white px-4 py-3 text-sm outline-none focus:border-[#C8A96B] placeholder:text-[#0F0F0F]/25 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0F0F0F] text-[#C8A96B] py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#C8A96B] hover:text-[#0F0F0F] transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>

        {/* Right: info */}
        <div className="space-y-6">
          <div>
            <h2 className="font-[var(--font-cinzel)] text-2xl text-[#0F0F0F] font-semibold mb-2">Información</h2>
            <div className="w-10 h-px bg-[#C8A96B] mb-6" />
          </div>

          <div className="space-y-4">
            {[
              { icon: <MapPin size={18} />, label: "Tienda Barcelona", value: "Carrer de Mallorca 123\n08036 Barcelona, España" },
              { icon: <Phone size={18} />, label: "Teléfono", value: "+34 600 000 000" },
              { icon: <Mail size={18} />, label: "Email", value: "hola@mayarabia.com" },
            ].map((i) => (
              <div key={i.label} className="flex gap-4 p-4 bg-white border border-[#EDE3D1]">
                <div className="w-10 h-10 bg-[#C8A96B]/10 rounded-full flex items-center justify-center text-[#C8A96B] flex-shrink-0">
                  {i.icon}
                </div>
                <div>
                  <p className="text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-0.5">{i.label}</p>
                  <p className="text-sm text-[#0F0F0F]/70 whitespace-pre-line">{i.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hours */}
          <div className="p-5 bg-white border border-[#EDE3D1]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C8A96B]/10 rounded-full flex items-center justify-center text-[#C8A96B]">
                <Clock size={18} />
              </div>
              <p className="text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase">Horario tienda</p>
            </div>
            <div className="space-y-1.5">
              {[
                { days: "Lunes — Viernes", hours: "10:00 — 20:00" },
                { days: "Sábado", hours: "10:00 — 20:00" },
                { days: "Domingo", hours: "11:00 — 18:00" },
              ].map((h) => (
                <div key={h.days} className="flex justify-between text-sm">
                  <span className="text-[#0F0F0F]/60">{h.days}</span>
                  <span className="text-[#0F0F0F] font-medium">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram */}
          <a
            href="https://instagram.com/mayarabia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900 via-pink-800 to-orange-700 text-white group hover:opacity-90 transition-opacity"
          >
            <InstagramIcon size={22} />
            <div>
              <p className="font-semibold text-sm">@mayarabia</p>
              <p className="text-white/70 text-xs">Síguenos en Instagram</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-[#25D366] text-[#25D366] py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#25D366] hover:text-white transition-colors"
          >
            Chatear por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
