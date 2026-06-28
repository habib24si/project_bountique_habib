import { useNavigate } from "react-router-dom";
import { FaTshirt, FaShippingFast, FaGift, FaTags, FaStar, FaShieldAlt, FaCrown, FaClock, FaUserPlus, FaChevronDown, FaQuoteLeft } from "react-icons/fa";

export default function ProfilCompany() {
    const navigate = useNavigate();

    const fiturList = [
        { icon: FaTshirt, judul: "Koleksi Premium", deskripsi: "500+ model baju berkualitas tinggi dengan bahan pilihan terbaik." },
        { icon: FaShippingFast, judul: "Pengiriman Cepat", deskripsi: "Gratis ongkir ke seluruh Indonesia tanpa minimum order." },
        { icon: FaTags, judul: "Diskon Eksklusif", deskripsi: "Hemat hingga 30% untuk setiap pembelian sebagai member." },
        { icon: FaGift, judul: "Reward & Poin", deskripsi: "Kumpulkan poin setiap belanja dan tukar dengan hadiah menarik." },
        { icon: FaStar, judul: "Akses Pre-Order", deskripsi: "Jadi yang pertama mendapatkan koleksi terbaru dan limited edition." },
        { icon: FaShieldAlt, judul: "Belanja Aman", deskripsi: "Transaksi terjamin aman dengan sistem pembayaran terpercaya." }
    ];

    const ulasanList = [
        { nama: "Siti Nurhaliza", rating: 5, komentar: "Bajunya bagus banget! Bahannya adem dan modelnya trendy. Pelayanannya juga ramah, pokoknya puas belanja di sini.", produk: "Dress Floral Summer" },
        { nama: "Ratna Sari", rating: 5, komentar: "Koleksinya selalu update dan kualitasnya premium. Harganya worth it banget, sudah langganan sejak 2 tahun lalu.", produk: "Blouse Casual Premium" },
        { nama: "Dewi Lestari", rating: 5, komentar: "Dress yang saya beli cocok banget untuk acara formal. Bahannya halus dan jahitannya rapi. Puas banget!", produk: "Rok Midi Elegant" }
    ];

    return (
        <div className="min-h-screen bg-stone-50">

            {/* ============================== */}
            {/* AREA TOP: Navbar + Hero        */}
            {/* ============================== */}

            {/* Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-rose-700 rounded-lg flex items-center justify-center">
                            <FaTshirt className="text-white text-lg" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-800 leading-tight">HSA BOUTIQUE</h1>
                            <p className="text-xs text-gray-500">Fashion & Style Center</p>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div className="flex items-center gap-6">
                        <a href="#fitur" className="text-sm text-gray-600 hover:text-rose-700 font-medium">Fitur</a>
                        <a href="#keuntungan" className="text-sm text-gray-600 hover:text-rose-700 font-medium">Keuntungan</a>
                        <button
                            onClick={() => navigate("/login")}
                            className="text-sm text-gray-600 hover:text-rose-700 font-medium"
                        >
                            Masuk
                        </button>
                        <button
                            onClick={() => navigate("/register")}
                            className="bg-rose-700 hover:bg-rose-800 text-white text-sm font-semibold px-5 py-2 rounded-lg"
                        >
                            Daftar Sekarang
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-rose-800 via-rose-700 to-pink-800 text-white">
                <div className="max-w-6xl mx-auto px-6 py-20 flex items-center gap-12">
                    {/* Left: Text Content */}
                    <div className="flex-1">
                        {/* Pre-title */}
                        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                            #1 Boutique Fashion Online
                        </span>

                        {/* Headline */}
                        <h2 className="text-4xl font-bold leading-tight mb-4">
                            Tampil Stylish Setiap Hari <br />
                            dengan Koleksi Terbaik Kami
                        </h2>

                        {/* Subheadline */}
                        <p className="text-lg text-rose-100 mb-8 leading-relaxed">
                            Dress, blouse, rok, dan outfit pilihan dengan kualitas premium.
                            Daftar sebagai member dan nikmati diskon eksklusif hingga 30%.
                        </p>

                        {/* CTAs */}
                        <div className="flex items-center gap-4">
                            {/* Primary CTA */}
                            <button
                                onClick={() => navigate("/register")}
                                className="bg-white text-rose-700 font-bold px-8 py-3.5 rounded-lg hover:bg-rose-50 shadow-lg flex items-center gap-2"
                            >
                                <FaUserPlus />
                                Daftar Jadi Member
                            </button>

                            {/* Secondary CTA */}
                            <a
                                href="#fitur"
                                className="border-2 border-white/60 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-white/10 flex items-center gap-2"
                            >
                                Pelajari Fitur
                                <FaChevronDown className="text-sm" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="flex-1 hidden md:flex justify-center">
                        <div className="relative">
                            <div className="w-72 h-72 bg-white/10 rounded-full flex items-center justify-center">
                                <div className="w-56 h-56 bg-white/15 rounded-full flex items-center justify-center">
                                    <FaTshirt className="text-white/80 text-8xl" />
                                </div>
                            </div>
                            {/* Floating badges */}
                            <div className="absolute -top-3 -right-3 bg-amber-400 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                500+ Model
                            </div>
                            <div className="absolute -bottom-3 -left-3 bg-emerald-400 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                10K+ Member
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ============================== */}
            {/* AREA MIDDLE: Value Proposition */}
            {/* ============================== */}

            {/* Feature Section */}
            <section id="fitur" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold text-rose-700 uppercase tracking-wider">Kenapa Memilih Kami</span>
                        <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-3">
                            Semua yang Kamu Butuhkan dalam Satu Platform
                        </h3>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Nikmati pengalaman belanja fashion terbaik dengan berbagai keuntungan eksklusif.
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div id="keuntungan" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fiturList.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                                    <item.icon className="text-rose-700 text-xl" />
                                </div>
                                <h4 className="font-bold text-gray-800 text-lg mb-2">{item.judul}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.deskripsi}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Slab - Stats Divider */}
            <section className="bg-rose-800 text-white py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl font-bold">15+</p>
                            <p className="text-sm text-rose-200 mt-1">Tahun Pengalaman</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">500+</p>
                            <p className="text-sm text-rose-200 mt-1">Koleksi Model</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">10K+</p>
                            <p className="text-sm text-rose-200 mt-1">Member Terdaftar</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">4.9</p>
                            <p className="text-sm text-rose-200 mt-1">Rating Kepuasan</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Ulasan Pengguna */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold text-rose-700 uppercase tracking-wider">Ulasan Pengguna</span>
                        <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-3">
                            Apa Kata Pelanggan Kami
                        </h3>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Ribuan pelanggan sudah merasakan pengalaman belanja terbaik di HSA Boutique.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ulasanList.map((item, index) => (
                            <div key={index} className="bg-stone-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                                <FaQuoteLeft className="text-rose-200 text-2xl mb-4" />
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">"{item.komentar}"</p>
                                <div className="flex gap-0.5 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < item.rating ? "text-amber-400" : "text-gray-300"} size={14} />
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 font-bold text-sm">
                                        {item.nama.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">{item.nama}</p>
                                        <p className="text-xs text-gray-400">Membeli {item.produk}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ============================== */}
            {/* AREA BOTTOM: CTA + Footer      */}
            {/* ============================== */}

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaCrown className="text-rose-700 text-2xl" />
                        </div>

                        <h3 className="text-3xl font-bold text-gray-800 mb-3">
                            Siap Jadi Member?
                        </h3>

                        {/* Value Repeat */}
                        <p className="text-gray-500 mb-2">
                            Daftar sekarang dan langsung dapatkan diskon 30%, gratis ongkir, serta akses eksklusif ke koleksi terbaru.
                        </p>

                        {/* Credibility Anchor */}
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-8">
                            <span className="flex items-center gap-1.5">
                                <FaClock className="text-green-500" />
                                Proses Cepat
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FaShieldAlt className="text-green-500" />
                                Akses Instan
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FaStar className="text-yellow-500" />
                                Gratis Daftar
                            </span>
                        </div>

                        {/* Single Action CTA */}
                        <button
                            onClick={() => navigate("/register")}
                            className="bg-rose-700 hover:bg-rose-800 text-white font-bold px-10 py-4 rounded-lg shadow-lg text-lg flex items-center gap-3 mx-auto"
                        >
                            <FaUserPlus />
                            Daftar Sekarang — Gratis!
                        </button>

                        <p className="text-xs text-gray-400 mt-4">
                            Sudah punya akun?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="text-rose-700 font-semibold cursor-pointer hover:underline"
                            >
                                Masuk di sini
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-900 text-white">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 bg-rose-700 rounded-lg flex items-center justify-center">
                                    <FaTshirt className="text-white text-sm" />
                                </div>
                                <span className="text-lg font-bold">HSA BOUTIQUE</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Boutique fashion online terpercaya dengan koleksi berkualitas dan harga terjangkau.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Navigasi</h4>
                            <ul className="space-y-2.5">
                                <li>
                                    <a href="#fitur" className="text-sm text-gray-300 hover:text-white">Fitur</a>
                                </li>
                                <li>
                                    <a href="#keuntungan" className="text-sm text-gray-300 hover:text-white">Keuntungan Member</a>
                                </li>
                                <li>
                                    <span
                                        onClick={() => navigate("/register")}
                                        className="text-sm text-gray-300 hover:text-white cursor-pointer"
                                    >
                                        Daftar Member
                                    </span>
                                </li>
                                <li>
                                    <span
                                        onClick={() => navigate("/login")}
                                        className="text-sm text-gray-300 hover:text-white cursor-pointer"
                                    >
                                        Masuk
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Hubungi Kami</h4>
                            <ul className="space-y-2.5 text-sm text-gray-300">
                                <li>WhatsApp: 0812-3456-7890</li>
                                <li>Email: info@Hsaboutique.com</li>
                                <li>Jl. Fashion Street No. 123, Rumbai Pusat</li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-800 mt-10 pt-6 text-center">
                        <p className="text-sm text-gray-500">
                            &copy; 2025 HSA BOUTIQUE. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
}
