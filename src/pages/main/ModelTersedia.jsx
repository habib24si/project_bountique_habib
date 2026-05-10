import { useState, useEffect } from "react";
import { FaTshirt, FaTag, FaBox, FaSync } from "react-icons/fa";
import modelsData from "../../data/modelsData";

export default function ModelTersedia() {
    // Load data dari localStorage atau gunakan data default
    const [models, setModels] = useState(() => {
        const savedModels = localStorage.getItem('modelsData');
        return savedModels ? JSON.parse(savedModels) : modelsData;
    });

    // Update data ketika localStorage berubah
    useEffect(() => {
        const handleStorageChange = () => {
            const savedModels = localStorage.getItem('modelsData');
            if (savedModels) {
                setModels(JSON.parse(savedModels));
            }
        };

        window.addEventListener('storage', handleStorageChange);
        
        // Check localStorage setiap kali component di-mount
        const savedModels = localStorage.getItem('modelsData');
        if (savedModels) {
            setModels(JSON.parse(savedModels));
        }

        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Fungsi untuk refresh data manual
    const refreshData = () => {
        const savedModels = localStorage.getItem('modelsData');
        if (savedModels) {
            setModels(JSON.parse(savedModels));
        }
    };

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

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaTshirt className="text-blue-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Model</p>
                                <p className="text-2xl font-bold text-gray-800">{models.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <FaBox className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Stok</p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {models.reduce((sum, m) => sum + m.stok, 0)} pcs
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <FaTag className="text-purple-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Kategori</p>
                                <p className="text-2xl font-bold text-gray-800">5</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {models.map((model) => (
                        <div key={model.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100 group">
                            {/* Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                                <FaTshirt className="text-6xl text-blue-400 opacity-50" />
                            </div>
                            
                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-bold text-gray-800 text-lg">{model.nama}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(model.kategori)}`}>
                                        {model.kategori}
                                    </span>
                                </div>
                                
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{model.deskripsi}</p>
                                
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Warna:</span>
                                        <span className="text-gray-700 font-medium">{model.warna}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Stok:</span>
                                        <span className={`font-semibold ${
                                            model.stok > 20 ? 'text-green-600' : 
                                            model.stok > 10 ? 'text-yellow-600' : 
                                            'text-red-600'
                                        }`}>
                                            {model.stok} pcs
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-500">Harga</p>
                                        <p className="text-xl font-bold text-gray-800">Rp {model.harga}</p>
                                    </div>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
