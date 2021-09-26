import AccountsToSend from "../AccountsToSend/AccountsToSend";
import "./sendMoneyPage.css";

import card from "../../assets/icons/card.svg";
import sendRedIcon from "../../assets/icons/send_money_icon.svg";

export default function SendMoneyPage(data) {
	return (
		<div className="send-money-page">
			<div>
				<div className="title">
					<img src={card} alt="card" />
					<h2>Send Money From:</h2>
				</div>
				{data && <AccountsToSend {...data} />}
			</div>
			<div className="send-money-form">
				<img src={sendRedIcon} alt="send" />
				<span>Send Money</span>
			</div>
		</div>
	);
}
