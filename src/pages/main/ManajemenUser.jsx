import { useState, useEffect } from "react";
import { userAPI } from "../../services/notesAPI";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";

export default function ManajemenUser() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        userAPI.fetchUsers()
            .then(setUsers)
            .catch(() => alert("Gagal memuat data"))
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Hapus user ini?")) return;
        try {
            await userAPI.deleteUser(id);
            setUsers(users.filter(u => u.id !== id));
        } catch {
            alert("Gagal menghapus");
        }
    };

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
                            users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell className="font-medium">{user.name}</TableCell>
                                    <TableCell className="text-gray-400">••••••••</TableCell>
                                    <TableCell className="text-right">
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="text-red-600 hover:text-red-800 text-sm"
                                        >
                                            Hapus
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="mt-4 text-sm text-gray-500">Total: {users.length} user</div>
        </div>
    );
}