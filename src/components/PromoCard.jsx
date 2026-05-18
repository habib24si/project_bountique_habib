export default function PromoCard({ title, description, children }) {
    return (
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-6 relative overflow-hidden">
            <div className="relative z-10">
                <div className="mb-4 flex gap-2">
                    <div className="w-16 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg"></div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{description}</p>
                {children}
            </div>
        </div>
    );
}
