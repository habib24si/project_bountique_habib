// Dashboard Member - Versi dengan Komponen Kecil (Mudah Dipahami)

import { FaTags, FaShoppingBag, FaGift, FaBox } from "react-icons/fa";
import StatusCard from "../../components/member/StatusCard";
import BenefitCard from "../../components/member/BenefitCard";
import RiwayatItem from "../../components/member/RiwayatItem";
import PromoBanner from "../../components/member/PromoBanner";

export default function MemberDashboard() {
    // Data benefit - array dengan 3 object
    const benefits = [
        { 
            icon: FaTags, 
            warna: "bg-rose-100", 
            judul: "Diskon 30%", 
            deskripsi: "Untuk semua produk" 
        },
        { 
            icon: FaShoppingBag, 
            warna: "bg-rose-100", 
            judul: "Gratis Ongkir", 
            deskripsi: "Ke seluruh Indonesia" 
        },
        { 
            icon: FaGift, 
            warna: "bg-rose-100", 
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

            {/* Status Member - Komponen StatusCard */}
            <div className="mb-6">
                <StatusCard 
                    status="GOLD MEMBER"
                    sejak="Januari 2024"
                    poin="1,250"
                />
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
