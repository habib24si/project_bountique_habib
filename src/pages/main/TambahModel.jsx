import { useState, useEffect, useRef } from "react";
import { FaPlus, FaTimes, FaTshirt } from "react-icons/fa";
import modelsData from "../../data/modelsData";

export default function TambahModel() {
    // useRef untuk auto focus input nama saat form dibuka
    const namaInputRef = useRef(null);
    
    // State menggunakan data dari JSON
    const [models, setModels] = useState(modelsData);
    
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ 
        nama: "", 
        kategori: "Dress", 
        ukuran: "", 
        harga: "", 
        stok: "",
        warna: "",
        deskripsi: ""
    });

    // useEffect untuk auto focus ke input nama saat form dibuka
    useEffect(() => {
        if (showForm && namaInputRef.current) {
            namaInputRef.current.focus();
        }
    }, [showForm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newModel = {
            id: models.length > 0 ? Math.max(...models.map(m => m.id)) + 1 : 1,
            nama: form.nama,
            kategori: form.kategori,
            ukuran: form.ukuran,
            harga: form.harga,
            stok: parseInt(form.stok),
            warna: form.warna,
            deskripsi: form.deskripsi
        };
        setModels([...models, newModel]);
        setForm({ nama: "", kategori: "Dress", ukuran: "", harga: "", stok: "", warna: "", deskripsi: "" });
        setShowForm(false);
    };

    const handleDelete = (id) => {
        setModels(models.filter(m => m.id !== id));
    };

    return (
        <div className="flex-1 bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Tambah Model Baju</h1>
                        <p className="text-gray-500 text-sm mt-1">Kelola koleksi model baju boutique Anda</p>
                    </div>
                    <button
                        onClick={() => setShowForm(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                        <FaPlus /> Tambah Model
                    </button>
                </div>

                {/* Modal Form */}
                {showForm && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
                                <h3 className="text-lg font-bold text-gray-800">Tambah Model Baru</h3>
                                <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">
                                    <FaTimes />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
                                <div className="p-6 space-y-4 overflow-y-auto flex-1">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-1">Nama Model</label>
                                    <input
                                        ref={namaInputRef}
                                        type="text" 
                                        required
                                        value={form.nama}
                                        onChange={e => setForm({ ...form, nama: e.target.value })}
                                        placeholder="Contoh: Dress Floral"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-1">Kategori</label>
                                    <select
                                        value={form.kategori}
                                        onChange={e => setForm({ ...form, kategori: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    >
                                        <option>Dress</option>
                                        <option>Blouse</option>
                                        <option>Rok</option>
                                        <option>Celana</option>
                                        <option>Outer</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-1">Ukuran Tersedia</label>
                                    <input
                                        type="text" required
                                        value={form.ukuran}
                                        onChange={e => setForm({ ...form, ukuran: e.target.value })}
                                        placeholder="Contoh: S, M, L, XL"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-1">Harga</label>
                                    <input
                                        type="text" required
                                        value={form.harga}
                                        onChange={e => setForm({ ...form, harga: e.target.value })}
                                        placeholder="350.000"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-1">Stok</label>
                                    <input
                                        type="number" required
                                        value={form.stok}
                                        onChange={e => setForm({ ...form, stok: e.target.value })}
                                        placeholder="25"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-1">Warna Tersedia</label>
                                    <input
                                        type="text" required
                                        value={form.warna}
                                        onChange={e => setForm({ ...form, warna: e.target.value })}
                                        placeholder="Contoh: Pink, White, Blue"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-1">Deskripsi</label>
                                    <textarea
                                        required
                                        value={form.deskripsi}
                                        onChange={e => setForm({ ...form, deskripsi: e.target.value })}
                                        placeholder="Deskripsi singkat tentang model"
                                        rows="3"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                                    />
                                </div>
                                </div>
                                <div className="flex gap-3 px-6 py-4 border-t border-gray-100 flex-shrink-0 bg-gray-50">
                                    <button 
                                        type="button" 
                                        onClick={() => setShowForm(false)}
                                        className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-semibold hover:bg-gray-100 transition-colors"
                                    >
                                        Batal
                                    </button>
                                    <button 
                                        type="submit"
                                        className="flex-1 px-4 py-2.5 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                                    >
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* List View */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">No</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nama Model</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Kategori</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ukuran</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Harga</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stok</th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {models.map((model, index) => (
                                    <tr key={model.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <FaTshirt className="text-blue-500" />
                                                </div>
                                                <span className="font-semibold text-gray-800">{model.nama}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                                {model.kategori}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{model.ukuran}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-800">Rp {model.harga}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                model.stok > 20 ? 'bg-green-100 text-green-700' : 
                                                model.stok > 10 ? 'bg-yellow-100 text-yellow-700' : 
                                                'bg-red-100 text-red-700'
                                            }`}>
                                                {model.stok} pcs
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => handleDelete(model.id)}
                                                className="px-3 py-1.5 bg-red-100 text-red-600 rounded-lg text-xs font-medium hover:bg-red-200 transition-colors"
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
