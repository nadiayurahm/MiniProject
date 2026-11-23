# TASK LIST
# Birthday Lunch Invitation Website

**Project:** Birthday Lunch Invitation  
**Version:** 1.0  
**Status:** To Do

---

# 1. MVP Scope

## 1.1 Project Setup

- [x] Membuat project React menggunakan Vite.
- [x] Mengatur struktur folder project.
- [x] Menginstal dan mengonfigurasi GSAP.
- [x] Menyiapkan global CSS dan CSS variables.
- [x] Menyiapkan folder assets untuk gambar, ikon, dan font.
- [x] Membuat konfigurasi data acara secara terpusat.
- [x] Memastikan project dapat dijalankan secara lokal.

## 1.2 Design System & Visual Foundation

- [x] Menentukan color palette utama Royal Purple.
- [x] Mengatur penggunaan Deep Violet, Electric Purple, Metallic Silver, dan Off-White.
- [x] Menentukan typography untuk headline, subheading, dan body text.
- [x] Menentukan spacing, border, radius, dan layout guidelines.
- [x] Menentukan style tombol dan elemen interaktif.
- [x] Membuat komponen sticker, label, barcode, dan decorative elements.
- [x] Menentukan aturan penggunaan graphic elements agar konsisten di seluruh scene.

## 1.3 Scene 01 — Birthday Greeting

- [x] Membuat layout halaman pembuka.
- [x] Menambahkan headline Happy Birthday.
- [x] Menambahkan elemen dekoratif Y2K.
- [x] Membuat tombol NEXT.
- [x] Membuat entrance animation pada headline.
- [x] Membuat animasi sticker dan decorative elements.
- [x] Menghubungkan tombol NEXT dengan navigasi scene berikutnya.

## 1.4 Scene 02 — Interactive Invitation Reveal

- [x] Membuat layout packaging atau envelope-inspired graphic.
- [x] Menambahkan sticker, barcode, dan product labels.
- [x] Membuat interaksi klik pada elemen packaging.
- [x] Membuat animasi packaging terbuka.
- [x] Membuat efek reveal untuk konten undangan.
- [x] Menambahkan navigasi menuju scene berikutnya.
- [x] Memastikan interaksi tidak dapat dipicu berulang kali secara tidak sengaja selama animasi berlangsung.

## 1.5 Scene 03 — Birthday Lunch Information

- [x] Membuat layout informasi acara.
- [x] Menampilkan nama pemilik acara.
- [x] Menampilkan tanggal dan waktu acara.
- [x] Menampilkan nama dan alamat lokasi.
- [x] Menambahkan informasi tambahan jika diperlukan.
- [x] Membuat event information card.
- [x] Mengintegrasikan tombol Google Maps.
- [x] Membuat entrance animation pada informasi acara.
- [x] Menambahkan navigasi menuju scene berikutnya.

## 1.6 Scene 04 — OOTD & RSVP

- [x] Membuat layout OOTD dan dress code.
- [x] Menambahkan referensi gambar outfit.
- [x] Menampilkan informasi dress code.
- [x] Menambahkan keterangan warna atau gaya pakaian.
- [x] Membuat outfit inspiration layout.
- [x] Membuat tombol RSVP.
- [x] Mengintegrasikan tombol RSVP dengan WhatsApp atau layanan formulir eksternal.
- [x] Menambahkan pesan penutup.
- [x] Membuat entrance animation pada setiap elemen.

## 1.7 Scene Navigation & GSAP Animation

- [x] Membuat sistem navigasi empat scene tanpa reload halaman.
- [x] Membuat transisi antar-scene menggunakan GSAP.
- [x] Mengatur animation timeline untuk setiap scene.
- [x] Membuat stagger animation pada elemen teks.
- [x] Membuat pop-up animation pada sticker.
- [x] Membuat hover dan click animation pada tombol.
- [x] Mengatur durasi dan easing animasi.
- [x] Mencegah konflik atau animasi ganda saat pengguna berpindah scene.
- [x] Mengatur cleanup animasi ketika komponen dilepas.

## 1.8 Responsive Design

