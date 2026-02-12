import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
         Siap Menjelajahi Data Kota Cimahi?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Mulai mendukung perencanaan dan pengambilan keputusan dengan informasi spasial yang komprehensif.
        </p>
        <a
          href="#map"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
         Telusuri Lebih Lanjut
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
