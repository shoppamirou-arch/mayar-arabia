"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Truck, Store, CreditCard, ChevronRight } from "lucide-react";
import { useCart } from "@/lib/CartContext";

type ShippingMethod = "envio" | "recogida";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [shipping, setShipping] = useState<ShippingMethod>("envio");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState({
    nombre: "", apellidos: "", email: "", telefono: "",
    direccion: "", ciudad: "", cp: "", pais: "España",
  });
  const [ordered, setOrdered] = useState(false);

  const shippingCost = shipping === "recogida" ? 0 : total >= 50 ? 0 : 4.95;
  const finalTotal = total + shippingCost;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleOrder() {
    setOrdered(true);
    clear();
  }

  if (ordered) {
    return (
      <div className="pt-36 min-h-screen bg-[#FAF7F2] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[#C8A96B]/10 border border-[#C8A96B]/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-[#C8A96B] text-2xl">✓</span>
          </div>
          <h1 className="font-[var(--font-cinzel)] text-3xl text-[#0F0F0F] font-semibold mb-3">Pedido confirmado</h1>
          <div className="w-12 h-px bg-[#C8A96B] mx-auto mb-5" />
          <p className="text-[#0F0F0F]/60 font-[var(--font-cormorant)] text-xl mb-2">
            Gracias por tu compra. Recibirás un email de confirmación en breve.
          </p>
          {shipping === "recogida" && (
            <p className="text-[#C8A96B] text-sm font-medium mt-3 mb-6">
              Tu pedido estará listo para recoger hoy en nuestra tienda de Barcelona.
            </p>
          )}
          <Link href="/tienda" className="inline-block bg-[#0F0F0F] text-[#C8A96B] px-8 py-4 text-sm tracking-[0.2em] uppercase mt-4 hover:bg-[#C8A96B] hover:text-[#0F0F0F] transition-colors">
            Seguir comprando
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-36 min-h-screen bg-[#FAF7F2] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-[var(--font-cormorant)] text-3xl text-[#0F0F0F]/30 mb-4">Tu carrito está vacío</p>
          <Link href="/tienda" className="text-[#C8A96B] hover:underline text-sm">Explorar tienda →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase mb-2">Proceso de compra</p>
          <h1 className="font-[var(--font-cinzel)] text-4xl text-[#0F0F0F] font-semibold">Checkout</h1>
          <div className="w-12 h-px bg-[#C8A96B] mt-3" />
        </div>

        {/* Steps */}
        <div className="flex items-center gap-2 mb-10 text-xs tracking-wide uppercase">
          {["Envío", "Pago", "Confirmar"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step > i + 1 ? "bg-[#C8A96B] text-white" : step === i + 1 ? "bg-[#0F0F0F] text-[#C8A96B]" : "bg-[#EDE3D1] text-[#0F0F0F]/30"}`}>
                {i + 1}
              </div>
              <span className={step === i + 1 ? "text-[#0F0F0F]" : "text-[#0F0F0F]/30"}>{s}</span>
              {i < 2 && <ChevronRight size={12} className="text-[#0F0F0F]/20" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: form */}
          <div className="lg:col-span-2 space-y-6">

            {/* Step 1: Shipping */}
            {step >= 1 && (
              <div className="bg-white border border-[#EDE3D1] p-6">
                <h2 className="font-[var(--font-cinzel)] text-lg text-[#0F0F0F] font-semibold mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#0F0F0F] text-[#C8A96B] text-[10px] rounded-full flex items-center justify-center font-bold">1</span>
                  Método de entrega
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={() => setShipping("envio")}
                    className={`p-4 border-2 text-left transition-colors ${shipping === "envio" ? "border-[#C8A96B] bg-[#C8A96B]/5" : "border-[#EDE3D1] hover:border-[#C8A96B]/50"}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Truck size={18} className="text-[#C8A96B]" />
                      <span className="font-semibold text-sm text-[#0F0F0F]">Envío a domicilio</span>
                    </div>
                    <p className="text-xs text-[#0F0F0F]/50">24-48h · {total >= 50 ? "Gratis" : "4,95€"}</p>
                  </button>
                  <button
                    onClick={() => setShipping("recogida")}
                    className={`p-4 border-2 text-left transition-colors ${shipping === "recogida" ? "border-[#C8A96B] bg-[#C8A96B]/5" : "border-[#EDE3D1] hover:border-[#C8A96B]/50"}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Store size={18} className="text-[#C8A96B]" />
                      <span className="font-semibold text-sm text-[#0F0F0F]">Recogida en tienda</span>
                    </div>
                    <p className="text-xs text-[#0F0F0F]/50">Gratis · Hoy mismo · Barcelona</p>
                  </button>
                </div>

                {shipping === "recogida" && (
                  <div className="bg-[#EDE3D1]/30 border border-[#EDE3D1] p-4 flex gap-3">
                    <MapPin size={16} className="text-[#C8A96B] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#0F0F0F]">Mayar Arabia · Barcelona</p>
                      <p className="text-xs text-[#0F0F0F]/50 mt-0.5">Carrer de Mallorca 123, 08036 Barcelona</p>
                      <p className="text-xs text-[#0F0F0F]/50">Lun-Sáb 10:00-20:00 · Dom 11:00-18:00</p>
                    </div>
                  </div>
                )}

                {shipping === "envio" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {[
                      { name: "nombre", label: "Nombre", placeholder: "María" },
                      { name: "apellidos", label: "Apellidos", placeholder: "García López" },
                      { name: "email", label: "Email", placeholder: "maria@ejemplo.com" },
                      { name: "telefono", label: "Teléfono", placeholder: "+34 600 000 000" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">{f.label}</label>
                        <input
                          name={f.name}
                          value={(form as Record<string, string>)[f.name]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          className="w-full border border-[#EDE3D1] px-4 py-3 text-sm outline-none focus:border-[#C8A96B] bg-[#FAF7F2] text-[#0F0F0F] placeholder:text-[#0F0F0F]/25"
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">Dirección</label>
                      <input
                        name="direccion"
                        value={form.direccion}
                        onChange={handleChange}
                        placeholder="Calle, número, piso..."
                        className="w-full border border-[#EDE3D1] px-4 py-3 text-sm outline-none focus:border-[#C8A96B] bg-[#FAF7F2] text-[#0F0F0F] placeholder:text-[#0F0F0F]/25"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">Ciudad</label>
                      <input name="ciudad" value={form.ciudad} onChange={handleChange} placeholder="Barcelona" className="w-full border border-[#EDE3D1] px-4 py-3 text-sm outline-none focus:border-[#C8A96B] bg-[#FAF7F2] text-[#0F0F0F] placeholder:text-[#0F0F0F]/25" />
                    </div>
                    <div>
                      <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">Código postal</label>
                      <input name="cp" value={form.cp} onChange={handleChange} placeholder="08001" className="w-full border border-[#EDE3D1] px-4 py-3 text-sm outline-none focus:border-[#C8A96B] bg-[#FAF7F2] text-[#0F0F0F] placeholder:text-[#0F0F0F]/25" />
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setStep(2)}
                  className="mt-5 w-full bg-[#0F0F0F] text-[#C8A96B] py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#C8A96B] hover:text-[#0F0F0F] transition-colors"
                >
                  Continuar al pago →
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step >= 2 && (
              <div className="bg-white border border-[#EDE3D1] p-6">
                <h2 className="font-[var(--font-cinzel)] text-lg text-[#0F0F0F] font-semibold mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#0F0F0F] text-[#C8A96B] text-[10px] rounded-full flex items-center justify-center font-bold">2</span>
                  Método de pago
                </h2>
                <div className="border-2 border-[#C8A96B] bg-[#C8A96B]/5 p-4 flex items-center gap-3 mb-5">
                  <CreditCard size={18} className="text-[#C8A96B]" />
                  <span className="text-sm font-medium text-[#0F0F0F]">Tarjeta de crédito / débito</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">Número de tarjeta</label>
                    <input placeholder="1234 5678 9012 3456" className="w-full border border-[#EDE3D1] px-4 py-3 text-sm outline-none focus:border-[#C8A96B] bg-[#FAF7F2] placeholder:text-[#0F0F0F]/25" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">Caducidad</label>
                      <input placeholder="MM/AA" className="w-full border border-[#EDE3D1] px-4 py-3 text-sm outline-none focus:border-[#C8A96B] bg-[#FAF7F2] placeholder:text-[#0F0F0F]/25" />
                    </div>
                    <div>
                      <label className="block text-[10px] text-[#C8A96B] tracking-[0.2em] uppercase mb-1.5">CVV</label>
                      <input placeholder="123" className="w-full border border-[#EDE3D1] px-4 py-3 text-sm outline-none focus:border-[#C8A96B] bg-[#FAF7F2] placeholder:text-[#0F0F0F]/25" />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setStep(3)}
                  className="mt-5 w-full bg-[#0F0F0F] text-[#C8A96B] py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#C8A96B] hover:text-[#0F0F0F] transition-colors"
                >
                  Confirmar pedido →
                </button>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div className="bg-white border border-[#C8A96B]/30 p-6">
                <h2 className="font-[var(--font-cinzel)] text-lg text-[#0F0F0F] font-semibold mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#C8A96B] text-white text-[10px] rounded-full flex items-center justify-center font-bold">3</span>
                  Confirmar pedido
                </h2>
                <p className="text-[#0F0F0F]/60 text-sm font-[var(--font-cormorant)] text-base mb-5">
                  Revisa tu pedido y confirma. Recibirás un email de confirmación.
                </p>
                <button
                  onClick={handleOrder}
                  className="w-full bg-[#C8A96B] text-[#0F0F0F] py-4 text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#D4B97A] transition-colors"
                >
                  Confirmar y pagar {finalTotal.toFixed(2)}€
                </button>
              </div>
            )}
          </div>

          {/* Right: order summary */}
          <div>
            <div className="bg-white border border-[#EDE3D1] p-5 sticky top-28">
              <h3 className="font-[var(--font-cinzel)] text-sm font-semibold text-[#0F0F0F] tracking-widest uppercase mb-4">
                Tu pedido
              </h3>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className={`w-12 h-14 rounded bg-gradient-to-br ${item.product.gradient} flex-shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#0F0F0F] truncate">{item.product.name}</p>
                      <p className="text-[11px] text-[#0F0F0F]/40">{item.product.brand} · x{item.quantity}</p>
                    </div>
                    <p className="text-sm font-[var(--font-cormorant)] font-semibold text-[#0F0F0F] flex-shrink-0">
                      {(item.product.price * item.quantity).toFixed(2)}€
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#EDE3D1] pt-4 space-y-2">
                <div className="flex justify-between text-sm text-[#0F0F0F]/60">
                  <span>Subtotal</span><span>{total.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-sm text-[#0F0F0F]/60">
                  <span>Envío</span>
                  <span>{shippingCost === 0 ? <span className="text-[#C8A96B]">Gratis</span> : `${shippingCost.toFixed(2)}€`}</span>
                </div>
                <div className="flex justify-between font-semibold text-[#0F0F0F] pt-2 border-t border-[#EDE3D1]">
                  <span className="font-[var(--font-cinzel)] text-sm tracking-wide">Total</span>
                  <span className="font-[var(--font-cormorant)] text-xl">{finalTotal.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
