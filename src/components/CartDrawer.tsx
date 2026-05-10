"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, count, total, removeItem, updateQty } = useCart();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF7F2] z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EDE3D1]">
          <h2 className="font-[var(--font-cinzel)] text-lg font-semibold text-[#0F0F0F] tracking-widest uppercase">
            Tu carrito ({count})
          </h2>
          <button onClick={onClose} className="text-[#0F0F0F]/50 hover:text-[#C8A96B] transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-[#0F0F0F]/40">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-[var(--font-cormorant)] text-xl">Tu carrito está vacío</p>
              <button
                onClick={onClose}
                className="text-sm text-[#C8A96B] hover:underline tracking-wide"
              >
                Explorar tienda →
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 py-4 border-b border-[#EDE3D1]">
                {/* Product color block */}
                <div className={`w-16 h-20 rounded-lg bg-gradient-to-br ${item.product.gradient} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="font-[var(--font-cormorant)] text-base font-semibold text-[#0F0F0F]">{item.product.name}</p>
                  <p className="text-xs text-[#0F0F0F]/50 mb-2">{item.product.brand} · {item.product.ml}ml</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQty(item.product.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-full border border-[#EDE3D1] flex items-center justify-center hover:border-[#C8A96B] transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.product.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full border border-[#EDE3D1] flex items-center justify-center hover:border-[#C8A96B] transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-[#0F0F0F]/30 hover:text-red-400 transition-colors"
                  >
                    <X size={14} />
                  </button>
                  <p className="font-[var(--font-cormorant)] text-lg font-semibold text-[#C8A96B]">
                    {(item.product.price * item.quantity).toFixed(2)}€
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#EDE3D1] px-6 py-5 space-y-4 bg-white/50">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#0F0F0F]/60 tracking-wide">Subtotal</span>
              <span className="font-[var(--font-cormorant)] text-2xl font-semibold text-[#0F0F0F]">
                {total.toFixed(2)}€
              </span>
            </div>
            <p className="text-xs text-[#0F0F0F]/40 text-center">Envío calculado al confirmar pedido</p>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full bg-[#0F0F0F] text-[#C8A96B] text-center py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#C8A96B] hover:text-[#0F0F0F] transition-colors"
              style={{ letterSpacing: "0.15em" }}
            >
              Finalizar compra
            </Link>
            <button
              onClick={onClose}
              className="block w-full text-center text-sm text-[#0F0F0F]/40 hover:text-[#C8A96B] transition-colors py-1"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}
