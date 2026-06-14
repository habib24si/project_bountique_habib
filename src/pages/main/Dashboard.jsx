import { FaTshirt, FaTruck, FaStore, FaTag, FaCut } from "react-icons/fa";
import PageTitle from "../../components/PageTitle";
import AvatarGroup from "../../components/AvatarGroup";
import Chart from "../../components/Chart";
import Section from "../../components/Section";
import SectionHeader from "../../components/SectionHeader";
import ExpenseList from "../../components/ExpenseList";
import RightSidebar from "../../components/RightSidebar";
import CategoryList from "../../components/CategoryList";
import PromoCard from "../../components/PromoCard";
import Button from "../../components/Button";
import penjualanData from "../../data/penjualanData";

export default function Dashboard() {
    const expensesData = [
        { category: "Stok Pakaian", time: "6:12 pm", desc: "Pembelian koleksi baru", amount: "-326.800", icon: FaTshirt, color: "bg-blue-400" },
        { category: "Pengiriman", time: "6:12 pm", desc: "Biaya kirim supplier", amount: "-15.000", icon: FaTruck, color: "bg-purple-500" },
        { category: "Sewa Toko", time: "6:12 pm", desc: "Bayar sewa bulanan", amount: "-185.750", icon: FaStore, color: "bg-orange-500" },
    ];

    const expensesHistory = [
        { category: "Marketing", time: "6:12 pm", desc: "Iklan media sosial", amount: "-166.000", icon: FaTag, color: "bg-red-500" },
        { category: "Jahit & Alterasi", time: "6:12 pm", desc: "Biaya penjahit", amount: "-35.200", icon: FaCut, color: "bg-green-500" },
    ];

    const categories = [
        { name: "Stok Pakaian", amount: "872.400", color: "bg-green-500", width: "70%" },
        { name: "Aksesoris", amount: "1.378.200", color: "bg-teal-500", width: "85%" },
        { name: "Sewa & Operasional", amount: "928.500", color: "bg-teal-400", width: "60%" },
        { name: "Marketing", amount: "420.700", color: "bg-teal-300", width: "45%" },
        { name: "Gaji Karyawan", amount: "520.000", color: "bg-teal-200", width: "55%" },
    ];

    // Generate chart data dari penjualan
    // Ambil data penjualan dan convert ke chart values berdasarkan total
    const chartData = penjualanData
        .filter(item => item.data === undefined) // Exclude yang punya property data
        .map(item => {
            // Convert string "700.000" ke number dan scale down untuk chart
            const total = parseInt(item.total.replace(/\./g, ''));
            return Math.round(total / 10000); // Scale down untuk visualisasi
        });

    const avatars = [
        { src: "/img/TAYO.jpg", alt: "User 1" },
        { src: "/img/TAYO.jpg", alt: "User 2" },
        { src: "/img/wahyu.png", alt: "User 3" },
        { src: "/img/TAYO.jpg", alt: "User 4" },
        { src: "/img/wahyu.png", alt: "User 5" },
    ];

    return (
        <div className="flex flex-1 bg-black p-6">
            {/* Main Content */}
            <div className="flex-1">
                <div className="bg-white rounded-l-3xl shadow-sm p-8 h-full">
                    <PageTitle title="Pendapatan Boutique">
                        <AvatarGroup avatars={avatars} max={3} />
                    </PageTitle>

                    <Section>
                        <Chart data={chartData} />
                    </Section>

                    <Section>
                        <SectionHeader title="Hari Ini" onMenuClick={() => {}} />
                        <ExpenseList items={expensesData} />
                    </Section>

                    <Section>
                        <SectionHeader title="Senin, 23 Maret 2020" onMenuClick={() => {}} />
                        <ExpenseList items={expensesHistory} />
                    </Section>
                </div>
            </div>

            {/* Sidebar kanan */}
            <RightSidebar>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Kemana uang boutique pergi?
                </h2>

                <div className="mb-8">
                    <CategoryList categories={categories} />
                </div>
                

                <div className="mt-auto">
                    <PromoCard
                        title="Hemat lebih banyak"
                        description="Kelola pengeluaran boutique dengan lebih efisien dan tingkatkan profit margin Anda."
                    >
                        <Button type="primary" fullWidth={true} size="md" onClick={() => {}}>
                            LIHAT TIPS
                        </Button>
                    </PromoCard>
                </div>
            </RightSidebar>
        </div>
    );
}
