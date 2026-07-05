import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import modelsData from "../../data/modelsData";

// Import komponen kecil
import ProdukCard from "../../components/guest/produk/ProdukCard";

export default function Produk() {
    // State untuk keranjang
    const [cart, setCart] = useState([]);

    // Fungsi untuk menambah produk ke keranjang
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

                {/* Keranjang Counter */}
                <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    <FaShoppingCart />
                    <span>{cart.length} item</span>
                </div>
            </div>

            {/* Grid Produk - Loop untuk semua produk */}
            <div className="grid grid-cols-3 gap-6">
                {modelsData.map((product) => (
                    <ProdukCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}
