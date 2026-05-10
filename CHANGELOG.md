# Changelog - Boutique Dashboard

## Perubahan Tema: Dari Restoran ke Boutique

### Perubahan Utama:

#### 1. **Dashboard (src/pages/main/Dashboard.jsx)**
   - Mengubah tampilan dari expense tracker umum menjadi sistem pengeluaran boutique
   - Data pengeluaran disesuaikan dengan operasional boutique:
     - Stok Pakaian
     - Pengiriman
     - Sewa Toko
     - Marketing
     - Jahit & Alterasi
   - Kategori pengeluaran boutique:
     - Stok Pakaian
     - Aksesoris
     - Sewa & Operasional
     - Marketing
     - Gaji Karyawan
   - Teks dalam Bahasa Indonesia

#### 2. **Sidebar (src/components/Sidebar.jsx)**
   - Menambahkan profil user di bagian atas sidebar
   - Mengubah menu navigasi menjadi:
     - Dashboard
     - Pengeluaran
     - Koleksi
     - Laporan
     - Penjualan
     - Pengaturan
   - Tema dark sidebar (background hitam)
   - Icon disesuaikan dengan tema boutique

#### 3. **Layout (src/layouts/MainLayout.jsx)**
   - Menghilangkan Header component
   - Layout lebih sederhana dan clean

#### 4. **Styling (src/assets/tailwind.css)**
   - Sidebar dengan background dark (#1a1a1a)
   - Menambahkan styling untuk profil user di sidebar
   - Menyembunyikan footer dan header yang tidak diperlukan
   - Menu dengan hover effect yang smooth

### Fitur Tampilan:
- ✅ Sidebar dark dengan profil user
- ✅ Dashboard expenses dengan chart
- ✅ Kategori pengeluaran boutique
- ✅ Card "Hemat lebih banyak" dengan tips
- ✅ Layout responsive dengan sidebar kanan
- ✅ Semua teks dalam Bahasa Indonesia
- ✅ Icon yang relevan dengan boutique (pakaian, tas, dll)

### Cara Menjalankan:
```bash
cd reactframework-master
npm install
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`
