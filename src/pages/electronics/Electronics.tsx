import "./Electronics.css";
import { useAppSelector, useAppDispatch } from "./../../app/hooks";
import Product from "../../components/product/Product";
import { useEffect } from "react";
import { getProducts } from "../../features/products/productSlice";

function Electronics() {
  const products = useAppSelector((state) => state.products.products);
  const electronics = products.filter(
    (product) => product.category === "electronics"
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="products_container">
        <h2>Electronics</h2>
        <div className="products container">
          {electronics.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Electronics;
