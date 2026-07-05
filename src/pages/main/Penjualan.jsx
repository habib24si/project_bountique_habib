import { useState } from "react";
import { FaShoppingBag, FaCalendar, FaDollarSign, FaBox } from "react-icons/fa";
import penjualanData from "../../data/penjualanData";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption, TableFooter } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";

// Import komponen kecil
import StatCard from "../../components/admin/penjualan/StatCard";

export default function Penjualan() {
    const [penjualan] = useState(penjualanData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = penjualan.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(penjualan.length / itemsPerPage);

    // Hitung statistik
    
    // Total Penjualan
    let totalPenjualan = 0;
    penjualan.forEach(item => {
        if (item.status === "Selesai") {
            const angka = parseInt(item.total.replace(/\./g, ''));
            totalPenjualan = totalPenjualan + angka;
        }
    });

    // Total Item Terjual
    let totalItem = 0;
    penjualan.forEach(item => {
        totalItem = totalItem + item.jumlah;
    });

    // Transaksi Selesai
    let penjualanSelesai = 0;
    penjualan.forEach(item => {
        if (item.status === "Selesai") {
            penjualanSelesai = penjualanSelesai + 1;
        }
    });

    return (
        <div className="flex-1 bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Penjualan</h1>
                    <p className="text-gray-500 text-sm mt-1">Data penjualan boutique</p>
                </div>

                {/* 4 Card Statistik - Loop dengan array */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <StatCard
                        icon={<FaShoppingBag />}
                        label="Total Transaksi"
                        value={penjualan.length}
                        bgColor="bg-blue-100"
                        iconColor="text-blue-500"
                    />
                    <StatCard
                        icon={<FaDollarSign />}
                        label="Total Penjualan"
                        value={`Rp ${totalPenjualan.toLocaleString('id-ID')}`}
                        bgColor="bg-green-100"
                        iconColor="text-green-500"
                    />
                    <StatCard
                        icon={<FaBox />}
                        label="Item Terjual"
                        value={totalItem}
                        bgColor="bg-purple-100"
                        iconColor="text-purple-500"
                    />
                    <StatCard
                        icon={<FaCalendar />}
                        label="Selesai"
                        value={penjualanSelesai}
                        bgColor="bg-orange-100"
                        iconColor="text-orange-500"
                    />
                </div>

                {/* Tabel Penjualan */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 p-6">
                    <Table>
                        <TableCaption>Daftar riwayat penjualan boutique</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">No</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead>Model</TableHead>
                                <TableHead>Jumlah</TableHead>
                                <TableHead>Harga Satuan</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentItems.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{indexOfFirstItem + index + 1}</TableCell>
                                    <TableCell>{item.tanggal}</TableCell>
                                    <TableCell className="font-semibold">{item.model}</TableCell>
                                    <TableCell>{item.jumlah} pcs</TableCell>
                                    <TableCell>Rp {item.harga}</TableCell>
                                    <TableCell className="font-bold">Rp {item.total}</TableCell>
                                    <TableCell>
                                        {item.status === "Selesai" ? (
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                Selesai
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                                                Pending
                                            </span>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={5}>Total Penjualan</TableCell>
                                <TableCell className="font-bold" colSpan={2}>Rp {totalPenjualan.toLocaleString('id-ID')}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>

                    {/* Pagination */}
                    <div className="mt-4">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious 
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                    />
                                </PaginationItem>
                                
                                {[...Array(totalPages)].map((_, i) => (
                                    <PaginationItem key={i + 1}>
                                        <PaginationLink
                                            onClick={() => setCurrentPage(i + 1)}
                                            isActive={currentPage === i + 1}
                                        >
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                <PaginationItem>
                                    <PaginationNext 
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
}
