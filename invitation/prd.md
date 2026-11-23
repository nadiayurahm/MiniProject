# Product Requirements Document (PRD)
# Birthday Lunch Invitation Website

**Product Name:** Birthday Lunch Invitation  
**Version:** 1.2  
**Status:** Draft  
**Platform:** Web Application

---

## 1. Product Goal

### Problem Statement

Undangan ulang tahun konvensional, baik melalui pesan teks maupun gambar digital, cenderung hanya menyampaikan informasi acara secara statis. Pengalaman penerima undangan terbatas pada membaca informasi tanpa adanya interaksi yang memberikan kesan personal dan menarik.

Selain itu, informasi seperti tanggal, waktu, lokasi, dan dress code dapat tersebar dalam beberapa pesan sehingga penerima perlu mencari kembali informasi yang dibutuhkan.

### Product Goal

Membangun website undangan ulang tahun digital yang interaktif untuk menyampaikan informasi birthday lunch melalui pengalaman visual yang menarik, personal, dan mudah diakses.

Website ini diharapkan dapat:
- Memberikan pengalaman menerima undangan yang lebih menarik dibandingkan undangan digital statis.
- Menyampaikan seluruh informasi acara dalam satu platform.
- Memudahkan penerima undangan mengakses lokasi dan referensi outfit.
- Mempermudah proses konfirmasi kehadiran melalui fitur RSVP.

---

## 2. Target Users

Target pengguna merupakan orang-orang yang menerima undangan birthday lunch, khususnya teman, sahabat, dan orang-orang terdekat pemilik acara.

Karakteristik target pengguna:
- Menggunakan smartphone atau perangkat desktop untuk mengakses website.
- Terbiasa menggunakan browser dan platform digital.
- Membutuhkan informasi acara yang jelas dan mudah ditemukan.
- Menginginkan akses praktis tanpa harus membuat akun atau melakukan registrasi.

### User Needs

1. Pengguna membutuhkan informasi acara yang lengkap dalam satu halaman atau rangkaian tampilan.
2. Pengguna ingin mengetahui tanggal, waktu, dan lokasi acara dengan mudah.
3. Pengguna membutuhkan referensi outfit atau dress code sebelum menghadiri acara.
4. Pengguna membutuhkan cara sederhana untuk mengonfirmasi kehadiran.
5. Pengguna menginginkan pengalaman membuka undangan yang menarik dan mudah digunakan.

---

## 3. Core Features

### 3.1 Birthday Greeting

Menampilkan halaman pembuka yang berisi ucapan ulang tahun dan elemen visual sebagai pengantar sebelum pengguna membuka undangan.

Fitur:
- Menampilkan headline Happy Birthday.
- Menampilkan elemen grafis dekoratif.
- Menyediakan tombol NEXT untuk melanjutkan ke bagian berikutnya.

### 3.2 Interactive Invitation Reveal

Memberikan pengalaman interaktif kepada pengguna ketika membuka undangan.

Fitur:
- Menampilkan visual packaging atau envelope-inspired graphic.
- Menyediakan interaksi klik untuk membuka packaging.
- Menampilkan konten undangan melalui animasi reveal.
- Menyediakan navigasi menuju informasi acara.

### 3.3 Birthday Lunch Information

Menyediakan informasi lengkap mengenai acara birthday lunch.

Informasi yang ditampilkan:
- Nama pemilik acara : Dhani Birthday Lunch
- Hari dan tanggal : 28 November 2026
- Waktu : Lunch 
- Alamat lokasi : Secret, Direction by your princess
- Informasi tambahan mengenai acara jika diperlukan.

Fitur:
- Menampilkan informasi acara dalam satu bagian terstruktur.
- Menyediakan tombol untuk membuka lokasi melalui Google Maps.
- Memudahkan pengguna membaca kembali detail acara.

### 3.4 OOTD & Dress Code

Menyediakan panduan outfit agar pengguna mengetahui gaya atau warna pakaian yang diharapkan untuk acara.

Fitur:
- Menampilkan informasi dress code.
- Menampilkan referensi outfit dalam bentuk gambar.
- Menampilkan keterangan warna atau gaya pakaian.
- Menyediakan visual inspiration yang mudah dipahami.

### 3.5 RSVP

