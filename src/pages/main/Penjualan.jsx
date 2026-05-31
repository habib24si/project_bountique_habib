import { useState } from "react";
import { FaShoppingBag, FaCalendar, FaDollarSign, FaBox } from "react-icons/fa";
import penjualanData from "../../data/penjualanData";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption, TableFooter } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination";

export default function Penjualan() {
    const [penjualan] = useState(penjualanData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = penjualan.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(penjualan.length / itemsPerPage);

    // hitung statistiknya
    
    //Total Penjualan 
    let totalPenjualan = 0;
    penjualan.forEach(item => {
        if (item.status === "Selesai") {
            // Hapus titik dari "700.000" jadi "700000"
            const angka = parseInt(item.total.replace(/\./g, ''));
            totalPenjualan = totalPenjualan + angka;
        }
    });

    // Total Item Terjual 
    let totalItem = 0;
    penjualan.forEach(item => {
        totalItem = totalItem + item.jumlah;
    });

    // Hitung berapa transaksi yang selesai
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

                {/* 4 Card Statistik */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    
                    {/* Card 1: Total Transaksi */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaShoppingBag className="text-blue-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Transaksi</p>
                                <p className="text-2xl font-bold text-gray-800">{penjualan.length}</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Total Penjualan */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <FaDollarSign className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Penjualan</p>
                                <p className="text-xl font-bold text-gray-800">Rp {totalPenjualan.toLocaleString('id-ID')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Item Terjual */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <FaBox className="text-purple-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Item Terjual</p>
                                <p className="text-2xl font-bold text-gray-800">{totalItem}</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Transaksi Selesai */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <FaCalendar className="text-orange-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Selesai</p>
                                <p className="text-2xl font-bold text-gray-800">{penjualanSelesai}</p>
                            </div>
                        </div>
                    </div>
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
