import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/wira.jpg";

export default function Hero() {
  // Typing animation
  const roles = [
    "Frontend Developer",
    "React Developer",
    "Flutter Developer",
    "Laravel Developer",
  ];

  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = del ? 60 : 100;

    const timer = setTimeout(() => {
      setText(current.slice(0, j));
      if (!del && j < current.length) setJ(j + 1);
      else if (del && j > 0) setJ(j - 1);
      else if (!del) setDel(true);
      else {
        setDel(false);
        setI((i + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [j, del, i]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark via-dark2 to-dark3
      flex items-center"
    >
      <div
        className="
          w-full max-w-7xl mx-auto px-6 md:px-10
          grid grid-cols-1 md:grid-cols-2
          items-center gap-12
        "
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I am <br />
            <span className="text-primary">Wira Sentanu</span>
          </h1>

          <h2 className="mt-3 text-lg text-gray-300 h-6">
            {text}
            <span className="text-primary">|</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0">
            Passionate in building modern, responsive, and user-friendly web applications.
          </p>

          <a
            href="/cv/CV.pdf"
            download
            className="
              relative mt-6 px-7 py-3 rounded-lg font-medium
              bg-primary text-white
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(108,99,255,0.8)]
              focus:outline-none
              inline-block
            "
          >
            Download CV
          </a>
        </motion.div>

            {/* IMAGE + BLOB */}
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center"
            >
            {/* GLOW */}
            <div className="
                absolute
                w-[420px] h-[420px]
                md:w-[520px] md:h-[520px]
                bg-primary/30
                rounded-full
                blur-[120px]
            " />

            {/* BLOB SVG */}
            <motion.svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="
                absolute
                w-[360px] h-[360px]
                md:w-[460px] md:h-[460px]
                opacity-80
                "
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <defs>
                <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C63FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                </defs>

                <path
                fill="url(#blobGradient)"
                d="M42.8,-73.4C55.8,-66.2,66.6,-55.7,72.4,-42.7C78.2,-29.7,79,-14.8,77.4,-1C75.8,12.8,71.9,25.6,64.7,37.2C57.5,48.8,47,59.1,34.7,66.1C22.4,73.1,8.4,76.9,-5.8,86C-20,95.1,-40,109.5,-52.2,106.5C-64.4,103.6,-68.8,83.3,-72.7,64.9C-76.6,46.6,-80,30.2,-77.3,15.6C-74.7,1,-66.1,-11.9,-59.5,-26.7C-52.9,-41.5,-48.4,-58.3,-38.1,-67.3C-27.8,-76.3,-13.9,-77.6,0.6,-78.7C15.1,-79.8,30.2,-80.7,42.8,-73.4Z"
                transform="translate(100 100)"
                />
            </motion.svg>

            {/* FOTO */}
            <div className="relative z-10 bg-primary rounded-full p-2">
                <img
                src={profile}
                alt="profile"
                className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full"
                />
            </div>
            </motion.div>
      </div>
    </section>
  );
}