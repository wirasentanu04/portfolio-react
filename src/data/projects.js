// IMPORT SEMUA GAMBAR YANG DIPAKAI
import proyek1 from "../assets/proyek1-1-1.png";
import proyek2 from "../assets/proyek1-3.png";
import proyek3 from "../assets/proyek1.png";
import proyek4 from "../assets/proyek1-2.png";
import proyek5 from "../assets/proyek5.png";
import proyek6 from "../assets/proyek6.png";


import desa1 from "../assets/desa1.png";

export const projects = [
  {
    slug: "toilet-inspection-card",
    title: "Digitalisasi Toilet Inspection Card Berbasis Website",
    desc: "Digitalisasi pelaporan inpeksi toilet berbasis web bertujuan untuk meningkatkan efisiensi dan konsistensi pengelolaan pemeriksaan toilet melalui pemanfaatan teknologi web. Digitalisasi memungkinkan proses pemeriksaan dilakukan dengan cepat dan akurat, sehingga memungkinkan pemantauan kondisi toilet secara real-time. Selain itu, digitalisasi memungkinkan pengguna untuk berpartisipasi dalam melaporkan masalah dan memberikan umpan balik, meningkatkan kesadaran akan kebersihan toilet, dan meningkatkan partisipasi masyarakat dalam pemeliharaan fasilitas. Oleh karena itu, tujuan dari proyek ini adalah untuk meningkatkan kualitas pengelolaan fasilitas sanitasi dan toilet melalui penggunaan teknologi web yang inovatif dan responsif.",
    tech: ["HTML", "PHP", "Bootstrap", "MySQL", "JavaScript"],
    sections: [
      {
        title: "Halaman Home Pada Website",
        text: "Petugas dapat mengisi form inspeksi langsung melalui web, mencatat kondisi toilet, dan mengunggah bukti foto secara instan.",
        image: proyek1,
      },
      {
        title: "Halaman Login",
        text: "Dilengkapi sistem login untuk admin dan petugas agar setiap data inspeksi lebih aman dan dapat dipertanggungjawabkan.",
        image: proyek2,
      },
    {
        title: "Halaman Pelaporan",
        text: "Dilengkapi sistem login untuk admin dan petugas agar setiap data inspeksi lebih aman dan dapat dipertanggungjawabkan.",
        image: proyek3,
      },
    {
        title: "Halaman Hasil Pelaporan",
        text: "Sistem secara otomatis menghasilkan laporan kebersihan yang dapat diunduh dalam format PDF oleh pihak manajemen.",
        image: proyek4,
      },
          {
        title: "Halaman Feedback",
        text: "Sistem secara otomatis menghasilkan laporan kebersihan yang dapat diunduh dalam format PDF oleh pihak manajemen.",
        image: proyek5,
      },
        {
        title: "Halaman Hasil Feedback",
        text: "Sistem secara otomatis menghasilkan laporan kebersihan yang dapat diunduh dalam format PDF oleh pihak manajemen.",
        image: proyek6,
      },
    ],
  },

  {
    slug: "platform-desa-arahan-kidul",
    title: "Platform Layanan Desa Arahan Kidul",
    desc: "Website layanan desa berbasis Laravel.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    sections: [
      {
        title: "Halaman Beranda Desa",
        text: "Statistik pengajuan dan pengaduan warga.",
        image: desa1, // ✅ PAKAI IMPORT
      },
    ],
  },
];