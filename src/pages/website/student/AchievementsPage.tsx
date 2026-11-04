import type { ReactElement } from "react";
import { FiAward, FiStar } from "react-icons/fi";

interface Achievement {
  readonly title: string;
  readonly level: string;
  readonly student: string;
  readonly major: string;
  readonly year: string;
  readonly desc: string;
  readonly image: string;
}

const achievementsList: readonly Achievement[] = [
  {
    title: "Juara 1 Lomba Kompetensi Siswa (LKS) Web Technologies",
    level: "Tingkat Provinsi Bali",
    student: "I Made Rian Arta",
    major: "PPLG",
    year: "2026",
    desc: "Mengembangkan aplikasi sistem manajemen inventory berbasis cloud dengan arsitektur microservices.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Juara 2 Desain UI/UX Mobile App National Tech Festival",
    level: "Tingkat Nasional",
    student: "Ni Putu Ayu Saraswati",
    major: "DKV",
    year: "2025",
    desc: "Merancang prototype aplikasi edutech inklusif untuk penyandang disabilitas pendengaran.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Juara 1 Network Administrator Competition Cisco Challenge",
    level: "Tingkat Regional Bali-Nusa Tenggara",
    student: "Gede Agus Mahendra",
    major: "TJKT",
    year: "2025",
    desc: "Troubleshooting dan konfigurasi jaringan enterprise skala besar dalam waktu tercepat.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AchievementsPage(): ReactElement {
  return (
    <div className="w-full bg-slate-50 font-cabinet">
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-400/30 uppercase tracking-wider">
            <FiAward className="text-sm" />
            Prestasi & Bangga Sekolah
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Pencapaian Siswa SMK TI Bali Global Badung
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Bukti nyata kualitas bimbingan dan semangat kompetisi siswa di tingkat daerah, nasional, hingga internasional.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <FiStar /> {item.level}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                    Tahun {item.year} • {item.major}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 text-xs font-bold text-gray-800">
                Pemenang: <span className="text-blue-600">{item.student}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}