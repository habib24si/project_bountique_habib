import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave } from "react-icons/fa";

export default function Profil() {
    const [isEdit, setIsEdit] = useState(false);

    const [profil, setProfil] = useState({
        nama: "Habib Syadira Akbar",
        email: "Habib24si@Mahasiswa.pcr.ac.id",
        telepon: "0812-3456-7890",
        alamat: "Jl. Fashion Street No. 45, Rumbai Pusat 10110",
        tanggalLahir: "25-09-2005",
        jenisKelamin: "Laki-Laki"
    });

    const updateField = (field, value) => {
        setProfil({ ...profil, [field]: value });
    };

    const simpanProfil = () => {
        alert("Profil berhasil disimpan!");
        setIsEdit(false);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Profil Saya</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola informasi profil Anda</p>
                </div>
                {!isEdit ? (
                    <button
                        onClick={() => setIsEdit(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-sm font-semibold"
                    >
                        <FaEdit />
                        Edit Profil
                    </button>
                ) : (
                    <button
                        onClick={simpanProfil}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold"
                    >
                        <FaSave />
                        Simpan
                    </button>
                )}
            </div>

            {/* Card Profil */}
            <div className="bg-white rounded-lg border border-gray-100 p-5 mb-6">
                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-100">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                        <FaUser className="text-rose-700 text-2xl" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">{profil.nama}</h2>
                        <p className="text-xs text-gray-400">Gold Member · Sejak Januari 2024</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nama Lengkap</label>
                        {isEdit ? (
                            <input type="text" value={profil.nama} onChange={(e) => updateField('nama', e.target.value)}
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
                        ) : (
                            <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                                <FaUser className="text-gray-400 text-xs" />
                                {profil.nama}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email</label>
                        {isEdit ? (
                            <input type="email" value={profil.email} onChange={(e) => updateField('email', e.target.value)}
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
                        ) : (
                            <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                                <FaEnvelope className="text-gray-400 text-xs" />
                                {profil.email}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nomor Telepon</label>
                        {isEdit ? (
                            <input type="tel" value={profil.telepon} onChange={(e) => updateField('telepon', e.target.value)}
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
                        ) : (
                            <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                                <FaPhone className="text-gray-400 text-xs" />
                                {profil.telepon}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Alamat Lengkap</label>
                        {isEdit ? (
                            <textarea value={profil.alamat} onChange={(e) => updateField('alamat', e.target.value)} rows="2"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
                        ) : (
                            <div className="flex items-start gap-3 px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                                <FaMapMarkerAlt className="text-gray-400 text-xs mt-1" />
                                {profil.alamat}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Tanggal Lahir</label>
                            {isEdit ? (
                                <input type="date" value={profil.tanggalLahir} onChange={(e) => updateField('tanggalLahir', e.target.value)}
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
                            ) : (
                                <div className="px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">{profil.tanggalLahir}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Jenis Kelamin</label>
                            {isEdit ? (
                                <select value={profil.jenisKelamin} onChange={(e) => updateField('jenisKelamin', e.target.value)}
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500">
                                    <option>Perempuan</option>
                                    <option>Laki-Laki</option>
                                </select>
                            ) : (
                                <div className="px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">{profil.jenisKelamin}</div>
                            )}
                        </div>
                    </div>
                </div>

                {isEdit && (
                    <div className="mt-5 pt-5 border-t border-gray-100">
                        <button onClick={() => setIsEdit(false)}
                            className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm hover:bg-gray-50">
                            Batal
                        </button>
                    </div>
                )}
            </div>

            {/* Keamanan */}
            <div className="bg-white rounded-lg border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-4">Keamanan Akun</h3>
                <div className="space-y-2">
                    <button className="w-full text-left px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg">
                        <p className="font-medium text-sm text-gray-800">Ubah Password</p>
                        <p className="text-xs text-gray-400">Terakhir diubah 2 bulan yang lalu</p>
                    </button>
                    <button className="w-full text-left px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg">
                        <p className="font-medium text-sm text-gray-800">Verifikasi Email</p>
                        <p className="text-xs text-green-600">✓ Email sudah terverifikasi</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
