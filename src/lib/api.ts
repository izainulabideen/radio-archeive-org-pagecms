"use server";
import { Product } from "@/interfaces/product";
import fs from "fs/promises"; // Use the promises version of fs
import matter from "gray-matter";
import { join } from "path";

const productsDirectory = join(process.cwd(), "_products");

export async function getProductSlugs() {
  return await fs.readdir(productsDirectory); // Await the promise
}

export async function getSixProductNameSlug() {
  const slugs = await getProductSlugs();

  const products = await Promise.all(
    slugs.map(async (slug) => {
      const realSlug = slug.replace(/\.md$/, "");
      const fullPath = join(productsDirectory, `${realSlug}.md`);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);

      return { title: data.title, slug: realSlug } as Product; // Include date for sorting
    })
  );

  const sortedProducts = products
    .sort((product1, product2) => (product1.date > product2.date ? -1 : 1))
    .slice(0, 6);

  return sortedProducts;
}

export async function getProductBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(productsDirectory, `${realSlug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8"); // Await the promise
  
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Product;
}

export async function getAllProducts(): Promise<Product[]> { // Specify return type
  const slugs = await getProductSlugs();
  const products = await Promise.all(
    slugs.map(async (slug) => await getProductBySlug(slug)) // Await each promise
  );
  return products.sort((product1, product2) => (product1.date > product2.date ? -1 : 1));
}

export async function getSixProducts(): Promise<Product[]> { // Specify return type
  const slugs = await getProductSlugs();
  const products = await Promise.all(
    slugs.map(async (slug) => await getProductBySlug(slug)) // Await each promise
  );
  return products.sort((product1, product2) => (product1.date > product2.date ? -1 : 1)).slice(0, 6);
}
