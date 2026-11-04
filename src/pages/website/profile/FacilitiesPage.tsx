import type { ReactElement } from "react";
import { FiHome, FiCheckCircle } from "react-icons/fi";

interface Facility {
  readonly title: string;
  readonly category: string;
  readonly desc: string;
  readonly image: string;
  readonly features: readonly string[];
}

const facilitiesList: readonly Facility[] = [
  {
    title: "Laboratorium Komputer & Network Pro",
    category: "Fasilitas Komputer",
    desc: "Lab spesifikasi tinggi yang dilengkapi PC Core i7, GPU dedicated, router Mikrotik/Cisco enterprise, dan koneksi dedicated fiber optic 500 Mbps.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    features: ["High-spec Gaming/Rendering PC", "Dedicated Router Racks", "Full AC & Ergonomic Chairs"],
  },
  {
    title: "Studio Fotografi & Videografi DKV",
    category: "Studio Kreatif",
    desc: "Studio multimedia profesional lengkap dengan Lighting Softbox, Green Screen Wall, Kamera DSLR/Mirrorless, Gimbal Stabilizer, dan Sound Isolation.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80",
    features: ["Professional Lighting Kit", "Full HD/4K Cameras", "Acoustic Wall Panels"],
  },
  {
    title: "Lab Praktik Tata Kecantikan & Salon",
    category: "Ruang Praktik",
    desc: "Fasilitas salon modern dengan cermin profesional, tempat tidur facial, alat sterilizer, dan perlengkapan tata rias lengkap standar DUDI.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    features: ["Facial & Skincare Beds", "Hair Styling Station", "Sterilization Devices"],
  },
  {
    title: "Perpustakaan Digital & Workspace",
    category: "Pusat Pembelajaran",
    desc: "Ruang baca berkonsep modern co-working space dengan koleksi ribuan e-book, jurnal TI, serta area diskusi yang nyaman.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    features: ["E-Library Touchscreens", "Co-Working Discussion Desk", "High Speed Wi-Fi Zone"],
  },
];

export default function FacilitiesPage(): ReactElement {
  return (
    <div className="w-full bg-slate-50 font-cabinet">
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-400/30 uppercase tracking-wider">
            <FiHome className="text-sm" />
            Sarana & Prasarana
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Fasilitas Pembelajaran Berstandar Industri
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Dukung potensi siswa secara maksimal dengan ruang praktik modern, peralatan berteknologi mutakhir, dan lingkungan belajar yang kondusif.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilitiesList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-gray-100 space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <FiCheckCircle className="text-blue-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}