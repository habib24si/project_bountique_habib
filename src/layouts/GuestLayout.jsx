import { Outlet, NavLink } from "react-router-dom";
import { FaBox, FaClipboardList, FaHistory, FaArrowLeft } from "react-icons/fa";
import MemberBanner from "../components/MemberBanner";

export default function GuestLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg flex flex-col">
                <div className="p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">Boutique</h2>
                    <p className="text-sm text-gray-500">Customer Portal</p>
                </div>

                <nav className="p-4 space-y-2 flex-1">
                    <NavLink
                        to="/guest/produk"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg ${
                                isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaBox />
                        <span>Produk</span>
                    </NavLink>

                    <NavLink
                        to="/guest/pesanan"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg ${
                                isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaClipboardList />
                        <span>Pesanan</span>
                    </NavLink>

                    <NavLink
                        to="/guest/histori"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg ${
                                isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaHistory />
                        <span>Histori</span>
                    </NavLink>
                </nav>

                <div className="p-4 space-y-2">
                    <MemberBanner />
                    
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}
