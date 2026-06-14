import { useState } from "react";
import { FaTshirt, FaShoppingCart } from "react-icons/fa";
import modelsData from "../../data/modelsData";

export default function Produk() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.nama} ditambahkan ke keranjang!`);
    };

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Katalog Produk</h1>
                    <p className="text-gray-500">Temukan koleksi terbaik kami</p>
                </div>
                <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    <FaShoppingCart />
                    <span>{cart.length} item</span>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-3 gap-6">
                {modelsData.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow p-5">
                        {/* Image */}
                        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <FaTshirt className="text-6xl text-blue-400" />
                        </div>

                        {/* Info */}
                        <h3 className="font-bold text-lg mb-2">{product.nama}</h3>
                        <p className="text-sm text-gray-500 mb-3">{product.deskripsi}</p>

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

                        <div className="flex justify-between items-center pt-4 border-t">
                            <div>
                                <p className="text-xs text-gray-500">Harga</p>
                                <p className="text-xl font-bold">Rp {product.harga}</p>
                            </div>
                            <button
                                onClick={() => addToCart(product)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                Beli
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
