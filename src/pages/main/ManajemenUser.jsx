import { useState, useEffect } from "react";
import { userAPI } from "../../services/notesAPI";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";

// Import komponen kecil
import UserTableRow from "../../components/admin/user/UserTableRow";
import EditTierModal from "../../components/admin/user/EditTierModal";

export default function ManajemenUser() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingUser, setEditingUser] = useState(null);

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

    // Fungsi untuk mulai edit tier
    const handleEditTier = (user) => {
        setEditingUser(user);
    };

    // Fungsi untuk simpan tier
    const handleSaveTier = async (newTier) => {
        if (!editingUser) return;
        
        try {
            await userAPI.updateUser(editingUser.id, { member_tier: newTier });
            
            // Update local state
            setUsers(users.map(u => 
                u.id === editingUser.id 
                    ? { ...u, member_tier: newTier } 
                    : u
            ));
            
            setEditingUser(null);
            alert("Tier berhasil diupdate!");
        } catch {
            alert("Gagal mengupdate tier");
        }
    };

    // Tampilkan loading
    if (loading) return <div className="p-6 text-center">Loading...</div>;

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Manajemen User</h1>
                <p className="text-sm text-gray-500 mt-1">Kelola user dan tier membership</p>
            </div>

            {/* Modal Edit Tier - Komponen */}
            <EditTierModal 
                user={editingUser}
                isOpen={!!editingUser}
                onClose={() => setEditingUser(null)}
                onSave={handleSaveTier}
            />

            {/* Tabel User */}
            <div className="bg-white rounded-lg shadow">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Member Tier</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-gray-500">
                                    Belum ada user
                                </TableCell>
                            </TableRow>
                        ) : (
                            // Loop semua user dengan komponen UserTableRow
                            users.map(user => (
                                <UserTableRow 
                                    key={user.id}
                                    user={user}
                                    onEditTier={handleEditTier}
                                    onDelete={handleDelete}
                                />
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="mt-4 text-sm text-gray-500">
                Total: {users.length} user ({users.filter(u => u.role === 'member').length} member)
            </div>
        </div>
    );
}