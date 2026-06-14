import axios from 'axios'

const API_URL = "https://ocblodvzorjkannchqhr.supabase.co/rest/v1/bountique"
const API_KEY = "sb_publishable_FKRp87jD_3ztkIv8OnEs-g_DVvgZChi"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const userAPI = {
    // CREATE - Tambah user baru
    async createUser(data) {
        const response = await axios.post(API_URL, data, { 
            headers: {
                ...headers,
                Prefer: "return=representation"
            }
        })
        return response.data
    },

    // READ - Ambil semua user
    async fetchUsers() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    // READ - Ambil user berdasarkan ID
    async fetchUserById(id) {
        const response = await axios.get(`${API_URL}?id=eq.${id}`, { headers })
        return response.data[0]
    },

    // UPDATE - Update user
    async updateUser(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { 
            headers: {
                ...headers,
                Prefer: "return=representation"
            }
        })
        return response.data
    },

    // DELETE - Hapus user
    async deleteUser(id) {
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        return response.data
    },

    // AUTH - Register user baru (name & password only)
    async register(name, password) {
        try {
            // Cek apakah username sudah ada
            const checkResponse = await axios.get(`${API_URL}?name=eq.${name}`, { headers })
            
            if (checkResponse.data && checkResponse.data.length > 0) {
                throw new Error('Username sudah digunakan')
            }

            // Buat user baru
            const response = await axios.post(
                API_URL,
                { name, password },
                { 
                    headers: {
                        ...headers,
                        Prefer: "return=representation"
                    }
                }
            )
            
            return response.data[0]
        } catch (error) {
            console.error("Register error:", error.response?.data || error.message)
            
            // Return error yang lebih jelas
            if (error.response?.status === 404) {
                throw new Error('Table users tidak ditemukan. Pastikan table sudah dibuat di Supabase.')
            } else if (error.response?.status === 401) {
                throw new Error('API Key tidak valid atau RLS policy menghalangi akses.')
            } else if (error.response?.data?.message) {
                throw new Error(error.response.data.message)
            }
            
            throw error
        }
    },

    // AUTH - Login user (name & password only)
    async login(name, password) {
        try {
            // Cari user berdasarkan name dan password
            const response = await axios.get(
                `${API_URL}?name=eq.${name}&password=eq.${password}`,
                { headers }
            )
            
            if (!response.data || response.data.length === 0) {
                throw new Error('Username atau password salah')
            }

            const user = response.data[0]
            
            return {
                access_token: `token-${user.id}-${Date.now()}`,
                user: user
            }
        } catch (error) {
            console.error("Login error:", error)
            throw error
        }
    }
}
