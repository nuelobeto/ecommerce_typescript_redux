import "./CartItem.css";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "./../../app/hooks";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from "../../features/cart/cartSlice";

type CartItemType = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: number;
    description: string;
    image: string;
    saved: boolean;
    quantity: number;
  };
};

function CartItem(props: CartItemType) {
  const dispatch = useAppDispatch();

  return (
    <div className="cart_item">
      <img src={`/src/images/${props.product.image}`} alt="" />
      <div className="cart_item_desc">
        <p>{props.product.name}</p>
        <h4>${props.product.price}</h4>
        <div className="quantity">
          <div
            className="dec"
            onClick={() => dispatch(decreaseQuantity(props.product))}
          >
            -
          </div>
          <div className="qty">{props.product.quantity}</div>
          <div
            className="inc"
            onClick={() => dispatch(increaseQuantity(props.product))}
          >
            +
          </div>
        </div>
      </div>
      <div
        className="delete_from_cart"
        onClick={() => dispatch(deleteProduct(props.product.id))}
      >
        <MdDelete />
      </div>
    </div>
  );
}

export default CartItem;
