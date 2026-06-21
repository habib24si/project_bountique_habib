import { useState } from "react";
import { FaTshirt, FaShoppingCart, FaTags } from "react-icons/fa";
import modelsData from "../../data/modelsData";

export default function Belanja() {
    // State untuk keranjang belanja
    const [cart, setCart] = useState([]);

    // Fungsi untuk menambah produk ke keranjang
    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.nama} ditambahkan ke keranjang!`);
    };

    // Hitung harga setelah diskon member (30%)
    const hitungHargaDiskon = (harga) => {
        const hargaAsli = parseInt(harga.replace(/\./g, ''));
        const hargaDiskon = hargaAsli * 0.7; // Diskon 30%
        return hargaDiskon.toLocaleString('id-ID');
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Belanja Member</h1>
                    <p className="text-gray-500">Nikmati diskon 30% untuk semua produk</p>
                </div>
                {/* Keranjang */}
                <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-lg shadow">
                    <FaShoppingCart className="text-xl" />
                    <span className="font-semibold">{cart.length} item</span>
                </div>
            </div>

            {/* Banner Diskon */}
            <div className="bg-purple-600 text-white rounded-lg p-4 mb-6 shadow flex items-center gap-3">
                <FaTags className="text-3xl" />
                <div>
                    <h3 className="font-bold text-lg">Diskon Eksklusif Member!</h3>
                    <p className="text-sm">Hemat 30% untuk semua produk + Gratis Ongkir</p>
                </div>
            </div>

            {/* Grid Produk */}
            <div className="grid grid-cols-3 gap-6">
                {modelsData.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow p-5">
                        {/* Gambar Produk */}
                        <div className="h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <FaTshirt className="text-6xl text-blue-400" />
                        </div>

                        {/* Info Produk */}
                        <h3 className="font-bold text-lg mb-2 text-gray-800">{product.nama}</h3>
                        <p className="text-sm text-gray-500 mb-3">{product.deskripsi}</p>

                        {/* Detail */}
                        <div className="space-y-1 text-sm mb-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Ukuran:</span>
                                <span className="font-medium">{product.ukuran}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Warna:</span>
                                <span className="font-medium">{product.warna}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Stok:</span>
                                <span className={product.stok > 10 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                                    {product.stok} pcs
                                </span>
                            </div>
                        </div>

                        {/* Harga & Tombol Beli */}
                        <div className="pt-4 border-t">
                            {/* Harga Asli (dicoret) */}
                            <div className="mb-2">
                                <p className="text-xs text-gray-400 line-through">Rp {product.harga}</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-xl font-bold text-gray-800">Rp {hitungHargaDiskon(product.harga)}</p>
                                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span>
                                </div>
                            </div>
                            
                            {/* Tombol Beli */}
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
                            >
                                Beli Sekarang
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
