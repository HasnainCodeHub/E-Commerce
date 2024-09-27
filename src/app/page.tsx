import Heading from "@/Components/heading";
import Navbar from "@/Components/navbar";
import Products from "../Components/Products/products";
import { Suspense } from "react";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Heading />
      <Suspense fallback={<div>Loading...</div>}> 
      <Products/>
      </Suspense>
    </main>
  );
}
