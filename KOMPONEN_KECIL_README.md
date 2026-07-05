# 🧩 Refactor Member Dashboard - Komponen Kecil

## ✅ Yang Sudah Dibuat

Member Dashboard sekarang menggunakan **komponen-komponen kecil** yang mudah dipahami, seperti Dashboard admin.

---

## 📁 Struktur Komponen Baru

```
src/components/member/
├── StatusCard.jsx      ← Menampilkan status GOLD MEMBER + poin
├── BenefitCard.jsx     ← Menampilkan 1 benefit (Diskon, Gratis Ongkir, dll)
├── RiwayatItem.jsx     ← Menampilkan 1 item riwayat belanja
└── PromoBanner.jsx     ← Menampilkan banner promo

src/pages/member/
└── Dashboard.jsx       ← Menggunakan komponen-komponen di atas
```

---

## 🎯 Cara Kerja (Mudah Dipahami)

### 1. **StatusCard.jsx** - Kartu Status Member

**Fungsi:** Menampilkan status keanggotaan dan poin reward

**Props (Parameter):**
- `status` → Teks status (contoh: "GOLD MEMBER")
- `sejak` → Tanggal jadi member (contoh: "Januari 2024")
- `poin` → Jumlah poin (contoh: "1,250")

**Cara Pakai:**
```javascript
<StatusCard 
    status="GOLD MEMBER"
    sejak="Januari 2024"
    poin="1,250"
/>
```

**Output:**
```
╔════════════=═══════════════════╗
║ Status Keanggotaan | Poin      ║
║ GOLD MEMBER        | 1,250     ║
║ Member sejak       |           ║
║ Januari 2024       |           ║
╚════════════════════════════════╝
```

---

### 2. **BenefitCard.jsx** - Kartu Benefit

**Fungsi:** Menampilkan 1 benefit member (Diskon, Gratis Ongkir, dll)

**Props:**
- `icon` → Icon (dari react-icons)
- `warna` → Warna background icon (contoh: "bg-rose-100")
- `judul` → Judul benefit (contoh: "Diskon 30%")
- `deskripsi` → Deskripsi (contoh: "Untuk semua produk")

**Cara Pakai:**
```javascript
<BenefitCard 
    icon={FaTags}
    warna="bg-rose-100"
    judul="Diskon 30%"
    deskripsi="Untuk semua produk"
/>
```

**Output:**
```
╔═══════════════╗
║   [Icon]      ║
║  Diskon 30%   ║
║  Untuk semua  ║
║    produk     ║
╚═══════════════╝
```

---

### 3. **RiwayatItem.jsx** - Item Riwayat

**Fungsi:** Menampilkan 1 item riwayat belanja

**Props:**
- `namaProduk` → Nama produk (contoh: "Dress Floral Premium")
- `tanggal` → Tanggal pembelian (contoh: "12 Jan 2024")
- `harga` → Harga (contoh: "350.000")
- `status` → Status (contoh: "Selesai")

**Cara Pakai:**
```javascript
<RiwayatItem 
    namaProduk="Dress Floral Premium"
    tanggal="12 Jan 2024"
    harga="350.000"
    status="Selesai"
/>
```

**Output:**
```
Dress Floral Premium          Rp 350.000
12 Jan 2024                   Selesai
─────────────────────────────────────────
```

---

### 4. **PromoBanner.jsx** - Banner Promo

**Fungsi:** Menampilkan banner promo dengan tombol

**Props:**
- `emoji` → Emoji promo (tidak dipakai di design sekarang)
- `judul` → Judul promo (contoh: "Promo Spesial Member")
- `deskripsi` → Deskripsi promo
- `onKlik` → Fungsi saat tombol diklik

**Cara Pakai:**
```javascript
<PromoBanner 
    emoji="🎉"
    judul="Promo Spesial Member"
    deskripsi="Diskon tambahan 10%..."
    onKlik={() => alert('Belanja!')}
/>
```

**Output:**
```
╔══════════════════════════════════════════╗
║ Promo Spesial Member                     ║
║ Diskon tambahan 10%...                   ║
║                   [Belanja Sekarang]     ║
╚══════════════════════════════════════════╝
```

---

## 📝 Cara Pakai di Dashboard.jsx

### Langkah 1: Import Komponen
```javascript
import StatusCard from "../../components/member/StatusCard";
import BenefitCard from "../../components/member/BenefitCard";
import RiwayatItem from "../../components/member/RiwayatItem";
import PromoBanner from "../../components/member/PromoBanner";
```

