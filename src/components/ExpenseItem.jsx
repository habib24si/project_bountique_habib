export default function ExpenseItem({ icon: Icon, category, time, desc, amount, color }) {
    return (
        <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-white`}>
                    <Icon />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">{category}</h3>
                    <p className="text-sm text-gray-400">{time} • {desc}</p>
                </div>
            </div>
            <span className="font-bold text-gray-800">{amount}</span>
        </div>
    );
}
