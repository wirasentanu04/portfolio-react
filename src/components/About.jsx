import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiLayers } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
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
          Tentang <span className="text-primary">Saya</span>
        </motion.h2>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              Saya adalah seorang <span className="text-primary font-medium">
              Pengembang Frontend</span> yang antusias dan memiliki pengalaman dalam membangun aplikasi web serta mobile yang modern, responsif, dan ramah pengguna.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
             Saya senang mengubah masalah kompleks menjadi desain yang sederhana, indah, dan intuitif menggunakan teknologi modern seperti React,
              Flutter, Tailwind CSS, dan Laravel.
            </p>

            {/* QUICK STATS */}
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { label: "Proyek", value: "15+" },
                { label: "Pengalaman", value: "2+ Tahun" },
                { label: "Teknologi", value: "6+" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="
                    bg-white/5 border border-white/10
                    rounded-xl py-4
                  "
                >
                  <div className="text-xl font-semibold text-primary">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
            {
                icon: <FiCode />,
                title: "Pengembangan Web",
                desc: "Membangun situs web yang modern dan responsif menggunakan React dan Laravel.",
            },
            {
                icon: <FiSmartphone />,
                title: "Pengembangan Mobile",
                desc: "Membuat aplikasi seluler dengan Flutter dan Firebase.",
            },
            {
                icon: <FiLayers />,
                title: "Implementasi Antarmuka",
                desc: "Mengubah desain antarmuka menjadi kode yang bersih, konsisten, dan mudah dipelihara.",
            },
            ].map((item, index) => (
            <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="
                relative flex gap-4 p-5
                bg-white/5
                border border-white/10
                rounded-xl
                transition-all duration-300
                hover:border-primary
                hover:shadow-[0_0_30px_rgba(108,99,255,0.6)]
                "
            >
                <div className="text-primary text-2xl mt-1">
                {item.icon}
                </div>
                <div>
                <h4 className="font-semibold mb-1">
                    {item.title}
                </h4>
                <p className="text-sm text-gray-400">
                    {item.desc}
                </p>
                </div>
            </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
