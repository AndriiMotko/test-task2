import "../Accounts/accounts.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default function AccountsToSend(data) {
	return (
		<Router>
			<div className="acccounts">
				<NavLink to="/eur" className="account" activeClassName="active">
					<div className="currency-icon euro">
						<span>€</span>
					</div>
					<p>{data["0"].title}</p>
					<span>{`€${data["0"].balance.toFixed(2)}`}</span>
				</NavLink>
				<NavLink to="/gbp" className="account" activeClassName="active">
					<div className="currency-icon gbp">
						<span>£</span>
					</div>
					<p>{data["1"].title}</p>
					<span>{`£${data["1"].balance.toFixed(2)}`}</span>
				</NavLink>
				<NavLink to="/usd" className="account" activeClassName="active">
					<div className="currency-icon usd">
						<span>$</span>
					</div>
					<p>{data["2"].title}</p>
					<span>{`$${data["2"].balance.toFixed(2)}`}</span>
				</NavLink>
				<NavLink to="/krw" className="account" activeClassName="active">
					<div className="currency-icon krw">
						<span>₩</span>
					</div>
					<p>{data["3"].title}</p>
					<span>{`₩${data["3"].balance.toFixed(2)}`}</span>
				</NavLink>
			</div>
		</Router>
	);
}
