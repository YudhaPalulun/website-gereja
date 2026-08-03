import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const berita = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/berita' }),
  schema: z.object({
    tanggal: z.coerce.date(),
    judul: z.string(),
    ringkasan: z.string(),
    gambar: z.string(),
    gambarDetail: z.string().optional(),
  }),
});

const jadwal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jadwal' }),
  schema: z.object({
    title: z.string(),
    hari: z.string(),
    jam: z.string(),
    image: z.string(),
    urutan: z.number().default(1),
    }),
  });

const kegiatan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kegiatan' }),
  schema: z.object({
    judul: z.string(),
    tanggal: z.coerce.date(),
    isi: z.string(),
    gambar: z.string(),
  }),
});

export const collections = { berita, jadwal, kegiatan };