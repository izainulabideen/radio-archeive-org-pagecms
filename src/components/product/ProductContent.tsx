import markdownStyles from "@/app/markdown-styles.module.css";
import markdownToHtml from "@/lib/markdownToHtml";
import React from "react";

async function ProductContent({ data }: any) {
  const content = await markdownToHtml(data || "");
  return (
    <div className="max-w-3xl">
      <div className="px-4 md:px-10 py-12">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}

export default ProductContent;
