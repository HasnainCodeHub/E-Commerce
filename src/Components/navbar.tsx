
import Link from "next/link";
import Image from "next/image";
import LogoImage from "./Logo.png";
import { IoMdSearch } from "react-icons/io";
import Navigation from "./Menu";
import { FaShoppingCart } from "react-icons/fa";



export default function Navbar() {
  return (
    <main>
      <div className="flex flex-col md:flex-row justify-between items-center bg-primaryColor text-white p-2">
        
        {/* Logo */}
        <div>
 <Link href="/">
          <Image
            src={LogoImage}
            alt="Logo"
            width={200}
            height={100}
            className="px-[45px] cursor-pointer"
          />
        </Link>
        </div>


        {/* Buttons */}
        <div>
          
        <ul className="flex flex-col md:flex-row gap-10 text-3xl px-4 py-2 font-semibold w-full md:w-auto mt-2 md:mt-0">
          <li>
            <Link href="/" className="hover:text-cyan-500">Home</Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-cyan-500">About</Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-cyan-500">Contact</Link>
          </li>


        </ul>
        </div>
        {/* Placeholder */}
          
        <div className="flex items-center mt-2 w-full md:w-auto ga-">
          <IoMdSearch size={40} className="mr-2 cursor-pointer hover:text-cyan-600" />
          <input
            type="text"
            placeholder="Search Products"
            className="h-[60px] w-[600px] px-4 py-1 border-[2px] text-black border-cyan-600 rounded-3xl"
          />
          <Link href="/Cart" className="text-xl"><FaShoppingCart size={50} />
          </Link> 
        </div>




       
      </div>
      <div className="bg-cyan-600 text-white text-center p-2" >
        <p>New summer sale 50% Off - limited time only!</p>

        </div>
        <Navigation/>

        
    </main>
  );
}
