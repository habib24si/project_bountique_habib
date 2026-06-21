import { FaCrown, FaShoppingBag, FaGift, FaTags, FaStar, FaBox } from "react-icons/fa";

export default function MemberDashboard() {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <FaCrown className="text-yellow-500 text-3xl" />
                    <h1 className="text-3xl font-bold text-gray-800">Member Dashboard</h1>
                </div>
                <p className="text-gray-500">Selamat datang di area eksklusif member!</p>
            </div>

            {/* Status Member Card */}
            <div className="bg-purple-600 text-white rounded-lg p-6 mb-6 shadow">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm mb-1">Status Keanggotaan</p>
                        <h2 className="text-2xl font-bold mb-2">GOLD MEMBER</h2>
                        <p className="text-sm">Member sejak Januari 2024</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm mb-1">Poin Reward</p>
                        <h3 className="text-3xl font-bold">1,250</h3>
                        <p className="text-sm">Poin</p>
                    </div>
                </div>
            </div>

            {/* Benefit Cards - 3 Kotak */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Diskon */}
                <div className="bg-white rounded-lg p-6 shadow text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FaTags className="text-purple-600 text-xl" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Diskon 30%</h3>
                    <p className="text-sm text-gray-600">Untuk semua produk</p>
                </div>

                {/* Gratis Ongkir */}
                <div className="bg-white rounded-lg p-6 shadow text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FaShoppingBag className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Gratis Ongkir</h3>
                    <p className="text-sm text-gray-600">Ke seluruh Indonesia</p>
                </div>

                {/* Pre-Order */}
                <div className="bg-white rounded-lg p-6 shadow text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FaGift className="text-pink-600 text-xl" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Akses Pre-Order</h3>
                    <p className="text-sm text-gray-600">Koleksi terbaru</p>
                </div>
            </div>

            {/* Riwayat Belanja */}
            <div className="bg-white rounded-lg p-6 shadow mb-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaBox className="text-purple-600" />
                    Riwayat Belanja Terakhir
                </h3>
                <div className="space-y-3">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-semibold text-gray-800">Dress Floral Premium</p>
                            <p className="text-sm text-gray-500">12 Jan 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-800">Rp 350.000</p>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Selesai</span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-semibold text-gray-800">Blouse Casual White</p>
                            <p className="text-sm text-gray-500">8 Jan 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-800">Rp 250.000</p>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Selesai</span>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-semibold text-gray-800">Rok Midi Elegant</p>
                            <p className="text-sm text-gray-500">3 Jan 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-800">Rp 280.000</p>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Selesai</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Promo Khusus Member */}
            <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-6 shadow">
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-1">Promo Spesial Member!</h3>
                        <p className="text-sm text-gray-600">
                            Dapatkan diskon tambahan 10% untuk pembelian di atas Rp 500.000
                        </p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg">
                        Belanja Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
}
