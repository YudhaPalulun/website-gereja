// Sumber data berita — masih berupa array biasa (belum CMS).
// Untuk menambah berita baru, cukup tambahkan satu objek di array ini.
// "slug" dipakai sebagai alamat URL, jadi harus unik dan tanpa spasi.

export interface Berita {
  slug: string;
  tanggal: string;
  judul: string;
  ringkasan: string;
  gambar: string;
  gambarDetail?: string;
  isi: string[];
}

export const berita: Berita[] = [
  {
    slug: 'baksos-panti-asuhan-kasih-agape',
    tanggal: '18 Jul 2026',
    judul: 'Bakti sosial di panti asuhan "Kasih Agape"',
    ringkasan:
      'Dalam rangka HUT GPT. Kristus Gembala Kupang yang ke-30, jemaat mengumpulkan berkat berupa sembako untuk dibagikan ke Panti Asuhan Kasih Agape.',
    gambar: '/images/berita/berita-baksos-agape.jpg',
    gambarDetail: '/images/berita/berita-baksos-agape-detail.jpg',
    isi: [
      'Dalam rangka HUT GPT. Kristus Gembala Kupang yang ke-30, jemaat bergotong royong mengumpulkan berkat berupa sembako untuk dibagikan kepada anak-anak di Panti Asuhan Kasih Agape.',
      'Kegiatan ini menjadi salah satu wujud syukur jemaat atas perjalanan 30 tahun gereja, sekaligus menghidupi semangat berbagi kasih kepada sesama, khususnya kepada anak-anak yang membutuhkan.',
    ],
  },
  {
    slug: 'baksos-panti-asuhan-syalom',
    tanggal: '18 Jul 2026',
    judul: 'Bakti sosial di panti asuhan "Syalom"',
    ringkasan:
      'Dalam rangka HUT GPT. Kristus Gembala Kupang yang ke-30, jemaat mengumpulkan berkat berupa sembako untuk dibagikan ke Panti Asuhan Syalom.',
    gambar: '/images/berita/berita-baksos-syalom.jpg',
    gambarDetail: '/images/berita/berita-baksos-syalom-detail.jpg',
    isi: [
      'Dalam rangka HUT GPT. Kristus Gembala Kupang yang ke-30, jemaat bergotong royong mengumpulkan berkat berupa sembako untuk dibagikan kepada anak-anak di Panti Asuhan Syalom.',
      'Kegiatan ini menjadi salah satu wujud syukur jemaat atas perjalanan 30 tahun gereja, sekaligus menghidupi semangat berbagi kasih kepada sesama, khususnya kepada anak-anak yang membutuhkan.',
    ],
  },
  {
    slug: 'ibadah-youth-generation-of-christ',
    tanggal: '26 Jul 2026',
    judul: 'Ibadah Youth Generation of Christ',
    ringkasan: 'Tema: "Designed by Purpose" (Ulangan 22:5).',
    gambar: '/images/berita/berita-youth-generation.jpg',
    gambarDetail: '/images/berita/berita-youth-generation-detail.jpg',
    isi: [
      'Ibadah Youth Generation of Christ kali ini mengangkat tema "Designed by Purpose" yang diambil dari Ulangan 22:5, mengajak setiap pemuda untuk hidup sesuai dengan rancangan dan panggilan yang Tuhan percayakan.',
      'Ibadah berlangsung penuh sukacita, diikuti oleh pemuda-pemudi jemaat yang hadir bersama untuk saling menguatkan dan bertumbuh bersama dalam iman.',
    ],
  },
];