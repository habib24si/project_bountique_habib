import { useState, useEffect } from "react";
import { penjualanAPI } from "../../services/penjualanAPI";

// Import komponen kecil
import LaporanCard from "../../components/admin/laporan/LaporanCard";
import ProdukTerlarisItem from "../../components/admin/laporan/ProdukTerlarisItem";

export default function Laporan() {
    const [penjualanData, setPenjualanData] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect untuk fetch data saat pertama kali load
    useEffect(() => {
        fetchPenjualan();
    }, []);

    // Fungsi untuk fetch penjualan dari Supabase
    const fetchPenjualan = async () => {
        try {
            setLoading(true);
            const data = await penjualanAPI.fetchPenjualan();
            setPenjualanData(data);
        } catch (error) {
            console.error("Gagal memuat data penjualan:", error);
        } finally {
            setLoading(false);
        }
    };

    // Hitung total penjualan
    const penjualanSelesai = penjualanData.filter(item => item.status === "Selesai");
    
    // Jumlahkan semua total dari penjualan yang selesai
    let totalPenjualan = 0;
    penjualanSelesai.forEach(item => {
        const angka = parseInt(item.total.replace(/\./g, ''));
        totalPenjualan = totalPenjualan + angka;
    });

    // Hitung profit (30% dari total penjualan)
    const profitPerBulan = totalPenjualan * 0.3;

    // Hitung produk terjual
    let produkTerjual = 0;
    penjualanSelesai.forEach(item => {
        produkTerjual = produkTerjual + item.jumlah;
    });

    // Data produk terlaris
    const produkTerlaris = [
        { nama: "Rok Midi", jumlah: 3 },
        { nama: "Dress Floral", jumlah: 2 },
        { nama: "Celana Kulot", jumlah: 2 },
        { nama: "Blouse Casual", jumlah: 1 },
        { nama: "Outer Cardigan", jumlah: 1 },
    ];

    // Tampilkan loading
    if (loading) {
        return (
            <div className="flex-1 bg-gray-50 p-6">
                <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Laporan</h1>
                    <p className="text-gray-500 text-sm mt-1">Laporan penjualan dan performa boutique</p>
                </div>

                {/* 4 Card Laporan - Loop dengan array */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-3">
                    <LaporanCard
                        label="Total Penjualan"
                        value={`Rp ${totalPenjualan.toLocaleString('id-ID')}`}
                        bgColor="bg-blue-500"
                    />
                    <LaporanCard
                        label="Profit Per Bulan"
                        value={`Rp ${profitPerBulan.toLocaleString('id-ID')}`}
                        bgColor="bg-green-500"
                    />
                    <LaporanCard
                        label="Produk Terjual"
                        value={`${produkTerjual} pcs`}
                        bgColor="bg-purple-500"
                    />
                    <LaporanCard
                        label="Transaksi Selesai"
                        value={penjualanSelesai.length}
                        bgColor="bg-orange-500"
                    />
                </div>

                {/* Tabel Produk Terlaris */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Produk Terlaris</h2>
                        <p className="text-sm text-gray-500">Top 5 produk dengan penjualan tertinggi</p>
                    </div>

                    {/* List Produk Terlaris - Loop untuk semua produk */}
                    <div className="space-y-4">
                        {produkTerlaris.map((produk, index) => (
                            <ProdukTerlarisItem
                                key={index}
                                produk={produk}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Info Catatan */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-800">
                        <strong>Catatan:</strong> Profit dihitung 30% dari total penjualan. 
                        Hanya transaksi "Selesai" yang dihitung.
                    </p>
                </div>
            </div>
        </div>
    );
}
