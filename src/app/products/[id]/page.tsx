"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // For dynamic route params
import { client } from '@/sanity/lib/client'; // Assuming you have set up your Sanity client
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import AddToCart from '@/Components/addtocart';
import Link from 'next/link'; // Import Link for navigation
import Button from '@/Components/Button';


// Helper function to generate image URLs
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}

interface ImageAsset {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: ImageAsset;
}

interface CartItem extends Product {
  quantity: number; // Add quantity to cart items
}

export default function ProductDetail() {
  const params = useParams(); // Fetch params
  const id = params?.id as string | undefined; // Safely assign and type `id`

  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [message, setMessage] = useState<string | null>(null); // For success message
  const [showViewCartLink, setShowViewCartLink] = useState<boolean>(false); // For showing View Cart link

  useEffect(() => {
    if (id) {
      // Fetch the product data by ID
      async function fetchProduct() {
        try {
          const result = await client.fetch<Product>(`*[_type == "products" && _id == $id][0]`, { id });
          setProduct(result);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
      fetchProduct();
    }
  }, [id]);

  // Function to add item to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item._id === product._id);
      if (productExists) {
        // If the product already exists in the cart, increase the quantity
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it doesn't exist, add it with a quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Show success message and the "View Cart" link
    setMessage(`${product.name} has been added to your cart!`);
    setShowViewCartLink(true); // Show the "View Cart" link
    setTimeout(() => setMessage(null), 9000); // Hide message after 9 seconds

    // Persist the cart to localStorage
    localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }])); // Update localStorage
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gradient-to-t bg-orange-300 h-screen'>
      <div className='text-center'>
        <h1 className='font-bold text-6xl '>Product Details</h1>
      </div>
      <div className='flex justify-center h-auto mt-8 items-center w-full'>
        <div className="px-10 py-10 shadow-lg w-[650px] bg-slate-200 border-[2px] border-primaryColor mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-primaryColor text-white px-8 py-5 text-center">{product.name}</h1>

          {product.image && (
            <div className="flex-shrink-0">
              <Image
                src={urlFor(product.image)} // Use next/image
                alt={product.name}
                width={500} // Specify width
                height={600} // Specify height
                className="object-cover rounded-lg"
                loader={() => urlFor(product.image)} // Add loader for next/image
              />
            </div>
          )}

          <p className="text-lg mb-4 font-bold bg-primaryColor text-white px-8 py-5 text-center">
            Description: {product.description}
          </p>

          <p className="flex justify-between text-2xl font-bold mb-4 w-[570px] bg-primaryColor text-white px-8 py-8 text-center">
            Price: RS {product.price}
          </p>

          <div className='flex justify-end'>
            <AddToCart name='Add To Cart' onAdd={() => addToCart(product)} /> {/* Pass the addToCart function */}
          </div>

          {/* Display message if product added to cart */}
          {message && (
            <div className="mt-4 text-green-500 text-lg text-center">{message}</div>
          )}

          {/* Show Link to view cart only if product is added */}
          {showViewCartLink && (
            <div className='mt-4 text-center'>
              <Link href="/Cart" className="text-blue-500 underline"><Button name="View Cart" /></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
