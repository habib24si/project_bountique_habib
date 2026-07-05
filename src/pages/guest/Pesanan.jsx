import { useState } from "react";
import PesananCard from "../../components/guest/pesanan/PesananCard";

export default function Pesanan() {
    // Data dummy pesanan (bisa diganti dengan fetch dari Supabase)
    const [pesananData] = useState([
        {
            id: 1,
            noPesanan: "HSA-20240115-001",
            tanggal: "15 Jan 2024",
            items: [
                { nama: "Dress Floral Premium", jumlah: 1, harga: "350.000" }
            ],
            total: "350.000",
            status: "Diproses",
            pembayaran: "Transfer BCA"
        },
        {
            id: 2,
            noPesanan: "HSA-20240112-002",
            tanggal: "12 Jan 2024",
            items: [
                { nama: "Blouse Casual", jumlah: 2, harga: "280.000" }
            ],
            total: "560.000",
            status: "Dikirim",
            pembayaran: "COD"
        }
    ]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Pesanan Saya
                </h1>
                <p className="text-gray-600">
                    Lacak status pesanan Anda
                </p>
            </div>

            {/* List Pesanan */}
            <div className="space-y-4">
                {pesananData.map((pesanan) => (
                    <PesananCard key={pesanan.id} pesanan={pesanan} />
                ))}
            </div>

            {/* Empty State (jika tidak ada pesanan) */}
            {pesananData.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl">
                    <p className="text-gray-500 text-lg">
                        Anda belum memiliki pesanan
                    </p>
                </div>
            )}
        </div>
    );
}
