export default function ProgressBar({ label, amount, color, width }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">{label}</span>
                <span className="text-sm font-bold text-gray-800">{amount}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className={`${color} h-2 rounded-full transition-all`}
                    style={{ width }}
                ></div>
            </div>
        </div>
    );
}
