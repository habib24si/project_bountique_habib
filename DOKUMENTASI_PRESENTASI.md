# 📖 DOKUMENTASI APLIKASI BOUTIQUE - UNTUK PRESENTASI

## 📌 RINGKASAN APLIKASI

**Nama Aplikasi:** HSA Boutique Management System  
**Teknologi:** React + Supabase  
**Tujuan:** Sistem manajemen boutique dengan 3 role (Admin, Member, Guest)

---

## 🎯 FITUR UTAMA

### 1️⃣ **ADMIN** (Pengelola Toko)
- ✅ Dashboard - Lihat statistik penjualan
- ✅ Tambah Model - Tambah produk baju baru
- ✅ Model Tersedia - Lihat semua produk
- ✅ Penjualan - Data transaksi
- ✅ Laporan - Laporan profit dan produk terlaris
- ✅ Manajemen User - Kelola user

### 2️⃣ **MEMBER** (Pelanggan Terdaftar)
- ✅ Dashboard - Info akun dan benefit
- ✅ Belanja - Lihat produk dengan diskon 30%
- ✅ Reward - Tukar poin dengan hadiah
- ✅ Profil - Edit data diri

### 3️⃣ **GUEST** (Pengunjung Umum)
- ✅ Profil Company - Info tentang boutique
- ✅ Produk - Katalog produk
- ✅ Pesanan - Tracking pesanan
- ✅ Histori - Riwayat belanja

---

## 🗂️ STRUKTUR FOLDER

```
src/
├── pages/              # Halaman utama
│   ├── auth/          # Login & Register
│   ├── main/          # Halaman Admin
│   ├── member/        # Halaman Member
│   └── guest/         # Halaman Guest
│
├── components/        # Komponen kecil (reusable)
│   ├── admin/        # Komponen khusus admin
│   ├── member/       # Komponen khusus member
│   └── guest/        # Komponen khusus guest
│
├── services/         # API Service (koneksi ke Supabase)
│   ├── modelsAPI.js      # CRUD model baju
│   ├── penjualanAPI.js   # CRUD penjualan
│   └── notesAPI.js       # Auth (login/register)
│
├── layouts/          # Template halaman
│   ├── MainLayout.jsx    # Layout Admin
│   ├── MemberLayout.jsx  # Layout Member
│   └── GuestLayout.jsx   # Layout Guest
│
└── data/             # Data dummy (tidak dipakai lagi)
```

---

## 🔄 ALUR APLIKASI (FLOW)

### **A. ALUR LOGIN & REGISTER**

```
1. User buka /login
2. Masukkan username & password
3. Klik "Sign In"
4. System cek ke Supabase (tabel: bountique)
5. Jika benar → Redirect ke Dashboard Admin
6. Jika salah → Tampil error
```

**File yang terlibat:**
- `src/pages/auth/Login.jsx` - Halaman login
- `src/services/notesAPI.js` - Fungsi `login()` untuk cek user

**Code Login (Sederhana):**
```javascript
// Login user
async login(name, password) {
    // Cari user di database berdasarkan username & password
    const res = await axios.get(`${API_URL}?name=eq.${name}&password=eq.${password}`)
    
    // Kalau tidak ada user → Error
    if (res.data.length === 0) throw new Error('Username atau password salah')
    
    // Kalau ada → Return token
    return {
        access_token: `token-${res.data[0].id}`,
        user: res.data[0]
    }
}
```

---

### **B. ALUR ADMIN TAMBAH PRODUK**

```
1. Admin login → Masuk Dashboard
2. Klik menu "Tambah Model"
3. Klik tombol "+ Tambah Model"
4. Isi form (nama, kategori, ukuran, harga, stok, warna, deskripsi)
5. Klik "Simpan"
6. Data tersimpan ke Supabase (tabel: models)
7. Tabel refresh otomatis → Produk baru muncul
```

**File yang terlibat:**
- `src/pages/main/TambahModel.jsx` - Halaman tambah model
- `src/components/admin/model/ModelFormModal.jsx` - Form modal
- `src/services/modelsAPI.js` - Fungsi `createModel()` untuk simpan

