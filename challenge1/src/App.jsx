import "./index.css";
import { ReactComponent as Desktopillu } from "./images/illustration-sign-up-desktop.svg";
import { ReactComponent as Mobileillu } from "./images/illustration-sign-up-mobile.svg";

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
              <input
                type="email"
                className="mail"
                placeholder="email@company.com"
              />
              <br /> <br />
              <button className="Subscripte-button">
                Subscripe to monthly newsletter
              </button>
            </div>
          </div>
        </div>
        <div className="Image-panel">{<Desktopillu className="Desktop" />}</div>
        <div className="Image-panel-mobile">{<Mobileillu />}</div>
      </div>
    </div>
  );
}

export default App;
