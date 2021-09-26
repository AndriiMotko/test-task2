import Accounts from "../Accounts/Accounts";
import "./sendMoneyPage.css";

import card from "../../assets/icons/card.svg";
import sendRedIcon from "../../assets/icons/send_money_icon.svg";

export default function SendMoneyPage() {
	return (
		<div className="send-money-page">
			<div>
				<div className="title">
					<img src={card} alt="card" />
					<h2>Send Money From:</h2>
				</div>
				<Accounts />
			</div>
			<div className="send-money-form">
				<img src={sendRedIcon} alt="send" />
				<span>Send Money</span>
			</div>
		</div>
	);
}
