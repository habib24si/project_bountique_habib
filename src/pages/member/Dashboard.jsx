import { FaTags, FaShoppingBag, FaGift, FaBox } from "react-icons/fa";

export default function MemberDashboard() {
    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-sm text-gray-500 mt-1">Selamat datang di area member</p>
            </div>

            {/* Status Member */}
            <div className="bg-rose-700 text-white rounded-lg p-5 mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm opacity-80">Status Keanggotaan</p>
                        <h2 className="text-xl font-bold mt-1">GOLD MEMBER</h2>
                        <p className="text-xs opacity-70 mt-1">Member sejak Januari 2024</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm opacity-80">Poin Reward</p>
                        <h3 className="text-2xl font-bold mt-1">1,250</h3>
                    </div>
                </div>
            </div>

            {/* Benefit */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-5 border border-gray-100">
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-3">
                        <FaTags className="text-rose-700" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">Diskon 30%</h3>
                    <p className="text-xs text-gray-500 mt-1">Untuk semua produk</p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-gray-100">
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-3">
                        <FaShoppingBag className="text-rose-700" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">Gratis Ongkir</h3>
                    <p className="text-xs text-gray-500 mt-1">Ke seluruh Indonesia</p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-gray-100">
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-3">
                        <FaGift className="text-rose-700" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">Akses Pre-Order</h3>
                    <p className="text-xs text-gray-500 mt-1">Koleksi terbaru</p>
                </div>
            </div>

            {/* Riwayat Belanja */}
            <div className="bg-white rounded-lg p-5 border border-gray-100 mb-6">
                <h3 className="font-semibold text-gray-800 text-sm mb-4 flex items-center gap-2">
                    <FaBox className="text-rose-700 text-xs" />
                    Riwayat Belanja Terakhir
                </h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div>
                            <p className="font-medium text-sm text-gray-800">Dress Floral Premium</p>
                            <p className="text-xs text-gray-400">12 Jan 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm text-gray-800">Rp 350.000</p>
                            <span className="text-xs text-green-600">Selesai</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div>
                            <p className="font-medium text-sm text-gray-800">Blouse Casual White</p>
                            <p className="text-xs text-gray-400">8 Jan 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm text-gray-800">Rp 250.000</p>
                            <span className="text-xs text-green-600">Selesai</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3">
                        <div>
                            <p className="font-medium text-sm text-gray-800">Rok Midi Elegant</p>
                            <p className="text-xs text-gray-400">3 Jan 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm text-gray-800">Rp 280.000</p>
                            <span className="text-xs text-green-600">Selesai</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Promo Member */}
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-800 text-sm">Promo Spesial Member</h3>
                        <p className="text-xs text-gray-500 mt-1">
                            Diskon tambahan 10% untuk pembelian di atas Rp 500.000
                        </p>
                    </div>
                    <button className="bg-rose-700 hover:bg-rose-800 text-white text-sm font-semibold px-5 py-2 rounded-lg">
                        Belanja Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
}
