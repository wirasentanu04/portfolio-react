import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "services", label: "Layanan" },
  { id: "portfolio", label: "Portofolio" },
  { id: "contact", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (id) => {
    setActive(id);
    setOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = menus
      .map((menu) => document.getElementById(menu.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? "bg-dark/90 backdrop-blur-xl shadow-lg"
          : "bg-dark/60 backdrop-blur-lg"}
        border-b border-white/10
      `}
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          onClick={() => handleClick("home")}
          className="text-xl font-semibold text-primary cursor-pointer"
        >
          Wira<span className="text-white">Sentanu</span>
        </motion.h1>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {menus.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="relative cursor-pointer text-gray-300 hover:text-white transition"
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary rounded"
                />
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
          aria-label="Buka menu navigasi"
        >
          &#9776;
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                md:hidden
                absolute top-full left-0 w-full
                bg-dark/95
                border-t border-white/10
              "
            >
              <ul className="flex flex-col gap-4 py-6 px-6 text-sm">
                {menus.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`cursor-pointer transition ${
                      active === item.id
                        ? "text-primary"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
