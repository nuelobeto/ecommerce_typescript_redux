import "./Product.css";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../app/hooks";
import { deleteSavedProduct } from "../../features/saved/savedSlice";
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

function SavedProduct(props: ProductType) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteSaved = (id: number) => {
    dispatch(deleteSavedProduct(id));
  };

  return (
    <div className="product">
      <div className="product_image">
        <img
          src={`/images/${props.product.image}`}
          alt=""
          onClick={() => navigate(`/product-details/${props.product.id}`)}
        />
        <div
          className="save"
          onClick={() => handleDeleteSaved(props.product.id)}
        >
          <MdDelete style={{ color: "#505050" }} />
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

export default SavedProduct;