### Langkah 2: Buat Data (Array)
```javascript
// Data benefit - array dengan 3 object
const benefits = [
    { icon: FaTags, warna: "bg-rose-100", judul: "Diskon 30%", deskripsi: "..." },
    { icon: FaShoppingBag, warna: "bg-rose-100", judul: "Gratis Ongkir", deskripsi: "..." },
    { icon: FaGift, warna: "bg-rose-100", judul: "Akses Pre-Order", deskripsi: "..." }
];

// Data riwayat - array dengan 3 object
const riwayatBelanja = [
    { namaProduk: "...", tanggal: "...", harga: "...", status: "..." },
    // ... 2 item lainnya
];
```

### Langkah 3: Tampilkan dengan Loop
```javascript
{/* Benefit - Loop 3 kali */}
{benefits.map((benefit, index) => (
    <BenefitCard 
        key={index}
        icon={benefit.icon}
        warna={benefit.warna}
        judul={benefit.judul}
        deskripsi={benefit.deskripsi}
    />
))}

{/* Riwayat - Loop 3 kali */}
{riwayatBelanja.map((item, index) => (
    <RiwayatItem 
        key={index}
        namaProduk={item.namaProduk}
        tanggal={item.tanggal}
        harga={item.harga}
        status={item.status}
    />
))}
```

---

## 🧠 Konsep Mudah Dipahami

### 1. **Komponen = Lego**
Seperti main lego, kita buat **balok-balok kecil** (komponen), lalu **rakit jadi bangunan besar** (halaman).

```
BenefitCard  +  StatusCard  +  RiwayatItem  =  Dashboard
   (balok)         (balok)        (balok)       (bangunan)
```

### 2. **Props = Parameter**
Props seperti **parameter fungsi**. Kita kasih data, komponen tampilkan.

```javascript
// Fungsi biasa
function tambah(a, b) {
    return a + b;
}
tambah(2, 3); // Output: 5

// Komponen dengan props
function BenefitCard({ judul, deskripsi }) {
    return <div>{judul}: {deskripsi}</div>;
}
<BenefitCard judul="Diskon" deskripsi="30%" />
```

### 3. **Array.map() = Loop**
Untuk tampilkan banyak item, pakai `.map()`

```javascript
// Tanpa map (manual 3x)
<BenefitCard judul="Diskon 30%" />
<BenefitCard judul="Gratis Ongkir" />
<BenefitCard judul="Pre-Order" />

// Dengan map (otomatis loop)
{benefits.map((benefit) => (
    <BenefitCard judul={benefit.judul} />
))}
```

---

## 📊 Perbandingan Sebelum & Sesudah

### ❌ Sebelum (Kode Panjang)
```javascript
// Semua kode jadi satu di Dashboard.jsx (120 baris)
<div className="bg-white rounded-lg p-6 shadow text-center">
    <div className="w-12 h-12 bg-purple-100 rounded-full...">
        <FaTags ... />
    </div>
    <h3...>Diskon 30%</h3>
    <p...>Untuk semua produk</p>
</div>
// Diulangi 3x untuk 3 benefit
```

### ✅ Sesudah (Komponen Kecil)
```javascript
// Dashboard.jsx (40 baris saja!)
{benefits.map((benefit) => (
    <BenefitCard {...benefit} />
))}

// BenefitCard.jsx (komponen terpisah)
export default function BenefitCard({ judul, deskripsi }) {
    return <div>...</div>;
}
```

**Keuntungan:**
- ✅ Kode lebih pendek
- ✅ Mudah dibaca
- ✅ Gampang dipakai ulang
- ✅ Gampang di-debug

---

## 🎓 Belajar Step by Step

### Level 1: Pakai Komponen yang Sudah Ada
```javascript
// Tinggal import dan pakai
<StatusCard status="GOLD MEMBER" sejak="..." poin="..." />
```

### Level 2: Edit Data
```javascript
// Ubah data di array
const benefits = [
    { judul: "Diskon 40%", ... }  // ← Edit di sini
];
```

### Level 3: Bikin Komponen Sendiri
```javascript
// Buat komponen baru
export default function MyCard({ title }) {
    return <div>{title}</div>;
}
```

---

## ✅ Checklist

- ✅ 4 Komponen kecil dibuat (StatusCard, BenefitCard, dll)
- ✅ Dashboard.jsx di-refactor (lebih pendek)
- ✅ Menggunakan array + map (tidak copy-paste 3x)
- ✅ Komentar jelas di setiap baris
- ✅ Tidak ada error
- ✅ Tampilan sama seperti sebelumnya

---

**Dashboard Member sekarang lebih mudah dipahami! 🎉**
