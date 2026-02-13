import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";

const CartItems = () => {
  const {
    cartItems = {},
    all_product = [],
    removeFromCart = () => {},
    getTotalCartAmount = () => 0,
  } = useContext(ShopContext) || {};

  return (
    <div className="cartitems">
      {/* Cart Items Table */}
      <div className="cartitems-header">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {Array.isArray(all_product) &&
        all_product.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id} className="cartitems-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="carticon-product-icon"
                />
                <p>{item.name}</p>
                <p> ₹{item.new_price}</p>
                <p>{cartItems[item.id]}</p>
                <p> ₹{item.new_price * cartItems[item.id]}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cartitems-remove"
                >
                  X
                </button>
              </div>
            );
          }
          return null;
        })}

      {/* Cart Totals + Promo Code */}
      <div className="cartitems-checkout">
        <div className="cartitems-total-box">
          <h2>Cart Totals</h2>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p> ₹{getTotalCartAmount()}</p>
          </div>
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <div className="cartitems-total-item cartitems-total-bold">
            <p>Total</p>
            <p> ₹{getTotalCartAmount()}</p>
          </div>
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
