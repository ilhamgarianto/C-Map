import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-28 text-white 
      bg-gradient-to-br from-primary via-secondary to-blueDark">

      {/* Soft radial highlight (focus ke tengah) */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_65%)]" />

      {/* Subtle dark overlay (biar teks kontras tapi warna tetap hidup) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] 
        bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] 
        bg-accent/20 rounded-full blur-3xl" />

      {/* Subtle grid pattern (nuansa data/spasial) */}
      <div className="absolute inset-0 opacity-[0.05] 
        bg-[linear-gradient(to_right,white_1px,transparent_1px),
        linear-gradient(to_bottom,white_1px,transparent_1px)] 
        bg-[size:40px_40px]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">

        <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
          Siap Menjelajahi Data Kota Cimahi?
        </h2>

        <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Dukung perencanaan dan pengambilan keputusan 
          melalui informasi spasial yang komprehensif dan akurat.
        </p>

        <a
          href="https://c-map.cimahikota.go.id/c-map"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-4 
            bg-white text-primary font-semibold rounded-full
            shadow-lg shadow-black/20
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-2xl
            hover:bg-gray-100
            focus:outline-none focus:ring-4 focus:ring-white/40"
        >
          Telusuri Lebih Lanjut
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

      </div>
    </section>
  );
};

export default CTA;
