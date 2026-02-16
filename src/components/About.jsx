import { Building2, GraduationCap, Users } from 'lucide-react';

const About = () => {
  const stakeholders = [
    {
      icon: Building2,
      title: 'Untuk Pemerintah',
      description:
        'Menyediakan data spasial yang lengkap dan terpercaya sebagai dasar perencanaan pembangunan serta penyusunan kebijakan yang tepat sasaran.',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: GraduationCap,
      title: 'Untuk Akademisi',
      description:
        'Mendukung kegiatan penelitian dan analisis melalui pemanfaatan dataset spasial yang kaya serta mendorong kolaborasi dalam kajian pengembangan wilayah perkotaan.',
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      icon: Users,
      title: 'Untuk Masyarakat',
      description:
        'Memberikan akses terhadap informasi spasial yang transparan agar masyarakat dapat memahami arah pembangunan kota dan berpartisipasi dalam proses perencanaan.',
      gradient: 'from-emerald-600 to-green-500',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-white to-gray-100 overflow-hidden"
    >
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
            Tentang C-MAP
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight whitespace-nowrap">
            Data Spasial untuk Masa Depan Kota
          </h2>


          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            C-MAP merupakan platform geoportal terintegrasi Kota Cimahi
            yang menyediakan akses data spasial secara mudah dan transparan
            untuk mendukung perencanaan kota serta pengambilan kebijakan
            berbasis data.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;

            return (
              <div
                key={index}
                className="
                  group relative p-8 rounded-2xl
                  bg-white
                  border border-gray-200
                  shadow-sm
                  transition-all duration-500
                  hover:shadow-2xl
                  hover:-translate-y-2
                  overflow-hidden
                "
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stakeholder.gradient}`} />

                {/* Icon */}
                <div
                  className={`
                    w-16 h-16
                    bg-gradient-to-br ${stakeholder.gradient}
                    rounded-xl
                    flex items-center justify-center
                    mb-6
                    shadow-lg
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:shadow-xl
                  `}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {stakeholder.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {stakeholder.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
