import "./index.css";
import Desktopillu from "./images/illustration-sign-up-desktop.svg";
import Mobileillu from "./images/illustration-sign-up-mobile.svg";


function App() {
  return (

    <div className="Container">
      <div className="News-box">
        <div className="Information-panel">
          <p1>Stay updated!</p1> <br></br>
          <div className="Text-box1">
            <p>Join 60,000 product menagers receiving monthly updates on:</p>
            <ul>
              <li>Product menagers receiving what matters</li>
              <li>measuring to ensure updates are a succcess</li>
              <li>And much more!</li>
            </ul>
          </div>
          <div className="Text-box2">
            <div className="valid-text">
              <p>Email address</p>
            </div>
            <div className="Login-panel">
              <form>
                <input
                  type="email"
                  className="mail"
                  placeholder="email@company.com"
                />
                <br /> <br />
                <button className="Subscribe-button">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="Image-panel-desktop"><img src={Desktopillu} alt="" className="Desktop"/></div>
        <div className="Image-panel-mobile"><img src={Mobileillu} alt=""  className="Mobile"/></div>
      </div>
    </div>
  );
}

export default App;

