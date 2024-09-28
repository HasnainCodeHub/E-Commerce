'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // To get dynamic route params
import { client } from '@/sanity/lib/client'; // Assuming you have set up your Sanity client
import imageUrlBuilder from '@sanity/image-url';
import AddToButton from '@/Components/addtocart';
import Image from 'next/image';

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
export default function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch the product data by ID
      async function fetchProduct() {
        const result = await client.fetch(`*[_type == "products" && _id == $id][0]`, { id });
        setProduct(result);
      }
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gradient-to-t bg-orange-300 h-screen'>
      <div className='text-center'>
        <h1 className='font-bold text-6xl '>Product Detailes</h1>
      </div>
      <div className='flex justify-center h-auto mt-8  items-center w-full'>
        <div className="px-10 py-10 shadow-lg w-[650px] bg-slate-200 border-[2px] border-primaryColor mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-primaryColor text-white px-8 py-5 text-center">{product.name}</h1>
          {product.image && (
            <div className="flex-shrink-0">
              <Image
                src={urlFor(product.image)} // Use next/image
                alt={product.name}
                width={500} // Specify width
                height={600} // Specify height
                className="object-cover rounded-lg "
              />
            </div>
          )}
          <p className="text-lg mb-4 font-bold  bg-primaryColor text-white px-8 py-5 text-center">Description: {product.description}</p>
          <p className=" flex justify-between text-2xl font-bold mb-4 w-[570px]  bg-primaryColor text-white px-8 py-8 text-center ">Price: RS {product.price}
          </p>
          <div className='flex justify-end'>
            <AddToButton name='Shop Now' />
          </div>
        </div>
      </div>
    </div>
  );
}