Memungkinkan pengguna memberikan konfirmasi kehadiran secara praktis.

Fitur:
- Menyediakan tombol RSVP.
- Mengarahkan pengguna ke media konfirmasi yang telah ditentukan.
- Menggunakan WhatsApp atau layanan formulir eksternal sebagai media konfirmasi.

---

## 4. User Flow

Website terdiri dari empat scene utama yang ditampilkan secara berurutan tanpa reload halaman.

| Scene | Nama | Tujuan |
|---|---|---|
| 01 | Birthday Greeting | Menyambut pengguna melalui ucapan ulang tahun. |
| 02 | Invitation Reveal | Memberikan pengalaman interaktif saat membuka undangan. |
| 03 | Birthday Lunch | Menampilkan informasi utama acara. |
| 04 | OOTD & RSVP | Memberikan panduan outfit dan konfirmasi kehadiran. |

### User Journey

1. Pengguna membuka website melalui tautan undangan.
2. Pengguna melihat halaman Birthday Greeting.
3. Pengguna menekan tombol NEXT.
4. Pengguna berinteraksi dengan elemen packaging untuk membuka undangan.
5. Pengguna melihat detail informasi birthday lunch.
6. Pengguna membuka lokasi acara melalui Google Maps jika diperlukan.
7. Pengguna melihat referensi outfit dan dress code.
8. Pengguna menekan tombol RSVP untuk mengonfirmasi kehadiran.

---

## 5. Functional Requirements

| ID | Requirement | Description | Priority |
|---|---|---|---|
| FR-01 | Scene Navigation | Pengguna dapat berpindah antarscene tanpa reload halaman. | High |
| FR-02 | Birthday Greeting | Website menampilkan halaman pembuka berupa ucapan ulang tahun. | High |
| FR-03 | Interactive Reveal | Pengguna dapat membuka undangan melalui interaksi. | High |
| FR-04 | Event Information | Website menampilkan informasi lengkap birthday lunch. | High |
| FR-05 | Maps Integration | Pengguna dapat membuka lokasi acara melalui Google Maps. | High |
| FR-06 | OOTD Information | Website menampilkan referensi outfit dan dress code. | High |
| FR-07 | RSVP Integration | Pengguna dapat melakukan konfirmasi kehadiran. | High |
| FR-08 | Responsive Layout | Website menyesuaikan tampilan dengan ukuran layar perangkat. | High |
| FR-09 | Animation | Website memiliki animasi pada elemen dan transisi antarscene. | Medium |

---

## 6. Visual & Design Requirements

### 6.1 Design Concept

**Royal Purple Y2K Boyish Street Graphic — Playful Packaging Aesthetic**

Konsep visual terinspirasi dari desain packaging produk, streetwear graphic, editorial poster, dan visual culture era Y2K.

Karakteristik desain:
- Playful, bold, quirky, dan energetic.
- Menggunakan layout asimetris dan layered composition.
- Menggabungkan typography besar dengan elemen dekoratif.
- Memiliki karakter visual yang sedikit messy tetapi tetap terstruktur.
- Menggunakan elemen grafis yang memberikan kesan futuristic dan playful.

### 6.2 Color Palette

| Color | Hex Code | Usage |
|---|---|---|
| Dominant Navy | #12224A | Warna utama dan identitas dominan website. |
| Midnight Navy | #0A1128 | Background gelap dan elemen kontras. |
| Accent Purple | #8B5CF6 | Sentuhan aksen ungu halus (*slightly purple*). |
| Metallic Silver | #DCD9E2 | Efek chrome dan packaging elements. |
| Off-White | #F8F5EF | Background terang dan area konten. |

Biru Navy (*Dominant Navy*) menjadi warna dominan yang didukung oleh Midnight Navy, aksen subtle Accent Purple, Metallic Silver, dan Off-White.

### 6.3 Typography

- Bold dan condensed untuk headline.
- Quirky atau playful untuk teks dekoratif.
- Sans-serif untuk informasi utama.
- Menggunakan variasi ukuran dan ketebalan untuk menciptakan hierarki visual.

### 6.4 Graphic Elements

- Sticker dan doodle.
- Barcode dan product label.
- Oversized numbers.
- Graphic cutouts.
- Starburst dan playful shapes.
- Metallic atau chrome-inspired elements.
- Decorative lines dan symbols.

