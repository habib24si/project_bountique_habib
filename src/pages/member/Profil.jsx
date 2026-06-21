import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave } from "react-icons/fa";

export default function Profil() {
    // State untuk mode edit
    const [isEdit, setIsEdit] = useState(false);

    // State untuk data profil
    const [profil, setProfil] = useState({
        nama: "Habib Syadira Akbar",
        email: "Habib24si@Mahasiswa.pcr.ac.id",
        telepon: "0812-3456-7890",
        alamat: "Jl. Fashion Street No. 45, Rmbai Pusat 10110",
        tanggalLahir: "25-09-2005",
        jenisKelamin: "Laki-Laki"
    });


    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Profil Saya</h1>
                    <p className="text-gray-500">Kelola informasi profil Anda</p>
                </div>
                {/* Tombol Edit/Simpan */}
                {!isEdit ? (
                    <button
                        onClick={() => setIsEdit(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
                    >
                        <FaEdit />
                        Edit Profil
                    </button>
                ) : (
                    <button
                        onClick={simpanProfil}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold"
                    >
                        <FaSave />
                        Simpan
                    </button>
                )}
            </div>

            {/* Card Profil */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                {/* Foto Profil */}
                <div className="flex items-center gap-6 mb-6 pb-6 border-b">
                    <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                        <FaUser className="text-purple-600 text-4xl" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{profil.nama}</h2>
                        <p className="text-gray-500">Gold Member</p>
                        <p className="text-sm text-purple-600 font-semibold mt-1">Member sejak Januari 2024</p>
                    </div>
                </div>

                {/* Form Data Profil */}
                <div className="space-y-4">
                    {/* Nama Lengkap */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nama Lengkap
                        </label>
                        {isEdit ? (
                            <input
                                type="text"
                                value={profil.nama}
                                onChange={(e) => updateField('nama', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        ) : (
                            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                                <FaUser className="text-gray-400" />
                                <span className="text-gray-800">{profil.nama}</span>
                            </div>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email
                        </label>
                        {isEdit ? (
                            <input
                                type="email"
                                value={profil.email}
                                onChange={(e) => updateField('email', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        ) : (
                            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                                <FaEnvelope className="text-gray-400" />
                                <span className="text-gray-800">{profil.email}</span>
                            </div>
                        )}
                    </div>

                    {/* Telepon */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nomor Telepon
                        </label>
                        {isEdit ? (
                            <input
                                type="tel"
                                value={profil.telepon}
                                onChange={(e) => updateField('telepon', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        ) : (
                            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                                <FaPhone className="text-gray-400" />
                                <span className="text-gray-800">{profil.telepon}</span>
                            </div>
                        )}
                    </div>

                    {/* Alamat */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Alamat Lengkap
                        </label>
                        {isEdit ? (
                            <textarea
                                value={profil.alamat}
                                onChange={(e) => updateField('alamat', e.target.value)}
                                rows="3"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        ) : (
                            <div className="flex items-start gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                                <FaMapMarkerAlt className="text-gray-400 mt-1" />
                                <span className="text-gray-800">{profil.alamat}</span>
                            </div>
                        )}
                    </div>

                    {/* Tanggal Lahir & Jenis Kelamin - 2 Kolom */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Tanggal Lahir */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Tanggal Lahir
                            </label>
                            {isEdit ? (
                                <input
                                    type="date"
                                    value={profil.tanggalLahir}
                                    onChange={(e) => updateField('tanggalLahir', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            ) : (
                                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-800">{profil.tanggalLahir}</span>
                                </div>
                            )}
                        </div>

                        {/* Jenis Kelamin */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Jenis Kelamin
                            </label>
                            {isEdit ? (
                                <select
                                    value={profil.jenisKelamin}
                                    onChange={(e) => updateField('jenisKelamin', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option>Perempuan</option>
                                    <option>Laki-laki</option>
                                </select>
                            ) : (
                                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-800">{profil.jenisKelamin}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tombol Batal (hanya muncul saat edit) */}
                {isEdit && (
                    <div className="mt-6 pt-6 border-t">
                        <button
                            onClick={() => setIsEdit(false)}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                        >
                            Batal
                        </button>
                    </div>
                )}
            </div>

            {/* Keamanan Akun */}
            <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Keamanan Akun</h3>
                <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg">
                        <p className="font-semibold text-gray-800">Ubah Password</p>
                        <p className="text-sm text-gray-500">Terakhir diubah 2 bulan yang lalu</p>
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg">
                        <p className="font-semibold text-gray-800">Verifikasi Email</p>
                        <p className="text-sm text-green-600">✓ Email sudah terverifikasi</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
