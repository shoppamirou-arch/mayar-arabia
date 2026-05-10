"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, MapPin, Truck, RotateCcw, Shield } from "lucide-react";
import { PRODUCTS, BRANDS, TESTIMONIALS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F0F]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #C8A96B 0%, transparent 50%), radial-gradient(circle at 75% 50%, #8A7550 0%, transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[600px] h-[600px] border border-[#C8A96B] rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-[#C8A96B] rounded-full" />
        <div className="absolute w-[200px] h-[200px] border border-[#C8A96B] rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase font-[var(--font-inter)] mb-6">
          Perfumería Árabe Premium · Barcelona
        </p>
        <h1 className="font-[var(--font-cinzel)] text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-none mb-6">
          Descubre el lujo
          <br />
          <span className="text-[#C8A96B]">de la perfumería</span>
          <br />
          árabe
        </h1>
        <div className="gold-divider my-8" />
        <p className="text-white/50 text-xl font-[var(--font-cormorant)] font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Lattafa · Afnan · Armaf · Rasasi · Maison Alhambra. Selección exclusiva de las fragancias más icónicas de Oriente Medio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tienda"
            className="inline-flex items-center gap-3 bg-[#C8A96B] text-[#0F0F0F] px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#D4B97A] transition-colors"
          >
            Comprar ahora
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/tienda?viral=true"
            className="inline-flex items-center gap-3 border border-white/20 text-white px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors"
          >
            Virales TikTok
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-widest uppercase">Descubrir</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C8A96B] to-transparent" />
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: <Truck size={18} />, title: "Envío gratis +50€", sub: "24-48h en España" },
    { icon: <MapPin size={18} />, title: "Recoge hoy", sub: "Tienda en Barcelona" },
    { icon: <RotateCcw size={18} />, title: "Devolución 30 días", sub: "Sin preguntas" },
    { icon: <Shield size={18} />, title: "Pago seguro", sub: "SSL & encriptado" },
  ];
  return (
    <div className="bg-[#EDE3D1]/40 border-y border-[#EDE3D1]">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[#C8A96B]">{item.icon}</span>
            <div>
              <p className="text-xs font-semibold text-[#0F0F0F] tracking-wide">{item.title}</p>
              <p className="text-[11px] text-[#0F0F0F]/50">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BestsellerSection() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller);
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Colección</p>
        <h2 className="font-[var(--font-cinzel)] text-4xl md:text-5xl text-[#0F0F0F] font-semibold mb-4">
          Los más vendidos
        </h2>
        <div className="gold-divider mb-4" />
        <p className="text-[#0F0F0F]/50 font-[var(--font-cormorant)] text-xl max-w-xl mx-auto">
          Fragancias que han conquistado miles de corazones en todo el mundo.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestsellers.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/tienda"
          className="inline-flex items-center gap-2 border border-[#0F0F0F] text-[#0F0F0F] px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-[#0F0F0F] hover:text-[#C8A96B] transition-colors"
        >
          Ver toda la colección <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section className="py-16 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[#C8A96B] text-[10px] tracking-[0.4em] uppercase mb-8">Marcas oficiales</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {BRANDS.map((b) => (
            <Link key={b.name} href={`/tienda?brand=${b.name}`} className="group flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:border-[#C8A96B] group-hover:text-[#C8A96B] transition-all font-[var(--font-cinzel)] font-bold">
                {b.logo}
              </div>
              <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase group-hover:text-[#C8A96B] transition-colors">
                {b.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TikTokSection() {
  const viral = PRODUCTS.filter((p) => p.tiktokViral);
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Tendencia 2025</p>
          <h2 className="font-[var(--font-cinzel)] text-4xl md:text-5xl text-[#0F0F0F] font-semibold mb-4">
            Virales en TikTok
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-[#0F0F0F]/50 font-[var(--font-cormorant)] text-xl max-w-xl mx-auto">
            Las fragancias que están arrasando en redes. Prueba los perfumes del momento.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {viral.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const cats = [
    { title: "Hombre", sub: "Fuerza & Carácter", href: "/tienda?cat=hombre", gradient: "from-slate-900 via-stone-800 to-amber-900" },
    { title: "Mujer", sub: "Elegancia & Delicadeza", href: "/tienda?cat=mujer", gradient: "from-rose-900 via-pink-800 to-amber-700" },
    { title: "Unisex", sub: "Sin límites", href: "/tienda?cat=unisex", gradient: "from-amber-900 via-yellow-800 to-amber-700" },
  ];
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Explorar</p>
        <h2 className="font-[var(--font-cinzel)] text-4xl md:text-5xl text-[#0F0F0F] font-semibold">Categorías</h2>
        <div className="gold-divider mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((c) => (
          <Link key={c.href} href={c.href} className={`group relative h-72 bg-gradient-to-br ${c.gradient} overflow-hidden flex items-end p-8`}>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="relative z-10">
              <p className="text-[#C8A96B] text-[10px] tracking-[0.3em] uppercase mb-1">{c.sub}</p>
              <h3 className="font-[var(--font-cinzel)] text-3xl text-white font-semibold mb-3">{c.title}</h3>
              <div className="flex items-center gap-2 text-white/70 text-sm group-hover:text-[#C8A96B] transition-colors">
                <span>Explorar</span><ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#EDE3D1]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase font-[var(--font-inter)] mb-3">Opiniones</p>
          <h2 className="font-[var(--font-cinzel)] text-4xl md:text-5xl text-[#0F0F0F] font-semibold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-6 border border-[#EDE3D1]">
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={12} className="fill-[#C8A96B] text-[#C8A96B]" />
                ))}
              </div>
              <p className="text-[#0F0F0F]/70 font-[var(--font-cormorant)] text-base leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-[#EDE3D1] pt-3">
                <p className="text-xs font-semibold text-[#0F0F0F] tracking-wide">{t.name}</p>
                <p className="text-[11px] text-[#0F0F0F]/40">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PickupBanner() {
  return (
    <section className="py-16 bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <MapPin size={28} className="text-[#C8A96B] mx-auto mb-4" />
        <h2 className="font-[var(--font-cinzel)] text-3xl md:text-4xl text-white font-semibold mb-3">
          Compra online y recoge <span className="text-[#C8A96B]">hoy</span> en tienda
        </h2>
        <p className="text-white/50 font-[var(--font-cormorant)] text-xl mb-8 max-w-xl mx-auto">
          Selecciona &quot;Recogida en tienda&quot; al hacer tu pedido. Abierto en Barcelona, Carrer de Mallorca 123.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/tienda" className="inline-flex items-center gap-2 bg-[#C8A96B] text-[#0F0F0F] px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#D4B97A] transition-colors">
            Comprar ahora
          </Link>
          <Link href="/contacto" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors">
            Cómo llegar
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase mb-3">Newsletter</p>
        <h2 className="font-[var(--font-cinzel)] text-3xl md:text-4xl text-[#0F0F0F] font-semibold mb-4">
          Primero en saber
        </h2>
        <div className="gold-divider mb-6" />
        <p className="text-[#0F0F0F]/50 font-[var(--font-cormorant)] text-xl mb-8">
          Novedades, lanzamientos exclusivos y ofertas solo para suscriptores.
        </p>
        {sent ? (
          <div className="bg-[#C8A96B]/10 border border-[#C8A96B]/30 py-4 px-6 text-[#C8A96B] font-[var(--font-cormorant)] text-lg">
            Gracias. Te avisaremos con las novedades.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 border border-[#EDE3D1] border-r-0 px-5 py-4 text-sm outline-none focus:border-[#C8A96B] bg-white text-[#0F0F0F] placeholder:text-[#0F0F0F]/30"
            />
            <button
              type="submit"
              className="bg-[#0F0F0F] text-[#C8A96B] px-6 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#C8A96B] hover:text-[#0F0F0F] transition-colors whitespace-nowrap"
            >
              Suscribirse
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellerSection />
      <BrandsSection />
      <TikTokSection />
      <CategoriesSection />
      <TestimonialsSection />
      <PickupBanner />
      <NewsletterSection />
    </>
  );
}
