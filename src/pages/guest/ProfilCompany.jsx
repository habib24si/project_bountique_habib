import { useNavigate } from "react-router-dom";
import { FaCrown, FaCheckCircle, FaStar, FaTshirt, FaUserFriends, FaAward } from "react-icons/fa";

export default function ProfilCompany() {
    const navigate = useNavigate();

    // Data statistik company
    const statistik = [
        { icon: FaAward, label: "Tahun Pengalaman", nilai: "15+", warna: "bg-yellow-500" },
        { icon: FaTshirt, label: "Koleksi Model", nilai: "500+", warna: "bg-pink-500" },
        { icon: FaUserFriends, label: "Member Terdaftar", nilai: "10K+", warna: "bg-blue-500" },
        { icon: FaStar, label: "Rating Kepuasan", nilai: "4.9★", warna: "bg-purple-500" }
    ];

    // Data benefit member
    const benefitMember = [
        { 
            icon: "👗", 
            judul: "Diskon Eksklusif", 
            deskripsi: "Dapatkan diskon hingga 30% untuk koleksi terbaru dan produk pilihan" 
        },
        { 
            icon: "🚚", 
            judul: "Gratis Ongkir", 
            deskripsi: "Free shipping untuk semua pembelian tanpa minimum order" 
        },
        { 
            icon: "🎁", 
            judul: "Akses Pre-Order", 
            deskripsi: "Akses pertama untuk koleksi terbaru dan limited edition items" 
        }
    ];

    // Data testimoni pelanggan
    const testimoni = [
        {
            nama: "Siti Nurhaliza",
            rating: 5,
            komentar: "Bajunya bagus banget! Bahannya adem dan modelnya trendy. Pelayanannya juga ramah. Pokoknya puas deh belanja di sini!",
            verified: true
        },
        {
            nama: "Ratna sati",
            rating: 5,
            komentar: "Koleksinya selalu update dan kualitasnya premium. Harganya worth it banget. Sudah langganan di sini sejak 2 tahun lalu.",
            verified: true
        },
        {
            nama: "Dewi Lestari",
            rating: 5,
            komentar: "Dress yang saya beli cocok banget untuk acara formal. Bahannya halus dan jahitannya rapi. Puas banget sama produknya!",
            verified: true
        }
    ];

    // Data produk terlaris (top selling)
    const topSelling = [
        {
            nama: "Satin Evening Gown",
            harga: "450.000",
            rating: 4,
            gambar: "", // Placeholder emoji
            outOfStock: true
        },
        {
            nama: "Suede Ankle Boots",
            harga: "350.000",
            rating: 4,
            gambar: "",
            outOfStock: false
        },
        {
            nama: "Floral Summer Blouse",
            harga: "180.000",
            rating: 4,
            gambar: "",
            outOfStock: false
        },
        {
            nama: "High-Waist Tailored Trousers",
            harga: "220.000",
            rating: 4,
            gambar: "",
            outOfStock: false
        }
    ];

    // Fungsi untuk ke halaman member
    const goToMember = () => {
        navigate('/member');
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Profil Company</h1>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Info Company */}
                <div className="bg-purple-600 text-white rounded-lg p-8 mb-6 shadow">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                            <FaTshirt className="text-purple-600 text-3xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">HSA BOUTIQUE</h1>
                            <p className="text-sm">Fashion & Style Center</p>
                        </div>
                    </div>

                    <p className="leading-relaxed mb-6">
                        Boutique modern untuk gaya fashion Anda. Kami menyediakan berbagai koleksi 
                        dress, blouse, rok, dan outfit pilihan dengan kualitas terbaik. Belanja mudah 
                        dengan sistem online yang lengkap dan pengiriman cepat.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm">
                            <FaCheckCircle className="text-green-300" />
                            <span>Kualitas Premium</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <FaCheckCircle className="text-green-300" />
                            <span>Model Terbaru</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <FaCheckCircle className="text-green-300" />
                            <span>Pengiriman Cepat</span>
                        </div>
                    </div>
                </div>

                {/* Statistik Company */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {statistik.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
                            <div className={`w-12 h-12 ${item.warna} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                                <item.icon className="text-white text-xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">{item.nilai}</h3>
                            <p className="text-sm text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* IKLAN MEMBER  */}
                <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-8 mb-6 shadow">
                    <div className="text-center mb-6">
                        <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3">
                            PROGRAM MEMBERSHIP EKSKLUSIF
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Keuntungan Jadi Member Boutique
                        </h2>
                        <p className="text-gray-600">
                            Nikmati berbagai benefit eksklusif, diskon spesial, dan akses prioritas 
                            untuk koleksi terbaru di Boutique Habib
                        </p>
                    </div>

                    {/* Grid Benefit */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {benefitMember.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-lg p-5 shadow">
                                <div className="text-4xl mb-3">{benefit.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-2">{benefit.judul}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{benefit.deskripsi}</p>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Button */}
                    <div className="flex justify-center">
                        <button 
                            onClick={goToMember}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-lg flex items-center gap-3 shadow-lg text-lg"
                        >
                            <FaCrown className="text-2xl" />
                            <span>DAFTAR MEMBER SEKARANG</span>
                        </button>
                    </div>
                </div>


                {/* TOP SELLING - Produk Terlaris */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        PENJUALAN TERBANYAK
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Produk terlaris yang paling banyak dibeli pelanggan kami
                    </p>

                    <div className="grid grid-cols-4 gap-4">
                        {topSelling.map((produk, index) => (
                            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                                {/* Badge Out of Stock */}
                                <div className="relative">
                                    {/* Gambar Produk (Placeholder dengan emoji) */}
                                    <div className="h-64 bg-gray-100 flex items-center justify-center">
                                        <span className="text-8xl">{produk.gambar}</span>
                                    </div>
                                    {produk.outOfStock && (
                                        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded text-xs font-bold">
                                            Out of Stock
                                        </div>
                                    )}
                                </div>

                                {/* Info Produk */}
                                <div className="p-4">
                                    {/* Nama Produk */}
                                    <h3 className="font-bold text-gray-800 mb-2">{produk.nama}</h3>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar 
                                                key={i} 
                                                className={i < produk.rating ? "text-yellow-400" : "text-gray-300"}
                                                size={14}
                                            />
                                        ))}
                                        <span className="text-xs text-gray-500 ml-1">{produk.rating}.0/5</span>
                                    </div>

                                    {/* Harga */}
                                    <p className="text-xl font-bold text-gray-800">
                                        Rp {produk.harga}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TESTIMONI PELANGGAN - Section Baru */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        OUR HAPPY CUSTOMERS
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Apa kata pelanggan kami tentang Boutique Habib
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                        {testimoni.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow">
                                {/* Rating Bintang */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar 
                                            key={i} 
                                            className={i < item.rating ? "text-yellow-400" : "text-gray-300"}
                                            size={18}
                                        />
                                    ))}
                                </div>

                                {/* Nama & Verified */}
                                <div className="flex items-center gap-2 mb-3">
                                    <h4 className="font-bold text-gray-800">{item.nama}</h4>
                                    {item.verified && (
                                        <FaCheckCircle className="text-green-500 text-sm" />
                                    )}
                                </div>

                                {/* Komentar */}
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    "{item.komentar}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Tambahan */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span>📍</span> Lokasi Toko
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                            Jl. Fashion Street No. 123, Rumbai Pusat
                        </p>
                        <p className="text-gray-600 text-sm">
                            Buka: Senin - Minggu (10:00 - 21:00)
                        </p>
                        <p className="text-gray-600 text-sm">
                            Tutup: kiamat
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span>📞</span> Hubungi Kami
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                            WhatsApp: 0812-3456-7890
                        </p>
                        <p className="text-gray-600 text-sm">
                            Email: info@Hsaboutique.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
