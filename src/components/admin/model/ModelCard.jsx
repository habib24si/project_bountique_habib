// ModelCard.jsx
// Komponen untuk menampilkan 1 model baju dalam bentuk card

import { FaStar } from "react-icons/fa";

export default function ModelCard({ model, getCategoryColor }) {
    // Generate gambar berdasarkan kategori
    const getImageUrl = (kategori) => {
        const images = {
            "Dress": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
            "Blouse": "https://images.unsplash.com/photo-1564257577-2f5f0b9c3d2d?w=400&h=300&fit=crop",
            "Rok": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=300&fit=crop",
            "Outer": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=300&fit=crop",
            "Celana": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop"
        };
        return images[kategori] || "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop";
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100 group">
            {/* Gambar Produk */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img 
                    src={getImageUrl(model.kategori)} 
                    alt={model.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop";
                    }}
                />
                {/* Badge Kategori */}
                <span className={`absolute top-3 right-3 ${getCategoryColor(model.kategori)} px-3 py-1 rounded-full text-xs font-semibold shadow-sm`}>
                    {model.kategori}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Nama dan Rating */}
                <div className="mb-3">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{model.nama}</h3>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xs" />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">(4.8)</span>
                    </div>
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
                        <span className="text-gray-500">Ukuran:</span>
                        <span className="text-gray-700 font-medium">{model.ukuran}</span>
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

                {/* Harga */}
                <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">Harga</p>
                    <p className="text-xl font-bold text-gray-800">Rp {model.harga}</p>
                </div>
            </div>
        </div>
    );
}
