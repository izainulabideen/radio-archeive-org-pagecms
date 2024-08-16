// @ts-nocheck

import ProductContent from "@/components/product/ProductContent";
import ProductHero from "@/components/product/ProductHero";
import React, { useEffect, useState } from "react";
import client from "../../../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { GetStaticPaths } from "next";
import { getProductBySlug } from "@/lib/api";

interface ProductPageProps {
  params: {
    filename: string;
  };
}

async function Page({ params: { filename } }: ProductPageProps) {
const product = await getProductBySlug(filename);

const heroData = {
  title: product?.title,
  imageUrl: product?.coverImage,
  author: product?.author.name,
}

  return (
    <>
      <ProductHero data={heroData} />
      <ProductContent data={product?.content} />
    </>
  );
}

export default Page;
