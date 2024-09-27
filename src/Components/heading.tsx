import Link from "next/link";
import Button from "./Button";

export default function Heading() {
  return (
    <main>
      <div className="text-center py-5 px-4 md:px-10">
        <h1 className="font-bold text-4xl md:text-6xl">My E Commerce Store</h1>
        <p className="py-10 px-4 md:px-20 font-serif text-lg md:text-4xl">
          Discover a diverse range of products designed to meet all your needs. Our store features a curated selection of high-quality items across various categories, including fashion, electronics, home goods, and health & beauty. Each product is carefully sourced to ensure superior quality and value. <br />
          <br />
          Navigate through our user-friendly interface, where you can easily browse collections, compare products, and read detailed descriptions. Take advantage of our special deals and promotions, available exclusively online. With secure payment options and fast shipping, your shopping experience is streamlined and hassle-free. <br />
          <br />
          Stay updated with the latest trends and seasonal favorites as we regularly refresh our inventory. Whether you're shopping for yourself or searching for the perfect gift, our store is dedicated to providing a seamless and enjoyable shopping experience.
        </p>
        <Link href="/Productsmain">
          <Button name="Shop Now" />
        </Link>
      </div>
    </main>
  );
}
