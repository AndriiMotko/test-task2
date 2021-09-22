import "./accounts.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Link,
} from "react-router-dom";

export default function Accounts() {
	return (
		<Router>
			<div className="acccounts">
				<h2>Your accounts</h2>

				<Link to="#" className="account">
						<div className="currency-icon euro">
							<span>€</span>
						</div>
						<p>Euro (EUR)</p>
						<span>€451.00</span>
				</Link>
				<Link to="#" className="account">
					
						<div className="currency-icon gbp">
							<span>£</span>
						</div>
						<p>British Sterling (GBP)</p>
						<span>£10.00</span>
					
				</Link>
				<Link to="#" className="account">
					
						<div className="currency-icon usd">
							<span>$</span>
						</div>
						<p>US Dollar (USD)</p>
						<span>$10234.20</span>
					
				</Link>
				<Link to="#" className="account">
					
						<div className="currency-icon krw">
							<span>₩</span>
						</div>
						<p>South Korea Won (KRW)</p>
						<span>₩0.00</span>
					
				</Link>
			</div>
            <Switch>
				<Route></Route>
			</Switch>
		</Router>
	);
}