- [x] Membuat layout mobile-first.
- [x] Menyesuaikan layout untuk smartphone.
- [x] Menyesuaikan layout untuk tablet.
- [x] Menyesuaikan layout untuk desktop.
- [x] Memastikan typography tetap terbaca pada berbagai ukuran layar.
- [x] Menyesuaikan posisi sticker dan decorative elements.
- [x] Memastikan tombol dan elemen interaktif mudah digunakan pada perangkat mobile.
- [x] Memastikan animasi berjalan dengan baik pada perangkat mobile.

## 1.9 Testing & Quality Assurance

- [x] Menguji seluruh navigasi antarscene.
- [x] Menguji interaksi packaging.
- [x] Menguji tombol Google Maps.
- [x] Menguji tombol RSVP.
- [x] Menguji seluruh animasi GSAP.
- [x] Memastikan tidak ada elemen yang saling bertabrakan.
- [x] Memastikan tidak ada horizontal overflow.
- [x] Menguji tampilan pada smartphone, tablet, dan desktop.
- [x] Memeriksa console error dan warning.
- [x] Menguji website pada browser modern.
- [x] Memastikan reduced motion preference berfungsi.

## 1.10 Deployment

- [ ] Menyiapkan production build.
- [ ] Memeriksa hasil build.
- [ ] Memilih platform deployment.
- [ ] Melakukan deployment website.
- [ ] Menguji website melalui URL publik.
- [ ] Memastikan seluruh tautan eksternal berfungsi.
- [ ] Melakukan final visual review.

---

# 2. Priority Notes

Urutan pengerjaan MVP:

| Priority | Section | Reason |
|---|---|---|
| P0 | Project Setup | Fondasi untuk seluruh pengembangan. |
| P0 | Design System | Menjaga konsistensi visual website. |
| P1 | Scene 01 | Menjadi halaman pertama yang dilihat pengguna. |
| P1 | Scene Navigation | Dibutuhkan untuk menghubungkan seluruh scene. |
| P1 | Scene 02 | Menghadirkan pengalaman interaktif membuka undangan. |
| P1 | Scene 03 | Menyampaikan informasi utama acara. |
| P1 | Scene 04 | Menyediakan informasi OOTD dan RSVP. |
| P2 | GSAP Animation | Meningkatkan kualitas pengalaman interaktif. |
| P2 | Responsive Design | Memastikan website nyaman digunakan di berbagai perangkat. |
| P2 | Testing & QA | Memastikan seluruh fitur berjalan dengan benar. |
| P3 | Deployment | Membuat website dapat diakses secara publik. |

**Priority Definition:**
- P0: Fondasi utama yang harus diselesaikan sebelum pengembangan fitur.
- P1: Fitur inti yang wajib tersedia dalam MVP.
- P2: Penyempurnaan interaksi, tampilan, dan kualitas produk.
- P3: Tahap final sebelum website digunakan.

---

# 3. Definition of Done

Sebuah task dianggap selesai apabila:

- [ ] Implementasi sesuai dengan kebutuhan pada PRD.
- [ ] Fitur berjalan sesuai fungsi yang ditentukan.
- [ ] Tidak terdapat error yang mengganggu penggunaan.
- [ ] Tampilan konsisten dengan visual identity Royal Purple Y2K Boyish Street Graphic.
- [ ] Sudah diuji pada ukuran layar yang relevan.
- [ ] Kode tersusun dengan baik dan dapat dipelihara.

---

# 4. Project Completion Criteria

MVP dianggap selesai apabila:

- [ ] Empat scene berhasil dibuat dan terhubung.
- [ ] Seluruh informasi birthday lunch dapat ditampilkan.
- [ ] Pengguna dapat membuka packaging secara interaktif.
- [ ] Pengguna dapat membuka lokasi acara melalui Google Maps.
- [ ] Pengguna dapat mengakses referensi OOTD.
- [ ] Pengguna dapat melakukan konfirmasi melalui RSVP.
- [ ] Animasi berjalan sesuai alur interaksi.
- [ ] Website responsif pada mobile dan desktop.
- [ ] Website berhasil di-deploy dan dapat diakses melalui URL publik.

---

**Catatan:** TASK.md digunakan sebagai checklist pelaksanaan pengembangan. Setiap task dapat diperbarui statusnya selama proses development. Detail kebutuhan produk tetap mengacu pada PRD.md.