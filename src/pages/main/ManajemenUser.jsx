import { useState, useEffect } from "react";
import { userAPI } from "../../services/notesAPI";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";

export default function ManajemenUser() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const data = await userAPI.fetchUsers();
            setUsers(data);
        } catch (err) {
            setError("Gagal memuat data user");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Hapus user ini?")) return;

        try {
            await userAPI.deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            alert("Gagal menghapus user");
            console.error(err);
        }
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold">Manajemen User</h1>
                <p className="text-gray-500">Data user yang terdaftar di sistem</p>
            </div>

            {error && (
                <div className="bg-red-100 text-red-600 p-4 rounded-lg mb-4">
                    {error}
                </div>
            )}

            {loading ? (
                <div className="text-center py-10">
                    <p className="text-gray-500">Loading...</p>
                </div>
            ) : (
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
                                        Belum ada user terdaftar
                                    </TableCell>
                                </TableRow>
                            ) : (
                                users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell>
                                            <span className="text-gray-400">••••••••</span>
                                        </TableCell>
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
            )}

            <div className="mt-4 text-sm text-gray-500">
                Total User: {users.length}
            </div>
        </div>
    );
}