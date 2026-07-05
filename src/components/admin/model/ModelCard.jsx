// ModelCard.jsx
// Komponen untuk menampilkan 1 model baju dalam bentuk card

import { FaTshirt } from "react-icons/fa";

export default function ModelCard({ model, getCategoryColor }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100 group">
            {/* Image Placeholder */}
            <div className="h-48 bg-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                <FaTshirt className="text-6xl text-blue-400 opacity-50" />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Nama dan Kategori */}
                <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-800 text-lg">{model.nama}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(model.kategori)}`}>
                        {model.kategori}
                    </span>
                </div>

                {/* Deskripsi */}
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{model.deskripsi}</p>

                {/* Info Warna dan Stok */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Warna:</span>
                        <span className="text-gray-700 font-medium">{model.warna}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Stok:</span>
                        <span className={`font-semibold ${
                            model.stok > 20 ? 'text-green-600' :
                            model.stok > 10 ? 'text-yellow-600' :
                            'text-red-600'
                        }`}>
                            {model.stok} pcs
                        </span>
                    </div>
                </div>

                {/* Harga dan Tombol */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500">Harga</p>
                        <p className="text-xl font-bold text-gray-800">Rp {model.harga}</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
}
