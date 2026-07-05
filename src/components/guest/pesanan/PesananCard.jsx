// PesananCard.jsx
// Komponen untuk menampilkan 1 pesanan

import { FaClock, FaBox, FaTruck, FaCheckCircle } from "react-icons/fa";

export default function PesananCard({ order }) {
    // Fungsi untuk mendapatkan icon berdasarkan status
    const getIcon = (status) => {
        if (status === "Diproses") return <FaClock className="text-yellow-500" />;
        if (status === "Dikemas") return <FaBox className="text-blue-500" />;
        if (status === "Dikirim") return <FaTruck className="text-purple-500" />;
        return <FaCheckCircle className="text-green-500" />;
    };

    // Fungsi untuk mendapatkan warna badge berdasarkan status
    const getColor = (status) => {
        if (status === "Diproses") return "bg-yellow-100 text-yellow-700";
        if (status === "Dikemas") return "bg-blue-100 text-blue-700";
        if (status === "Dikirim") return "bg-purple-100 text-purple-700";
        return "bg-green-100 text-green-700";
    };

    return (
        <div className="bg-white rounded-xl shadow p-6">
            {/* Header: ID dan Status */}
            <div className="flex justify-between mb-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{order.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-2 ${getColor(order.status)}`}>
                            {getIcon(order.status)}
                            {order.status}
                        </span>
                    </div>
                    <p className="text-sm text-gray-500">{order.tanggal}</p>
                </div>
                <button className="text-blue-500 font-semibold text-sm">
                    Lihat Detail
                </button>
            </div>

            {/* Body: Produk dan Total */}
            <div className="border-t pt-4">
                <div className="flex justify-between mb-3">
                    <div>
                        <p className="font-semibold">{order.produk}</p>
                        <p className="text-sm text-gray-500">Jumlah: {order.jumlah} pcs</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Total</p>
                        <p className="text-xl font-bold">Rp {order.total}</p>
                    </div>
                </div>

                {/* Estimasi */}
                <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-700">
                        Estimasi tiba: {order.estimasi}
                    </p>
                </div>
            </div>
        </div>
    );
}
