import Link from "next/link";
import Image from "next/image";
import LogoImage from "./Logo.png";
import { IoMdSearch } from "react-icons/io";

export default function Navbar() {
  return (
    <main>
      <div className="flex flex-col md:flex-row justify-between items-center bg-primaryColor text-white p-2">
        <Link href="/">
          <Image
            src={LogoImage}
            alt="Logo"
            width={200}
            height={100}
            className="px-5 cursor-pointer"
          />
        </Link>
        
        <div className="flex items-center mt-2 w-full md:w-auto">
          <IoMdSearch size={40} className="mr-2" />
          <input
            type="text"
            placeholder="Search Products"
            className="h-[60px] w-[600px] px-4 py-1 border-[2px] text-black border-secondaryColor"
          />
        </div>

        <ul className="flex flex-col md:flex-row gap-4 text-3xl px-4 py-2 font-semibold w-full md:w-auto mt-2 md:mt-0">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
