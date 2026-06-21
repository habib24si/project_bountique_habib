import { FaGift, FaStar, FaTrophy, FaCrown } from "react-icons/fa";

export default function Reward() {
    // Data poin member
    const poinSaya = 1250;
    const poinDibutuhkan = 2000; // Untuk naik level
    const persenProgress = (poinSaya / poinDibutuhkan) * 100;

    // Data reward yang bisa ditukar
    const rewards = [
        {
            id: 1,
            nama: "Voucher Diskon 50rb",
            poin: 500,
            deskripsi: "Diskon Rp 50.000 untuk belanja berikutnya"
        },
        {
            id: 2,
            nama: "Voucher Diskon 100rb",
            poin: 1000,
            deskripsi: "Diskon Rp 100.000 untuk belanja berikutnya"
        },
        {
            id: 3,
            nama: "Gratis 1 Produk",
            poin: 1500,
            deskripsi: "Gratis 1 produk dengan harga maksimal Rp 300.000"
        },
        {
            id: 4,
            nama: "Upgrade ke Platinum",
            poin: 3000,
            deskripsi: "Upgrade status member ke Platinum (diskon 50%)"
        }
    ];

    // Data riwayat poin
    const riwayatPoin = [
        { tanggal: "15 Jun 2026", aktivitas: "Belanja Rp 700.000", poin: "+70", tipe: "dapat" },
        { tanggal: "10 Jun 2026", aktivitas: "Tukar Voucher 50rb", poin: "-500", tipe: "pakai" },
        { tanggal: "08 Jun 2026", aktivitas: "Belanja Rp 500.000", poin: "+50", tipe: "dapat" },
        { tanggal: "05 Jun 2026", aktivitas: "Belanja Rp 350.000", poin: "+35", tipe: "dapat" }
    ];

    // Fungsi untuk tukar reward
    const tukarReward = (reward) => {
        if (poinSaya >= reward.poin) {
            alert(`Berhasil menukar ${reward.nama}!`);
        } else {
            alert(`Poin Anda tidak cukup. Dibutuhkan ${reward.poin} poin.`);
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Reward & Poin</h1>
                <p className="text-gray-500">Kumpulkan poin dan tukar dengan reward menarik</p>
            </div>

            {/* Card Poin Saya */}
            <div className="bg-purple-600 text-white rounded-lg p-6 mb-6 shadow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-sm mb-1">Total Poin Saya</p>
                        <h2 className="text-4xl font-bold">{poinSaya}</h2>
                        <p className="text-sm mt-1">Poin</p>
                    </div>
                </div>

                {/* Progress Bar ke Level Berikutnya */}
                <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                        <span>Progress ke Platinum</span>
                        <span>{poinSaya} / {poinDibutuhkan}</span>
                    </div>
                    <div className="w-full bg-purple-400 rounded-full h-3">
                        <div 
                            className="bg-white h-3 rounded-full"
                            style={{ width: `${persenProgress}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Info Cara Dapat Poin */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <FaTrophy className="text-blue-600" />
                    Cara Mendapatkan Poin
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Belanja Rp 10.000 = 1 Poin</li>
                    <li>• Review produk = 10 Poin</li>
                    <li>• Ajak teman jadi member = 50 Poin</li>
                </ul>
            </div>

            {/* Katalog Reward */}
            <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-4 text-xl">Tukar Poin</h3>
                <div className="grid grid-cols-2 gap-4">
                    {rewards.map((reward) => (
                        <div key={reward.id} className="bg-white rounded-lg p-5 shadow">
                            {/* Icon & Nama */}
                            <div className="flex items-start gap-3 mb-3">
                                <div className="text-4xl">{reward.icon}</div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800">{reward.nama}</h4>
                                    <p className="text-sm text-gray-500">{reward.deskripsi}</p>
                                </div>
                            </div>

                            {/* Harga Poin & Tombol */}
                            <div className="flex items-center justify-between pt-3 border-t">
                                <div className="flex items-center gap-2">
                                    <FaStar className="text-yellow-400" />
                                    <span className="font-bold text-lg text-gray-800">{reward.poin}</span>
                                    <span className="text-sm text-gray-500">Poin</span>
                                </div>
                                <button
                                    onClick={() => tukarReward(reward)}
                                    disabled={poinSaya < reward.poin}
                                    className={`px-4 py-2 rounded-lg font-semibold ${
                                        poinSaya >= reward.poin
                                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    {poinSaya >= reward.poin ? 'Tukar' : 'Poin Kurang'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Riwayat Poin */}
            <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-gray-800 mb-4 text-xl">Riwayat Poin</h3>
                <div className="space-y-3">
                    {riwayatPoin.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-semibold text-gray-800">{item.aktivitas}</p>
                                <p className="text-sm text-gray-500">{item.tanggal}</p>
                            </div>
                            <div>
                                <span className={`font-bold text-lg ${
                                    item.tipe === 'dapat' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {item.poin}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
