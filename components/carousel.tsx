"use client";

import { Alert, Carousel } from "flowbite-react";
import Image from "next/image";

const products = [
  
  {
    id: 1,
    name: "Rose Pink Avalanche",
    href: "#",
    imageSrc:
      "https://flora-uploads.s3.eu-west-3.amazonaws.com/10c276ae-f6c2-4b59-9583-35959d320f5c-20210603_184605.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "0.63€",
    color: "White",
  },
  {
    id: 2,
    name: "Rose Blush",
    href: "#",
    imageSrc:
      "https://flora-uploads.s3.eu-west-3.amazonaws.com/45b0b96e-e792-45c5-9171-bd9d21d4e762-20210411_155853.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "0.47€",
    color: "Gray",
  },
  {
    id: 3,
    name: "Rose Green Lime",
    href: "#",
    imageSrc:
      "https://flora-uploads.s3.eu-west-3.amazonaws.com/58ce8603-ed13-49e5-ba7d-6c53a6dd79ac-20210603_184412.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "0.72€",
    color: "Rose",
  },
  {
    id: 4,
    name: "Mathiola White",
    href: "#",
    imageSrc:
      "https://flora-uploads.s3.eu-west-3.amazonaws.com/20230303_171114.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "0.72€",
    color: "Rose",
  },
  {
    id: 5,
    name: "Ranunculus Pink",
    href: "#",
    imageSrc:
      "https://flora-uploads.s3.eu-west-3.amazonaws.com/20230303_171025.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "0.72€",
    color: "Rose",
  },
  {
    id: 6,
    name: "Ranunculus Orange",
    href: "#",
    imageSrc:
      "https://flora-uploads.s3.eu-west-3.amazonaws.com/20230303_171002.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "0.72€",
    color: "Rose",
  },
  
];

export default function MyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto   px-4  sm:px-6 max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 xl:gap-x-3">
          {products.map((product) => (
            <div key={product.id} className="group relative  cursor-pointer ">
              <div className="max-h-96 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-90 transition-all duration-300  ">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="w-full text-base font-bold text-emerald-900 ">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-lime-600">
                    a partir de {product.price}
                  </p>
                </div>
              </div>
              <hr className=" border-slate-300 mt-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
