import smartFish1 from "../assets/SmartFish_1.jpeg";
import smartFish2 from "../assets/SmartFish_2.jpeg";
import smartFish3 from "../assets/SmartFish_3.jpeg";
import smartFish4 from "../assets/SmartFish_4.jpeg";
import smartFish5 from "../assets/SmartFish_5.jpeg";
import smartFish6 from "../assets/SmartFish_6.jpeg";
import smartFish7 from "../assets/SmartFish_7.jpeg";
import mobileDesa1 from "../assets/MobileDesa_1.png";
import mobileDesa2 from "../assets/MobileDesa_2.png";
import mobileDesa3 from "../assets/MobileDesa_3.png";
import mobileDesa4 from "../assets/MobileDesa_4.png";
import mobileDesa5 from "../assets/MobileDesa_5.png";
import mobileDesa6 from "../assets/MobileDesa_6.png";
import mobileDesa7 from "../assets/MobileDesa_7.png";
import mobileDesa8 from "../assets/MobileDesa_8.png";
import mobileDesa9 from "../assets/MobileDesa_9.png";
import mobileDesa10 from "../assets/MobileDesa_10.png";

export const projects3 = [
  {
    slug: "smartfish-berbasis-iot",
    title: "SmartFish Berbasis IoT",
    shortDesc:
      "Aplikasi mobile SmartFish untuk pemantauan kualitas air kolam, riwayat data, dan kontrol pakan ikan secara real-time.",
    desc: "SmartFish merupakan aplikasi mobile berbasis IoT yang dirancang untuk membantu pemantauan kualitas air kolam dan manajemen pakan ikan secara real-time. Aplikasi ini menampilkan status kondisi kolam, tingkat kekeruhan air, persentase sisa pakan, riwayat pemantauan, serta fitur pengaturan profil pengguna dalam satu antarmuka yang sederhana. Dengan alur penggunaan yang ringkas dan informatif, SmartFish membantu pembudidaya memantau kondisi kolam secara cepat agar pemberian pakan lebih terkontrol dan kualitas air tetap optimal.",
    tech: ["IoT", "Aplikasi Mobile", "Pemantauan Air", "Kontrol Pakan", "Firebase"],
    sections: [
      {
        title: "Halaman Masuk Aplikasi",
        text: "Halaman masuk menjadi pintu utama bagi pengguna untuk mengakses sistem SmartFish. Melalui formulir email dan kata sandi yang sederhana, pengguna dapat masuk ke aplikasi dengan cepat sehingga proses pemantauan kolam dan pengelolaan pakan dapat dilakukan secara aman dan terpersonalisasi.",
        image: smartFish1,
      },
      {
        title: "Halaman Registrasi Akun",
        text: "Halaman registrasi digunakan untuk membuat akun baru sebelum pengguna menggunakan seluruh fitur SmartFish. Form ini menyediakan input email dan password agar proses pendaftaran berlangsung singkat, jelas, dan mudah dipahami oleh pengguna baru.",
        image: smartFish2,
      },
      {
        title: "Halaman Monitoring Kolam",
        text: "Halaman monitoring kolam menampilkan informasi utama yang dibutuhkan pengguna secara real-time, seperti status kondisi kolam, tingkat kekeruhan air, dan persentase sisa pakan. Pada halaman ini juga tersedia kontrol pemberian pakan instan dengan beberapa pilihan takaran untuk membantu proses budidaya menjadi lebih praktis dan terukur.",
        image: smartFish3,
      },
      {
        title: "Halaman Riwayat Pemantauan dan Pakan",
        text: "Halaman riwayat menyajikan catatan pemantauan kualitas air dan aktivitas pemberian pakan berdasarkan waktu. Informasi seperti nilai kekeruhan, sisa pakan, dan jumlah pakan yang diberikan membantu pengguna meninjau kondisi kolam secara berkala dan mengambil keputusan berdasarkan data sebelumnya.",
        image: smartFish4,
      },
      {
        title: "Halaman Edit Profil",
        text: "Halaman Edit Profil memungkinkan pengguna memperbarui identitas akun seperti nama dan tautan foto profil. Fitur ini membantu personalisasi akun agar informasi pengguna di dalam aplikasi tetap relevan dan mudah dikenali.",
        image: smartFish5,
      },
      {
        title: "Halaman Tentang SmartFish",
        text: "Halaman Tentang SmartFish menjelaskan ringkasan aplikasi, tujuan penggunaan, dan fitur utama yang tersedia. Informasi ini membantu pengguna memahami manfaat aplikasi, terutama pada aspek monitoring kualitas air secara real-time dan pengelolaan pakan ikan dalam satu platform.",
        image: smartFish6,
      },
      {
        title: "Halaman Profil Pengguna",
        text: "Halaman profil pengguna menampilkan identitas akun, status pengguna, ringkasan data perangkat, serta akses ke menu penting seperti edit profil, notifikasi, informasi aplikasi, dan logout. Susunan menu ini membuat pengelolaan akun terasa lebih rapi dan mudah dijangkau.",
        image: smartFish7,
      },
    ],
  },
  {
    slug: "aplikasi-pelayanan-desa-berbasis-mobile",
    title: "Aplikasi Pelayanan Desa Berbasis Mobile",
    shortDesc:
      "Aplikasi mobile pelayanan desa untuk akses informasi, pengajuan surat, pengaduan, aspirasi, dan pengelolaan admin secara lebih praktis.",
    desc: "Aplikasi Pelayanan Desa Berbasis Mobile dirancang untuk memudahkan masyarakat dalam mengakses layanan desa langsung melalui perangkat seluler. Aplikasi ini menyediakan fitur informasi desa, berita, profil desa, pengajuan surat, pengaduan, aspirasi, serta panel admin untuk mengelola data dan menindaklanjuti laporan warga. Dengan antarmuka yang sederhana dan alur penggunaan yang jelas, aplikasi ini membantu meningkatkan akses layanan publik desa agar lebih cepat, tertata, dan mudah dijangkau oleh masyarakat.",
    tech: ["Flutter", "Layanan Desa", "Pengajuan Surat", "Pengaduan", "Admin"],
    sections: [
      {
        title: "Halaman Beranda Aplikasi Desa",
        text: "Halaman beranda menjadi pusat navigasi utama bagi pengguna untuk mengakses berbagai layanan desa. Pada halaman ini ditampilkan sambutan singkat, informasi umum desa, serta menu-menu penting seperti profil desa, pengajuan surat, berita, informasi UMKM, aspirasi, pengaduan, dan data penduduk agar pengguna dapat menjangkau fitur yang dibutuhkan dengan lebih cepat.",
        image: mobileDesa1,
      },
      {
        title: "Halaman Berita Desa",
        text: "Halaman berita desa menampilkan daftar informasi dan kegiatan terbaru yang berkaitan dengan lingkungan desa. Setiap kartu berita memuat judul, ringkasan isi, dan akses lanjutan sehingga masyarakat dapat mengikuti perkembangan desa secara lebih mudah melalui aplikasi mobile.",
        image: mobileDesa2,
      },
      {
        title: "Halaman Profil Desa",
        text: "Halaman profil desa menyajikan informasi penting mengenai identitas desa, sejarah, serta visi dan misi pemerintahan desa. Fitur ini membantu pengguna memahami gambaran umum desa sekaligus menjadi sumber informasi resmi yang dapat diakses kapan saja.",
        image: mobileDesa3,
      },
      {
        title: "Halaman Form Pengajuan Surat",
        text: "Halaman form pengajuan surat digunakan oleh warga untuk mengajukan kebutuhan administrasi desa secara digital. Melalui isian seperti nama lengkap, NIK, jenis surat, keperluan, dan lampiran, proses permohonan surat menjadi lebih terstruktur, praktis, dan tidak bergantung pada pencatatan manual.",
        image: mobileDesa4,
      },
      {
        title: "Halaman Form Pengaduan",
        text: "Halaman form pengaduan menjadi sarana bagi masyarakat untuk menyampaikan laporan atau keluhan terkait kondisi di lingkungan desa. Form ini menyediakan input identitas, nomor telepon, kategori pengaduan, isi laporan, dan unggahan gambar agar laporan yang masuk lebih lengkap dan mudah ditindaklanjuti.",
        image: mobileDesa5,
      },
      {
        title: "Halaman Form Aspirasi",
        text: "Halaman form aspirasi digunakan untuk menampung masukan, saran, dan pendapat masyarakat terhadap pelayanan maupun pembangunan desa. Dengan format isian yang sederhana, warga dapat menyampaikan aspirasi secara langsung melalui aplikasi tanpa proses yang rumit.",
        image: mobileDesa6,
      },
      {
        title: "Halaman Masuk Admin",
        text: "Halaman masuk admin berfungsi sebagai gerbang autentikasi sebelum pengelola desa mengakses sistem administrasi. Tampilan form yang ringkas membantu admin masuk dengan cepat dan memastikan hanya pihak yang berwenang yang dapat mengelola data layanan desa.",
        image: mobileDesa7,
      },
      {
        title: "Halaman Dasbor Admin",
        text: "Halaman dasbor admin menjadi pusat pengelolaan data pengaduan, pengajuan, dan aspirasi yang masuk dari masyarakat. Pada halaman ini admin dapat melihat daftar laporan, membuka detail data, menghapus, maupun menambahkan tindak lanjut sehingga proses pemantauan berjalan lebih terpusat.",
        image: mobileDesa8,
      },
      {
        title: "Halaman Detail Pengaduan",
        text: "Halaman detail pengaduan menampilkan informasi lengkap dari laporan yang dikirim masyarakat, seperti nama pelapor, nomor kontak, kategori, isi laporan, dan lampiran gambar. Fitur ini membantu admin memahami isi pengaduan secara utuh sebelum memberikan respons atau tindak lanjut.",
        image: mobileDesa9,
      },
      {
        title: "Halaman Balas Pesan Pengaduan",
        text: "Halaman balas pesan memungkinkan admin memberikan tanggapan langsung terhadap laporan pengaduan yang diterima. Dengan adanya form balasan ini, komunikasi antara pihak desa dan masyarakat menjadi lebih terarah, terdokumentasi, dan responsif.",
        image: mobileDesa10,
      },
    ],
  },
];
