import Product from "../../components/product/Product";
import "./Women.css";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { useEffect } from "react";
import { getProducts } from "../../features/products/productSlice";

function Women() {
  const products = useAppSelector((state) => state.products.products);
  const womenProducts = products.filter(
    (product) => product.category === "women clothing"
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="products_container">
        <h2>Women's Wear</h2>
        <div className="products container">
          {womenProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Women;
