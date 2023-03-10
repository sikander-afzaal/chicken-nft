import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cluckerz.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Cluckerz = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="container cluckerz">
      {menuToggle ? (
        <AiOutlineClose
          className="menu-toggle"
          onClick={() => setMenuToggle(false)}
        />
      ) : (
        <FiMenu className="menu-toggle" onClick={() => setMenuToggle(true)} />
      )}
      <div className={`left-btns ${menuToggle ? "active-side" : ""}`}>
        <a href="#" className="btn-div">
          <img src="/deck.png" alt="" className="btn-bg deck" />
        </a>
        <Link to="/" className="btn-div">
          <img src="/cluckers.png" alt="" className="btn-text" />
          <img src="/egg-btn.png" alt="" className="btn-bg" />
        </Link>
        <Link to={"/traits"} className="btn-div">
          <img src="/traits.png" alt="" className="btn-text" />
          <img src="/egg-btn.png" alt="" className="btn-bg" />
        </Link>
        <Link to={"/cluck"} className="btn-div">
          <img src="/my.png" alt="" className="btn-text" />
          <img src="/egg-btn.png" alt="" className="btn-bg" />
        </Link>
      </div>
      <img src="/my-text.png" className="my-text" alt="" />
    </div>
  );
};

export default Cluckerz;
