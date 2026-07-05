// LaporanCard.jsx
// untuk menampilkan 1 kartu laporan

export default function LaporanCard({ label, value, bgColor }) {
    return (
        <div className={`${bgColor} rounded-2xl p-6 text-white shadow-lg`}>
            <p className="text-sm opacity-90 mb-1">{label}</p>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    );
}
