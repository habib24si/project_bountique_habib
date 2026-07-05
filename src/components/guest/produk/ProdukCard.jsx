// ProdukCard.jsx
// Komponen untuk menampilkan 1 produk untuk guest

import { FaTshirt } from "react-icons/fa";

export default function ProdukCard({ product, onAddToCart }) {
    return (
        <div className="bg-white rounded-xl shadow p-5">
            {/* Image Placeholder */}
            <div className="h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaTshirt className="text-6xl text-blue-400" />
            </div>

            {/* Nama dan Deskripsi */}
            <h3 className="font-bold text-lg mb-2">{product.nama}</h3>
            <p className="text-sm text-gray-500 mb-3">{product.deskripsi}</p>

            {/* Info Detail */}
            <div className="space-y-1 text-sm mb-4">
                <div className="flex justify-between">
                    <span className="text-gray-500">Ukuran:</span>
                    <span>{product.ukuran}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Warna:</span>
                    <span>{product.warna}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Stok:</span>
                    <span className={product.stok > 10 ? 'text-green-600' : 'text-red-600'}>
                        {product.stok} pcs
                    </span>
                </div>
            </div>

            {/* Harga dan Tombol */}
            <div className="flex justify-between items-center pt-4 border-t">
                <div>
                    <p className="text-xs text-gray-500">Harga</p>
                    <p className="text-xl font-bold">Rp {product.harga}</p>
                </div>
                <button
                    onClick={() => onAddToCart(product)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Beli
                </button>
            </div>
        </div>
    );
}
