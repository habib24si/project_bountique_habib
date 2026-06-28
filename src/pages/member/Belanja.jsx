import { useState } from "react";
import { FaTshirt, FaShoppingCart, FaTags } from "react-icons/fa";
import modelsData from "../../data/modelsData";

export default function Belanja() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.nama} ditambahkan ke keranjang!`);
    };

    const hitungHargaDiskon = (harga) => {
        const hargaAsli = parseInt(harga.replace(/\./g, ''));
        const hargaDiskon = hargaAsli * 0.7;
        return hargaDiskon.toLocaleString('id-ID');
    };

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Belanja</h1>
                    <p className="text-sm text-gray-500 mt-1">Diskon 30% untuk semua produk</p>
                </div>
                <div className="flex items-center gap-2 bg-rose-700 text-white px-4 py-2 rounded-lg text-sm">
                    <FaShoppingCart />
                    <span className="font-semibold">{cart.length} item</span>
                </div>
            </div>

            {/* Banner */}
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                <FaTags className="text-rose-700" />
                <p className="text-sm text-gray-700"><span className="font-semibold">Diskon Member 30%</span> + Gratis Ongkir</p>
            </div>

            {/* Grid Produk */}
            <div className="grid grid-cols-3 gap-6">
                {modelsData.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg border border-gray-100 p-5">
                        <div className="h-40 bg-rose-50 rounded-lg flex items-center justify-center mb-4">
                            <FaTshirt className="text-5xl text-rose-300" />
                        </div>

                        <h3 className="font-semibold text-sm text-gray-800 mb-1">{product.nama}</h3>
                        <p className="text-xs text-gray-400 mb-3">{product.deskripsi}</p>

                        <div className="space-y-1 text-xs mb-4">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Ukuran:</span>
                                <span className="text-gray-700">{product.ukuran}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Warna:</span>
                                <span className="text-gray-700">{product.warna}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Stok:</span>
                                <span className={product.stok > 10 ? 'text-green-600' : 'text-red-600'}>
                                    {product.stok} pcs
                                </span>
                            </div>
                        </div>

                        <div className="pt-3 border-t border-gray-100">
                            <p className="text-xs text-gray-400 line-through">Rp {product.harga}</p>
                            <div className="flex items-center gap-2 mb-3">
                                <p className="text-lg font-bold text-gray-800">Rp {hitungHargaDiskon(product.harga)}</p>
                                <span className="bg-rose-100 text-rose-700 text-xs px-2 py-0.5 rounded font-semibold">-30%</span>
                            </div>
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-sm font-semibold"
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
