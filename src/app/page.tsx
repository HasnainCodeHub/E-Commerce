import Heading from "@/Components/heading";
import Navbar from "@/Components/navbar";
import Products from "@/Components/products";
import { Suspense } from "react";
import About from "./About/page";
import  Contact  from "./Contact/page";
import Footer from "@/Components/Footer";


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
      <Footer/>
    </main>
  );
}
