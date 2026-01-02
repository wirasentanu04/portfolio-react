import proyek1 from "../assets/proyek1-1-1.png";
import proyek2 from "../assets/proyek1-3.png";
import proyek3 from "../assets/proyek1.png";
import proyek4 from "../assets/proyek1-2.png";
import proyek5 from "../assets/proyek5.png";
import proyek6 from "../assets/proyek6.png";



export const projects1 = [
  {
    slug: "toilet-inspection-card",
    title: "Digitalisasi Toilet Inspection Card Berbasis Website",
    desc: "Digitalisasi pelaporan inpeksi toilet berbasis web bertujuan untuk meningkatkan efisiensi dan konsistensi pengelolaan pemeriksaan toilet melalui pemanfaatan teknologi web. Digitalisasi memungkinkan proses pemeriksaan dilakukan dengan cepat dan akurat, sehingga memungkinkan pemantauan kondisi toilet secara real-time. Selain itu, digitalisasi memungkinkan pengguna untuk berpartisipasi dalam melaporkan masalah dan memberikan umpan balik, meningkatkan kesadaran akan kebersihan toilet, dan meningkatkan partisipasi masyarakat dalam pemeliharaan fasilitas. Oleh karena itu, tujuan dari proyek ini adalah untuk meningkatkan kualitas pengelolaan fasilitas sanitasi dan toilet melalui penggunaan teknologi web yang inovatif dan responsif.",
    tech: ["HTML", "PHP", "Bootstrap", "MySQL", "JavaScript"],
    sections: [
      {
        title: "Halaman Home Pada Website",
        text: "Halaman Home merupakan halaman utama sistem yang berfungsi sebagai pusat informasi awal bagi pengguna. Halaman ini menampilkan gambaran umum sistem inspeksi toilet, informasi kondisi terbaru, serta menu navigasi yang memudahkan petugas dan admin dalam mengakses fitur-fitur utama secara terstruktur dan efisien.",
        image: proyek1,
      },
      {
        title: "Halaman Login",
        text: "Halaman Login digunakan sebagai mekanisme autentikasi pengguna sebelum mengakses sistem. Melalui halaman ini, admin dan petugas diwajibkan melakukan proses login guna memastikan bahwa setiap aktivitas inspeksi dan pengelolaan data dilakukan oleh pengguna yang berwenang, sehingga keamanan dan integritas data dapat terjaga.",
        image: proyek2,
      },
      {
        title: "Halaman Pelaporan",
        text: "Halaman Pelaporan berfungsi sebagai media bagi petugas untuk melakukan pengisian laporan inspeksi toilet secara digital. Pada halaman ini, petugas dapat mencatat kondisi kebersihan, fasilitas yang tersedia, serta mengunggah dokumentasi berupa foto sebagai bukti pendukung hasil inspeksi yang dilakukan.",
        image: proyek3,
      },
      {
        title: "Halaman Hasil Pelaporan",
        text: "Halaman Hasil Pelaporan menyajikan data hasil inspeksi toilet yang telah dikirim oleh petugas. Informasi yang ditampilkan meliputi detail lokasi, waktu inspeksi, kondisi kebersihan, serta status hasil pemeriksaan, sehingga memudahkan pihak pengelola dalam melakukan pemantauan dan evaluasi.",
        image: proyek4,
      },
      {
        title: "Halaman Feedback",
        text: "Halaman Feedback digunakan oleh admin atau pihak pengelola untuk memberikan tanggapan, catatan, maupun evaluasi terhadap laporan inspeksi yang telah masuk. Fitur ini bertujuan untuk mendukung proses pengawasan serta meningkatkan kualitas pengelolaan kebersihan toilet secara berkelanjutan.",
        image: proyek5,
      },
      {
        title: "Halaman Hasil Feedback",
        text: "Halaman Hasil Feedback menampilkan rekapitulasi feedback yang telah diberikan oleh admin terhadap laporan inspeksi. Melalui halaman ini, petugas dapat mengetahui hasil evaluasi, rekomendasi perbaikan, serta tindak lanjut yang perlu dilakukan berdasarkan hasil inspeksi yang telah dilaporkan.",
        image: proyek6,
      },
    ],
  },
];