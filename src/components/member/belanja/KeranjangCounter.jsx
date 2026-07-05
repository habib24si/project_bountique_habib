// Counter untuk menampilkan jumlah item di keranjang

import { FaShoppingCart } from "react-icons/fa";

export default function KeranjangCounter({ jumlah }) {
    return (
        <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-lg shadow">
            <FaShoppingCart className="text-xl" />
            <span className="font-semibold">{jumlah} item</span>
        </div>
    );
}
