# Website Gereja Pelita Kasih (Fase 1)

Kerangka awal website gereja, dibangun dengan [Astro](https://astro.build).
Fase ini berisi 4 halaman dengan konten contoh (hardcoded) — belum ada CMS.
Tujuannya supaya kamu bisa langsung melihat dan menyunting tampilan sebelum
menambah kerumitan panel admin.

## Menjalankan di komputer kamu

Butuh [Node.js](https://nodejs.org) versi 18 ke atas.

```bash
npm install
npm run dev
```

Buka `http://localhost:4321` di browser. Setiap kali kamu menyimpan file,
halaman otomatis refresh.

Perintah lain:

```bash
npm run build     # membangun versi produksi ke folder dist/
npm run preview   # menjalankan hasil build tadi secara lokal
```

## Struktur folder

```
src/
├── layouts/
│   └── Base.astro        <- kerangka HTML (head, font, TopBar, Header, Footer)
├── components/
│   ├── TopBar.astro      <- bar tipis kontak cepat (email, telepon, alamat)
│   ├── Header.astro      <- navigasi utama (sticky saat discroll)
│   ├── Footer.astro      <- info kontak & jadwal singkat di bawah
│   ├── HeroSlider.astro  <- slideshow foto di beranda (panah, dot, autoplay)
│   └── WovenDivider.astro <- pembatas bermotif tenun antar bagian
├── styles/
│   └── global.css        <- semua warna, font, dan komponen dasar (di sini
│                             kamu ubah warna/tipografi untuk seluruh situs)
└── pages/
    ├── index.astro        -> /
    ├── tentang.astro       -> /tentang
    ├── ibadah.astro        -> /ibadah
    └── kontak.astro        -> /kontak
```

Astro membuat alamat halaman otomatis dari nama file di `src/pages/`. Kalau
ingin menambah halaman baru, cukup tambah file `.astro` baru di folder itu.

## Yang WAJIB kamu ganti sebelum publikasi

Semua ini masih data contoh. Cari dan ganti di file terkait:

- **Nama gereja & alamat** — `src/components/Header.astro`,
  `src/components/Footer.astro`, `src/pages/tentang.astro`,
  `src/pages/ibadah.astro`, `src/pages/kontak.astro`
- **Jadwal ibadah** — `src/pages/index.astro` (array `pengumuman`) dan
  `src/pages/ibadah.astro` (array `jadwal`)
- **Sejarah, visi-misi, pengakuan iman, nama majelis** —
  `src/pages/tentang.astro`
- **Peta lokasi** — di `src/pages/ibadah.astro`, ganti `src` pada `<iframe>`
  dengan tautan sematan dari Google Maps gerejamu sendiri (Google Maps →
  Bagikan → Sematkan peta → salin kode `src="..."`)
- **Nomor WhatsApp, email, rekening** — `src/pages/kontak.astro` dan
  `src/components/Footer.astro`
- **Foto slideshow di beranda** — sekarang masih gambar SVG bertuliskan
  "ganti dengan foto...". Ganti dengan foto asli:
  1. Simpan foto (format `.jpg` atau `.webp`, idealnya lebar 1600px) ke
     `public/images/hero/`, misalnya `hero-1.jpg`.
  2. Buka `src/pages/index.astro`, cari array `slides` di bagian atas file.
  3. Ganti nilai `image:` dari `/images/hero/slide-1.svg` menjadi
     `/images/hero/hero-1.jpg`, dan sesuaikan teks `kicker`, `title`,
     `excerpt`, `ctaLabel`, `ctaHref` sesuai foto barunya.
  4. Boleh tambah atau kurangi jumlah slide — cukup tambah/hapus objek di
     array yang sama.
- **Favicon** — `public/images/favicon.svg` (ikon kecil di tab browser)

## Tentang desain

Palet warna terinspirasi tenun ikat NTT: indigo tua sebagai warna dasar,
marigold sebagai warna aksen. Motif zigzag ganda (`WovenDivider.astro`)
dipakai sebagai pembatas antar bagian di setiap halaman — elemen pembeda
supaya situs ini tidak terlihat seperti template generik.

Semua token warna dan tipografi ada di satu tempat:
`src/styles/global.css`, bagian paling atas (`:root { ... }`). Ubah di sana,
efeknya langsung ke seluruh situs.

## Belum termasuk di fase ini (sengaja)

Sesuai rencana kita: bangun dulu halaman statis sampai mantap, baru tambah
bagian yang lebih rumit. Menyusul di fase berikutnya:

1. **Deploy ke Netlify** — hubungkan repo GitHub ke Netlify, deploy otomatis
   setiap kali ada perubahan.
2. **Panel admin Decap CMS** — supaya tim warta bisa mengisi pengumuman dan
   jadwal tanpa menyentuh kode.
3. **Halaman tambahan** — arsip khotbah, daftar pelayanan lengkap, formulir
   permohonan doa yang benar-benar terkirim (perlu Formspree/Netlify Forms).

Form kontak di `/kontak` saat ini juga belum tersambung ke mana pun —
itu perlu langkah nomor 3 di atas.
