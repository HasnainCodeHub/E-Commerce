import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
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
<NavigationMenuLink> <Link href="/About"  className="text-primaryColor font-bold hover:text-orange-300 " >About</Link>
</NavigationMenuLink>
<NavigationMenuLink> <Link href="/Contact" className="text-primaryColor font-bold hover:text-orange-300 ">Contact</Link>
</NavigationMenuLink>
</NavigationMenuContent>
</NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
</div>
)
}
