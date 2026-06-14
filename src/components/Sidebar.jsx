import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaList, FaShoppingCart, FaChartBar, FaUsers, FaUserCircle } from "react-icons/fa";

export default function Sidebar() {
    const menuItems = [
        { path: "/", icon: FaHome, label: "Dashboard" },
        { path: "/tambah-model", icon: FaPlus, label: "Tambah Model" },
        { path: "/model-tersedia", icon: FaList, label: "Model Tersedia" },
        { path: "/penjualan", icon: FaShoppingCart, label: "Penjualan" },
        { path: "/laporan", icon: FaChartBar, label: "Laporan" },
        { path: "/manajemen-user", icon: FaUsers, label: "Manajemen User" },
    ];

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen p-6 flex flex-col">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Boutique</h2>
                <p className="text-sm text-gray-400">Admin Dashboard</p>
            </div>

            <nav className="space-y-2 flex-1">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-300 hover:bg-gray-800"
                            }`
                        }
                    >
                        <item.icon />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Tombol Guest */}
            <div className="mt-auto pt-4 border-t border-gray-700">
                <NavLink
                    to="/guest/produk"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors"
                >
                    <FaUserCircle />
                    <span>Guest</span>
                </NavLink>
            </div>
        </div>
    );
}
