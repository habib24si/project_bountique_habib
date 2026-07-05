import { useState, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { modelsAPI } from "../../services/modelsAPI";

// Import komponen kecil
import ModelFormModal from "../../components/admin/model/ModelFormModal";
import ModelTableRow from "../../components/admin/model/ModelTableRow";

export default function TambahModel() {
    // useRef untuk auto focus input nama saat form dibuka
    const namaInputRef = useRef(null);

    // State untuk models dari Supabase
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
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

    // useEffect untuk fetch data models dari Supabase
    useEffect(() => {
        fetchModels();
    }, []);

    // useEffect untuk auto focus ke input nama saat form dibuka
    useEffect(() => {
        if (showForm && namaInputRef.current) {
            namaInputRef.current.focus();
        }
    }, [showForm]);

    // Fungsi untuk fetch semua models
    const fetchModels = async () => {
        try {
            setLoading(true);
            const data = await modelsAPI.fetchModels();
            setModels(data);
        } catch (error) {
            console.error("Gagal memuat data models:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fungsi untuk update field form
    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    // Fungsi untuk submit form (tambah model baru ke Supabase)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newModel = {
                nama: form.nama,
                kategori: form.kategori,
                ukuran: form.ukuran,
                harga: form.harga,
                stok: parseInt(form.stok),
                warna: form.warna,
                deskripsi: form.deskripsi
            };
            
            await modelsAPI.createModel(newModel);
            await fetchModels(); // Refresh data
            setForm({ nama: "", kategori: "Dress", ukuran: "", harga: "", stok: "", warna: "", deskripsi: "" });
            setShowForm(false);
        } catch (error) {
            console.error("Gagal menambahkan model:", error);
        }
    };

    // Fungsi untuk hapus model dari Supabase
    const handleDelete = async (id) => {
        if (!confirm("Yakin ingin menghapus model ini?")) return;
        
        try {
            await modelsAPI.deleteModel(id);
            await fetchModels(); // Refresh data
        } catch (error) {
            console.error("Gagal menghapus model:", error);
        }
    };

    // Tampilkan loading
    if (loading) {
        return (
            <div className="flex-1 bg-gray-50 p-6">
                <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Loading...</p>
                </div>
            </div>
        );
    }

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
                        className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                        <FaPlus /> Tambah Model
                    </button>
                </div>

                {/* Modal Form - Pakai Komponen */}
                {showForm && (
                    <ModelFormModal
                        form={form}
                        onClose={() => setShowForm(false)}
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                        namaInputRef={namaInputRef}
                    />
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
                                {/* Loop untuk semua model - pakai komponen */}
                                {models.map((model, index) => (
                                    <ModelTableRow
                                        key={model.id}
                                        model={model}
                                        index={index}
                                        onDelete={handleDelete}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
