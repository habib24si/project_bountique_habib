import { FaClock, FaBox, FaTruck, FaCheckCircle } from "react-icons/fa";

export default function Pesanan() {
    const orders = [
        {
            id: "ORD-001",
            tanggal: "15 Jun 2026",
            produk: "Dress Floral Summer",
            jumlah: 2,
            total: "700.000",
            status: "Dikemas",
            estimasi: "17 Jun 2026"
        },
        {
            id: "ORD-002",
            tanggal: "14 Jun 2026",
            produk: "Blouse Casual Premium",
            jumlah: 1,
            total: "250.000",
            status: "Dikirim",
            estimasi: "16 Jun 2026"
        },
        {
            id: "ORD-003",
            tanggal: "13 Jun 2026",
            produk: "Rok Midi Elegant",
            jumlah: 1,
            total: "200.000",
            status: "Diproses",
            estimasi: "18 Jun 2026"
        }
    ];

    const getIcon = (status) => {
        if (status === "Diproses") return;
        if (status === "Dikemas") return;
        if (status === "Dikirim") return;
        return <FaCheckCircle className="text-green-500" />;
    };

    const getColor = (status) => {
        if (status === "Diproses") return "bg-yellow-100 text-yellow-700";
        if (status === "Dikemas") return "bg-blue-100 text-blue-700";
        if (status === "Dikirim") return "bg-purple-100 text-purple-700";
        return "bg-green-100 text-green-700";
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Pesanan Saya</h1>
                <p className="text-gray-500">Lacak status pesanan Anda</p>
            </div>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white rounded-xl shadow p-6">
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

                            <div className="bg-blue-50 rounded-lg p-3">
                                <p className="text-sm text-blue-700">
                                    Estimasi tiba: {order.estimasi}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
