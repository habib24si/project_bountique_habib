import { FaCrown } from "react-icons/fa";

export default function MemberBanner() {
    return (
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <FaCrown className="text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Ayo!! Jadi Member</h3>
            </div>
            
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                Dapatkan diskon hingga 30%, gratis ongkir, dan akses produk eksklusif
            </p>

            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-purple-600 hover:to-purple-700">
                DAFTAR SEKARANG
            </button>
        </div>
    );
}
