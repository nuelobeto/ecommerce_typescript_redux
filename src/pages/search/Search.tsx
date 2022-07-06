import "./Search.css";
import Product from "./../../components/product/Product";
import { useAppSelector } from "./../../app/hooks";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Search() {
  const products = useAppSelector((state) => state.products.products);
  const [searchParams] = useSearchParams();
  const queryString = searchParams.get("q");
  let productName: string;
  if (queryString) {
    productName = queryString;
  }
  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="products_container">
        {searchedProducts.length ? (
          <div className="products container">
            {searchedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <h2 style={{ textAlign: "center" }}>No items matched your search</h2>
        )}
      </section>
    </main>
  );
}

export default Search;
