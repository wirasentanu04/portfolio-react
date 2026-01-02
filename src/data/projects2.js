import desa1 from "../assets/desa1.png";
import desa2 from "../assets/desa2.png";
import desa3 from "../assets/desa3.png";
import desa4 from "../assets/desa4.png";
import desa5 from "../assets/desa5.png";
import desa6 from "../assets/desa6.png";
import desa7 from "../assets/desa7.png";
import desa8 from "../assets/desa8.png";
import desa9 from "../assets/desa9.png";
import desa10 from "../assets/desa10.png";
import desa11 from "../assets/desa11.png"
import desa12 from "../assets/desa12.png";
import desa13 from "../assets/desa13.png";


export const projects2 = [
      {
    slug: "platform-desa-arahan-kidul",
    title: "Platform Layanan Desa Arahan Kidul",
    desc: "Balai Desa Arahan Kidul masih menggunakan sistem administrasi manual, menyebabkan keterlambatan, rendahnya transparansi, dan inefisiensi layanan. Penelitian ini platform berbasis website untuk mengintegrasikan pengolahan informasi dan administrasi desa secara lebih efektif. Menggunakan metode SDLC dengan pendekatan Waterfall, sistem ini menyediakan fitur pengelolaan data, administrasi, pengajuan surat online, pengiriman informasi, serta pengaduan masyarakat. Platform dikembangkan dengan Laravel, XAMPP, dan Figma. Sistem yang dijanjikan ini meningkatkan efisiensi, transparansi, serta keterlibatan masyarakat dalam tata kelola desa, serta menjadi model digitalisasi bagi desa lainnya. ",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    sections: [
        {
        title: "Halaman Beranda Utama Website Desa",
        text: "Halaman beranda utama berfungsi sebagai halaman awal yang menampilkan gambaran umum Website Desa. Pada halaman ini disajikan informasi penting seperti statistik pengajuan layanan, data pengaduan warga, serta ringkasan informasi desa yang bertujuan untuk memberikan akses informasi yang cepat dan transparan kepada masyarakat.",
        image: desa1,
        },
        {
        title: "Halaman Beranda Bagian Jelajahi Desa & Sambutan Kepala Desa",
        text: "Bagian Jelajahi Desa dan Sambutan Kepala Desa menampilkan informasi pengenalan desa, visi dan misi, serta pesan resmi dari Kepala Desa. Halaman ini bertujuan untuk memperkenalkan identitas desa sekaligus membangun komunikasi awal antara pemerintah desa dan masyarakat.",
        image: desa2,
        },
        {
        title: "Halaman Beranda Bagian Administrasi Penduduk Desa",
        text: "Halaman Administrasi Penduduk Desa menyajikan data kependudukan secara terstruktur, seperti jumlah penduduk, tingkat pendidikan, dan mata pencaharian. Informasi ini digunakan sebagai data pendukung dalam perencanaan dan pengambilan keputusan oleh pemerintah desa.",
        image: desa3,
        },
        {
        title: "Halaman Beranda Bagian APB Desa & Footer",
        text: "Halaman ini menampilkan informasi Anggaran Pendapatan dan Belanja Desa (APB Desa) secara ringkas dan informatif. Penyajian data anggaran ini bertujuan untuk meningkatkan transparansi pengelolaan keuangan desa, sementara bagian footer berisi informasi kontak dan tautan penting.",
        image: desa4,
        },
        {
        title: "Halaman Fitur Profil Desa",
        text: "Halaman Profil Desa berisi informasi lengkap mengenai sejarah desa, kondisi geografis, struktur pemerintahan, serta potensi desa. Fitur ini berfungsi sebagai sumber informasi resmi yang dapat diakses oleh masyarakat maupun pihak eksternal.",
        image: desa5,
        },
        {
        title: "Halaman Fitur Berita Desa",
        text: "Halaman Berita Desa digunakan untuk menyampaikan informasi, pengumuman, dan kegiatan terbaru yang berkaitan dengan desa. Fitur ini mendukung penyebaran informasi secara cepat dan akurat kepada masyarakat melalui media digital.",
        image: desa6,
        },
        {
        title: "Halaman Fitur Layanan Desa",
        text: "Halaman Layanan Desa menyediakan berbagai layanan administrasi secara digital, seperti pengajuan surat dan layanan publik lainnya. Fitur ini bertujuan untuk meningkatkan efisiensi pelayanan serta mempermudah masyarakat dalam mengakses layanan desa.",
        image: desa7,
        },
        {
        title: "Halaman Form Pengajuan Surat",
        text: "Halaman Form Pengajuan Surat memungkinkan warga untuk mengajukan permohonan surat secara daring. Melalui fitur ini, proses administrasi dapat dilakukan secara lebih efektif tanpa harus datang langsung ke kantor desa.",
        image: desa8,
        },
        {
        title: "Halaman Form Pengaduan Warga",
        text: "Halaman Form Pengaduan Warga berfungsi sebagai sarana bagi masyarakat untuk menyampaikan keluhan, saran, atau laporan permasalahan yang terjadi di lingkungan desa. Setiap pengaduan tercatat dalam sistem untuk ditindaklanjuti oleh pihak desa.",
        image: desa9,
        },
        {
        title: "Halaman Fitur Belanja/Informasi Produk UMKM Desa",
        text: "Halaman ini menampilkan informasi produk Usaha Mikro, Kecil, dan Menengah (UMKM) Desa. Fitur ini bertujuan untuk mendukung promosi produk lokal serta meningkatkan perekonomian masyarakat desa melalui platform digital.",
        image: desa10,
        },
        {
        title: "Halaman Fitur Login Admin Desa",
        text: "Halaman Login Admin Desa digunakan sebagai sistem autentikasi bagi admin sebelum mengakses dashboard pengelolaan. Proses login ini memastikan bahwa hanya pengguna yang berwenang yang dapat mengelola data dan layanan desa.",
        image: desa11,
        },
        {
        title: "Halaman Dashboard Admin Desa",
        text: "Halaman Dashboard Admin Desa berfungsi sebagai pusat pengelolaan sistem, yang menampilkan data pengajuan surat, pengaduan warga, serta informasi layanan desa. Dashboard ini membantu admin dalam melakukan monitoring dan pengelolaan data secara terpusat.",
        image: desa12,
        },
        {
        title: "Halaman Dashboard Admin Bagian Detail & Kirim Balasan",
        text: "Halaman ini digunakan oleh admin untuk melihat detail pengajuan atau pengaduan warga serta memberikan balasan atau tindak lanjut. Fitur ini mendukung proses komunikasi dua arah antara pemerintah desa dan masyarakat secara efektif dan terdokumentasi.",
        image: desa13,
        },
    ],
  },
]