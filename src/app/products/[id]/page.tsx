'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // To get dynamic route params
import { client } from '@/sanity/lib/client'; // Assuming you have set up your Sanity client
import imageUrlBuilder from '@sanity/image-url';
import AddToButton from '@/Components/addtocart';


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
    <div className='flex justify-center h-screen items-center w-full'>
    <div className="px-10 py-10 shadow-lg w-[650px] bg-slate-200 border-[2px] border-primaryColor">
      <h1 className="text-4xl font-bold mb-4 bg-primaryColor text-white px-8 py-5 text-center">{product.name}</h1>
      {product.image && (
        <img
          src={urlFor(product.image)}
          alt={product.name}
          className=" h-[400px] object-cover  rounded-lg mb-6 bg-cover "
        />
      )}
      <p className="text-lg mb-4 font-bold  bg-primaryColor text-white px-8 py-5 text-center">Description: {product.description}</p>
      <p className=" flex justify-between text-2xl font-bold mb-4 w-[570px]  bg-primaryColor text-white px-8 py-8 text-center ">Price: RS {product.price}       <AddToButton name='Shop Now'/>
      </p>

    </div>
    </div>
  );
}