**Code Tambah Model (Sederhana):**
```javascript
// Fungsi untuk submit form
const handleSubmit = async (e) => {
    e.preventDefault(); // Jangan refresh halaman
    
    // Buat object data baru
    const newModel = {
        nama: form.nama,
        kategori: form.kategori,
        harga: form.harga,
        stok: parseInt(form.stok),
        // ... data lainnya
    };
    
    // Kirim ke Supabase
    await modelsAPI.createModel(newModel);
    
    // Refresh data dari database
    await fetchModels();
    
    // Tutup form
    setShowForm(false);
};
```

---

### **C. ALUR MEMBER BELANJA**

```
1. User klik menu "Member" di sidebar admin
2. Masuk halaman Member Dashboard
3. Klik menu "Belanja"
4. Sistem fetch data produk dari Supabase
5. Tampilkan semua produk dengan diskon 30%
6. Member klik "Beli Sekarang"
7. Produk masuk keranjang
```

**File yang terlibat:**
- `src/pages/member/Belanja.jsx` - Halaman belanja
- `src/components/member/belanja/ProdukCard.jsx` - Kartu produk
- `src/services/modelsAPI.js` - Fungsi `fetchModels()` untuk ambil data

**Code Fetch Produk (Sederhana):**
```javascript
// State untuk simpan data produk
const [modelsData, setModelsData] = useState([]);
const [loading, setLoading] = useState(true);

// Fetch data saat halaman dibuka
useEffect(() => {
    fetchModels(); // Panggil fungsi fetch
}, []);

// Fungsi untuk ambil data dari Supabase
const fetchModels = async () => {
    try {
        setLoading(true); // Tampilkan loading
        const data = await modelsAPI.fetchModels(); // Ambil dari Supabase
        setModelsData(data); // Simpan ke state
    } catch (error) {
        console.error("Gagal memuat data:", error);
    } finally {
        setLoading(false); // Sembunyikan loading
    }
};
```

---

### **D. ALUR DATA DARI DATABASE KE TAMPILAN**

```
┌─────────────────────────────────────────────────────────┐
│                   SUPABASE DATABASE                      │
│  Tabel: models, penjualan, bountique                    │
└─────────────────────────────────────────────────────────┘
                          ↕️
┌─────────────────────────────────────────────────────────┐
│                   API SERVICE LAYER                      │
│  File: modelsAPI.js, penjualanAPI.js, notesAPI.js      │
│  Fungsi: fetchModels(), createModel(), deleteModel()    │
└─────────────────────────────────────────────────────────┘
                          ↕️
┌─────────────────────────────────────────────────────────┐
│                   REACT COMPONENT (PAGES)                │
│  File: TambahModel.jsx, Belanja.jsx, Penjualan.jsx     │
│  State: useState() untuk simpan data                     │
│  Effect: useEffect() untuk fetch data                    │
└─────────────────────────────────────────────────────────┘
                          ↕️
┌─────────────────────────────────────────────────────────┐
│              KOMPONEN KECIL (REUSABLE)                   │
│  File: ProdukCard.jsx, StatCard.jsx, ModelCard.jsx     │
│  Props: Terima data dari parent component                │
└─────────────────────────────────────────────────────────┘
                          ↓
                    TAMPILAN USER
```

---

## 📊 DATABASE SUPABASE

### **Tabel 1: models** (Data Produk Baju)
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | BIGSERIAL | ID otomatis |
| nama | TEXT | Nama produk (contoh: "Dress Floral") |
| kategori | TEXT | Kategori (Dress, Blouse, Rok, dll) |
| ukuran | TEXT | Ukuran tersedia (S, M, L, XL) |
| harga | TEXT | Harga (format: "350.000") |
| stok | INTEGER | Jumlah stok |
| warna | TEXT | Warna tersedia |
| deskripsi | TEXT | Deskripsi produk |

### **Tabel 2: penjualan** (Data Transaksi)
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | BIGSERIAL | ID otomatis |
| tanggal | TEXT | Tanggal transaksi |
| model | TEXT | Nama produk yang dibeli |
| jumlah | INTEGER | Jumlah beli |
| harga | TEXT | Harga satuan |
| total | TEXT | Total harga |
| status | TEXT | Status (Selesai/Pending) |

### **Tabel 3: bountique** (Data User)
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | BIGSERIAL | ID otomatis |
| name | TEXT | Username |
| password | TEXT | Password |

