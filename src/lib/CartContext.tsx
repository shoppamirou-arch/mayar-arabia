"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Product } from "./data";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.product.price * i.quantity, 0);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.product.id === product.id);
      if (exists) return prev.map((i) => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => i.product.id === id ? { ...i, quantity: qty } : i));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }, []);

  return (
    <CartContext.Provider value={{ items, count, total, addItem, removeItem, updateQty, clear, wishlist, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
