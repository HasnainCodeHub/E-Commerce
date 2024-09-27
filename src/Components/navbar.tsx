import Link from "next/link"
import Image from "next/image"
import LogoImage from "./Logo.png"
import { IoMdSearch } from "react-icons/io";



export default function Navbar() {
    return (
        <main>
            <div className="flex justify-between bg-primaryColor text-white  " >
                    <Link href="/">
                        <Image src={LogoImage} alt="Logo" width={200} height={100} className=" px-10 cursor-pointer " />
                    </Link>
                    <div className="flex mt-2">
                    <IoMdSearch size={55} className="mt-6 rounded-[2px]" />

                    <input type="text" placeholder="Search Products" className="h-[20px] w-[600px] px-10 py-6 mt-6 border-[4px] text-black border-secondaryColor "/>

                    </div>
                <ul className="flex gap-10 text-4xl px-8 py-6 font-semibold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href='/About' >About</Link></li>
                    <li><Link href='/Contact'>Contact</Link></li>
                </ul>
            </div>
        </main>
    )
}