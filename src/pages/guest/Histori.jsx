import { FaCheckCircle, FaBox, FaStar } from "react-icons/fa";

export default function Histori() {
    const history = [
        {
            id: "ORD-099",
            tanggal: "10 Jun 2026",
            produk: "Outer Cardigan Soft",
            jumlah: 1,
            total: "300.000",
            rating: 5
        },
        {
            id: "ORD-098",
            tanggal: "08 Jun 2026",
            produk: "Celana Kulot Modern",
            jumlah: 2,
            total: "560.000",
            rating: 4
        },
        {
            id: "ORD-097",
            tanggal: "05 Jun 2026",
            produk: "Dress Floral Summer",
            jumlah: 1,
            total: "350.000",
            rating: 5
        },
        {
            id: "ORD-096",
            tanggal: "01 Jun 2026",
            produk: "Blouse Casual Premium",
            jumlah: 3,
            total: "750.000",
            rating: 5
        }
    ];

    const totalItem = history.reduce((sum, item) => sum + item.jumlah, 0);
    const totalBelanja = history.reduce((sum, item) => sum + parseInt(item.total.replace(/\./g, '')), 0);

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Riwayat Pesanan</h1>
                <p className="text-gray-500">Lihat semua pesanan yang telah selesai</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-5 shadow">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <FaCheckCircle className="text-green-500 text-xl" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Pesanan</p>
                            <p className="text-2xl font-bold">{history.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FaBox className="text-blue-500 text-xl" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Item Dibeli</p>
                            <p className="text-2xl font-bold">{totalItem}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <FaStar className="text-purple-500 text-xl" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Belanja</p>
                            <p className="text-2xl font-bold">Rp {totalBelanja.toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Order ID</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Tanggal</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Produk</th>
                            <th className="px-6 py-3 text-center text-sm font-semibold">Jumlah</th>
                            <th className="px-6 py-3 text-right text-sm font-semibold">Total</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="px-6 py-4 font-medium">{item.id}</td>
                                <td className="px-6 py-4">{item.tanggal}</td>
                                <td className="px-6 py-4">{item.produk}</td>
                                <td className="px-6 py-4 text-center">{item.jumlah} pcs</td>
                                <td className="px-6 py-4 text-right font-semibold">Rp {item.total}</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar 
                                                key={i} 
                                                className={i < item.rating ? "text-yellow-400" : "text-gray-300"}
                                                size={14}
                                            />
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
