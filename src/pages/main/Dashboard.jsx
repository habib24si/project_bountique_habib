import { FaTshirt, FaTruck, FaStore, FaTag, FaCut, FaEllipsisH } from "react-icons/fa";

export default function Dashboard() {
    const expensesData = [
        { category: "Stok Pakaian", time: "6:12 pm", desc: "Pembelian koleksi baru", amount: "-326.800", icon: FaTshirt, color: "bg-blue-400" },
        { category: "Pengiriman", time: "6:12 pm", desc: "Biaya kirim supplier", amount: "-15.000", icon: FaTruck, color: "bg-purple-500" },
        { category: "Sewa Toko", time: "6:12 pm", desc: "Bayar sewa bulanan", amount: "-185.750", icon: FaStore, color: "bg-orange-500" },
    ];

    const expensesHistory = [
        { category: "Marketing", time: "6:12 pm", desc: "Iklan media sosial", amount: "-166.000", icon: FaTag, color: "bg-red-500" },
        { category: "Jahit & Alterasi", time: "6:12 pm", desc: "Biaya penjahit", amount: "-35.200", icon: FaCut, color: "bg-green-500" },
    ];

    const categories = [
        { name: "Stok Pakaian", amount: "872.400", color: "bg-green-500", width: "70%" },
        { name: "Aksesoris", amount: "1.378.200", color: "bg-teal-500", width: "85%" },
        { name: "Sewa & Operasional", amount: "928.500", color: "bg-teal-400", width: "60%" },
        { name: "Marketing", amount: "420.700", color: "bg-teal-300", width: "45%" },
        { name: "Gaji Karyawan", amount: "520.000", color: "bg-teal-200", width: "55%" },
    ];

    const chartData = [40, 60, 45, 70, 50, 80, 55, 75, 60, 85, 70, 100];

    return (
        <div className="flex flex-1 bg-gray-50">
            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="max-w-4xl">
                    <div className="bg-white rounded-3xl shadow-sm p-8">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-800">Pengeluaran Boutique</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <img src="/img/TAYO.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="/img/TAYO.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="/img/wahyu.png" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                                        <span className="text-xs text-gray-600">+2</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="mb-8">
                            <div className="flex items-end justify-between h-48 gap-3">
                                {chartData.map((height, i) => (
                                    <div key={i} className="flex-1 flex flex-col justify-end">
                                        <div 
                                            className={`w-full rounded-t-lg transition-all ${i === chartData.length - 1 ? 'bg-blue-500' : 'bg-blue-200'}`}
                                            style={{ height: `${height}%` }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hari Ini Section */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Hari Ini</h2>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <FaEllipsisH />
                                </button>
                            </div>
                            <div className="space-y-3">
                                {expensesData.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white`}>
                                                <item.icon />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">{item.category}</h3>
                                                <p className="text-sm text-gray-400">{item.time} • {item.desc}</p>
                                            </div>
                                        </div>
                                        <span className="font-bold text-gray-800">{item.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Senin Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Senin, 23 Maret 2020</h2>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <FaEllipsisH />
                                </button>
                            </div>
                            <div className="space-y-3">
                                {expensesHistory.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white`}>
                                                <item.icon />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">{item.category}</h3>
                                                <p className="text-sm text-gray-400">{item.time} • {item.desc}</p>
                                            </div>
                                        </div>
                                        <span className="font-bold text-gray-800">{item.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Where your money go */}
            <div className="w-96 bg-gray-50 p-6">
                <div className="bg-white rounded-3xl shadow-sm p-6 sticky top-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Kemana uang boutique pergi?</h2>
                    <div className="space-y-4 mb-8">
                        {categories.map((cat, i) => (
                            <div key={i}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-600">{cat.name}</span>
                                    <span className="text-sm font-bold text-gray-800">{cat.amount}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className={`${cat.color} h-2 rounded-full`} style={{ width: cat.width }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Save more money card */}
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="mb-4 flex gap-2">
                                <div className="w-16 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg"></div>
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg"></div>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Hemat lebih banyak</h3>
                            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                                Kelola pengeluaran boutique dengan lebih efisien dan tingkatkan profit margin Anda.
                            </p>
                            <button className="w-full bg-gray-800 text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-900 transition-colors">
                                LIHAT TIPS
                            </button>
                        </div>
                        <div className="absolute -right-8 -bottom-8 opacity-10">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                                <circle cx="60" cy="60" r="50" fill="#93C5FD"/>
                                <path d="M40 60 L50 70 L80 40" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
