// StatCard.jsx
// Komponen untuk menampilkan 1 kartu statistik penjualan

export default function StatCard({ icon, label, value, bgColor, iconColor }) {
    return (
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
                    <div className={`${iconColor} text-xl`}>{icon}</div>
                </div>

                {/* Label dan Value */}
                <div>
                    <p className="text-sm text-gray-500">{label}</p>
                    <p className="text-2xl font-bold text-gray-800">{value}</p>
                </div>
            </div>
        </div>
    );
}
