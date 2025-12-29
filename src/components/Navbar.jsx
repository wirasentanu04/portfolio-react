import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menus = ["Home", "About", "Skills", "Services", "Portfolio", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // ===== HANDLE CLICK =====
  const handleClick = (item) => {
    setActive(item);
    setOpen(false);

    const el = document.getElementById(item.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ===== SCROLLSPY =====
  useEffect(() => {
    const sections = menus
      .map((m) => document.getElementById(m.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // ===== NAVBAR SCROLL EFFECT =====
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

        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          onClick={() => handleClick("Home")}
          className="text-xl font-semibold text-primary cursor-pointer"
        >
          Wira<span className="text-white">Sentanu</span>
        </motion.h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {menus.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className="relative cursor-pointer text-gray-300 hover:text-white transition"
            >
              {item}
              {active === item && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary rounded"
                />
              )}
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* MOBILE MENU */}
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
                    key={item}
                    onClick={() => handleClick(item)}
                    className={`cursor-pointer transition ${
                      active === item
                        ? "text-primary"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item}
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