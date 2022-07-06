import "./Cart.css";
import CartItem from "./../../components/cartItem/CartItem";
import { useEffect } from "react";
import { useAppSelector } from "./../../app/hooks";

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);

  const totalPrice = () => {
    let total = 0;

    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  };

  const totalItems = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity;
    });
    return total;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="cart">
        {cart.length ? (
          <>
            <div className="mobile_checkout">
              TOTAL: ${totalPrice()}{" "}
              <button>Checkout ({`${totalItems()}`} items)</button>
            </div>
            <div className="cart_content">
              <div className="cart_items">
                {cart.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
              <div className="checkout_wrapper">
                <div className="checkout">
                  <div>
                    <h4>NO of Items: {`${totalItems()}`}</h4>
                    <h4>TOTAL: ${totalPrice()}</h4>
                  </div>
                  <button>Checkout ({`${totalItems()}`} items)</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h2 style={{ textAlign: "center" }}>
            There are no items in your cart
          </h2>
        )}
      </section>
    </main>
  );
}

export default Cart;
