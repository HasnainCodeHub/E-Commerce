import BackgroundImage from '../Images/aboutback.jpg'; // Ensure the path is correct
import AddToButton from "@/Components/addtocart";
import Link from "next/link";

export default function About() {
    return (
        <main>
            {/* Title Section */}
            <div className="text-center">
                <h1 className="text-8xl font-bold bg-primaryColor text-white px-8 py-4">About Us</h1>
            </div>
            <div className="text-lg mb-4 font-bold bg-cyan-500 text-white px-8 py-5 text-center">
                We are a family-owned business that has been providing high-quality products to customers for over 12 years. We pride ourselves on our commitment to quality and customer satisfaction.
            </div>

            {/* Background Image Section */}
            <div
                style={{
                    backgroundImage: `url(${BackgroundImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "900px",
                }}
                className="w-full" // Make sure it takes the full width
            >
                <div className="px-4 md:px-24 lg:px-[200px] py-24">
                    <h1 className="text-4xl md:text-8xl font-extrabold">Welcome To My <br /></h1>
                    <h1 className="text-2xl md:text-6xl font-extrabold">E-Commerce Store</h1>
                    <div className="font-serif text-lg md:text-2xl w-full md:w-[700px] mt-[50px]">
                        <p>At My E-commerce Store, we are dedicated to bringing you the best in tech and lifestyle products.
                            <br />
                            <br /> From cutting-edge mobile phones and laptops to essential accessories like laptop chargers, we make sure you stay connected and powered up.
                            <br />
                            <br /> For your home, we offer LED TVs that transform your viewing experience, and for your little ones, our range of baby items ensures the best in care and quality.
                            <br />
                            <br />
                            Whether you're a tech enthusiast looking for the latest headphones or a parent searching for premium baby products, we have something for everyone.</p>
                    </div>
                    <div className="mt-8 w-[180px]">
                        <Link href="/">
                            <AddToButton name="Start Shopping" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-40 px-4 lg:px-14 py-8">
                <div className="shadow-2xl p-5 bg-orange-100 flex-1">
                    <h1 className="text-4xl md:text-6xl font-bold">Our Story</h1>
                    <div className="py-8 text-lg md:text-xl font-serif">Founded in 2012, This Store was created to make it easier for customers to find high-quality products that suit their needs. We began with a focus on technology and quickly expanded our offerings to include lifestyle and baby items. Our goal is to provide a seamless shopping experience that brings you the best products from top brands.

                        With our carefully curated selection, we aim to be your go-to destination for tech gadgets, home entertainment, and baby care essentials.</div>
                </div>
                <div className="border-l border-gray-800 my-4 h-[500px] mt-8 lg:ml-8"></div>
                <div className="shadow-2xl p-5 bg-orange-100 flex-1">
                    <h1 className="text-4xl md:text-6xl font-bold">Our Values</h1>
                    <div className="py-8 text-lg md:text-xl font-serif">
                        Our values reflect our commitment to customer satisfaction and product excellence:

                        Quality: We only offer products from trusted brands and manufacturers to ensure reliability and satisfaction.
                        Affordability: We believe that quality shouldn’t come at a high price. That’s why we work hard to offer competitive pricing on all our items.
                        Customer-Centric Approach: We’re here to help, whether it’s assisting with product selection, providing after-sales support, or making returns easy.
                    </div>
                </div>
                <div className="border-l border-gray-800 my-4 h-[500px] mt-8 lg:ml-8 "></div>

                <div className="shadow-2xl p-5 bg-orange-100 flex-1">
                    <h1 className="text-4xl md:text-6xl font-bold">Why Shop With Us?</h1>
                    <div className="py-8 text-lg md:text-xl font-serif w-full md:w-[320px]">
                        At This Store, we understand that our customers value convenience and variety. That’s why we offer:
                        <br />
                        A Wide Selection of Products: From mobile phones to LED TVs and baby items, we cater to a diverse set of needs.
                        <br />
                        Fast and Reliable Shipping: Get your products delivered quickly and safely to your doorstep.
                        <br />
                        Exceptional Customer Service: Our team is here to help you with any questions or concerns before, during, or after your purchase.
                    </div>
                </div>
            </div>
        </main>
    );
}
