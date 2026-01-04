import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { skillsDetail } from "../data/skillsDetail";
import { FaStar, FaLayerGroup, FaCode } from "react-icons/fa";

export default function SkillDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const skill = skillsDetail.find((s) => s.slug === slug);
  if (!skill) {
    return (
      <p className="text-center mt-20 text-gray-400">
        Skill tidak ditemukan
      </p>
    );
  }

  const Icon = skill.icon;

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-dark to-dark3 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* BACK BUTTON */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="
            mb-16 inline-flex items-center gap-2
            px-6 py-2.5 rounded-xl
            bg-primary/10 text-primary
            border border-primary/40
            transition-all duration-300
            hover:bg-primary/20
            hover:shadow-[0_0_25px_rgba(108,99,255,0.8)]
          "
        >
          ← <span className="text-sm font-medium">Kembali ke Skills</span>
        </motion.button>

        {/* ICON */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 140 }}
          className="
            w-32 h-32 mx-auto mb-10
            rounded-3xl flex items-center justify-center
            bg-primary/10 text-primary
            border border-primary/30
            shadow-[0_0_45px_rgba(108,99,255,0.7)]
          "
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Icon className="text-6xl" />
          </motion.div>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-6"
        >
          {skill.title}
        </motion.h1>

        {/* BADGES */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full
                          bg-white/5 border border-white/10 text-sm text-gray-300">
            <FaCode className="text-primary" />
            Web Development
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full
                          bg-white/5 border border-white/10 text-sm text-gray-300">
            <FaLayerGroup className="text-primary" />
            Frontend Skill
          </div>
        </div>

        {/* LEVEL */}
        <div className="mb-14">
          <div className="flex justify-between mb-2 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <FaStar className="text-primary" />
              Skill Level
            </span>
            <span>{skill.level}%</span>
          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="
                h-full rounded-full
                bg-gradient-to-r from-primary to-violet-400
                shadow-[0_0_20px_rgba(108,99,255,0.8)]
              "
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-14"
        >
          <article
            className="
            text-gray-400
              prose prose-invert
              max-w-none
              text-justify
              
              first-letter:text-5xl
              first-letter:font-bold
              first-letter:text-primary
              first-letter:float-left
              first-letter:mr-3
              first-letter:mt-2
              first-letter:leading-none
            "
          >
            {skill.description}
          </article>
        </motion.div>
      </div>
    </section>
  );
}