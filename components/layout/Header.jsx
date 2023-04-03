import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search.jsx";
import { MenuUnfoldOutlined,CloseOutlined} from "@ant-design/icons";
import {useState} from "react"
import { useRouter } from "next/router.js";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router =useRouter()
  /*${router.asPath === "/" ? "bg-transparent ":"bg-secondary */
  return (
    <div className={`h-[5.5rem] bg-secondary fixed top-0 left-0 right-0`}>
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav className={`z-40 md:bg-inherit bg-secondary md:static absolute top-[88px] right-1  md:block ${!isMenuOpen && "hidden"}`}>
        <CloseOutlined className={`md:hidden ${!isMenuOpen && "hidden"} flex justify-end mr-2  hover:text-primary cursor-pointer`} onClick={()=>setIsMenuOpen(false)}/>
          <ul className="flex gap-x-2 md:flex-row flex-col justify-center items-center p-2 rounded">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button>
  <FaSearch
    className="hover:text-primary transition-all"
    onClick={() => {
      setIsMenuOpen(!isMenuOpen);
      setIsModalOpen(true);
    }}
  />
</button>

          <a href="#">
            <button className="btn-primary md:inline-block hidden">Order Online</button>
          </a>
          <button className="md:hidden inline-block" onClick={()=>setIsMenuOpen(true)}>
          <MenuUnfoldOutlined className="hover:text-primary transition-all text-2xl" />
          </button>
        </div>
      
      </div>
      <Search isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

    </div>
  );
};

export default Header;