---

## 7. Animation Requirements

Website menggunakan GSAP untuk mengatur animasi dan interaksi visual.

Jenis animasi yang dibutuhkan:

| Element | Animation |
|---|---|
| Headline | Slide-in, fade-in, dan stagger |
| Sticker | Pop-up, scale, dan rotation |
| Decorative Elements | Floating atau subtle movement |
| Packaging | Open dan reveal animation |
| Scene Transition | Slide, fade, atau layered transition |
| Buttons | Hover dan click feedback |
| Product Labels | Staggered entrance |

Karakter animasi harus smooth, playful, dan energetic tanpa mengganggu kenyamanan pengguna.

---

## 8. Success Metrics

Keberhasilan produk diukur berdasarkan indikator berikut:

| Metric | Success Criteria |
|---|---|
| Website Accessibility | Pengguna dapat membuka website melalui browser modern. |
| Scene Completion | Seluruh empat scene dapat diakses tanpa error. |
| Navigation Functionality | Seluruh tombol navigasi berjalan sesuai fungsinya. |
| Event Information | Seluruh informasi acara dapat ditampilkan dengan jelas. |
| Maps Integration | Tautan lokasi berhasil mengarahkan pengguna ke Google Maps. |
| RSVP Functionality | Pengguna berhasil diarahkan ke media konfirmasi kehadiran. |
| Responsive Design | Seluruh scene dapat digunakan pada mobile dan desktop. |
| Visual Consistency | Seluruh scene mengikuti identitas Royal Purple Y2K Boyish Street Graphic. |

Target penggunaan fitur RSVP dan tingkat penyelesaian user journey dapat dievaluasi setelah website dibagikan kepada penerima undangan.

---

## 9. Non-Functional Requirements

### 9.1 Performance
- Website memiliki waktu loading yang wajar.
- Ukuran gambar dan aset visual dioptimalkan.
- Animasi tidak menyebabkan performa website menurun secara signifikan.

### 9.2 Responsive Design
- Mendukung smartphone, tablet, dan desktop.
- Mengutamakan pendekatan mobile-first.
- Komposisi visual tetap terjaga pada berbagai ukuran layar.

### 9.3 Usability
- Navigasi mudah dipahami.
- Informasi acara mudah ditemukan.
- Tombol memiliki area interaksi yang memadai.
- Transisi antarscene tidak membingungkan pengguna.

### 9.4 Accessibility
- Memiliki kontras warna yang memadai.
- Teks informasi mudah dibaca.
- Interaksi utama dapat digunakan dengan keyboard.
- Mendukung preferensi reduced motion.

---

## 10. Technology Stack

| Technology | Purpose |
|---|---|
| React | Membangun struktur website berbasis komponen. |
| Vite | Development server dan build tool. |
| HTML5 | Struktur dokumen website. |
| CSS3 | Styling dan responsive layout. |
| JavaScript | Logika dan interaksi website. |
| GSAP | Animasi dan transisi antarscene. |

Pengembangan menggunakan pendekatan component-based agar setiap scene dan elemen interaktif dapat dikelola secara modular.

---

## 11. Project Scope

### In Scope
- Website undangan ulang tahun digital.
- Empat scene interaktif.
- Animasi dan transisi GSAP.
- Informasi birthday lunch.
- Referensi OOTD dan dress code.
- Integrasi Google Maps.
- Integrasi RSVP eksternal.
- Responsive design.

### Out of Scope
- Sistem login dan registrasi.
- Dashboard administrasi.
- Database tamu.
- Sistem manajemen undangan.
- Payment gateway.
- Backend khusus untuk penyimpanan RSVP.

---

## 12. Open Questions

Informasi yang masih perlu dilengkapi sebelum implementasi final:

- Nama pemilik acara.
- Usia ulang tahun.
- Tanggal dan waktu acara.
- Nama dan alamat lokasi.
- Google Maps URL.
- Detail dress code.
- Referensi gambar OOTD.
- Media konfirmasi RSVP.
- Kebutuhan backsound atau audio interaktif.

**Catatan:** PRD ini menjelaskan kebutuhan dan ruang lingkup produk yang harus dibangun. Detail teknis implementasi, struktur kode, dan keputusan arsitektur dapat didokumentasikan secara terpisah.