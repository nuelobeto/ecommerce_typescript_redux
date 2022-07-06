import "./ProductDetails.css";
import { BiHeart } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { useParams } from "react-router-dom";
import { addToSaved } from "../../features/saved/savedSlice";
import { addToCart, increaseQuantity } from "../../features/cart/cartSlice";
import { useEffect } from "react";

function ProductDetails() {
  const products = useAppSelector((state) => state.products.products);
  const savedProducts = useAppSelector((state) => state.saved.saved);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const params = useParams();
  const productId = Number(params.productId);
  const product = products.find((product) => product.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSave = (id: number | undefined) => {
    if (savedProducts.some((product) => product.id === id)) return;
    const toSave = products.find((product) => product.id === id);
    if (toSave) {
      dispatch(addToSaved(toSave));
    }
  };

  const handleAddToCart = (id: number | undefined) => {
    if (cart.some((product) => product.id === id)) {
      const cartItem = cart.find((product) => product.id === id);
      if (cartItem) {
        dispatch(increaseQuantity(cartItem));
      }
    } else {
      const newCartItem = products.find((product) => product.id === id);

      if (newCartItem) {
        dispatch(addToCart(newCartItem));
      }
    }
  };

  return (
    <main>
      <section className="product_details">
        <div className="product_details_one container">
          <div className="product_details_image">
            <img src={`/src/images/${product?.image}`} alt="" />
          </div>
          <div className="product_details_description">
            <p className="details_name">{product?.name}</p>
            <h4 className="details_price">${product?.price}</h4>
            <p className="details_desc">{product?.description}</p>
            <div className="details_actions">
              <button onClick={() => handleAddToCart(product?.id)}>
                Add to Cart
              </button>
              <BiHeart onClick={() => handleSave(product?.id)} />
            </div>
          </div>
        </div>

        <div className="product_details_two">
          <h2>You may also like:</h2>
          <div className="also_like">
            <img src="/src/images/facial_serum.jpg" alt="" />
            <img src="/src/images/hair.jpg" alt="" />
            <img src="/src/images/womens_suit.jpg" alt="" />
            <img src="/src/images/Gshock.jpg" alt="" />
            <img src="/src/images/beard_oil.jpg" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
