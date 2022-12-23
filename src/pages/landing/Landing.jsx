import "./Landing.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Landing = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="container landing-wrapp">
      {menuToggle ? (
        <AiOutlineClose
          className="menu-toggle"
          onClick={() => setMenuToggle(false)}
        />
      ) : (
        <FiMenu className="menu-toggle" onClick={() => setMenuToggle(true)} />
      )}
      {/* <img src="/floating.png" className="bg" alt="" /> */}
      <img src="/egg1.png" alt="" className="floating egg1" />
      <img src="/egg2.png" alt="" className="floating egg2" />
      <img src="/egg3.png" alt="" className="floating egg3" />
      <img src="/egg4.png" alt="" className="floating egg4" />
      <img src="/egg5.png" alt="" className="floating egg5" />{" "}
      <div className={`left-btns ${menuToggle ? "active-side" : ""}`}>
        <Link to={"/"} className="btn-div">
          <img src="/deck.png" alt="" className="btn-bg deck" />
        </Link>
        <div className="btn-div">
          <img src="/cluckers.png" alt="" className="btn-text" />
          <img src="/egg-btn.png" alt="" className="btn-bg" />
        </div>
        <Link to={"/traits"} className="btn-div">
          <img src="/traits.png" alt="" className="btn-text" />
          <img src="/egg-btn.png" alt="" className="btn-bg" />
        </Link>
        <div className="btn-div">
          <img src="/my.png" alt="" className="btn-text" />
          <img src="/egg-btn.png" alt="" className="btn-bg" />
        </div>
      </div>
      <div className="landing-div">
        <div className="connect-div">
          <img src="/connect.png" alt="" className="connect-bg" />
          <img src="/connect-text.png" alt="" className="connect-text" />
        </div>
        <img src="/egg-bg.png" alt="" className="drippy" />
        <div className="center-landing">
          <img src="/logo.png" alt="" className="logo" />
          <img src="/genesis.png" alt="" className="genesis" />
          <div className="mint-wrapp">
            <div className="mint-div">
              <img src="/mint-text.png" alt="" className="mint-text" />
              <img src="/mint.png" alt="" className="mint-bg" />
            </div>
            <div className="mint-amount">
              <div className="calc-div">
                <p
                  onClick={() => {
                    setMintAmount((prev) => {
                      if (prev < 10) {
                        return prev + 1;
                      } else return prev;
                    });
                  }}
                >
                  +
                </p>
                <p
                  onClick={() => {
                    setMintAmount((prev) => {
                      if (prev > 1) {
                        return prev - 1;
                      }
                      return prev;
                    });
                  }}
                >
                  -
                </p>
              </div>
              <h3 className="amount">{mintAmount}</h3>
            </div>
          </div>

          <div className="chicken-div">
            <img src="/chick1.png" alt="" />
            <img src="/chick2.png" alt="" />
            <img src="/chick3.png" alt="" />
            <img src="/chick4.png" alt="" />
            <img src="/chick5.png" alt="" />
          </div>
        </div>
      </div>
      {menuToggle && (
        <div className="overlay" onClick={() => setMenuToggle(false)}></div>
      )}
    </div>
  );
};

export default Landing;
