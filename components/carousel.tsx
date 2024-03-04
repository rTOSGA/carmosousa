"use client";


import Image from "next/image";


const products = [
  {
    id: 1,
    name: "Gerbera",
    href: "#",
    imageSrc: "/gerbera-acapulco.jpg",
    imageAlt: "",
    price: "0.72€",
    color: "Rose",
  },
  {
    id: 2,
    name: "Gerbera",
    href: "#",
    imageSrc: "/gerbera-alcatraz.jpg",
    imageAlt: "",
    price: "0.72€",
    color: "Rose",
  },
  {
    id: 3,
    name: "Gerbera",
    href: "#",
    imageSrc: "/gerbera-boban.jpg",
    imageAlt: "",
    price: "0.72€",
    color: "Rose",
  },
  {
    id: 4,
    name: "Gerbera",
    href: "#",
    imageSrc: "/gerbera-evergreen.jpg",
    imageAlt: "",
    price: "0.72€",
    color: "Rose",
  },
  {
    id: 5,
    name: "Gerbera",
    href: "#",
    imageSrc: "/gerbera-fascination.jpg",
    imageAlt: "",
    price: "0.72€",
    color: "Rose",
  },
  {
    id: 6,
    name: "Gerbera",
    href: "#",
    imageSrc: "/gerbera-mermaid.jpg",
    imageAlt: "",
    price: "0.72€",
    color: "Rose",
  },
];

export default function MyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto   px-4  sm:px-6  lg:px-8">
        <div className="mt-6 grid  gap-y-10 gap-x-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-x-3">
          {products.map((product) => (
            <div key={product.id} className="group relative  cursor-pointer  ">
              <div className="max-h-60 aspect-square w-full overflow-hidden rounded-3xl bg-gray-200 group-hover:opacity-95 transition-all duration-300  hover:shadow">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={480}
                  height={480}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-105 transition-all duration-300 "
                />
              </div>
            </div>
          ))}
          {/* <VideoPlayer></VideoPlayer> */}
        </div>
      </div>
    </div>
  );
}
