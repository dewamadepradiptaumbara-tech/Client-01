import type { ReactElement } from "react";
import { FiGitBranch, FiUsers, FiAward } from "react-icons/fi";

interface StructureMember {
  readonly name: string;
  readonly role: string;
  readonly category: string;
  readonly image: string;
}

const teamMembers: readonly StructureMember[] = [
  {
    name: "Drs. I Gede Ketut Putra, M.Pd.",
    role: "Kepala Sekolah",
    category: "Pimpinan Sekolah",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "I Made Agus Saputra, S.Kom., M.T.",
    role: "Wakasek Kurikulum & Akademik",
    category: "Pimpinan Sekolah",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ni Luh Putu Dian, S.T.",
    role: "Wakasek Kesiswaan & Humas",
    category: "Pimpinan Sekolah",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "I Wayan Kertayasa, S.Kom.",
    role: "Kaprogli PPLG & TJKT",
    category: "Kepala Program",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ni Kadek Ayu Sugiarti, S.Ds.",
    role: "Kaprogli DKV & Bisnis Digital",
    category: "Kepala Program",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "I Gusti Ngurah Rai, S.Pd.",
    role: "Kepala Tata Usaha & Sarpras",
    category: "Administrasi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function OrganizationalPage(): ReactElement {
  return (
    <div className="w-full bg-slate-50 font-cabinet">
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-400/30 uppercase tracking-wider">
            <FiGitBranch className="text-sm" />
            Tata Kelola Sekolah
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Struktur Organisasi & Pimpinan
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Sinergi kepemimpinan dan tenaga pendidik profesional dalam mewujudkan pendidikan vokasi IT yang unggul, berkarakter, dan inovatif.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase">
            Hierarki Manajemen
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Pimpinan & Kepala Program Keahlian
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-900/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                    {member.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800">
          <div className="space-y-2 pt-4 md:pt-0">
            <FiUsers className="text-3xl mx-auto text-blue-300" />
            <h4 className="text-3xl font-extrabold">45+</h4>
            <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Guru & Pengajar Sertifikasi</p>
          </div>
          <div className="space-y-2 pt-4 md:pt-0">
            <FiAward className="text-3xl mx-auto text-blue-300" />
            <h4 className="text-3xl font-extrabold">12+</h4>
            <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Instruktur Industri Pasangan</p>
          </div>
          <div className="space-y-2 pt-4 md:pt-0">
            <FiGitBranch className="text-3xl mx-auto text-blue-300" />
            <h4 className="text-3xl font-extrabold">5</h4>
            <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Divisi Operasional Sekolah</p>
          </div>
        </div>
      </section>
    </div>
  );
}