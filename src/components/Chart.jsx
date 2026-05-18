export default function Chart({ data = [] }) {
    return (
        <div className="flex items-end justify-between h-48 gap-3">
            {data.map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                    <div
                        className={`w-full rounded-t-lg transition-all ${
                            i === data.length - 1 ? "bg-blue-500" : "bg-blue-200"
                        }`}
                        style={{ height: `${height}%` }}
                    ></div>
                </div>
            ))}
        </div>
    );
}
