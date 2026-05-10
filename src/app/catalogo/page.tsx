import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, BRANDS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo | Mayar Arabia",
  description: "Explora nuestro catálogo completo de perfumería árabe premium organizado por marca: Lattafa, Afnan, Armaf, Rasasi y Maison Alhambra.",
};

export default function CatalogoPage() {
  return (
    <div className="pt-28 min-h-screen bg-[#FAF7F2]">
      <section className="relative bg-[#0F0F0F] py-24 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #C8A96B 0%, transparent 60%)` }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase mb-4">Colección completa</p>
          <h1 className="font-[var(--font-cinzel)] text-5xl md:text-6xl text-white font-semibold mb-4">
            Catálogo
          </h1>
          <div className="gold-divider my-6" />
          <p className="text-white/60 font-[var(--font-cormorant)] text-xl leading-relaxed">
            Todas nuestras fragancias, organizadas por marca.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {BRANDS.map((brand) => {
          const brandProducts = PRODUCTS.filter((p) => p.brand === brand.name);
          if (brandProducts.length === 0) return null;
          return (
            <section key={brand.name}>
              <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#EDE3D1]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0F0F0F] flex items-center justify-center font-[var(--font-cinzel)] text-[#C8A96B] font-bold text-sm">
                    {brand.logo}
                  </div>
                  <div>
                    <h2 className="font-[var(--font-cinzel)] text-3xl text-[#0F0F0F] font-semibold">{brand.name}</h2>
                    <p className="text-[#0F0F0F]/40 text-xs tracking-[0.2em] uppercase">
                      {brandProducts.length} fragancia{brandProducts.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/tienda?brand=${brand.name}`}
                  className="hidden md:flex items-center gap-2 text-sm text-[#C8A96B] hover:text-[#D4B97A] tracking-wide transition-colors"
                >
                  Comprar {brand.name} <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {brandProducts.map((p) => (
                  <Link key={p.id} href={`/tienda/${p.slug}`} className="group">
                    <div className={`aspect-square bg-gradient-to-br ${p.gradient} relative overflow-hidden mb-4`}>
                      {p.tiktokViral && (
                        <span className="absolute top-3 left-3 bg-black/70 text-[#C8A96B] text-[9px] tracking-[0.2em] uppercase px-2 py-1">
                          TikTok Viral
                        </span>
                      )}
                      {p.bestseller && (
                        <span className="absolute top-3 right-3 bg-[#C8A96B] text-[#0F0F0F] text-[9px] tracking-[0.2em] uppercase px-2 py-1">
                          Best Seller
                        </span>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center text-white/20">
                        <span className="font-[var(--font-cinzel)] text-5xl font-bold tracking-widest">{brand.logo}</span>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs tracking-[0.2em] uppercase border border-white/50 px-4 py-2">
                          Ver perfume
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-[var(--font-cinzel)] text-base text-[#0F0F0F] font-semibold group-hover:text-[#C8A96B] transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-[#0F0F0F]/40 text-xs uppercase tracking-wide mt-0.5">{p.category} · {p.ml}ml</p>
                      <p className="text-[#0F0F0F] text-sm font-semibold mt-2">{p.price}€</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 md:hidden">
                <Link
                  href={`/tienda?brand=${brand.name}`}
                  className="flex items-center gap-2 text-sm text-[#C8A96B] hover:text-[#D4B97A] tracking-wide transition-colors"
                >
                  Comprar todos los de {brand.name} <ArrowRight size={14} />
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
