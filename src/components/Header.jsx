import logoParadox from '../assets/logoParadox.png'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";

function Header() {

  return (
    <section className="w-full flex justify-between items-center p-4 bg-transparent absolute text-white">
      <div className="w-[20%]">
            <img src={logoParadox} alt=""  className='w-35'/>
      </div>

      <div className='flex gap-4 w-[60%] justify-center text-lg'>
        <a href="">Loja</a>
        <a href="">Coleções</a>
        <a href="">Lançamentos</a>
        <a href="">Editorial</a>
      </div>

      <div className='flex gap-4 w-[10%] justify-around text-xl'>
        <IoSearch />
        <FaRegHeart />
        <MdOutlinePerson />
        <FiShoppingBag />
      </div>
    </section>
  )
}

export default Header