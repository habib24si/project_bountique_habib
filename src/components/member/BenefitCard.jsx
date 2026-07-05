// Komponen untuk menampilkan 1 benefit (Diskon, Gratis Ongkir, dll)

export default function BenefitCard({ icon: Icon, warna, judul, deskripsi }) {
    return (
        <div className="bg-white rounded-lg p-5 border border-gray-100">
            {/* Icon dengan background warna */}
            <div className={`w-10 h-10 ${warna} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="text-rose-700" />
            </div>

            {/* Judul */}
            <h3 className="font-semibold text-gray-800 text-sm">{judul}</h3>

            {/* Deskripsi */}
            <p className="text-xs text-gray-500 mt-1">{deskripsi}</p>
        </div>
    );
}
