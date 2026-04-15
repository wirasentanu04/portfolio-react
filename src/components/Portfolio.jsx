import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

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
          Portofolio <span className="text-primary">Saya</span>
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
                group h-full
                cursor-pointer
                bg-white/5 border border-white/10
                rounded-2xl p-6
                flex flex-col
                transition-all duration-300
                hover:border-primary
                hover:shadow-[0_0_35px_rgba(108,99,255,0.7)]
              "
            >
              <h3 className="text-lg font-semibold mb-3 line-clamp-2 min-h-[3.5rem]">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-6 line-clamp-4 flex-1">
                {project.shortDesc ?? project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
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
