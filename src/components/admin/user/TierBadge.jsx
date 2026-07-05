// TierBadge.jsx
// Komponen untuk menampilkan badge tier member (Bronze/Silver/Gold)

import { FaCrown } from "react-icons/fa";

export default function TierBadge({ tier }) {
    // Konfigurasi warna dan label untuk setiap tier
    const badges = {
        'bronze': { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Bronze' },
        'silver': { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Silver' },
        'gold': { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Gold' }
    };
    
    const badge = badges[tier] || badges.bronze;
    
    return (
        <span className={`${badge.bg} ${badge.text} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 justify-center`}>
            <FaCrown className="text-xs" />
            {badge.label}
        </span>
    );
}
