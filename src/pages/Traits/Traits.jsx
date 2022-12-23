import { Link } from "react-router-dom";
import "./Traits.css";
import data from "./data";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Traits = () => {
  const [toggleSide, setToggleSide] = useState(false);
  return (
    <div className="container traits-wrapp">
      {toggleSide && (
        <div className="overlay" onClick={() => setToggleSide(false)} />
      )}
      {toggleSide ? (
        <AiOutlineClose
          className="menu-toggle"
          onClick={() => setToggleSide(false)}
        />
      ) : (
        <FiMenu className="menu-toggle" onClick={() => setToggleSide(true)} />
      )}
      <div className="traits-div">
        <div className={`traits-sidebar ${toggleSide ? "active-side" : ""}`}>
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
          <Link to={"/cluck"} className="btn-div">
            <img src="/my.png" alt="" className="btn-text" />
            <img src="/egg-btn.png" alt="" className="btn-bg" />
          </Link>
        </div>
        <div className="main-traits">
          <h2>Traits</h2>

          <div className="trait-box">
            <h3>Background Color</h3>
            <div className="trait-row">
              {data.bg.map((elem, idx) => {
                return (
                  <div key={idx + "trait"} className="trait">
                    <img src={elem.img} alt="" />
                    <p>{elem.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="trait-box">
            <h3>Clothing</h3>
            <div className="trait-row">
              {data.clothing.map((elem, idx) => {
                return (
                  <div key={idx + "trait"} className="trait">
                    <img src={elem.img} alt="" />
                    <p>{elem.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="trait-box">
            <h3>Chicken</h3>
            <div className="trait-row">
              {data.chicken.map((elem, idx) => {
                return (
                  <div key={idx + "trait"} className="trait">
                    <img src={elem.img} alt="" />
                    <p>{elem.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="trait-box">
            <h3>Face</h3>
            <div className="trait-row">
              {data.face.map((elem, idx) => {
                return (
                  <div key={idx + "trait"} className="trait">
                    <img src={elem.img} alt="" />
                    <p>{elem.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="trait-box">
            <h3>Hair</h3>
            <div className="trait-row">
              {data.hair.map((elem, idx) => {
                return (
                  <div key={idx + "trait"} className="trait">
                    <img src={elem.img} alt="" />
                    <p>{elem.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="trait-box">
            <h3>Face Color</h3>
            <div className="trait-row">
              {data.color.map((elem, idx) => {
                return (
                  <div key={idx + "trait"} className="trait">
                    <img src={elem.img} alt="" />
                    <p>{elem.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="trait-box">
            <h3>Shadow</h3>
            <div className="trait-row">
              {data.shadow.map((elem, idx) => {
                return (
                  <div key={idx + "trait"} className="trait">
                    <img src={elem.img} alt="" />
                    <p>{elem.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traits;
