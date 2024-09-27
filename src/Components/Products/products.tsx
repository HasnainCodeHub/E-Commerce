'use client';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import AddToCart from '../addtocart';
import Link from 'next/link';
import Image from 'next/image';

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

interface IProp {
  _id: string;
  description: string;
  image: ImageAsset;
  name: string;
  price: number;
}

export default function Products() {
  const [products, setProducts] = useState<IProp[]>([]);

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

  return (
    <div className="px-10">
      <h1 className="font-bold text-6xl mb-8">Products List</h1>
      <div className="flex flex-wrap justify-start gap-10"> 
        {products.map((product) => (
          

// Inside the return block for each product item

  <div
    key={product._id}
    className="product-item flex flex-col border border-gray-900 py-5 w-[400px] h-[600px] rounded-lg mb-8   "
  ><Link href={`/products/${product._id}`}>
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
      <h2 className="text-2xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-bold mt-2">Price: RS {product.price}</p>
    </div>
    <div className="px-5 mt-4">
      <AddToCart name='Add To Cart' />
    </div>
  </div>

        ))}
      </div>
    </div>
  );
}

