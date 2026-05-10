import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import type { Metadata } from "next";
import type { Scent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Guía de Aromas | Mayar Arabia",
  description: "Descubre las familias olfativas de la perfumería árabe: oriental, amaderado, floral, dulce y fresco. Encuentra la fragancia que te define.",
};

const SCENTS: {
  scent: Scent;
  title: string;
  sub: string;
  description: string;
  notes: string[];
  gradient: string;
}[] = [
  {
    scent: "oriental",
    title: "Oriental",
    sub: "Oud · Incienso · Especias",
    description:
      "La esencia de Arabia. Los orientales son ricos, cálidos y especiados, con oud, incienso y resinas que evocan los zocos de Oriente Medio. Son las fragancias más representativas de la cultura árabe: profundas, sensuales y con una presencia inconfundible.",
    notes: ["Oud", "Incienso", "Azafrán", "Ámbar", "Resina", "Mirra"],
    gradient: "from-red-950 via-rose-900 to-amber-900",
  },
  {
    scent: "amaderado",
    title: "Amaderado",
    sub: "Cedro · Sándalo · Vetiver",
    description:
      "Profundidad y elegancia terrosa. Los amaderados se construyen sobre maderas nobles como sándalo, cedro y vetiver, combinadas con especias o toques orientales. Son sofisticados, versátiles y adecuados para cualquier ocasión.",
    notes: ["Cedro", "Sándalo", "Vetiver", "Pachulí", "Musgo de roble"],
    gradient: "from-stone-800 via-amber-900 to-yellow-900",
  },
  {
    scent: "floral",
    title: "Floral",
    sub: "Rosa · Jazmín · Peonía",
    description:
      "Frescura y feminidad en su máxima expresión. Los florales árabes son más intensos y cremosos que los occidentales, con rosa de Taif, jazmín y peonía como protagonistas. Delicados pero envolventes.",
    notes: ["Rosa de Taif", "Jazmín", "Peonía", "Ylang ylang", "Iris"],
    gradient: "from-pink-800 via-rose-700 to-fuchsia-800",
  },
  {
    scent: "dulce",
    title: "Dulce",
    sub: "Vainilla · Caramelo · Oud dulce",
    description:
      "Adictivos, envolventes y magnéticos. Los dulces árabes mezclan vainilla, caramelo y especias cálidas con oud y ámbar. Son los más virales en TikTok por su estela irresistible y duración extrema en piel.",
    notes: ["Vainilla", "Caramelo", "Ámbar", "Canela", "Tonka"],
    gradient: "from-amber-900 via-yellow-800 to-amber-700",
  },
  {
    scent: "fresco",
    title: "Fresco",
    sub: "Cítricos · Marino · Limpio",
    description:
      "Energía y vitalidad en cada spray. Los frescos combinan cítricos vivaces, notas acuáticas y acordes verdes con una base árabe que les da profundidad y carácter. Perfectos para el día a día.",
    notes: ["Bergamota", "Lima", "Piña", "Notas marinas", "Cedro"],
    gradient: "from-blue-950 via-indigo-900 to-slate-800",
  },
];

export default function GuiaDeAromasPage() {
  return (
    <div className="pt-28 min-h-screen bg-[#FAF7F2]">
      <section className="relative bg-[#0F0F0F] py-24 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #C8A96B 0%, transparent 60%)` }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase mb-4">Tu guía olfativa</p>
          <h1 className="font-[var(--font-cinzel)] text-5xl md:text-6xl text-white font-semibold mb-4">
            Guía de <span className="text-[#C8A96B]">aromas</span>
          </h1>
          <div className="gold-divider my-6" />
          <p className="text-white/60 font-[var(--font-cormorant)] text-xl leading-relaxed">
            Descubre las familias olfativas y encuentra la fragancia que mejor te define.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {SCENTS.map((s) => {
          const examples = PRODUCTS.filter((p) => p.scent === s.scent).slice(0, 3);
          return (
            <section key={s.scent} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <div className={`aspect-video bg-gradient-to-br ${s.gradient} mb-6 flex items-end p-6`}>
                  <div>
                    <p className="text-[#C8A96B] text-[10px] tracking-[0.3em] uppercase mb-1">{s.sub}</p>
                    <h2 className="font-[var(--font-cinzel)] text-4xl text-white font-semibold">{s.title}</h2>
                  </div>
                </div>
                <p className="text-[#0F0F0F]/70 font-[var(--font-cormorant)] text-lg leading-relaxed mb-5">
                  {s.description}
                </p>
                <div>
                  <p className="text-[10px] text-[#C8A96B] tracking-[0.25em] uppercase mb-3">Notas típicas</p>
                  <div className="flex flex-wrap gap-2">
                    {s.notes.map((n) => (
                      <span key={n} className="border border-[#EDE3D1] px-3 py-1 text-xs text-[#0F0F0F]/60 tracking-wide">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-[#C8A96B] tracking-[0.25em] uppercase mb-4">
                  Perfumes de esta familia
                </p>
                <div className="space-y-3">
                  {examples.length > 0 ? (
                    examples.map((p) => (
                      <Link
                        key={p.id}
                        href={`/tienda/${p.slug}`}
                        className="group flex items-center gap-4 bg-white border border-[#EDE3D1] p-4 hover:border-[#C8A96B]/40 transition-colors"
                      >
                        <div className={`w-12 h-12 shrink-0 bg-gradient-to-br ${p.gradient}`} />
                        <div className="flex-1 min-w-0">
                          <p className="font-[var(--font-cinzel)] text-sm text-[#0F0F0F] group-hover:text-[#C8A96B] transition-colors truncate">
                            {p.name}
                          </p>
                          <p className="text-[#0F0F0F]/40 text-xs">{p.brand} · {p.price}€</p>
                        </div>
                        <ArrowRight size={14} className="text-[#C8A96B] shrink-0" />
                      </Link>
                    ))
                  ) : (
                    <p className="text-[#0F0F0F]/40 font-[var(--font-cormorant)] text-base">Próximamente.</p>
                  )}
                </div>
                {examples.length > 0 && (
                  <Link
                    href={`/tienda?scent=${s.scent}`}
                    className="mt-4 flex items-center gap-2 text-sm text-[#C8A96B] hover:text-[#D4B97A] transition-colors"
                  >
                    Ver todos los {s.title.toLowerCase()}s <ArrowRight size={13} />
                  </Link>
                )}
              </div>
            </section>
          );
        })}
      </div>

      <section className="py-16 bg-[#0F0F0F]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase mb-3">¿Todavía con dudas?</p>
          <h2 className="font-[var(--font-cinzel)] text-3xl text-white font-semibold mb-4">
            Te asesoramos gratis
          </h2>
          <p className="text-white/50 font-[var(--font-cormorant)] text-xl mb-8">
            Cuéntanos tus gustos y te recomendamos el perfume perfecto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8A96B] text-[#0F0F0F] px-8 py-3.5 text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#D4B97A] transition-colors"
            >
              WhatsApp
            </a>
            <Link
              href="/tienda"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 text-sm tracking-[0.2em] uppercase hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors"
            >
              Ver tienda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
