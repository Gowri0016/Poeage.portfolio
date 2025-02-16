import React from 'react'
import Lo from '../Asset/Logo.jpeg'
import { useNavigate } from 'react-router-dom'

export default function Header() {


  const navigate = useNavigate()

    const homenavigate = () => {
      navigate('/Home')
    }

    const connavigate = () => {
      navigate('/Contact')
    }

    const detaavigate =() =>{
      navigate('/Details')
    }

  return (
<div className="text-black shadow-lg w-full h-20 text-center">
  {/* Image Section */}
  <img className="w-62 h-20 md:justify-self-start md: -ml-20" src={Lo} alt={Lo} />

  <div>
    {/* Navigation Links */}
    <div className="flex justify-center md:justify-end text-1xl gap-4 relative bottom-12 -mr-10">
      <p className="text-1xl hover:text-blue-700 cursor-pointer" onClick={homenavigate}>Home</p>
      <p className="text-1xl hover:text-blue-700 cursor-pointer" onClick={connavigate}>Contact</p>
      <p className="text-1xl hover:text-blue-700 cursor-pointer" onClick={detaavigate}>Project</p>
    </div>

    
  </div>
</div>

  )
}