---

## 🧩 KONSEP COMPONENT-BASED

**Kenapa pakai komponen kecil?**
- ✅ Mudah dibaca dan dipahami
- ✅ Bisa dipakai ulang (reusable)
- ✅ Mudah di-maintain
- ✅ Setiap komponen fokus 1 tugas

**Contoh:**

**❌ CARA LAMA (Tanpa Komponen):**
```javascript
// TambahModel.jsx - Semua code ada di 1 file (500 baris!)
return (
    <div>
        <table>
            {models.map(model => (
                <tr>
                    <td>{model.nama}</td>
                    <td>{model.kategori}</td>
                    <td>{model.harga}</td>
                    {/* ... 20 baris lagi */}
                </tr>
            ))}
        </table>
    </div>
);
```

**✅ CARA BARU (Pakai Komponen):**
```javascript
// TambahModel.jsx - Simpel dan jelas (100 baris)
return (
    <div>
        <table>
            {models.map((model, index) => (
                <ModelTableRow 
                    key={model.id}
                    model={model}
                    index={index}
                    onDelete={handleDelete}
                />
            ))}
        </table>
    </div>
);

// ModelTableRow.jsx - Komponen terpisah (30 baris)
export default function ModelTableRow({ model, index, onDelete }) {
    return (
        <tr>
            <td>{model.nama}</td>
            <td>{model.kategori}</td>
            <td>{model.harga}</td>
            <td>
                <button onClick={() => onDelete(model.id)}>
                    Hapus
                </button>
            </td>
        </tr>
    );
}
```

---

## 🔑 KONSEP PENTING (UNTUK PRESENTASI)

### **1. useState() - Menyimpan Data**
```javascript
// Buat state untuk simpan data
const [models, setModels] = useState([]);

// Cara update state
setModels([...models, modelBaru]); // Tambah data baru
setModels(models.filter(m => m.id !== id)); // Hapus data
```

**Penjelasan:**
- `models` = Variabel untuk baca data
- `setModels()` = Fungsi untuk ubah data
- Kalau state berubah → Tampilan otomatis update

---

### **2. useEffect() - Fetch Data Saat Load**
```javascript
// Fetch data saat halaman pertama kali dibuka
useEffect(() => {
    fetchModels(); // Panggil fungsi fetch
}, []); // [] = Jalankan 1 kali saja
```

**Penjelasan:**
- `useEffect()` = Hook untuk side effect
- `[]` = Dependency array (kosong = jalankan sekali)
- Dipakai untuk fetch data dari Supabase

---

### **3. Async/Await - Tunggu Response**
```javascript
// Async function untuk fetch data
const fetchModels = async () => {
    try {
        const data = await modelsAPI.fetchModels(); // Tunggu sampai selesai
        setModels(data); // Baru simpan ke state
    } catch (error) {
        console.error(error); // Kalau error, tampilkan di console
    }
};
```

**Penjelasan:**
- `async` = Fungsi yang butuh waktu (tunggu response)
- `await` = Tunggu sampai selesai baru lanjut
- `try/catch` = Handle error kalau gagal

---

### **4. Props - Kirim Data ke Komponen**
```javascript
// Parent component
<ProdukCard 
    produk={item}           // Kirim data produk
    onBeli={beliProduk}     // Kirim fungsi
/>

// Child component
export default function ProdukCard({ produk, onBeli }) {
    return (
        <div>
            <h3>{produk.nama}</h3>
            <p>Rp {produk.harga}</p>
            <button onClick={() => onBeli(produk)}>
                Beli
            </button>
        </div>
    );
}
```

**Penjelasan:**
- Props = Cara kirim data dari parent ke child
- Seperti parameter function
- Child terima data lewat `{ namaProp }`

---

### **5. Map() - Loop Array**
```javascript
// Array produk
const products = [
    { id: 1, nama: "Dress A" },
    { id: 2, nama: "Dress B" },
];

// Loop dengan map()
{products.map((product) => (
    <ProdukCard 
        key={product.id}    // Key wajib untuk performa
        produk={product}    // Data produk
    />
))}
```

**Penjelasan:**
- `.map()` = Loop array dan return JSX
- `key` = ID unik untuk setiap item (wajib!)
- Ganti for-loop tradisional di React

