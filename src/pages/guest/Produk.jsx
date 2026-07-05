import { useState, useEffect } from "react";
import { modelsAPI } from "../../services/modelsAPI";
import ProdukCard from "../../components/guest/produk/ProdukCard";

export default function Produk() {
    const [modelsData, setModelsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterKategori, setFilterKategori] = useState("Semua");

    // Fetch data produk dari Supabase
    useEffect(() => {
        fetchModels();
    }, []);

    const fetchModels = async () => {
        try {
            setLoading(true);
            const data = await modelsAPI.fetchModels();
            setModelsData(data);
        } catch (error) {
            console.error("Gagal memuat produk:", error);
        } finally {
            setLoading(false);
        }
    };

    // Filter produk berdasarkan kategori
    const filteredData = filterKategori === "Semua" 
        ? modelsData 
        : modelsData.filter(item => item.kategori === filterKategori);

    // Kategori untuk filter
    const kategoriList = ["Semua", "Dress", "Blouse", "Rok", "Celana", "Outer"];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Katalog Produk
                </h1>
                <p className="text-gray-600">
                    Lihat koleksi terbaru kami
                </p>
            </div>

            {/* Filter Kategori */}
            <div className="bg-white rounded-xl p-4 shadow mb-6">
                <p className="text-sm text-gray-600 mb-3">Filter Kategori:</p>
                <div className="flex gap-2 flex-wrap">
                    {kategoriList.map((kategori) => (
                        <button
                            key={kategori}
                            onClick={() => setFilterKategori(kategori)}
                            className={`px-4 py-2 rounded-lg font-medium transition ${
                                filterKategori === kategori
                                    ? "bg-rose-500 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {kategori}
                        </button>
                    ))}
                </div>
            </div>

            {/* Loading */}
            {loading && (
                <div className="text-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto"></div>
                    <p className="text-gray-600 mt-4">Memuat produk...</p>
                </div>
            )}

            {/* Grid Produk */}
            {!loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredData.map((produk) => (
                        <ProdukCard key={produk.id} produk={produk} />
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && filteredData.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl">
                    <p className="text-gray-500 text-lg">
                        Tidak ada produk di kategori {filterKategori}
                    </p>
                </div>
            )}
        </div>
    );
}
