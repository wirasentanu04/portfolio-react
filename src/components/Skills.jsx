import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHtml5, FaJs, FaReact, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiFlutter } from "react-icons/si";

const skills = [
  { name: "HTML & CSS", level: 75, icon: <FaHtml5 />, slug: "html-css" },
  { name: "JavaScript", level: 55, icon: <FaJs />, slug: "javascript" },
  { name: "React JS", level: 60, icon: <FaReact />, slug: "react-js" },
  { name: "Flutter", level: 50, icon: <SiFlutter />, slug: "flutter" },
  { name: "Laravel", level: 70, icon: <FaLaravel />, slug: "laravel" },
  { name: "Tailwind CSS", level: 45, icon: <SiTailwindcss />, slug: "tailwind-css" },
];

export default function Skills() {
  const navigate = useNavigate();

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-dark3 to-dark">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* SKILLS */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: skill.slug ? 1.03 : 1 }}
              onClick={() => skill.slug && navigate(`/skills/${skill.slug}`)}
              className={`
                relative bg-white/5 border border-white/10
                rounded-xl p-5 transition-all duration-300
                ${skill.slug ? "cursor-pointer" : ""}
                hover:border-primary
                hover:shadow-[0_0_35px_rgba(108,99,255,0.8)]
              `}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-primary text-xl">
                    {skill.icon}
                  </div>
                  <span className="text-gray-200 text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
                <span className="text-gray-400 text-sm">
                  {skill.level}%
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-violet-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}