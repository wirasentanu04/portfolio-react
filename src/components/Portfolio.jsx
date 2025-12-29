import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiX } from "react-icons/fi";

const projects = [
  {
    title: "Website Layanan Desa",
    desc: "Aplikasi layanan desa berbasis web dengan fitur pengaduan, pengajuan surat, dan aspirasi.",
    tech: ["React", "Tailwind", "Laravel"],
    link: "#",
  },
  {
    title: "Aplikasi Pengaduan Mobile",
    desc: "Aplikasi Flutter untuk pengaduan masyarakat terintegrasi Firebase.",
    tech: ["Flutter", "Firebase"],
    link: "#",
  },
  {
    title: "Sistem Manajemen Sekolah",
    desc: "Sistem informasi sekolah dasar untuk manajemen data siswa dan guru.",
    tech: ["Laravel", "MySQL"],
    link: "#",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-dark to-dark3"
    >
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
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
                relative cursor-pointer
                bg-white/5 border border-white/10
                rounded-2xl p-6
                transition-all duration-300

                /* GLOW ONLY ON HOVER */
                hover:border-primary
                hover:shadow-[0_0_35px_rgba(108,99,255,0.7)]
            "
            onClick={() => setSelected(project)}
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

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              bg-black/60 backdrop-blur
              flex items-center justify-center
              px-6
            "
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                bg-dark3 border border-white/10
                rounded-2xl p-6 max-w-md w-full
                relative
              "
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <FiX size={20} />
              </button>

              <h3 className="text-xl font-semibold mb-3">
                {selected.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {selected.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={selected.link}
                target="_blank"
                className="
                  inline-flex items-center gap-2
                  bg-primary px-5 py-2 rounded-lg
                  hover:scale-105 transition
                "
              >
                View Project <FiExternalLink />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}