// ModelTableRow.jsx
// Komponen untuk menampilkan 1 baris data model di tabel

import { FaTshirt } from "react-icons/fa";

export default function ModelTableRow({ model, index, onDelete }) {
    return (
        <tr className="hover:bg-gray-50 transition-colors">
            {/* Nomor */}
            <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>

            {/* Nama Model dengan Icon */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaTshirt className="text-blue-500" />
                    </div>
                    <span className="font-semibold text-gray-800">{model.nama}</span>
                </div>
            </td>

            {/* Kategori */}
            <td className="px-6 py-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {model.kategori}
                </span>
            </td>

            {/* Ukuran */}
            <td className="px-6 py-4 text-sm text-gray-600">{model.ukuran}</td>

            {/* Harga */}
            <td className="px-6 py-4 text-sm font-semibold text-gray-800">Rp {model.harga}</td>

            {/* Stok dengan Warna */}
            <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    model.stok > 20 ? 'bg-green-100 text-green-700' :
                    model.stok > 10 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                }`}>
                    {model.stok} pcs
                </span>
            </td>

            {/* Tombol Hapus */}
            <td className="px-6 py-4 text-center">
                <button
                    onClick={() => onDelete(model.id)}
                    className="px-3 py-1.5 bg-red-100 text-red-600 rounded-lg text-xs font-medium hover:bg-red-200 transition-colors"
                >
                    Hapus
                </button>
            </td>
        </tr>
    );
}
