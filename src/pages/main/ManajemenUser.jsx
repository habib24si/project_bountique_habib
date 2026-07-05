import { useState, useEffect } from "react";
import { userAPI } from "../../services/notesAPI";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";

// Import komponen kecil
import UserTableRow from "../../components/admin/user/UserTableRow";

export default function ManajemenUser() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Ambil data users saat pertama kali load
    useEffect(() => {
        userAPI.fetchUsers()
            .then(setUsers)
            .catch(() => alert("Gagal memuat data"))
            .finally(() => setLoading(false));
    }, []);

    // Fungsi untuk hapus user
    const handleDelete = async (id) => {
        if (!confirm("Hapus user ini?")) return;
        try {
            await userAPI.deleteUser(id);
            setUsers(users.filter(u => u.id !== id));
        } catch {
            alert("Gagal menghapus");
        }
    };

    // Tampilkan loading
    if (loading) return <div className="p-6 text-center">Loading...</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Manajemen User</h1>

            <div className="bg-white rounded-lg shadow">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Password</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-gray-500">
                                    Belum ada user
                                </TableCell>
                            </TableRow>
                        ) : (
                            // Loop untuk semua user - pakai komponen
                            users.map(user => (
                                <UserTableRow
                                    key={user.id}
                                    user={user}
                                    onDelete={handleDelete}
                                />
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="mt-4 text-sm text-gray-500">Total: {users.length} user</div>
        </div>
    );
}