import "./AllProducts.css";
import Product from "./../../components/product/Product";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { useEffect } from "react";
import { getProducts } from "../../features/products/productSlice";

function AllProducts() {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="products_container">
        <h2>All Products</h2>
        <div className="products container">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default AllProducts;
