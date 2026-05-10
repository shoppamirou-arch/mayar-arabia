import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/CartContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mayar Arabia — Perfumes Árabes Premium",
    template: "%s | Mayar Arabia",
  },
  description:
    "Descubre el lujo de la perfumería árabe. Lattafa, Afnan, Armaf, Rasasi y más. Compra online y recoge hoy en tienda en Barcelona.",
  keywords: ["perfumes árabes", "oud", "perfumería árabe Barcelona", "Lattafa", "Afnan", "Armaf"],
  openGraph: {
    title: "Mayar Arabia — Perfumes Árabes Premium",
    description: "Descubre el lujo de la perfumería árabe en Barcelona.",
    type: "website",
    locale: "es_ES",
    siteName: "Mayar Arabia",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://mayarabia.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} ${cinzel.variable}`}>
      <body className="bg-[#FAF7F2] antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
