import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/Components/ui/navigation-menu"
// import { Link } from "lucide-react"
  
  

export default function Navigation() {
  
return(
<div className="text-center w-[100px] bg-yellow-300">
<NavigationMenu>
<NavigationMenuList>
<NavigationMenuItem>
<NavigationMenuTrigger>Categories</NavigationMenuTrigger>
<NavigationMenuContent>
<NavigationMenuLink> <Link href="/About"  className="text-cyan-600 font-bold hover:text-orange-300 " >About</Link>
</NavigationMenuLink>
<NavigationMenuLink> <Link href="/Contact" className="text-cyan-600 font-bold hover:text-orange-300 ">Contact</Link>
</NavigationMenuLink>
</NavigationMenuContent>
</NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
</div>
)
}
