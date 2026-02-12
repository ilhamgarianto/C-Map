const DroneSection = () => {
  return (
    <section className="relative py-36 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1500px] mx-auto px-12 lg:px-24 grid lg:grid-cols-2 gap-32 items-center">

        {/* Left Content */}
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Akuisisi Data Spasial Menggunakan Drone
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            C-MAP memanfaatkan teknologi Unmanned Aerial Vehicle (UAV)
            untuk menghasilkan citra udara resolusi tinggi yang akurat
            dan terkini. Data yang diperoleh mendukung analisis tata ruang,
            monitoring pembangunan, serta pengambilan kebijakan berbasis data spasial.
          </p>

          <div className="mt-12 space-y-6 text-gray-700">
            {[
              "Resolusi tinggi untuk analisis detail perkotaan",
              "Pemetaan orthophoto dan model permukaan 3D",
              "Monitoring perkembangan infrastruktur dan lingkungan",
              "Integrasi langsung ke dalam geoportal C-MAP",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-3 h-3 mt-2 bg-indigo-600 rounded-full"></div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Video - Monitor Style */}
        <div className="relative flex justify-center">

          {/* Monitor Frame */}
          <div className="relative bg-gray-900 rounded-[28px] p-4 shadow-[0_40px_80px_rgba(0,0,0,0.25)]">

            {/* Screen */}
            <div className="relative rounded-[18px] overflow-hidden bg-black">
              <div className="w-[720px] h-[420px] max-w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/n-yI9siWHO0?autoplay=1&mute=1&loop=1&playlist=n-yI9siWHO0&controls=0&modestbranding=1&rel=0"
                  title="Drone Mapping"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Monitor Stand */}
            <div className="absolute left-1/2 -bottom-10 -translate-x-1/2">
              <div className="w-32 h-4 bg-gray-800 rounded-b-xl"></div>
              <div className="w-20 h-10 bg-gray-900 mx-auto rounded-b-2xl shadow-md"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DroneSection;
