import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const [discount, setDiscount] = useState(0);
  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const fixedCost = 2.99;
  const ruleDiscount = 5; //another campaign rule 5TL amount discount, if bought more than items
  const calculateTotal = () => {
    if (qty < 3 && qty > 0) {
      //no  discount
      return cartItems.reduce((a, c) => a + c.price * c.qty, 0) + fixedCost;
    } else if (qty >= 3 && qty < 5) {
      // discount rules can be 20% if bought more than 3 items
      return (
        cartItems.reduce((a, c) => a + c.price * c.qty, 0) * 0.8 -
        ruleDiscount +
        fixedCost
      );
    } else if (qty >= 5) {
      // discount rules can be 50% if bought more than 5 items
      return (
        cartItems.reduce((a, c) => a + c.price * c.qty, 0) * 0.5 -
        ruleDiscount +
        fixedCost
      );
    }
  };

  // Coupon for 100 TL min purchase amount for a 10% discount.
  // Campaign Discounts are applied first, Then Coupons.
  const calculateNewTotal = () => {
    if (calculateTotal() >= 100) {
      return (calculateTotal() - fixedCost) * 0.9 + fixedCost;
    } else return "coupon not exist " + calculateTotal();
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
      calculateTotal();
      calculateNewTotal();
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is Empty.</div>
          ) : (
            cartItems.map((item) => (
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>{item.name}</Link>
                  </div>
                  <div>
                    Qty:
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, e.target.value))
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <button
                      typle="button"
                      className="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">{item.price} TL</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action">
        <h3>Cargo Fixed Cost is 2.99 TL.</h3>
        <h3>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) :
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0) + fixedCost} TL
        </h3>
        <h3>
          Campaign Discount ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
          :{calculateTotal()} TL
        </h3>
        <h3>
          Apply Coupons ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) :
          {calculateNewTotal()} TL
        </h3>
        <button
          onClick={checkoutHandler}
          className="button primary full-width"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
