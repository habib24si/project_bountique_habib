// Banner untuk menampilkan info diskon member

import { FaTags } from "react-icons/fa";

export default function DiskonBanner() {
    return (
        <div className="bg-purple-600 text-white rounded-lg p-4 shadow flex items-center gap-3">
            {/* Icon */}
            <FaTags className="text-3xl" />
            
            {/* Teks */}
            <div>
                <h3 className="font-bold text-lg">Diskon Eksklusif Member!</h3>
                <p className="text-sm">Hemat 30% untuk semua produk + Gratis Ongkir</p>
            </div>
        </div>
    );
}
