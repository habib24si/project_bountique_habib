import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaShoppingBag, FaGift, FaUser, FaArrowLeft, FaCrown } from "react-icons/fa";

export default function MemberLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-purple-600 text-white shadow-lg flex flex-col">
                <div className="p-6 border-b border-purple-500">
                    <div className="flex items-center gap-3 mb-2">
                        <FaCrown className="text-2xl" />
                        <h2 className="text-2xl font-bold">Member Area</h2>
                    </div>
                    <p className="text-sm">Hsa Boutique </p>
                </div>

                <nav className="p-4 space-y-2 flex-1">
                    <NavLink
                        to="/member"
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg ${
                                isActive ? "bg-white text-purple-600 font-semibold" : "text-white hover:bg-purple-500"
                            }`
                        }
                    >
                        <FaHome />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink
                        to="/member/belanja"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg ${
                                isActive ? "bg-white text-purple-600 font-semibold" : "text-white hover:bg-purple-500"
                            }`
                        }
                    >
                        <FaShoppingBag />
                        <span>Belanja</span>
                    </NavLink>

                    <NavLink
                        to="/member/reward"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg ${
                                isActive ? "bg-white text-purple-600 font-semibold" : "text-white hover:bg-purple-500"
                            }`
                        }
                    >
                        <FaGift />
                        <span>Reward & Poin</span>
                    </NavLink>

                    <NavLink
                        to="/member/profil"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg ${
                                isActive ? "bg-white text-purple-600 font-semibold" : "text-white hover:bg-purple-500"
                            }`
                        }
                    >
                        <FaUser />
                        <span>Profil Saya</span>
                    </NavLink>
                </nav>

                <div className="p-4">
                    <NavLink
                        to="/"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-500 hover:bg-purple-700 text-white"
                    >
                        <FaArrowLeft />
                        <span>Kembali ke Admin</span>
                    </NavLink>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}
