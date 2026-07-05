// Komponen untuk banner promo member

export default function PromoBanner({ emoji, judul, deskripsi, onKlik }) {
    return (
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-5">
            <div className="flex items-center justify-between">
                {/* Bagian Kiri - Teks */}
                <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{judul}</h3>
                    <p className="text-xs text-gray-500 mt-1">{deskripsi}</p>
                </div>

                {/* Bagian Kanan - Tombol */}
                <button 
                    onClick={onKlik}
                    className="bg-rose-700 hover:bg-rose-800 text-white text-sm font-semibold px-5 py-2 rounded-lg"
                >
                    Belanja Sekarang
                </button>
            </div>
        </div>
    );
}
