// Halaman Belanja Member - Versi dengan Komponen Kecil

import { useState } from "react";
import modelsData from "../../data/modelsData";

// Import komponen kecil
import ProdukCard from "../../components/member/belanja/ProdukCard";
import DiskonBanner from "../../components/member/belanja/DiskonBanner";
import KeranjangCounter from "../../components/member/belanja/KeranjangCounter";

export default function Belanja() {
    // State untuk keranjang belanja (array)
    const [cart, setCart] = useState([]);

    // Fungsi untuk menambah produk ke keranjang
    const beliProduk = (produk) => {
        // Tambah produk ke array cart
        setCart([...cart, produk]);
        // Tampilkan alert
        alert(`${produk.nama} ditambahkan ke keranjang!`);
    };

    return (
        <div className="p-6">
            {/* Header dengan Keranjang */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Belanja</h1>
                    <p className="text-sm text-gray-500 mt-1">Diskon 30% untuk semua produk</p>
                </div>
                
                {/* Counter Keranjang - Komponen */}
                <KeranjangCounter jumlah={cart.length} />
            </div>

            {/* Banner Diskon - Komponen */}
            <div className="mb-6">
                <DiskonBanner />
            </div>

            {/* Grid Produk - Loop untuk tampilkan semua produk */}
            <div className="grid grid-cols-3 gap-6">
                {modelsData.map((produk) => (
                    <ProdukCard 
                        key={produk.id}
                        produk={produk}
                        onBeli={beliProduk}
                    />
                ))}
            </div>
        </div>
    );
}
