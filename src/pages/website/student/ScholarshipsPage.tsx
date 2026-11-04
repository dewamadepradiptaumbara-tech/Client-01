import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { FiGift, FiCheckCircle, FiArrowRight } from "react-icons/fi";

interface Scholarship {
  readonly title: string;
  readonly type: string;
  readonly coverage: string;
  readonly desc: string;
}

const scholarshipList: readonly Scholarship[] = [
  {
    title: "Beasiswa Prestasi Akademik & IT",
    type: "Jalur Juara / Nilai Raport",
    coverage: "Bebas Biaya SPP hingga 50% - 100%",
    desc: "Diperuntukkan bagi calon siswa berprestasi di bidang akademik, pemrograman, atau peraih kejuaraan sains/IT.",
  },
  {
    title: "Beasiswa Kartu Indonesia Pintar (KIP) & PIP",
    type: "Bantuan Pemerintah",
    coverage: "Subsidi Pendidikan & Perlengkapan",
    desc: "Fasilitas penyaluran dana bantuan pendidikan dari pemerintah pusat bagi keluarga penerima manfaat.",
  },
  {
    title: "Beasiswa Mitra Industri Terikat",
    type: "Corporate Social Responsibility",
    coverage: "Bantuan SPP & Jaminan Kerja",
    desc: "Dukungan dana dari perusahan mitra IT pasangan yang memberikan pembiayaan studi serta peluang ikatan dinas.",
  },
];

export default function ScholarshipsPage(): ReactElement {
  return (
    <div className="w-full bg-slate-50 font-cabinet">
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-400/30 uppercase tracking-wider">
            <FiGift className="text-sm" />
            Peluang Bantuan Pendidikan
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Program Beasiswa SMK TI Bali Global Badung
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Komitmen kami untuk memastikan setiap anak bertalenta mendapatkan akses pendidikan vokasi berkualitas tanpa terkendala biaya.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scholarshipList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-blue-100">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-emerald-600 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                  Cakupan: {item.coverage}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-blue-600">
                <FiCheckCircle /> Syarat & Ketentuan Berlaku
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ingin Mengajukan Beasiswa SPMB Tahun Ini?
          </h3>
          <p className="text-blue-100 text-sm max-w-xl mx-auto">
            Segera daftarkan diri Anda pada sistem SPMB online dan unggah dokumen pendukung prestasi Anda.
          </p>
          <div className="flex justify-center pt-2">
            <Link
              to="/login"
              className="px-8 py-3.5 bg-white hover:bg-blue-50 text-blue-900 font-bold rounded-xl shadow-lg transition duration-200 inline-flex items-center gap-2 text-sm"
            >
              <span>Konsultasi & Daftar Beasiswa</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}