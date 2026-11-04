import type { ReactElement } from "react";
import { FiCheckCircle, FiShield, FiAward, FiFileText } from "react-icons/fi";

export default function AccreditationPage(): ReactElement {
  return (
    <div className="w-full bg-slate-50 font-cabinet">
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-400/30 uppercase tracking-wider">
            <FiCheckCircle className="text-sm" />
            Jaminan Mutu Pendidikan
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Akreditasi & Legalitas Resmi Sekolah
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            SMK TI Bali Global Badung telah terakreditasi resmi oleh Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) dengan kualifikasi Unggul.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto space-y-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center justify-center bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-extrabold shadow-lg mb-4">
              A
            </div>
            <h3 className="text-xl font-bold text-blue-950">Terakreditasi A</h3>
            <p className="text-xs text-blue-700 font-semibold mt-1">Sertifikat BAN-S/M Resmi</p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Komitmen Kualitas & Standar Nasional Pendidikan
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pengakuan kelayakan ini mencakup 8 Standar Nasional Pendidikan, termasuk standar isi, proses, kompetensi lulusan, pendidik dan tenaga kependidikan, sarana prasarana, pengelolaan, pembiayaan, dan penilaian pendidikan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <FiShield className="text-blue-600 text-xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">NPSN Resmi Kemendikbud</h4>
                  <p className="text-xs text-gray-500">Terdaftar di Data Pokok Pendidikan (Dapodik)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiAward className="text-blue-600 text-xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Lisensi Lembaga Sertifikasi (LSP)</h4>
                  <p className="text-xs text-gray-500">Sertifikasi Profesi BNSP bagi Kelulusan Siswa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
            <FiFileText className="text-2xl text-blue-600" />
            <h4 className="text-base font-bold text-gray-900">Izin Operasional</h4>
            <p className="text-xs text-gray-500">SK Dinas Pendidikan Provinsi Bali No. 420/1234/Disdik</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
            <FiAward className="text-2xl text-blue-600" />
            <h4 className="text-base font-bold text-gray-900">Sertifikasi ISO 9001:2015</h4>
            <p className="text-xs text-gray-500">Sistem Manajemen Mutu Berstandar Internasional</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
            <FiShield className="text-2xl text-blue-600" />
            <h4 className="text-base font-bold text-gray-900">Mitra BNSP</h4>
            <p className="text-xs text-gray-500">Tempat Uji Kompetensi (TUK) Mandiri Terverifikasi</p>
          </div>
        </div>
      </section>
    </div>
  );
}