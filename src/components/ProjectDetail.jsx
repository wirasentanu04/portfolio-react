import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects1 } from "../data/projects1";
import { projects2 } from "../data/projects2";

const projects = [...projects1, ...projects2];


export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p className="text-center mt-20">Project tidak ditemukan</p>;

  return (
    <section className="min-h-screen bg-gradient-to-b from-dark to-dark3 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mb-16 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
                     bg-primary/10 text-primary border border-primary/40
                     transition-all duration-300
                     hover:bg-primary/20 hover:shadow-[0_0_25px_rgba(108,99,255,.75)]"
        >
          ← <span className="text-sm font-medium">Kembali ke Portfolio</span>
        </motion.button>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-28"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          <p className="text-gray-400 text-[17px] leading-[1.9] text-justify mb-12">
            {project.desc}
          </p>

          {/* TECH STACK */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="flex flex-wrap gap-3"
          >
            {project.tech.map((t, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-4 py-1.5 rounded-full text-sm
                           bg-primary/15 text-primary border border-primary/20
                           hover:bg-primary/25
                           hover:shadow-[0_0_20px_rgba(108,99,255,.7)]"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* DETAIL CONTENT */}
        <div className="space-y-32">
          {project.sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              {/* IMAGE */}
              <motion.img
                src={sec.image}
                alt={sec.title}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`w-full rounded-2xl object-cover
                            shadow-[0_25px_60px_rgba(0,0,0,.45)]
                            hover:shadow-[0_0_40px_rgba(108,99,255,.6)]
                            transition-shadow duration-300
                            ${i % 2 === 1 ? "md:order-2" : ""}`}
              />

              {/* TEXT */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-2xl font-semibold mb-5">
                  {sec.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-justify">
                  {sec.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}