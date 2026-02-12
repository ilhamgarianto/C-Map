import { Building2, GraduationCap, Users } from 'lucide-react';

const About = () => {
  const stakeholders = [
    {
      icon: Building2,
      title: 'Untuk Pemerintah',
      description: 'Menyediakan data spasial yang lengkap dan terpercaya sebagai dasar perencanaan pembangunan serta penyusunan kebijakan yang tepat sasaran.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GraduationCap,
      title: 'Untuk Akademisi',
      description: 'Mendukung kegiatan penelitian dan analisis melalui pemanfaatan dataset spasial yang kaya, serta mendorong kolaborasi dalam kajian pengembangan wilayah perkotaan.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Untuk Masyarakat',
      description: 'Memberikan akses terhadap informasi spasial yang transparan agar masyarakat dapat memahami arah pembangunan kota dan berpartisipasi dalam proses perencanaan.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
            Tentang C-MAP
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Menjembatani Data dan Pengambilan Keputusan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           C-MAP merupakan platform geoportal terintegrasi Kota Cimahi yang menyediakan akses data spasial secara mudah dan transparan untuk mendukung perencanaan kota serta pengambilan kebijakan berbasis data.
          </p>
        </div>

        {/* Stakeholder Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stakeholder.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {stakeholder.title}
                </h3>
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
