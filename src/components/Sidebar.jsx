import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaList, FaShoppingCart, FaChartBar, FaUsers, FaUserCircle, FaBuilding } from "react-icons/fa";

export default function Sidebar() {
    const menuItems = [
        { path: "/admin", icon: FaHome, label: "Dashboard" },
        { path: "/admin/tambah-model", icon: FaPlus, label: "Tambah Model" },
        { path: "/admin/model-tersedia", icon: FaList, label: "Model Tersedia" },
        { path: "/admin/penjualan", icon: FaShoppingCart, label: "Penjualan" },
        { path: "/admin/laporan", icon: FaChartBar, label: "Laporan" },
        { path: "/admin/manajemen-user", icon: FaUsers, label: "Manajemen User" },
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
        </div>
    );
}
