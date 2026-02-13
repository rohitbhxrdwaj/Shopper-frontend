import React, { useContext } from "react";
import "./RelatedProducts.css";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../item/item";

const RelatedProducts = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  // Filter products by same category (just take first 4 for demo)
  const related = all_product
    .filter((item) => item.category === category)
    .slice(0, 4);

  return (
    <div className="relatedproducts">
      <h2>Related Products</h2>
      <hr />
      <div className="relatedproducts-items">
        {related.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
