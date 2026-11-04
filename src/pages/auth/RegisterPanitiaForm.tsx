import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoSmk from "../../assets/img/logo-smk.png";
import { registerPanitia } from "../../services/Api";

export default function RegisterPanitia() {
  const navigate = useNavigate();

const [formData, setFormData] = useState(() => ({
    nama_lengkap: "",
    email: "",
    no_hp: "",
    id_panitia: `PNT-2026-${Math.floor(100 + Math.random() * 900)}`,
    password: "",
    password_confirmation: "",
  }));

  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password" || name === "password_confirmation") {
      setPasswordError("");
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (formData.password !== formData.password_confirmation) {
      setPasswordError("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    if (formData.password.length < 6) {
      setPasswordError("Password minimal 6 karakter");
      return;
    }

    setLoading(true);

    try {
      await registerPanitia({
        namaLengkap: formData.nama_lengkap,
        username: formData.nama_lengkap
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "_"),
        email: formData.email,
        noHp: formData.no_hp,
        password: formData.password,
        confirmPassword: formData.password_confirmation,
      });

      navigate("/otp", {
        state: {
          email: formData.email,
          type: "register",
        },
      });
    } catch (err: unknown) {
      const errorObj = err as { response?: { data?: { message?: string } }; message?: string };
      setErrorMessage(
        errorObj.response?.data?.message ||
          errorObj.message ||
          "Pendaftaran panitia gagal, periksa data.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-[420px] mb-3">
        <Link
          to="/"
          className="text-gray-700 hover:text-black text-xs flex items-center gap-2 hover:underline cursor-pointer"
        >
          &larr; Kembali Ke Beranda SPMB
        </Link>
      </div>

      <div className="bg-white rounded-[35px] shadow-2xl w-full max-w-[420px] p-8 flex flex-col items-center">
        <div className="flex justify-center mb-3">
          <img
            src={logoSmk}
            alt="Logo SMK"
            className="h-16 w-auto object-contain"
          />
        </div>

        <div className="w-full">
          <div className="text-center mb-5">
            <h1 className="text-2xl font-bold text-[#204382]">
              Daftar Akun Panitia
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Buat akun panitia SPMB baru
            </p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 text-xs rounded-lg text-center">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                ID Panitia{" "}
                <span className="text-[10px] text-red-500">
                  (Simpan ID ini untuk Login)
                </span>
              </label>
              <input
                type="text"
                name="id_panitia"
                value={formData.id_panitia}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-100 text-sm text-gray-600 font-mono font-bold cursor-not-allowed"
                readOnly
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                Nama Panitia
              </label>
              <input
                type="text"
                name="nama_lengkap"
                placeholder="Masukkan nama lengkap"
                value={formData.nama_lengkap}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-400 focus:outline-none focus:border-[#204382] text-sm text-gray-800"
                required
                disabled={loading}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan email aktif"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-400 focus:outline-none focus:border-[#204382] text-sm text-gray-800"
                required
                disabled={loading}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                Nomor WhatsApp / HP
              </label>
              <input
                type="tel"
                name="no_hp"
                placeholder="08123456789"
                value={formData.no_hp}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-400 focus:outline-none focus:border-[#204382] text-sm text-gray-800"
                required
                disabled={loading}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="masukan Password anda"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-400 focus:outline-none focus:border-[#204382] text-sm text-gray-800 placeholder-gray-400 pr-10"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-semibold"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="password_confirmation"
                  placeholder="ulangi Password"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-800 focus:outline-none pr-10 ${
                    passwordError
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-400 focus:border-[#204382]"
                  }`}
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-semibold"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {passwordError && (
                <span className="text-[11px] text-red-500 leading-tight">
                  {passwordError}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
            className="w-full bg-[#355B8C] hover:bg-[#204382] disabled:bg-gray-400 text-white font-semibold py-2.5 rounded-lg transition duration-200 text-sm tracking-wide mt-3 cursor-pointer"
            >
              {loading ? "MEMPROSES..." : "REGISTER PANITIA"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              Sudah punya akun panitia?{" "}
              <Link
                to="/login-panitia"
                className="text-[#204382] font-semibold hover:underline"
              >
                Sign in Panitia
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}