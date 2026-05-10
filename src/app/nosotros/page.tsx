import type { Metadata } from "next";
import { Heart, MapPin, Star, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce la historia y filosofía de Mayar Arabia, tu perfumería árabe premium en Barcelona.",
};

export default function NosotrosPage() {
  return (
    <div className="pt-28 min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <section className="relative bg-[#0F0F0F] py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #C8A96B 0%, transparent 60%)` }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#C8A96B] text-xs tracking-[0.4em] uppercase mb-4">Nuestra historia</p>
          <h1 className="font-[var(--font-cinzel)] text-5xl md:text-6xl text-white font-semibold mb-4">
            Sobre <span className="text-[#C8A96B]">Nosotros</span>
          </h1>
          <div className="gold-divider my-6" />
          <p className="text-white/60 font-[var(--font-cormorant)] text-xl leading-relaxed">
            Nacemos de una pasión por la perfumería árabe y el deseo de acercarla a todos.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase mb-3">El origen</p>
            <h2 className="font-[var(--font-cinzel)] text-3xl text-[#0F0F0F] font-semibold mb-5">
              Una historia de amor por el oud
            </h2>
            <div className="w-10 h-px bg-[#C8A96B] mb-5" />
            <div className="space-y-4 text-[#0F0F0F]/70 font-[var(--font-cormorant)] text-lg leading-relaxed">
              <p>
                Mayar Arabia nació en Barcelona en 2022, impulsada por la pasión de sus fundadores por la rica tradición perfumera de Arabia. Después de años viajando por Dubái, Qatar y Marruecos, descubrieron un mundo olfativo extraordinario que pocas personas en España conocían.
              </p>
              <p>
                Decidieron traer esa experiencia a casa: crear un espacio donde cada fragancia cuente una historia, donde el lujo árabe sea accesible y donde cada cliente reciba atención personalizada digna de las mejores boutiques de Oriente Medio.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 rounded-none">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/20">
                  <div className="font-[var(--font-cinzel)] text-6xl font-bold tracking-widest">2022</div>
                  <div className="text-sm tracking-[0.3em] uppercase mt-2">Barcelona</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#EDE3D1] border border-[#C8A96B]/30 flex items-center justify-center">
              <div className="text-center">
                <p className="font-[var(--font-cinzel)] text-xl font-bold text-[#C8A96B]">5</p>
                <p className="text-[10px] text-[#0F0F0F]/50 tracking-widest">marcas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#EDE3D1]/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase mb-3">Valores</p>
            <h2 className="font-[var(--font-cinzel)] text-3xl text-[#0F0F0F] font-semibold">Nuestra filosofía</h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Star size={22} />, title: "Autenticidad", desc: "Solo trabajamos con marcas árabes auténticas de probada calidad." },
              { icon: <Heart size={22} />, title: "Pasión", desc: "Cada fragancia es seleccionada con amor y conocimiento profundo." },
              { icon: <Users size={22} />, title: "Atención", desc: "Asesoramiento personalizado para encontrar tu perfume perfecto." },
              { icon: <MapPin size={22} />, title: "Proximidad", desc: "Tienda física en Barcelona. Recoge hoy lo que compras online." },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-[#EDE3D1] p-6 text-center">
                <div className="w-12 h-12 bg-[#C8A96B]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C8A96B]">
                  {v.icon}
                </div>
                <h3 className="font-[var(--font-cinzel)] text-lg text-[#0F0F0F] font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-[#0F0F0F]/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "500+", label: "Clientes satisfechos" },
            { num: "5", label: "Marcas premium" },
            { num: "50+", label: "Fragancias" },
            { num: "4.9", label: "Valoración media" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-[var(--font-cinzel)] text-4xl text-[#C8A96B] font-bold mb-1">{s.num}</p>
              <p className="text-white/40 text-xs tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team & Personal attention */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <p className="text-[#C8A96B] text-xs tracking-[0.35em] uppercase mb-3">Atención personalizada</p>
        <h2 className="font-[var(--font-cinzel)] text-3xl text-[#0F0F0F] font-semibold mb-4">
          Somos personas, no algoritmos
        </h2>
        <div className="gold-divider mb-6" />
        <p className="text-[#0F0F0F]/60 font-[var(--font-cormorant)] text-xl leading-relaxed max-w-2xl mx-auto mb-8">
          En Mayar Arabia creemos que encontrar el perfume perfecto es una experiencia íntima. Por eso ofrecemos atención personalizada tanto en tienda como online. ¿No sabes qué elegir? Cuéntanos tu perfil y te ayudamos.
        </p>
        <a
          href="https://wa.me/34600000000?text=Hola,%20necesito%20ayuda%20para%20elegir%20un%20perfume"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0F0F0F] text-[#C8A96B] px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#C8A96B] hover:text-[#0F0F0F] transition-colors"
        >
          Pedir asesoramiento gratis
        </a>
      </section>
    </div>
  );
}
