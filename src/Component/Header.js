import { useState } from "react";
import Poeage from "../Asset/Logo.jpeg";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();



  const detanavigate = () => {
    navigate("/Contact");
    setIsOpen(false)
    
  };

  const projnavigate = () => {
    navigate("/Details");
    setIsOpen(false)
  };

  const servnaigate = () => {
    navigate("/Servises");
    setIsOpen(false)
  };

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className="h-20 w-full bg-white shadow-lg flex justify-between items-center px-6">
      {/* Logo */}
      <div className="w-40" onClick={handleClick}>
        <img src={Poeage} alt="Logo" />
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-black md:hidden">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-black">
       
        <p onClick={servnaigate} className="cursor-pointer hover:text-blue-400">Services</p>
        <p onClick={projnavigate} className="cursor-pointer hover:text-blue-400">Projects</p>
        <p onClick={detanavigate} className="cursor-pointer hover:text-blue-400">Contact</p>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-700 text-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
         
          <p onClick={servnaigate} className="cursor-pointer hover:text-blue-400">Services</p>
          <p onClick={projnavigate} className="cursor-pointer hover:text-blue-400">Projects</p>
          <p onClick={detanavigate} className="cursor-pointer hover:text-blue-400">Contact</p>
        </div>
      )}
    </div>
  );
}
