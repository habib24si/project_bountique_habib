// ModelFormModal.jsx
// Komponen modal untuk form tambah model baru

import { FaTimes } from "react-icons/fa";

export default function ModelFormModal({ form, onClose, onSubmit, onChange, namaInputRef }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col">
                {/* Header Modal */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
                    <h3 className="text-lg font-bold text-gray-800">Tambah Model Baru</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FaTimes />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={onSubmit} className="flex flex-col flex-1 overflow-hidden">
                    <div className="p-6 space-y-4 overflow-y-auto flex-1">
                        {/* Nama Model */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Nama Model</label>
                            <input
                                ref={namaInputRef}
                                type="text"
                                required
                                value={form.nama}
                                onChange={(e) => onChange('nama', e.target.value)}
                                placeholder="Contoh: Dress Floral"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                        </div>

                        {/* Kategori */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Kategori</label>
                            <select
                                value={form.kategori}
                                onChange={(e) => onChange('kategori', e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            >
                                <option>Dress</option>
                                <option>Blouse</option>
                                <option>Rok</option>
                                <option>Celana</option>
                                <option>Outer</option>
                            </select>
                        </div>

                        {/* Ukuran */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Ukuran Tersedia</label>
                            <input
                                type="text"
                                required
                                value={form.ukuran}
                                onChange={(e) => onChange('ukuran', e.target.value)}
                                placeholder="Contoh: S, M, L, XL"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                        </div>

                        {/* Harga */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Harga</label>
                            <input
                                type="text"
                                required
                                value={form.harga}
                                onChange={(e) => onChange('harga', e.target.value)}
                                placeholder="350.000"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                        </div>

                        {/* Stok */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Stok</label>
                            <input
                                type="number"
                                required
                                value={form.stok}
                                onChange={(e) => onChange('stok', e.target.value)}
                                placeholder="25"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                        </div>

                        {/* Warna */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Warna Tersedia</label>
                            <input
                                type="text"
                                required
                                value={form.warna}
                                onChange={(e) => onChange('warna', e.target.value)}
                                placeholder="Contoh: Pink, White, Blue"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                        </div>

                        {/* Deskripsi */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Deskripsi</label>
                            <textarea
                                required
                                value={form.deskripsi}
                                onChange={(e) => onChange('deskripsi', e.target.value)}
                                placeholder="Deskripsi singkat tentang model"
                                rows="3"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                            />
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex gap-3 px-6 py-4 border-t border-gray-100 flex-shrink-0 bg-gray-50">
                        <button
                            type="button"
                            onClick={onClose}
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
    );
}
