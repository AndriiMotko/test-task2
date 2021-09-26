import { Link } from "react-router-dom";
import "./requestSection.css";
import addCardIcon from "../../assets/icons/add_card_icon.svg";
import earnIcon from "../../assets/icons/earn_icon.svg";
import gotoIcon from "../../assets/icons/go_to.svg";

export default function RequestSection() {
	return (
		<div className="request-wrapp">
			<div className="request-card">
				<img src={addCardIcon} alt="" />
				<div className="request-info">
					<h2>Request a Card</h2>
					<span>Get a debit card for free</span>
				</div>
				<Link to="#">
					<img src={gotoIcon} alt="" />
				</Link>
			</div>
			<div className="request-card">
				<img src={earnIcon} alt="" />
				<div className="request-info">
					<h2>Earn £ 25 for free</h2>
					<span>Apply for pension</span>
				</div>
				<Link to="#">
					<img src={gotoIcon} alt="" />
				</Link>
			</div>
		</div>
	);
}
