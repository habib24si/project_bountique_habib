// SecuritySection.jsx
// Komponen untuk menampilkan opsi keamanan akun

export default function SecuritySection() {
    return (
        <div className="bg-white rounded-lg border border-gray-100 p-5">
            <h3 className="font-semibold text-gray-800 text-sm mb-4">Keamanan Akun</h3>

            <div className="space-y-2">
                {/* Ubah Password */}
                <button className="w-full text-left px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <p className="font-medium text-sm text-gray-800">Ubah Password</p>
                    <p className="text-xs text-gray-400">Terakhir diubah 2 bulan yang lalu</p>
                </button>

                {/* Verifikasi Email */}
                <button className="w-full text-left px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <p className="font-medium text-sm text-gray-800">Verifikasi Email</p>
                    <p className="text-xs text-green-600">✓ Email sudah terverifikasi</p>
                </button>
            </div>
        </div>
    );
}
