import axios from 'axios'

// API URL dan KEY untuk Supabase
const API_URL = "https://ocblodvzorjkannchqhr.supabase.co/rest/v1/penjualan"
const API_KEY = "sb_publishable_FKRp87jD_3ztkIv8OnEs-g_DVvgZChi"

// Headers untuk request ke Supabase
const headers = { 
    apikey: API_KEY, 
    Authorization: `Bearer ${API_KEY}`, 
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

export const penjualanAPI = {
    // Ambil semua penjualan dari Supabase
    async fetchPenjualan() {
        try {
            console.log("Fetching penjualan dari:", API_URL);
            const res = await axios.get(API_URL, { headers });
            console.log("Data penjualan berhasil:", res.data);
            return res.data;
        } catch (error) {
            console.error("Error fetch penjualan:", error.response?.data || error.message);
            throw error;
        }
    },

    // Ambil 1 penjualan berdasarkan ID
    async fetchPenjualanById(id) {
        const res = await axios.get(`${API_URL}?id=eq.${id}`, { headers });
        return res.data[0];
    },

    // Tambah penjualan baru ke Supabase
    async createPenjualan(data) {
        const res = await axios.post(API_URL, data, { 
            headers: {...headers, Prefer: "return=representation"} 
        });
        return res.data[0];
    },

    // Update penjualan di Supabase
    async updatePenjualan(id, data) {
        const res = await axios.patch(`${API_URL}?id=eq.${id}`, data, { 
            headers: {...headers, Prefer: "return=representation"} 
        });
        return res.data[0];
    },

    // Hapus penjualan dari Supabase
    async deletePenjualan(id) {
        const res = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
        return res.data;
    }
}
