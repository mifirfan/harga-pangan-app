# 📱 Harga Pangan App

Aplikasi mobile & web berbasis **Ionic + Angular** (frontend) dan **Express.js** (backend) untuk mengecek harga bahan pokok secara real-time di kota-kota besar di Indonesia seperti **Jakarta**, **Bandung**, dan **Semarang**.

---

## 🚀 Fitur Unggulan

- 🔍 Cari harga bahan pokok berdasarkan kota
- 📦 Data harga: Beras, Cabai, Minyak Goreng, Telur, Daging, dll
- 🔁 Update data dari API backend (Express)
- 💡 Tampilan antarmuka responsif, ringan, dan user-friendly
- 📱 Siap di-*build* ke aplikasi Android/iOS via Capacitor

---

## 📦 Teknologi yang Digunakan

### 🔧 Backend
- **Node.js + Express.js**
- Routing modular (`/api/prices`)
- Dummy data JSON (bisa diganti live API/scraping)
- `cors` middleware untuk akses frontend

### 💻 Frontend (Ionic Angular)
- Ionic Framework
- Angular 17+
- Komponen: `ion-header`, `ion-select`, `ion-item`, `ion-list`, dll
- HTTP client untuk fetch API
- Tab navigation (halaman utama di `tab1.page.ts/html`)

---

## 🗂️ Struktur Project

