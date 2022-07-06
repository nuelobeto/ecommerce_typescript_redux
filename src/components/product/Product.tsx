import "./Product.css";
import { BiHeart } from "react-icons/bi";
import { useAppDispatch } from "../../app/hooks";
import { useAppSelector } from "./../../app/hooks";
import { addToSaved } from "../../features/saved/savedSlice";
import { useNavigate } from "react-router-dom";

type ProductType = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: number;
    description: string;
    image: string;
    saved: boolean;
  };
};

function Product(props: ProductType) {
  const products = useAppSelector((state) => state.products.products);
  const savedProducts = useAppSelector((state) => state.saved.saved);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSave = (id: number) => {
    if (savedProducts.some((product) => product.id === id)) return;
    const toSave = products.find((product) => product.id === id);
    if (toSave) {
      dispatch(addToSaved(toSave));
    }
  };

  return (
    <div className="product">
      <div className="product_image">
        <img
          src={`/src/images/${props.product.image}`}
          alt=""
          onClick={() => navigate(`/product-details/${props.product.id}`)}
        />
        <div className="save" onClick={() => handleSave(props.product.id)}>
          <BiHeart style={{ color: "#afafaf" }} />
        </div>
      </div>
      <p onClick={() => navigate(`/product-details/${props.product.id}`)}>
        {props.product.name}
      </p>
      <h4 onClick={() => navigate(`/product-details/${props.product.id}`)}>
        ${props.product.price}
      </h4>
    </div>
  );
}

export default Product;
