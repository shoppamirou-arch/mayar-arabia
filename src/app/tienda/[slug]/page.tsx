"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { ShoppingBag, Heart, MessageCircle, Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import { PRODUCTS, TESTIMONIALS } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

function RatingBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#0F0F0F]/50 w-20 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-[#EDE3D1] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#C8A96B] rounded-full"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
      <span className="text-xs text-[#0F0F0F]/50 w-4">{value}/5</span>
    </div>
  );
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS.find((p) => p.slug === slug);
  const { addItem, wishlist, toggleWishlist } = useCart();

  if (!product) notFound();

  const isWished = wishlist.includes(product.id);
  const related = PRODUCTS.filter((p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category)).slice(0, 4);

  const whatsappMsg = encodeURIComponent(
    `Hola, me interesa el perfume ${product.name} de ${product.brand} (${product.ml}ml) a ${product.price}€. ¿Está disponible?`
  );

  return (
    <div className="pt-28 min-h-screen bg-[#FAF7F2]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <nav className="flex items-center gap-2 text-xs text-[#0F0F0F]/40">
          <Link href="/" className="hover:text-[#C8A96B] transition-colors">Inicio</Link>
          <ChevronRight size={12} />
          <Link href="/tienda" className="hover:text-[#C8A96B] transition-colors">Tienda</Link>
          <ChevronRight size={12} />
          <span className="text-[#0F0F0F]/70">{product.name}</span>
        </nav>
      </div>

      {/* Main product area */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left: visual */}
        <div className="space-y-4">
          <div className={`relative w-full aspect-square bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.tiktokViral && (
                <span className="bg-black text-[#C8A96B] text-[10px] tracking-widest px-3 py-1.5 font-medium uppercase">
                  TikTok Viral
                </span>
              )}
              {product.bestseller && (
                <span className="bg-[#C8A96B] text-white text-[10px] tracking-widest px-3 py-1.5 font-medium uppercase">
                  Más vendido
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-500 text-white text-[10px] tracking-widest px-3 py-1.5 font-medium uppercase">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
            {/* Bottle mockup */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-40 rounded-t-full rounded-b-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-end justify-center pb-4 shadow-2xl">
                <div className="text-center">
                  <p className="text-white/80 text-xs font-[var(--font-cinzel)] tracking-widest">{product.ml}ml</p>
                </div>
              </div>
              <p className="text-white/60 text-xs tracking-widest mt-3 font-[var(--font-cinzel)]">{product.brand}</p>
              <p className="text-white text-lg font-[var(--font-cinzel)] font-semibold tracking-wide">{product.name}</p>
            </div>
          </div>
          {/* Thumbnails row (visual variation) */}
          <div className="grid grid-cols-3 gap-3">
            {["from-opacity-100", "from-opacity-70", "from-opacity-50"].map((_, i) => (
              <div
                key={i}
                className={`aspect-square bg-gradient-to-br ${product.gradient} cursor-pointer border-2 ${i === 0 ? "border-[#C8A96B]" : "border-transparent"} opacity-${i === 0 ? "100" : i === 1 ? "70" : "40"}`}
              />
            ))}
          </div>
        </div>

        {/* Right: info */}
        <div className="flex flex-col">
          <p className="text-[#C8A96B] text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] mb-2">{product.brand}</p>
          <h1 className="font-[var(--font-cinzel)] text-4xl md:text-5xl text-[#0F0F0F] font-semibold mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-[#C8A96B] text-[#C8A96B]" : "text-[#EDE3D1]"} />
              ))}
            </div>
            <span className="text-sm text-[#0F0F0F]/50">{product.rating} ({product.reviews} opiniones)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            <span className="font-[var(--font-cormorant)] text-5xl font-semibold text-[#0F0F0F]">
              {product.price}€
            </span>
            {product.originalPrice && (
              <span className="text-xl text-[#0F0F0F]/30 line-through">{product.originalPrice}€</span>
            )}
            <span className="text-sm text-[#0F0F0F]/40">/ {product.ml}ml</span>
          </div>

          {/* Description */}
          <p className="text-[#0F0F0F]/70 font-[var(--font-cormorant)] text-lg leading-relaxed mb-6 border-l-2 border-[#C8A96B] pl-4">
            {product.description}
          </p>

          {/* Notes */}
          <div className="space-y-3 mb-6 p-5 bg-[#EDE3D1]/30 border border-[#EDE3D1]">
            <p className="text-[10px] text-[#C8A96B] tracking-[0.3em] uppercase mb-3">Pirámide olfativa</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Salida", notes: product.topNotes },
                { label: "Corazón", notes: product.heartNotes },
                { label: "Fondo", notes: product.baseNotes },
              ].map((tier) => (
                <div key={tier.label}>
                  <p className="text-[10px] text-[#0F0F0F]/40 tracking-wide uppercase mb-2">{tier.label}</p>
                  {tier.notes.map((n) => (
                    <p key={n} className="text-xs text-[#0F0F0F] font-medium py-0.5">{n}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Longevity & Sillage */}
          <div className="space-y-2.5 mb-6">
            <RatingBar label="Duración" value={product.longevity} />
            <RatingBar label="Proyección" value={product.sillage} />
          </div>

          {/* Aroma type */}
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1.5 bg-[#C8A96B]/10 border border-[#C8A96B]/30 text-[#C8A96B] text-xs tracking-wide uppercase">
              {product.scent}
            </span>
            <span className="px-3 py-1.5 bg-[#EDE3D1]/50 border border-[#EDE3D1] text-[#0F0F0F]/50 text-xs tracking-wide uppercase">
              {product.category}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => addItem(product)}
              className="flex-1 flex items-center justify-center gap-3 bg-[#0F0F0F] text-[#C8A96B] py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#C8A96B] hover:text-[#0F0F0F] transition-colors"
            >
              <ShoppingBag size={16} />
              Añadir al carrito
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`w-14 flex items-center justify-center border transition-colors ${
                isWished
                  ? "bg-[#C8A96B]/10 border-[#C8A96B] text-[#C8A96B]"
                  : "border-[#EDE3D1] text-[#0F0F0F]/40 hover:border-[#C8A96B] hover:text-[#C8A96B]"
              }`}
            >
              <Heart size={18} className={isWished ? "fill-[#C8A96B]" : ""} />
            </button>
          </div>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/34600000000?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-[#25D366] text-[#25D366] py-3.5 text-sm tracking-wide hover:bg-[#25D366] hover:text-white transition-colors"
          >
            <MessageCircle size={16} />
            Consultar por WhatsApp
          </a>

          {/* Info blocks */}
          <div className="grid grid-cols-3 gap-3 mt-6 text-center">
            {[
              { label: "Envío gratis", sub: "+50€" },
              { label: "Recoge hoy", sub: "Barcelona" },
              { label: "Devol. 30d", sub: "Sin coste" },
            ].map((b) => (
              <div key={b.label} className="border border-[#EDE3D1] py-3 px-2">
                <p className="text-xs font-semibold text-[#0F0F0F] tracking-wide">{b.label}</p>
                <p className="text-[11px] text-[#0F0F0F]/40 mt-0.5">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews section */}
      <div className="bg-[#EDE3D1]/20 border-t border-[#EDE3D1] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[var(--font-cinzel)] text-2xl text-[#0F0F0F] font-semibold mb-8 text-center">
            Opiniones de clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {TESTIMONIALS.slice(0, 2).map((t, i) => (
              <div key={i} className="bg-white p-5 border border-[#EDE3D1]">
                <div className="flex mb-2">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={11} className="fill-[#C8A96B] text-[#C8A96B]" />)}
                </div>
                <p className="text-[#0F0F0F]/70 font-[var(--font-cormorant)] text-base leading-relaxed mb-3">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-xs font-semibold text-[#0F0F0F]">{t.name} · {t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="font-[var(--font-cinzel)] text-2xl text-[#0F0F0F] font-semibold mb-8 text-center">
            También te puede interesar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => {
              const { addItem: add } = { addItem: () => {} };
              return (
                <Link key={p.id} href={`/tienda/${p.slug}`} className="group bg-white border border-[#EDE3D1] hover:border-[#C8A96B] transition-colors">
                  <div className={`h-40 bg-gradient-to-br ${p.gradient}`} />
                  <div className="p-4">
                    <p className="text-[10px] text-[#C8A96B] tracking-widest uppercase mb-1">{p.brand}</p>
                    <p className="font-[var(--font-cormorant)] text-lg font-semibold text-[#0F0F0F] group-hover:text-[#C8A96B] transition-colors">{p.name}</p>
                    <p className="font-[var(--font-cormorant)] text-xl mt-1 text-[#0F0F0F]">{p.price}€</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
