export type Category = "hombre" | "mujer" | "unisex";
export type Scent = "dulce" | "fresco" | "oriental" | "amaderado" | "floral";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: Category;
  scent: Scent;
  ml: number;
  image: string;
  gradient: string;
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  longevity: number; // 1-5
  sillage: number;   // 1-5
  tiktokViral?: boolean;
  bestseller?: boolean;
  isNew?: boolean;
  rating: number;
  reviews: number;
}

export const BRANDS = [
  { name: "Lattafa", logo: "L", color: "#C8A96B" },
  { name: "Afnan", logo: "A", color: "#8A7550" },
  { name: "Armaf", logo: "Ar", color: "#C8A96B" },
  { name: "Rasasi", logo: "R", color: "#6B4C2A" },
  { name: "Maison Alhambra", logo: "M", color: "#C8A96B" },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "khamrah-lattafa",
    name: "Khamrah",
    brand: "Lattafa",
    price: 42,
    originalPrice: 55,
    category: "unisex",
    scent: "dulce",
    ml: 100,
    image: "",
    gradient: "from-amber-900 via-yellow-800 to-amber-700",
    description: "Una explosión de caramelo, vainilla y especias orientales. El perfume más viral de TikTok, amado por su estela envolvente y dulce.",
    topNotes: ["Canela", "Cardamomo", "Frambuesa"],
    heartNotes: ["Rosa", "Jazmín", "Oud"],
    baseNotes: ["Vainilla", "Caramelo", "Ámbar", "Sándalo"],
    longevity: 5,
    sillage: 5,
    tiktokViral: true,
    bestseller: true,
    rating: 4.9,
    reviews: 1243,
  },
  {
    id: "2",
    slug: "asad-lattafa",
    name: "Asad",
    brand: "Lattafa",
    price: 38,
    category: "hombre",
    scent: "amaderado",
    ml: 100,
    image: "",
    gradient: "from-stone-800 via-amber-900 to-yellow-900",
    description: "Frescura que se transforma en profundidad amaderada. Una fragancia masculina con carácter y distinción árabe.",
    topNotes: ["Bergamota", "Lima", "Pimienta negra"],
    heartNotes: ["Cedro", "Oud", "Iris"],
    baseNotes: ["Vainilla", "Musgo", "Sándalo"],
    longevity: 4,
    sillage: 4,
    bestseller: true,
    rating: 4.7,
    reviews: 876,
  },
  {
    id: "3",
    slug: "club-de-nuit-intense-armaf",
    name: "Club de Nuit Intense",
    brand: "Armaf",
    price: 35,
    category: "hombre",
    scent: "fresco",
    ml: 105,
    image: "",
    gradient: "from-blue-950 via-indigo-900 to-slate-800",
    description: "El clon perfecto del legendario Aventus. Piña, abedul ahumado y musco marino en una composición de lujo accesible.",
    topNotes: ["Piña", "Bergamota", "Manzana", "Grosella negra"],
    heartNotes: ["Abedul", "Jazmín", "Neroli", "Rosa"],
    baseNotes: ["Almizcle", "Ámbar", "Pachulí", "Vainilla"],
    longevity: 5,
    sillage: 5,
    tiktokViral: true,
    rating: 4.8,
    reviews: 2104,
  },
  {
    id: "4",
    slug: "tobacco-oud-rasasi",
    name: "Tobacco Oud",
    brand: "Rasasi",
    price: 65,
    category: "unisex",
    scent: "oriental",
    ml: 100,
    image: "",
    gradient: "from-red-950 via-rose-900 to-amber-900",
    description: "Una oda al lujo árabe. Tabaco especiado, oud puro y cuero de alta calidad en una fragancia de presencia indiscutible.",
    topNotes: ["Tabaco", "Bergamota", "Zafrán"],
    heartNotes: ["Oud", "Rosa árabe", "Cuero"],
    baseNotes: ["Ámbar", "Sándalo", "Musco"],
    longevity: 5,
    sillage: 5,
    rating: 4.9,
    reviews: 654,
  },
  {
    id: "5",
    slug: "baroque-rouge-maison-alhambra",
    name: "Baroque Rouge 540",
    brand: "Maison Alhambra",
    price: 28,
    originalPrice: 38,
    category: "unisex",
    scent: "dulce",
    ml: 100,
    image: "",
    gradient: "from-rose-900 via-pink-800 to-amber-700",
    description: "La alternativa perfecta al Baccarat Rouge 540. Jazmín, azafrán y madera de cachemira en una fragancia etérea y magnética.",
    topNotes: ["Azafrán", "Jazmín"],
    heartNotes: ["Ambrette", "Cachemira"],
    baseNotes: ["Madera de cedro", "Almizcle", "Fougère"],
    longevity: 4,
    sillage: 4,
    tiktokViral: true,
    bestseller: true,
    rating: 4.8,
    reviews: 3201,
  },
  {
    id: "6",
    slug: "supremacy-noir-afnan",
    name: "Supremacy Noir",
    brand: "Afnan",
    price: 32,
    category: "unisex",
    scent: "oriental",
    ml: 100,
    image: "",
    gradient: "from-zinc-900 via-stone-800 to-amber-900",
    description: "Negro, intenso y seductor. Una fragancia que habla por sí sola con su mezcla única de oud, resinas y especias exóticas.",
    topNotes: ["Bergamota", "Cardamomo", "Oud"],
    heartNotes: ["Rosa", "Jazmín", "Incienso"],
    baseNotes: ["Ámbar", "Resina", "Sándalo blanco"],
    longevity: 5,
    sillage: 4,
    isNew: true,
    rating: 4.6,
    reviews: 421,
  },
  {
    id: "7",
    slug: "yara-lattafa",
    name: "Yara",
    brand: "Lattafa",
    price: 29,
    category: "mujer",
    scent: "floral",
    ml: 100,
    image: "",
    gradient: "from-pink-800 via-rose-700 to-fuchsia-800",
    description: "Feminidad árabe en estado puro. Frutal, floral y envolvente. El perfume que toda mujer desea.",
    topNotes: ["Litchi", "Bergamota", "Melocotón"],
    heartNotes: ["Rosa", "Jazmín", "Peonía"],
    baseNotes: ["Vainilla", "Almizcle blanco", "Madera de sándalo"],
    longevity: 4,
    sillage: 4,
    bestseller: true,
    rating: 4.7,
    reviews: 1876,
  },
  {
    id: "8",
    slug: "gold-spirit-afnan",
    name: "Gold Spirit",
    brand: "Afnan",
    price: 45,
    category: "hombre",
    scent: "amaderado",
    ml: 100,
    image: "",
    gradient: "from-yellow-900 via-amber-700 to-orange-800",
    description: "El espíritu del oro árabe. Especias, maderas nobles y un toque de oud crean una fragancia de autoridad y elegancia.",
    topNotes: ["Zafrán", "Pimienta rosada", "Bergamota"],
    heartNotes: ["Oud", "Cedro", "Pachulí"],
    baseNotes: ["Ámbar dorado", "Vetiver", "Incienso"],
    longevity: 5,
    sillage: 4,
    isNew: true,
    rating: 4.5,
    reviews: 287,
  },
];

export const TESTIMONIALS = [
  {
    name: "Sara M.",
    city: "Barcelona",
    rating: 5,
    text: "Khamrah es absolutamente adictivo. Llevo meses usando y todo el mundo me pregunta qué perfume es. El servicio fue impecable y llegó al día siguiente.",
  },
  {
    name: "Carlos R.",
    city: "Madrid",
    rating: 5,
    text: "Club de Nuit Intense a ese precio es una locura. Probé muchos clones y este es el mejor. La presentación es de alta gama.",
  },
  {
    name: "Amina B.",
    city: "Valencia",
    rating: 5,
    text: "Yara es pura elegancia. Lo pedí online y fui a recogerlo a la tienda en Barcelona mismo día. El trato fue increíble.",
  },
  {
    name: "Javier L.",
    city: "Sevilla",
    rating: 5,
    text: "Tobacco Oud es una experiencia. Vale cada céntimo. La tienda tiene una selección perfecta para quien busca algo genuinamente árabe.",
  },
];
