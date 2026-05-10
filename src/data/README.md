# Data Format untuk Models

File: `modelsData.js`

## Format Data Model Baju

```javascript
const modelsData = [
    { 
        id: 1, 
        nama: "Dress Floral Summer", 
        kategori: "Dress", 
        ukuran: "S, M, L, XL",
        harga: "350.000", 
        stok: 25,
        warna: "Pink, White, Blue",
        deskripsi: "Dress cantik dengan motif floral untuk musim panas"
    },
    // tambahkan data lainnya...
];

export default modelsData;
```

## Field yang Diperlukan:

- **id** (number): ID unik untuk setiap model
- **nama** (string): Nama model baju
- **kategori** (string): Kategori baju (Dress, Blouse, Rok, Celana, Outer)
- **ukuran** (string): Ukuran yang tersedia (contoh: "S, M, L, XL")
- **harga** (string): Harga dalam format string (contoh: "350.000")
- **stok** (number): Jumlah stok tersedia
- **warna** (string): Warna yang tersedia (contoh: "Pink, White, Blue")
- **deskripsi** (string): Deskripsi singkat tentang model

## Contoh Data Lengkap:

```javascript
const modelsData = [
    { 
        id: 1, 
        nama: "Dress Floral Summer", 
        kategori: "Dress", 
        ukuran: "S, M, L, XL",
        harga: "350.000", 
        stok: 25,
        warna: "Pink, White, Blue",
        deskripsi: "Dress cantik dengan motif floral untuk musim panas"
    },
    { 
        id: 2, 
        nama: "Blouse Casual Elegant", 
        kategori: "Blouse", 
        ukuran: "M, L, XL",
        harga: "250.000", 
        stok: 30,
        warna: "Black, White, Navy",
        deskripsi: "Blouse casual yang cocok untuk berbagai acara"
    },
    { 
        id: 3, 
        nama: "Rok Midi Classic", 
        kategori: "Rok", 
        ukuran: "S, M, L",
        harga: "200.000", 
        stok: 20,
        warna: "Brown, Black, Grey",
        deskripsi: "Rok midi dengan potongan klasik dan elegan"
    },
];

export default modelsData;
```

## Kategori yang Tersedia:
- Dress
- Blouse
- Rok
- Celana
- Outer

---

# Data Format untuk Penjualan

File: `penjualanData.js`

## Format Data Penjualan

```javascript
const penjualanData = [
    { 
        id: 1, 
        tanggal: "10 Mei 2026", 
        model: "Dress Floral", 
        jumlah: 2, 
        harga: "350.000", 
        total: "700.000", 
        status: "Selesai" 
    },
    // tambahkan data lainnya...
];

export default penjualanData;
```

## Field yang Diperlukan:

- **id** (number): ID unik untuk setiap transaksi
- **tanggal** (string): Tanggal transaksi (contoh: "10 Mei 2026")
- **model** (string): Nama model yang terjual
- **jumlah** (number): Jumlah item yang terjual
- **harga** (string): Harga satuan dalam format string (contoh: "350.000")
- **total** (string): Total harga dalam format string (contoh: "700.000")
- **status** (string): Status transaksi ("Selesai" atau "Pending")

## Contoh Data Lengkap:

```javascript
const penjualanData = [
    { 
        id: 1, 
        tanggal: "10 Mei 2026", 
        model: "Dress Floral", 
        jumlah: 2, 
        harga: "350.000", 
        total: "700.000", 
        status: "Selesai" 
    },
    { 
        id: 2, 
        tanggal: "10 Mei 2026", 
        model: "Blouse Casual", 
        jumlah: 1, 
        harga: "250.000", 
        total: "250.000", 
        status: "Selesai" 
    },
    { 
        id: 3, 
        tanggal: "09 Mei 2026", 
        model: "Rok Midi", 
        jumlah: 3, 
        harga: "200.000", 
        total: "600.000", 
        status: "Pending" 
    },
];

export default penjualanData;
```

## Status yang Tersedia:
- **Selesai** - Transaksi sudah selesai (badge hijau)
- **Pending** - Transaksi masih pending (badge kuning)

---

## Catatan:
- Data models digunakan oleh halaman **Tambah Model** dan **Model Tersedia**
- Data penjualan digunakan oleh halaman **Penjualan**
- Pastikan setiap data memiliki ID yang unik
- Format harga menggunakan string tanpa "Rp" (akan ditambahkan otomatis di tampilan)
- Total pada penjualan harus dihitung: jumlah × harga
