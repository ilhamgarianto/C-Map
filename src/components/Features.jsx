import {
  Map,
  Database,
  Target,
  FileText,
  RefreshCw,
  Search,
  BookOpen,
  LayoutDashboard,
  Star
} from 'lucide-react';

const Features = () => {

  const features = [
    {
      icon: Map,
      title: 'Peta Tematik',
      description:
        'Menyediakan berbagai peta tematik yang mencakup infrastruktur, kependudukan, penggunaan lahan, lingkungan, dan data lainnya untuk mendukung analisis perkotaan secara menyeluruh.',
      featured: true
    },
    {
      icon: Target,
      title: 'Visualisasi Interaktif',
      description:
        'Menyajikan data melalui peta, grafik, dan diagram interaktif yang memudahkan pemahaman informasi kompleks secara visual.',
      featured: true
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard',
      description:
        'Menampilkan ringkasan data dan indikator utama melalui visualisasi interaktif untuk mendukung pemantauan wilayah serta pengambilan keputusan secara cepat.',
      featured: true
    },
    {
      icon: Search,
      title: 'Pencarian Lanjutan',
      description:
        'Memudahkan pencarian dataset, lokasi, atau informasi tertentu melalui fitur pencarian dan penyaringan data yang canggih.',
      featured: true
    },
    {
      icon: Database,
      title: 'Dataset Terintegrasi',
      description:
        'Menghubungkan berbagai sumber data dalam satu platform sehingga memungkinkan analisis lintas data dan pemahaman yang lebih komprehensif terhadap sistem perkotaan.'
    },
    {
      icon: FileText,
      title: 'Dukungan Kebijakan',
      description:
        'Menyediakan laporan dan analitik yang dirancang khusus untuk mendukung perumusan kebijakan dan strategi perencanaan.'
    },
    {
      icon: RefreshCw,
      title: 'Pembaruan Data Berkala',
      description:
        'Memastikan data selalu mutakhir melalui pembaruan rutin sehingga keputusan yang diambil berdasarkan informasi terbaru.'
    },
    {
      icon: BookOpen,
      title: 'GeoStory',
      description:
        'Menyajikan cerita berbasis data spasial yang menggabungkan peta, teks, dan visual untuk menjelaskan isu serta kondisi pembangunan Kota Cimahi secara informatif dan mudah dipahami.'
    }
  ];

  // Urutkan featured ke atas
  const sortedFeatures = [...features].sort(
    (a, b) => (b.featured === true) - (a.featured === true)
  );

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            Fitur Utama
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fitur Utama Perencanaan dan Kebijakan
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {sortedFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isFeatured = feature.featured;

            return (
              <div
                key={index}
                className={`relative flex gap-6 p-8 rounded-2xl bg-white transition-all duration-300
                  shadow-md hover:shadow-xl hover:-translate-y-1
                  ${isFeatured ? 'border-l-4 border-primary' : ''}
                `}
              >

                {/* Badge Featured */}
                {isFeatured && (
                  <div className="absolute top-5 right-5 flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    Unggulan
                  </div>
                )}

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`flex items-center gap-2 font-bold mb-3
                      ${isFeatured ? 'text-2xl text-gray-900' : 'text-xl text-gray-900'}
                    `}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Features;
