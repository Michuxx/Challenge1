import "./SuccessedApp-Style.css";
import IconSuccessed from "./images/icon-success.svg";

function SucccessedApp()
{
    return (
        <div className="Container">
            <div className="NewsBox-successed">
                <div className="SuccessedPanel">
                    <img src={IconSuccessed} alt="" />
                </div>
                <div className="TopicTextPanel">
                    <span>Thanks for subscribing!</span>
                </div>
                <div className="InfoTextPanel">
                    <span>
                        A confirmation email has been sent
                        to <b>ash@lorecompany.com</b>. 
                        Please open it and click the button
                        inside to confirm your subscription.
                    </span>
                </div>
                <div className="ButtonsPanel">
                    <button className="Dissmiss-btn"> Dissmiss message</button>
                </div>
            </div>
        </div>
    );
}
export default SucccessedApp;
