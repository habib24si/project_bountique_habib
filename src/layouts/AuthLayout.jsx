import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-6">

            <div className="w-full max-w-7xl bg-white rounded-3xl overflow-hidden shadow-lg">

                {/* Header */}
                <div className="flex items-center justify-center pt-5">
                    <h1 className="text-2xl font-extrabold text-gray-800">
                        <span className="text-black">HSA BOUTIQUE</span>
                        <span className="text-green-500">.</span>
                    </h1>
                </div>

                {/* Content */}
                <div className="p-6">
                    <Outlet />
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-gray-500 pb-4">
                    © 2025 HSA BOUTIQUE Admin Dashboard
                </p>
            </div>
        </div>
    );
}