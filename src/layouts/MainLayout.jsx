import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
    return (
        <div className="bg-gray-50 min-h-screen flex">
            <div className="flex flex-row flex-1">
                <Sidebar />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
