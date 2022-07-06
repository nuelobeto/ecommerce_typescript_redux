import { createSearchParams, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BiSearchAlt2, BiHeart, BiCart } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { logout } from "../../features/user/userSlice";
import { useState, useEffect } from "react";
import SideNav from "../sideNav/SideNav";

function Navbar() {
  const user = useAppSelector((state) => state.user.user);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);
  const [showSideNav, setShowSideNav] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [name, setName] = useState("");
  const params = { q: name };

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate({
      pathname: "/search",
      search: `?${createSearchParams(params)}`,
    });

    setName("");
    setShowMobileSearch(false);
  };

  const totalItems = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity;
    });
    return total;
  };

  return (
    <>
      <nav>
        <div className="nav_content container">
          <div className="nav_content_one">
            {viewportWidth < 540 && (
              <>
                {!showSideNav ? (
                  <HiMenu
                    className="menu"
                    onClick={() => setShowSideNav(true)}
                  />
                ) : (
                  <IoMdClose
                    className="menu"
                    onClick={() => setShowSideNav(false)}
                  />
                )}
              </>
            )}
            <div className="logo" onClick={() => navigate("/")}>
              <h3>MRKT</h3>
            </div>
            {viewportWidth >= 540 && (
              <ul>
                <li>
                  <div className="dropdown">
                    <span className="dropbtn">Categories</span>
                    <div className="dropdown-content">
                      <Link to="/electronics">Electronics</Link>
                      <Link to="/men">Men</Link>
                      <Link to="/women">Women</Link>
                    </div>
                  </div>
                </li>
                <li onClick={() => navigate("/products")}>Products</li>
              </ul>
            )}
          </div>
          {viewportWidth >= 768 && (
            <div className="nav_content_two">
              <form className="search" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="search products..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">
                  <BiSearchAlt2 />
                </button>
              </form>
            </div>
          )}
          <div className="nav_content_three">
            <ul>
              {viewportWidth < 768 && (
                <li onClick={() => setShowMobileSearch(true)}>
                  <BiSearchAlt2 />
                </li>
              )}
              <li>
                {viewportWidth >= 420 ? (
                  <div className="auth">
                    {user.email ? (
                      <div className="user">
                        {user.email.charAt(0).toUpperCase()}
                      </div>
                    ) : (
                      <BiUserCircle className="no_user" />
                    )}
                    {user.email ? (
                      <button
                        onClick={() => dispatch(logout())}
                        className="logout_btn"
                      >
                        Logout
                      </button>
                    ) : (
                      <button onClick={() => navigate("/login")}>Login</button>
                    )}
                  </div>
                ) : (
                  <>
                    {user.email ? (
                      <div className="user" style={{ margin: "0" }}>
                        {user.email.charAt(0).toUpperCase()}
                      </div>
                    ) : (
                      <BiUserCircle />
                    )}
                  </>
                )}
              </li>
              <li onClick={() => navigate("/saved")}>
                <BiHeart />
              </li>
              <li onClick={() => navigate("/cart")}>
                <BiCart /> {totalItems()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showMobileSearch && (
        <div className="mobile_search">
          <IoMdClose
            className="close_mobile_form"
            onClick={() => setShowMobileSearch(false)}
          />
          <form className="mobile_form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </div>
      )}
      {showSideNav && (
        <SideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      )}
    </>
  );
}

export default Navbar;
