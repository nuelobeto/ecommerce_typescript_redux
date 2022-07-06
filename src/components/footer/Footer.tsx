import "./Footer.css";
import { GrFacebook, GrTwitter, GrInstagram } from "react-icons/gr";
import { FaCcMastercard } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer_one">
        <div className="container footer_one_content">
          <ul>
            <li>
              <GrFacebook style={{ color: "#4267B2" }} />
            </li>
            <li>
              <GrTwitter style={{ color: "#00acee" }} />
            </li>
            <li>
              <GrInstagram style={{ color: "#8a3ab9" }} />
            </li>
            <li>
              <FaCcMastercard style={{ color: "	#EB001B" }} />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_two">
        <div className="container footer_two_content">
          <ul>
            <li>
              <h4>© 2022 MRKT</h4>
            </li>
            <li className="terms">Privacy & Cookies | Ts&Cs | Accessibility</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
