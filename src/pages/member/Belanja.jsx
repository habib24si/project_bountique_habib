// Halaman Belanja Member - Versi dengan Komponen Kecil + Diskon Tier

import { useState, useEffect } from "react";
import { modelsAPI } from "../../services/modelsAPI";
import { getTierInfo } from "../../utils/discountHelper";
import { FaCrown } from "react-icons/fa";

// Import komponen kecil
import ProdukCard from "../../components/member/belanja/ProdukCard";
import KeranjangCounter from "../../components/member/belanja/KeranjangCounter";

export default function Belanja() {
    // State untuk keranjang belanja (array)
    const [cart, setCart] = useState([]);
    const [modelsData, setModelsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [tierInfo, setTierInfo] = useState(null);

    // useEffect untuk fetch data saat pertama kali load
    useEffect(() => {
        fetchModels();
        
        // Get user data dan tier info
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        setUserData(user);
        
        if (user.member_tier) {
            setTierInfo(getTierInfo(user.member_tier));
        }
    }, []);

    // Fungsi untuk fetch models dari Supabase
    const fetchModels = async () => {
        try {
            setLoading(true);
            const data = await modelsAPI.fetchModels();
            setModelsData(data);
        } catch (error) {
            console.error("Gagal memuat data produk:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fungsi untuk menambah produk ke keranjang
    const beliProduk = (produk) => {
        // Tambah produk ke array cart
        setCart([...cart, produk]);
        // Tampilkan alert
        alert(`${produk.nama} ditambahkan ke keranjang!`);
    };

    // Tampilkan loading
    if (loading) {
        return (
            <div className="p-6">
                <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            {/* Header dengan Keranjang */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Belanja</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        {tierInfo && (
                            <span className="flex items-center gap-2">
                                <span className={`${tierInfo.badgeBg} text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1`}>
                                    <FaCrown className="text-xs" />
                                    {tierInfo.name.toUpperCase()}
                                </span>
                                Diskon {tierInfo.discount}% untuk semua produk
                            </span>
                        )}
                    </p>
                </div>
                
                {/* Counter Keranjang - Komponen */}
                <KeranjangCounter jumlah={cart.length} />
            </div>

            {/* Banner Diskon - Komponen (update dengan tier) */}
            <div className="mb-6">
                {tierInfo && (
                    <div className={`${tierInfo.bgColor} ${tierInfo.borderColor} border-2 rounded-xl p-4`}>
                        <div className="flex items-center gap-3">
                            <div className={`${tierInfo.badgeBg} text-white w-12 h-12 rounded-full flex items-center justify-center`}>
                                <FaCrown className="text-xl" />
                            </div>
                            <div>
                                <h3 className={`${tierInfo.color} font-bold text-lg`}>
                                    Member {tierInfo.name} - Diskon {tierInfo.discount}%
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Hemat hingga {tierInfo.discount}% untuk setiap pembelian produk!
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Grid Produk - Loop untuk tampilkan semua produk dengan tier */}
            <div className="grid grid-cols-3 gap-6">
                {modelsData.map((produk) => (
                    <ProdukCard 
                        key={produk.id}
                        produk={produk}
                        onBeli={beliProduk}
                        memberTier={userData?.member_tier}
                    />
                ))}
            </div>
        </div>
    );
}
