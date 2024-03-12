import React from "react";
import ProductCard from "./ProductCard";

const productInfoList = [
  {
    name: "Kopsu mantan",
    imgUrl: "/product/drink1.jpg",
    price: 12,
  },
  {
    name: "Kopaja",
    imgUrl: "/product/drink2.jpg",
    price: 21,
  },
  {
    name: "Kopi suren",
    imgUrl: "/product/drink3.jpg",
    price: 9,
  },
];

function ProductCardList() {
  return (
    <div
      className="grid grid-cols-2 gap-2
    "
    >
      {productInfoList.map((productInfo, index) => (
        <ProductCard key={index} productInfo={productInfo} />
      ))}
    </div>
  );
}

export default ProductCardList;
