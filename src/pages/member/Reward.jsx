// Import komponen kecil
import PoinCard from "../../components/member/reward/PoinCard";
import RewardItem from "../../components/member/reward/RewardItem";
import RiwayatPoinItem from "../../components/member/reward/RiwayatPoinItem";

export default function Reward() {
    const poinSaya = 1250;
    const poinDibutuhkan = 2000;

    // Data reward yang bisa ditukar
    const rewards = [
        { id: 1, nama: "Voucher Diskon 50rb", poin: 500, deskripsi: "Diskon Rp 50.000 untuk belanja berikutnya" },
        { id: 2, nama: "Voucher Diskon 100rb", poin: 1000, deskripsi: "Diskon Rp 100.000 untuk belanja berikutnya" },
        { id: 3, nama: "Gratis 1 Produk", poin: 1500, deskripsi: "Gratis 1 produk dengan harga maksimal Rp 300.000" },
        { id: 4, nama: "Upgrade ke Platinum", poin: 3000, deskripsi: "Upgrade status member ke Platinum (diskon 50%)" }
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
        <div className="p-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Reward & Poin</h1>
                <p className="text-sm text-gray-500 mt-1">Kumpulkan poin dan tukar dengan reward menarik</p>
            </div>

            {/* Kartu Poin (pakai komponen) */}
            <PoinCard poinSaya={poinSaya} poinDibutuhkan={poinDibutuhkan} />

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
                    <RewardItem
                        key={reward.id}
                        reward={reward}
                        poinSaya={poinSaya}
                        onTukar={tukarReward}
                    />
                ))}
            </div>

            {/* Riwayat Poin */}
            <div className="bg-white rounded-lg p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-800 text-sm mb-4">Riwayat Poin</h3>
                <div className="space-y-3">
                    {riwayatPoin.map((item, index) => (
                        <RiwayatPoinItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
