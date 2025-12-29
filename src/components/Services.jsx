import { motion } from "framer-motion";
import {
  FiMonitor,
  FiSmartphone,
  FiDatabase,
} from "react-icons/fi";

const services = [
  {
    icon: <FiMonitor />,
    title: "Web Development",
    desc: "Developing modern, responsive, and scalable web applications using React, Tailwind CSS, and Laravel.",
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile App Development",
    desc: "Building cross-platform mobile applications with Flutter and Firebase integration.",
  },
  {
    icon: <FiDatabase />,
    title: "System Development",
    desc: "Designing and implementing information systems with clean architecture and secure backend.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-dark3 to-dark"
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
          My <span className="text-primary">Services</span>
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                    relative
                    bg-white/5 border border-white/10
                    rounded-2xl p-8
                    transition-all duration-300

                    /* GLOW ONLY ON HOVER */
                    hover:border-primary
                    hover:shadow-[0_0_35px_rgba(108,99,255,0.7)]
                "
                >

              <div className="text-primary text-3xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}