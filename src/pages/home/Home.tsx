import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Product from "../../components/product/Product";
import { getProducts } from "../../features/products/productSlice";
import "./Home.css";

function Home() {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo(0, 0);
  }, []);

  const popularProducts = products
    .filter((product) => product.id % 2 === 0)
    .slice(0, 8);

  return (
    <main>
      <section className="hero">
        <button onClick={() => navigate("/products")}>SHOP NOW</button>
      </section>
      <section className="popular products_container">
        <h2>Popular Products</h2>
        <div className="products container">
          {popularProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
