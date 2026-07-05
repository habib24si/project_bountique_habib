// RiwayatPoinItem.jsx
// Komponen untuk menampilkan 1 riwayat poin (dapat atau pakai)

export default function RiwayatPoinItem({ item }) {
    return (
        <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            {/* Kiri: Aktivitas dan Tanggal */}
            <div>
                <p className="font-medium text-sm text-gray-800">{item.aktivitas}</p>
                <p className="text-xs text-gray-400">{item.tanggal}</p>
            </div>

            {/* Kanan: Poin (+ atau -) */}
            <span className={`font-semibold text-sm ${
                item.tipe === 'dapat' ? 'text-green-600' : 'text-red-600'
            }`}>
                {item.poin}
            </span>
        </div>
    );
}
