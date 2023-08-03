import "./index.css";
import { ReactComponent as Desktopillu } from "./images/illustration-sign-up-desktop.svg";
import { ReactComponent as IconList } from "./images/icon-list.svg";

function App() {
  return (
    <div className="Container">
      <div className="News-box">
        <div className="Information-panel">
          <p1>Stay updated!</p1> <br></br>
          <p>Join 60,000 product menagers receiving monthly updates on:</p>
          <ul>
            <li>Product menagers receiving what matters</li>
            <li>measuring to ensure updates are a succcess</li>
            <li>And much more!</li>
          </ul>
        </div>
        <div className="Image-panel">
          <Desktopillu className="Desktop" />
        </div>
      </div>
    </div>
  );
}

export default App;
