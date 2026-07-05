import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaShoppingBag, FaGift, FaUser, FaArrowLeft } from "react-icons/fa";

export default function MemberLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-stone-900 text-white flex flex-col">
                <div className="p-6">
                    <h2 className="text-lg font-bold">HSA Boutique</h2>
                    <p className="text-xs text-gray-400 mt-1">Member Area</p>
                </div>

                <nav className="px-4 space-y-1 flex-1">
                    <NavLink
                        to="/member"
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm ${
                                isActive ? "bg-rose-700 text-white font-semibold" : "text-gray-300 hover:bg-gray-800"
                            }`
                        }
                    >
                        <FaHome />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink
                        to="/member/belanja"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm ${
                                isActive ? "bg-rose-700 text-white font-semibold" : "text-gray-300 hover:bg-gray-800"
                            }`
                        }
                    >
                        <FaShoppingBag />
                        <span>Belanja</span>
                    </NavLink>

                    <NavLink
                        to="/member/reward"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm ${
                                isActive ? "bg-rose-700 text-white font-semibold" : "text-gray-300 hover:bg-gray-800"
                            }`
                        }
                    >
                        <FaGift />
                        <span>Reward & Poin</span>
                    </NavLink>

                    <NavLink
                        to="/member/profil"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm ${
                                isActive ? "bg-rose-700 text-white font-semibold" : "text-gray-300 hover:bg-gray-800"
                            }`
                        }
                    >
                        <FaUser />
                        <span>Profil Saya</span>
                    </NavLink>
                </nav>

                <div className="p-4 border-t border-gray-700">
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}
