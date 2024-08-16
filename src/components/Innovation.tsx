import { getSixProducts } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

async function Innovation() {
  const products = getSixProducts();

  if (!products) {
    return notFound();
  }

  return (
    <div className="px-4 md:px-10 py-12">
      <div className="max-w-7xl max-md:max-w-lg mx-auto">
        <h2 className="flex justify-center items-center gap-4 uppercase font-spaceGrotesk text-4xl text-center">
          OUR INNOVATION
          <FaArrowDown />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {(await products)?.map((p: any, i: number) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-color1 border-2 border-color2 cursor-pointer rounded-2xl overflow-hidden group"
            >
              <div className="p-6">
                <FaStar />
                <h3 className="text-xl font-spaceGrotesk font-bold py-4">
                  {p.title}
                </h3>
                <a
                  href={`/product/${p.slug}`}
                  className="flex uppercase justify-start items-center gap-2 text-white text-sm tracking-wider hover:text-opacity-80"
                >
                  See More
                  <FaArrowRight />
                </a>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src={p.coverImage}
                  width={200}
                  height={200}
                  alt="Innovation 1"
                  className="w-full h-32 object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Innovation;
