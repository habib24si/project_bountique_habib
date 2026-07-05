// Komponen untuk menampilkan 1 produk dengan diskon member

import { FaStar, FaTshirt } from "react-icons/fa";

export default function ProdukCard({ produk, onBeli }) {
    // Hitung harga diskon (30% off untuk member)
    const hargaAsli = parseInt(produk.harga.replace(/\./g, ''));
    const hargaDiskon = hargaAsli * 0.7;
    const hargaDiskonFormat = hargaDiskon.toLocaleString('id-ID');

    return (
        <div className="bg-white rounded-lg shadow p-5">
            {/* Gambar Produk */}
            <div className="h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaTshirt className="text-6xl text-blue-400" />
            </div>

            {/* Nama Produk */}
            <h3 className="font-bold text-lg mb-2 text-gray-800">{produk.nama}</h3>
            
            {/* Deskripsi */}
            <p className="text-sm text-gray-500 mb-3">{produk.deskripsi}</p>

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
                <p className="text-xs text-gray-400 line-through">Rp {produk.harga}</p>
                
                {/* Harga Diskon + Badge */}
                <div className="flex items-center gap-2 mb-3">
                    <p className="text-xl font-bold text-gray-800">Rp {hargaDiskonFormat}</p>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span>
                </div>
                
                {/* Tombol Beli */}
                <button
                    onClick={() => onBeli(produk)}
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
                >
                    Beli Sekarang
                </button>
            </div>
        </div>
    );
}
