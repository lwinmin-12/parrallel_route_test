import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "product",
  description: "product",
};

// export const generateMeataData = ({ params }: props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

type props = {
  params: {
    productId: string;
  };
};

const page = ({ params }: props) => {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  );
};

export default page;
