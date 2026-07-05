// UserTableRow.jsx
// Komponen untuk menampilkan 1 baris data user di tabel

import { TableCell, TableRow } from "../../ui/table";

export default function UserTableRow({ user, onDelete }) {
    return (
        <TableRow>
            {/* ID */}
            <TableCell>{user.id}</TableCell>

            {/* Nama */}
            <TableCell className="font-medium">{user.name}</TableCell>

            {/* Password (disensor) */}
            <TableCell className="text-gray-400">••••••••</TableCell>

            {/* Tombol Hapus */}
            <TableCell className="text-right">
                <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                >
                    Hapus
                </button>
            </TableCell>
        </TableRow>
    );
}
