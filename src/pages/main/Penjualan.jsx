import { useState } from "react";
import { FaShoppingBag, FaCalendar, FaDollarSign, FaBox } from "react-icons/fa";
import penjualanData from "../../data/penjualanData";

export default function Penjualan() {
    const [penjualan] = useState(penjualanData);

    // ========== HITUNG STATISTIK SEDERHANA ==========
    
    // 1. Total Penjualan (jumlahkan semua total yang selesai)
    let totalPenjualan = 0;
    penjualan.forEach(item => {
        if (item.status === "Selesai") {
            // Hapus titik dari "700.000" jadi "700000"
            const angka = parseInt(item.total.replace(/\./g, ''));
            totalPenjualan = totalPenjualan + angka;
        }
    });

    // 2. Total Item Terjual (jumlahkan semua jumlah)
    let totalItem = 0;
    penjualan.forEach(item => {
        totalItem = totalItem + item.jumlah;
    });

    // 3. Hitung berapa transaksi yang selesai
    let penjualanSelesai = 0;
    penjualan.forEach(item => {
        if (item.status === "Selesai") {
            penjualanSelesai = penjualanSelesai + 1;
        }
    });

    return (
        <div className="flex-1 bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Penjualan</h1>
                    <p className="text-gray-500 text-sm mt-1">Data penjualan boutique</p>
                </div>

                {/* 4 Card Statistik */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    
                    {/* Card 1: Total Transaksi */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaShoppingBag className="text-blue-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Transaksi</p>
                                <p className="text-2xl font-bold text-gray-800">{penjualan.length}</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Total Penjualan */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <FaDollarSign className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Penjualan</p>
                                <p className="text-xl font-bold text-gray-800">Rp {totalPenjualan.toLocaleString('id-ID')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Item Terjual */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <FaBox className="text-purple-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Item Terjual</p>
                                <p className="text-2xl font-bold text-gray-800">{totalItem}</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Transaksi Selesai */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <FaCalendar className="text-orange-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Selesai</p>
                                <p className="text-2xl font-bold text-gray-800">{penjualanSelesai}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabel Penjualan */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800">Riwayat Penjualan</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">No</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Tanggal</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Model</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Jumlah</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Harga Satuan</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Total</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {penjualan.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.tanggal}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-800">{item.model}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.jumlah} pcs</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Rp {item.harga}</td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">Rp {item.total}</td>
                                        <td className="px-6 py-4">
                                            {item.status === "Selesai" ? (
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                    Selesai
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                                                    Pending
                                                </span>
                                            )}
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
