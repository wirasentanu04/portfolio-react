import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    slug: "toilet-inspection-card",
    title: "Rancangan Sistem Digitalisasi Toilet Inspection Card Berbasis Web",
    desc: "Aplikasi layanan desa berbasis web dengan fitur pengaduan, pengajuan surat, dan aspirasi.",
    tech: ["HTML", "PHP", "Bootstrap", "MySQL", "JavaScript"],
  },
  {
    slug: "platform-desa-arahan-kidul",
    title: "Platform Pengolahan Informasi dan Layanan di Balai Desa Arahan Kidul",
    desc: "Aplikasi Flutter untuk pengaduan masyarakat terintegrasi Firebase.",
    tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    slug: "sistem-manajemen-sekolah",
    title: "Sistem Manajemen Sekolah",
    desc: "Sistem informasi sekolah dasar untuk manajemen data siswa dan guru.",
    tech: ["Laravel", "MySQL"],
  },
];

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-dark to-dark3">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="text-primary">Portfolio</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(`/project/${project.slug}`)}
              className="
                cursor-pointer
                bg-white/5 border border-white/10
                rounded-2xl p-6
                transition-all duration-300
                hover:border-primary
                hover:shadow-[0_0_35px_rgba(108,99,255,0.7)]
              "
            >
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-3">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}