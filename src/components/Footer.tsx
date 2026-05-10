import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#FAF7F2]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <h3 className="font-[var(--font-cinzel)] text-2xl font-bold tracking-[0.2em] mb-1">
            MAYAR<span className="text-[#C8A96B]"> ARABIA</span>
          </h3>
          <div className="w-12 h-px bg-[#C8A96B] mb-4" />
          <p className="text-sm text-white/50 leading-relaxed font-[var(--font-inter)]">
            Perfumería árabe premium en Barcelona. Selección exclusiva de las mejores fragancias de Oriente Medio.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com/mayarabia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-[var(--font-cinzel)] text-xs tracking-[0.25em] text-[#C8A96B] uppercase mb-5">
            Tienda
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/tienda?cat=hombre", label: "Perfumes Hombre" },
              { href: "/tienda?cat=mujer", label: "Perfumes Mujer" },
              { href: "/tienda?cat=unisex", label: "Unisex" },
              { href: "/tienda?viral=true", label: "Virales TikTok" },
              { href: "/tienda?bestseller=true", label: "Más vendidos" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/50 hover:text-[#C8A96B] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h4 className="font-[var(--font-cinzel)] text-xs tracking-[0.25em] text-[#C8A96B] uppercase mb-5">
            Marcas
          </h4>
          <ul className="space-y-3">
            {["Lattafa", "Afnan", "Armaf", "Rasasi", "Maison Alhambra"].map((b) => (
              <li key={b}>
                <Link href={`/tienda?brand=${b}`} className="text-sm text-white/50 hover:text-[#C8A96B] transition-colors">
                  {b}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-[var(--font-cinzel)] text-xs tracking-[0.25em] text-[#C8A96B] uppercase mb-5">
            Contacto
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-white/50">
              <MapPin size={15} className="text-[#C8A96B] flex-shrink-0 mt-0.5" />
              <span>Carrer de Mallorca 123, Barcelona</span>
            </li>
            <li className="flex gap-3 text-sm text-white/50">
              <Phone size={15} className="text-[#C8A96B] flex-shrink-0 mt-0.5" />
              <span>+34 600 000 000</span>
            </li>
            <li className="flex gap-3 text-sm text-white/50">
              <Mail size={15} className="text-[#C8A96B] flex-shrink-0 mt-0.5" />
              <span>hola@mayarabia.com</span>
            </li>
          </ul>
          <div className="mt-6 p-3 bg-white/5 rounded-lg text-xs text-white/40 leading-relaxed">
            Lun — Sáb: 10:00 — 20:00
            <br />
            Dom: 11:00 — 18:00
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© 2025 Mayar Arabia. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidad" className="hover:text-[#C8A96B] transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-[#C8A96B] transition-colors">Términos</Link>
            <Link href="/cookies" className="hover:text-[#C8A96B] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
