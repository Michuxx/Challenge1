import "./SuccessedApp-Style.css";
import IconSuccessed from "./images/icon-success.svg";
import { useLocation, useNavigate } from "react-router-dom";

const SucccessedApp = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  console.log(state);

  const DissmissFunction = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="containerApp">
      <div className="newsBox-successed">
        <div className="successedPanel-image">
          <img src={IconSuccessed} alt="" />
        </div>
        <div className="topicTextPanel">
          <span>Thanks for subscribing!</span>
        </div>
        <div className="infoTextPanel">
          <span>
            A confirmation email has been sent to <b>{state.email}</b>. Please open it and
            click the button inside to confirm your subscription.
          </span>
        </div>
        <div className="buttonsPanel">
          <button className="dissmiss-btn" onClick={DissmissFunction}>
            {" "}
            Dissmiss message
          </button>
        </div>
      </div>
    </div>
  );
};
export default SucccessedApp;
