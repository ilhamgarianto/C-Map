import { useState, useEffect, useRef, useMemo } from 'react'
import { Search } from 'lucide-react'

const InteractiveMap = () => {
  const [datasets, setDatasets] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isHovering, setIsHovering] = useState(false)

  const sliderRef = useRef(null)

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    setLoading(true)

    Promise.all([
      fetch('http://10.3.1.151:8030/api/maps/').then(res => res.json()),
      fetch('http://10.3.1.151:8030/api/datasets/').then(res => res.json())
    ])
      .then(([maps, datasets]) => {
        const combinedData = [
          ...(maps.objects || []).map(item => ({
            ...item,
            category: 'Maps'
          })),
          ...(datasets.objects || []).map(item => ({
            ...item,
            category: 'Dataset'
          }))
        ]

        setDatasets(combinedData)
        setLoading(false)
      })
      .catch(() => {
        setDatasets([])
        setLoading(false)
      })
  }, [])

  /* ================= FILTER ================= */
  const filtered = useMemo(() => {
    return datasets.filter(item =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [datasets, searchTerm])

  const isSearching = searchTerm.trim() !== ''

  /* ================= INFINITE MODE ================= */
  const displayData = useMemo(() => {
    if (isSearching) return filtered
    return [...filtered, ...filtered] // duplicate only when not searching
  }, [filtered, isSearching])

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (isSearching) return

    const slider = sliderRef.current
    if (!slider || filtered.length === 0) return

    const scroll = () => {
      if (!isHovering) {
        slider.scrollLeft += 0.6

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0
        }
      }
    }

    const interval = setInterval(scroll, 16)
    return () => clearInterval(interval)

  }, [filtered, isHovering, isSearching])

  const getDetailUrl = (item) => {
    if (item.category === 'Maps' && item.id) {
      return `http://10.3.1.151:8030/catalogue/#/map/${item.id}`
    }

    if (item.uuid) {
      return `http://10.3.1.151:8030/catalogue/uuid/${item.uuid}/`
    }

    return '#'
  }

  return (
    <section id="map" className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1500px] mx-auto px-10">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Katalog Data C-MAP
          </h2>
          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
            Kumpulan data spasial resmi yang terintegrasi dalam C-MAP untuk 
            mendukung perencanaan pembangunan, penelitian akademis, serta inovasi masyarakat berbasis data.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Cari data berdasarkan judul..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl pl-12 pr-6 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-center text-gray-500">Memuat data...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500">Tidak ada data.</p>
        ) : (
          <div
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Fade edges only when not searching */}
            {!isSearching && (
              <>
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              </>
            )}

            <div
              ref={sliderRef}
              className={`flex gap-8 ${
                isSearching ? 'overflow-x-auto' : 'overflow-hidden'
              }`}
            >
              {displayData.map((item, index) => (
                <a
                  key={`${item.id || item.uuid}-${item.category}-${index}`}
                  href={getDetailUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[320px] max-w-[320px] bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 flex-shrink-0"
                >
                  {/* Thumbnail */}
                  <div className="h-48 w-full overflow-hidden rounded-t-3xl bg-gray-200">
                    <img
                      src={
                        item.thumbnail_url ||
                        item.thumbnail ||
                        'https://via.placeholder.com/400x300'
                      }
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-3 line-clamp-3 leading-relaxed">
                      {item.abstract || 'Klik untuk melihat detail data.'}
                    </p>

                    <div className="mt-5 text-xs font-medium text-primary uppercase tracking-wide">
                      {item.category}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default InteractiveMap
