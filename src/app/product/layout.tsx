import type { Metadata } from "next";
import Demo from "@/components/Demo";
import Common from "@/components/product/Common";

export const metadata: Metadata = {
  title: "Radio Archive",
  description:
    "Radio archive revolutionizing the way radio history is preserved and accessed",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className="max-w-3xl">
      <Common />
      </div>
      <Demo />
    </>
  );
}
