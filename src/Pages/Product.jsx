import React, { useContext } from "react";
import all_product from "../assets/all_product";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductsDisplay/ProductDisplay";
import DescriptionBox from "../Components/DiscriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();
  const product = all_product.find((e) => e.id === Number(productID));
  return (
    <div>
      <Breadcrums product={product}></Breadcrums>
      <ProductDisplay product={product}></ProductDisplay>
      <DescriptionBox></DescriptionBox>
      <RelatedProducts category={product.category} />
    </div>
  );
};

export default Product;
