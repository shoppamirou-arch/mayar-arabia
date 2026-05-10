"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, wishlist, toggleWishlist } = useCart();
  const isWished = wishlist.includes(product.id);

  return (
    <div className="group relative bg-white border border-[#EDE3D1] hover:border-[#C8A96B] transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A96B]/10">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.tiktokViral && (
          <span className="bg-black text-[#C8A96B] text-[10px] tracking-widest px-2 py-1 font-medium uppercase">
            TikTok Viral
          </span>
        )}
        {product.bestseller && !product.tiktokViral && (
          <span className="bg-[#C8A96B] text-white text-[10px] tracking-widest px-2 py-1 font-medium uppercase">
            Más vendido
          </span>
        )}
        {product.isNew && (
          <span className="bg-[#0F0F0F] text-white text-[10px] tracking-widest px-2 py-1 font-medium uppercase">
            Nuevo
          </span>
        )}
        {product.originalPrice && (
          <span className="bg-red-500 text-white text-[10px] tracking-widest px-2 py-1 font-medium uppercase">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Wishlist */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#C8A96B] hover:text-white"
      >
        <Heart
          size={14}
          className={isWished ? "fill-[#C8A96B] text-[#C8A96B]" : "text-[#0F0F0F]/50"}
        />
      </button>

      {/* Image area */}
      <Link href={`/tienda/${product.slug}`}>
        <div className={`relative h-64 bg-gradient-to-br ${product.gradient} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-28 mx-auto rounded-t-full rounded-b-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-end justify-center pb-2">
                <span className="text-white/60 text-xs font-[var(--font-cinzel)] tracking-widest">{product.ml}ml</span>
              </div>
            </div>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 text-white">
              <p className="text-xs text-white/70 mb-1 font-[var(--font-inter)] uppercase tracking-wide">Notas principales</p>
              <p className="text-sm font-[var(--font-cormorant)] font-medium">
                {product.topNotes.slice(0, 2).join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase font-medium mb-1">{product.brand}</p>
        <Link href={`/tienda/${product.slug}`}>
          <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-[#0F0F0F] hover:text-[#C8A96B] transition-colors leading-tight mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? "fill-[#C8A96B] text-[#C8A96B]" : "text-[#EDE3D1]"}
              />
            ))}
          </div>
          <span className="text-[11px] text-[#0F0F0F]/40">({product.reviews})</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-[var(--font-cormorant)] text-2xl font-semibold text-[#0F0F0F]">
              {product.price}€
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-[#0F0F0F]/30 line-through">{product.originalPrice}€</span>
            )}
          </div>
          <button
            onClick={() => addItem(product)}
            className="w-9 h-9 bg-[#0F0F0F] text-[#C8A96B] flex items-center justify-center hover:bg-[#C8A96B] hover:text-white transition-colors"
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
