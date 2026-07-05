// ProfilForm.jsx
// Komponen untuk form profil (bisa edit atau view saja)

import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ProfilForm({ profil, isEdit, onUpdate }) {
    return (
        <div className="space-y-4">
            {/* Nama Lengkap */}
            <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Nama Lengkap
                </label>
                {isEdit ? (
                    <input
                        type="text"
                        value={profil.nama}
                        onChange={(e) => onUpdate('nama', e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                ) : (
                    <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                        <FaUser className="text-gray-400 text-xs" />
                        {profil.nama}
                    </div>
                )}
            </div>

            {/* Email */}
            <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Email
                </label>
                {isEdit ? (
                    <input
                        type="email"
                        value={profil.email}
                        onChange={(e) => onUpdate('email', e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                ) : (
                    <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                        <FaEnvelope className="text-gray-400 text-xs" />
                        {profil.email}
                    </div>
                )}
            </div>

            {/* Nomor Telepon */}
            <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Nomor Telepon
                </label>
                {isEdit ? (
                    <input
                        type="tel"
                        value={profil.telepon}
                        onChange={(e) => onUpdate('telepon', e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                ) : (
                    <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                        <FaPhone className="text-gray-400 text-xs" />
                        {profil.telepon}
                    </div>
                )}
            </div>

            {/* Alamat */}
            <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Alamat Lengkap
                </label>
                {isEdit ? (
                    <textarea
                        value={profil.alamat}
                        onChange={(e) => onUpdate('alamat', e.target.value)}
                        rows="2"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                ) : (
                    <div className="flex items-start gap-3 px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                        <FaMapMarkerAlt className="text-gray-400 text-xs mt-1" />
                        {profil.alamat}
                    </div>
                )}
            </div>

            {/* Tanggal Lahir dan Jenis Kelamin */}
            <div className="grid grid-cols-2 gap-4">
                {/* Tanggal Lahir */}
                <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                        Tanggal Lahir
                    </label>
                    {isEdit ? (
                        <input
                            type="date"
                            value={profil.tanggalLahir}
                            onChange={(e) => onUpdate('tanggalLahir', e.target.value)}
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    ) : (
                        <div className="px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                            {profil.tanggalLahir}
                        </div>
                    )}
                </div>

                {/* Jenis Kelamin */}
                <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                        Jenis Kelamin
                    </label>
                    {isEdit ? (
                        <select
                            value={profil.jenisKelamin}
                            onChange={(e) => onUpdate('jenisKelamin', e.target.value)}
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option>Perempuan</option>
                            <option>Laki-Laki</option>
                        </select>
                    ) : (
                        <div className="px-3 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-800">
                            {profil.jenisKelamin}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
