import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search.jsx";
import { MenuUnfoldOutlined,CloseOutlined} from "@ant-design/icons";
import {useState} from "react"
import { useRouter } from "next/router.js";
import Link from "next/link.js";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router =useRouter()
  /*${router.asPath === "/" ? "bg-transparent ":"bg-secondary  fixed top-0 left-0 right-0*/
  return (
    <div className={`h-[5.5rem] bg-secondary `}>
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav className={`z-40 md:bg-inherit bg-secondary md:static absolute top-[88px] right-1  md:block ${!isMenuOpen && "hidden"}`}>
        <CloseOutlined className={`md:hidden ${!isMenuOpen && "hidden"} flex justify-end mr-2  hover:text-primary cursor-pointer`} onClick={()=>setIsMenuOpen(false)}/>
          <ul className="flex gap-x-2 md:flex-row flex-col justify-center items-center p-2 rounded">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/" className="cursor-pointer">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">Über uns</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Reservierung</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/profile">
            <FaUserAlt className="hover:text-primary transition-all" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </Link>
          <button>
  <FaSearch
    className="hover:text-primary transition-all"
    onClick={() => {
      setIsMenuOpen(!isMenuOpen);
      setIsModalOpen(true);
    }}
  />
</button>

          <Link href="#">
            <button className="btn-primary md:inline-block hidden">Order Online</button>
          </Link>
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