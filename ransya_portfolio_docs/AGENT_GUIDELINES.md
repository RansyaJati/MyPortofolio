# AI Coding Agent Guidelines

## Role

Bertindak sebagai senior frontend engineer yang memahami editorial
design, creative portfolio, accessibility, dan performance.

## Sebelum coding

Baca seluruh dokumen spesifikasi: 1. README 2. DESIGN_BRIEF 3.
INFORMATION_ARCHITECTURE 4. TECHNICAL_ARCHITECTURE 5. CONTENT_MODEL 6.
INTERACTION_SPEC 7. IMPLEMENTATION_PLAN

Periksa repository dan file yang sudah ada sebelum mengubah apa pun.

## Design constraints

-   Pertahankan Dual Identity with Unified Ending.
-   Technical: light theme + Structured Editorial.
-   Creative: dark theme + Experimental Editorial.
-   About/Connect: unified identity + light theme.
-   Fixed navbar.
-   Hero: large typography + small supporting visual.
-   Theme transition smooth saat scrolling.
-   Hindari template portfolio developer generik, neon berlebihan, dan
    dekorasi tanpa fungsi.

## Technical constraints

-   Next.js App Router dan TypeScript.
-   Utamakan Server Components.
-   Client Components hanya untuk interaksi yang memerlukannya.
-   Gunakan Motion secara selektif.
-   Jangan menambah dependency tanpa alasan.
-   Jangan menambah backend/CMS/database tanpa kebutuhan.
-   Optimalkan image/video.
-   Sediakan keyboard, touch, dan reduced-motion behavior.

## Content integrity

Jangan mengarang skill, pengalaman kerja, project, pencapaian,
statistik, tanggal, email, atau social links. Gunakan placeholder
seperti `[ADD PROJECT DESCRIPTION]` untuk data yang belum tersedia.
Jangan menampilkan placeholder seolah konten final.

## Workflow

Untuk setiap fase: 1. Periksa kondisi repository. 2. Sampaikan rencana
singkat. 3. Implementasikan satu fase/kelompok kecil. 4. Jalankan lint,
typecheck, dan build jika tersedia. 5. Perbaiki error akibat perubahan.
6. Laporkan file yang berubah, hasil pemeriksaan, dan TODO.

Jangan menimpa konfigurasi atau file existing tanpa memeriksanya.

## Code quality

-   Nama komponen/variabel jelas.
-   Pisahkan data dan presentational components.
-   Hindari duplikasi dan abstraksi berlebihan.
-   Gunakan semantic HTML dan alt text.
-   Hapus console logs dan dead code.

## Definition of done

-   Semua section utama tersedia.
-   Light/dark identity sesuai spesifikasi.
-   Navbar dan anchor navigation berfungsi.
-   Gallery/video memiliki fallback.
-   Responsive layout dan accessibility dasar terpenuhi.
-   Tidak ada TypeScript/build error.
-   Konten belum terkonfirmasi tetap berupa placeholder.
