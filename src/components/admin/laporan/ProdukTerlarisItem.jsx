// ProdukTerlarisItem.jsx
// Komponen untuk menampilkan 1 produk terlaris dengan ranking

export default function ProdukTerlarisItem({ produk, index }) {
    // Tentukan warna berdasarkan ranking
    const getRankingColor = () => {
        if (index === 0) return 'bg-yellow-500'; // Emas
        if (index === 1) return 'bg-gray-400';   // Perak
        if (index === 2) return 'bg-orange-400'; // Perunggu
        return 'bg-gray-300';                    // Lainnya
    };

    const getProgressColor = () => {
        if (index === 0) return 'bg-yellow-500';
        if (index === 1) return 'bg-gray-400';
        if (index === 2) return 'bg-orange-400';
        return 'bg-gray-300';
    };

    return (
        <div className="flex items-center gap-4">
            {/* Nomor Ranking */}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white ${getRankingColor()}`}>
                {index + 1}
            </div>

            {/* Nama Produk dan Jumlah */}
            <div className="flex-1">
                <p className="font-semibold text-gray-800">{produk.nama}</p>
                <p className="text-sm text-gray-500">{produk.jumlah} pcs terjual</p>
            </div>

            {/* Progress Bar */}
            <div className="w-48 bg-gray-200 rounded-full h-3">
                <div
                    className={`h-3 rounded-full ${getProgressColor()}`}
                    style={{ width: `${(produk.jumlah / 3) * 100}%` }}
                ></div>
            </div>

            {/* Jumlah */}
            <span className="font-bold text-gray-800 w-16 text-right">{produk.jumlah} pcs</span>
        </div>
    );
}
