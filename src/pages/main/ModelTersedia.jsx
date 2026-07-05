import { useState } from "react";
import { FaTshirt, FaTag, FaBox, FaSync } from "react-icons/fa";
import modelsData from "../../data/modelsData";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty";

// Import komponen kecil
import StatCard from "../../components/admin/penjualan/StatCard";
import ModelCard from "../../components/admin/model/ModelCard";

export default function ModelTersedia() {
    // State menggunakan data dari JSON
    const [models, setModels] = useState(modelsData);

    // Fungsi untuk refresh data dari JSON
    const refreshData = () => {
        setModels([...modelsData]);
    };

    // Fungsi untuk mendapatkan warna kategori
    const getCategoryColor = (kategori) => {
        const colors = {
            "Dress": "bg-pink-100 text-pink-700",
            "Blouse": "bg-blue-100 text-blue-700",
            "Rok": "bg-purple-100 text-purple-700",
            "Outer": "bg-orange-100 text-orange-700",
            "Celana": "bg-green-100 text-green-700",
        };
        return colors[kategori] || "bg-gray-100 text-gray-700";
    };

    return (
        <div className="flex-1 bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Model Tersedia</h1>
                        <p className="text-gray-500 text-sm mt-1">Koleksi model baju yang tersedia di boutique</p>
                    </div>
                    <button
                        onClick={refreshData}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                    >
                        <FaSync /> Refresh
                    </button>
                </div>

                {/* Stats - 3 Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <StatCard
                        icon={<FaTshirt />}
                        label="Total Model"
                        value={models.length}
                        bgColor="bg-blue-100"
                        iconColor="text-blue-500"
                    />
                    <StatCard
                        icon={<FaBox />}
                        label="Total Stok"
                        value={`${models.reduce((sum, m) => sum + m.stok, 0)} pcs`}
                        bgColor="bg-green-100"
                        iconColor="text-green-500"
                    />
                    <StatCard
                        icon={<FaTag />}
                        label="Kategori"
                        value={5}
                        bgColor="bg-purple-100"
                        iconColor="text-purple-500"
                    />
                </div>

                {/* Card Grid */}
                {models.length === 0 ? (
                    <Empty className="min-h-[400px]">
                        <EmptyHeader>
                            <EmptyMedia variant="icon">
                                <FaTshirt />
                            </EmptyMedia>
                            <EmptyTitle>Belum Ada Model</EmptyTitle>
                            <EmptyDescription>
                                Belum ada model baju yang tersedia. Tambahkan model baru untuk memulai.
                            </EmptyDescription>
                        </EmptyHeader>
                        <EmptyContent>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Tambah Model
                            </button>
                        </EmptyContent>
                    </Empty>
                ) : (
                    // Loop untuk semua model - pakai komponen
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {models.map((model) => (
                            <ModelCard
                                key={model.id}
                                model={model}
                                getCategoryColor={getCategoryColor}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
