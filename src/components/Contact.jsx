import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import {
  FaTelegramPlane,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import profile from "../assets/wira2.jpg";

const socials = [
  { icon: <FaTelegramPlane />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaWhatsapp />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(
        "http://localhost/portfolio-api/contact.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
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
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            bg-white/5 border border-white/10
            rounded-3xl p-10 backdrop-blur
          "
        >
          <div className="grid md:grid-cols-2 gap-10 items-stretch">

            {/* LEFT */}
            <div className="flex flex-col items-center justify-between">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="
                  bg-primary/20 rounded-2xl p-1 mb-6
                  hover:shadow-[0_0_30px_rgba(108,99,255,0.8)]
                  transition
                "
              >
                <img
                  src={profile}
                  alt="profile"
                  className="
                    w-56 h-72 md:w-72 md:h-96
                    object-cover rounded-xl
                    border-2 border-primary
                  "
                />
              </motion.div>

              <div className="flex gap-4">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    whileHover={{ y: -4, scale: 1.15 }}
                    className="
                      w-11 h-11 flex items-center justify-center
                      rounded-full bg-white/10 border border-white/10
                      text-primary hover:bg-primary hover:text-white
                      transition
                    "
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div>
              <form className="space-y-6">

                {/* NAME */}
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        setErrors({ ...errors, name: "" });
                      }}
                      className={`
                        w-full pl-11 pr-4 py-3 rounded-lg
                        bg-white/10 border
                        ${errors.name ? "border-red-500" : "border-white/10"}
                        text-white outline-none focus:border-primary
                      `}
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Email
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        setErrors({ ...errors, email: "" });
                      }}
                      className={`
                        w-full pl-11 pr-4 py-3 rounded-lg
                        bg-white/10 border
                        ${errors.email ? "border-red-500" : "border-white/10"}
                        text-white outline-none focus:border-primary
                      `}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      rows="4"
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        setErrors({ ...errors, message: "" });
                      }}
                      className={`
                        w-full pl-11 pr-4 py-3 rounded-lg
                        bg-white/10 border
                        ${errors.message ? "border-red-500" : "border-white/10"}
                        text-white outline-none resize-none
                        focus:border-primary
                      `}
                      placeholder="Write your message..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="
                    w-full py-3 rounded-lg font-medium
                    bg-primary text-white
                    hover:scale-105
                    hover:shadow-[0_0_25px_rgba(108,99,255,0.8)]
                    transition disabled:opacity-60
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-green-400 text-sm text-center">
                    Message sent successfully ✔
                  </p>
                )}

              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}