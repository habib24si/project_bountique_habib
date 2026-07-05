// Helper function untuk menghitung diskon berdasarkan member tier

/**
 * Mendapatkan persentase diskon berdasarkan tier
 * @param {string} tier - Member tier (bronze/silver/gold)
 * @returns {number} Persentase diskon
 */
export const getDiscountByTier = (tier) => {
    switch (tier?.toLowerCase()) {
        case 'bronze':
            return 5;  // 5% diskon
        case 'silver':
            return 10; // 10% diskon
        case 'gold':
            return 15; // 15% diskon
        default:
            return 5;  // Default bronze
    }
};

/**
 * Menghitung harga setelah diskon`
 * @param {number} harga - Harga asli
 * @param {string} tier - Member tier
 * @returns {object} { hargaAsli, diskon, hargaAkhir, persenDiskon }
 */
export const calculatePrice = (harga, tier) => {
    const hargaAsli = typeof harga === 'string' 
        ? parseInt(harga.replace(/\./g, '')) 
        : harga;
    
    const persenDiskon = getDiscountByTier(tier);
    const diskon = Math.floor(hargaAsli * persenDiskon / 100);
    const hargaAkhir = hargaAsli - diskon;
    
    return {
        hargaAsli,
        diskon,
        hargaAkhir,
        persenDiskon
    };
};

/**
 * Format angka ke format rupiah
 * @param {number} angka - Angka yang akan diformat
 * @returns {string} Format rupiah (contoh: "350.000")
 */
export const formatRupiah = (angka) => {
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

/**
 * Mendapatkan info lengkap tier
 * @param {string} tier - Member tier
 * @returns {object} { name, discount, color, bgColor, icon }
 */
export const getTierInfo = (tier) => {
    const tiers = {
        bronze: {
            name: 'Bronze',
            discount: 5,
            color: 'text-orange-700',
            bgColor: 'bg-orange-100',
            borderColor: 'border-orange-300',
            badgeBg: 'bg-orange-600'
        },
        silver: {
            name: 'Silver',
            discount: 10,
            color: 'text-gray-700',
            bgColor: 'bg-gray-100',
            borderColor: 'border-gray-300',
            badgeBg: 'bg-gray-600'
        },
        gold: {
            name: 'Gold',
            discount: 15,
            color: 'text-yellow-700',
            bgColor: 'bg-yellow-100',
            borderColor: 'border-yellow-300',
            badgeBg: 'bg-yellow-600'
        }
    };
    
    return tiers[tier?.toLowerCase()] || tiers.bronze;
};
