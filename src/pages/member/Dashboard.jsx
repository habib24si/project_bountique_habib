// Dashboard Member - Versi dengan Komponen Kecil (Mudah Dipahami)

import { useState, useEffect } from "react";
import { FaTags, FaShoppingBag, FaGift, FaBox, FaCrown } from "react-icons/fa";
import BenefitCard from "../../components/member/BenefitCard";
import RiwayatItem from "../../components/member/RiwayatItem";
import PromoBanner from "../../components/member/PromoBanner";
import { getTierInfo } from "../../utils/discountHelper";

export default function MemberDashboard() {
    // State untuk tier info
    const [tierInfo, setTierInfo] = useState(null);

    // Fetch user data dari localStorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        
        // Get tier info (bronze/silver/gold)
        if (user.member_tier) {
            setTierInfo(getTierInfo(user.member_tier));
        }
    }, []);

    // Data benefit - disesuaikan dengan tier
    const benefits = [
        { 
            icon: FaTags, 
            warna: tierInfo?.bgColor || "bg-purple-100", 
            judul: `Diskon ${tierInfo?.discount || 5}%`, 
            deskripsi: "Untuk semua produk" 
        },
        { 
            icon: FaShoppingBag, 
            warna: "bg-blue-100", 
            judul: "Gratis Ongkir", 
            deskripsi: "Ke seluruh Indonesia" 
        },
        { 
            icon: FaGift, 
            warna: "bg-pink-100", 
            judul: "Akses Pre-Order", 
            deskripsi: "Koleksi terbaru" 
        }
    ];

    // Data riwayat belanja - array dengan 3 object
    const riwayatBelanja = [
        { namaProduk: "Dress Floral Premium", tanggal: "12 Jan 2024", harga: "350.000", status: "Selesai" },
        { namaProduk: "Blouse Casual White", tanggal: "8 Jan 2024", harga: "250.000", status: "Selesai" },
        { namaProduk: "Rok Midi Elegant", tanggal: "3 Jan 2024", harga: "280.000", status: "Selesai" }
    ];

    return (
        <div className="p-6">
            {/* Judul Halaman */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-sm text-gray-500 mt-1">Selamat datang di area member</p>
            </div>

            {/* Status Member - Komponen StatusCard dengan Tier Badge */}
            <div className="mb-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Status Keanggotaan
                                </h3>
                                {/* Tier Badge */}
                                {tierInfo && (
                                    <span className={`${tierInfo.badgeBg} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
                                        <FaCrown className="text-xs" />
                                        {tierInfo.name.toUpperCase()}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-500">
                                Member sejak Januari 2024
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500 mb-1">Poin Reward</p>
                            <p className="text-2xl font-bold text-rose-700">1,250</p>
                        </div>
                    </div>
                    
                    {/* Info Diskon Tier */}
                    {tierInfo && (
                        <div className={`${tierInfo.bgColor} ${tierInfo.borderColor} border rounded-lg p-3 mt-4`}>
                            <p className={`${tierInfo.color} text-sm font-semibold`}>
                                🎉 Diskon {tierInfo.discount}% untuk setiap pembelian!
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                Sebagai member {tierInfo.name}, kamu mendapat diskon otomatis di semua produk.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* 3 Benefit - Loop untuk tampilkan */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {benefits.map((benefit, index) => (
                    <BenefitCard 
                        key={index}
                        icon={benefit.icon}
                        warna={benefit.warna}
                        judul={benefit.judul}
                        deskripsi={benefit.deskripsi}
                    />
                ))}
            </div>

            {/* Riwayat Belanja */}
            <div className="bg-white rounded-lg p-5 border border-gray-100 mb-6">
                {/* Header Riwayat */}
                <h3 className="font-semibold text-gray-800 text-sm mb-4 flex items-center gap-2">
                    <FaBox className="text-rose-700 text-xs" />
                    Riwayat Belanja Terakhir
                </h3>

                {/* Loop untuk tampilkan 3 riwayat */}
                <div className="space-y-3">
                    {riwayatBelanja.map((item, index) => (
                        <RiwayatItem 
                            key={index}
                            namaProduk={item.namaProduk}
                            tanggal={item.tanggal}
                            harga={item.harga}
                            status={item.status}
                        />
                    ))}
                </div>
            </div>

            {/* Promo Banner - Komponen PromoBanner */}
            <PromoBanner 
                emoji="🎉"
                judul="Promo Spesial Member"
                deskripsi="Diskon tambahan 10% untuk pembelian di atas Rp 500.000"
                onKlik={() => alert('Menuju halaman belanja...')}
            />
        </div>
    );
}
