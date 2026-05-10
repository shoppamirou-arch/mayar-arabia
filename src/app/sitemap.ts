import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mayarabia.com";
  const products = PRODUCTS.map((p) => ({
    url: `${base}/tienda/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/tienda`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/catalogo`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/guia-de-aromas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...products,
  ];
}
