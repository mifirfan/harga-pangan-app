# 📱 Harga Pangan App

Aplikasi mobile dan web berbasis **Ionic + Angular** (frontend) serta **Express.js** (backend) yang memungkinkan pengguna mengecek **harga bahan pokok secara real-time** di kota-kota besar Indonesia seperti **Jakarta**, **Bandung**, dan **Semarang**.

---

## 🎯 Latar Belakang

Kebutuhan masyarakat akan informasi harga bahan pokok yang **aktual dan mudah diakses** sangat tinggi, terutama saat harga berfluktuasi. Informasi harga biasanya tersebar, tidak seragam, dan sulit diakses oleh masyarakat umum.

### 🎯 Masalah
- Informasi harga sering tidak terpusat
- Tidak ada aplikasi ringan yang menampilkan harga terkini per kota
- Banyak warga kesulitan membandingkan harga antar kota

### 🧩 Solusi
Harga Pangan App menyediakan platform untuk:
- Mengecek harga **beras**, **cabai**, **minyak goreng**, **telur**, **daging**, dll
- Menampilkan data harga **per kota**
- Memberikan tampilan yang **mobile-friendly** dan sederhana

---

## 🧾 Input dan Output

### ✅ **Input**:
- Nama kota (Jakarta, Bandung, Semarang, dll)
- Request API dari frontend (`GET /api/prices?city=...`)

### ✅ **Output**:
```json
{
  "success": true,
  "data": [
    {
      "name": "Beras",
      "price": 13500,
      "unit": "kg",
      "lastUpdate": "2025-07-17"
    },
    ...
  ]
}
