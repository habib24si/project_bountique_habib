// RewardItem.jsx
// Komponen untuk menampilkan 1 reward yang bisa ditukar dengan poin

import { FaStar } from "react-icons/fa";

export default function RewardItem({ reward, poinSaya, onTukar }) {
    // Cek apakah poin cukup
    const poinCukup = poinSaya >= reward.poin;

    return (
        <div className="bg-white rounded-lg p-4 border border-gray-100">
            {/* Nama dan Deskripsi */}
            <h4 className="font-semibold text-sm text-gray-800">{reward.nama}</h4>
            <p className="text-xs text-gray-400 mt-1 mb-3">{reward.deskripsi}</p>

            {/* Poin dan Tombol Tukar */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                {/* Poin yang dibutuhkan */}
                <div className="flex items-center gap-1.5">
                    <FaStar className="text-amber-400 text-xs" />
                    <span className="font-semibold text-sm text-gray-800">{reward.poin}</span>
                    <span className="text-xs text-gray-400">Poin</span>
                </div>

                {/* Tombol Tukar */}
                <button
                    onClick={() => onTukar(reward)}
                    disabled={!poinCukup}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                        poinCukup
                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    {poinCukup ? 'Tukar' : 'Poin Kurang'}
                </button>
            </div>
        </div>
    );
}
