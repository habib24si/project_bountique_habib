import { FaDollarSign, FaChartLine, FaBox, FaTrophy } from "react-icons/fa";
import penjualanData from "../../data/penjualanData";

export default function Laporan() {
    // hitung total penjualan
    const penjualanSelesai = penjualanData.filter(item => item.status === "Selesai");
    
    // Jumlahkan semua total dari penjualan yang selesai
    let totalPenjualan = 0;
    penjualanSelesai.forEach(item => {
        const angka = parseInt(item.total.replace(/\./g, ''));
        totalPenjualan = totalPenjualan + angka;
    });

    // hitung profit
    const profitPerBulan = totalPenjualan * 0.3;

    // hitung produk terjual
    let produkTerjual = 0;
    penjualanSelesai.forEach(item => {
        produkTerjual = produkTerjual + item.jumlah;
    });

    // produk terlaris
    const produkTerlaris = [
        { nama: "Rok Midi", jumlah: 3 },
        { nama: "Dress Floral", jumlah: 2 },
        { nama: "Celana Kulot", jumlah: 2 },
        { nama: "Blouse Casual", jumlah: 1 },
        { nama: "Outer Cardigan", jumlah: 1 },
    ];

    return (
        <div className="flex-1 bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Laporan</h1>
                    <p className="text-gray-500 text-sm mt-1">Laporan penjualan dan performa boutique</p>
                </div>

                {/* 4 Card  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-3">
                    
                    {/* Total Penjualan */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                        <div className="">
                            
                        </div>
                        <p className="text-sm opacity-90 mb-1">Total Penjualan</p>
                        <p className="text-3xl font-bold">Rp {totalPenjualan.toLocaleString('id-ID')}</p>
                    </div>

                    {/*  Profit */}
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
                        <div className="">
                            
                        </div>
                        <p className="text-sm opacity-90 mb-1">Profit Per Bulan</p>
                        <p className="text-3xl font-bold">Rp {profitPerBulan.toLocaleString('id-ID')}</p>
                    </div>

                    {/* Produk Terjual */}
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                        <div className="">
                            
                        </div>
                        <p className="text-sm opacity-90 mb-1">Produk Terjual</p>
                        <p className="text-3xl font-bold">{produkTerjual} pcs</p>
                    </div>

                    {/*  Transaksi Selesai */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
                        <div className="">
                           
                        </div>
                        <p className="text-sm opacity-90 mb-1">Transaksi Selesai</p>
                        <p className="text-3xl font-bold">{penjualanSelesai.length}</p>
                    </div>
                </div>

                {/* Tabel Produk Terlaris */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="">
                            
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Produk Terlaris</h2>
                            <p className="text-sm text-gray-500">Top 5 produk dengan penjualan tertinggi</p>
                        </div>
                    </div>

                    {/* List Produk Terlaris */}
                    <div className="space-y-4">
                        {produkTerlaris.map((produk, index) => (
                            <div key={index} className="flex items-center gap-4">
                                {/* Nomor Ranking */}
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white ${
                                    index === 0 ? 'bg-yellow-500' :
                                    index === 1 ? 'bg-gray-400' :
                                    index === 2 ? 'bg-orange-400' :
                                    'bg-gray-300'
                                }`}>
                                    {index + 1}
                                </div>
                                
                                {/* Nama Produk */}
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">{produk.nama}</p>
                                    <p className="text-sm text-gray-500">{produk.jumlah} pcs terjual</p>
                                </div>
                                
                                {/* Progress Bar */}
                                <div className="w-48 bg-gray-200 rounded-full h-3">
                                    <div 
                                        className={`h-3 rounded-full ${
                                            index === 0 ? 'bg-yellow-500' :
                                            index === 1 ? 'bg-gray-400' :
                                            index === 2 ? 'bg-orange-400' :
                                            'bg-gray-300'
                                        }`}
                                        style={{ width: `${(produk.jumlah / 3) * 100}%` }}
                                    ></div>
                                </div>
                                
                                {/* Jumlah */}
                                <span className="font-bold text-gray-800 w-16 text-right">{produk.jumlah} pcs</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Catatan */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-800">
                        <strong>Catatan:</strong> Profit dihitung 30% dari total penjualan. 
                        Hanya transaksi "Selesai" yang dihitung.
                    </p>
                </div>
            </div>
        </div>
    );
}
