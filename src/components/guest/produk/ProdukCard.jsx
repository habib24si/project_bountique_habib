// ProdukCard.jsx
// Komponen untuk menampilkan 1 produk untuk guest

import { FaStar } from "react-icons/fa";

export default function ProdukCard({ produk, onAddToCart }) {
    // Generate gambar berdasarkan kategori
    const getImageUrl = (kategori) => {
        const images = {
            "Dress": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
            "Blouse": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop",
            "Rok": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
            "Outer": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop",
            "Celana": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop"
        };
        return images[kategori] || "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop";
    };

    return (
        <div className="bg-white rounded-xl shadow p-5 hover:shadow-xl transition overflow-hidden group">
            {/* Gambar Produk */}
            <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                    src={getImageUrl(produk.kategori)} 
                    alt={produk.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop";
                    }}
                />
            </div>

            {/* Nama dan Deskripsi */}
            <h3 className="font-bold text-lg mb-2">{produk.nama}</h3>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                ))}
                <span className="text-xs text-gray-500 ml-1">(4.7)</span>
            </div>

            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{produk.deskripsi}</p>

            {/* Info Detail */}
            <div className="space-y-1 text-sm mb-4">
                <div className="flex justify-between">
                    <span className="text-gray-500">Ukuran:</span>
                    <span>{produk.ukuran}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Warna:</span>
                    <span>{produk.warna}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Stok:</span>
                    <span className={produk.stok > 10 ? 'text-green-600' : 'text-red-600'}>
                        {produk.stok} pcs
                    </span>
                </div>
            </div>

            {/* Harga dan Tombol */}
            <div className="flex justify-between items-center pt-4 border-t">
                <div>
                    <p className="text-xs text-gray-500">Harga</p>
                    <p className="text-xl font-bold">Rp {produk.harga}</p>
                </div>
                <button
                    onClick={() => onAddToCart && onAddToCart(produk)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
                >
                    Beli
                </button>
            </div>
        </div>
    );
}
