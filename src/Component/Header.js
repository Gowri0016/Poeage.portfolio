
import Poeage from '../Asset/Logo.jpeg'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    const homenavigate = () => {
        navigate('/Intro')
    }

    const detanavigate = () => {
        navigate('/Contact')
    }

    const projnavigate = () => {
        navigate('/Details')
    }

    const servnaigate = () => {
      navigate('/Servises')
    }

  return (
    <div className="h-20 w-full  bg-white shadow-lg flex justify-around items-center">
        <div className="w-60">
            <img src={Poeage} alt={Poeage}></img>
        </div>

        <div className="flex gap-4">
        <p className=" cursor-pointer hover:text-blue-500" onClick={homenavigate}>Home</p>
        <p className=" cursor-pointer hover:text-blue-500" onClick={projnavigate}>Project</p>
        <p className=" cursor-pointer hover:text-blue-500" onClick={detanavigate}>Contact Us</p>
        <p className=" cursor-pointer hover:text-blue-500" onClick={servnaigate}>Services</p>
          </div>       
        
    </div>
  
  )
}