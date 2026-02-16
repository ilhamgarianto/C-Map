import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

import heroBg1 from '../assets/image/bg1.png'
import heroBg2 from '../assets/image/bg2.png'
import heroBg3 from '../assets/image/bg3.png'

const images = [heroBg1, heroBg2, heroBg3]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-48 pb-28 overflow-hidden">

      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br  via-blue-800/50 to-indigo-900/70"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          Cimahi – Map for Action & Policy
        </h1>

       <p className="mt-6 text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-relaxed max-w-3xl mx-auto">
        C-MAP merupakan geoportal terintegrasi Kota Cimahi yang menyediakan
        data dan informasi spasial untuk mendukung perencanaan pembangunan,
        penelitian akademis, serta inovasi dan partisipasi masyarakat berbasis data.
      </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://c-map.cimahikota.go.id/c-map"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Jelajahi Peta
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-700 transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
      
    </section>
    
  )
}

export default Hero
