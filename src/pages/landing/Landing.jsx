import "./Landing.css";

const Landing = () => {
  return (
    <div className="container landing-wrapp">
      {/* <img src="/floating.png" className="bg" alt="" /> */}
      <img src="/egg1.png" alt="" className="floating egg1" />
      <img src="/egg2.png" alt="" className="floating egg2" />
      <img src="/egg3.png" alt="" className="floating egg3" />
      <img src="/egg4.png" alt="" className="floating egg4" />
      <img src="/egg5.png" alt="" className="floating egg5" />
      <div className="landing-div">
        <div className="left-btns">
          <div className="btn-div">
            <img src="/deck.png" alt="" className="btn-bg deck" />
          </div>
          <div className="btn-div">
            <img src="/cluckers.png" alt="" className="btn-text" />
            <img src="/egg-btn.png" alt="" className="btn-bg" />
          </div>
          <div className="btn-div">
            <img src="/traits.png" alt="" className="btn-text" />
            <img src="/egg-btn.png" alt="" className="btn-bg" />
          </div>
          <div className="btn-div">
            <img src="/my.png" alt="" className="btn-text" />
            <img src="/egg-btn.png" alt="" className="btn-bg" />
          </div>
        </div>
        <div className="connect-div">
          <img src="/connect.png" alt="" className="connect-bg" />
          <img src="/connect-text.png" alt="" className="connect-text" />
        </div>
        <img src="/egg-bg.png" alt="" className="drippy" />
        <div className="center-landing">
          <img src="/logo.png" alt="" className="logo" />
          <img src="/genesis.png" alt="" className="genesis" />
          <div className="mint-div">
            <img src="/mint-text.png" alt="" className="mint-text" />
            <img src="/mint.png" alt="" className="mint-bg" />
          </div>
          <div className="left-btns">
            <div className="btn-div">
              <img src="/deck.png" alt="" className="btn-bg deck" />
            </div>
            <div className="btn-div">
              <img src="/cluckers.png" alt="" className="btn-text" />
              <img src="/egg-btn.png" alt="" className="btn-bg" />
            </div>
            <div className="btn-div">
              <img src="/traits.png" alt="" className="btn-text" />
              <img src="/egg-btn.png" alt="" className="btn-bg" />
            </div>
            <div className="btn-div">
              <img src="/my.png" alt="" className="btn-text" />
              <img src="/egg-btn.png" alt="" className="btn-bg" />
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
    </div>
  );
};

export default Landing;
