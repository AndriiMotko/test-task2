import { BrowserRouter as Router, Link } from "react-router-dom";
import "./account.css";

import topUpIcon from "../../assets/icons/top_up_icon.svg";
import sendMoneyIcon from "../../assets/icons/send_money_icon.svg";
import leoContact from "../../assets/img/leo.png";
import monikaContact from "../../assets/img/monica.png";
import checkIcon from "../../assets/icons/check_icon.svg";
import moneyIcon from "../../assets/icons/money_icon.svg";
import piggyBancIcon from "../../assets/icons/piggy-bank_icon.svg";
import shareToProfile1 from "../../assets/img/profile1.png";
import shareToProfile2 from "../../assets/img/profile2.png";
import shareToProfile3 from "../../assets/img/profile3.png";
import shareToMore from "../../assets/icons/more_profile_icon.svg";

export default function Account(data) {
	function getCurrency() {
		if (data.currency === "eur") {
			return "€";
		} else if (data.currency === "gbp") {
			return "£";
		} else if (data.currency === "usd") {
			return "$";
		} else if (data.currency === "krw") {
			return "₩";
		}
	}
	const currencySumbol = getCurrency();

	return (
		<Router>
			<div className="account-wrapp">
				<p>Balance</p>
				<div className="balance-wrapp">
					<h2>{`${currencySumbol}${data.balance.toFixed(2)}`}</h2>
					<Link to="#">
						<img src={topUpIcon} alt="top-up" />
						<span>Top up</span>
					</Link>
				</div>
				<p>Quick Transaction</p>
				<div className="quick-transition-wrapp">
					<a className="send-money" href="/send-money">
						<img src={sendMoneyIcon} alt="send money" />
						<span>Send Money</span>
					</a>
					<Link className="send-toContact" to="">
						<img src={leoContact} alt="Leo W." />
						<span>Leo W.</span>
					</Link>
					<Link className="send-toContact" to="">
						<img src={monikaContact} alt="Monica L." />
						<span>Monica L.</span>
					</Link>
				</div>
				<div className="acccount-info">
					<div className="account-info-section">
						<div>
							<img src={checkIcon} alt="check" />
							<span>Account Type:</span>
							<span>Personal</span>
						</div>
						<div>
							<img src={moneyIcon} alt="money" />
							<span>Currency</span>
							<span>{data.title}</span>
						</div>
					</div>
					<div className="account-info-section">
						<div>
							<img src={piggyBancIcon} alt="piggy bank" />
							<span>Passive Saving</span>
							<span>
								Enabled <strong>20%</strong>
							</span>
						</div>
						<div className="account-info-share">
							<span>Share Account</span>
							<div>
								<Link to="">
									<img src={shareToProfile1} alt="profile foto" />
								</Link>
								<Link to="">
									<img src={shareToProfile2} alt="profile foto" />
								</Link>
								<Link to="">
									<img src={shareToProfile3} alt="profile foto" />
								</Link>
								<Link to="">
									<img src={shareToMore} alt="share more" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}
