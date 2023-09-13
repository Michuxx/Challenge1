import "./index.css";
import Desktopillu from "./images/illustration-sign-up-desktop.svg";
import Mobileillu from "./images/illustration-sign-up-mobile.svg";
import SucccessedApp from "./SuccessedApp";

import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function App() {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [userMail, setUserMail] = useState("");
  const [isMailValid, setIsMailValid] = useState(true);
  const [userMailFocus, setUserMailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const validateForm = () => {
    const result = EMAIL_REGEX.test(userMail);
    setIsMailValid(result);
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      navigate("/successedApp", { replace: true, state: {email:userMail}});
    }
  };

  return (
    <div className="container">
      <div className="news-box">
        <div className="information-panel">
          <h1>Stay updated!</h1> <br></br>
          <div className="text-box1">
            <p>Join 60,000 product menagers receiving monthly updates on:</p>
            <ul>
              <li>Product menagers receiving what matters</li>
              <li>measuring to ensure updates are a succcess</li>
              <li>And much more!</li>
            </ul>
          </div>
          <div className="text-box2">
            <div className="valid-text">
              <p className="mailText">Email address</p>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <p
                id="uidnote"
                className={!isMailValid ? "invalidMailText" : "offscreen"}
              >
                Valid mail required
              </p>
            </div>
            <div className="login-panel">
              <form>
                <input
                  type="text"
                  className={isMailValid ? "mail" : "invalidMail"}
                  placeholder="email@company.com"
                  ref={userRef}
                  autoComplete="off"
                  required
                  onChange={(e) => setUserMail(e.target.value)}
                  aria-invalid={isMailValid ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserMailFocus(true)}
                  onBlur={() => setUserMailFocus(false)}
                />
                <br /> <br />
                <button onClick={handleSubmit} className="subscribe-button">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="image-panel-desktop">
          <img src={Desktopillu} alt="" className="desktop" />
        </div>
        <div className="image-panel-mobile">
          <img src={Mobileillu} alt="" className="mobile" />
        </div>
      </div>
    </div>
  );
}

export default App;
