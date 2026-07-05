// PoinCard.jsx
// Komponen untuk menampilkan total poin dan progress ke Platinum

export default function PoinCard({ poinSaya, poinDibutuhkan }) {
    // Hitung berapa persen progress
    const persenProgress = (poinSaya / poinDibutuhkan) * 100;

    return (
        <div className="bg-purple-600 text-white rounded-lg p-5 mb-6">
            {/* Bagian atas: Total Poin dan Progress */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-sm opacity-80">Total Poin</p>
                    <h2 className="text-3xl font-bold mt-1">{poinSaya}</h2>
                </div>
                <div className="text-right">
                    <p className="text-sm opacity-80">Progress ke Platinum</p>
                    <p className="text-sm mt-1">{poinSaya} / {poinDibutuhkan}</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-purple-500 rounded-full h-2">
                <div 
                    className="bg-white h-2 rounded-full" 
                    style={{ width: `${persenProgress}%` }}
                ></div>
            </div>
        </div>
    );
}
