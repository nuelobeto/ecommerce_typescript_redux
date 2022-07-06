import "./SavedProducts.css";
import { useAppSelector } from "./../../app/hooks";
import SavedProduct from "./../../components/product/SavedProduct";
import { useEffect } from "react";

function SavedProducts() {
  const savedProducts = useAppSelector((state) => state.saved.saved);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="products_container">
        <h2>Saved Items: {savedProducts.length}</h2>
        <div className="products container">
          {savedProducts.map((product) => (
            <SavedProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedProducts;
