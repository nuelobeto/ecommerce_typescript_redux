import "./Men.css";
import { useAppSelector, useAppDispatch } from "./../../app/hooks";
import Product from "../../components/product/Product";
import { useEffect } from "react";
import { getProducts } from "../../features/products/productSlice";

function Men() {
  const products = useAppSelector((state) => state.products.products);
  const menProducts = products.filter(
    (product) => product.category === "men clothing"
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="products_container">
        <h2>Men's Wear</h2>
        <div className="products container">
          {menProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Men;
