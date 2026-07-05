import { useState, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import modelsData from "../../data/modelsData";

// Import komponen kecil
import ModelFormModal from "../../components/admin/model/ModelFormModal";
import ModelTableRow from "../../components/admin/model/ModelTableRow";

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

    // Fungsi untuk update field form
    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    // Fungsi untuk submit form
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

    // Fungsi untuk hapus model
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
