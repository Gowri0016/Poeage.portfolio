import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Poeage from "../Asset/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
      <div className="h-24 px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="w-56 cursor-pointer" onClick={() => navigate("/")}>
          <img src={Poeage} alt="Logo" className="h-12 object-contain" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-black font-semibold text-base">
          {["Projects", "Contact"].map((label) => (
            <motion.div
              key={label}
              className="cursor-pointer relative group"
              onClick={() => handleNavigate(`/${label}`)}
              whileHover={{
                rotateX: 10,
                rotateY: -5,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <span className="transition-colors group-hover:text-blue-600">{label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col items-center gap-4 py-6 overflow-hidden"
            style={{
              transformOrigin: "top",
              perspective: 800,
              clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
            }}
          >
            {["Projects", "Contact"].map((label) => (
              <motion.p
                key={label}
                whileHover={{ scale: 1.1, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-lg font-medium hover:text-blue-400"
                onClick={() => handleNavigate(`/${label}`)}
              >
                {label}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
