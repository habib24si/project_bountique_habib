// Komponen untuk menampilkan 1 produk dengan diskon member berdasarkan tier

import { FaStar } from "react-icons/fa";
import { calculatePrice, formatRupiah } from "../../../utils/discountHelper";
import BuyButton from "../../common/BuyButton";

export default function ProdukCard({ produk, onBeli, memberTier }) {
    // Hitung harga diskon berdasarkan tier member
    const { hargaAsli, hargaAkhir, persenDiskon } = calculatePrice(produk.harga, memberTier);

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
        <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden group">
            {/* Gambar Produk */}
            <div className="relative h-56 bg-gray-100 overflow-hidden">
                <img 
                    src={getImageUrl(produk.kategori)} 
                    alt={produk.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop";
                    }}
                />
                {/* Badge Diskon */}
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    -{persenDiskon}%
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Nama Produk */}
                <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-1">{produk.nama}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                </div>

                {/* Deskripsi */}
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{produk.deskripsi}</p>

                {/* Detail (Ukuran, Warna, Stok) */}
                <div className="space-y-1 text-sm mb-4">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Ukuran:</span>
                        <span className="font-medium">{produk.ukuran}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Warna:</span>
                        <span className="font-medium">{produk.warna}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Stok:</span>
                        <span className={produk.stok > 10 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                            {produk.stok} pcs
                        </span>
                    </div>
                </div>

                {/* Harga */}
                <div className="pt-4 border-t">
                    {/* Harga Asli (dicoret) */}
                    <p className="text-xs text-gray-400 line-through">Rp {formatRupiah(hargaAsli)}</p>
                    
                    {/* Harga Diskon */}
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-2xl font-bold text-gray-800">Rp {formatRupiah(hargaAkhir)}</p>
                    </div>
                    
                    {/* Hemat Info */}
                    <p className="text-xs text-green-600 font-medium mb-3">
                        Hemat Rp {formatRupiah(hargaAsli - hargaAkhir)}
                    </p>
                    
                    {/* Tombol Beli - Komponen */}
                    <BuyButton 
                        onClick={() => onBeli(produk)} 
                        fullWidth={true}
                        size="md"
                    />
                </div>
            </div>
        </div>
    );
}
