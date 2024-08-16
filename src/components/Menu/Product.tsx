"use client"; // Corrected from "use cient" to "use client"
import React, { useEffect, useState } from "react";
import { getProductSlugs } from "@/lib/api";

function ProductMenu({ pathname }: { pathname: string }) {
  const [productNames, setProductNames] = useState<string[]>([]); // Initialize as an empty array

  useEffect(() => {
    const fetchProductSlugs = async () => {
      try {
        const data = await getProductSlugs();
        console.log(data);
        setProductNames(data);
      } catch (error) {
        console.error("Error fetching product slugs:", error);
      }
    };

    fetchProductSlugs(); // Call the async function
  }, []);

  return (
    <li className="group max-lg:border-b max-lg:py-3 relative">
      <span
        className={`hover:text-opacity-80 hover:fill-color4 fill-color2 text-sm ${
          pathname === "/products" ? "font-bold" : ""
        } block`}
      >
        Products
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          height="16px"
          className="ml-1 inline-block"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
            data-name="16"
            data-original="#000000"
          />
        </svg>
      </span>
      <ul className="absolute shadow-lg bg-color3 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
        {productNames.map((p) => (
          <li className="py-2" key={p}>
            <a
              href={`/product/${p.split('.')[0]}`} // Assuming you want to link to a product page
              className="hover:text-opacity-80 text-color2 text-sm block"
            >
              {p.split('.')[0].replaceAll("-", " ")}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default ProductMenu;
