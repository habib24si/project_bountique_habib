// Komponen untuk 1 item riwayat belanja

export default function RiwayatItem({ namaProduk, tanggal, harga, status }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            {/* Bagian Kiri - Info Produk */}
            <div>
                <p className="font-medium text-sm text-gray-800">{namaProduk}</p>
                <p className="text-xs text-gray-400">{tanggal}</p>
            </div>

            {/* Bagian Kanan - Harga & Status */}
            <div className="text-right">
                <p className="font-semibold text-sm text-gray-800">Rp {harga}</p>
                <span className="text-xs text-green-600">{status}</span>
            </div>
        </div>
    );
}