---

## 📱 ROUTING (NAVIGASI HALAMAN)

```javascript
// App.jsx - Definisi semua route
<Routes>
    {/* Admin Routes */}
    <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="tambah-model" element={<TambahModel />} />
        <Route path="penjualan" element={<Penjualan />} />
    </Route>

    {/* Member Routes */}
    <Route path="/member" element={<MemberLayout />}>
        <Route index element={<MemberDashboard />} />
        <Route path="belanja" element={<Belanja />} />
    </Route>

    {/* Guest Routes */}
    <Route path="/guest" element={<GuestLayout />}>
        <Route index element={<Produk />} />
    </Route>

    {/* Auth Routes */}
    <Route path="/login" element={<Login />} />
</Routes>
```

**URL yang dihasilkan:**
- `/` → Admin Dashboard
- `/tambah-model` → Admin Tambah Model
- `/member` → Member Dashboard
- `/member/belanja` → Member Belanja
- `/guest` → Guest Produk
- `/login` → Login

---

## 🎨 STYLING

**Teknologi:** Tailwind CSS

**Contoh:**
```javascript
<div className="bg-white rounded-xl shadow p-6">
    <h1 className="text-3xl font-bold text-gray-800">
        Judul
    </h1>
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Klik Saya
    </button>
</div>
```

**Penjelasan Class:**
- `bg-white` = Background putih
- `rounded-xl` = Sudut membulat
- `shadow` = Bayangan
- `p-6` = Padding 6
- `text-3xl` = Text ukuran besar
- `font-bold` = Text tebal
- `hover:bg-blue-600` = Warna saat hover

---

## 🚀 CARA JALANKAN APLIKASI

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser
http://localhost:5173
```

---

## 📝 TIPS PRESENTASI

### **Hal yang Perlu Dijelaskan:**

1. **Tujuan Aplikasi**
   - Sistem manajemen boutique
   - 3 role: Admin, Member, Guest
   - Real-time data dengan Supabase

2. **Teknologi yang Digunakan**
   - React (Frontend)
   - Supabase (Database)
   - Tailwind CSS (Styling)
   - React Router (Routing)

3. **Fitur Unggulan**
   - Component-based architecture (mudah maintain)
   - Real-time sync data (admin ubah → member lihat)
   - Responsive design
   - Clean code (mudah dibaca)

4. **Demo Live**
   - Login sebagai admin
   - Tambah produk baru
   - Pindah ke member → produk muncul
   - Tampilkan laporan penjualan

5. **Challenge & Solution**
   - Challenge: Data tidak persistent
   - Solution: Integrasi Supabase
   - Challenge: Code terlalu panjang
   - Solution: Pisah jadi komponen kecil

---

## ❓ PERTANYAAN YANG MUNGKIN DITANYA

**Q: Kenapa pakai Supabase?**  
A: Karena gratis, mudah setup, dan real-time database.

**Q: Kenapa pakai komponen kecil?**  
A: Supaya code mudah dibaca, di-maintain, dan bisa dipakai ulang.

**Q: Apa bedanya Admin, Member, dan Guest?**  
A: 
- Admin = Kelola produk & laporan
- Member = Belanja dengan diskon
- Guest = Lihat produk tanpa login

**Q: Data disimpan dimana?**  
A: Di Supabase (cloud database PostgreSQL).

**Q: Kalau admin hapus produk, member gimana?**  
A: Produk langsung hilang karena pakai database yang sama.

---

## 🎯 KESIMPULAN

Aplikasi ini adalah **sistem manajemen boutique modern** dengan:
- ✅ Arsitektur clean & maintainable
- ✅ Real-time data synchronization
- ✅ Component-based architecture
- ✅ User-friendly interface
- ✅ Role-based access (Admin/Member/Guest)

**Tech Stack:**
- Frontend: React + Tailwind CSS
- Backend: Supabase (PostgreSQL)
- State Management: React Hooks (useState, useEffect)
- Routing: React Router v6

---

📌 **File ini dibuat untuk membantu presentasi tugas akhir**  
📧 **Kontak:** habib24si@mahasiswa.pcr.ac.id  
📅 **Last Update:** Januari 2025
