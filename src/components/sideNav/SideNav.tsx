import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/user/userSlice";
import "./SideNav.css";

type MobileNav = {
  showSideNav: boolean;
  setShowSideNav: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideNav(props: MobileNav) {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
    props.setShowSideNav(!props.showSideNav);
  };

  return (
    <div className="side_nav">
      <ul>
        <li onClick={() => handleNavigate("/electronics")}>Electronics</li>
        <li onClick={() => handleNavigate("/men")}>Men</li>
        <li onClick={() => handleNavigate("/women")}>Women</li>
        <li onClick={() => handleNavigate("/products")}>All Products</li>
        <li>
          {!user.email ? (
            <button onClick={() => handleNavigate("/login")}>Login</button>
          ) : (
            <button onClick={() => dispatch(logout())}>Logout</button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
