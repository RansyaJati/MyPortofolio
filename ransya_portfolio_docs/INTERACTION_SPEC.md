# Interaction Specification

## Fixed navbar

-   Fixed di bagian atas.
-   Nama/wordmark di kiri, anchor links di kanan.
-   Active section indicator sederhana.
-   Warna navbar menyesuaikan section aktif.
-   Mobile memakai menu ringkas dan accessible.

## Hero

-   Entrance animation ringan.
-   Headline besar dan supporting visual kecil.
-   CTA menuju Technical dan Creative.
-   Jangan menunda akses konten dengan intro animation panjang.

## Theme transitions

Urutan tema: - Introduction: light - Technical: light - Creative: dark -
About: light - Connect: light

Gunakan transisi CSS smooth. Tidak ada full-page transition atau scroll
hijacking. Navbar harus tetap terbaca. Hormati `prefers-reduced-motion`.

## Project card

Hover/focus dapat memperbesar gambar sedikit dan menampilkan metadata
tambahan. Judul dan informasi penting tetap tersedia tanpa hover,
terutama di mobile.

## Artwork card

Hover/focus menampilkan overlay, judul, kategori, dan tahun bila
tersedia. Gunakan opacity/transform. Jangan jadikan hover satu-satunya
cara untuk membaca informasi.

## Blender animation card

Default: poster/thumbnail, video tidak langsung diputar. Hover/focus:
video muted, loop, playsInline. Saat pointer/focus keluar: pause video.
Touch: sediakan tombol play atau tap interaction. Jika video gagal:
poster tetap terlihat. Batasi video yang aktif secara bersamaan.

## Acceptance criteria

-   Anchor navigation bekerja.
-   Active section akurat dan stabil.
-   Navbar kontras pada light/dark.
-   Karya dapat diakses dengan pointer, keyboard, dan touch.
-   Video tidak autoplay massal.
-   Reduced-motion tersedia.
