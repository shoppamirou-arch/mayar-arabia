"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Heart, Menu, X } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/tienda", label: "Tienda" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/guia-de-aromas", label: "Aromas" },
    { href: "/faq", label: "FAQ" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EDE3D1]"
            : "bg-transparent"
        }`}
      >
        {/* Top bar */}
        <div className="bg-[#0F0F0F] text-[#C8A96B] text-xs text-center py-2 tracking-widest font-[var(--font-inter)] uppercase">
          Envío gratis en pedidos +50€ · Recoge hoy en Barcelona
        </div>

        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-[var(--font-cinzel)] text-xl font-bold tracking-[0.15em] text-[#0F0F0F] group-hover:text-[#C8A96B] transition-colors">
              MAYAR<span className="text-[#C8A96B]"> ARABIA</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm tracking-wide text-[#0F0F0F]/70 hover:text-[#C8A96B] transition-colors font-[var(--font-inter)] uppercase"
                  style={{ letterSpacing: "0.08em" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex w-9 h-9 items-center justify-center text-[#0F0F0F]/70 hover:text-[#C8A96B] transition-colors">
              <Search size={18} />
            </button>
            <Link href="/wishlist" className="hidden md:flex w-9 h-9 items-center justify-center text-[#0F0F0F]/70 hover:text-[#C8A96B] transition-colors">
              <Heart size={18} />
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative w-9 h-9 flex items-center justify-center text-[#0F0F0F]/70 hover:text-[#C8A96B] transition-colors"
            >
              <ShoppingBag size={18} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C8A96B] text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center text-[#0F0F0F]/70"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-t border-[#EDE3D1] px-6 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm text-[#0F0F0F]/70 hover:text-[#C8A96B] transition-colors uppercase tracking-widest py-2"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
