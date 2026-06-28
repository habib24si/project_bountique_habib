import { FaStar } from "react-icons/fa";

export default function Reward() {
    const poinSaya = 1250;
    const poinDibutuhkan = 2000;
    const persenProgress = (poinSaya / poinDibutuhkan) * 100;

    const rewards = [
        { id: 1, nama: "Voucher Diskon 50rb", poin: 500, deskripsi: "Diskon Rp 50.000 untuk belanja berikutnya" },
        { id: 2, nama: "Voucher Diskon 100rb", poin: 1000, deskripsi: "Diskon Rp 100.000 untuk belanja berikutnya" },
        { id: 3, nama: "Gratis 1 Produk", poin: 1500, deskripsi: "Gratis 1 produk dengan harga maksimal Rp 300.000" },
        { id: 4, nama: "Upgrade ke Platinum", poin: 3000, deskripsi: "Upgrade status member ke Platinum (diskon 50%)" }
    ];

    const riwayatPoin = [
        { tanggal: "15 Jun 2026", aktivitas: "Belanja Rp 700.000", poin: "+70", tipe: "dapat" },
        { tanggal: "10 Jun 2026", aktivitas: "Tukar Voucher 50rb", poin: "-500", tipe: "pakai" },
        { tanggal: "08 Jun 2026", aktivitas: "Belanja Rp 500.000", poin: "+50", tipe: "dapat" },
        { tanggal: "05 Jun 2026", aktivitas: "Belanja Rp 350.000", poin: "+35", tipe: "dapat" }
    ];

    const tukarReward = (reward) => {
        if (poinSaya >= reward.poin) {
            alert(`Berhasil menukar ${reward.nama}!`);
        } else {
            alert(`Poin Anda tidak cukup. Dibutuhkan ${reward.poin} poin.`);
        }
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Reward & Poin</h1>
                <p className="text-sm text-gray-500 mt-1">Kumpulkan poin dan tukar dengan reward menarik</p>
            </div>

            {/* Poin Card */}
            <div className="bg-rose-700 text-white rounded-lg p-5 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-sm opacity-80">Total Poin</p>
                        <h2 className="text-3xl font-bold mt-1">{poinSaya}</h2>
                    </div>
                    <div className="text-right">
                        <p className="text-sm opacity-80">Progress ke Platinum</p>
                        <p className="text-sm mt-1">{poinSaya} / {poinDibutuhkan}</p>
                    </div>
                </div>
                <div className="w-full bg-rose-500 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: `${persenProgress}%` }}></div>
                </div>
            </div>

            {/* Cara Dapat Poin */}
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-sm text-gray-800 mb-2">Cara Mendapatkan Poin</h3>
                <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Belanja Rp 10.000 = 1 Poin</li>
                    <li>• Review produk = 10 Poin</li>
                    <li>• Ajak teman jadi member = 50 Poin</li>
                </ul>
            </div>

            {/* Tukar Poin */}
            <h3 className="font-semibold text-gray-800 text-sm mb-4">Tukar Poin</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
                {rewards.map((reward) => (
                    <div key={reward.id} className="bg-white rounded-lg p-4 border border-gray-100">
                        <h4 className="font-semibold text-sm text-gray-800">{reward.nama}</h4>
                        <p className="text-xs text-gray-400 mt-1 mb-3">{reward.deskripsi}</p>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-1.5">
                                <FaStar className="text-amber-400 text-xs" />
                                <span className="font-semibold text-sm text-gray-800">{reward.poin}</span>
                                <span className="text-xs text-gray-400">Poin</span>
                            </div>
                            <button
                                onClick={() => tukarReward(reward)}
                                disabled={poinSaya < reward.poin}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                                    poinSaya >= reward.poin
                                        ? 'bg-rose-700 hover:bg-rose-800 text-white'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                            >
                                {poinSaya >= reward.poin ? 'Tukar' : 'Poin Kurang'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Riwayat Poin */}
            <div className="bg-white rounded-lg p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-800 text-sm mb-4">Riwayat Poin</h3>
                <div className="space-y-3">
                    {riwayatPoin.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                            <div>
                                <p className="font-medium text-sm text-gray-800">{item.aktivitas}</p>
                                <p className="text-xs text-gray-400">{item.tanggal}</p>
                            </div>
                            <span className={`font-semibold text-sm ${
                                item.tipe === 'dapat' ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {item.poin}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
