import { useState } from "react";
import { FaUser, FaEdit, FaSave } from "react-icons/fa";

// Import komponen kecil
import ProfilForm from "../../components/member/profil/ProfilForm";
import SecuritySection from "../../components/member/profil/SecuritySection";

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

    // Fungsi untuk update field profil
    const updateField = (field, value) => {
        setProfil({ ...profil, [field]: value });
    };

    // Fungsi untuk simpan profil
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
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold"
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

            {/* Card Profil (pakai komponen) */}
            <div className="bg-white rounded-lg border border-gray-100 p-5 mb-6">
                {/* Header: Foto dan Nama */}
                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-100">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <FaUser className="text-purple-600 text-2xl" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">{profil.nama}</h2>
                        <p className="text-xs text-gray-400">Gold Member · Sejak Januari 2024</p>
                    </div>
                </div>

                {/* Form Profil (pakai komponen) */}
                <ProfilForm
                    profil={profil}
                    isEdit={isEdit}
                    onUpdate={updateField}
                />

                {/* Tombol Batal (hanya tampil saat edit) */}
                {isEdit && (
                    <div className="mt-5 pt-5 border-t border-gray-100">
                        <button
                            onClick={() => setIsEdit(false)}
                            className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm hover:bg-gray-50"
                        >
                            Batal
                        </button>
                    </div>
                )}
            </div>

            {/* Keamanan (pakai komponen) */}
            <SecuritySection />
        </div>
    );
}
