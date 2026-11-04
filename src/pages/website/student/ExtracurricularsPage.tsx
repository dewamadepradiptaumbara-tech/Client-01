import type { ReactElement } from "react";
import { FiActivity } from "react-icons/fi";

interface Extra {
  readonly title: string;
  readonly category: string;
  readonly desc: string;
  readonly schedule: string;
}

const extrasList: readonly Extra[] = [
  {
    title: "Cyber Club & Competitive Programming",
    category: "Akademik & IT",
    desc: "Wadah pendalaman algoritma, persiapan kompetisi LKS, dan ethical hacking.",
    schedule: "Setiap Selasa & Kamis",
  },
  {
    title: "E-Sports & Game Design",
    category: "Teknologi & Game",
    desc: "Pengembangan bakat atlet e-sports serta riset mekanisme industri gim interaktif.",
    schedule: "Setiap Jumat Sore",
  },
  {
    title: "Kewirausahaan Digital (Young Entrepreneur)",
    category: "Bisnis",
    desc: "Praktik langsung berjualan online, manajemen modal, dan pitching startup.",
    schedule: "Setiap Rabu",
  },
  {
    title: "Fotografi & Cinematography",
    category: "Seni & Seni Visual",
    desc: "Teknik lighting, hunting foto outdoor, dan pembuatan film pendek.",
    schedule: "Setiap Sabtu Pagi",
  },
  {
    title: "Pramuka & PMR",
    category: "Karakter & Sosial",
    desc: "Pembentukan jiwa kepemimpinan, kedisiplinan, dan ketangkasan pertolongan pertama.",
    schedule: "Setiap Sabtu Afternoon",
  },
  {
    title: "Tari Bali & Seni Karawitan",
    category: "Budaya Local",
    desc: "Pelestarian seni budaya tradisional Bali berstandar sanggar profesional.",
    schedule: "Setiap Rabu Sore",
  },
];

export default function ExtracurricularsPage(): ReactElement {
  return (
    <div className="w-full bg-slate-50 font-cabinet">
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-400/30 uppercase tracking-wider">
            <FiActivity className="text-sm" />
            Pengembangan Talent Siswa
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ekstrakurikuler & Klub Minat Bakat
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Eksplorasi potensi non-akademik, kepemimpinan, dan kreativitas siswa melalui beragam pilihan klub terstruktur.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extrasList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-blue-100">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 text-xs font-semibold text-gray-500">
                Jadwal: <span className="text-blue-600 font-bold">{item.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}