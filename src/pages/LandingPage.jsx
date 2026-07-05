import { Link } from "react-router-dom";
import { FaStore, FaUsers, FaShoppingBag, FaArrowRight } from "react-icons/fa";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
            {/* Navbar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <FaStore className="text-3xl text-rose-500" />
                        <h1 className="text-2xl font-bold text-gray-800">HSA Boutique</h1>
                    </div>
                    <div className="flex gap-4">
                        <Link 
                            to="/login" 
                            className="px-6 py-2 text-rose-600 font-medium hover:text-rose-700"
                        >
                            Login
                        </Link>
                        <Link 
                            to="/register" 
                            className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 font-medium"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">
                        Selamat Datang di HSA Boutique
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Sistem manajemen boutique modern dengan fitur lengkap untuk Admin dan Member. 
                        Kelola toko Anda dengan mudah dan nikmati benefit eksklusif!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link 
                            to="/register" 
                            className="px-8 py-4 bg-rose-500 text-white rounded-xl hover:bg-rose-600 font-bold text-lg flex items-center gap-2"
                        >
                            Daftar Sekarang <FaArrowRight />
                        </Link>
                        <Link 
                            to="/guest" 
                            className="px-8 py-4 bg-white text-rose-600 rounded-xl hover:bg-gray-50 font-bold text-lg border-2 border-rose-500"
                        >
                            Lihat Produk
                        </Link>
                    </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    {/* Feature 1: Admin */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                            <FaStore className="text-3xl text-rose-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Untuk Admin
                        </h3>
                        <ul className="text-gray-600 space-y-3">
                            <li>✅ Kelola produk boutique</li>
                            <li>✅ Pantau penjualan real-time</li>
                            <li>✅ Laporan keuangan lengkap</li>
                            <li>✅ Manajemen user</li>
                        </ul>
                    </div>

                    {/* Feature 2: Member */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <FaShoppingBag className="text-3xl text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Untuk Member
                        </h3>
                        <ul className="text-gray-600 space-y-3">
                            <li>✅ Diskon spesial 30%</li>
                            <li>✅ Gratis ongkir</li>
                            <li>✅ Sistem reward poin</li>
                            <li>✅ Akses pre-order</li>
                        </ul>
                    </div>

                    {/* Feature 3: Guest */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <FaUsers className="text-3xl text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Untuk Guest
                        </h3>
                        <ul className="text-gray-600 space-y-3">
                            <li>✅ Browse katalog produk</li>
                            <li>✅ Lihat info boutique</li>
                            <li>✅ Tracking pesanan</li>
                            <li>✅ Tanpa perlu login</li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-white rounded-2xl p-12 shadow-lg text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        Siap Bergabung?
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg">
                        Daftar sekarang dan dapatkan benefit eksklusif sebagai Member HSA Boutique
                    </p>
                    <Link 
                        to="/register" 
                        className="inline-block px-10 py-4 bg-rose-500 text-white rounded-xl hover:bg-rose-600 font-bold text-lg"
                    >
                        Daftar Gratis
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 mt-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-400">
                        © 2025 HSA Boutique. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
