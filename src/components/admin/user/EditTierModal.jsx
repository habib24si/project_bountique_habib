// EditTierModal.jsx
// Modal untuk edit tier member (Bronze/Silver/Gold)

import { useState, useEffect } from "react";
import TierBadge from "./TierBadge";

export default function EditTierModal({ user, isOpen, onClose, onSave }) {
    const [selectedTier, setSelectedTier] = useState("");

    // Set tier awal saat modal dibuka
    useEffect(() => {
        if (user) {
            setSelectedTier(user.member_tier || 'bronze');
        }
    }, [user]);

    // Jika modal tidak dibuka, jangan render
    if (!isOpen || !user) return null;

    // Fungsi untuk handle save
    const handleSave = () => {
        onSave(selectedTier);
    };

    // Data tier dengan info diskon
    const tiers = [
        { value: 'bronze', label: 'Bronze', discount: '5%' },
        { value: 'silver', label: 'Silver', discount: '10%' },
        { value: 'gold', label: 'Gold', discount: '15%' }
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
                {/* Header Modal */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Edit Tier Member
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                    User: <span className="font-semibold">{user.name}</span>
                </p>

                {/* Pilihan Tier */}
                <div className="space-y-3 mb-6">
                    {tiers.map((tier) => (
                        <label
                            key={tier.value}
                            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                                selectedTier === tier.value
                                    ? 'border-purple-500 bg-purple-50'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <input
                                type="radio"
                                name="tier"
                                value={tier.value}
                                checked={selectedTier === tier.value}
                                onChange={(e) => setSelectedTier(e.target.value)}
                                className="mr-3"
                            />
                            <div className="flex-1 flex items-center justify-between">
                                <div>
                                    <p className="font-semibold capitalize">{tier.label}</p>
                                    <p className="text-xs text-gray-500">
                                        Diskon {tier.discount}
                                    </p>
                                </div>
                                <TierBadge tier={tier.value} />
                            </div>
                        </label>
                    ))}
                </div>

                {/* Tombol Aksi */}
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    );
}
