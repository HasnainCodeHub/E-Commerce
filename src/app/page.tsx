import Heading from "@/Components/heading";
import Navbar from "@/Components/navbar";
import Products from "@/Components/ProductsMain/products";
import { Suspense } from "react";
import About from "./About/page";
import  Contact  from "./Contact/page";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Heading />
      <Suspense fallback={<div>Loading...</div>}> 
      <Products/>
      </Suspense>
      <About/>
      <Contact/>
    </main>
  );
}
