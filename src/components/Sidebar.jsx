import { FaThLarge, FaChartPie, FaCog, FaShoppingBag, FaPlus, FaTshirt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 font-medium text-decoration-none
    ${isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

export default function Sidebar() {
    return (
        <div id="sidebar">
            {/* Profile Section */}
            <div id="sidebar-profile">
                <div id="profile-badge"></div>
                <img id="profile-image" src="/img/wisata1.jpg" alt="Habib" />
                <h3 id="profile-name">Habib Syadia Akbar</h3>
                <p id="profile-email">Habib@email.com</p>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu">
                <ul id="menu-list">
                    <li>
                        <NavLink id="menu-1" to="/" end className={menuClass}>
                            <FaThLarge />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-2" to="/tambah-model" className={menuClass}>
                            <FaPlus />
                            <span>Tambah Model</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-3" to="/model-tersedia" className={menuClass}>
                            <FaTshirt />
                            <span>Model Tersedia</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-4" to="/laporan" className={menuClass}>
                            <FaChartPie />
                            <span>Laporan</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-5" to="/penjualan" className={menuClass}>
                            <FaShoppingBag />
                            <span>Penjualan</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-6" to="/error/403" className={menuClass}>
                            <FaCog />
                            <span>Pengaturan</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
