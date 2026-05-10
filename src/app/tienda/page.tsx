"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { PRODUCTS, Category, Scent } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";

type SortKey = "popular" | "precio-asc" | "precio-desc" | "nuevo";

function TiendaContent() {
  const params = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "todas">(
    (params.get("cat") as Category) || "todas"
  );
  const [activeScent, setActiveScent] = useState<Scent | "todas">("todas");
  const [sort, setSort] = useState<SortKey>("popular");
  const [showFilters, setShowFilters] = useState(false);

  const viralOnly = params.get("viral") === "true";
  const bestsellerOnly = params.get("bestseller") === "true";
  const brandFilter = params.get("brand") || "";

  const categories: { label: string; value: Category | "todas" }[] = [
    { label: "Todos", value: "todas" },
    { label: "Hombre", value: "hombre" },
    { label: "Mujer", value: "mujer" },
    { label: "Unisex", value: "unisex" },
  ];

  const scents: { label: string; value: Scent | "todas" }[] = [
    { label: "Todos", value: "todas" },
    { label: "Dulce", value: "dulce" },
    { label: "Fresco", value: "fresco" },
    { label: "Oriental", value: "oriental" },
    { label: "Amaderado", value: "amaderado" },
    { label: "Floral", value: "floral" },
  ];

  const filtered = useMemo(() => {
    let res = [...PRODUCTS];
    if (viralOnly) res = res.filter((p) => p.tiktokViral);
    if (bestsellerOnly) res = res.filter((p) => p.bestseller);
    if (brandFilter) res = res.filter((p) => p.brand === brandFilter);
    if (activeCategory !== "todas") res = res.filter((p) => p.category === activeCategory);
    if (activeScent !== "todas") res = res.filter((p) => p.scent === activeScent);
    if (search.trim()) {
      const q = search.toLowerCase();
      res = res.filter(
        (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
    }
    if (sort === "precio-asc") res.sort((a, b) => a.price - b.price);
    if (sort === "precio-desc") res.sort((a, b) => b.price - a.price);
    if (sort === "nuevo") res.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    if (sort === "popular") res.sort((a, b) => b.reviews - a.reviews);
    return res;
  }, [viralOnly, bestsellerOnly, brandFilter, activeCategory, activeScent, search, sort]);

  return (
    <div className="pt-32 min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase mb-2">Selección Premium</p>
        <h1 className="font-[var(--font-cinzel)] text-4xl md:text-5xl text-[#0F0F0F] font-semibold mb-2">
          {viralOnly ? "Virales TikTok" : bestsellerOnly ? "Más vendidos" : brandFilter || "Toda la Colección"}
        </h1>
        <div className="w-12 h-px bg-[#C8A96B] mb-4" />
        <p className="text-[#0F0F0F]/50 font-[var(--font-cormorant)] text-lg">
          {filtered.length} fragancia{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Search + Sort bar */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex gap-3 flex-wrap items-center">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F0F0F]/30" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar perfume o marca..."
            className="w-full border border-[#EDE3D1] bg-white pl-10 pr-4 py-3 text-sm outline-none focus:border-[#C8A96B] text-[#0F0F0F] placeholder:text-[#0F0F0F]/30"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F0F0F]/30 hover:text-[#C8A96B]">
              <X size={14} />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 border border-[#EDE3D1] bg-white px-4 py-3 text-sm text-[#0F0F0F]/60 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors"
        >
          <SlidersHorizontal size={15} />
          Filtros
        </button>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="border border-[#EDE3D1] bg-white px-4 py-3 text-sm text-[#0F0F0F]/60 outline-none focus:border-[#C8A96B] cursor-pointer"
        >
          <option value="popular">Popularidad</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
          <option value="nuevo">Novedades primero</option>
        </select>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="max-w-7xl mx-auto px-6 mb-6 p-5 bg-white border border-[#EDE3D1]">
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-[10px] text-[#C8A96B] tracking-[0.25em] uppercase mb-3">Categoría</p>
              <div className="flex gap-2 flex-wrap">
                {categories.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setActiveCategory(c.value)}
                    className={`px-4 py-2 text-xs tracking-wide uppercase border transition-colors ${
                      activeCategory === c.value
                        ? "bg-[#0F0F0F] text-[#C8A96B] border-[#0F0F0F]"
                        : "border-[#EDE3D1] text-[#0F0F0F]/60 hover:border-[#C8A96B] hover:text-[#C8A96B]"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-[#C8A96B] tracking-[0.25em] uppercase mb-3">Aroma</p>
              <div className="flex gap-2 flex-wrap">
                {scents.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setActiveScent(s.value)}
                    className={`px-4 py-2 text-xs tracking-wide uppercase border transition-colors ${
                      activeScent === s.value
                        ? "bg-[#0F0F0F] text-[#C8A96B] border-[#0F0F0F]"
                        : "border-[#EDE3D1] text-[#0F0F0F]/60 hover:border-[#C8A96B] hover:text-[#C8A96B]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-[var(--font-cormorant)] text-3xl text-[#0F0F0F]/30 mb-2">Sin resultados</p>
            <p className="text-sm text-[#0F0F0F]/40">Prueba con otros filtros o términos de búsqueda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TiendaPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-[#0F0F0F]/40">Cargando...</div>}>
      <TiendaContent />
    </Suspense>
  );
}
