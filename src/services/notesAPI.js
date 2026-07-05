import axios from 'axios'

const API_URL = "https://ocblodvzorjkannchqhr.supabase.co/rest/v1/bountique"
const API_KEY = "sb_publishable_FKRp87jD_3ztkIv8OnEs-g_DVvgZChi"
const headers = { apikey: API_KEY, Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" }

export const userAPI = {
    async createUser(data) {
        const res = await axios.post(API_URL, data, { headers: {...headers, Prefer: "return=representation"} })
        return res.data
    },

    async fetchUsers() {
        const res = await axios.get(API_URL, { headers })
        return res.data
    },

    async fetchUserById(id) {
        const res = await axios.get(`${API_URL}?id=eq.${id}`, { headers })
        return res.data[0]
    },

    async updateUser(id, data) {
        const res = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers: {...headers, Prefer: "return=representation"} })
        return res.data
    },

    async deleteUser(id) {
        const res = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        return res.data
    },

    async register(name, password) {
        const check = await axios.get(`${API_URL}?name=eq.${name}`, { headers })
        if (check.data.length > 0) throw new Error('Username sudah digunakan')
        
        // Default role adalah 'member' dan tier 'bronze' saat register
        const res = await axios.post(API_URL, { 
            name, 
            password, 
            role: 'member',
            member_tier: 'bronze'  // Default tier Bronze (5% diskon)
        }, { headers: {...headers, Prefer: "return=representation"} })
        return res.data[0]
    },

    async login(name, password) {
        const res = await axios.get(`${API_URL}?name=eq.${name}&password=eq.${password}`, { headers })
        if (res.data.length === 0) throw new Error('Username atau password salah')
        
        return {
            access_token: `token-${res.data[0].id}-${Date.now()}`,
            user: res.data[0]
        }
    }
}
