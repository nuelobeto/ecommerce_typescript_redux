import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AllProducts from "./pages/all products/AllProducts";
import Login from "./pages/auth/Login";
import Cart from "./pages/cart/Cart";
import Electronics from "./pages/electronics/Electronics";
import Home from "./pages/home/Home";
import Men from "./pages/men/Men";
import ProductDetails from "./pages/product details/ProductDetails";
import SavedProducts from "./pages/saved products/SavedProducts";
import Search from "./pages/search/Search";
import Women from "./pages/women/Women";

function Layout() {
  const { pathname } = useLocation();
  const pathExclusionArray = ["/login"];
  return (
    <>
      {pathExclusionArray.indexOf(pathname) < 0 && (
        <header>
          <Navbar />
        </header>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="search" element={<Search />} />
        <Route path="product-details/:productId" element={<ProductDetails />} />
        <Route path="saved" element={<SavedProducts />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
