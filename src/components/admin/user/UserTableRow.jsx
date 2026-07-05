// UserTableRow.jsx
// Komponen untuk menampilkan 1 baris data user di tabel

import { FaEdit, FaTrash } from "react-icons/fa";
import { TableCell, TableRow } from "../../ui/table";
import TierBadge from "./TierBadge";

export default function UserTableRow({ user, onEditTier, onDelete }) {
    return (
        <TableRow>
            {/* ID */}
            <TableCell className="font-medium">{user.id}</TableCell>
            
            {/* Name */}
            <TableCell className="font-semibold">{user.name}</TableCell>
            
            {/* Role Badge */}
            <TableCell>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.role === 'admin' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                }`}>
                    {user.role}
                </span>
            </TableCell>
            
            {/* Member Tier Badge */}
            <TableCell>
                {user.role === 'member' && user.member_tier ? (
                    <div className="flex items-center gap-2">
                        <TierBadge tier={user.member_tier} />
                    </div>
                ) : (
                    <span className="text-gray-400 text-sm">-</span>
                )}
            </TableCell>
            
            {/* Aksi (Edit Tier & Hapus) */}
            <TableCell className="text-right">
                <div className="flex gap-2 justify-end">
                    {/* Tombol Edit Tier (hanya untuk member) */}
                    {user.role === 'member' && (
                        <button
                            onClick={() => onEditTier(user)}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 text-sm font-medium flex items-center gap-1"
                        >
                            <FaEdit /> Edit Tier
                        </button>
                    )}
                    
                    {/* Tombol Hapus */}
                    <button
                        onClick={() => onDelete(user.id)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm font-medium flex items-center gap-1"
                    >
                        <FaTrash /> Hapus
                    </button>
                </div>
            </TableCell>
        </TableRow>
    );
}
