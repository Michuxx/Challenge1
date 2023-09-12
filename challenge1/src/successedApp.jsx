import "./SuccessedApp-Style.css";
import IconSuccessed from "./images/icon-success.svg";
import { useNavigate } from "react-router-dom";

const SucccessedApp = () => {
  const navigate = useNavigate();

  const DissmissFunction = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="ContainerApp">
      <div className="NewsBox-successed">
        <div className="SuccessedPanel-image">
          <img src={IconSuccessed} alt="" />
        </div>
        <div className="TopicTextPanel">
          <span>Thanks for subscribing!</span>
        </div>
        <div className="InfoTextPanel">
          <span>
            A confirmation email has been sent to <b></b>. Please open it and
            click the button inside to confirm your subscription.
          </span>
        </div>
        <div className="ButtonsPanel">
          <button className="Dissmiss-btn" onClick={DissmissFunction}>
            {" "}
            Dissmiss message
          </button>
        </div>
      </div>
    </div>
  );
};
export default SucccessedApp;
