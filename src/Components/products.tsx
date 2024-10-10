'use client';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import Image from 'next/image';
import AddToCart from './addtocart';
import Button from './Button';

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}

// Define the shape of an image asset
interface ImageAsset {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

// Define product properties
interface IProp {
  _id: string;
  description: string;
  image: ImageAsset;
  name: string;
  price: number;
}

// Define cart item type
export interface CartItem extends IProp {
  quantity: number; // Add quantity to cart items
}

export default function Products() {
  const [products, setProducts] = useState<IProp[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // State for the last added product and visibility of the View Cart link
  const [lastAddedProductId, setLastAddedProductId] = useState<string | null>(null);
  const [showViewCartLink, setShowViewCartLink] = useState(false); // New state for View Cart link

  useEffect(() => {
    // Fetch the cart from localStorage when the component mounts
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Function to fetch products
    async function fetchProducts() {
      const result: IProp[] = await client.fetch(`*[_type == "products"]{
        _id,
        description,
        image,
        name,
        price
      }`);
      
      setProducts(result);
    }

    // Initial fetch
    fetchProducts();

    // Set up a real-time listener
    const subscription = client
      .listen(`*[_type == "products"]`)
      .subscribe(() => {
        fetchProducts();
      });

    // Clean up subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  // Function to add item to cart
  const addToCart = (product: IProp) => {
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

    // Set last added product ID
    setLastAddedProductId(product._id);
    setShowViewCartLink(true); // Show the View Cart link

    // Clear the last added product ID and View Cart link after 3 seconds
    setTimeout(() => {
      setLastAddedProductId(null);
      setShowViewCartLink(false);
    }, 9000);
  };

  // Persist the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="px-4 md:px-10">
      <h1 className="font-bold text-4xl md:text-6xl mb-8">Products List</h1>
      <div className="flex flex-wrap justify-start gap-10"> 
        {products.map((product) => (
          <div
            key={product._id}
            className="product-item flex flex-col border border-gray-900 py-5 w-full md:w-[400px] h-auto rounded-lg mb-8"
          >
            <Link href={`/products/${product._id}`}>
              {product.image && (
                <div className="flex-shrink-0">
                  <Image
                    src={urlFor(product.image)} // Use next/image
                    alt={product.name}
                    width={500} // Specify width
                    height={300} // Specify height
                    className="object-cover rounded-lg h-[300px]"
                  />
                </div>
              )}
            </Link>

            <div className="flex-1 px-5 py-3">
              <h2 className="text-xl md:text-2xl font-semibold">{product.name}</h2>
              <p className="text-gray-700 text-base md:text-lg">{product.description}</p>
              <p className="text-lg font-bold mt-2">Price: RS {product.price}</p>
              {lastAddedProductId === product._id && ( // Show message if this product was just added
                <div className="mt-2">
                  <p className="text-green-500">Added to Cart!</p>
                  {showViewCartLink && ( // Conditionally show View Cart link
                    <Link href="/Cart" className="text-blue-500 hover:underline">
                      <Button name="View Cart" /> 
                    </Link>
                  )}
                </div>
              )}
            </div>
            <div className="px-5 mt-4">
              <AddToCart name='Add To Cart' onAdd={() => addToCart(product)} /> {/* Pass the addToCart function */}
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}
  