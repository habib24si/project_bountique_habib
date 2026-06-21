import { FaCrown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MemberBanner() {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <FaCrown className="text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Ayo!! Jadi Member</h3>
            </div>
            
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                Dapatkan diskon hingga 30%, gratis ongkir, dan akses produk eksklusif
            </p>

            <button 
                onClick={() => navigate('/profil-company')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg"
            >
                LIHAT INFO LENGKAP
            </button>
        </div>
    );
}
