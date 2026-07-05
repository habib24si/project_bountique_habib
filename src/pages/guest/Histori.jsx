import { useState } from "react";
import PesananCard from "../../components/guest/pesanan/PesananCard";

export default function Histori() {
    // Data dummy histori pesanan (bisa diganti dengan fetch dari Supabase)
    const [historiData] = useState([
        {
            id: 1,
            noPesanan: "HSA-20240110-003",
            tanggal: "10 Jan 2024",
            items: [
                { nama: "Rok Plisket", jumlah: 1, harga: "280.000" },
                { nama: "Blouse White", jumlah: 1, harga: "250.000" }
            ],
            total: "530.000",
            status: "Selesai",
            pembayaran: "Transfer BCA"
        },
        {
            id: 2,
            noPesanan: "HSA-20240108-004",
            tanggal: "8 Jan 2024",
            items: [
                { nama: "Celana Kulot", jumlah: 1, harga: "320.000" }
            ],
            total: "320.000",
            status: "Selesai",
            pembayaran: "COD"
        },
        {
            id: 3,
            noPesanan: "HSA-20240105-005",
            tanggal: "5 Jan 2024",
            items: [
                { nama: "Dress Evening", jumlah: 1, harga: "450.000" }
            ],
            total: "450.000",
            status: "Selesai",
            pembayaran: "Transfer BCA"
        }
    ]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Histori Pesanan
                </h1>
                <p className="text-gray-600">
                    Riwayat pembelian Anda
                </p>
            </div>

            {/* List Histori */}
            <div className="space-y-4">
                {historiData.map((pesanan) => (
                    <PesananCard key={pesanan.id} pesanan={pesanan} />
                ))}
            </div>

            {/* Empty State */}
            {historiData.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl">
                    <p className="text-gray-500 text-lg">
                        Belum ada histori pembelian
                    </p>
                </div>
            )}
        </div>
    );
}
