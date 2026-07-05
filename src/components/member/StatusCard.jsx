// Komponen untuk menampilkan status member (Gold Member, Poin, dll)

export default function StatusCard({ status, sejak, poin }) {
    return (
        <div className="bg-rose-700 text-white rounded-lg p-5">
            <div className="flex items-center justify-between">
                {/* Bagian Kiri - Status */}
                <div>
                    <p className="text-sm opacity-80">Status Keanggotaan</p>
                    <h2 className="text-xl font-bold mt-1">{status}</h2>
                    <p className="text-xs opacity-70 mt-1">Member sejak {sejak}</p>
                </div>

                {/* Bagian Kanan - Poin */}
                <div className="text-right">
                    <p className="text-sm opacity-80">Poin Reward</p>
                    <h3 className="text-2xl font-bold mt-1">{poin}</h3>
                </div>
            </div>
        </div>
    );
}
